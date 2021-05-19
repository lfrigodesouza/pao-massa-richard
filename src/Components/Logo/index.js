import styled from 'styled-components';
import React from 'react';
import { number } from 'prop-types';
import LogoImage from '../../assets/img/logo.jpeg';

const LogoFrame = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 100%;
  border: 2px solid var(--color-primary);
`;

export default function Logo({ width, height }) {
  return <LogoFrame width={width} height={height} src={LogoImage} />;
}

Logo.propTypes = {
  width: number.isRequired,
  height: number.isRequired,
};
