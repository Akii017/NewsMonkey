import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    // way to take props in class based component
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success"style={{left:'90%' , zIndex:'1'}}>{source}</span>     
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
            </div>
            </div>
      </div>
    ) 
  }
}

export default NewsItem
