import { FC, memo, useEffect, useState } from "react";
import styled from "styled-components";
import StickyBox from "react-sticky-box";

import { Category } from "./Category";
import { ButtonList } from "../button/ButtonList";
import { Deck } from "../playList/PlayList";



export const MainContent:FC = memo(() => {
  const [playList, setPlayList] = useState<Array<{ audioSrc: string; title: string; id: number }>>([]);

  useEffect(() => {
    const storageItem: string | null = localStorage.getItem('playList');
    if (storageItem !== null) {
      const item = JSON.parse(storageItem);
      setPlayList(item);
    }
  }, [setPlayList]);

  return (
      <SMainContainer>
        <SCategory offsetTop={20}><Category/></SCategory>
        <ButtonList playList={playList} setPlayList={setPlayList}/>
        <SPlayList offsetTop={20}><Deck playList={playList} setPlayList={setPlayList}/></SPlayList>
      </SMainContainer>

  );
});

const SMainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  justify-content: center;
`

const SCategory = styled(StickyBox)`
  /* @media (max-width: 540px) {
    display: none;
  } */
  @media (max-width: 1024px) {
    display: none;
  }
  @media (min-width: 900px) {
    margin-left: 10px;
  }
`
const SPlayList = styled(StickyBox)`
  /* @media (max-width: 540px) {
    display: none;
  } */
  @media (max-width: 900px) {
    display: none;
  }
  @media (min-width: 900px) {
    margin-right: 10px;
  }
`