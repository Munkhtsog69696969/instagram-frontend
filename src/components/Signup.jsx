import styles from "../css/Signup.module.css"
import { Link } from "react-router-dom"
import { client } from "../config/client"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router"
import {BiErrorAlt} from "react-icons/bi"

export const Signup=()=>{
    const email=useRef("");
    const username=useRef("");
    const password=useRef("");
    const confirmPassword=useRef();
    const navigate=useNavigate();
    const [errorMessage,setErrorMessage]=useState();

    const [errEmail,setErrEmail]=useState(false);
    const [errUsername,setErrUsername]=useState(false);
    const [errPassword,setErrPassword]=useState(false);
    const [errConfirmPassword,setErrConfirmPassword]=useState(false);

    async function Create(){
        const emailInput=email.current.value;
        const usernameInput=username.current.value;
        const passwordInput=password.current.value;
        const confirmPasswordInput=confirmPassword.current.value;

        await client.post("/signup",{email:emailInput , username:usernameInput , password:passwordInput , confirmPassword:confirmPasswordInput})
            .then(async(res)=>{
                if(res){
                    navigate("/login")
                }
            }).catch((err)=>{
                // console.log(err.response.data);
                setErrorMessage(err.response.data);
            })
    }
    console.log(errorMessage)

    useEffect(()=>{
        if(errorMessage=="Invalid email" || errorMessage=="Email in use"){
            setErrEmail(true);
        }else{
            setErrEmail(false)
        }

        if(errorMessage=="Username must be longer than 2 characters"){
            setErrUsername(true);
        }else{
            setErrUsername(false);
        }

        if(errorMessage=="Password must be longer than 6 characters"){
            setErrPassword(true);
        }else{
            setErrPassword(false)
        }

        if(errorMessage=="Passwords do not match"){
            setErrConfirmPassword(true)
        }else{
            setErrConfirmPassword(false)
        }
    },[errorMessage])

    // console.log("email:",errEmail);
    // console.log("username:",errUsername)
    // console.log("password:",errPassword)
    // console.log("confirmPassword:",errConfirmPassword)

    return(
        <div className={styles.container}>
            <div className={styles.signupContainer}>
                <div className={styles.bigText}>Sign up</div>

                <div className={styles.inputContainer}>
                    <input placeholder="Enter email..." ref={email}/>
                    <div className={styles.errorMessage}>
                        <BiErrorAlt className={errEmail ? styles.errorIconVisible : styles.errorIconInvisible}></BiErrorAlt>
                    </div>
                </div>
                
                <div className={styles.inputContainer}>
                    <input placeholder="Enter username..." ref={username}/>
                    <div className={styles.errorMessage}>
                        <BiErrorAlt className={errUsername ? styles.errorIconVisible : styles.errorIconInvisible}></BiErrorAlt>
                    </div>
                </div>

                <div className={styles.inputContainer}>
                    <input placeholder="Enter password..." ref={password}/>
                    <div className={styles.errorMessage}>
                        <BiErrorAlt className={errPassword ? styles.errorIconVisible : styles.errorIconInvisible}></BiErrorAlt>
                    </div>
                </div>

                <div className={styles.inputContainer}>
                    <input placeholder="Confirm password..." ref={confirmPassword}/>
                    <div className={styles.errorMessage}>
                        <BiErrorAlt className={errConfirmPassword ? styles.errorIconVisible : styles.errorIconInvisible}></BiErrorAlt>
                    </div>
                </div>

                <div className={styles.errorText}>{errorMessage}</div>

                <button onClick={Create}>Create</button>

                <Link to="/login" className={styles.link}>Already have an account?</Link>
            </div> 
        </div>
    )   
}