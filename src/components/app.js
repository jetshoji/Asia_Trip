import React, { Component } from 'react';
import Navi from './navi/navi'; 
import Helmet from 'react-helmet';

export default class App extends Component {
  render() {
    return (
      <div>
      	<Helmet
      		title="Jet's Travel Vlog"
      		meta={[
      			{name:"viewport", content: "width=device-width, initial-scale=1.0"}
      		]}
      		link={[
      			{rel: "stylesheet", href:"/css/bootstrap.min.css"},
                {rel: "stylesheet", href:"/src/components/navi/navi.css"},
                    {rel: "stylesheet", href:"/src/components/videos/video.css"}
      		]}
      		/>
      	<Navi/>
        {this.props.children}
      </div>
    );
  }
}
