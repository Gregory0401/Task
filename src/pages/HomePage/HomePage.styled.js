import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const WrapperBG = styled.div`
  opacity: 0.2;

  margin-bottom: 30px;
  height: calc(100vh - 136px);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  @media (min-width: 810px) {
    background-size: 70%;
  }
`;

export const Wrp = styled.div`
  position: absolute;
  top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;

  @media (min-width: 410px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (min-width: 810px) {
    width: 800px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  text-align: center;
  font-size: 30px;
  color: var(--mainColor);
  width: 100%;
  animation-duration: 2s;
  animation-name: neon;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff1177,
    0 0 70px #ff1177, 0 0 80px #ff1177, 0 0 100px #ff1177, 0 0 150px #ff1177;

  @keyframes neon {
    from {
      scale: 0.4;
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff1177,
        0 0 70px #ff1177, 0 0 80px #ff1177, 0 0 100px #ff1177, 0 0 150px #ff1177;
    }
    to {
      scale: 1.8;
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff1177,
        0 0 35px #ff1177, 0 0 40px #ff1177, 0 0 50px #ff1177, 0 0 75px #ff1177;
    }
  }
`;

export const Text = styled.p`
  font-size: 20px;
  color: var(--mainColor);
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
`;
