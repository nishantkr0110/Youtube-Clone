import React from "react";
import "./sideNavbar.css";
import HomeIcon from '@mui/icons-material/Home';
import VideocamIcon from '@mui/icons-material/Videocam';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ContentCutIcon from '@mui/icons-material/ContentCut';

const SideNavbar = ({sideNavbar}) => {
  return (
    <div className={sideNavbar ? "home-sideNavbar":"homeSideNavbarHide"}>
      <div className="home_sideNavbarTop">
        <div className={`home_sideNavbarTopOption`}>
            <HomeIcon/>
            <div className="home_sideNavbarTopOptionTitle">Home</div>
        </div>

        <div className={`home_sideNavbarTopOption`}>
            <VideocamIcon/>
            <div className="home_sideNavbarTopOptionTitle">Shorts</div>
        </div>

        <div className={`home_sideNavbarTopOption`}>
            <SubscriptionsIcon/>
            <div className="home_sideNavbarTopOptionTitle">Subscription</div>
        </div>
      </div>

      <div className="home_sideNavbarMiddle">
        <div className={`home_sideNavbarTopOption`}>
            <div className="home_sideNavbarTopOptionTitle">You</div>
            <ChevronRightIcon/>
        </div>

        <div className={`home_sideNavbarTopOption`}>
            <RecentActorsIcon/>
            <div className="home_sideNavbarTopOptionTitle">Your Channel</div>
        </div>

        <div className={`home_sideNavbarTopOption`}>
            <HistoryIcon/>
            <div className="home_sideNavbarTopOptionTitle">History</div>
        </div>

        <div className={`home_sideNavbarTopOption`}>
            <PlaylistAddIcon/>
            <div className="home_sideNavbarTopOptionTitle">Playlist</div>
        </div>

        <div className={`home_sideNavbarTopOption`}>
            <SmartDisplayIcon/>
            <div className="home_sideNavbarTopOptionTitle">Your Videos</div>
        </div>

        <div className={`home_sideNavbarTopOption`}>
            <WatchLaterIcon/>
            <div className="home_sideNavbarTopOptionTitle">Watch later</div>
        </div>

        <div className={`home_sideNavbarTopOption`}>
            <ThumbUpOffAltIcon/>
            <div className="home_sideNavbarTopOptionTitle">Liked videos </div>
        </div>

        <div className={`home_sideNavbarTopOption`}>
            <ContentCutIcon/>
            <div className="home_sideNavbarTopOptionTitle">Your clips</div>
        </div>

      </div>

      <div className="home_sideNavbarMiddle">
        <div className="home_sideNavbarTopOption">
            <div className="home_sideNavbarTopOptionTitleHeader">Subscription</div>
        </div>

         <div className="home_sideNavbarTopOption">
            <img className="home_sideNavbar_ImgLogo" src="https://pimwp.s3-accelerate.amazonaws.com/2022/07/aajtak001-768x512.jpg" alt="Aaj Tak Logo"/>
            <div className="home_sideNavbarTopOptionTitle">Aaj Tak</div>
        </div>

        <div className="home_sideNavbarTopOption">
            <img className="home_sideNavbar_ImgLogo" src="https://cdn6.aptoide.com/imgs/1/f/7/1f755c7eaf2d189ffe53f46974a0ea95_icon.png" alt="The Lallan Top"/>
            <div className="home_sideNavbarTopOptionTitle">The LallanTop</div>
        </div>

        <div className="home_sideNavbarTopOption">
            <img className="home_sideNavbar_ImgLogo" src="https://i.pinimg.com/736x/94/7e/40/947e405ff7b832e61e4c1de5913f51a3.jpg" alt="NDTV Logo"/>
            <div className="home_sideNavbarTopOptionTitle">NDTV India</div>
        </div>
      </div>
    </div>
  )
}

export default SideNavbar