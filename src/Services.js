import React from "react";
import styled from "styled-components";
import PropType from "prop-type";
import Banner from "./Banner";
import {
  Icon,
  Grid,
  Container,
  Divider,
  Header,
  Segment
} from "semantic-ui-react";
import { Transition, Trail } from "react-spring";
import Article from "./Article";
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
const StyledList = styled.ul`
  display: flex;
  flex-flow: column;
  list-style: none;
  & li {
    margin: 10px 0;
  }
  & .icon {
    margin-right: 10px;
    left: -5px;
    position: relative;
  }
`;

export default class Services extends React.Component {
  render() {
    return (
      <div className="service card">
        <Banner title="Our Services" />
        <Grid centered>
          <Article header={"SAME DAY COURIER DELIVERY "}>
            <p>
              When you need your package or parcel delivered the same day,check
              out our range of specialised business solutions. We are available
              24 hours a day, 365 days a year: Here are some of our solutions:
              <StyledList>
                <li>
                  <Icon name={"paper plane"} color="yellow" />
                  Scheduled solutions for single or multiple collections and
                  deliveries :
                </li>
                <li>
                  <Icon name={"paper plane"} color="yellow" />
                  Person to person dedicated delivery for peace of mind : your
                  goods are secure
                </li>
                <li>
                  <Icon name={"paper plane"} color="yellow" />
                  Refrigerated Vehicle Fleet for specialised needs
                </li>
                <li>
                  <Icon name={"paper plane"} color="yellow" />
                  Domestic air movements
                </li>
                <li>
                  <Icon name={"paper plane"} color="yellow" />
                  Emergency parts delivery for Aircraft on Ground (AOG )
                </li>
                <li>
                  <Icon name={"paper plane"} color="yellow" />
                  Hazardous or dangerous goods transportation
                </li>
                <li>
                  <Icon name={"paper plane"} color="yellow" />
                  Centralised or local warehouse options
                </li>
              </StyledList>
            </p>
            <p>
              Operating from more than 15 locations, our regional network is
              operated by road and air, utilising a fleet of more than 80
              vehicles:- from motorbikes and vans through to 40ft trailers.
            </p>
            <p>
              For international deliveries we have agreements with domestic
              airlines thus providing a fully managed service for your schedule
              or ad-hoc logistical requirements.
            </p>
          </Article>

          <Article
            header="WAREHOUSING, LOGISTICS & DISTRIBUTION"
            icon="thumbs up"
          >
            <p>
              No matter what the size of your operation we have the solution for
              you at Courier International. Our Warehousing Logistics and
              Distribution solutions are easily integrated with a warehouse
              management system (WMS) to improve efficiency in all that we do
              thus minimizing your transport costs.
            </p>
          </Article>

          <Article header={"OFFICE/HOME PACKING AND DELIVERY"} icon="thumbs up">
            <p>
              If you have parcels at your office or home, you need not to worry
              because our packing and delivery team is always ready to come pack
              and have your parcel ready for delivery.
            </p>
          </Article>
          <Article header={"OVERNIGHT COURIER"} icon="thumbs up">
            <p>
              This solution is designed to ensure that no day-time working hours
              are lost by getting your goods transported while you are in a deep
              sweet slumber and by the crack of dawn as our offices are opened
              the receiver gets it securely and on time.
            </p>
          </Article>

          <Article header={"SAME DAY SERVICES"} icon="thumbs up">
            <p>
              We understand your urgency and make sure that your goods are
              delivered safely and on time. This solution is available on call
              and includes collection, packing and delivery within the agreed
              time from 1 hr to the premises of the receiver.
            </p>
          </Article>
          <Article header={"MAIL ROOM ATTENDANCE"} icon="thumbs up">
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
