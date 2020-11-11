import { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { redTheme, blueTheme, greenTheme } from './components/Themes';
import Navbar from './components/Navbar';
import Button from './components/Button';
import Content from './components/Content';

function App() {
  const [theme, setTheme] = useState(redTheme);

  const handleTheme = () => {
    if (theme.primaryColor === 'red') {
      setTheme(greenTheme);
    } else if (theme.primaryColor === 'green') {
      setTheme(blueTheme);
    } else {
      setTheme(redTheme);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <main>
        <Navbar>
          <Button onClick={handleTheme}>toggle theme</Button>
        </Navbar>
        <Content />
      </main>
    </ThemeProvider>
  );
}

export default App;
