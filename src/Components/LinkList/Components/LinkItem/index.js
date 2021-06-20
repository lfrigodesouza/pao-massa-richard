import { node, string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export const ItemBox = styled.a`
  border-color: var(--color-primary);
  background-color: var(--color-white);
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px 0px;
  margin: 10px;
  width: 100%;
  max-width: 300px;
  text-decoration: none;
  color: var(--color-primary);
  @media (max-width: 300px) {
    flex-direction: column;
  }

  & svg {
    margin-right: 5px;
  }
`;

export const ItemLink = styled.span`
  font-size: var(--size-text-lg);
`;

export default function LinkItem({ itemText, itemLogo, itemLink }) {
  return (
    <ItemBox target="_blank" href={itemLink}>
      {itemLogo}
      <ItemLink>{itemText}</ItemLink>
    </ItemBox>
  );
}

LinkItem.propTypes = {
  itemText: string.isRequired,
  itemLogo: node.isRequired,
  itemLink: string.isRequired,
};
