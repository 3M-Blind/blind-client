import { useParams } from 'react-router-dom';

import { usePostData } from '../../DB/DummyLoader';

export default function Post() {
  /* 해당글의 토픽, 제목, 내용, 상호, 닉네임첫글자, 작성일, 조회수, 댓글수, 내용을 보여준다.*/
  const { postID } = useParams();
  const post = usePostData(postID);
  return (
    <div>
      <h1>{JSON.stringify(post)}</h1>
    </div>
  );
}
