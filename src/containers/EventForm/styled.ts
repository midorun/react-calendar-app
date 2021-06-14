import styled from 'styled-components';

export const Styles = styled.div`
  padding: 0 10px;
  width: 500px;

  select, input, label, textarea{
    margin-top: 5px;
    font-size: 16px;
    font-family: inherit;
  }

  
  input, textarea{
    padding-left: 10px;
  }

  select{
    padding-left: 7px;
  }
  
  h1{
    text-align: center;
  }

  label{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }

  input, select{
    height: 30px;
  }

  input[type=time]{
    width: 150px;
  }

  button, a{
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    font-size: 20px;
    border: 1px solid gray;
    color: black;
    cursor: pointer;

    &:active{
    background-color: #b3b6ba;
    }
  }

  .buttons{
    margin-top: 30px;
    display: flex;
  }

  .cancel-link{
    margin-right: 40px;
    width: 150px;
    text-decoration: none;
    font-family: Arial;
  }

  .submit-btn{
    width: 100%;
  }

  .field-error{
    margin-left: auto;
    color: #de3510;
    font-weight: 700;
  }
`