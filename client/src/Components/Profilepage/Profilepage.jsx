import React, { useContext, useEffect } from "react";
import LeftProfile from "./LeftProfile";
import RightProfile from "./RightProfile";
import Context from "../Mainstate/Context";
import { useParams } from "react-router";

export default function Profilepage() {
  const context = useContext(Context);
  const {
    userPosts,
    userpostsData,
    getotherUserData,
    otherUserData,
    Userdetails,
    setposts,
    setstaffpicks,
    setUserdetails,
    setauthtoken,
    authtoken,
    changeProfileImg,
    changeIntrests,
    addFollwer,
    addfollowing,
    changeBio,
    readingList,
    remove,
    addReadingList,
    removeFollowing,
    signout,
  } = context;
  const { profileId } = useParams("");

  useEffect(() => {
    userPosts(profileId);
    getotherUserData(profileId);

    // eslint-disable-next-line
  }, [window.location.pathname]);

  return (
    <>
      {otherUserData &&
        (!localStorage.getItem("authtoken") || Userdetails) &&
        userpostsData && (
          <section className="profilepageMain">
            <div className="profilepage">
              <LeftProfile
                userPosts={userpostsData}
                state={Userdetails?._id === otherUserData._id}
                name={otherUserData.name}
                otherUserData={otherUserData}
                authtoken={authtoken}
                changeProfileImg={changeProfileImg}
                changeIntrests={changeIntrests}
                changeBio={changeBio}
                readingList={readingList}
                remove={remove}
                addReadingList={addReadingList}
              />

              <RightProfile
                state={Userdetails?._id === otherUserData._id}
                setauthtoken={setauthtoken}
                authtoken={authtoken}
                setposts={setposts}
                setstaffpicks={setstaffpicks}
                setUserdetails={setUserdetails}
                addFollwer={addFollwer}
                userId={Userdetails?._id}
                otherUserData={otherUserData}
                addfollowing={addfollowing}
                removeFollowing={removeFollowing}
                signout={signout}
              />
            </div>
          </section>
        )}
    </>
  );
}
