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
            isOpen: 0
        }
    }

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

    render(){
        return(
            <div className="window-container" onClick={this.openLuke}>
                <div className={cardClass}>
                    <div className={frontClass}>1</div>
                    <div className={backClass}>'Wrap your presents well.'</div>
                </div>
            </div>
        )
    }
}

export default Luke;