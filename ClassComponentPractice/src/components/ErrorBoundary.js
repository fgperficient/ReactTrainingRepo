import { Component } from "react";

class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state = { hasError: false }
    }

    componentDidCatch(error){
        this.setState({hasError:false})
        console.log("escuero")
    }
    render(){
        if(this.state.hasError){
            return( <p>error</p>)
        }
        return this.props.children;
    }
}

export default ErrorBoundary