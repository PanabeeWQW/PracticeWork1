import React from 'react';
import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
    return (
        <input style={{marginTop: '20px'}} className={classes.Input} {...props} />
    );
});

export default Input;