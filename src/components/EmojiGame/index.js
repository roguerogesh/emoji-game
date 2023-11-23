/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import './index.css'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0}

  clickEmoji = id => {}

  render() {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const {score, topScore} = this.state

    return (
      <div className="game-container">
        <NavBar score={score} topScore={topScore} />
        <div className="bg-container">
          <ul className="emojis-container">
            {shuffledEmojisList().map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                eachEmoji={eachEmoji}
                clickEmoji={this.clickEmoji}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
