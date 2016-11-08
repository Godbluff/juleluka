import React, {Component} from 'react';
import {connect} from 'react-redux';
import './styles/calendar-styles.css';

let cardClass = 'card';
let frontClass = 'face front';
let backClass = 'face back';

class Door extends Component {

    constructor(){
        super();
        this.openDoor = this.openDoor.bind(this);
        this.state = {
            isOpen: 0,
            bgPos: 0
        }
    }

    openDoor(){
        if(this.state.isOpen === 1){
            cardClass = 'card';
            this.setState({
               isOpen: 0
           });
        }
        if(this.state.isOpen === 0){
            cardClass = 'card card-open';
            this.setState({
                isOpen: 1
            })

        }
    }
     componentDidMount(){
         let boxOffset = `-${document.getElementById(this.props.id).offsetLeft+1}px -${document.getElementById(this.props.id).offsetTop+1}px`;
         this.setState({
             bgPos: boxOffset
         });
         window.addEventListener('resize', () => {
             let boxOffset = `-${document.getElementById(this.props.id).offsetLeft+1}px -${document.getElementById(this.props.id).offsetTop+1}px`;
             this.setState({
                 bgPos: boxOffset
             });
         });
     }

    render(){
        let doorQuote = this.props.doordata ? this.props.doordata.quote  : 'Nothing yet.' ;
        let containerDiv = `window-container pos-${this.props.number}`;
        return(
            <div className={containerDiv} onClick={this.openDoor} id={this.props.id}>
                <div className={cardClass}>
                    <div className={frontClass} style={{'backgroundPosition': this.state.bgPos}}>{this.props.number}</div>
                    <div className={backClass}>{doorQuote}</div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state, ownProps){
    return {
        doordata: state.calendar["door_"+ownProps.number]
    }
}
export default connect(mapStateToProps)(Door);