import React,{Component} from 'react';
import {RentalCard} from './RentalCard';
import {connect} from 'react-redux';

class RentalList extends Component {

//rendering the Rental Cards dynamically
    renderRentals(){
        return this.props.rentals.map((rental,index)=>{
            return(
                <RentalCard key={index} colNum='col-md-3 col-xs-6' rental={rental}/>
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
function mapStateToProps(state){
    return{
        rentals: state.rentals
    }
}

//providing state(rentals) for RentalList in form of props
export default connect(mapStateToProps)(RentalList);