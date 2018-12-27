import React from "react";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Search,
  Segment
} from "semantic-ui-react";

const SegmentExamplePlaceholderGrid = () => (
  <Segment placeholder inverted color="teal" style={{ marginTop: "100px" }}>
    <Grid columns={2} stackable textAlign="center">
      <Divider vertical inverted />

      <Grid.Row verticalAlign="middle">
        <Grid.Column>
          <ul color="white" inverted>
            <Icon name="tty" color="white" inverted />
            call us :
            <li>
              <tel> kenya : +254-713-592-975</tel>
            </li>
            <li>
              <tel> uganda : +256-759-937-581</tel>
            </li>
            <li>
              <tel> south sudan : +211-971-034-549</tel>
            </li>
          </ul>
        </Grid.Column>

        <Grid.Column only="computer tablet">
          <Header icon>
            <Icon name="world" />
            Email us at :
          </Header>
          <Button primary>info@courierint.com</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default SegmentExamplePlaceholderGrid;
