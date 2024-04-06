import { FC, memo } from "react";
import styled from "styled-components";
import { IconContext } from 'react-icons';
import { AiFillYoutube } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

import icon from '../../0img/icon.png';

export const Header:FC = memo(() => {

  return (
    <SHeader>

      <SContainer>

          <STitle>OKAYU Button</STitle>
          <SImg src={icon} alt="icon画像"/>

        <SIconContainer>
          <IconContext.Provider value={{ size: "35px"}}>
            <SLink href="https://www.youtube.com/@NekomataOkayu"><SYoutubeIcon /></SLink>
            <SLink href="https://x.com/nekomataokayu?s=20"><SXIcon/></SLink>
          </IconContext.Provider>
        </SIconContainer>

      </SContainer>

    </SHeader>
  )
});

const SHeader = styled.header`
  background-color: #D3A0DC;
  padding: 20px;
  caret-color: transparent;
  `

const SContainer = styled.div`
  background-color: #e4e4e4;
  border-radius: 20px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  box-shadow: #c688d1 -3px 3px 8px 10px;
`

const SImg = styled.img`
  max-width: 40px;
  margin-bottom: 5px;
  margin-left: 10px;
  margin-right: 10px;
`

const STitle = styled.h2`
  font-family: "Madimi One", sans-serif;
  font-size: 35px;
`

const SIconContainer = styled.div`
  display: flex;
  justify-self: end;
  margin-left: auto;
`

const SYoutubeIcon = styled(AiFillYoutube)`
  padding: 10px 5px;
  border-radius: 10px;
  margin-right: 10px;

  vertical-align: middle;

  &:hover {
    cursor: pointer;
    background-color: #c5c5c5;
  }
`
const SXIcon = styled(FaSquareXTwitter)`
  padding: 10px 5px;
  border-radius: 10px;

  vertical-align: middle;

  &:hover {
    cursor: pointer;
    background-color: #c5c5c5;
  }
`
const SLink = styled.a`
  text-decoration: none;
  color: #3F3F3F;
`