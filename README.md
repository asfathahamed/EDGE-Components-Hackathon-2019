# EDGE-Components-Hackathon-2019

# ContextMenu

This project was generated with [React JS](https://github.com/reactjs) version 16.8.4.

## How to use `react-context-menu`

Run `npm install` ->
`npm install bootstrap` ->
`npm start`

Import `ContextMenu` from `react-context-menu` and include in your main component inside imports.

Add ContextMenu tag for context menu in your main component as `<ContextMenu></ContextMenu>`

Now just change contextMenu text and pass menu titles for menu clicked.

Then run and right click on displayed text, you can see custom context menu list items like below

E.g. `<ContextMenu contextMenuItems={['Option 1', 'Option 2', 'Option 3']} onSelect={onSelectHandler}>
      this is context menu
    </ContextMenu>`
    
# Test cases:

## Browser:	Google Chrome			


<table>
  <tr>
    <th>Step</th>
    <th>Step Details</th>
    <th>Expected Results</th>
    <th>Actual Results</th>
    <th>Pass/Fail/Not Executed</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Navigate to http://localhost:8080/</td>
    <td>Site should open</td>
    <td>As Expected</td>
    <td>Pass</td>
  </tr>
      <tr>
    <td>2</td>
    <td>Right click on text displayed</td>
    <td>Context menu should display</td>
    <td>As Expected</td>
    <td>Pass</td>
  </tr>
      <tr>
    <td>3</td>
    <td>Click on listed menu items</td>
    <td>Alert should display</td>
    <td>As Expected</td>
    <td>Pass</td>
  </tr>
 
</table>
