import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, Imageurl, Newsurl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="my-5">
          <div className="card">
            <div style={{
              display:"flex",
              justifyContent:"flex-end",
              position:"absolute",
              right:"0"
            }}>
            <span className="badge rounded-pill bg-danger" style={{left: '90%',zIndex:'1'}}>
              {source}
            </span>
            </div>
            <img src={Imageurl} className="card-img-top" alt="Error Loading " />
            <div className="card-body">
              <h5 className="card-title ">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">
                  by {!author ? "Unknown" : author} on {" "}
                  {new Date(date).toGMTString()}
                </small>
              </p>
              <a
                href={Newsurl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-primary"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
