import styled from 'styled-components';
import React from 'react';
import { number } from 'prop-types';
import LogoImage from '../../assets/img/logo.png';

const LogoFrame = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default function Logo({ width, height }) {
  return <LogoFrame width={width} height={height} src={LogoImage} />;
}

Logo.propTypes = {
  width: number.isRequired,
  height: number.isRequired,
};
