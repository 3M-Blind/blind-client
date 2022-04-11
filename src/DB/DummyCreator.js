function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function createPostList(topic) {
  len = 20;
  postList = new Array(len);

  for (let i = 0; i < len; i++) {
    post = {
      postID: -1,
      topic: topic,
      title: topic + "_제목" + getRandomInt(10000, 20000),
      content: topic + "_내용" + getRandomInt(0, 10000),
      view: getRandomInt(0, 500),
      favorites: getRandomInt(0, 1000),
      comment: getRandomInt(0, 5000),
      nickName: "Tom",
      createdAt: "",
    };
    postList[i] = post;
  }

  return postList;
}

function main() {
  // 주제목록 생성
  topicList = new Array(15);
  for (let i = 0; i < topicList.length; i++) {
    topicList[i] = "주제" + i;
  }

  // 주제별 20개씩 생성한뒤 병합
  postList = [];
  for (topic of topicList) {
    postList = postList.concat(createPostList(topic));
  }

  // 각 post에 id부여
  for (let i = 0; i < postList.length; i++) {
    postList[i]["postID"] = i;
  }

  // json형태로변환후 저장
  jsonData = JSON.stringify(postList);
  var fs = require("fs");
  fs.writeFile("./src/DB/tmp.json", jsonData, (err) => {
    if (err) {
      console.log(err);
    }
  });
}

main();
