import { Routes, Route } from 'react-router-dom';

import './App.css';

import Footer from './layouts/footer/Footer';
import Header from './layouts/header/Header';
import HomePage from './pages/home/HomePage';
import SigninPage from './pages/signin/SigninPage';
import SignupPage from './pages/signup/SignupPage';

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="signin" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;
