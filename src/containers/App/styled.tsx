import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AppWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const CalendarWrapper = styled.div`
  margin-right: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const AddEventLinkWrapper = styled.div`
  width: 350px;
  height: 40px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  color: black;
  outline: none;
  text-decoration: none;
  cursor: pointer;

  &:active{
    background-color: #b3b6ba;
    
  }
`

export const AddEventLink = styled(Link)`
  font-size: 24px;
  color: black;
  outline: none;
  text-decoration: none;
  cursor: pointer;
`