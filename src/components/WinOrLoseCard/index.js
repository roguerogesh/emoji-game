// Write your code here.
import './index.css'

const WinOrLoseCard = () => {
  return (
    <div className="win-or-lose-card">
      <div className="result-container">
        <h1 className="win-lose-heading">You Won</h1>
        <p className="result-para">Best Score</p>
        <p className="results">12/12</p>
        <button className="button" type="button">
          Play Again
        </button>
      </div>
      <img src="https://assets.ccbp.in/frontend/react-js/won-game-img.png" />
    </div>
  )
}

export default WinOrLoseCard
