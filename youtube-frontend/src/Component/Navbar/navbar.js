import React, {useState, useEffect} from "react";
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
import axios from "axios";

const Navbar = ({setSideNavbarFunc, sideNavbar}) => {
  const [userPic, setUserPic] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIs3peZbmHi0e-uTv4_RB4RWFfqEzE7BNNSg&s"
  );
  const [navbarModal, setNavbarModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [login, setLogin] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const navigate = useNavigate();

  const handleClickModal = () => {
    setNavbarModal((prev) => !prev);
  };

  const sideNavbarFunc = () => {
    setSideNavbarFunc(!sideNavbar);
  };

  const handleProfile = () => {
    let userId = localStorage.getItem("userId");
    navigate(`/user/${userId}`);
    setNavbarModal(false);
  };

  const setLoginModal = () => {
    setLogin(false);
  };

  const onclickOfPopUpOption = (button) => {
    setNavbarModal(false);

    if (button === "login") {
      setLogin(true);
    } else {
      localStorage.clear();
      getLogoutFun();
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 1000);
    }
  };

  const getLogoutFun = async () => {
    axios
      .post("http://localhost:4000/auth/logout", {}, { withCredentials: true })
      .then((res) => {
        console.log("Logout");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSearch = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    navigate(`/search/${encodeURIComponent(q)}`);
  };

  useEffect(() => {
    let userProfilePic = localStorage.getItem("userProfilePic");
    setIsLogedIn(localStorage.getItem("userId") !== null ? true : false);
    if (userProfilePic !== null) {
      setUserPic(userProfilePic);
    }
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbarHamberger" onClick={sideNavbarFunc}>
          <MenuIcon sx={{ color: "white" }} />
        </div>

        <Link to={"/"} className="navbar_youtubeImg">
          <YouTubeIcon
            sx={{ fontSize: "34px" }}
            className="navbar_youtubeImage"
          />
          <div className="navbar_utubeTitle">YouTube</div>
        </Link>
      </div>

      <div className="navbar-middle">
        <form className="navbar_searchBox" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search"
            className="navbar_searchBoxInput"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
          />
          <div
            className="navbar_searchIconBox"
            onClick={handleSearch}
            style={{ cursor: "pointer" }}
          >
            <SearchIcon sx={{ fontSize: "28px", color: "white" }} />
          </div>
        </form>

        <div className="navbar_mike">
          <KeyboardVoiceIcon sx={{ color: "white" }} />
        </div>
      </div>

      <div className="navbar-right">
        <Link to={"/763/upload"}>
          <VideoCallIcon
            sx={{ fontSize: "30px", cursor: "pointer", color: "white" }}
          />
        </Link>

        <NotificationsIcon
          sx={{ fontSize: "30px", cursor: "pointer", color: "white" }}
        />
        <img
          onClick={handleClickModal}
          src={userPic}
          className="navbar-right-logo"
          alt="logo"
        />

        {navbarModal && (
          <div className="navbar-modal">
            {isLogedIn && (
              <div className="navbar-modal-option" onClick={handleProfile}>
                Profile
              </div>
            )}

            {isLogedIn && (
              <div
                className="navbar-modal-option"
                onClick={() => onclickOfPopUpOption("logout")}
              >
                Logout
              </div>
            )}
            {!isLogedIn && (
              <div
                className="navbar-modal-option"
                onClick={() => onclickOfPopUpOption("login")}
              >
                Login
              </div>
            )}
          </div>
        )}
      </div>

      {login && <Login setLoginModal={setLoginModal} />}
    </div>
  );
};

export default Navbar;
