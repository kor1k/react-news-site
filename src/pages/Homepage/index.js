import React, {Component} from 'react'
import {TopMenu} from "../c";
import '.Homepage.scss'

export default class Homepage extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12 top-menu'>
                        <ul>
                            <li>Menu 1</li>
                            <li>Menu 2</li>
                            <li>Menu 3</li>
                            <li>Menu 4</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">News</div>
                    <div className="col-4">Aside</div>
                </div>
            </div>
        )
    }
}