import './Review.css'
import React from 'react'
import ReviewForm from './ReviewForm'
import ReviewItem from './ReviewItem'

const Review = () => {
    return (
        <div className="tab-panel-reviews">
        <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
        <div className="comments">
            <ol className="comment-list">
              <ReviewItem/>
              <ReviewItem/>
              
            </ol>
        </div>

        <div className="review-form-wrapper">
            <h2>Add a review</h2>
            <ReviewForm/>
        </div>

    </div>
    )
}

export default Review