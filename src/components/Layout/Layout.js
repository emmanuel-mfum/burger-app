import React from 'react';
//import Aux from '../../hoc/Auxillary';
import classes  from './Layout.module.css';


const layout = (props) => (

    <>

      <div>Toolbar, Side Drawer , Backdrop</div>

        <main className={classes.Content}> 
            {props.children}

        </main>

        
    </>

    
);

export default layout;