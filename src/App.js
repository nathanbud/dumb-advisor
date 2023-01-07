import React from 'react'
import axios from 'axios'

import './App.css'


class App extends React.Component{
    state = {advice: ''}

    componentDidMount(){
        this.fetchAdvice();
    }
    
    fetchAdvice = () =>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            console.log(response);
            const {advice} = response.data.slip;
            this.setState({advice})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render(){
        const {advice} = this.state;
        return(
            <div className="app">
                <div className="card">
                <h1 className='advice-text'>{advice}</h1>
                <button className='advice-button' onClick={this.fetchAdvice}>GIVE ME ADVICE</button>
                </div>
            </div>
        )
    }
}

export default App