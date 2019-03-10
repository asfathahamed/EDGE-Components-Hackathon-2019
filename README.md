# EDGE-Components-Hackathon-2019
# react-rating-component
To preview the rating components [Click here](https://rjomv8kmyo.codesandbox.io/) 
  
## Star

###  Input:
 
 ```
 Star.propTypes = {
    fontSize:PropTypes.number,
    selectedColor:PropTypes.string,
    maxRating:PropTypes.number,
    currentRating:PropTypes.number,
    updateRating:PropTypes.func.isRequired
}

 ```
 
 ###  Default Values:
  
  ```
  Star.defaultProps = {
    fontSize:100,
    selectedColor:"yellow",
    maxRating:5,
    currentRating:0
}  
  ```
  
 ### Listening to event:
 
  ```
  markRate = (id) => {
        this.setState({currentRating:parseInt(id)},() => {
            console.log("Current ",this.state.currentRating);
            this.props.updateRating(this.state.currentRating);
        });
    }

  ```
  
  ## Rectangle
  Achieving the rating in other shapes
  
### Input:
   ```
   Rectangle.propTypes = {
    maxRating: PropTypes.number,
    currentRating: PropTypes.number,
    selectedColor: PropTypes.string,
    emptyColor:PropTypes.string,
    updateRating:PropTypes.func.isRequired
};
 ```
  
### DefaultValues:
 ```
 Rectangle.defaultProps = {
    maxRating:5,
    currentRating:0,
    selectedColor:"#bec314",
    emptyColor:"transparent"
} 

 ```
 
 ### Listening to event:
 ```
 markRate = (id) => {       
        this.setState({currentRating:parseInt(id)},() => {
            console.log("Current ",this.state.currentRating);
            this.props.updateRating(this.state.currentRating);
        });
  } 
  ```
  
  ## Rect-Point-Rating
  Achieving rating in points.
  
  ### Input:
  ```
  RectPointRating.propTypes = {
    maxRating: PropTypes.number,
    currentRating: PropTypes.number,
    selectedColor: PropTypes.string,
    emptyColor:PropTypes.string,
    direction:PropTypes.string   
}

  ```
  Can populate the rating in different directions.
  
  ```
   direction: top | left | right | bottom
  ```
  
  ### Default Values:
  ```
  RectPointRating.defaultProps = {    
    selectedColor:"#bec314",
    emptyColor:"transparent",
    direction:"left",
    currentRating:0,
    maxRating:5
}

  ```
  
  ## HalfRating
    Displays half rating on hover
    
  ### Input:
  ```
 SHalfRate.propTypes = {
    size:PropTypes.number,
    selectedColor:PropTypes.string,
    emptyColor:PropTypes.string,
    border:PropTypes.objectOf(verifyBorder),
    margin:PropTypes.number,
    maxRating:PropTypes.number,
    currentRating:PropTypes.number,
    updateRating:PropTypes.func.isRequired
}

border:{
  borderColor:string,
  borderStyle:string,
  borderSize:number
}


  ```
  
 ### DefaultValues:
 ```
SHalfRate.defaultProps = {
    size:50,
    selectedColor:"yellow",
    emptyColor:"transparent",
    border:{
        borderColor:"#ccc",
        borderStyle:"solid",
        borderSize:1       
    },
    margin:5,  
    maxRating:5,
    currentRating:0
}
 ```
 
 ### Listening to events:
 ```
    markRating = (id,cName) => {
        let currentRating;
        if(cName == "halfStar"){ currentRating = parseInt(id); }
        else if(cName == "fullStar"){ currentRating = parseInt(id) - 0.5; }

        this.setState({currentRating:currentRating},() => {
            console.log(this.state.currentRating);
            this.props.updateRating(this.state.currentRating);
        })
    }
    
  ```
    
  
  
# Dependencies 
```  
   styled-components
   @material-ui/core/Tooltip
   @material-ui/core/Zoom  
   
 ```
