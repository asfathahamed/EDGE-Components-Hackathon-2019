import "./style.css";
import React, { Component } from 'react';
import Map from '../../atoms/Maps/Map';

/**
 * This is an example how maps component needs to render or used.
 * 
 * center: Can provide default lat and lan. This will load by default place in the map
 * height: Height of the google map component
 * zoom: Zooming map value
 */
class GoogleMapWithAutoComplete extends Component {

	render() {
		return(
			<div ClassName="maps-container">
				<Map
					google={this.props.google}
					center={{lat: 17.3850, lng: 78.4867}}
					height='400px'
					zoom={15}
				/>
			</div>
		);
	}
}

export default GoogleMapWithAutoComplete;