import styled from 'styled-components';

// can export to different file
const screen = {
  phone: (...args) => {
    const styles = args;
    console.log(styles);
    return `@media (min-width: 576px){
      ${styles}
    }`;
  },
  tablet: (...args) => {
    const styles = args;
    console.log(styles);
    return `@media (min-width: 900px){
      ${styles}
    }`;
  },
};

export const Banner = styled.div`
  background: red;
  h1 {
    color: white;
    text-transform: uppercase;
  }

  ${screen.phone`background: blue;h1{color:yellow}`}
  ${screen.tablet`background: black;h1{color:orange}`}
  /* @media (min-width: 576px) {
    background: blue;
    h1 {
      color: yellow;
    } */
  }
`;

export const SecondBanner = styled.div`
  background: blue;
  h1 {
    color: red;
    text-transform: uppercase;
  }
  ${screen.phone`background: green;h1{color:blue}`}/* @media (min-width: 576px) {
    background: green;
    h1 {
      color: blue;
    }
  } */
`;
