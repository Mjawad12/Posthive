import React from "react";
import userImg from "../../Images/user.png";
import { Link } from "react-router-dom";
export default function Pfv(props) {
  const { name, desc } = props;
  return (
    <div className="Pvf">
      <Link className="linkto" to={`/profile/${props.id}`}>
        <img
          width="25rem"
          height="25rem"
          className="userImg"
          src={props.img ? props.img : userImg}
          alt="tofollow"
        ></img>
        <div className="PvfText">
          <h3>{name}</h3>
          <p>{desc.slice(0, 40)}...</p>
        </div>
      </Link>
      <button
        onClick={(e) => {
          if (
            e.target.innerText !== "Following" &&
            localStorage.getItem("authtoken")
          ) {
            e.target.innerText = "Following";
            e.target.style.backgroundColor = "rgba(118, 130, 128)";
            e.target.style.color = "white";
            props.addFollowerFunc();
          } else {
            !localStorage.getItem("authtoken") &&
              document.querySelector(".userImg").click();
            window.scrollTo(0, 0);
          }
        }}
        className="f-btn"
      >
        Follow
      </button>
    </div>
  );
}
