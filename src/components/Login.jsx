import styles from "../css/Signup.module.css"
import { useNavigate } from "react-router"

export const Login=()=>{
    const navigate=useNavigate();

    async function Enter(){
        navigate("/home")
    }

    return(
        <div className={styles.container}>
            <div className={styles.signupContainer}>
                <div className={styles.bigText}>Login</div>

                <input placeholder="Enter email..."/>

                <input placeholder="Enter password..."/>

                <button onClick={Enter}>Enter</button>
            </div>
        </div>
    )
}