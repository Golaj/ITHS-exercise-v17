import React, { Component } from 'react'
import Header from './header'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      places: [],
      apiResult: null
    }

    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
  }

  getPlaces = async place => {
    const base = process.env.REACT_APP_ROME_2_RIO_BASE
    const key = process.env.REACT_APP_ROME_2_RIO_KEY
    const url = `${base}1.4/json/Geocode?key=${key}&query=${place}`

    let response = await fetch(url)
    let data = await response.json()
    return data
  }

  handleSearchChange = event => {
    this.setState({ searchValue: event.target.value })
  }

  handleSearchSubmit = event => {
    event.preventDefault()
    this.getPlaces(this.state.searchValue).then(data => {
      console.log(data)

      let places = data.places

      this.setState({
        places
      })
    })
  }

  render() {
    const places = this.state.places.length
      ? this.state.places.map((place, i) => {
          return (
            <li key={`${i}-react-key`}>
              <h3>{place.canonicalName}</h3>
              <p>{place.kind}</p>
              <p>
                {place.lat}, {place.lng}
              </p>
              <p>{place.longName}</p>
            </li>
          )
        })
      : null

    return (
      <div className='App'>
        <Header title={'hello'} />
        <h3>Search places now!</h3>
        <form onSubmit={this.handleSearchSubmit}>
          <input onChange={this.handleSearchChange} type='text' name='search' />
          <button style={{ margin: '0 0 0 20px' }}>Sök</button>
        </form>

        <div>
          <h1>Places</h1>
          <ul>{places}</ul>
        </div>
      </div>
    )
  }
}

export default App
