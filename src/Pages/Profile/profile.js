import React from "react";
import "./profile.css";
import SideNavbar from "../../Component/SideNavbar/sideNavbar";
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { Link } from "react-router-dom";

const Profile = ({sideNavbar}) => {
  return (
    <div className="profile">
      <SideNavbar sideNavbar={sideNavbar}/>

      <div className={sideNavbar ?"profile_page":"profile_page_inactive"}>

        <div className="profile_top_section">
          <div className="profile_top_section_profile">
            <img src="https://yt3.googleusercontent.com/sIL3L5eee4sqgSMJgbx1daJkuwrm-cZ0qrJbjGgYbJJSk4VEpSh0w-kFqJl5-r3gikSBkOiY=s160-c-k-c0x00ffffff-no-rj" alt="" className="profile_top_section_img" />
          </div>
          <div className="profile_top_section_About">
            <div className="profile_top_section_About_Name">CodingHunger</div>
            <div className="profile_top_section_info">
              @user1 . 4 videos
            </div>
            <div className="profile_top_section_info">
              About Section of Channel
            </div>
          </div>
        </div>

        <div className="profile_videos">
          <div className="profile_videos_title">Videos &nbsp; <ArrowRightOutlinedIcon/></div>

          <div className="profileVideos">

            {/* ------------div for a video---------- */}

            <Link to={"/watch/8998"} className="profileVideo_block">
              <div className="profileVideo_block_thumbnail">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbZ1sJdLSi0m6BIbscbsxber8JafsVTrOSuQ&s" alt="" className="profileVideo_block_thumbnail_img" />
              </div>

              <div className="profileVideo_block_detail">
                <div className="profileVideo_block_detail_name">Video Title</div>
                <div className="profileVideo_block_detail_about">Create at 2025-09-04</div>
              </div>
            </Link>

            {/* ------------div for a video---------- */}

            <Link to={"/watch/8998"} className="profileVideo_block">
              <div className="profileVideo_block_thumbnail">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbZ1sJdLSi0m6BIbscbsxber8JafsVTrOSuQ&s" alt="" className="profileVideo_block_thumbnail_img" />
              </div>

              <div className="profileVideo_block_detail">
                <div className="profileVideo_block_detail_name">Video Title</div>
                <div className="profileVideo_block_detail_about">Create at 2025-09-04</div>
              </div>
            </Link>

            {/* ------------div for a video---------- */}

            <Link to={"/watch/8998"} className="profileVideo_block">
              <div className="profileVideo_block_thumbnail">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbZ1sJdLSi0m6BIbscbsxber8JafsVTrOSuQ&s" alt="" className="profileVideo_block_thumbnail_img" />
              </div>

              <div className="profileVideo_block_detail">
                <div className="profileVideo_block_detail_name">Video Title</div>
                <div className="profileVideo_block_detail_about">Create at 2025-09-04</div>
              </div>
            </Link>

            {/* ------------div for a video---------- */}

            <Link to={"/watch/8998"} className="profileVideo_block">
              <div className="profileVideo_block_thumbnail">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbZ1sJdLSi0m6BIbscbsxber8JafsVTrOSuQ&s" alt="" className="profileVideo_block_thumbnail_img" />
              </div>

              <div className="profileVideo_block_detail">
                <div className="profileVideo_block_detail_name">Video Title</div>
                <div className="profileVideo_block_detail_about">Create at 2025-09-04</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;