import { Link } from 'react-router-dom';

export default function TopicBestArticle({ topicBestArticle }) {
  // console.log(topicBestArticle);
  return (
    <div>
      <span>
        <Link to={`topics/${topicBestArticle.topic}`}>
          @주제: {topicBestArticle.topic}
        </Link>
      </span>
      <Link to={`post/${topicBestArticle.postID}`}>
        @제목: {topicBestArticle.title}
      </Link>
      <div>
        <a href='#'>
          <i>@좋아요: {topicBestArticle.favorites}</i>
        </a>
        <a href='#'>
          <i>@댓글: {topicBestArticle.comment}</i>
        </a>
      </div>
    </div>
  );
}
