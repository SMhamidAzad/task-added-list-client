import React from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const Calender = () => {
    return (
        <div className='container fw-bold text-success fs-5 mb-5'>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
            />
        </div>
    );
};

export default Calender;