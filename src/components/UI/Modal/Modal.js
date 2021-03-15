import React, {Component} from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{
  // We used these lifecycles hooks in order to make sure that we don't unncessarily render the Order Summary.
  // To achieve that, we just converted the Model component into a class-based component iwth a Should Component update
  // which check to see if the state has indeed changed before updating.
  shouldComponentUpdate(nextProps, nextState){
          return nextProps.show !== this.props.show;
     
  }

  componentDidUpdate(){
    console.log("[Modal] did update");
  }


  render() {


    return(
       <>
          <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
          <div className={classes.Modal}
            style={{transform : this.props.show ? 'translateY(0)': 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
            }}>
            {this.props.children}
          </div>
       </>

    );


  };





} 

export default Modal;