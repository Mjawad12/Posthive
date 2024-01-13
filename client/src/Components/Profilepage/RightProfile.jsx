import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function RightProfile(props) {
  const [followers, setfollowers] = useState(
    props.otherUserData.followers.length
  );
  const [fl, setfl] = useState(
    props.otherUserData.followers.some((it) => {
      return it.followerId === props.userId;
    })
  );
  const navigate = useNavigate();
  const logout = () => {
    props.signout();
    navigate("/");
  };

  return (
    <div className="rightProfile">
      <div className="wrapper">
        <img
          width={"90px"}
          height={"90px"}
          src={props.otherUserData.profileImg}
          alt="profileimg"
        ></img>
        <div>
          <h2>{props.otherUserData.name}</h2>
          {props.otherUserData && <p>{followers} Followers</p>}
          <p className="biotext"> {props.otherUserData.bio}</p>
        </div>
      </div>
      {!props.state ? (
        <div className="Pbtns">
          {fl ? (
            <button
              style={{ backgroundColor: "rgb(118 ,130, 128)" }}
              className="f-btn btn-3"
              onClick={(e) => {
                props.removeFollowing(props.otherUserData._id);
                setfollowers(followers - 1);
                setfl(false);
              }}
            >
              Following
            </button>
          ) : (
            <button
              onClick={(e) => {
                if (props.authtoken) {
                  if (e.target.innerText !== "Following") {
                    props.addFollwer(props.otherUserData._id);
                    setfollowers(followers + 1);
                    setfl(true);
                  }
                } else {
                  document.querySelector(".clickable")?.click();
                }
              }}
              className="f-btn btn-3"
            >
              Follow
            </button>
          )}
        </div>
      ) : (
        <div className="Pbtns">
          <button onClick={logout} className="f-btn btn-3 ">
            Log out
          </button>
        </div>
      )}
    </div>
  );
}
