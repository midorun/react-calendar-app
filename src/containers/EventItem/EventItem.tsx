import { FC } from 'react'
import { Link } from 'react-router-dom'
import { EventItemType } from '../../types/types'
import * as ST from './styled'

export interface EventItemProps {
  eventItem: EventItemType
  onDeleteEvent: (id: number) => void
}

const EventItem: FC<EventItemProps> = ({ eventItem, onDeleteEvent }) => {

  const view = (eventItem: EventItemType) => {
    switch (eventItem.type) {
      case 'holiday':
        return (
          <span> Бюджет: {eventItem.cashToSpend}</span>
        )
      case 'meeting':
        return (
          <>
            <span> Куда:{eventItem.address}</span>
            <span> Во сколько:{eventItem.time}</span>
          </>
        )
      case 'note':
        return (
          <span> Текст:{eventItem.text}</span>
        )
      default: return null
    }
  }

  return (
    <ST.EventItemStyled>
      <ST.IconWrapper>
        <Link to={{
          pathname: "/EventForm",
          state: {
            eventItem,
            actionOverEventItem: 'changeEvent'
          }

        }}>
          <ST.ChangeIcon />
        </Link>
        <ST.DeleteIcon onClick={() => onDeleteEvent(eventItem.id)} />
      </ST.IconWrapper>
      <ST.EventTitle>{eventItem.title}</ST.EventTitle>
      <ST.EventContent>
        {view(eventItem)}
      </ST.EventContent>
    </ST.EventItemStyled>
  )

}

export default EventItem
