import React, { useEffect, useState } from "react";
import BlogInter from "../LeftSection/BlogInter";
import About from "./About";
import PReadingList from "./PReadingList";
import BlogInternLoading from "../BlogInternLoading";
export default function LeftProfile(props) {
  const [about, setabout] = useState(false);
  const [rl, setrl] = useState(false);
  const [up, setup] = useState(true);
  const HandleClick = (e) => {
    if (!e.target.classList.contains("btmstyle")) {
      setup(e.target.classList.contains("ps"));
      setabout(e.target.classList.contains("about"));
      setrl(e.target.classList.contains("rl"));
      const el = document.querySelectorAll(".btmstyle");
      el.forEach((it) => it.classList.remove("btmstyle"));
      e.target.classList.add("btmstyle");
    }
  };
  useEffect(() => {
    setup(true);
    setrl(false);
    setabout(false);
    // eslint-disable-next-line
  }, [window.location.pathname]);

  return (
    <div className="leftProfile">
      <h1>{props.name}</h1>
      <div className="leftProfileBottom">
        <div className="STop">
          <p onClick={HandleClick} className="btmstyle ps">
            Home
          </p>
          {props.state && (
            <>
              <p onClick={HandleClick} className="about">
                About
              </p>
              <p onClick={HandleClick} className="rl">
                Reading List
              </p>
            </>
          )}
        </div>
      </div>
      <div className="BlogsInter">
        <h3>
          {about && props.state && "About"}
          {up && "Posts"}
          {rl && "Reading List"}
        </h3>
        {about && props.state && (
          <About
            intrests={props.otherUserData.intrestes}
            profileImg={props.otherUserData.profileImg}
            bio={props.otherUserData.bio}
            changeProfileImg={props.changeProfileImg}
            changeIntrests={props.changeIntrests}
            changeBio={props.changeBio}
          />
        )}
        {up && props.userPosts
          ? props.userPosts.map((it, index) => {
              const date = it.date.slice(0, 10);
              let st = false;
              props.readingList?.forEach((el) => {
                if (el.postId === it._id) {
                  st = el.postId === it._id;
                }
              });

              return (
                <BlogInter
                  key={index}
                  name={it.name}
                  id={it._id}
                  userId={it.id}
                  date={date}
                  title={it.title}
                  subtitle={it.subtitle}
                  content={it.content}
                  genre={it.genre}
                  thumbnail={it.Thumbnail}
                  profileImg={it.profileImg}
                  authtoken={props.authtoken}
                  st={st}
                  remove={props.remove}
                  addReadingList={props.addReadingList}
                />
              );
            })
          : up && <BlogInternLoading />}
        {rl && (
          <PReadingList
            readingList={props.readingList}
            authtoken={props.authtoken}
            remove={props.remove}
            rl={rl}
          />
        )}
      </div>
    </div>
  );
}
