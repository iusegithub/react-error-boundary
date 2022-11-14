import React from "react";

class ErrorBoundary extends React.Component {
    // Local State
    state = {
        errorMessage: null,
    }

    // getDerivedStateFromError
    static getDerivedStateFromError(error) {
        // Update state so next render shows fallback UI
        return {errorMessage: error.toString()};
    }

       
    // Lifecycle method
    componentDidCatch(error, info) {

         // A fake logging service
         let logErrorToSampleService = console.log

        // Log the error to an error reporting service i.e. Loggly, New Relic etc.
        logErrorToSampleService(error.toString(), info.componentStack);
    }

    render() {
        if (this.state.errorMessage) {
            // You can render any custom fallback UI
            return (<div>
                <p>Something went wrong!</p>
                <p>{this.state.errorMessage}</p>
            </div>)
        }
        return this.props.children;
    }

}

export default ErrorBoundary