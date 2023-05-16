import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import image from '../../assets/images/picture.png';

export const StyledWrapper = styled.div`
  position: relative;
  width: 380px;
  background: url(${logo}) no-repeat 20px 20px,
    url(${image}) no-repeat center 28px/78%,
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  text-align: center;

  @media (min-width: 320px) {
    width: 290px;
  }
  @media (min-width: 410px) {
    width: 380px;
  }
`;

export const Line = styled.div`
  position: relative;
  top: 214px;
  height: 8px;
  background-color: #ebd8ff;
  box-shadow: var(--boxShadowLine);
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background-color: #ebd8ff;
  box-shadow: var(--boxShadowEllipse);
  border-radius: 50%;
`;

export const AvatarImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* width: 62px;
  height: 62px; */
  border-radius: 50%;
  object-fit: cover;
`;

export const UserInfo = styled.div`
  margin-top: 284px;
  margin-bottom: 26px;
`;

export const UserName = styled.h2`
  text-align: center;

  font-weight: 600;
  font-size: 20px;

  color: var(--titleTextColor);
`;

export const Text = styled.p`
  text-align: center;

  color: var(--primaryTextColor);
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 284px;
  margin-bottom: 26px;
`;

export const Button = styled.button`
  padding: 14px 28px;
  box-shadow: var(--boxShadowButton);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  margin-bottom: 36px;

  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  line-height: inherit;
  text-transform: uppercase;
  color: var(--primaryButtonColor);
  background: var(--primaryButtonBackground);
  transition: opacity var(--transition);

  &.active {
    background-color: var(--secondaryButtonBackground);
  }

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
