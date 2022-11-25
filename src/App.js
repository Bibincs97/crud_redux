import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePosts from "./components/CreatePosts";
import EditPosts from "./components/EditPosts";

import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar/Navbar";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createPost" element={<CreatePosts />} />
          <Route path="/editPost/:id" element={<EditPosts />} />
          <Route />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
