import React from 'react';
import Octicon, { x } from 'octicons-react';
import PropTypes from 'prop-types';
import { Card
       , DeleteButton
       , Row } from 'Components';

const req = require('./../../scripts/ClientRequests');

class LeftCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => (
    req.deleteEntry(this.props.entry.id)
      .then(() => this.props.refresh())
  );

  render() {
    return (
      <Card id={this.props.entry.id} className="mb-3 shadow" bg="light" style={{ width: '24rem' }}>
        <Card.Header>
          <Row className='d-flex justify-content-between flex-nowrap'>
            {this.props.entry.label}
            <DeleteButton marginTop={'-.25rem'} handleClick={this.handleClick}/>
          </Row>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {this.props.entry.body}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

LeftCard.propTypes = {
  entry: PropTypes.object.isRequired,
  refresh: PropTypes.func.isRequired
};

export default LeftCard;