import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Upload from "../../assets/upload-image-icon.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

function TopicsPostCreateForm() {
  useRedirect("loggedOut");

  const [errors, setErrors] = useState({});

  const [topicPostData, setTopicPostData] = useState({
    topic: "",
    question: "",
    image: "",
  });

  const { topic, question, image } = topicPostData;

  const imageInput = useRef(null)
  const history = useHistory();

  const handleChange = (event) => {
    setTopicPostData({
      ...topicPostData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setTopicPostData({
        ...topicPostData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("topic", topic);
    formData.append("question", question);
    formData.append("image", imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post("/topics/", formData);
      history.push(`/topics/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Please Select a Topic</Form.Label>
        <Form.Control as="select" name="topic" value={topic} onChange={handleChange} >
        <option value="General">General</option>
       <option value="Players">Players</option>
       <option value="Teams">Teams</option>
       <option value="Transfers">Transfers</option>
       <option value="Fixtures">Fixtures</option>
       <option value="Results">Results</option>
       </Form.Control>
      </Form.Group>
      {errors?.topic?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

<Form.Group>
         <Form.Label>Your Question or Post</Form.Label>
         <Form.Control type="text" name="question" value={question} onChange={handleChange} />
       </Form.Group>
       {errors?.question?.map((message, idx) => (
         <Alert variant="warning" key={idx}>
           {message}
         </Alert>
       ))}

    
    
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Post
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col justify-content-center>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div justify-content-center>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <div className={styles.ImageCont}>
                <Form.Label
                  className="upload-image"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
                </div>
              )}
            <div className="d-flex justify-content-center">
              <Form.File
                className="image-upload"
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
              </div>
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <div>{textFields}</div>
          </Container>
        </Col>
        
      </Row>
    </Form>
  );
}

export default TopicsPostCreateForm;
