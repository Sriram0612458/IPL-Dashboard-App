import './index.css'

const TeamCard = props => {
  const {teamDetail} = props
  const {name, teamImageUrl} = teamDetail

  return (
    <li className="list-cards">
      <div className="cards-main">
        <img src={teamImageUrl} alt={name} className="cards-image" />
        <p className="cards-heading">{name}</p>
      </div>
    </li>
  )
}

export default TeamCard
