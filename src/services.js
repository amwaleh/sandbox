import React from "react";
import styled from "styled-components";
import PropType from "prop-type";
import Banner from "./banner";
import {
  Icon,
  Grid,
  Container,
  Divider,
  Header,
  Segment
} from "semantic-ui-react";
import { Transition, Trail } from "react-spring";

const H1 = styled.h1`
  color: teal;
  font-weight: 700;
  text-shadow: 1px 1px 2px black;
`;

const Content = styled.p`
  color: #767676;
  line-height: 2.5;
  letter-spacing: 1px;
  font-size: 1rem;
`;

const Article = ({ header, children, icon }) => (
  <Grid.Row>
    <Grid.Column mobile="15" computer="8" widescreen="5">
      <div
        centered
        color={"red"}
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        {icon && <Icon circular inverted name={icon} color="grey" />}
      </div>
      <Divider color="teal" inverted horizontal>
        <Header as="h4" color="teal">
          {header}
        </Header>
      </Divider>
      <Content>{children}</Content>
    </Grid.Column>
  </Grid.Row>
);
export default class Services extends React.Component {
  render() {
    return (
      <div className="service card">
        <Banner title="Our Services" />
        <Grid centered>
          <Article header={"Same day courier"}>
            <p>
              When you need your package or parcel delivered the same day, talk
              to us about our range of specialised business solutions they are
              available 24 hours a day, 365 days a year: How we can help:
              <ul>
                <li>
                  Scheduled solutions for single or multiple collections and
                  deliveries :
                </li>
                <li>
                  Person to person dedicated delivery for peace of mind : your
                  goods are secure
                </li>
                <li>Refrigerated Vehicle Fleet for specialised needs</li>
                <li>Domestic air movements</li>
                <li>Emergency parts delivery for Aircraft on Ground (AOG )</li>
                <li>Hazardous or dangerous goods transportation</li>
                <li>Centralised or local warehouse options</li>
              </ul>
            </p>
            <p>
              Operating from more than 15 locations, our regional network is
              operated by road and air, utilising a fleet of more than 80
              vehicles:- from motorbikes and vans through to 40ft trailers.
            </p>
            <p>
              While for international deliveries we have agreements in place
              with domestic airlines in order to provide a fully managed service
              for your scheduled or ad-hoc logistical requirements.
            </p>
          </Article>

          <Article header="WAREHOUSING, LOGISTICS & DISTRIBUTION">
            <p>
              No matter what the size of your operation we have the solution for
              you at Courier International. Our Warehousing Logistics and
              Distribution solutions are easily integrated with a warehouse
              management system (WMS) to improve efficiency in all that we do
              thus minimizing your transport costs.
            </p>
          </Article>

          <Article header={"OFFICE/HOME PACKING AND DELIVERY"}>
            <p>
              If you have parcels at your office or home, you need not to worry
              because our packing and delivery team is always ready to come pack
              and have your parcel ready for delivery.
            </p>
          </Article>
          <Article header={"OVERNIGHT COURIER"}>
            <p>
              This solution is designed to ensure that no day-time working hours
              are lost by getting your goods transported while you are in a deep
              sweet slumber and by the crack of dawn as our offices are opened
              the receiver gets it securely and on time.
            </p>
          </Article>

          <Article header={"SAME DAY SERVICES"}>
            <p>
              We understand your urgency and make sure that your goods are
              delivered safely and on time. This solution is available on call
              and includes collection, packing and delivery within the agreed
              time from 1 hr to the premises of the receiver.
            </p>
          </Article>
          <Article header={"MAIL ROOM ATTENDANCE"}>
            <p>
              You can trust us to be your professional outsourced mailroom
              attendance service provider.
            </p>
          </Article>
        </Grid>
      </div>
    );
  }
}
