import React, { useState } from 'react'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { useAuth } from '../contexts/AuthContext'
import makeid from '../helper/functions';
import firebase from 'firebase';
import db from '../firebase';
import { storage } from '../firebase';


export default function CreatePost() {
    const [caption, setCaption] = useState("")
    const [image, setImage] = useState(null)
    const { currentUser } = useAuth()
    const [progress, setProgress] = useState(0)


    const handlechange = (e) => {
        if (e.target.files[0]){
            setImage(e.target.files[0])
            var selectedImageSrc = URL.createObjectURL(e.target.files[0]);
            var imagepreview = document.getElementById("imagepreview")
            imagepreview.src = selectedImageSrc;
            imagepreview.style.display = "block"
        }
    }
    const handleupload = () => {
        if(image){
            var imageName = makeid(10);
            const uploadTask = storage.ref(`images/${imageName}.jpg`).put(image);
            uploadTask.on("state_changed",(snapshot)=>{
                //progress function
                const progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                setProgress(progress);
            },(error) =>{
                console.log(error);
            },()=>{
                //get dowmload url and upload post info
                storage.ref("images").child(`${imageName}.jpg`).getDownloadURL().then((imageUrl) =>{
                    db.collection("posts")
                })
            })
        }
    }

    return (
        <div className="post">
            Post your achivements or any events announcements here
            <div className="textforpost">
                <textarea className="captionforpost" rows="3" placeholder="Enter Caption" value={caption} onChange={(e) => { setCaption(e.target.value) }}></textarea>
                <div className="postimagepreview">
                    <img id="imagepreview" alt="" />
                </div>
            </div>
            <div className="bottomofpost">
                <div className="postimageupload" >
                    <label htmlFor="fileinput">
                        <AddAPhotoIcon className="postimageupload" style={{ cursor: "pointer", fontSize: "20px" }} />
                    </label>
                    <input id="fileinput" type="file" accept="image/*" onChange={handlechange} />
                </div>
                <div>
                    <button className="postuploadbtn" onClick={handleupload} style={{ color: caption ? "#000" : "lightgray" }}>
                        upload
                    </button>
                </div>
            </div>
        </div>
    )
}
