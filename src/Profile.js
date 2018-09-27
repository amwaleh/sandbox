import React from "react";
import { Grid, Segment, Header } from "semantic-ui-react";
import styled from "styled-components";

const Images = styled.div`
left:0;
width:100%;
height:100%;
min-height: 300px;
background-image: url('https://source.unsplash.com/300x300/?code ${Math.random()}');
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`;

export default class Profile extends React.Component {
  render() {
    return (
      <Grid centered>
        <Grid.Row>
          <Grid.Column computer="4" tablet="15">
            <Images />
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
            <p style={{ margin: `10px 20px` }}>
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
        <Grid.Row reversed="computer">
          <Grid.Column computer="4" tablet="15">
            <Images />
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
            <p style={{ margin: `10px 20px` }}>
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
