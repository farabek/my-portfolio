import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import { Icon } from './Icon';

export const GoTopBtn = () => {
  const [showBtn, setshowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setshowBtn(true);
      } else {
        setshowBtn(false);
      }
    });
  }, []);

  return (
    <>
      {showBtn && (
        <StyledGoTopBtn
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <Icon
            iconId={'arrowGoTop'}
            height={'15'}
            width={'16'}
            viewBox={'0 0 16 15'}
          />
        </StyledGoTopBtn>
      )}
    </>
  );
};

const StyledGoTopBtn = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 10px;
  border-radius: 10px;
  background-color: #222;
  border: none;
  cursor: pointer;
  z-index: 999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    width: 25px;
    height: 16px;
    fill: #fff;
    transition: transform 0.3s ease;
  }

  &::after {
    content: '';
    display: block;
    width: 2px; /* сделаем толще */
    height: 10px; /* чуть длиннее */
    background-color: white;
    margin-top: -2px; /* убрать отступ */
    opacity: 0.9;
  }

  &:hover {
    background-color: #444;
    transform: translateY(-4px);
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;
