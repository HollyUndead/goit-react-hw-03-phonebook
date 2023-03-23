import { ContactsList } from './contacts/contacts';
import { Component } from 'react';

export class App extends Component {
  render() {
      return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <ContactsList state={this.state} />
      </div>
    )
  } 
};
