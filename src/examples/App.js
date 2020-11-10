import './App.css';
// import { Button, SecondButton } from './Button';
// import Header from './components/Header';
import AltHeader from './Examples/AltHeader';
import {
  // PropsButton,
  // BigButton,
  DangerButton,
  SuccessButton,
} from './components/PropsButton';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;  
  box-sizing: border-box;
}

body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <AltHeader title='hi from app.js' />
      <DangerButton big>danger button</DangerButton>
      <SuccessButton>success button</SuccessButton>
      {/* <PropsButton>Button #1</PropsButton>
      <PropsButton>Button #2</PropsButton>
      <PropsButton>Button #3</PropsButton> */}
      {/* <BigButton>Big button</BigButton> */}
    </div>
  );
}

export default App;
