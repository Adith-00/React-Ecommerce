import React from "react";
import "../../assets/css/errorDailoge/error.css"
const ErrorDialog = ({closeFun,errmsg}) => {
    return (
        <div className="custom-alert error">
          <div className="error-header">
            <i className='close-button' onClick={closeFun}>X</i> 
          </div>
          <div className="error-content">
            <h2>Error</h2>
            <p>{errmsg}</p>
          </div>
        </div>
      );
};
export default ErrorDialog