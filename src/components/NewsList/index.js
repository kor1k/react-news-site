import React, {Component} from 'react'
import axios from 'axios';
import {API_KEY} from "../../config/api";

const API_GET_NEWS = 'https://newsapi.org/v2/top-headlines?country=ua&apiKey=577875e1041e4c7a88044f12a5d3ee87'
export default class NewsList extends Component {
    state = {
        newsList: []
    }

    componentDidMount() {
        axios.get(API_GET_NEWS)
            .then((res) => {
                this.setState({

                    newList: res.data.articles
                })
            })
    }

    render() {
        const news = this.state.newsList.map((item) => {
            return (
                {news}
            )
        })
        return (
            <div>
                <div className='row news-items' key={item.id}>
                    <div className='col-4 news-image'>
                        <img src={item.urlToImage} alt="title"/>
                    </div>
                    <div className='col-8 news-info'>
                        <a href={item.url} className="news-title">{item.title}</a>
                        <p className="news-short">{item.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}
