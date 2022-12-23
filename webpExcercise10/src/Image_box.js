import styled, {keyframes} from 'styled-components'

const scale = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
`
const scaleDown = keyframes`
  0% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`

const Image_box = styled.div`
  /* Zoom in hover animation */
  -webkit-animation: ${scaleDown} 0.5s linear;
  -moz-animation: ${scaleDown} 0.5s linear;
  animation: ${scaleDown} 0.5s linear;
  transform-origin: 50% 50%;
  animation-fill-mode: forwards;
  :hover {
    z-index: 100;
    -webkit-animation: ${scale} 0.5s linear;
    -moz-animation: ${scale} 0.5s linear;
    animation: ${scale} 0.5s linear;
    transform-origin: 50% 50%;
    animation-fill-mode: forwards;
  }
  /*End of animation */
  .mouseArea {
    height: 100%;
  }
  .mouseInfo {
    font-size: 0.65em;
    font-weight: 300;
    visibility: hidden;
    opacity: 0;
    transition: 0.5s;
  }
  :hover .mouseInfo {
    visibility: visible;
    opacity: 0.75;
    transition: opacity 0.5s;
  }
`

export default Image_box
