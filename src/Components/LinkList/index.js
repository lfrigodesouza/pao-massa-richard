import React from 'react';
import styled from 'styled-components';
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import LinkItem from './Components/LinkItem';

const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function LinkList() {
  return (
    <LinksList>
      <LinkItem
        itemText="(11) 98935-3000"
        itemLogo={<AiOutlineWhatsApp size="45px" />}
        itemLink="https://api.whatsapp.com/send?phone=5511989353000"
      />
      <LinkItem
        itemText="@pao_e_massa_do_richard"
        itemLogo={<AiOutlineInstagram size="45px" />}
        itemLink="https://www.instagram.com/pao_e_massa_do_richard/"
      />
    </LinksList>
  );
}
