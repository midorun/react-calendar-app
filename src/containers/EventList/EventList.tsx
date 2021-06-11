import { FC } from 'react'
import { EventItemType } from '../../types/types'
import EventItem from '../EventItem/EventItem'
import * as ST from './styled'

export interface EventListProps {
  onDeleteEvent: (id: number) => void
  eventList: EventItemType[],
}

const EventList: FC<EventListProps> = ({ eventList, onDeleteEvent }) => {

  return (
    <ST.EventList>
      {
        eventList.length ?
          eventList.map(item =>
            <EventItem
              key={item.id}
              eventItem={item}
              onDeleteEvent={onDeleteEvent}
            />) :
          <span>На данный день ничего не запланировано</span>
      }
    </ST.EventList>
  )
}

export default EventList