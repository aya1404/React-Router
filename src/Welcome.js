import React from 'react'
import {Link} from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='section'>
        <div className="content">
            <div className="info">
                <p>Welcome! Join us for a fantastic <span className="movie-night">movie night</span> filled with popcorn, laughter, and great company! Whether you're a fan of thrilling action, heartwarming dramas, or side-splitting comedies, we've got a film lineup to cater to all tastes. Save the date and bring your favorite snacks to make it a memorable evening. We choose a movie List for you and you can chech every movie trailer. Also, you can add movies to your list. Click the button to discover more about our movie application and <span className="movie-night">start creating your movie list.</span></p>
                <Link to='/movieList' className="join-btn">Start</Link>
            </div>
        </div>
    </div>
  )
}

export default Welcome