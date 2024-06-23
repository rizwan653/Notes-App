// Style your elements here
import styled from 'styled-components'

export const ListContainer = styled.li`
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  padding: 12px 6px;
  margin-bottom: 7px;
  min-width: 370px;
  max-width: 370px;
  margin-left: 10px;
  margin-right: 10px;
  word-wrap: break-word;
  @media screen and (min-width: 768px) {
    min-width: 300px;
    max-width: 300px;
  }
`

export const Heading = styled.h1`
  font-family: Roboto;
  font-size: 20px;
`

export const Paragraph = styled.p`
  font-family: Roboto;
  color: #cbd5e1;
  font-size: 13px;
`
