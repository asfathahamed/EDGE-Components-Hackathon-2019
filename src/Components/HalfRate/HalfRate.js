import React,{ Component } from "react";
import "./HalfRate.css";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyleWrapper = styled.div`
    .ratingRect{
        display:inline-block;       
        position:relative;
    /*   transform:rotateY(180deg); */
    }

    .rect1, .rect2{
        display:inline-block;
        width:50%;
        height:100%;
        position:absolute;    
    }
    
    .rect1{
        top:0;
        left:0;    
    }
    
    .rect2{
        top:0;
        left:50%;   
    }
`

class HalfRating extends Component{
    maxRating = parseInt(this.props.maxRating);
    selectedColor = this.props.selectedColor;
    emptyColor = this.props.emptyColor;
    
    constructor(props){
        super(props);
        let currentRating = Number(props.currentRating).toPrecision(2);
        let decimal = (currentRating * 10)%10; 
        if(decimal < 5){
            currentRating = parseInt(currentRating);
        }else if(decimal > 5){
            currentRating = parseInt(currentRating) + 0.5
        }
        this.state = {
            currentRating: currentRating
        };
         
    }

    markRating = (id,name) => {
       // console.log("MARK --------- ",name );
        this.setState((oldState) => {
            let rating;
            if(name == "rect1")
                return {currentRating:parseInt(id) - 0.5};
            return {currentRating:parseInt(id)};
        }, () => {
            console.log("Rating ",this.state.currentRating);
            this.props.updateRating(this.state.currentRating);
        })
    }

    setBackground = (refId,color) => {
        ReactDOM.findDOMNode(this.refs[refId]).style.backgroundColor = color;
    }

    addHover = (id,name) => {       
        for(let i=1; i<id; i++){
            console.log("Mouse Enter");            
            this.setBackground("rect1"+i,this.selectedColor);
            this.setBackground("rect2"+i,this.selectedColor);
        }          
        if(name == "rect1"){
           this.setBackground(name+id,this.selectedColor);          
        }            
        else{          
            this.setBackground("rect2"+id,this.selectedColor);
            this.setBackground("rect1"+id,this.selectedColor);
        }         
    }

    removeHover = () => {
        //console.log("removeHover");
         let rating = parseInt(this.state.currentRating);       
         if(this.state.currentRating){
             for(let i=1; i<=rating; i++){ 
               //  console.log("IN ",i);               
                 this.setBackground("rect1"+i,this.selectedColor);
                 this.setBackground("rect2"+i,this.selectedColor);
             }
         }
 
         let j = rating + 1;
         if(j - this.state.currentRating == 0.5){
             j++;             
             this.setBackground("rect1"+j,this.selectedColor);
             this.setBackground("rect2"+j,this.emptyColor);
         }
         //console.log("RR ",rating,j);
 
         for(j; j <= this.maxRating; j++){
           // console.log("MISS ",j);            
            this.setBackground("rect1"+j,this.emptyColor);
            this.setBackground("rect2"+j,this.emptyColor);
        }      
     }
 


    rect = (cName,id,styles) => {
        let refs = cName+id;
       // console.log("rect ",className);

        return (<div className={cName} id={id} ref={refs}
        onClick={(event) => this.markRating(event.currentTarget.id,cName)}
        style={styles}
        onMouseEnter={(event) => this.addHover(event.currentTarget.id,cName)}
        onMouseLeave={(event) => this.removeHover(event.currentTarget.id)}       
        ></div>)
    }

    addRate = (id) => {
       // console.log("addRate  ---- ", id);
        let rating = parseInt(this.state.currentRating);
        let decimal = (this.state.currentRating * 10)%10; 
        let styleObj = [];

        if(id <= rating){           
           styleObj.push({backgroundColor:this.selectedColor});
           styleObj.push({backgroundColor:this.selectedColor});            
        }else if(id == rating+1  && decimal !== 0){          
          styleObj.push({backgroundColor:this.selectedColor});
          styleObj.push({backgroundColor:this.emptyColor});           
        }else if(id > rating){          
          styleObj.push({backgroundColor:this.emptyColor});
          styleObj.push({backgroundColor:this.emptyColor});          
        }

        return styleObj;
    }

    createStars = () => {
        let arr = [];
        console.log("CreateStars");

        for(let i=0; i<this.maxRating; i++){
            
            let styles = this.addRate(i+1);
            console.log("triiger");
            arr.push(<div key={i} className="ratingRect">
                {this.rect("rect2",i+1,styles[1])}
                {this.rect("rect1",i+1,styles[0])}
            </div>)
        }
       console.log(arr);
        return arr;
    }


    render(){
        return (<StyleWrapper>            
            {this.createStars()}
        </StyleWrapper>)
    }
}

export default HalfRating;

HalfRating.propTypes = {
    maxRating:PropTypes.number,
    currentRating:PropTypes.number,
    updateRating:PropTypes.func.isRequired,
    selectedColor:PropTypes.string,
    emptyColor:PropTypes.string
}

HalfRating.defaultProps ={
    maxRating:5,
    currentRating:0,
    selectedColor:"yellow",
    emptyColor:"transparent"
}
