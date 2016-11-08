import React, {Component} from 'react';
import {connect} from 'react-redux';
import Door from './Door';
import './styles/calendar-styles.css';

class Calender extends Component {
    render(){
        let doors = [];
        for(let i = 0; i<= 23; i++ ){
            let doornumber = this.props.doorsequence[i];
            let identifier = 'lukenr-'+ doornumber;
            doors.push(
                <Door number={doornumber} key={i} id={identifier} ref={identifier} />
            )
        }
        return(
            <div className="calendar-container">
                <div className="corner"></div>
                <div className="toptext">UDP sin hemmelige julekalender</div>
                {doors}
            </div>
        )
    }
}


function mapStateToProps(state, ownProps) {
    return {
    doorsequence:state.calendar.doorsequence
    };
}

export default connect(mapStateToProps)(Calender);