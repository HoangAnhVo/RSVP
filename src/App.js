import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GuestList from './GuestList';



class App extends Component {

  state = {
    guests: [
      {
        name: 'Tresure',
        isConfirmed: false
      },
      {
        name: 'Nic',
        isConfirmed: false
      },
      {
        name: 'Ryan Vo',
        isConfirmed: true
      },
    ]
  }

  getTotalInvited =()=> this.state.guests.length;
  // getAttendingGuest =() =>
  // gitUnconfirmedGuests=() =>

  toggleConfirmationAt= (indexToChange)=>{
    this.setState({
      guests: this.state.guests.map((guest, index)=>{
        if(indexToChange === index){
          return {
            ...guest,
            isConfirmed: !guest.isConfirmed
          }
        }
        return guest;
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form>
              <input type="text" value="Safia" placeholder="Invite Someone"/>
              <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox"/> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <GuestList guests={this.state.guests} toggleConfirmationAt={this.toggleConfirmationAt}/>
        </div>
      </div>
    );
  }
}

export default App;
