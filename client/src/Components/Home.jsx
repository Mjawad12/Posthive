import React, { useContext, useEffect, useState } from "react";
import LeftSection from "./LeftSection/LeftSection";
import RightSec from "./RightSection/RightSec";
import Context from "./Mainstate/Context";
import NAhero from "./NAhero";

export default function Home() {
  const context = useContext(Context);
  const {
    allposts,
    staffPicks,
    userstofollow,
    addFollwer,
    readingList,
    posts,
    staffpicks,
    authtoken,
  } = context;
  const [intrest, setintrest] = useState(false);
  useEffect(() => {
    !posts && allposts();
    !staffpicks && staffPicks(); // eslint-disable-next-line
  }, []);

  return (
    <div>
      {!authtoken && <NAhero />}
      <div className="hero">
        <LeftSection intrest={intrest} setintrest={setintrest}></LeftSection>
        <RightSec
          userstofollow={userstofollow}
          intrest={intrest}
          setintrest={setintrest}
          addFollwer={addFollwer}
          readingList={readingList}
        ></RightSec>
      </div>
    </div>
  );
}
