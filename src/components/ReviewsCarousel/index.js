// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  leftArrow = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  righArrow = () => {
    const {count} = this.state
    if (count <= 4) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props

    const {count} = this.state
    console.log(count)
    console.log(reviewsList[count].imgUrl)

    return (
      <div className="container">
        <h1>Reviews</h1>
        <div className="sub-container">
          <button
            onClick={this.leftArrow}
            data-testid="leftArrow"
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="dis">
            <img
              src={reviewsList[count].imgUrl}
              alt={reviewsList[count].username}
            />
            <p>{reviewsList[count].username}</p>
            <p>{reviewsList[count].companyName}</p>
            <p>{reviewsList[count].description}</p>
          </div>
          <button
            data-testid="rightArrow"
            onClick={this.righArrow}
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
