import React from "react";
import Pfv from "./Pfv";
import BloginternsmalLoading from "../BloginternsmalLoading";

export default function RecomndedFollows(props) {
  return (
    <div className="RF">
      {props.userstofollow && props.userstofollow?.length !== 0 ? (
        <>
          <h4>Who to follow</h4>
          <div className="RfDiv">
            {props.userstofollow &&
              props.userstofollow.map((it, index) => {
                const addFollowerFunc = () => {
                  props.addFollwer(it._id, it.name, it.profileImg);
                };
                return (
                  <Pfv
                    key={index}
                    id={it._id}
                    name={it.name}
                    img={it.profileImg}
                    desc={it.bio}
                    addFollowerFunc={addFollowerFunc}
                  />
                );
              })}
          </div>
        </>
      ) : (
        props.userstofollow?.length !== 0 &&
        localStorage.getItem("authtoekn") && <BloginternsmalLoading />
      )}
    </div>
  );
}
