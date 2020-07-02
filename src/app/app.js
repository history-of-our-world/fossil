import React from 'react';
import AddLikesContainer from "../containers/add-likes-container/add-likes-container";
import './app.sass'

function App() {
  return (
      <div className={"wrapper"}>
          <div className="wrap">
            <AddLikesContainer/>
          </div>
      </div>
  );
}

export default App;
