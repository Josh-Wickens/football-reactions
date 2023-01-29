import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/nothing.png";

import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import ActiveProfiles from "../profiles/ActiveProfiles";
import TopicPost from "./TopicPost";
import { PostTopic } from "../../components/PostTopic";


function TopicPostsPage({ message, filter = "" }) {
  const [topics, setTopicPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchTopicPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/topics/?${filter}search=${query}`);
        setTopicPosts(data);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };

    setHasLoaded(false);
    fetchTopicPosts();
  }, [filter, query, pathname]);


  return (
    <Row className="h-100">

        <Col lg={3} sm={1} className="d-none d-lg-block p-0 p-lg-2">
        <ActiveProfiles />
      </Col>
      <Col className="py-2 p-0 p-lg-2"  lg={6}>
      <Form.Group>
        <row className="text-center"><div><PostTopic /></div></row>
        <Form.Label className=" w-100 text-center">Search a Topic</Form.Label>
        <div><i class="fa fa-arrow-down w-100 text-center"></i></div>
        <Form.Control className="text-center" as="select" value={query} onChange={(event) => setQuery(event.target.value)}>
        <option value="">All</option>
        <option value="General">General</option>
       <option value="Players">Players</option>
       <option value="Teams">Teams</option>
       <option value="Transfers">Transfers</option>
       <option value="Fixtures">Fixtures</option>
       <option value="Results">Results</option>
       </Form.Control>
      </Form.Group>

        {hasLoaded ? (
          <>
            {topics.results.length ? (
              <InfiniteScroll
                children={topics.results.map((topics) => (
                  <TopicPost key={topics.id} {...topics} setTopicPosts={setTopicPosts} />
                ))}
                dataLength={topics.results.length}
                loader={<Asset spinner />}
                hasMore={!!topics.next}
                next={() => fetchMoreData(topics, setTopicPosts)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col lg={3} sm={1} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default TopicPostsPage;