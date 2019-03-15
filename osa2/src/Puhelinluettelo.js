import React from 'react';

class Puhelinluettelo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '0000'}
      ],
      newName: '',
      newNumber: ''
    }
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addName}>
          <div>
            nimi: <input 
              value={this.state.newName}
              onChange={this.handleNameChange}/>
          </div>
          <div>
            numero: <input 
              value={this.state.newNumber}
              onChange={this.handleNumberChange}/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <ul>
          {this.state.persons.map(n => <li>{n.name}  {n.number}</li>)}
        </ul>
      </div>
    )
  }

  addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }

    if (nameObject.name === '' || nameObject.number === ''){
      alert("every contact needs both name and number")
      
    }else{
      if (this.state.persons.map(e => e.name).indexOf(nameObject.name) !== -1){
        alert("person already on the list")
        this.setState({
          newName: '',
          newNumber: ''
        })
      }else{
        const contacts = this.state.persons.concat(nameObject)
    
        this.setState({
          persons: contacts,
          newName: '',
          newNumber: ''
        })
      }
    }
  }

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }
  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
  }
}

export default Puhelinluettelo