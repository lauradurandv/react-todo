import { useRef, useEffect } from "react";
import styles from "./InputWithLabel.module.css";
import PropTypes from "prop-types";

function InputWithLabel(props){
    //Deconstructors
    const {value, onChange, children} = props;

    //Ref Hook
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    })
    
    return(
        <>
            <div>
                <label htmlFor="todoTitle">{children}</label>
                <input 
                className={styles.InputBox}
                ref={inputRef} name="title" id="todoTitle" placeholder="Task" value={value} onChange={onChange}/>
            </div>
        </>
    )
}
InputWithLabel.propTypes ={
    value:PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}
export default InputWithLabel;