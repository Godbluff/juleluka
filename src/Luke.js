import React, {Component} from 'react';
import './styles/calendar-styles.css';

let cardClass = 'card';
let frontClass = 'face front';
let backClass = 'face back';

class Luke extends Component {

    constructor(){
        super();
        this.openLuke = this.openLuke.bind(this);
        this.state = {
            isOpen: 0,
            bgPos: 0
        }
    }
t
    openLuke(){
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
             console.log('Redraw!');
         });
     }

    render(){
        let containerDiv = `window-container pos-${this.props.number}`;
        return(
            <div className={containerDiv} onClick={this.openLuke} id={this.props.id}>
                <div className={cardClass}>
                    <div className={frontClass} style={{'backgroundPosition': this.state.bgPos}}>{this.props.number}</div>
                    <div className={backClass}>'Wrap your presents well.'</div>
                </div>
            </div>
        )
    }
}

export default Luke;