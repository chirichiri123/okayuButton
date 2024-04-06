import { FC, memo, useEffect, useState } from "react";
import styled from "styled-components";
import 'animate.css';

import { PlayButton } from "./PlayButton";
import { useSensitiveCategory } from "../../hooks/useSensitiveCategory";
import { useDoubtCategory } from "../../hooks/useDoubtCategory";
import { useLaughterCategory } from "../../hooks/useLaughterCategory";
import { useNavigate } from "react-router-dom";
import { useNegativeCategory } from "../../hooks/useNegativeCategory";
import { useOtherCategory } from "../../hooks/useOtherCategory";
import { usePositiveCategory } from "../../hooks/usePositiveCategory";
import { useReactionCategory } from "../../hooks/useReactionCategory";

type Props = {
  playList: Array<{ audioSrc: string; title: string }>;
  setPlayList: any;
}

export const ButtonList: FC<Props> = memo((props) => {
  const { playList, setPlayList } = props;

  const { doubtCategory } = useDoubtCategory();
  const { laughterCategory } = useLaughterCategory();
  const { negativeCategory } = useNegativeCategory();
  const { OtherCategory } = useOtherCategory();
  const { positiveCategory } = usePositiveCategory();
  const { reactionCategory } = useReactionCategory();
  const { sensitiveCategory } = useSensitiveCategory();

  const [ sections, setSections ] = useState<HTMLElement[]>([]);

  //ふわっと表示させる/////////////////////////////////////
  // const { ref, inView } = useInView({
  //   rootMargin: '-50px',// ref要素が現れてから50px過ぎたら
  //   triggerOnce: true //最初の一度だけ実行
  // });
  ///////////////////////////////////////////////////////

  //目次連動処理//////////////////////////////////////////////////////
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.box');
    setSections(Array.from(sections));
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-50% 0px",
      threshold: 0
    };
    const observer = new IntersectionObserver(doWhenIntersect, options);
    sections.forEach(section => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  function doWhenIntersect(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activateIndex(entry.target.id);
      }
    });
  }

  function activateIndex(sectionId: string) {
    const currentActiveIndex = document.querySelector("#indexList .active");
    if (currentActiveIndex !== null) {
      (currentActiveIndex as HTMLElement).classList.remove("active");
    }
    // 指定されたsectionIdに対応する<li>要素を取得
    const anchorTag = document.querySelector(`a[href='#/#${sectionId}']`);
    if (anchorTag !== null) {
      const liElement = anchorTag.querySelector("li");
      if (liElement !== null) {
        liElement.classList.add("active");
      }
    }
  }
  ///////////////////////////////////////////////////////////////////

  //右クリック時の処理
  const click = (e: any, element: {audioSrc: string; title: string;}, isRight?: boolean) => {
    e.preventDefault();
    if(isRight) {
      const newPlayList = [...playList, element];
      localStorage.setItem('playList', JSON.stringify(newPlayList))
      setPlayList(newPlayList);
    }
  }

  return (
    <SContainer>

      <SCategory id="category1" className="box">
        <STitle>肯定・お礼・あいさつ</STitle>
        {positiveCategory.map((element, index) => (
          <PlayButton key={index} audioSrc={element.src} title={element.title} onContextMenu={click}/>
        ))}
      </SCategory>

      <SCategory id="category2" className="box">
        <STitle>センシティブ</STitle>
        {sensitiveCategory.map((element, index) => (
          <PlayButton key={index} audioSrc={element.src} title={element.title} onContextMenu={click}/>
        ))}
      </SCategory>

      {/* <SCategory id="category2" className="box" ref={ref}>
        {inView && (
          <div className="animate__animated animate__fadeInUp">
            <STitle>Category2</STitle>
            {audioCategory1.map((element, index) => (
              <PlayButton key={index} audioSrc={element.src} title={element.title} onContextMenu={click}/>
            ))}
          </div>
        )}
      </SCategory> */}

      <SCategory id="category3" className="box">
        <STitle>返事・リアクション</STitle>
        {reactionCategory.map((element, index) => (
          <PlayButton key={index} audioSrc={element.src} title={element.title} onContextMenu={click}/>
        ))}
      </SCategory>

      <SCategory id="category4" className="box">
        <STitle>罵倒・怒・あいさつ</STitle>
        {negativeCategory.map((element, index) => (
          <PlayButton key={index} audioSrc={element.src} title={element.title} onContextMenu={click}/>
        ))}
      </SCategory>

      <SCategory id="category5" className="box">
        <STitle>疑問・問いかけ</STitle>
        {doubtCategory.map((element, index) => (
          <PlayButton key={index} audioSrc={element.src} title={element.title} onContextMenu={click}/>
        ))}
      </SCategory>

      <SCategory id="category6" className="box">
        <STitle>なきごえ・笑い声</STitle>
        {laughterCategory.map((element, index) => (
          <PlayButton key={index} audioSrc={element.src} title={element.title} onContextMenu={click}/>
        ))}
      </SCategory>

      <SCategory id="category7" className="box">
        <STitle>その他</STitle>
        {OtherCategory.map((element, index) => (
          <PlayButton key={index} audioSrc={element.src} title={element.title} onContextMenu={click}/>
        ))}
      </SCategory>

    </SContainer>
  )
});

const SContainer = styled.div`
  max-width: 1000px;

  margin-left: 20px;
  padding: 20px;
  caret-color: transparent;

  border-radius: 20px;
  background-color: #e4e4e4;
  border: solid #c7c6c6 1.5px;
  box-shadow: #d8d8d8 -2px 2px 8px 5px;

  @media (max-width: 600px) {
    margin: 0 20px;
  }

`
const STitle = styled.h3`
`

const SCategory = styled.div`

`