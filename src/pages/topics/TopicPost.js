import React, { useState } from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Row from "react-bootstrap/Row";
import Tooltip from "react-bootstrap/Tooltip";

import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const TopicPost = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    question,
    image,
    topic,
    updated_at,
    setTopicPosts
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();
  const location = {
    pathname: '/'}

    function SetPage() {
      const [page, setPage] = useState([]);}

  const handleEdit = () => {
    history.push(`/topics/${id}/edit`);
    
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/topics/${id}/`);
      history.push(location);
      SetPage();

    } catch (err) {
      console.log(err);
    }
  };
  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes-topic/", { post: id });
      setTopicPosts((prevTopicPosts) => ({
        ...prevTopicPosts,
        results: prevTopicPosts.results.map((topic) => {
          return topic.id === id
            ? { ...topic, likes_count: topic.likes_count + 1, like_id: data.id }
            : topic;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes-topic/${like_id}/`);
      setTopicPosts((prevTopicPosts) => ({
        ...prevTopicPosts,
        results: prevTopicPosts.results.map((topic) => {
          return topic.id === id
            ? { ...topic, likes_count: topic.likes_count - 1, like_id: null }
            : topic;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <Row>
              <div>
            <p class="font-weight-bold">TOPIC</p><h5 class="font-weight-bold"><span>{topic}</span></h5>
            </div>
            </Row>
            </div>
            <div className="d-flex align-items-left">
            <Row>
            <div>
            <span>{updated_at}</span>
            </div>
            </Row>
            </div>
            
            <div>
            {is_owner && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/topics/${id}`}>
        <Card.Img src={image} alt={question} />
      </Link>
      <Card.Body className="align-items-center justify-content-between">
        {question && <Card.Title className="text-center">{question}</Card.Title>}

        <div className={styles.PostBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className={`fa fa-check ${styles.CantCheck}`} />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fa fa-check ${styles.ticked}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`fa fa-check ${styles.tick}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className={`fa fa-check ${styles.CantCheck}`} />
            </OverlayTrigger>
          )}
          <span className={styles.Count}>{likes_count}</span>
          <Link to={`/topics/${id}`}>
            <i className="fa fa-commenting-o" />
          </Link>
          <span className={styles.Count}>{comments_count}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TopicPost;
