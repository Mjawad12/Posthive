import React, { useRef, useState } from "react";
import Save from "./Save";
import { imageDb } from "../Firebase/ConfigFirebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import Loading from "../Loading";

export default function About(props) {
  const [saveImg, setsaveImg] = useState(false);
  const [saveIntrests, setsaveIntrests] = useState(false);
  const [changebio, setchangebio] = useState(false);
  const [Error, setError] = useState(null);
  const [loading, setloading] = useState(false);
  const [newImg, setnewImg] = useState("");
  const [intrests, setintrests] = useState(props.intrests);
  const imgRef = useRef("");
  const bioref = useRef("");

  const addintrest = (e) => {
    const newIntrests = [...intrests, e.target.value];
    setintrests(newIntrests);
    e.target.value = "";
  };
  const handleRemove = (i) => {
    const newIntrests = [...intrests];
    newIntrests.splice(i, 1);
    setintrests(newIntrests);
    setError(false);
  };
  const changeImg = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    imgRef.current.src = url;
    setnewImg(e.target.files[0]);
    e.target.value = null;
  };
  const cancelImg = () => {
    imgRef.current.src = props.profileImg;
  };
  const uploadImg = async () => {
    setloading(true);
    const imageRef = ref(imageDb, `files/${newImg.name}-${v4()}`);
    await uploadBytes(imageRef, newImg).then(async () => {
      await getDownloadURL(imageRef).then((res) => {
        props.changeProfileImg(res);
        setsaveImg(false);
      });
    });
    setloading(false);
  };
  const changeIntrest = () => {
    if (intrests.length === 5) {
      props.changeIntrests(intrests);
      setsaveIntrests(false);
      setError(false);
    } else {
      setError(true);
    }
  };
  const cancelBio = () => {
    setchangebio(false);
    bioref.current.classList.remove("editbio");
    bioref.current.contentEditable = "false";
    bioref.current.innerText = props.bio;
  };
  const changeBio = () => {
    if (
      bioref.current.innerText.length <= 50 &&
      bioref.current.innerText.length >= 15
    ) {
      setchangebio(false);
      bioref.current.classList.remove("editbio");
      props.changeBio(bioref.current.innerText);
    } else {
      setError(true);
    }
  };

  return (
    <div className="aboutDiv">
      <div className="profileImg">
        <h4>Profile Image :</h4>
        <img ref={imgRef} src={props.profileImg} alt="profile Img" />
        <input onInput={changeImg} className="display-none" type="file" />{" "}
        {saveImg ? (
          <div className="imgEdit">
            {loading && <Loading length="5rem" />}
            <div
              onClick={(e) => {
                e.target.parentElement.parentElement.childNodes[2].click();
              }}
              className="insertPhoto"
            >
              <svg width="27px" height="27" viewBox="0 0 24 24" fill="green">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.75 13.75a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0-1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z"
                  fill="green"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.5 5h15A2.5 2.5 0 0 1 22 7.5v10a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-10A2.5 2.5 0 0 1 4.5 5zm0 1.25c-.69 0-1.25.56-1.25 1.25v5.37l3.3-3.31a.62.62 0 0 1 .9 0l9.18 9.19h2.87c.69 0 1.25-.56 1.25-1.25v-10c0-.69-.56-1.25-1.25-1.25h-15zm10.37 12.5L7 10.88l-3.75 3.75v2.87c0 .69.56 1.25 1.25 1.25h10.37z"
                  fill="green"
                ></path>
              </svg>
              <p>Insert Photo</p>
            </div>{" "}
            <Save
              uploadImg={uploadImg}
              cancelImg={cancelImg}
              cancel={setsaveImg}
            ></Save>
          </div>
        ) : (
          <button
            onClick={() => {
              setsaveImg(true);
            }}
            className="f-btn"
          >
            Edit
          </button>
        )}
      </div>
      <div className="intrestsdiv">
        <h4>Your interests :</h4>
        <div className="intrests">
          {intrests &&
            intrests.map((el, i) => {
              return (
                <span key={i}>
                  {el}
                  {saveIntrests && (
                    <button
                      key={i + 1}
                      onClick={() => handleRemove(i)}
                      className="cross"
                    >
                      x
                    </button>
                  )}
                </span>
              );
            })}
          {saveIntrests && intrests && intrests.length < 5 && (
            <input
              type="text"
              onKeyDown={(e) => {
                setError(false);
                e.key === "Enter" && addintrest(e);
              }}
              placeholder="Add an intrest"
            />
          )}
        </div>
        {Error && saveIntrests && (
          <p className="error">Enter atleast 5 interests</p>
        )}
        <div className="btmIntrests">
          {saveIntrests ? (
            <Save
              intrests={props.intrests}
              setintrests={setintrests}
              cancel={setsaveIntrests}
              changeIntrest={changeIntrest}
            />
          ) : (
            <button
              onClick={() => {
                setsaveIntrests(true);
              }}
              className="f-btn"
            >
              Edit
            </button>
          )}
        </div>
      </div>
      <div className="bioDiv">
        <h4>Your Bio :</h4>
        <div className="bio">
          <p
            ref={bioref}
            onKeyDown={() => {
              setError(false);
            }}
          >
            {props.bio}
          </p>
        </div>
        {Error && changebio && (
          <p className="error">
            Your Bio should be between 10 to 50 characters
          </p>
        )}
        {changebio ? (
          <Save
            cancel={setchangebio}
            cancelBio={cancelBio}
            changeBio={changeBio}
          />
        ) : (
          <button
            onClick={() => {
              setchangebio(true);
              bioref.current.contentEditable = "true";
              bioref.current.classList.add("editbio");
            }}
            className="f-btn"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}
