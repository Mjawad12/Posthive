import React, { useContext, useEffect, useRef, useState } from "react";
import SuggestedTopics from "./SuggestedTopics";
import BlogInter from "./BlogInter";
import Context from "../Mainstate/Context";
import BlogInternLoading from "../BlogInternLoading";
export default function LeftSection({
  intrest,
  setintrest,
  searchState,
  searchQ,
}) {
  const context = useContext(Context);
  const {
    posts,
    Userdetails,
    intrestpostsFunc,
    intrestPost,
    authtoken,
    addReadingList,
    readingList,
    remove,
    Done,
    allposts,
    searchResult,
  } = context;
  const [loading, setloading] = useState(false);
  const [loading2, setloading2] = useState(false);
  const [loadMorecon, setloadMorecon] = useState(false);
  const [index, setindex] = useState(4);

  const loadMore = useRef("");

  const changeIntrest = (intrest) => {
    setloading(true);
    intrestpostsFunc(intrest);
    setintrest(true);
    setTimeout(() => {
      setloading(false);
    }, [1000]);
  };
  const normalPosts = () => {
    setloading(true);
    setintrest(false);
    setTimeout(() => {
      setloading(false);
    }, [500]);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (it) => {
        it.forEach((el) => {
          setloadMorecon(el.isIntersecting);
        });
      },
      { root: null, rootMargin: "0px", threshold: 0 }
    );
    const elmen = document.querySelector(".loadMore");
    observer.observe(elmen);

    return () => {
      observer.disconnect();
    }; // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (loadMorecon && posts && index <= posts.length && !loading) {
      setloading2(true);
      setTimeout(() => {
        let i = index + 3;
        setindex(i);
        setloadMorecon(false);
        setloading2(false);
      }, [1000]);
    } else if (index >= posts?.length) {
      !Done && allposts();
    }
    // eslint-disable-next-line
  }, [loadMorecon]);

  const blogs = (it, index) => {
    const date = it.date.slice(0, 10);
    let st = false;
    readingList?.forEach((el) => {
      if (el.postId === it._id) {
        st = el.postId === it._id;
      }
    });
    return (
      <BlogInter
        name={it.name}
        key={index}
        id={it._id}
        userId={it.id}
        date={date}
        title={it.title}
        subtitle={it.subtitle}
        content={it.content}
        genre={it.genre}
        thumbnail={it.Thumbnail}
        profileImg={it.profileImg}
        authtoken={authtoken}
        addReadingList={addReadingList}
        st={st}
        remove={remove}
      />
    );
  };

  return (
    <section className="leftSec">
      {Userdetails &&
        (!window.location.pathname.includes("/search") ? (
          <SuggestedTopics
            Userdetails={Userdetails}
            changeIntrest={changeIntrest}
            normalPosts={normalPosts}
          />
        ) : (
          <h2 className="Sh">
            Results for <span>{searchQ}</span>
          </h2>
        ))}
      {loading && <BlogInternLoading />}
      <div className="BlogsInter">
        {searchState ? (
          searchResult ? (
            searchResult.length > 0 ? (
              searchResult.map((it, i) => {
                return blogs(it, i);
              })
            ) : (
              <h1 style={{ fontFamily: `"Source Serif 4", serif` }}>
                No Blogs regarding this topic.
              </h1>
            )
          ) : (
            <BlogInternLoading />
          )
        ) : !intrest ? (
          (readingList || !localStorage.getItem("authtoken")) && posts ? (
            posts.slice(0, index).map((it, i) => {
              return blogs(it, i);
            })
          ) : (
            <BlogInternLoading />
          )
        ) : intrestPost && intrestPost.length !== 0 ? (
          intrestPost.map((it, i) => {
            return blogs(it, i);
          })
        ) : (
          <h1 style={{ fontFamily: `"Source Serif 4", serif` }}>
            No Blogs regarding this topic.
          </h1>
        )}

        {loading2 && <BlogInternLoading />}

        <div ref={loadMore} className="loadMore"></div>
      </div>
    </section>
  );
}
