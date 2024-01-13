import React from "react";
import userImg from "../Images/user.png";
import { useNavigate } from "react-router-dom";
export default function NameDate(props) {
  const navigate = useNavigate();
  const { name, date, img, userId } = props;
  return (
    <div className="userDeatils">
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          window.scrollTo(0, 0);
          navigate(`/profile/${userId}`);
        }}
        className="nameDateLink"
      >
        <img
          width="23rem"
          height="23rem"
          src={img ? img : userImg}
          alt="Blogger "
        ></img>
        <p>{name} - </p>
      </div>
      <span>{date}</span>
    </div>
  );
}
