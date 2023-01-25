import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import { useHistory } from "react-router-dom";

export const BackButton = () => {
    let history = useHistory();
    return (
        <>
          <button onClick={() => history.goBack()}><i class="fa fa-arrow-left" aria-hidden="true"></i>  Back</button>
        </>
    );
};

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const support = currentUser?.support;
  const [comments, setComments] = useState({ results: [] });
  

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
        ]);
        setPost({ results: [post] });
        console.log(post);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col sm={1} lg={2} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles for mobile</p>
        
        <Post {...post.results[0]} setPosts={setPost} postPage />
        <BackButton className="primary align-center"/>
        <Container className={appStyles.Content}>{currentUser ? (
  <CommentCreateForm
  profile_id={currentUser.profile_id}
  profileImage={profile_image}
  support={support}
  post={id}
  setPost={setPost}
  setComments={setComments}
  
/>

) : comments.results.length ? (
  "Comments"
) : null}</Container>

      </Col>
      <Col lg={2} sm={1} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
    </Row>
  );
}

export default PostPage;
