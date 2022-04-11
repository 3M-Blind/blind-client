import { Routes, Route } from "react-router-dom";

import "./App.css";

import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";
import HomePage from "./pages/home/HomePage";
import SigninPage from "./pages/signin/SigninPage";
import SignupPage from "./pages/signup/SignupPage";
import TopicsPage from "./pages/Topics/TopicsPage";
import PostPage from "./pages/Post/PostPage";

// https://www.teamblind.com/kr/topics/블라블라
function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="signin" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="topics" element={<TopicsPage />} />
          <Route path="post/:postID" element={<PostPage />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;
