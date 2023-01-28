import React, { useState } from "react";
import { Media, OverlayTrigger, Tooltip  } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import TopicCommentEditForm from "./TopicCommentEditForm";

import styles from "../../styles/Comment.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";

const TopicComment = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    id,
    like_id,
    likes_count,
    setTopicPost,
    setTopicComments,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/topic_comments/${id}/`);
      setTopicPost((prevTopicPost) => ({
        results: [
          {
            ...prevTopicPost.results[0],
            comments_count: prevTopicPost.results[0].comments_count - 1,
          },
        ],
      }));

      setTopicComments((prevTopicComments) => ({
        ...prevTopicComments,
        results: prevTopicComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {}
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes-topic-comment/", { comment: id });
      setTopicComments((prevTopicComments) => ({
        ...prevTopicComments,
        results: prevTopicComments.results.map((comment) => {
          return comment.id === id
            ? { ...comment, likes_count: comment.likes_count + 1, like_id: data.id }
            : comment;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes-topic-comment/${like_id}/`);
      setTopicComments((prevTopicComments) => ({
        ...prevTopicComments,
        results: prevTopicComments.results.map((comment) => {
          return comment.id === id
            ? { ...comment, likes_count: comment.likes_count - 1, like_id: null }
            : comment;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
     <div className={styles.Comments}>

      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          {showEditForm ? (
            <TopicCommentEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_image}
              setTopicComments={setTopicComments}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{content}</p>
          )}
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

        </div>
        </Media.Body>
        {is_owner && !showEditForm && (
          <MoreDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
      </div>
    </>
  );
};

export default TopicComment;