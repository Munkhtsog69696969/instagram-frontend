import styles from "../css/Home.module.css"
import { client } from "../config/client"
import {AiFillHome} from "react-icons/ai"
import {BsSearch} from "react-icons/bs"
import {MdOutlineExplore} from "react-icons/md"
import {TfiVideoClapper} from "react-icons/tfi"
import {BsFillSendFill} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
import {AiOutlinePlusSquare} from "react-icons/ai"
import { useEffect, useState } from "react"

export const Home=()=>{
    const [createPost,setCreatePost]=useState(false);
    const [nextCreatePost,setNextCreatePost]=useState(false);
    const [uploadImgs,setUploadImgs]=useState([]);

    function CreatePost(){
        setCreatePost(prev=>!prev)    
        setNextCreatePost(false)
    }

    function convertToBase64(event){
        console.log(event)
        var reader=new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload=()=>{
            // console.log(reader.result); //base64 encoded string
            setUploadImgs((imgs)=>[...imgs , reader.result])
        };
        reader.onerror=error=>{
            console.log("upload image error:",error);
        }
    }

    function uploadImg(){
        setNextCreatePost(prev=>!prev)
    }

    console.log(nextCreatePost)


    // console.log(createPost)

    // console.log(uploadImgs)

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
                            <div className={styles.leftSideTexts}>Search</div>
                        </div>

                        <div className={styles.leftListElement}>
                            <MdOutlineExplore className={styles.iconsCurrent}></MdOutlineExplore>
                            <div className={styles.leftSideTexts}>Explore</div>
                        </div>

                        <div className={styles.leftListElement}>
                            <TfiVideoClapper className={styles.iconsCurrent}></TfiVideoClapper>
                            <div className={styles.leftSideTexts}>Reels</div>
                        </div>

                        <div className={styles.leftListElement}>
                            <BsFillSendFill className={styles.iconsCurrent}></BsFillSendFill>
                            <div className={styles.leftSideTexts}>Messages</div>
                        </div>

                        <div className={styles.leftListElement}>
                            <AiOutlineHeart className={styles.iconsCurrent}></AiOutlineHeart>
                            <div className={styles.leftSideTexts}>Notifications</div>
                        </div>

                        <div className={styles.leftListElement} onClick={CreatePost}>
                            <AiOutlinePlusSquare className={styles.iconsCurrent}></AiOutlinePlusSquare>
                            <div className={styles.leftSideTexts}>Create</div>
                        </div>

                        <div className={styles.leftListElement}>
                            <AiOutlinePlusSquare className={styles.iconsCurrent}></AiOutlinePlusSquare>
                            <div className={styles.leftSideTexts}>Profile</div>
                        </div>


                    </div>
                </div>
            </div>

            <div className={nextCreatePost || createPost ? styles.createPostContainerVisible : styles.createPostContainerInvisible}>
                <div className={nextCreatePost ? styles.createPostInvisible :  createPost ? styles.createPostVisible : styles.createPostInvisible}>
                    <div className={styles.createPostImageContainer}>
                        <img className={styles.createPostImage} src="https://icons-for-free.com/iconfiles/png/512/cloud+upload+file+storage+upload+icon-1320190558968694328.png"/>
                        <div>Upload images</div>
                    </div>

                    <input className={styles.uploadImgInput} accept="image/*" type="file" onChange={convertToBase64}/>

                    <button className={styles.uploadImgBtn} onClick={uploadImg}>Done</button>

                    <div className={styles.uploadedImagesContainer}>
                        {
                            uploadImgs!=null && uploadImgs.map((src)=>{
                                return(
                                    <>
                                        <img className={styles.uploadedImage} src={src}/>
                                    </>
                                )
                            })
                        }
                    </div>

                </div>


                <div className={nextCreatePost ? styles.createPostNextContainerVisible : styles.createPostNextContainerInvisible}>
                    a
                </div>

            </div>

            <div className={createPost ? styles.exitCreatePostVisible : styles.exitCreatePostInvisible} onClick={CreatePost}>X</div>

        </div>
    )
}