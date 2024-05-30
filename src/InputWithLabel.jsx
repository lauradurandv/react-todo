import { useRef, useEffect } from "react";
import styles from "./InputWithLabel.module.css";

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
            <label htmlFor="todoTitle">{children}</label>
            <input 
            className={styles.InputBox}
            ref={inputRef} name="title" id="todoTitle" placeholder="Task" value={value} onChange={onChange}/>
        </>
    )
}
export default InputWithLabel;