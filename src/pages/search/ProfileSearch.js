import React from "react";
import styles from "../../styles/Post.module.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";


const ProfileSearch = (props) => {
  const {
    owner,
    profile_id,
    image,
    fan_or_club,
    support,
  } = props;

  

  return (
    
    <Card className={styles.Post}>
      <Card.Body>
        <h5>{fan_or_club}</h5>
      </Card.Body>
      <Link to={`/profiles/${profile_id}`}>
            <Avatar src={image} height={55} />
            {owner}
          </Link>
      <Card.Body className="align-items-center justify-content-between">
        <h4>I support {support}</h4>
      </Card.Body>
    </Card>
  );
};

export default ProfileSearch;