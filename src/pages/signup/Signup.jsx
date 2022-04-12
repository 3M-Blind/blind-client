import React, { useState, useEffect } from "react";
import axios from "axios";

const serverUrl = "https://localhost:8088";

const Signup = () => {
  /*
  email;
  username;
  nickname;
  pass;
  passConfirm;
  */

  const [regData, setRegData] = useState({
    email: "",
    username: "",
    nickname: "",
    pass: "",
    passConfirm: "",
  });

  useEffect(() => {
    console.log(`regData: ${JSON.stringify(regData)}`);
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(`regData: ${JSON.stringify(regData)}`);

    // const data = axios.post(
    //   `${serverUrl}/register`,
    //   {
    //     email: email,
    //     username: username,
    //     nickname: nickname,
    //     pass: pass,
    //     passConfirm: passConfirm,
    //   }
    // );

    // console.log(data);
  };

  function handle(e) {
    // const newData = { ...regData };
    // newData[e.target.id] = e.target.value;
    // setRegData(newData);

    regData[e.target.id] = e.target.value;
  }

  return (
    <>
      <form>
        <div>
          <label htmlFor="email">아이디</label>
          <input type="email" id="email" onChange={handle} />
        </div>
        <div>
          <label htmlFor="username">유저이름</label>
          <input type="text" id="username" onChange={handle} />
        </div>
        <div>
          <label htmlFor="nickname">닉네임</label>
          <input type="text" id="nickname" onChange={handle} />
        </div>
        <div>
          <label htmlFor="pass">비밀번호</label>
          <input type="password" id="pass" onChange={handle} />
        </div>
        <div>
          <label htmlFor="passConfirm">비밀번호 확인</label>
          <input type="password" id="passConfirm" onChange={handle} />
        </div>
        <button onClick={onSubmit}>제출</button>
      </form>
    </>
  );
};

export default Signup;
