import styled, { css } from 'styled-components';

export const ButtonGlobal = styled.button`
  border-radius:50px;
  background-color: ${props => props.outline ? '#fff' : '#4C2D6E'};
  font-size: 0.8vw;
  padding: 8px 5px !important;
  width: ${props => props.width ? props.width: '100px'};
  border: ${props => props.outline ? '1px solid #4C2D6E' : '0 solid'};
  color: ${props => props.outline ? '#4C2D6E' : '#fff'};
  opacity: ${props => props.disabled ? 0.5 : 1};

  &.disabled {
    opacity: 0.5;
  }

  ${props => (props.outline && props.disabled) && css`
    color: #ccc;`
  }
  
  outline:none !important;
`;
