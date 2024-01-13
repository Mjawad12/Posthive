import React, { useState } from "react";
import userImg from "../../Images/user.png";
import { Link } from "react-router-dom";
export default function UserDeatilsBlog({
  name,
  date,
  img,
  userId,
  state,
  addFollwer,
  Userdetails,
  removeFollowing,
}) {
  const [followed, setfollowed] = useState(
    Userdetails?.following?.some((it) => {
      return it.followingId === userId;
    })
  );

  return (
    <div className="userDeatilsBlog">
      <Link to={`/profile/${userId}`}>
        <img
          width="23rem"
          height="23rem"
          src={img ? img : userImg}
          alt="Blogger "
        ></img>
      </Link>
      <div className="userDetailsRight">
        <div>
          <Link to={`/profile/${userId}`}>
            <p>{name}</p>
          </Link>
          {!state && (
            <>
              {!followed ? (
                <>
                  -{" "}
                  <span
                    onClick={() => {
                      if (!localStorage.getItem("authtoken")) {
                        document.querySelector(".clickable")?.click();
                      } else {
                        addFollwer(userId, name, img);
                        setfollowed(true);
                      }
                    }}
                  >
                    Follow
                  </span>
                </>
              ) : (
                <>
                  -{" "}
                  <span
                    style={{ color: "black" }}
                    onClick={() => {
                      removeFollowing(userId);
                      setfollowed(false);
                    }}
                  >
                    Following
                  </span>
                </>
              )}
            </>
          )}
        </div>
        <div>
          <span>{date.slice(0, 10)}</span>
        </div>
      </div>
    </div>
  );
}
