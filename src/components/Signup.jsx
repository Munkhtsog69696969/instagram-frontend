import styles from "../css/Signup.module.css"
import { Link } from "react-router-dom"
import { client } from "../config/client"
import { useRef } from "react"
import { useNavigate } from "react-router"

export const Signup=()=>{
    const email=useRef("");
    const username=useRef("");
    const password=useRef("");
    const confirmPassword=useRef();
    const navigate=useNavigate();

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
                console.log(err);
            })
    }

    return(
        <div className={styles.container}>
            <div className={styles.signupContainer}>
                <div className={styles.bigText}>Sign up</div>

                <input placeholder="Enter email..." ref={email}/>

                <input placeholder="Enter username..." ref={username}/>

                <input placeholder="Enter password..." ref={password}/>

                <input placeholder="Confirm password..." ref={confirmPassword}/>

                <button onClick={Create}>Create</button>

                <Link to="/login" className={styles.link}>Already have an account?</Link>
            </div> 
        </div>
    )   
}