import React from "react";
import { Component } from "react/cjs/react.production.min";

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.setState({ hasError: false })
    }
    componentDidCatch(error) {
        console.log(error);
        this.setState({ hasError: true })
    }

    render() {
        if (this.setState.hasError) {
            return <p> Something Went Wrong !!! </p>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;