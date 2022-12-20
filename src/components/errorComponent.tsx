const ErrorComponent = (error: any) => {
    console.log('compo', error)
    return (<div className="center-container  is-flex-direction-column">
      <div className="error-text-color">{error.error.message}</div>
       <div className="error-text-color"> {error.error.name}</div>
    </div>)

}

export default ErrorComponent;