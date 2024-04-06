import { FC, memo,  } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

import { PlayButton } from "../button/PlayButton";

type Props = {
  playList: Array<{ audioSrc: string; title: string; id: number; }>;
  setPlayList: any;
}

export const Deck: FC<Props> = memo((props) => {
  const { playList, setPlayList } = props;

  //playList削除ボタン
  const playListDelete = (index: number) => {
    let newPlayList = [...playList];
    newPlayList = newPlayList.filter((_,i) => (i !== index));

    localStorage.setItem('playList', JSON.stringify(newPlayList))
    setPlayList(newPlayList);
  }

  //playList一つ上へボタン
  const playListUp = (index: number) => {
    const newPlayList = [...playList];
    if (index <= 0 || index >= newPlayList.length) return;

    const temp = newPlayList[index];
    newPlayList[index] = newPlayList[index - 1];
    newPlayList[index-1] = temp;

    localStorage.setItem('playList', JSON.stringify(newPlayList))
    setPlayList(newPlayList);
  }

  //playListひとつ下へボタン
    const playListDown = (index: number) => {
    const newPlayList = [...playList];
    if (index < 0 || index === newPlayList.length-1) return;

    const temp = newPlayList[index];
    newPlayList[index] = newPlayList[index + 1];
    newPlayList[index + 1] = temp;

    localStorage.setItem('playList', JSON.stringify(newPlayList))
    setPlayList(newPlayList);
  }

  //playList全削除ボタン
  const AllDelete = () => {
    localStorage.setItem('playList', JSON.stringify([]))
    setPlayList([])
  }

  return (
      <SContainer>
        <STextContainer>
          <h2>PlayList</h2>
          <SText>(ボタン右クリックで追加)</SText>
        </STextContainer>


        <SUl>
            {playList.map((element, index) => (
              <SLi key={index}>
                <SUpBtn onClick={() => {playListUp(index)}}/>
                <SDownBtn onClick={() => {playListDown(index)}}/>

                <PlayButton audioSrc={element.audioSrc} title={element.title} />
                <SDeleteBtn onClick={() => {playListDelete(index)}}/>
              </SLi>
            ))}
        </SUl>
        <SAllDelete onClick={AllDelete}>すべて削除</SAllDelete>
      </SContainer>
  )
});

const SContainer = styled.div`
  min-width: 300px;
  min-height: 500px;
  caret-color: transparent;

  margin-left: 20px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 20px;
  background-color: #e5c9f1;
  border: solid #c7c6c6 1.5px;
  box-shadow: #d8d8d8 -2px 2px 8px 5px;
`
const STextContainer = styled.div`
  display: flex;
  align-self: flex-start;
`
const SText = styled.p`
  margin-left: 20px;
  align-self: center;
`
const SUl = styled.ul`
  padding-left: 0;
`

const SLi = styled.li`
  list-style: none;
  border-bottom: 0.5px solid #d3a5e7;
  margin: 5px 0px;
  min-width: 350px;
`
const SDeleteBtn = styled(AiOutlineClose)`
  padding: 10px 5px;
  border-radius: 10px;

  vertical-align: middle;

  &:hover {
    cursor: pointer;
    background-color: #c5c5c5;
  }
`

const SUpBtn = styled(AiOutlineArrowUp)`
  padding: 10px 5px;
  border-radius: 10px;

  vertical-align: middle;

  &:hover {
    cursor: pointer;
    background-color: #c5c5c5;
  }
`

const SDownBtn = styled(AiOutlineArrowDown)`
  padding: 10px 5px;
  border-radius: 10px;

  vertical-align: middle;

  &:hover {
    cursor: pointer;
    background-color: #c5c5c5;
  }
`

const SAllDelete = styled.button`
  background-color: #3F3F3F;
  color: #c7c7c7;
  width: fit-content;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  caret-color: transparent;

  align-self: flex-end;
  margin-top: auto;

  &:hover {
    cursor: pointer;
    transition : all 0.5s ease 0s;
    background-color: #c5c5c5;
    color: #3F3F3F;
  }
`