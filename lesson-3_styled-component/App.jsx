import styled from "styled-components";

const Details = styled.details`
  font-size: 1rem;
  color: hsl(0deg 0% 25%);
  margin: 32px;
  border: 2px solid;
  border-radius: 4px;
`
const Summary = styled.summary`
  cursor: pointer;
  padding: 12px 16px;
  outline-offset: 5px;
`

const Answer = styled.div`
  background: hsl(0deg 0% 92.5%);
  border-radius: 0 0 4px 4px;
  padding: 12px 17px;
  font-style: italic;
`

function App({
  question,
  answer,
}) {
  return (
    <Details>
      <Summary>{question}</Summary>
      <Answer className="answer">
        {answer}
      </Answer>
    </Details>
    
  );
}

export default App