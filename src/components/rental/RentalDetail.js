import React,{Component} from 'react';

export class RentalDetail extends Component {
    render(){
        console.log(this.props)// id can be found under match.params
        return(
            <p>I'm a rental details component number {this.props.match.params.id}</p>
        )
    }
}