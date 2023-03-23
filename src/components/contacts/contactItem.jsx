import PropTypes from 'prop-types';
import { Component } from 'react';

export class ContactItem extends Component {
  deletContact = () => {
    this.props.deleteFromState(this.props.state.key);
  };

  render() {
    return (
      <li>
        <div className="contact-wrap">
          {this.props.state.name}: {this.props.transformNumber(this.props.state.number)}
          <button className="delete-contact" onClick={this.deletContact}>
            Delete
          </button>
        </div>
      </li>
    );
  }
}

ContactItem.propsTypes = {
  deleteFromState: PropTypes.func,
  transformNumber: PropTypes.func,
  state: PropTypes.object
}