// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  AppContainer,
  MainContainer,
  Heading,
  InputContainer,
  Input,
  Textarea,
  Button,
  FailureView,
  FailureImage,
  FailureHead,
  FailurePara,
  NotesView,
  ListContainer,
} from './styledComponents'

const Notes = () => {
  const [titleText, setTitleText] = useState('')
  const [noteText, setNoteText] = useState('')
  const [notesList, setNotesList] = useState([])
  const onChangeTitle = event => {
    setTitleText(event.target.value)
  }
  const onChangeTextarea = event => {
    setNoteText(event.target.value)
  }
  const onSubmitAddNote = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title: titleText,
      note: noteText,
    }
    setNotesList(prevState => [...prevState, newNote])
    setTitleText('')
    setNoteText('')
  }

  return (
    <AppContainer>
      <MainContainer>
        <Heading>Notes</Heading>
        <InputContainer>
          <Input
            type="text"
            placeholder="Title"
            onChange={onChangeTitle}
            value={titleText}
          />
          <Textarea
            rows="4"
            cols="34"
            placeholder="Take a Note..."
            onChange={onChangeTextarea}
            value={noteText}
          />
          <Button type="submit" onClick={onSubmitAddNote}>
            Add
          </Button>
        </InputContainer>
        {notesList.length === 0 ? (
          <FailureView>
            <FailureImage
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <FailureHead>No Notes Yet</FailureHead>
            <FailurePara>Notes you add will appear here</FailurePara>
          </FailureView>
        ) : (
          <NotesView>
            <ListContainer>
              {notesList.map(eachNote => (
                <NoteItem key={eachNote.id} allNotes={eachNote} />
              ))}
            </ListContainer>
          </NotesView>
        )}
      </MainContainer>
    </AppContainer>
  )
}

export default Notes
