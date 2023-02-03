import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import BackButtonImage from '@assets/images/btn_back.png';
import { TX } from '@components/Text';

interface IHeaderProps {
  title: string;
}

const FlexRowCenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderContainer = styled(FlexRowCenterDiv)`
  position: relative;
  width: 100%;

  padding-bottom: 20px;
`;

const TitleText = styled(TX.Head4)``;

const BackButton = styled.img.attrs({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  src: BackButtonImage,
  alt: '뒤로 가기',
})`
  position: absolute;
  left: 0;

  width: 28px;
  height: 28px;

  cursor: pointer;
`;

const Header: React.FC<IHeaderProps> = ({ title }) => {
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <HeaderContainer>
      <BackButton onClick={onBackButtonClick} />
      <TitleText>{title}</TitleText>
    </HeaderContainer>
  );
};

export default Header;
