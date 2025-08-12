import React, { useState, useEffect } from "react";
import "./video.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import {toast, ToastContainer} from 'react-toastify';

const Video = () => {
  const [message, setMessage] = useState("");
  const [data, setData] = useState(null);
  const [videoUrl, setVideoURL] = useState("");
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  const fetchVideoById = async () => {
    await axios
      .get(`http://localhost:4000/api/getVideoById/${id}`)
      .then((response) => {
        console.log(response.data.video);
        setData(response.data.video);
        setVideoURL(response?.data?.video?.videoLink);
      }).catch(err => {
        console.log(err);
      });
  };
  const getCommentByVideoId = async() => {
    await axios
      .get(`http://localhost:4000/commentApi/comment/${id}`)
      .then((response) => {
        console.log(response);
        setComments(response.data.comments)
      }).catch(err => {
        console.log(err);
      });
  }
  useEffect(() => {
    fetchVideoById();
    getCommentByVideoId();
  }, [])

  const handleComment = async() => {
    const body = {
      "message" : message,
      "video" : id
    }
    await axios.post('http://localhost:4000/commentApi/comment',body, {withCredentials : true}).then((resp) => {
      console.log(resp)
      const newComment = resp.data.comment;
      setComments([newComment,...comments]);
      setMessage("")
    }).catch(err => {
      toast.error("Please Login First")
    })
  }

  return (
    <div className="video">
      <div className="videoPostSection">
        <div className="video_youtube">
          {data && (
            <video
              width="400"
              controls
              autoPlay
              className="video_youtube_video"
            >
              <source src={videoUrl} type="video/mp4" />
              <source src={videoUrl} type="video/webm" />
              Your browser doesnot support the video tag
            </video>
          )}
        </div>

        <div className="video_youtubeAbout">
          <div className="video_uTubeTitle">{data?.title}</div>

          <div className="youtube_video_ProfileBlock">
            <div className="youtube_video_ProfileBlock_left">
              <Link
                to={`/user/${data?.user?._id}`}
                className="youtube_video_ProfileBlock_left_img"
              >
                <img
                  className="youtube_video_ProfileBlock_left_image"
                  src={data?.user?.profilePic}
                  alt=""
                />
              </Link>
              <div className="youtubeVideo_subsView">
                <div className="youtubePostProfileName">{data?.user?.channelName}</div>
                <div className="youtubePostProfileSubs">{data?.user?.createdAt.slice(0,10)}</div>
              </div>
              <div className="subscribeBtnYoutube">Subscribe</div>
            </div>

            <div className="youtube_video_likeBlock">
              <div className="youtube_video_likeBlock_Like">
                <ThumbUpOutlinedIcon />
                <div className="youtube_video_likeBlock_NoOfLikes">{data?.like}</div>
              </div>
              <div className="youtubeVideoDivider"></div>

              <div className="youtube_video_likeBlock_Like">
                <ThumbDownAltOutlinedIcon />
              </div>
            </div>
          </div>

          <div className="youtube_video_About">
            <div>{data?.createdAt.slice(0,10)}</div>
            <div>{data?.description}</div>
          </div>
        </div>

        <div className="youtubeCommentSection">
          <div className="youtubeCommentSectionTitle">{comments.length} Comments</div>

          <div className="youtubeSelfComment">
            <img
              className="video_youtubeSelfCommentProfile"
              src="https://yt3.googleusercontent.com/sIL3L5eee4sqgSMJgbx1daJkuwrm-cZ0qrJbjGgYbJJSk4VEpSh0w-kFqJl5-r3gikSBkOiY=s160-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            <div className="addAComment">
              <input
                type="text"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="addACommentInput"
                placeholder="Add a comment"
              />
              <div className="cancelSubmitComment">
                <div className="cancelComment">Cancel</div>
                <div className="cancelComment" onClick={handleComment}>Comment</div>
              </div>
            </div>
          </div>

          
        </div>
      </div>

      <div className="videoSuggestions">
        <div className="videoSuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmOkDJYVHZrYIhyz5XM1pf8AF4aLao6aB2uQ&s"
              alt=""
              className="video_suggestion_thumbnail_img"
            />
          </div>
          <div className="video_suggestions_About">
            <div className="video_suggestions_About_title">
              Chasing fighter Car X Clash Video{" "}
            </div>
            <div className="video_suggestions_About_Profile">Car Games</div>
            <div className="video_suggestions_About_Profile">
              136K views . 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmOkDJYVHZrYIhyz5XM1pf8AF4aLao6aB2uQ&s"
              alt=""
              className="video_suggestion_thumbnail_img"
            />
          </div>
          <div className="video_suggestions_About">
            <div className="video_suggestions_About_title">
              Chasing fighter Car X Clash Video{" "}
            </div>
            <div className="video_suggestions_About_Profile">Car Games</div>
            <div className="video_suggestions_About_Profile">
              136K views . 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmOkDJYVHZrYIhyz5XM1pf8AF4aLao6aB2uQ&s"
              alt=""
              className="video_suggestion_thumbnail_img"
            />
          </div>
          <div className="video_suggestions_About">
            <div className="video_suggestions_About_title">
              Chasing fighter Car X Clash Video{" "}
            </div>
            <div className="video_suggestions_About_Profile">Car Games</div>
            <div className="video_suggestions_About_Profile">
              136K views . 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmOkDJYVHZrYIhyz5XM1pf8AF4aLao6aB2uQ&s"
              alt=""
              className="video_suggestion_thumbnail_img"
            />
          </div>
          <div className="video_suggestions_About">
            <div className="video_suggestions_About_title">
              Chasing fighter Car X Clash Video{" "}
            </div>
            <div className="video_suggestions_About_Profile">Car Games</div>
            <div className="video_suggestions_About_Profile">
              136K views . 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmOkDJYVHZrYIhyz5XM1pf8AF4aLao6aB2uQ&s"
              alt=""
              className="video_suggestion_thumbnail_img"
            />
          </div>
          <div className="video_suggestions_About">
            <div className="video_suggestions_About_title">
              Chasing fighter Car X Clash Video{" "}
            </div>
            <div className="video_suggestions_About_Profile">Car Games</div>
            <div className="video_suggestions_About_Profile">
              136K views . 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmOkDJYVHZrYIhyz5XM1pf8AF4aLao6aB2uQ&s"
              alt=""
              className="video_suggestion_thumbnail_img"
            />
          </div>
          <div className="video_suggestions_About">
            <div className="video_suggestions_About_title">
              Chasing fighter Car X Clash Video{" "}
            </div>
            <div className="video_suggestions_About_Profile">Car Games</div>
            <div className="video_suggestions_About_Profile">
              136K views . 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmOkDJYVHZrYIhyz5XM1pf8AF4aLao6aB2uQ&s"
              alt=""
              className="video_suggestion_thumbnail_img"
            />
          </div>
          <div className="video_suggestions_About">
            <div className="video_suggestions_About_title">
              Chasing fighter Car X Clash Video{" "}
            </div>
            <div className="video_suggestions_About_Profile">Car Games</div>
            <div className="video_suggestions_About_Profile">
              136K views . 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmOkDJYVHZrYIhyz5XM1pf8AF4aLao6aB2uQ&s"
              alt=""
              className="video_suggestion_thumbnail_img"
            />
          </div>
          <div className="video_suggestions_About">
            <div className="video_suggestions_About_title">
              Chasing fighter Car X Clash Video{" "}
            </div>
            <div className="video_suggestions_About_Profile">Car Games</div>
            <div className="video_suggestions_About_Profile">
              136K views . 1 day ago
            </div>
          </div>
        </div>
      </div>

      <ToastContainer/>

    </div>
  )
}

export default Video;
