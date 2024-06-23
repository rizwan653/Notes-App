// Write your code here
import {ListContainer, Heading, Paragraph} from './styledComponents'

const NoteItem = props => {
  const {allNotes} = props
  const {title, note} = allNotes

  return (
    <ListContainer>
      <Heading>{title}</Heading>
      <Paragraph>{note}</Paragraph>
    </ListContainer>
  )
}

export default NoteItem
