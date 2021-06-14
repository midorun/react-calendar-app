// import './App.css';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react'

import * as ST from './styled'
import EventList from '../EventList/EventList';
import { Route } from 'react-router';
import { EventItemType } from '../../types/types';
import EventForm from '../EventForm';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';

function App() {

  const [selectedDate, setSelectedDate] = useState<string | undefined>()
  const [eventList, setEventList] = useLocalStorage<EventItemType[]>('eventList', [
    {
      id: 1,
      date: 'Mon Jun 07 2021 00:00:00 GMT+0400 (GMT+04:00)',
      type: 'holiday',
      title: 'День рождения у собаки',
      cashToSpend: 400
    },
    {
      id: 2,
      date: 'Mon Jun 07 2021 00:00:00 GMT+0400 (GMT+04:00)',
      type: 'meeting',
      title: 'Пьянка у соседа',
      address: 'street st., house, flat',
      time: '17 : 00'
    },
    {
      id: 3,
      date: 'Mon Jun 07 2021 00:00:00 GMT+0400 (GMT+04:00)',
      type: 'note',
      title: 'Заметочка',
      text: 'some note'
    },
    {
      id: 4,
      date: 'Tue Jun 08 2021 00:00:00 GMT+0400 (GMT+04:00)',
      type: 'note',
      title: 'Заметочка на завтра',
      text: 'some note'
    }
  ])

  const handleCalendarDayClick = (value: Date) => {
    setSelectedDate(value.toString())
  }

  const addEvent = (newEvent: EventItemType) => {
    setEventList(prevEventList => [...prevEventList, newEvent])
  }

  const deleteEvent = (id: number) => {
    setEventList(prevEventList => prevEventList.filter(item => item.id !== id))
  }

  const changeEvent = (newEvent: EventItemType, id: number) => {
    setEventList(prevEventList => prevEventList.map(item => {
      if (item.id === id) {
        return newEvent
      }
      return item
    }))
  }

  const sortEventList = (eventList: EventItemType[], selectedDate: string) => {
    return eventList.filter(item => item.date === selectedDate)
  }

  return (
    <ST.Styles>
      <Route exact path={'/'}>
        <div className="calendar-wrapper">
          <Calendar
            onClickDay={(value) => handleCalendarDayClick(value)}
          />
          {
            selectedDate ?
              <Link className="add-link"
                to={{
                  pathname: "/EventForm",
                  state: {
                    eventItem: {
                      date: selectedDate
                    },
                    actionOverEventItem: "addEvent"
                  }
                }}
              >
                Добавить
                </Link> :
              null
          }
        </div>

        {
          selectedDate ? <EventList eventList={sortEventList(eventList, selectedDate)} onDeleteEvent={deleteEvent} /> : null
        }
      </Route>

      <Route path='/EventForm'>
        <EventForm
          eventList={eventList}
          onAddEvent={addEvent}
          onChangeEvent={changeEvent}
        />
      </Route>
    </ST.Styles>
  );
}

export default App;
