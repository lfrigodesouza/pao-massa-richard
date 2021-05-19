import { node } from 'prop-types';
import React from 'react';
import Container from './Components/Container';
import Footer from './Components/Footer';
import Content from './Components/Content';

export default function DefaultPage({ children }) {
  return (
    <Container>
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
}

DefaultPage.propTypes = {
  children: node.isRequired,
};
