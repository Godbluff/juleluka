import React, {Component} from 'react';
import Luke from './Luke';
import './styles/calendar-styles.css';

class Calender extends Component {
    render(){
        let doors = [];
        for(let i = 1; i<= 24; i++ ){
            let identifier = 'lukenr-'+i;
            doors.push(
                <Luke number={i} key={i} id={identifier} ref={identifier} />
            )
        }
        return(
            <div className="calendar-container">
                <div className="toptext">UDP sin hemmelige julekalender</div>
                {doors}
            </div>
        )
    }
}

export default Calender;