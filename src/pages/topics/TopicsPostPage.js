import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import TopicCommentCreateForm from "../topic_comments/TopicCommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import TopicPost from "./TopicPost";
import TopicComment from "../topic_comments/TopicComment";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import ActiveProfiles from "../profiles/ActiveProfiles";
import { BackButton } from "../../components/BackButton";




function TopicsPostPage() {
  const { id } = useParams();
  const [post, setTopicPosts] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setTopicComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }, { data: comments }] = await Promise.all([
          axiosReq.get(`/topics/${id}`),
          axiosReq.get(`/topic_comments/?post=${id}`),
        ]);
        setTopicPosts({ results: [post] });
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
      <Col lg={3} className="d-none d-lg-block p-0 p-lg-2">
      <BackButton />
      <ActiveProfiles />
      </Col>
      <Col className="py-2 p-0 p-lg-2" lg={6}>
      <BackButton />
      <PopularProfiles mobile />

        <TopicPost {...post.results[0]} setTopicPosts={setTopicPosts} topicsPostPage />
        <Container className={appStyles.Content}>
          {currentUser ? (
            <TopicCommentCreateForm
              profile_id={currentUser.profile_id}
              profileImage={profile_image}
              post={id}
              setTopicPosts={setTopicPosts}
              setTopicComments={setTopicComments}
            />
          ) : comments.results.length ? (
            "Comments"
          ) : null}
          {comments.results.length ? (
            <InfiniteScroll
            children={comments.results.map((comment) => (
              <TopicComment
                key={comment.id}
                {...comment}
                setTopicPosts={setTopicPosts}
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
    <Col lg={3} className="d-none d-lg-block p-0 p-lg-2">
    <PopularProfiles />
    </Col>
  </Row>
);
}

export default TopicsPostPage;
