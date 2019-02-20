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
                    newList: res.data
                })
            })
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-4 news-image'>

                    </div>
                    <div className='col-8 news-info'>
                        <a href="#" className="news-title">News list</a>
                        <p className="news-short">Short news</p>
                    </div>
                </div>
            </div>
        )
    }
}
