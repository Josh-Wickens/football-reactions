import React, { useState } from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    title,
    image,
    updated_at,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();
  const location = {
    pathname: '/'}

    function SetPage() {
      // this it to force a rerender on the page.
      /*eslint-disable */
      const [page, setPage] = useState([]);}
      /*eslint-enable */

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
    
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.push(location);
      SetPage();

    } catch (err) {
      // console.log(err);
    }
  };
  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, like_id: null }
            : post;
        }),
      }));
    } catch (err) {
      // console.log(err);
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
            
            <span>{updated_at}</span></div>
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
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body className="align-items-center justify-content-between">
        {title && <Card.Title className="text-center">{title}</Card.Title>}

        <div className={styles.PostBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't agree with your own post!</Tooltip>}
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
          <Link to={`/posts/${id}`}>
            <i className="fa fa-commenting-o" />
          </Link>
          <span className={styles.Count}>{comments_count}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
