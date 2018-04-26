import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  padding: 0em 2em;
  margin-right: 1em;
  margin-bottom: 1em;
  text-decoration: none;
  border-radius: 7px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;

  color: #000000;

  &:active {
    background: #41ADDD;
    color: #FFF;
  }
`;
