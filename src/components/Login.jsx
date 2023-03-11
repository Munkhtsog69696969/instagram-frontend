import styles from "../css/Signup.module.css"
import { client } from "../config/client";
import { useNavigate } from "react-router"
import { useRef } from "react";

export const Login=()=>{
    const email=useRef();
    const password=useRef();
    const navigate=useNavigate();

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
                console.log(err);
            })

    }

    return(
        <div className={styles.container}>
            <div className={styles.signupContainer}>
                <div className={styles.bigText}>Login</div>

                <input placeholder="Enter email..." ref={email}/>

                <input placeholder="Enter password..." ref={password}/>

                <button onClick={Enter}>Enter</button>
            </div>
        </div>
    )
}