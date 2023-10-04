import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  articles = [

  ]

  constructor() {
    super();
    // console.log("Hello I am a constructor from news components")
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,

    }

  }

  async componentDidMount() {
    // console.log("cnd");
    let url = `https://newsapi.org/v2/top-headlines?country=In&apiKey=e6e356601ec24f2d9f6ebc85602e9234&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({loading:true})
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalarticles: parsedData.totalarticles,
      loading: false
    })

  }

  handlePreviousclick = async () => {
    console.log("previous")
    let url = `https://newsapi.org/v2/top-headlines?country=In&apiKey=e6e356601ec24f2d9f6ebc85602e9234&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
   
    let data = await fetch(url);
    let parsedData = await data.json()

    // console.log(parsedData);
    // this.setState({ articles: parsedData.articles })
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,




    })



  }
  handlenextClick = async () => {
    console.log("yeah I'v called")
    if (!this.state.page + 1 > Math.ceil(this.state.totalarticles / this.props.pageSize)) {
      console.log("next")
      let url = `https://newsapi.org/v2/top-headlines?country=In&apiKey=e6e356601ec24f2d9f6ebc85602e9234&page=$    {this.state.page + 1}&pageSize=${this.props.pageSize}`;
 

      let data = await fetch(url);
      let parsedData = await data.json()

      console.log(parsedData);
      // this.setState({ articles: parsedData.articles })
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
       



      })
    }




  }

  render() {
    return (
      <div>
        <div className="container my-3">
          <h2>NewsMonkey - Top Headlines of India</h2>
          {this.state.loading && <Spinner />}
          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title} descreption={element.description} Imageurl={element.urlToImage} newsurl={element.url} />
              </div>

            })}
          </div>
          <div className="d-flex justify-content-between my-3">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousclick}> 	&larr; Previous</button>
            <button disabled={this.state.page >= Math.ceil(this.state.totalarticles / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenextClick}> Next  &rarr; </button>
          </div>

        </div>

      </div>
    );
  }
}

export default News;
