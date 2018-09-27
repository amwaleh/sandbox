import React from "react";
import styled from "styled-components";
import PropType from "prop-type";
import {
  Menu,
  Grid,
  Container,
  Divider,
  Header,
  Segment
} from "semantic-ui-react";

import NavBar from "./NavBar";
const H1 = styled.h1`
color:teal;
font-weight: 700;
text-shadow: 1px 1px 2px black;

`;
const books = [
  {
    title: "Colder Kind of Death, A",
    caption: "Crime|Drama|Mystery",
    description: "Visionary",
    poster: "http://dummyimage.com/163x109.bmp/ff4444/ffffff"
  },
  {
    title: "Mezzo Forte",
    caption: "Action|Animation|Comedy",
    description: "De-engineered",
    poster: "http://dummyimage.com/203x100.bmp/cc0000/ffffff"
  },
  {
    title: "Men with Brooms",
    caption: "Comedy|Drama|Romance",
    description: "Upgradable",
    poster: "http://dummyimage.com/182x217.png/cc0000/ffffff"
  },
  {
    title: "Bad Men of Missouri",
    caption: "Action|Romance|Western",
    description: "Proactive",
    poster: "http://dummyimage.com/105x195.png/ff4444/ffffff"
  },
  {
    title: "Man Named Pearl, A",
    caption: "Documentary",
    description: "content-based",
    poster: "http://dummyimage.com/181x243.bmp/5fa2dd/ffffff"
  },
  {
    title: "Kung Fu Panda 2",
    caption: "Action|Adventure",
    description: "protocol",
    poster: "http://dummyimage.com/174x101.bmp/ff4444/ffffff"
  },
  {
    title: "A Promise",
    caption: "Drama|Romance",
    description: "time-frame",
    poster: "http://dummyimage.com/175x106.jpg/5fa2dd/ffffff"
  },
  {
    title: "In Darkness",
    caption: "Drama",
    description: "policy",
    poster: "http://dummyimage.com/116x119.bmp/dddddd/000000"
  },
  {
    title: "Lions For Lambs",
    caption: "Drama|Thriller|War",
    description: "impactful",
    poster: "http://dummyimage.com/170x127.jpg/dddddd/000000"
  },
  {
    title: "Adventure of Sherlock Holmes' Smarter Brother, The",
    caption: "Comedy|Crime|Mystery",
    description: "budgetary management",
    poster: "http://dummyimage.com/173x216.png/cc0000/ffffff"
  }
];
const BookCover = styled(Grid.Column)`

border-bottom: 3px solid teal;
box-shadow: 1px 1px 2px #ccc;
max-width: 500px;
min-width: 200px;
margin-right :40px;
margin-bottom:100px;
margin-top:20px;
padding:0 !important;
& img {
  width:100%;
  height:200px;
  filter: grayscale(0.9) hue-rotate(226deg) brightness(1.15);
}
& h2 {
  color: #000;
  opacity:0.8
  font-weight:700;
  font-size:1rem;
  text-wrap:wrap;
  margin-left:10px;
  margin-bottom:10px;
}

`;
const Content = styled.p`
color: #767676;
line-height: 2.5;
letter-spacing:1px;
font-size:1rem;
`;
const StyledContainer = styled(Container)`
max-width:400px;
`;
export default class Card extends React.Component {
  render() {
    return (
      <div className="App card">
        <NavBar inverted />
        <Segment
          style={{
            minHeight: "700px",
            backgroundImage:
              "url('https://source.unsplash.com/800x900/?smile')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: "#000",
            filter: "grayscale(0.9) hue-rotate(226deg) brightness(1.15)",
            padding: "0"
          }}
          inverted
        >
          <div
            style={{
              minHeight: "700px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              color: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              fontSize: "4rem",
              lineHeight: "5rem",
              flexShrink: "1",
              filter: "dropShadow(16px 16px 10px rgba(0, 0, 0, 0.9))"
            }}
          >
            Read a Book a day
          </div>
        </Segment>
        <Grid centered>
          <Grid.Row>
            <Grid.Column computer="10" mobile="16" padded="horizontaly">
              <StyledContainer color={"teal"}>
                <Divider color="teal" inverted horizontal>
                  <Header color="teal">Gratitude</Header>
                </Divider>
                <Content>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa strong. Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Donec quam felis, ultricies nec,
                  pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                  enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                  eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                  vitae, justo. Nullam dictum felis eu pede link mollis pretium.
                  Integer tincidunt. Cras dapibus. Vivamus elementum semper
                  nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                  porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                  lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                  Phasellus viverra nulla ut metus varius laoreet. Quisque
                  rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                  Curabitur ullamcorper ultricies nisi.
                </Content>
                <Divider />
              </StyledContainer>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid centered computer={4} padded="horizontally">
              <Grid.Column computer="3" only="computer" />
              {books.map(book => {
                return (
                  <BookCover computer="1" key={Math.random()}>
                    <img
                      src={`https://source.unsplash.com/300x300/?code ${Math.random()}`}
                    />
                    <h2>{book.title}</h2>
                  </BookCover>
                );
              })}
              <Grid.Column computer="1" only="computer" />
            </Grid>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column mobile="15" computer="7" widescreen="5">
              <StyledContainer textAlign="justified">
                <Divider color="teal" inverted horizontal>
                  <Header color="olive">Ambition</Header>
                </Divider>
                <Content>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa strong. Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Donec quam felis, ultricies nec,
                  pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                  enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                  eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                  vitae, justo. Nullam dictum felis eu pede link mollis pretium.
                </Content>
              </StyledContainer>
            </Grid.Column>
            <Grid.Column mobile="15" computer="7" width="10">
              <StyledContainer textAlign="justified">
                <Divider color="olive" inverted horizontal>
                  <Header color="grey">Ambition</Header>
                </Divider>
                <Content>
                  Integer tincidunt. Cras dapibus. Vivamus elementum semper
                  nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                  porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                  lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                  Phasellus viverra nulla ut metus varius laoreet. Quisque
                  rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                  Curabitur ullamcorper ultricies nisi.
                </Content>
              </StyledContainer>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
