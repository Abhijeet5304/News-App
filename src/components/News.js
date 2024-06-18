import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 6,
  };

 
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0,
    };
    document.title=`Daily News-${this.props.category.toUpperCase()}`;
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=19dff94e649c4dabadf8294abe00ada3&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false
    });

  }
  async componentDidMount() {
    this.updateNews()
  }
  
  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=19dff94e649c4dabadf8294abe00ada3&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseddata.articles),
      totalResults: parseddata.totalResults,
      loading: false
      })
    }


  render() {
    return (
      <>
        <h2 className="text-center " style={{color:"black", fontSize:"40px"}}><b>DailyNews - Top Headlines - {this.props.category.toUpperCase()}</b></h2>
        {this.state.loading && <Loader />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loader/>}
        >
    <div>
          <div className="container">
        <div className="row">
          
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 44) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    Imageurl={element.urlToImage}
                    Newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </div>
        </InfiniteScroll>

        
      </>
    );
  }
}

export default News;
