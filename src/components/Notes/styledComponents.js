// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 22px;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  min-height: 90vh;
  width: 80%;
`

export const Heading = styled.h1`
  font-family: Bree Serif;
  color: #4c63b6;
`

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  padding: 22px;
  width: 90%;
  margin-bottom: 28px;
  border-radius: 4px;
`

export const Input = styled.input`
  padding: 8px 3px;
  width: 100%;
  margin-bottom: 4px;
  font-family: Roboto;
  outline: none;
  border: none;
`

export const Textarea = styled.textarea`
  font-family: Roboto;
  padding: 8px 4px;
  outline: none;
  border: none;
  width: 100%;
`

export const Button = styled.button`
  background-color: #4c63b6;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  padding: 12px 26px;
  align-self: flex-end;
  margin-top: 4px;
`

export const FailureView = styled.div`
  text-align: center;
`

export const FailureImage = styled.img`
  width: 90px;
`

export const FailureHead = styled.h1`
  font-size: 18px;
  font-family: Roboto;
  color: #475569;
`

export const FailurePara = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: #aab8c8;
`
export const NotesView = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 1px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`
