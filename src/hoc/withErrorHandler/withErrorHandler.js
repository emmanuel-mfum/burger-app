import React, {Component} from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {

        constructor(props){
            super(props);

            this.state = {
                error:null // the error is initialized to null, but can be set to the error intercepted by axios (interceptors)
            }

            this.errorConfirmedHandler = this.errorConfirmedHandler.bind(this);
        }

      
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);

        }
        errorConfirmedHandler() {
            this.setState({error:null}); // when we click on the backdrop, we want it to close down, the error has to become null (aka false)
        }

        render(){

            this.reqInterceptor = axios.interceptors.request.use(req=> {
                this.setState({error:null}); // clears error property to null , whenver we send a request
                return req;
            });
            
            this.resInterceptor = axios.interceptors.response.use(res => res,error=>{
                this.setState({
                    error:error // set the error property to the error we are getting from Firebase
                });
            });

            return(
                <>
                  <Modal show={this.state.error}
                  modalClosed={this.errorConfirmedHandler}>
                      {this.state.error ? this.state.error.message : null}
                  </Modal>
                  <WrappedComponent {...this.props}/>
                </>
            );
        }
    }
}

export default withErrorHandler;