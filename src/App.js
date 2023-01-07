import React from 'react'
import axios from 'axios'


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
        return(
            <h1>{this.state.advice}</h1>
        )
    }
}

export default App