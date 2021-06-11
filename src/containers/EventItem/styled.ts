import styled from 'styled-components'
import { AiFillDelete } from 'react-icons/ai'
import { MdModeEdit } from 'react-icons/md'

export const EventTitle = styled.span`
  font-size: 32px;
`

export const EventContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const IconWrapper = styled.div`
    
`

export const EventItemStyled = styled.div`
  position: relative;
`


export const DeleteIcon = styled(AiFillDelete)`
  display: none;
  position: absolute;
  cursor: pointer;
  right: 0;
  font-size: 25px;

  ${EventItemStyled}:hover & {
    display:block
  }
`

export const ChangeIcon = styled(MdModeEdit)`
  display: none;
  margin-right: 10px;
  position: absolute;
  cursor: pointer;
  right: 25px;
  font-size: 25px;
  color: black;

  ${EventItemStyled}:hover & {
    display:block
  }
`



