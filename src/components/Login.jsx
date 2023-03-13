import styles from "../css/Signup.module.css"
import { client } from "../config/client";
import { useNavigate } from "react-router"
import { useEffect, useRef, useState } from "react";
import {BiErrorAlt} from "react-icons/bi"

export const Login=()=>{
    const email=useRef();
    const password=useRef();
    const navigate=useNavigate();

    const [errorMessage,setErrorMessage]=useState();

    const [errEmail,setErrEmail]=useState(false);
    const [errPassword,setErrPassword]=useState(false);

    async function Enter(){
        const emailInput=email.current.value;
        const passwordInput=password.current.value;

        await client.post("/login",{email:emailInput , password:passwordInput})
            .then(async(res)=>{
                // console.log(res.data)
                if(res){
                    localStorage.setItem("token",res.data);
                    navigate("/home")
                }
            }).catch((err)=>{
                // console.log(err.response.data);

                setErrorMessage(err.response.data);
            })

    }

    useEffect(()=>{
        if(errorMessage=="Couldnt find user"){
            setErrEmail(true)
        }else{
            setErrEmail(false)
        }

        if(errorMessage=="Password wrong"){
            setErrPassword(true)
        }else{
            setErrPassword(false)
        }
    },[errorMessage])

    return(
        <div className={styles.container}>
            <div className={styles.signupContainer}>
                <div className={styles.bigText}>Login</div>

                <div className={styles.inputContainer}>
                    <input placeholder="Enter email..." ref={email}/>
                    <div className={styles.errorMessage}>
                        <BiErrorAlt className={errEmail ? styles.errorIconVisible : styles.errorIconInvisible}></BiErrorAlt>
                    </div>
                </div>

                <div className={styles.inputContainer}>
                    <input placeholder="Enter password..." ref={password}/>
                    <div className={styles.errorMessage}>
                        <BiErrorAlt className={errPassword ? styles.errorIconVisible : styles.errorIconInvisible}></BiErrorAlt>
                    </div>
                </div>

                <button onClick={Enter}>Enter</button>

                <div className={styles.errorText}>
                    {errorMessage}
                </div>
            </div>
        </div>
    )
}