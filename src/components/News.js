import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export default class News extends Component {
    // articles= [
    //     {
    //       "source": {
    //         "id": "bbc-news",
    //         "name": "BBC News"
    //       },
    //       "author": null,
    //       "title": "Heath Streak: Former Zimbabwe captain & coach dies aged 49",
    //       "description": "Former Zimbabwe captain and coach Heath Streak, who had been suffering from colon cancer, dies at the age of 49.",
    //       "url": "https://www.bbc.co.uk/sport/cricket/66693655",
    //       "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/3F77/production/_130974261_gettyimages-927831784.jpg",
    //       "publishedAt": "2023-09-03T09:12:56Z",
    //       "content": "Heath Streak had been receiving treatment at a hospital in Johannesburg, South Africa\r\nFormer Zimbabwe captain and coach Heath Streak, who had been suffering from colon cancer, has died at the age of\u2026 [+1746 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": null,
    //         "name": "Slashdot.org"
    //       },
    //       "author": "msmash",
    //       "title": "NFT Startup Rario Founders To Leave a Year After $120M Funding",
    //       "description": "Founders of Rario, the cricket NFT startup in which India's Dream11 led a $120 million funding round last year, are leaving the two-year-old firm, TechCrunch reported Friday, citing people familiar with the matter. From the report: Ankit Wadhwa, who serves as\u2026",
    //       "url": "https://slashdot.org/story/23/09/08/1412226/nft-startup-rario-founders-to-leave-a-year-after-120m-funding",
    //       "urlToImage": "https://a.fsdn.com/sd/topics/business_64.png",
    //       "publishedAt": "2023-09-08T15:08:00Z",
    //       "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your \u2026 [+268 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": "bbc-news",
    //         "name": "BBC News"
    //       },
    //       "author": "https://www.facebook.com/bbcnews",
    //       "title": "Mukesh Ambani succession plan: The new generation taking over from Asia\u2019s richest man",
    //       "description": "Mukesh Ambani, who heads India's biggest business empire, is preparing to hand over the reins to his children.",
    //       "url": "https://www.bbc.co.uk/news/world-asia-india-66643831",
    //       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/14114/production/_126769128_reliance.jpg",
    //       "publishedAt": "2023-09-02T23:37:05Z",
    //       "content": "For months, the world has been captivated by the last season of Succession, the Emmy-winning TV drama on the lives of the corporate \u00E9lite. \r\nBut in India, a real-life succession plan, involving a for\u2026 [+6960 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": null,
    //         "name": "The Atlantic"
    //       },
    //       "author": "Alan Taylor",
    //       "title": "Photos of the Week: Smart Lander, Elephant Puppet, Zozobra Burning",
    //       "description": "The World Tango Championship in Argentina, devastating floods in Greece, a buffalo police patrol in Brazil, a muddy mess at the Burning Man Festival, and much more",
    //       "url": "https://www.theatlantic.com/photo/2023/09/photos-of-the-week-smart-lander-elephant-puppet-zozobra-burning/675254/?utm_source=feed",
    //       "urlToImage": null,
    //       "publishedAt": "2023-09-08T04:30:00Z",
    //       "content": "The World Tango Championship in Argentina, devastating floods in Greece, a scene from the 80th Venice Film Festival, a cricket game in Afghanistan, a light festival in South Africa, a buffalo police \u2026 [+72 chars]"
    //     }
    // ]

    capital=(string)=>{
      return string.charAt(0).toUpperCase()+string.slice(1)
    }

    constructor(props){
        super(props)
        // console.log("from constructor")
        this.state={
            // articles:this.articles,
            articles:[],
            loading:false,
            page:1,
            
        }
        document.title=`${this.capital(this.props.category)} - NewsMayhem`
    }

    // async updateNews(){
    //   this.props.setProgress(10)
    //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=165ea706605c4183a44a3cc42b5168ef&page=${this.state.page}&pageSize=${this.props.pageSize}`
    //     this.setState({loading:true})
    //     let data=await fetch(url)
    //     this.props.setProgress(30)
    //     let parsedData=await data.json()
    //     this.props.setProgress(70)
    //     this.setState({
    //       articles: parsedData.articles,totalResults:parsedData.totalResults,
    //       loading:false
    //     })

    //     this.props.setProgress(100)
    // }

    async componentDidMount(){
        //runs after rendering

        this.props.setProgress(10)
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=165ea706605c4183a44a3cc42b5168ef&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data=await fetch(url)
        this.props.setProgress(30)
        let parsedData=await data.json()
        this.props.setProgress(70)
        this.setState({
          articles: parsedData.articles,totalResults:parsedData.totalResults,
          loading:false
        })
        this.props.setProgress(100)

        // this.updateNews()
    }

    handleNext=async ()=>{
      if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        this.props.setProgress(10)
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=165ea706605c4183a44a3cc42b5168ef&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data=await fetch(url)
        this.props.setProgress(30)
        let parsedData=await data.json()
        this.props.setProgress(70)
        this.setState({
          page:this.state.page+1,
          articles: parsedData.articles,
          loading:false
        })
        this.props.setProgress(100)
      }
      // this.setState({page:this.state.page +1})
      // this.updateNews()
    }


  handlePrevious=async ()=>{
    this.props.setProgress(10)
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=165ea706605c4183a44a3cc42b5168ef&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data=await fetch(url)
    this.props.setProgress(30)
    let parsedData=await data.json()
    this.props.setProgress(70)
    this.setState({
      page:this.state.page-1,
      articles: parsedData.articles,
      loading:false
    })
    this.props.setProgress(100)

    // this.setState({page:this.state.page -1})
    // this.updateNews()
}

  render() {
    return (
      <div className="container my-3">
        <h2 className='text-center' style={{marginTop: '80px'}}>NewsMayhem -Top {this.capital(this.props.category)} Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-3 m-2" key={element.url}>
                        <NewsItem  title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,85):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>
            })}
        </div>
      <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevious}> &larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
      </div>
      </div>
    )
  }
}



