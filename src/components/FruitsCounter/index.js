// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    banCount: 0,
  }

  onClickEatBanana = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onClickEatMango = () => {
    this.setState(prevState => ({banCount: prevState.banCount + 1}))
  }

  render() {
    const {mangoCount, banCount} = this.state

    return (
      <div className="lightyelloBgContainer">
        <div className="white_bg_container">
          <h1 className="Main_heading">
            Bob ate <span className="count">{mangoCount}</span> mangoes
            <span className="count"> {banCount}</span> bananas
          </h1>
          <h1>
            This Project done by nani with React.js, JavaScript, HTML, CSS
          </h1>

          <div className="counters-control-container">
            <div className="counter-control">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickEatBanana}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="counter-control">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickEatMango}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
