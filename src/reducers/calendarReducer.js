const initialState = {
    companylogo: 'http://www.siskgroup.com/sites/default/files/slideshow/313/958-origo-logo.png',
    companyname: 'Origo',
    username: 'Dave Ramrinithanyan',
    calendarheader: 'Team jubelbrus adventskalender 2016',
    doorsequence: [1,5,3,17,23,8,9,13,21,4,19,22,2,11,15,18,6,12,7,10,14,16,20,24],
    gamemaster: 'Roger Svenningsen',
    door_1: {
        open: 0,
        win: 0,
        prize: 'Vannkoker fra Braun',
        quote: 'Det handler om å delta.'
    },
    door_2: {
        open: 0,
        win: 1,
        prize: 'Tannbørste fra Jordan.',
        quote: 'Det er aldri nok å vinne.'
    },
    door_3: {
        open: 0,
        win: 0,
        prize: 'Fotbad fra Siemens',
        quote: 'Noen tapere har bra damer.'
    }
};

export default function calendarReducer(state = initialState, action) {
    switch(action.type){
        case 'POPULATE_CALENDAR':
            return state;

        default:
            return state;
    }
}