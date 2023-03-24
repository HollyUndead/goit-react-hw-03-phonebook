/* eslint-disable array-callback-return */
import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactItem } from './contacts/contactItem';
import { FormCreateContact } from './form/form';
import { Filter } from './filter/filter';
import './contacts/contacts.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  componentDidMount() {
    const local = JSON.parse(localStorage.getItem('contacts'));
    console.log(local);
    if (local !== null) {
      this.setState({ ...this.state, contacts: local.contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      const contact = { contacts: this.state.contacts };
      localStorage.setItem('contacts', JSON.stringify(contact));
    }
  }

  transformNumber = number => {
    let numberArr = number.split('');
    return `${numberArr.slice(0, 3).join('')}-${numberArr
      .slice(3, 5)
      .join('')}-${numberArr.slice(5, 7).join('')}`;
  };

  setNewContact = ({ name, number, ev }) => {
    const names = this.state.contacts.filter(el => {
      return (el.name.toLowerCase() === name.toLowerCase());
    });
    const numbers = this.state.contacts.filter(el => {
      return (Number(el.number) === Number(number));
    });
    if (names.length !== 0) {
      alert(`${name} is already in contacts`);
      return;
    } else if (numbers.length !== 0) {
      alert(`${this.transformNumber(number)} is already in contacts`);
      return;
    } else {
      this.setState(prevState => {
        let arr = [...prevState.contacts];
        arr.push({ name, number, id: nanoid() });
        return { ...this.state, name: name, number: number, contacts: arr };
      });
    }
    ev.target.reset();
  };

  deleteFromState = id => {
    let newContact = [...this.state.contacts];
    newContact = newContact.filter(el => {
      if (el.id !== id) {
        return el;
      }
    });
    this.setState({ contacts: newContact });
  };

  setFilter = filter => {
    this.setState({ filter: filter });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          // alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <FormCreateContact setNewState={this.setNewContact} />
        <h2>Contacts</h2>
        <Filter setFilter={this.setFilter} />
        <ul>
          {this.state.contacts.map(el => {
            const reg = new RegExp(this.state.filter.toLowerCase());
            const name = el.name.toLowerCase();
            if (reg.test(name)) {
              return (
                <ContactItem
                  state={el}
                  key={el.id}
                  deleteFromState={this.deleteFromState}
                  transformNumber={this.transformNumber}
                />
              );
            }
          })}
        </ul>
      </div>
    );
  }
}