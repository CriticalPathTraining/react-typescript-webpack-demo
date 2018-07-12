import * as React from 'react';
import './ViewAbout.css';

interface ViewAboutProperties {
}


export default class ViewAbout extends React.Component<ViewAboutProperties, any> {

  render() {
    return (
      <div className="content-body" >
        <div className="row">
          <div className="jumbotron col">
            <h3>About his app</h3>
            <p>Yeah, baby</p>
          </div>
        </div>
      </div>
    );
  }
}