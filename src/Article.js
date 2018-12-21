import React from "react";
import { Grid, Header, Icon, Divider } from "semantic-ui-react";
import styled from "styled-components";

const Content = styled.p`
  color: #767676;
  line-height: 2.5;
  letter-spacing: 1px;
  font-size: 1rem;
`;

const Article = ({ header, children, icon }) => (
  <Grid.Row>
    <Grid.Column mobile="15" tablet="10" computer="8" widescreen="5">
      <div
        centered
        color={"red"}
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        {icon && <Icon circular inverted name={icon} color="yellow" />}
      </div>
      <Divider color="yellow" inverted horizontal>
        <Header as="h4" color="teal">
          {header}
        </Header>
      </Divider>
      <Content>{children}</Content>
    </Grid.Column>
  </Grid.Row>
);

export default Article;
