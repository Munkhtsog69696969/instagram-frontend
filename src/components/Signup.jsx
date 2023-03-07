import styles from "../css/Signup.module.css"
import { Link } from "react-router-dom"
import { client } from "../config/client"
import { useRef } from "react"
import { useNavigate } from "react-router"

export const Signup=()=>{
    const email=useRef("");
    const username=useRef("");
    const password=useRef("");
    const navigate=useNavigate();

    async function Create(){
        if(email.current.value!=="" && username.current.value!=="" && password.current.value!==""){
            await client.post("/signup",{email:email.current.value , password:password.current.value , username:username.current.value})
            .then(async(res)=>{
                console.log(res.data)
                navigate("/login")
            })
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.signupContainer}>
                <div className={styles.bigText}>Sign up</div>

                <input placeholder="Enter email..." ref={email}/>

                <input placeholder="Enter username..." ref={username}/>

                <input placeholder="Enter password..." ref={password}/>

                <button onClick={Create}>Create</button>

                <Link to="/login" className={styles.link}>Already have an account?</Link>
            </div> 
        </div>
    )   
}