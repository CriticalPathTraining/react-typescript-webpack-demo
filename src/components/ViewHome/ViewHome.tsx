import * as React from 'react';
import './ViewHome.css';

interface ViewHomeProperties {
}


export default class ViewHome extends React.Component<ViewHomeProperties, any> {

  render() {
    return (
      <div className="content-body" >
        <div className="row">
          <div className="jumbotron col">
            <h3>Home Sweet Home</h3>
            <p>Yeah, baby</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            Wahat's up
          </div>
          <div className="col">
            Yes Maam
          </div>
        </div>
      </div>
    );
  }

}