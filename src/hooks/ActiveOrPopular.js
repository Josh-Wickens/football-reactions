import React from "react";
import { Form } from "react-bootstrap";
import PopularProfiles from "../pages/profiles/PopularProfiles";
import ActiveProfiles from "../pages/profiles/ActiveProfiles";

export const ActiveOrPopular = () => {

    return (
      <>
        <Form.Group>
        <Form.Label>Popular & Active Profiles</Form.Label>
        <Form.Control as="select" value="">
        <option value={<PopularProfiles />}>Most Popular</option>
        <option value={<ActiveProfiles />}>Most Active</option>
       </Form.Control>
      </Form.Group>
      </>
    );
  };


