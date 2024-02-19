// Write your code here
import {useState} from 'react'
import {
  Container,
  Title,
  Image,
  Para,
  Paragraph,
  Button,
} from './styledComponents'

const reactHooksDescription =
  'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components. For curious readers, we have prepared a detailed RFC. Hooks allow you to reuse stateful logic without changing your component hierarchy. Hooks work side-by-side with existing code so you can adopt them gradually.'
const description =
  'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components.'
const ReadMore = () => {
  const [Text, setText] = useState(true)

  const onShowFullText = () => {
    setText(() => !Text)
  }

  return (
    <>
      <Container>
        <Title>React Hooks</Title>
        <Para>Hooks are a new addition to React</Para>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Paragraph>
          {Text === true ? description : reactHooksDescription}
        </Paragraph>
        <Button onClick={onShowFullText}>
          {Text === true ? 'Read More' : 'Read Less'}
        </Button>
      </Container>
    </>
  )
}

export default ReadMore
