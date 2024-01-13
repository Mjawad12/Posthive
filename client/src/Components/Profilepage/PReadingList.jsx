import React from "react";
import BlogInter from "../LeftSection/BlogInter";
export default function PReadingList({ readingList, authtoken, remove, rl }) {
  return (
    <div className="Prl">
      {readingList && readingList.length > 0 ? (
        readingList.map((it, index) => {
          return (
            <BlogInter
              key={index}
              name={it.posterName}
              id={it.postId}
              userId={it.posterId}
              date={it.date}
              title={it.posttitle}
              subtitle={it.postSubtitle}
              content={it.content}
              thumbnail={it.postThumbnail}
              profileImg={it.posterImg}
              authtoken={authtoken}
              st={true}
              remove={remove}
              rl={rl}
            />
          );
        })
      ) : (
        <p>You have no blogs.</p>
      )}
    </div>
  );
}
