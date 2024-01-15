import React, { useEffect, useState } from "react";
import Context from "./Context";
export default function Mainstate(props) {
  const [error, seterror] = useState(null);
  const [Otp, setOtp] = useState(null);
  const [Userdetails, setUserdetails] = useState(null);
  const [posts, setposts] = useState(null);
  const [intrestPost, setintrestPost] = useState(null);
  const [staffpicks, setstaffpicks] = useState(null);
  const [Cblog, setCblog] = useState(null);
  const [userpostsData, setuserpostsData] = useState(null);
  const [otherUserData, setotherUserData] = useState(null);
  const [blogContent, setblogContent] = useState(null);
  const [userstofollow, setuserstofollow] = useState(null);
  const [readingList, setreadingList] = useState(null);
  const [index, setindex] = useState(0);
  const [Done, setDone] = useState(false);
  const [searchResult, setsearchResult] = useState(null);

  const [authtoken, setauthtoken] = useState(
    localStorage.getItem("authtoken") || null
  );
  const url = process.env.REACT_APP_BACK_END;

  const attempts = async (func) => {
    let i = 0;
    while (i < 3) {
      try {
        await func();
        break;
      } catch (error) {
        i++;
      }
    }
  };

  const signup = async (email, name, password, verification, profileImg) => {
    const func = async () => {
      const data = await fetch(`${url}/users/signup`, {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          password: password || "GoogleAccountActivated123654",
          verification: verification || false,
          profileImg:
            profileImg ||
            "https://hillcrestnc.com/wp-content/uploads/2019/03/profileimg-350x350.png",
        }),
      });
      const parsedData = await data.json();
      if (parsedData.errors !== undefined) {
        seterror(parsedData.errors);
      } else if (parsedData.otp !== undefined) {
        setOtp(parsedData.otp);
      } else {
        setauthtoken(parsedData.authtoken);
        localStorage.setItem("authtoken", parsedData.authtoken);
        userData();
        getReadingList();
        getuserstofollow();
      }
    };
    attempts(func);
  };

  const signin = async (email, password) => {
    const func = async () => {
      const data = await fetch(`${url}/users/signin`, {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const parsedData = await data.json();
      if (parsedData.errors !== undefined) {
        seterror(parsedData.errors);
      } else if (parsedData.otp !== undefined) {
        setOtp(parsedData.otp);
      } else {
        setauthtoken(parsedData.authtoken);
        localStorage.setItem("authtoken", parsedData.authtoken);
        userData();
        getReadingList();
        getuserstofollow();
      }
    };

    attempts(func);
  };

  const verifyOtp = async (email) => {
    const func = async () => {
      const data = await fetch(`${url}/users/verified`, {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const parseddata = await data.json();
      setauthtoken(parseddata.authtoken);
      localStorage.setItem("authtoken", parseddata.authtoken);
    };
    attempts(func);
  };
  const userData = async () => {
    const func = async () => {
      const data = await fetch(`${url}/users/getUserData`, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          authtoken: localStorage.getItem("authtoken"),
        },
      });
      const parsedData = await data.json();
      setUserdetails(parsedData.user);
    };

    attempts(func);
  };

  const addpost = async (content, title, subtitle, Thumbnail, genre) => {
    const func = async () => {
      await fetch(`${url}/posts/addpost`, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          authtoken: localStorage.getItem("authtoken"),
        },
        body: JSON.stringify({
          content,
          name: Userdetails.name,
          profileImg: Userdetails.profileImg,
          genre,
          title,
          subtitle,
          Thumbnail,
        }),
      });
    };

    attempts(func);
  };

  const allposts = async () => {
    const func = async () => {
      const data = await fetch(`${url}/posts/allPosts`, {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
          authtoken: localStorage.getItem("authtoken"),
          index: index,
        },
      });
      const parsedData = await data.json();
      if (posts) {
        const newPosts = [...posts, ...parsedData.Posts.reverse()];
        setposts(newPosts);
      } else {
        setposts(parsedData.Posts.reverse());
      }
      parsedData.nextIndex && setindex(parsedData.nextIndex);
      setDone(parsedData.done);
    };
    attempts(func);
  };

  const getBlogContent = async (blogContentId) => {
    const func = async () => {
      const data = await fetch(`${url}/posts/getblogContent`, {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
          authtoken: localStorage.getItem("authtoken"),
          id: blogContentId,
        },
      });
      const parsedData = await data.json();
      parsedData.blogContent && setblogContent(parsedData.blogContent.content);
    };

    attempts(func);
  };
  const getuserstofollow = async () => {
    const func = async () => {
      const data = await fetch(`${url}/users/getuserstofollow`, {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
          authtoken: localStorage.getItem("authtoken"),
        },
      });
      const parsedData = await data.json();
      parsedData.userstofollow && setuserstofollow(parsedData.userstofollow);
    };

    attempts(func);
  };

  const staffPicks = async () => {
    const func = async () => {
      const data = await fetch(`${url}/posts/staffPicks`, {
        method: "Get",
        headers: { "Contesnt-Type": "application/json", authtoken: authtoken },
      });
      const parsedData = await data.json();
      setstaffpicks(parsedData.staffpicks.reverse());
    };

    attempts(func);
  };

  const blog = async (id) => {
    const func = async () => {
      setCblog(null);
      setblogContent(null);
      const data = await fetch(`${url}/posts/getBlog/${id}`, {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
          authtoken: localStorage.getItem("authtoken"),
        },
      });
      const parsedBlog = await data.json();
      setCblog(parsedBlog);
      getBlogContent(parsedBlog.content);
    };
    attempts(func);
  };

  const addComment = async (id, content, date) => {
    const func = async () => {
      await fetch(`${url}/posts/commentpost/${id}`, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          authtoken: localStorage.getItem("authtoken"),
        },
        body: JSON.stringify({
          username: Userdetails.name,
          commenterImg: Userdetails.profileImg,
          date: date,
          commentcontent: content,
          commentorId: Userdetails._id,
        }),
      });
    };

    attempts(func);
  };
  const userPosts = async (id) => {
    const func = async () => {
      setuserpostsData(null);
      const posts = await fetch(`${url}/posts/userPosts/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authtoken: localStorage.getItem("authtoken"),
        },
      });
      const parsedposts = await posts.json();

      setuserpostsData(parsedposts.posts);
    };

    attempts(func);
  };
  const getotherUserData = async (id) => {
    const func = async () => {
      setotherUserData(null);
      const user = await fetch(`${url}/users/getotherUserData/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authtoken: localStorage.getItem("authtoken"),
        },
      });
      const parseduser = await user.json();
      setotherUserData(parseduser.user);
    };

    attempts(func);
  };
  const intrestpostsFunc = async (intrest) => {
    const func = async () => {
      setintrestPost(null);
      const posts = await fetch(`${url}/posts/intresPost`, {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
          authtoken: authtoken,
          intrest: intrest,
        },
      });
      const parsedposts = await posts.json();
      setintrestPost(parsedposts);
    };

    attempts(func);
  };
  const changeProfileImg = async (newImg) => {
    const func = async () => {
      const data = await fetch(`${url}/users/changeProfileImg`, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          authtoken: localStorage.getItem("authtoken"),
        },
        body: JSON.stringify({ newImg: newImg }),
      });
      const parsedData = await data.json();
      if (parsedData.success === "success") {
        Userdetails.profileImg = newImg;
      }
    };

    attempts(func);
  };
  const changeIntrests = async (newIntrests) => {
    const func = async () => {
      const data = await fetch(`${url}/users/changeIntrests`, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          authtoken: localStorage.getItem("authtoken"),
        },
        body: JSON.stringify({ intrestes: newIntrests }),
      });
      const parsedData = await data.json();
      if (parsedData.success === "success") {
        const user = Userdetails;
        user.intrestes = newIntrests;
        setUserdetails(user);
      }
    };

    attempts(func);
  };
  const addFollwer = async (id, othername, otherprofilImg) => {
    const func = async () => {
      await fetch(`${url}/users/addfollower`, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          authtoken: localStorage.getItem("authtoken"),
        },
        body: JSON.stringify({
          followername: Userdetails.name,
          followingId: id,
          followerImg: Userdetails.profileImg,
        }),
      });
      const newFollowing = {
        followingId: id,
        followingImg: otherprofilImg,
        followingname: othername,
      };
      const dt = Userdetails;
      dt.following?.unshift(newFollowing);
      setUserdetails(dt);

      othername ? addfollowing(id, othername, otherprofilImg) : addfollowing();
    };

    attempts(func);
  };
  const removeFollowing = async (id) => {
    const func = async () => {
      await fetch(`${url}/users/removeFollowing`, {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
          authtoken: localStorage.getItem("authtoken"),
        },
        body: JSON.stringify({
          followingId: id,
        }),
      });
      const newfollowings = [];
      Userdetails.following.forEach((it) => {
        if (it.followingId !== id) {
          newfollowings.unshift(it);
        }
      });
      Userdetails.following = newfollowings;
    };

    attempts(func);
  };

  const addfollowing = async (id, othername, otherprofilImg) => {
    const func = async () => {
      await fetch(`${url}/users/addfollowing`, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          authtoken: localStorage.getItem("authtoken"),
        },
        body: JSON.stringify({
          followingname: othername ? othername : otherUserData.name,
          followingId: id ? id : otherUserData._id,
          followingImg: otherprofilImg
            ? otherprofilImg
            : otherUserData.profileImg,
        }),
      });
    };

    attempts(func);
  };
  const changeBio = async (bio) => {
    const func = async () => {
      await fetch(`${url}/users/changeBio`, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          authtoken: localStorage.getItem("authtoken"),
        },
        body: JSON.stringify({
          bio: bio,
        }),
      });
    };

    attempts(func);
  };
  const addReadingList = async (
    posterId,
    posterImg,
    posterName,
    postId,
    posttitle,
    date,
    postThumbnail,
    postSubtitle
  ) => {
    const func = async () => {
      await fetch(`${url}/users/addReadingList`, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          authtoken: localStorage.getItem("authtoken"),
        },
        body: JSON.stringify({
          posterId,
          posterImg,
          posterName,
          postId,
          posttitle,
          date,
          postThumbnail,
          postSubtitle,
        }),
      }).then(() => {
        const newR = {
          posterId,
          posterImg,
          posterName,
          postId,
          posttitle,
          date,
          postThumbnail,
          postSubtitle,
        };
        setreadingList([newR, ...readingList]);
      });
    };

    attempts(func);
  };
  const getReadingList = async () => {
    const func = async () => {
      const data = await fetch(`${url}/users/getReadingList`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authtoken: localStorage.getItem("authtoken"),
        },
      });
      const parsedData = await data.json();
      parsedData.Rl && setreadingList(parsedData.Rl.reverse());
    };

    attempts(func);
  };
  const remove = async (postId) => {
    const func = async () => {
      await fetch(`${url}/users/removeRead`, {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
          authtoken: localStorage.getItem("authtoken"),
        },
        body: JSON.stringify({
          postId,
        }),
      }).then(() => {
        // eslint-disable-next-line
        const newList = readingList.filter((it) => {
          if (it.postId !== postId) {
            return it;
          }
        });

        setreadingList(newList);
      });
    };

    attempts(func);
  };
  const getSearchResults = async (query) => {
    const func = async () => {
      setsearchResult(null);
      const data = await fetch(`${url}/posts/searchResult/${query}`, {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
          authtoken: localStorage.getItem("authtoken"),
        },
      });
      const parsedData = await data.json();
      parsedData.posts && setsearchResult(parsedData.posts);
    };

    attempts(func);
  };

  const signout = () => {
    localStorage.removeItem("authtoken");
    setauthtoken(null);
    setreadingList(null);
    setUserdetails(null);
    setuserpostsData(null);
    setotherUserData(null);
  };

  useEffect(() => {
    if (authtoken) {
      userData();
      getReadingList();
    } // eslint-disable-next-line
  }, []);
  useEffect(() => {
    const mancode = document.querySelector(".blogCode");
    if (mancode) {
      mancode.innerHTML = "";
    }

    window.location.pathname === "/" && authtoken && getuserstofollow();
    // eslint-disable-next-line
  }, [window.location.pathname]);

  return (
    <Context.Provider
      value={{
        signup,
        error,
        Otp,
        authtoken,
        verifyOtp,
        signin,
        seterror,
        addpost,
        Userdetails,
        posts,
        staffpicks,
        blog,
        Cblog,
        addComment,
        userPosts,
        userpostsData,
        getotherUserData,
        otherUserData,
        allposts,
        staffPicks,
        intrestpostsFunc,
        intrestPost,
        setintrestPost,
        setauthtoken,
        userData,
        setUserdetails,
        setposts,
        setstaffpicks,
        changeProfileImg,
        changeIntrests,
        addFollwer,
        getBlogContent,
        blogContent,
        addfollowing,

        changeBio,
        userstofollow,
        addReadingList,
        readingList,
        setreadingList,
        getReadingList,
        remove,
        removeFollowing,
        Done,
        signout,
        getSearchResults,
        searchResult,
      }}
    >
      {props.elements}
    </Context.Provider>
  );
}
