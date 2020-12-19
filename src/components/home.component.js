import React, {Component} from 'react';
import axios from 'axios';
export default class Home extends Component{

    componentDidMount(){
        axios.get('api/auth/users/').then(
            res =>{
                console.log(res);
            },
            err =>{
                console.log(err)
            }
        )
    }

    render(){

        return(
            <h2>You are not log in</h2>
        )
    }
}