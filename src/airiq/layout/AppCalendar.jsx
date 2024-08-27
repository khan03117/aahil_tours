import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import axios from 'axios';


const AppCalendar = () => {
    const [events, setEvents] = React.useState([]);
    const getevents = async () => {
        const items = axios.get('https://rbstudios.info/ajax/events', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                }
        });
        setEvents(items.data);
    }
    React.useEffect(() => {
        getevents();
        }, []);
  return (
    <>
    <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView='dayGridMonth'
        headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
        }}
        themeSystem='bootstrap'

      
        events={events}
      />
    </>
  )
}

export default AppCalendar