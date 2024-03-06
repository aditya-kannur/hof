import React, { Component } from 'react';
import './HigherOrderComponent.css';

class HigherOrderComponent extends Component {

    constructor() {
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
                { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age: 58, years: 25 },
                { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }
            ]
        };
    }

    render() {
        const userData = this.state.userData;
        const filteredData = userData.filter(ele => ele.user_type === 'Designer');
        const filteredJData = userData.filter(ele => ele.name[0] === "J");
        const filteredAgeData = userData.filter(ele => ele.age > 28 && ele.age <= 50);

        return (
            <div className='container'>
                <div className='display-item'>
                    <h2>All Users</h2>
                    {userData.map(ele => (
                        <div key={ele.id}>
                            <ul>
                                <li>
                                    <span>Id: {ele.id}</span>&nbsp;
                                    <span>Name: {ele.name}</span>&nbsp;
                                    <span>User Type: {ele.user_type}</span>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div className='user-type'>
                    <h2>Designers</h2>
                    {filteredData.map(ele => (
                        <div key={ele.id}>
                            <ul>
                                <li>
                                    <span>Id: {ele.id}</span>&nbsp;
                                    <span>Name: {ele.name}</span>&nbsp;
                                    <span>User Type: {ele.user_type}</span>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div className='j-data'>
                    <h2>Names Starting with "J"</h2>
                    {filteredJData.map(ele => (
                        <div key={ele.id}>
                            <ul>
                                <li>
                                    <span>Id: {ele.id}</span>&nbsp;
                                    <span>Name: {ele.name}</span>&nbsp;
                                    <span>User Type: {ele.user_type}</span>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div className='age-data'>
                    <h2>Users Aged 29-50</h2>
                    {filteredAgeData.map(ele => (
                        <div key={ele.id}>
                            <ul>
                                <li>
                                    <span>Id: {ele.id}</span>&nbsp;
                                    <span>Name: {ele.name}</span>&nbsp;
                                    <span>User Type: {ele.user_type}</span>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default HigherOrderComponent;
