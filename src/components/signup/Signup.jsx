import React, { useState } from 'react';
import axios from 'axios';

const serverUrl = 'https://localhost:8088';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [pass, setPass] = useState('');
  const [passConfirm, setPassConfirm] = useState('');

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };

  const changeNickname = (e) => {
    setNickname(e.target.value);
  };

  const changePass = (e) => {
    setPass(e.target.value);
  };

  const changePassConfirm = (e) => {
    setPassConfirm(e.target.value);
  };

  const submitButton = (e) => {
    e.preventDefault();

    const data = axios.post(
      `${serverUrl}/register`,
      {
        email: email,
        username: username,
        nickname: nickname,
        pass: pass,
        passConfirm: passConfirm,
      }
      // { withCredentials: true }
    );

    console.log(data);
  };

  // email;
  // username;
  // nickname;
  // pass;
  // passConfirm;

  return (
    <>
      <form>
        <label htmlFor="email">아이디</label>
        <input type="email" id="email" onChange={changeEmail} />
        <label htmlFor="username">유저이름</label>
        <input type="text" id="username" onChange={changeUsername} />
        <label htmlFor="nickname">닉네임</label>
        <input type="text" id="nickname" onChange={changeNickname} />

        <label htmlFor="pass">비밀번호</label>
        <input type="password" id="pass" onChange={changePass} />

        <label htmlFor="passConfirm">비밀번호 확인</label>
        <input type="password" id="passConfirm" onChange={changePassConfirm} />
        <button onClick={submitButton}>제출</button>
      </form>
    </>
  );
};

export default Signup;

{
  /* <form name="login" action="index.html" method="post">
아이디확인<br>
<input type="text" name="user_ID" placeholder="아이디 입력" >
<input type="button" name="user_IDcheck" value="아이디 확인">
<br>
비밀번호<br> 
<input type="password" name="user_PW1" value="123456"><br>
비밀번호 재확인<br> 
<input type="password" name="user_PW2" value="123456">
<input type="button" name="user_PWcheck" value="비밀번호 재확인">
<br><br> */
}
