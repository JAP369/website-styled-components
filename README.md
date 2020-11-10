# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

#App.js
import './App.css';
import Title from './components/Title';
// inline css
// app css
// css variables
// file css
function App() {
return (

<div>
<h1>styled components</h1>
<h2 style={{ color: 'red', textTransform: 'uppercase' }}>
inline styles
</h2>
<h2 className='global'>global css</h2>
<h2 className='first'>first</h2>
<h2 className='second'>second</h2>
<Title />
</div>
);
}
#App.css
:root {
  --primaryColor: #f15025;
}

body {
margin: 2rem;
}

.global {
color: green;
text-transform: capitalize;
}

.first {
letter-spacing: 5px;
color: var(--primaryColor);
}
/_ some other css _/
.second {
text-transform: uppercase;
color: var(--primaryColor);
}

export default App;

#Button.jsx
import styled from 'styled-components';

const color = 'yellow';

export const Button = styled.button` color: red; background: blue; text-transform: uppercase;`;

export const SecondButton = styled.button` color: ${color}; background: var(--primaryColor); text-transform: uppercase;`;
