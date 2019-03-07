### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Description
Customizable React Star rating component

### API


| Property | Description | Default value | type |
| -------- | ----------- | ------------- | ---- |
| `className`  | Name of parent class | `null` | string |
| `count`  | How many total stars you want  | 5 | number |
| `value`  | Set rating value  | 0 | number |
| `char` | Which character you want to use as a star | ★ | string |
| `defaulfStarColor` | Color of default star | `gray` | string |
| `fillfStarColor` | Color of selected or active star | `#333333` | string |
| `size` | Size of stars (in px) | `15px` | string |
| `edit` | Should you be able to select rating or just see rating (for reusability) | `true` | boolean |
| `half` | Should component use half stars, if not the decimal part will be dropped otherwise normal algebra rools will apply to round to half stars | `true` | boolean
| `onChange(updatedStarRating)` | Will be invoked any time the rating is changed | `null` | function |
