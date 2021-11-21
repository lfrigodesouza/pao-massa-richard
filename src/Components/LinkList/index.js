import React from 'react';
import styled from 'styled-components';
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { SiIfood, SiUbereats } from 'react-icons/si';
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
        itemText="@massadorichard"
        itemLogo={<AiOutlineInstagram size="45px" />}
        itemLink="https://www.instagram.com/massadorichard/"
      />
      <LinkItem
        itemText="Peça Pelo iFood"
        itemLogo={<SiIfood size="45px" />}
        itemLink="https://www.ifood.com.br/delivery/sao-paulo-sp/massa-do-richard-santana/5319cb8a-2f77-421c-95de-fdeb8bdddeed"
      />
      <LinkItem
        itemText="Peça Pelo Uber Eats"
        itemLogo={<SiUbereats size="45px" />}
        itemLink="https://www.order.store/br/store/Massa%20do%20Richard/pw6MHB3oTbS0UqK8o8PUUw"
      />
    </LinksList>
  );
}
