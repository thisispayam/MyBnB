import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

import * as redux from 'redux';
import {Provider} from 'react-redux';



import {Header} from './shared/Header';
import './App.css';
import  RentalList from './components/rental/RentalList';
import { RentalDetail } from './components/rental/RentalDetail';

class App extends Component {
  render() {
    const store = redux.createStore(() => {
      return {
        rentals:[{
                  id: 1,
                  title: "Central Apartment",
                  city: "New York",
                  street: "Times Sqaure",
                  category: "apartment",
                  image: "http://via.placeholder.com/350x250",
                  bedrooms: 3,
                  description: "Very nice apartment",
                  dailyRate: 34,
                  shared: false,
                  createdAt: "24/12/2017"
                },
                {
                  id: 2,
                  title: "Central Apartment 2",
                  city: "San Francisco",
                  street: "Main street",
                  category: "condo",
                  image: "http://via.placeholder.com/350x250",
                  bedrooms: 2,
                  description: "Very nice apartment",
                  dailyRate: 12,
                  shared: true,
                  createdAt: "24/12/2017"
                },
                {
                  id: 3,
                  title: "Central Apartment 3",
                  city: "Bratislava",
                  street: "Hlavna",
                  category: "condo",
                  image: "http://via.placeholder.com/350x250",
                  bedrooms: 2,
                  description: "Very nice apartment",
                  dailyRate: 334,
                  shared: true,
                  createdAt: "24/12/2017"
                },
                {
                  id: 4,
                  title: "Central Apartment 4",
                  city: "Berlin",
                  street: "Haupt strasse",
                  category: "house",
                  image: "http://via.placeholder.com/350x250",
                  bedrooms: 9,
                  description: "Very nice apartment",
                  dailyRate: 33,
                  shared: true,
                  createdAt: "24/12/2017"
              }]
      }
    })
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
          <Header />
          <div className='container'>
          <Route exact path='/' component = {RentalList} />
          <Route exact path='/test' component = {RentalDetail} />
          </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
