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
            <p>We hope you like this demo.</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>React will make you stronger</h3>
          </div>
          <div className="col">
            <h3>React skills will boost your social status</h3>
          </div>
        </div>
      </div>
    );
  }

}