import styled from 'styled-components'

export const Styles = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .calendar-wrapper{
    margin-right: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  }

  .add-link{
    width: 350px;
    height: 40px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    font-size: 24px;
    color: black;
    outline: none;
    text-decoration: none;
    cursor: pointer;

    &:active{
      background-color: #b3b6ba;
      
    }
  }
`