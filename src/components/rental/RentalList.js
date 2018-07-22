import React,{Component} from 'react';
import {RentalCard} from './RentalCard';

export class RentalList extends Component {

    constructor(){
        super();
        this.state = {
            rentals :[1,2,3]
        }
    }

//rendering the Rental Cards dynamically
    renderRentals(){
        return this.state.rentals.map((rental)=>{
            return(
                <RentalCard/>
            )
        })
    }
    render(){
        return(
            <section id='rentalListing'>
                <h1 className='page-title'>Your Home All Around the World</h1>
                <div className='row'>
                {this.renderRentals()}
                </div>
            </section> 
        )
    }
}