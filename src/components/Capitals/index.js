import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  getCountryName = () => {
    const {activeCapitalId} = this.state
    const countryName = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeCapitalId,
    )
    return countryName.country
  }

  onSelectCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  render() {
    const {activeCapitalId} = this.state
    const countryName = this.getCountryName()
    return (
      <div className="bg-container">
        <div className="countries-capitals-container">
          <h1 className="title">Countries and Capitals</h1>
          <div className="country-capitals-container">
            <select
              className="options"
              value={activeCapitalId}
              onChange={this.onSelectCapital}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  className="option"
                  key={eachCapital.id}
                  value={eachCapital.id}
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="answer">{countryName}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
