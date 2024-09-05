import "./Styles/App.css";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Mainstate from "./Components/Mainstate/Mainstate.js";
import WritePage from "./Components/Writepage/WritePage.jsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useContext, useState } from "react";
import Blog from "./Components/Blog/Blog.jsx";
import Profilepage from "./Components/Profilepage/Profilepage.jsx";
import Searchpage from "./Components/Search/Searchpage.jsx";
import Context from "./Components/Mainstate/Context.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Mainstate elements={<Elements />}></Mainstate>
      </BrowserRouter>
    </div>
  );
}

export default App;

const Elements = () => {
  const [genreSelect, setgenreSelect] = useState(false);
  const { authorizeLoading } = useContext(Context);

  return (
    !authorizeLoading && (
      <>
        <Navbar genreSelect={genreSelect} setgenreSelect={setgenreSelect} />
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route
            path="/new-story"
            element={
              <WritePage
                genreSelect={genreSelect}
                setgenreSelect={setgenreSelect}
              />
            }
          ></Route>
          <Route path={`/blog/:blogId`} element={<Blog />}></Route>
          <Route path={"/profile/:profileId"} element={<Profilepage />}></Route>
          <Route path="/search" element={<Searchpage />}></Route>
        </Routes>
      </>
    )
  );
};
