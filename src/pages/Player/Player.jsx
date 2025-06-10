import React, { useEffect, useState } from "react";
import "./Player.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useParams ,useNavigate } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const nagivate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTkyNzUyNDgyOGEyY2YwN2U4MjhiZTBlNjE4OGZkNSIsIm5iZiI6MTc0Njk0Mjk0OS45NCwic3ViIjoiNjgyMDNiZTUzNGYwYjZkMzg1MmQxMzlmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.NJQubI6n31sCA5OTSxQLBSryvVila5L7IA-tr3MeBOQ",
    },
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <IoArrowBackCircleOutline
        className="img"
        onClick={() => {
          nagivate(-2);
        }}
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameborder="0"
        title="trailer"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
