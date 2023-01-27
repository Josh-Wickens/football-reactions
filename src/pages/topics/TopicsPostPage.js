import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import TopicPost from "./TopicPost";
import Comment from "../comments/Comment";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import ActiveProfiles from "../profiles/ActiveProfiles";
import { BackButton } from "../../hooks/BackButton";




function TopicsPostPage() {
  const { id } = useParams();
  const [post, setTopicPost] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setTopicComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }, { data: comments }] = await Promise.all([
          axiosReq.get(`/topics/${id}`),
          axiosReq.get(`/topic_comments/?topic=${id}`),
        ]);
        setTopicPost({ results: [post] });
        setTopicComments(comments);
        console.log(comments);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col sm={1} lg={2} className="d-none d-lg-block p-0 p-lg-2">
      <BackButton />
      <ActiveProfiles />
      </Col>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
      <PopularProfiles mobile />

        <TopicPost {...post.results[0]} setTopicPost={setTopicPost} topicsPostPage />
        <Container className={appStyles.Content}>
          {currentUser ? (
            <CommentCreateForm
              profile_id={currentUser.profile_id}
              profileImage={profile_image}
              post={id}
              setTopicPost={setTopicPost}
              setTopicComments={setTopicComments}
            />
          ) : comments.results.length ? (
            "Comments"
          ) : null}
          {comments.results.length ? (
            <InfiniteScroll
            children={comments.results.map((comment) => (
              <Comment
                key={comment.id}
                {...comment}
                setTopicPost={setTopicPost}
                setTopicComments={setTopicComments}
              />
            ))}
            dataLength={comments.results.length}
            loader={<Asset spinner />}
            hasMore={!!comments.next}
            next={() => fetchMoreData(comments, setTopicComments)}
          />
        ) : currentUser ? (
          <span>No comments yet, be the first to comment!</span>
        ) : (
          <span>No comments... yet</span>
        )}
      </Container>
    </Col>
    <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
    <PopularProfiles />
    </Col>
  </Row>
);
}

export default TopicsPostPage;





//   return (
//     <Row className="h-100">
//       <Col className="py-2 p-0 p-lg-2" lg={8}>
//         <p>Popular profiles for mobile</p>
//         <TopicPost {...topic.results[0]} setTopicPosts={setTopicPost} topicPostPage />
//         <Container className={appStyles.Content}>Comments</Container>
//       </Col>
//       <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
//         Popular profiles for desktop
//       </Col>
//     </Row>
//   );
// }

// export default TopicsPostPage;




















// import React, { useEffect, useState } from "react";

// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";
// import CommentCreateForm from "../comments/CommentCreateForm";
// import { useCurrentUser } from "../../contexts/CurrentUserContext";
// import appStyles from "../../App.module.css";
// import btnStyles from "../../styles/Button.module.css";
// import { useParams } from "react-router";
// import { axiosReq } from "../../api/axiosDefaults";
// import TopicPost from "./TopicPost";
// import Comment from "../comments/Comment";
// // import { useHistory } from "react-router-dom";
// import InfiniteScroll from "react-infinite-scroll-component";
// import Asset from "../../components/Asset";
// import { fetchMoreData } from "../../utils/utils";
// import PopularProfiles from "../profiles/PopularProfiles";
// import ActiveProfiles from "../profiles/ActiveProfiles";
// import { BackButton } from "../../hooks/BackButton";



// function TopicsPostPage() {
//   const { id } = useParams();
//   const [topicPost, setTopicPost] = useState({ results: [] });
//   const currentUser = useCurrentUser();
//   const profile_image = currentUser?.profile_image;
//   const [topicComments, setTopicComments] = useState({ results: [] });

//   useEffect(() => {
//     const handleMount = async () => {
//       try {
//         const [{ data: topic }, { data: topic_comments }] = await Promise.all([
//           axiosReq.get(`/topics/${id}`),
//           axiosReq.get(`/topic_comments/?topics=${id}`),
//         ]);
//         setTopicPost({ results: [topic] });
//         setTopicComments(topic_comments);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     handleMount();
//   }, [id]);

//   return (
//     <Row className="h-100">
//       <Col sm={1} lg={2} className="d-none d-lg-block p-0 p-lg-2">
//       <BackButton />
//       <ActiveProfiles />
//       </Col>
//       <Col className="py-2 p-0 p-lg-2" lg={8}>
//       <PopularProfiles mobile />

//         <TopicPost {...topicPost.results[0]} setTopicPost={setTopicPost} TopicsPostPage />
//         <Container className={appStyles.Content}>
//           {currentUser ? (
//             <CommentCreateForm
//               profile_id={currentUser.profile_id}
//               profileImage={profile_image}
//               topicPost={id}
//               setTopicPost={setTopicPost}
//               setTopicComments={setTopicComments}
//             />
//           ) : topicComments.results.length ? (
//             "Topic Comments"
//           ) : null}
//           {topicComments.results.length ? (
//             <InfiniteScroll
//             children={topicComments.results.map((topicComments) => (
//               <Comment
//                 key={topicComments.id}
//                 {...topicComments}
//                 setTopicPost={setTopicPost}
//                 setTopicComments={setTopicComments}
//               />
//             ))}
//             dataLength={topicComments.results.length}
//             loader={<Asset spinner />}
//             hasMore={!!topicComments.next}
//             next={() => fetchMoreData(topicComments, setTopicComments)}
//           />
//         ) : currentUser ? (
//           <span>No comments yet, be the first to comment!</span>
//         ) : (
//           <span>No comments... yet</span>
//         )}
//       </Container>
//     </Col>
//     <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
//     <PopularProfiles />
//     </Col>
//   </Row>
// );
// }

// export default TopicsPostPage;
