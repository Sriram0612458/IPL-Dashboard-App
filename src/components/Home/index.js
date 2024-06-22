import {Link} from 'react-router-dom'
import {Component} from 'react'
import TeamCard from '../TeamCard'
import Loader from 'react-loader-spinner'

import './index.css'

class Home extends Component {
  state = {teamsHome: [], istrue: true}

  componentDidMount() {
    this.teamsFetching()
  }

  teamsFetching = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data1 = await response.json()
    const {teams} = data1
    const formattedData = teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsHome: formattedData, istrue: false})
  }

  render() {
    const {teamsHome, istrue} = this.state

    return (
      <div className="home-div">
        {istrue ? (
          <div testid="loader" className="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div className="home-div-1">
            <div className="home-div-2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="home-heading">Ipl Dashboard</h1>
            </div>

            <ul className="home-list">
              {teamsHome.map(each => (
                <Link to={`/team-matches/${each.id}`} className="link-cards">
                  <TeamCard teamDetail={each} key={each.id} />
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
