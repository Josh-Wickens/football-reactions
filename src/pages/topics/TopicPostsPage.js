import React, { useEffect, useState } from "react";

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


function TopicPostsPage({ message, filter = "" }) {
  const [topics, setTopicPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchTopicPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/topics/?${filter}`);
        setTopicPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchTopicPosts();
  }, [filter, pathname]);


  return (
    <Row className="h-100">
        <Col lg={2} sm={1} className="d-none d-lg-block p-0 p-lg-2">
        <ActiveProfiles />
      </Col>
      <Col className="py-2 p-0 p-lg-2" sm={10} lg={8}>
        <p>Popular profiles mobile</p>
        <PopularProfiles mobile/>
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
      <Col lg={2} sm={1} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default TopicPostsPage;