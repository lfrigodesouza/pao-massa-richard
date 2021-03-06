import React from 'react';
import styled from 'styled-components';

const FooterBar = styled.footer`
  position: absolute;
  bottom: 30px;
  width: 100%;
  height: 30px;
  border-top: solid 1px var(--color-primary);
  background-color: var(--color-background);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  margin: -30px;
`;

export function GetCurrentYear() {
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <FooterBar>
      {' '}
      { `Massa do Richard | © 2020 - ${GetCurrentYear()}` }
      {' '}
    </FooterBar>
  );
}
