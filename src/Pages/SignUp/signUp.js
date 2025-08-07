import React, {useState} from "react";
import "./signUp.css";
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";
import axios from 'axios';

const SignUp  = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState("https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg")
  const [signUpField, setSignUpField] = useState({"channelName":"","userName":"","password":"","about":"","profilePic":uploadedImageUrl});
  
  const handleInputField = (event,name) => {
    setSignUpField({
      ...signUpField,[name]:event.target.value
    })
  }

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file',files[0]);
    // youtube-clone
    data.append('upload_preset','youtube-clone');
    try {
      // cloudName = "dvriq94qs"
      const response = await axios.post("https://api.cloudinary.com/v1_1/dvriq94qs/image/upload",data);
      const imageUrl = response.data.url;
      setUploadedImageUrl(imageUrl);
    }catch(err) {
      console.log(err)
    }
  }


  return (
    <div className="signUp">
      <div className="signup_card">
        <div className="signUp_title">
          <YouTubeIcon sx={{fontSize:"54px"}} className="login_youtubeImage"/>
          SignUp
        </div>

        <div className="signUp_Inputs">
          <input type="text" placeholder="Channel Name" className="signUp_Inputs_inp" value={signUpField.channelName} onChange={(e) => {handleInputField(e,"channelName")}} />
          <input type="text" placeholder="User Name" className="signUp_Inputs_inp" value={signUpField.userName} onChange={(e) => {handleInputField(e,"userName")}} />
          <input type="password" placeholder="Password" className="signUp_Inputs_inp" value={signUpField.password}
          onChange={(e) => {handleInputField(e,"password")}} />
          <input type="text" placeholder="About Your Channel" className="signUp_Inputs_inp" value={signUpField.about} onChange={(e) => {handleInputField(e,"about")}} />

          <div className="image_upload_signup">
            <input type="file" onChange={(e)=>uploadImage(e)} />
            <div className="image_upload_signup_div">
              <img src={uploadedImageUrl} alt="" className="image_default_signUp" />
            </div>
          </div>

          <div className="signUpBtns">
            <div className="signUpBtn">SignUp</div>
            <Link to={"/"} className="signUpBtn">Home Page</Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SignUp;