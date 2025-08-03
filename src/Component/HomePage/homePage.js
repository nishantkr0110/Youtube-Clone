import React from "react";
import "./homePage.css";
import { Link } from "react-router-dom";

const HomePage = ({sideNavbar}) => {

  const options = ["All","Cricket","FootBall","News","Gaming","Music","Coke Studio","Dicovery","Internshala","Live","Mixse","Comedy","Movies"];

  return (
    <div className={sideNavbar ? "homePage" : "fullHomePage"}>

      <div className="homePage_options">
        {
          options.map((item,index) => {
            return (
              <div key={index} className="homePage_option">
                {item}
              </div>
            );
          })
        }
      </div>

      <div className={sideNavbar ? "home_mainPage" : "home_mainPageWithoutLink"}>

        <Link to={"/watch/9897"} className="youtube_Video">

          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/oZ72uTWla5Q/maxresdefault.jpg" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">
              21:12
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.googleusercontent.com/sIL3L5eee4sqgSMJgbx1daJkuwrm-cZ0qrJbjGgYbJJSk4VEpSh0w-kFqJl5-r3gikSBkOiY=s160-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">Shankara Song || Rishabh Rikhiram Sharma</div>
              <div className="youtube_channelName">Rishabh moments</div>
              <div className="youtubeVideo_views">628 likes</div>
            </div>
          </div>


        </Link>

        <Link to={"/watch/9897"} className="youtube_Video">

          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/oZ72uTWla5Q/maxresdefault.jpg" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">
              21:12
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.googleusercontent.com/sIL3L5eee4sqgSMJgbx1daJkuwrm-cZ0qrJbjGgYbJJSk4VEpSh0w-kFqJl5-r3gikSBkOiY=s160-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">Shankara Song || Rishabh Rikhiram Sharma</div>
              <div className="youtube_channelName">Rishabh moments</div>
              <div className="youtubeVideo_views">628 likes</div>
            </div>
          </div>


        </Link>

        <Link to={"/watch/9897"} className="youtube_Video">

          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/oZ72uTWla5Q/maxresdefault.jpg" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">
              21:12
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.googleusercontent.com/sIL3L5eee4sqgSMJgbx1daJkuwrm-cZ0qrJbjGgYbJJSk4VEpSh0w-kFqJl5-r3gikSBkOiY=s160-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">Shankara Song || Rishabh Rikhiram Sharma</div>
              <div className="youtube_channelName">Rishabh moments</div>
              <div className="youtubeVideo_views">628 likes</div>
            </div>
          </div>


        </Link>

        <Link to={"/watch/9897"} className="youtube_Video">

          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/oZ72uTWla5Q/maxresdefault.jpg" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">
              21:12
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.googleusercontent.com/sIL3L5eee4sqgSMJgbx1daJkuwrm-cZ0qrJbjGgYbJJSk4VEpSh0w-kFqJl5-r3gikSBkOiY=s160-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">Shankara Song || Rishabh Rikhiram Sharma</div>
              <div className="youtube_channelName">Rishabh moments</div>
              <div className="youtubeVideo_views">628 likes</div>
            </div>
          </div>


        </Link>

        <Link to={"/watch/9897"} className="youtube_Video">

          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/oZ72uTWla5Q/maxresdefault.jpg" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">
              21:12
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.googleusercontent.com/sIL3L5eee4sqgSMJgbx1daJkuwrm-cZ0qrJbjGgYbJJSk4VEpSh0w-kFqJl5-r3gikSBkOiY=s160-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">Shankara Song || Rishabh Rikhiram Sharma</div>
              <div className="youtube_channelName">Rishabh moments</div>
              <div className="youtubeVideo_views">628 likes</div>
            </div>
          </div>


        </Link>

        <Link to={"/watch/9897"} className="youtube_Video">

          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/oZ72uTWla5Q/maxresdefault.jpg" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">
              21:12
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.googleusercontent.com/sIL3L5eee4sqgSMJgbx1daJkuwrm-cZ0qrJbjGgYbJJSk4VEpSh0w-kFqJl5-r3gikSBkOiY=s160-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">Shankara Song || Rishabh Rikhiram Sharma</div>
              <div className="youtube_channelName">Rishabh moments</div>
              <div className="youtubeVideo_views">628 likes</div>
            </div>
          </div>


        </Link>

        <Link to={"/watch/9897"} className="youtube_Video">

          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/oZ72uTWla5Q/maxresdefault.jpg" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">
              21:12
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.googleusercontent.com/sIL3L5eee4sqgSMJgbx1daJkuwrm-cZ0qrJbjGgYbJJSk4VEpSh0w-kFqJl5-r3gikSBkOiY=s160-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">Shankara Song || Rishabh Rikhiram Sharma</div>
              <div className="youtube_channelName">Rishabh moments</div>
              <div className="youtubeVideo_views">628 likes</div>
            </div>
          </div>


        </Link>

        <Link to={"/watch/9897"} className="youtube_Video">

          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/oZ72uTWla5Q/maxresdefault.jpg" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">
              21:12
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.googleusercontent.com/sIL3L5eee4sqgSMJgbx1daJkuwrm-cZ0qrJbjGgYbJJSk4VEpSh0w-kFqJl5-r3gikSBkOiY=s160-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">Shankara Song || Rishabh Rikhiram Sharma</div>
              <div className="youtube_channelName">Rishabh moments</div>
              <div className="youtubeVideo_views">628 likes</div>
            </div>
          </div>


        </Link>

      </div>

    </div>
  )
}

export default HomePage;