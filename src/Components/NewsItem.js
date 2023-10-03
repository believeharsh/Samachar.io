
import React, { Component } from 'react'

export default class NewsItem extends Component {
 
  render() {
    let {title, descreption, Imageurl, newsurl} = this.props;
    return (
      <div>
        <div className="card my-2 mx-2" style={{width: "18rem"}}>
          <img src={(Imageurl !== null ) ? Imageurl : "https://static.toiimg.com/photo/msid-85939987/85939987.jpg?pl=37494"  } className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}....</h5>
              <p className="card-text">{descreption}.....</p>
              <a href={newsurl} target='-blank' className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>

      </div>
    )
  }
}

