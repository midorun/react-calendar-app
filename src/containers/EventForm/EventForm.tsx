import React, { FC, useState } from "react";
import { Form, Field } from "react-final-form"
import { Link, useLocation } from "react-router-dom";
import NumberInput from "../../components/Inputs/NumberInput";
import SelectInput from "../../components/Inputs/SelectInput";
import TextAreaInput from "../../components/Inputs/TextAreaInput";
import TextInput from "../../components/Inputs/TextInput";
import TimeInput from "../../components/Inputs/TimeInput";
import { EventItemType } from "../../types/types";
import * as ST from './styled';

interface FormValues {
  title: string,
  type: string,
  cashToSpend?: number,
  address?: string,
  time?: any,
  text?: string
}

type LocationStateType = {
  eventItem: EventItemType,
  actionOverEventItem: string
}

interface EventFormProps {
  eventList: EventItemType[]
  onAddEvent: (newItem: EventItemType) => void,
  onChangeEvent: (newItem: EventItemType, id: number) => void
}

const EventForm: FC<EventFormProps> = ({ eventList, onAddEvent, onChangeEvent }) => {
  const location = useLocation<LocationStateType>()
  const { eventItem, actionOverEventItem } = location.state

  const [selectValue, setSelectValue] = useState<string>('')

  const selectRef = React.createRef<HTMLSelectElement>()

  const handleFormSubmit = (values: FormValues, actionOverEventItem: string) => {
    const { title, type, cashToSpend, address, time, text } = values
    const date = eventItem.date;
    const id = eventItem.id
    let newEventItem: EventItemType = {
      id: id || eventList.length + 1,
      date,
      type: selectValue,
      title
    }

    switch (newEventItem.type) {
      case 'holiday':
        newEventItem = { ...newEventItem, cashToSpend }
        break
      case 'meeting':
        newEventItem = { ...newEventItem, address, time }
        break
      case 'note':
        newEventItem = { ...newEventItem, text }
        break;
      default:
    }

    actionOverEventItem === 'addEvent' ? onAddEvent(newEventItem) : onChangeEvent(newEventItem, id)
  }

  const handleSelectChange = (event: any) => {
    const selectValue = event.target.value
    setSelectValue(selectValue)
  }

  const View = () => {
    switch (selectValue) {
      case 'holiday':
        return (
          <label>
            Сколько тратить?
            <Field
              name="cashToSpend"
              component={NumberInput}
            />
          </label>
        )
      case 'meeting':
        return (
          <>
            <label>
              Куда идти?
              <Field
                name="address"
                component={TextInput}
              />
            </label>
            <label>
              Во сколько?
              <Field
                name="time"
                component={TimeInput}
              />
            </label>
          </>
        )
      case 'note':
        return (
          <label>
            Что запомнить?
            <Field
              name="text"
              component={TextAreaInput}
            />
          </label>
        )
      default:
        break;
    }
  }

  return (
    <ST.Styles>
      <h1>{actionOverEventItem === 'addEvent' ? 'Добавить' : 'Изменить'} событие</h1>
      <Form
        onSubmit={(values: FormValues) => handleFormSubmit(values, actionOverEventItem)}
        render={({ handleSubmit, form }) => (
          <form onSubmit={event => {
            handleSubmit(event)
            form.reset()
          }}>
            <label >
              Название события
              <Field
                name="title"
                component={TextInput}
              />
            </label>
            <label>
              Тип мероприятия
              <Field
                name="type"
                ref={selectRef}
                onChange={(event: any) => handleSelectChange(event)}
                component={SelectInput}
              >
                <option />
                <option value="holiday">Праздник</option>
                <option value="meeting">Мероприятие</option>
                <option value="note">Заметочка</option>
              </Field>
            </label>
            {View()}
            <div className="buttons">
              <Link to="/" className="cancel-link">
                Отмена
              </Link>
              <button type="submit" className="submit-btn">
                {actionOverEventItem === 'addEvent' ? 'Добавить' : 'Изменить'}
              </button>
            </div >
          </form>
        )}
      >
      </Form >
    </ST.Styles>
  )
}


export default EventForm

