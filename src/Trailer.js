import React from 'react'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'


const Trailer = ({movies}) => {
    const {id} = useParams()
    const foundMovie = movies.find(el=>el.id ===+ id)
  return (
    <div className='w3-display-middle'>
        <div class="card mb-3" style={{width: "1015px"}}>
          <div class="row g-0">
            <div class="col-md-4">
              <iframe width="350" height="320" src={foundMovie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div class="col-md-8" width="500">
              <div class="card-body">
                <h5 class="card-title">{foundMovie.title}</h5>
                <p class="card-text">{foundMovie.description}</p>
                <Link to="/movieList" className="w3-display-bottomright back-btn">Go Back</Link>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Trailer