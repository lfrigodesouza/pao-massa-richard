import React from 'react';
import styled from 'styled-components';
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { SiIfood } from 'react-icons/si';
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
        itemText="(11) 94050-3468"
        itemLogo={<AiOutlineWhatsApp size="45px" />}
        itemLink="https://api.whatsapp.com/send?phone=5511940503468"
      />
      <LinkItem
        itemText="(11) 98935-3000"
        itemLogo={<AiOutlineWhatsApp size="45px" />}
        itemLink="https://api.whatsapp.com/send?phone=5511989353000"
      />
      <LinkItem
        itemText="@massadorichard"
        itemLogo={<AiOutlineInstagram size="45px" />}
        itemLink="https://www.instagram.com/massadorichard/"
      />
      <LinkItem
        itemText="Peça Pelo iFood"
        itemLogo={<SiIfood size="45px" />}
        itemLink="https://www.ifood.com.br/delivery/sao-paulo-sp/massa-do-richard-santana/5319cb8a-2f77-421c-95de-fdeb8bdddeed"
      />
    </LinksList>
  );
}
