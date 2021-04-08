import React from 'react';
import {ILogo} from './Logo.types';

const Logo: React.FC<ILogo> = ({carrier}) => <img src={`//pics.avs.io/99/36/{${carrier}}.png`} alt=""/>;

export default Logo;
