import React from 'react'
const Newsitem=(props)=>{
 
 
   let {title , description,imageurl,newsurl,author,date,source} = props;
    return (
        
      <div >
        <div className="card my-3" >
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"style={{left:'90%',zIndex:1}}>
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
      <img src={!imageurl?"https://thumbs.dreamstime.com/b/d-world-news-background-digital-breaking-studio-report-live-208423108.jpg":imageurl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
       <p> <small className="text-muted"><strong> By- {author=== null ||""?"Unknown":author} and Published on {new Date(date).toGMTString()}</strong></small></p>
        <a href={newsurl} target="_blank" rel='noreferrer' className="btn btn-primary">know more</a>
      </div>
    </div></div>
    
    )
  }
export default Newsitem
