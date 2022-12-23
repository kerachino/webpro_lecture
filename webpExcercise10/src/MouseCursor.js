import styled, {keyframes} from 'styled-components'

const mouse =
  'https://uploads.codesandbox.io/uploads/user/0b28efa9-b11f-4a25-b741-5366d652e167/FXqu-mouse.svg'

const MouseCursor = styled.div`
  /*color: rgba(255, 255, 255, 0.619);
  display: flex;
  flex-direction: column;
  padding: 0 0 0 2px;
  font-size: 2em;練習用*/
  @media screen and (min-width: 768px){
    cursor: url(${mouse}), move;
  }
`

export default MouseCursor
