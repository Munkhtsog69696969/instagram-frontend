import styles from "../css/Home.module.css"
import { client } from "../config/client"
import {AiFillHome} from "react-icons/ai"
import {BsSearch} from "react-icons/bs"

export const Home=()=>{
    return(
        <div className={styles.container}>

            <div className={styles.leftSide}>
                <div className={styles.innerLeftSide}>

                    <div className={styles.logo1Container}>
                        <img className={styles.logo1} src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-text-black-png.png"/>
                    </div>

                    <div className={styles.leftLists}>

                        <div className={styles.leftListElement}>
                            <AiFillHome className={styles.iconsCurrent}></AiFillHome>
                            <div className={styles.leftSideTexts}>Home</div>
                        </div>

                        <div className={styles.leftListElement}>
                            <BsSearch className={styles.iconsCurrent}></BsSearch>
                            <div className={styles.leftSideTexts}>Home</div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}