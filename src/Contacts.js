import React from "react";
import Banner from "./Banner";
import ReactContactForm from "react-mail-form";
import Kenya from "./Assets/Images/kenya.png";
import Uganda from "./Assets/Images/uganda.png";
import Ssudan from "./Assets/Images/southsudan.png";
import { Card, Grid, Image } from "semantic-ui-react";
import { Trail } from "react-spring";

const contactObj = [
  {
    country: "kenya",
    city: "Nairobi",
    address: " Mwalimu Cooperative Building, Tom Mboya street",
    tel: "+254-713 592 975",
    email: "info@courierint.com",
    flag: "kenya"
  },
  {
    country: "Uganda",
    city: "Kampala",
    address: " London Chambers, Next to Pioneer Mall, Johnsons Street ",
    tel: "+256 759 937 581",
    email: "info@courierint.com",
    flag: "uganda"
  },
  {
    country: "South Sudan",
    city: "Juba",
    address: "Next to New UAP Building Hai Malakia Juba ",
    tel: "+211-971-034-549, +211-954-600-687 ",
    email: "info@courierint.com",
    flag: "southsudan"
  }
];
const flags = {
  kenya: Kenya,
  uganda: Uganda,
  southsudan: Ssudan
};

const Contacts = () => (
  <div>
    <Banner title="Contacts" />
    <Grid>
      <Trail
        items={contactObj}
        keys={item => item.key}
        from={{ transform: "translate3d(-200px,-500px,0)" }}
        to={{ transform: "translate3d(50px,10px,0)" }}
      >
        {item => props => (
          <Grid.Column mobile="14" tablet="5" computer="5">
            <Card style={props}>
              <Image src={flags[item.flag]} />
              <Card.Content>
                <Card.Header>{item.country}</Card.Header>
                <Card.Meta>country: {item.country}</Card.Meta>
                <Card.Meta>city: {item.city}</Card.Meta>
                <Card.Description>
                  <p>Tel : {item.tel}</p>
                </Card.Description>
                <Card.Description>{item.address}</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        )}
      </Trail>
    </Grid>
  </div>
);

export default Contacts;
