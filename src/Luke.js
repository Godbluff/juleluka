import React, {Component} from 'react';
import './styles/calendar-styles.css';

class Luke extends Component {
    render(){
        return(
            <div className="window-container">
                <div className="card">
                    <div className="face front">1</div>
                    <div className="face back">Back</div>
                </div>
            </div>
        )
    }
}

export default Luke;