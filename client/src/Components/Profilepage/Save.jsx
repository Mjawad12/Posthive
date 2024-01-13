import React from "react";

export default function Save(props) {
  const {
    cancelImg,
    intrests,
    setintrests,
    cancel,
    uploadImg,
    changeIntrest,
    cancelBio,
    changeBio,
  } = props;
  return (
    <div className="save">
      <button
        onClick={() => {
          cancel(false);
          intrests && setintrests(intrests);
          cancelImg && cancelImg();
          cancelBio && cancelBio();
        }}
        className="f-btn btn-2"
      >
        Cancel
      </button>
      <button
        onClick={() => {
          uploadImg && uploadImg();
          changeIntrest && changeIntrest();
          changeBio && changeBio();
        }}
        className="f-btn btn-2"
      >
        Save
      </button>
    </div>
  );
}
