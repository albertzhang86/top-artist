import React from 'react';
const App = ({children}) => {
    return (
      <div className="row">
        <div className="col-xs-offset-0 col-sm-offset-2 col-xs-12 col-sm-8">
          {children}
        </div>
      </div>
    )
};
export default App;
