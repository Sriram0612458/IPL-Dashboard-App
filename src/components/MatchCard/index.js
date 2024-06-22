import './index.css'

const MatchCard = props => {
  const {matchData} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchData
  return (
    <li className="list-elem">
      <div className="matchCard-main">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="teamlogo"
        />
        <p className="teamheading">{competingTeam}</p>
        <p className="teampara">{result}</p>
        <p className="teamresult">{matchStatus}</p>
      </div>
    </li>
  )
}
export default MatchCard
