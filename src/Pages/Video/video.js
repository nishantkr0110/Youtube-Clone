import React,{useState} from "react";
import "./video.css";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { Link } from "react-router-dom";

const Video = () => {
  const [message,setMessage] = useState("");
  return (
    <div className="video">
      <div className="videoPostSection">
        <div className="video_youtube">
          <video width="400" controls autoPlay className="video_youtube_video">

            <source src={"https://www.w3schools.com/html/mov_bbb.mp4"} type="video/mp4"/>
            <source src={"https://www.w3schools.com/html/mov_bbb.mp4"} type="video/webm"/>
            
            Your browser doesnot support the video tag
          </video>

        </div>

        <div className="video_youtubeAbout">
          <div className="video_uTubeTitle">{"RabbitXButterfly"}</div>

          <div className="youtube_video_ProfileBlock">
            <div className="youtube_video_ProfileBlock_left">
              <Link to={"/user/7868"} className="youtube_video_ProfileBlock_left_img">
                <img className="youtube_video_ProfileBlock_left_image" src={"https://yt3.googleusercontent.com/sIL3L5eee4sqgSMJgbx1daJkuwrm-cZ0qrJbjGgYbJJSk4VEpSh0w-kFqJl5-r3gikSBkOiY=s160-c-k-c0x00ffffff-no-rj"} alt=""/>
              </Link>
              <div className="youtubeVideo_subsView">
                <div className="youtubePostProfileName">{"User1"}</div>
                <div className="youtubePostProfileSubs">{"2025-07-09"}</div>
              </div>
              <div className="subscribeBtnYoutube">Subscribe</div>
            </div>

            <div className="youtube_video_likeBlock">
              <div className="youtube_video_likeBlock_Like">
                <ThumbUpOutlinedIcon/>
                <div className="youtube_video_likeBlock_NoOfLikes">{40}</div>
              </div>
              <div className="youtubeVideoDivider"></div>

              <div className="youtube_video_likeBlock_Like">
                <ThumbDownAltOutlinedIcon/>
              </div>
            </div>
          </div>

          <div className="youtube_video_About">
            <div>2025-09-07</div>
            <div>This clone is made for practice.</div>
          </div>
        </div>

        <div className="youtubeCommentSection">
          <div className="youtubeCommentSectionTitle">5Comments</div>

          <div className="youtubeSelfComment">
            <img className="video_youtubeSelfCommentProfile" src="https://yt3.googleusercontent.com/sIL3L5eee4sqgSMJgbx1daJkuwrm-cZ0qrJbjGgYbJJSk4VEpSh0w-kFqJl5-r3gikSBkOiY=s160-c-k-c0x00ffffff-no-rj" alt="" />
            <div className="addAComment">
              <input type="text" value={message} onChange={(e)=>{setMessage(e.target.value)}} className="addACommentInput" placeholder="Add a comment"/>
              <div className="cancelSubmitComment">
                <div className="cancelComment">Cancel</div>
                <div className="cancelComment">Comment</div>
              </div>
            </div>
          </div>

          <div className="youtubeOthersComments">

            <div className="youtubeSelfComment">
               <img className="video_youtubeSelfCommentProfile" src="https://yt3.googleusercontent.com/sIL3L5eee4sqgSMJgbx1daJkuwrm-cZ0qrJbjGgYbJJSk4VEpSh0w-kFqJl5-r3gikSBkOiY=s160-c-k-c0x00ffffff-no-rj" alt=""/>
               <div className="others_commentSection">
                <div className="others_commentSectionHeader">
                  <div className="channelName_comment">User Name</div>
                  <div className="commentTimingOthers">2025-09-07</div>
                </div>

                <div className="otherCommentSectionComment">
                  This is the cool web project.
                </div>
               </div>

            </div>

            <div className="youtubeSelfComment">
               <img className="video_youtubeSelfCommentProfile" src="https://yt3.googleusercontent.com/sIL3L5eee4sqgSMJgbx1daJkuwrm-cZ0qrJbjGgYbJJSk4VEpSh0w-kFqJl5-r3gikSBkOiY=s160-c-k-c0x00ffffff-no-rj" alt="" />
               <div className="others_commentSection">
                <div className="others_commentSectionHeader">
                  <div className="channelName_comment">User Name</div>
                  <div className="commentTimingOthers">2025-09-07</div>
                </div>

                <div className="otherCommentSectionComment">
                  This is the cool web project.
                </div>
               </div>

            </div>

            <div className="youtubeSelfComment">
               <img className="video_youtubeSelfCommentProfile" src="https://yt3.googleusercontent.com/sIL3L5eee4sqgSMJgbx1daJkuwrm-cZ0qrJbjGgYbJJSk4VEpSh0w-kFqJl5-r3gikSBkOiY=s160-c-k-c0x00ffffff-no-rj" alt="" />
               <div className="others_commentSection">
                <div className="others_commentSectionHeader">
                  <div className="channelName_comment">User Name</div>
                  <div className="commentTimingOthers">2025-09-07</div>
                </div>

                <div className="otherCommentSectionComment">
                  This is the cool web project.
                </div>
               </div>

            </div>

            <div className="youtubeSelfComment">
               <img className="video_youtubeSelfCommentProfile" src="https://yt3.googleusercontent.com/sIL3L5eee4sqgSMJgbx1daJkuwrm-cZ0qrJbjGgYbJJSk4VEpSh0w-kFqJl5-r3gikSBkOiY=s160-c-k-c0x00ffffff-no-rj" alt="" />
               <div className="others_commentSection">
                <div className="others_commentSectionHeader">
                  <div className="channelName_comment">User Name</div>
                  <div className="commentTimingOthers">2025-09-07</div>
                </div>

                <div className="otherCommentSectionComment">
                  This is the cool web project.
                </div>
               </div>

            </div>

          </div>
        </div>
      </div>

      <div className="videoSuggestions">

        <div className="videoSuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmOkDJYVHZrYIhyz5XM1pf8AF4aLao6aB2uQ&s" alt="" className="video_suggestion_thumbnail_img"/>
          </div>
          <div className="video_suggestions_About">
            <div className="video_suggestions_About_title">Chasing fighter Car X Clash Video </div>
            <div className="video_suggestions_About_Profile">Car Games</div>
            <div className="video_suggestions_About_Profile">136K views . 1 day ago</div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmOkDJYVHZrYIhyz5XM1pf8AF4aLao6aB2uQ&s" alt="" className="video_suggestion_thumbnail_img"/>
          </div>
          <div className="video_suggestions_About">
            <div className="video_suggestions_About_title">Chasing fighter Car X Clash Video </div>
            <div className="video_suggestions_About_Profile">Car Games</div>
            <div className="video_suggestions_About_Profile">136K views . 1 day ago</div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmOkDJYVHZrYIhyz5XM1pf8AF4aLao6aB2uQ&s" alt="" className="video_suggestion_thumbnail_img"/>
          </div>
          <div className="video_suggestions_About">
            <div className="video_suggestions_About_title">Chasing fighter Car X Clash Video </div>
            <div className="video_suggestions_About_Profile">Car Games</div>
            <div className="video_suggestions_About_Profile">136K views . 1 day ago</div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmOkDJYVHZrYIhyz5XM1pf8AF4aLao6aB2uQ&s" alt="" className="video_suggestion_thumbnail_img"/>
          </div>
          <div className="video_suggestions_About">
            <div className="video_suggestions_About_title">Chasing fighter Car X Clash Video </div>
            <div className="video_suggestions_About_Profile">Car Games</div>
            <div className="video_suggestions_About_Profile">136K views . 1 day ago</div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmOkDJYVHZrYIhyz5XM1pf8AF4aLao6aB2uQ&s" alt="" className="video_suggestion_thumbnail_img"/>
          </div>
          <div className="video_suggestions_About">
            <div className="video_suggestions_About_title">Chasing fighter Car X Clash Video </div>
            <div className="video_suggestions_About_Profile">Car Games</div>
            <div className="video_suggestions_About_Profile">136K views . 1 day ago</div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmOkDJYVHZrYIhyz5XM1pf8AF4aLao6aB2uQ&s" alt="" className="video_suggestion_thumbnail_img"/>
          </div>
          <div className="video_suggestions_About">
            <div className="video_suggestions_About_title">Chasing fighter Car X Clash Video </div>
            <div className="video_suggestions_About_Profile">Car Games</div>
            <div className="video_suggestions_About_Profile">136K views . 1 day ago</div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmOkDJYVHZrYIhyz5XM1pf8AF4aLao6aB2uQ&s" alt="" className="video_suggestion_thumbnail_img"/>
          </div>
          <div className="video_suggestions_About">
            <div className="video_suggestions_About_title">Chasing fighter Car X Clash Video </div>
            <div className="video_suggestions_About_Profile">Car Games</div>
            <div className="video_suggestions_About_Profile">136K views . 1 day ago</div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmOkDJYVHZrYIhyz5XM1pf8AF4aLao6aB2uQ&s" alt="" className="video_suggestion_thumbnail_img"/>
          </div>
          <div className="video_suggestions_About">
            <div className="video_suggestions_About_title">Chasing fighter Car X Clash Video </div>
            <div className="video_suggestions_About_Profile">Car Games</div>
            <div className="video_suggestions_About_Profile">136K views . 1 day ago</div>
          </div>
        </div>
      </div>    

    </div>
  )
}

export default Video;