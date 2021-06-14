import React, { ChangeEvent, FC, ReactNode, useState } from "react";
import { Form, Field } from "react-final-form"
import { Link, useLocation } from "react-router-dom";
import NumberInput from "../../components/Inputs/NumberInput";
import SelectInput from "../../components/Inputs/SelectInput";
import TextAreaInput from "../../components/Inputs/TextAreaInput";
import TextInput from "../../components/Inputs/TextInput";
import TimeInput from "../../components/Inputs/TimeInput";
import { EventItemType } from "../../types/types";
import * as ST from './styled';
import { required } from "./validation";

interface FormValues {
  title: string,
  type: string | undefined,
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

  const [selectValue, setSelectValue] = useState<string | undefined>(undefined)

  const selectRef = React.createRef<HTMLSelectElement>()

  const handleFormSubmit = (values: FormValues) => {
    console.log('form values', values);

    const { title, type, cashToSpend, address, time, text } = values
    const date = eventItem.date;
    const id = eventItem.id
    let newEventItem: EventItemType = {
      id: id || eventList.length + 1,
      date,
      type: type,
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

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectValue = event.target.value
    setSelectValue(selectValue)
  }



  return (
    <ST.Styles>
      <h1>{actionOverEventItem === 'addEvent' ? 'Добавить' : 'Изменить'} событие</h1>
      <Form
        onSubmit={(values: FormValues) => handleFormSubmit(values)}
        subscription={{ submitting: true, pristine: true }}
        render={({ handleSubmit, form, pristine, valid }) => (
          <form onSubmit={event => {
            handleSubmit(event)
            form.reset()
          }}>
            <label >
              Название события
              <Field
                name="title"
                component={TextInput}
                validate={required}
              />
            </label>
            <label>
              Тип мероприятия
              <Field
                name="type"
                ref={selectRef}
                onChange={handleSelectChange}
                component={SelectInput}
                validate={required}
              >
                <option />
                <option value="holiday">Праздник</option>
                <option value="meeting">Мероприятие</option>
                <option value="note">Заметка</option>
              </Field>
            </label>
            <Condition when="type" is="holiday">
              <label>
                Сколько тратить?
                <Field
                  name="cashToSpend"
                  component={NumberInput}
                  validate={required}
                />
              </label>
            </Condition>
            <Condition when="type" is="meeting">
              <label>
                Куда идти?
                <Field
                  name="address"
                  component={TextInput}
                  validate={required}
                />
              </label>
              <label>
                Во сколько?
                <Field
                  name="time"
                  component={TimeInput}
                  validate={required}
                />
              </label>
            </Condition>
            <Condition when="type" is="note">
              <label>
                Что запомнить?
                <Field
                  name="text"
                  component={TextAreaInput}
                  validate={required}
                />
              </label>
            </Condition>
            <div className="buttons">
              <Link to="/" className="cancel-link">
                Отмена
              </Link>
              <button
                type="submit"
                className="submit-btn"
                disabled={pristine || valid}
              >
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

type ConditionProps = {
  when: string,
  is: string,
  children: ReactNode
}

const Condition = ({ when, is, children }: ConditionProps) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
)

export default EventForm

