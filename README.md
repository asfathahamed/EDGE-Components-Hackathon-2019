## Pagination Component

This pagination component can be used any where applicable like grids etc, It works independent with out any dependencies 

### How to use

PaginationComponent will render different types of paginations, below props are exposed to that you can customize as per your requirement.

| Property | Description | Default value | type |
| -------- | ----------- | ------------- | ---- |
| `numberOfPages`  | Total number of pages | 10 | number |
| `getCurrentPage`  | Will return the current page index | () => {} | function |
| `currentPage`  | Default page to be selected on onLoad  | 0 | number |
| `showFirstLast` | If true will show first and last option else no | true | bool |
| `showPages` | How many pages to be rendered in UI | 10 | number |
| `showText` |  Can pass any text for first,last,back and next | ["First", "Back", "Next", "Last"] | array |
| `className` | Can pass any string to write our own CSS | pagination-container | string |

### React google map with autocomplete

  This is a simple react component for working with google [autocomplete](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete)

## Example

```
import "./style.css";
import React, { Component } from 'react';
import Map from '../atoms/Map';

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
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



