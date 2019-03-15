import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');

/* -------- SIMPLE RESET ------------- */
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  list-style: none;
  border: none;
  text-decoration: none;
  background-color: transparent;
  font-family: 'Lato', Helvetica, Arial, Verdana, Tahoma;
}

html {
  /* This define what 1rem is */
  /* 10px/16pc = 62,5% --> 1rem = 10px; */
  font-size: 62.5%;
  height: 100%;
  width: 100%;
}

button,
a:link,
a:visited,
a:hover,
a:active {
  cursor: pointer;
}
/* ------------------------------------- */
h1 {
font-size: 2rem;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.15em;
  color: #ffffff;
}

h2 {
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.15em;
  color: #424242;

}

.aside {
  display: grid;
  grid-template-rows: repeat(12 1fr);
}
.iframe {
  height: 100%;
  width: 100%;
}
p {
  line-height: 1.8;
}
`;
