import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ProfileSearch from "./ProfileSearch";
import Asset from "../../components/Asset";
import styles from "../../styles/PostsPage.module.css";

import appStyles from "../../App.module.css";
// import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/nothing.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import ActiveProfiles from "../profiles/ActiveProfiles";


function Search({ message, filter = "" }) {
  //   const [posts, setPosts] = useState({ results: [] });
  const [profile, setProfiles] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const { data } = await axiosReq.get(
          `/profiles/?${filter}search=${query}`
        );
        setProfiles(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchProfiles();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

  return (
    <Row className="h-100">

<Col md={3} className="d-none d-lg-block p-0 p-lg-2">
        <ActiveProfiles />
      </Col> 
      
      <Col className="py-2 p-0 p-lg-2" lg={6}>
        
        <div className={styles.Heading}><h3>Search for Fans and Clubs!</h3></div>
        <Form onSubmit={(event) => event.preventDefault()}>
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search profiles"
          />
        </Form>

        {hasLoaded ? (
          <>
            {profile.results.length ? (
              <InfiniteScroll
                children={profile.results.map((profile) => (
                  <profile
                    key={profile.id}
                    {...profile}
                    setProfiles={setProfiles}
                  />
                ))}
                dataLength={profile.results.length}
                loader={<Asset spinner />}
                hasMore={!!profile.next}
                next={() => fetchMoreData(profile, setProfiles)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}

            {profile.results.length ? (
              profile.results.map((profile) => (
                <ProfileSearch key={profile.id} {...profile} setProfiles={setProfiles} />
              ))
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
      <Col md={3} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col> 
    </Row>
  );
}
export default Search;
