import React, { useEffect, useState } from "react";
import './searchResult.css';
import { useParams, Link } from "react-router-dom";
import axios from "axios";


const SearchResults = () => {
  const { query } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearch = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:4000/api/search?title=${encodeURIComponent(query)}`);
        const data = res.data.videos || res.data;
        setVideos(data || []);
      } catch (err) {
        console.error("Search API error:", err);
        setVideos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSearch();
  }, [query]);

  return (
    <div className="home">
      <div className="homePage_container">
        <h2 style={{color: 'white', padding: '10px'}}>Search results for "{decodeURIComponent(query)}"</h2>

        {loading ? (
          <p style={{color: 'white', paddingLeft: '10px'}}>Loading...</p>
        ) : videos.length === 0 ? (
          <p style={{color: 'white', paddingLeft: '10px'}}>No videos found.</p>
        ) : (
          <div className="homePage_videos">
            {videos.map((item) => (
              <Link to={`/watch/${item._id}`} key={item._id}>
                <div className="youtubeVideo">
                  <img src={item.thumbnail} alt={item.title} className="youtubeImage" />
                  <div className="youtube_title">{item.title}</div>
                  <div className="youtubeInfo">
                    <div className="youtube_channelName">
                      {item?.user?.channelName}
                    </div>
                    <div className="youtubeVideo_views">{item?.like} likes</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
