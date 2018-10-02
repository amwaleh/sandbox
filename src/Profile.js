import React from "react";
import { Grid, Segment, Header } from "semantic-ui-react";
import styled from "styled-components";

const Images = styled.div`
left:0;
width:100%;
height:100%;
min-height: 300px;
background-image: url(${props =>
  `'https://source.unsplash.com/600x300/?${props.topic} ${Math.random()}'`});
background-repeat: no-repeat;
background-position: right;
background-size: cover;
border-radius:5px;
filter: grayscale(0.6) hue-rotate(20deg) brightness(1.15);
&:hover{
  transition: filter 1s ease-in-out 0.6s;
  filter: grayscale(0.2) hue-rotate(0deg) brightness(1.15);

& div{
  transition: opacity 1s ease-in-out 0.6s;
  opacity:0;

}
}



`;
const Gradient = styled.div`
  width:100%;
  height:100%;
  background: ${props =>
    `linear-gradient(to ${props.direction ||
      "right"},rgba(0,0,50,0.3) 60%,#00b5ad82 90%)`};
  
  transition: opacity 0.8s ease-in-out 1s;

`;
export default class Profile extends React.Component {
  render() {
    return (
      <Grid centered padded="vertically">
        <Grid.Row reversed="computer" style={{ minHeight: "500px" }}>
          <Grid.Column>
            <Images topic="iris ">
              <Gradient />
            </Images>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row reversed="computer" style={{ minHeight: "500px" }}>
          <Grid.Column
            mobile="16"
            computer="7"
            verticalAlign="middle"
            textAlign="justified"
          >
            <Header textAlign="mobile center" color="teal">
              Lorem ipsum dolor sit amet
            </Header>

            <p style={{ margin: `10px 20px`, fontSize: "1.2rem" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              link mollis pretium. Integer tincidunt
            </p>
            <p style={{ margin: `10px 20px`, fontSize: "1.2rem" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              link mollis pretium. Integer tincidunt
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ minHeight: "500px" }}>
          <Grid.Column computer="4" tablet="15">
            <Images topic="candle">
              <Gradient />
            </Images>
          </Grid.Column>
          <Grid.Column
            mobile="16"
            computer="8"
            verticalAlign="middle"
            textAlign="justified"
          >
            <Header textAlign="mobile center" color="cyan">
              Lorem ipsum dolor sit amet
            </Header>
            <p style={{ margin: `10px 20px`, fontSize: "1.2rem" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              link mollis pretium. Integer tincidunt
            </p>
          </Grid.Column>
        </Grid.Row>
        <divider />
        <Grid.Row reversed="computer" style={{ minHeight: "500px" }}>
          <Grid.Column computer="4" tablet="15">
            <Images topic="map">
              <Gradient direction={"left"} />
            </Images>
          </Grid.Column>
          <Grid.Column
            mobile="16"
            computer="8"
            verticalAlign="middle"
            textAlign="justified"
          >
            <Header textAlign="mobile center" color="olive">
              Lorem ipsum dolor sit amet
            </Header>
            <p style={{ margin: `10px 20px`, fontSize: "1.2rem" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              link mollis pretium. Integer tincidunt
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
