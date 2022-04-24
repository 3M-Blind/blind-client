import { Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import TopicsPage from './pages/TopicsPage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <section>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signin' element={<SigninPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/topics/:topic' element={<TopicsPage />} />
          <Route path='/post/:postID' element={<PostPage />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;
