import React, {Component} from 'react';
import Luke from './Luke';
import './styles/calendar-styles.css';

class Calender extends Component {
    render(){
        return(
            <div className="calendar-container">
                <Luke />
            </div>
        )
    }
}

export default Calender;