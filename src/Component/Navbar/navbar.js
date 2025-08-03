import React, {useState} from "react";
import "./navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import YouTubeIcon from '@mui/icons-material/YouTube';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { Link, useNavigate } from "react-router-dom";
import Login from "../Login/login";

const Navbar = ({setSideNavbarFunc, sideNavbar}) => {
  const [userPic, setUserPic] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIs3peZbmHi0e-uTv4_RB4RWFfqEzE7BNNSg&s")
  const [navbarModal, setNavbarModal] = useState(false);
  const [login,setLogin] = useState(false);
  const navigate = useNavigate();

  const handleClickModal = () => {
    setNavbarModal(prev => !prev);
  }

  const sideNavbarFunc = () => {
    setSideNavbarFunc(!sideNavbar)
  }

  const handleProfile = () => {
    navigate("/user/7697");
    setNavbarModal(false);
  }

  const setLoginModal = () => {
    setLogin(false);
  }

  const onclickOfPopUpOption = (button) => {
    setNavbarModal(false);
    
    if(button==="login") {
      setLogin(true);
    }else{

    }
  }


  return (
    <div className="navbar">

      <div className="navbar-left">
        <div className="navbarHamberger" onClick={sideNavbarFunc}>
          <MenuIcon sx={{color:"white"}} />
        </div>

        <Link to={"/"} className="navbar_youtubeImg">
          <YouTubeIcon sx={{fontSize:"34px"}} className="navbar_youtubeImage"/>
          <div className="navbar_utubeTitle">YouTube</div>
        </Link>
      </div>

      <div className="navbar-middle">
        <div className="navbar_searchBox">
          <input type="text" placeholder="Search" className="navbar_searchBoxInput" />
          <div className="navbar_searchIconBox">
            <SearchIcon sx={{fontSize: "28px", color:"white"}}/>
          </div>
        </div>

        <div className="navbar_mike">
          <KeyboardVoiceIcon sx={{color:"white"}}/>
        </div>
      </div>

      <div className="navbar-right">

        <Link to={"/763/upload"}>
          <VideoCallIcon sx={{fontSize:"30px", cursor:"pointer", color:"white" }} />
        </Link>
        
        <NotificationsIcon sx={{fontSize:"30px", cursor:"pointer", color:"white" }}/>
        <img onClick={handleClickModal} src={userPic} className="navbar-right-logo" alt="logo" />
        
        { navbarModal &&
          <div className="navbar-modal">
            <div className="navbar-modal-option" onClick={handleProfile}>Profile</div>
            <div className="navbar-modal-option" onClick={()=>onclickOfPopUpOption("logout")}>Logout</div>
            <div className="navbar-modal-option" onClick={()=>onclickOfPopUpOption("login")}>Login</div>
          </div>
        }

      </div>

      {
        login && <Login setLoginModal={setLoginModal}/>
      }

    </div>
  )
};

export default Navbar;
