import { FC, memo } from "react";
import styled from "styled-components";
import { HashLink } from 'react-router-hash-link';
import { HashRouter } from "react-router-dom";


export const Category: FC = memo(() => {

  const scrollWithOffset = (el: any) => {
    console.log(el);
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -50;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <HashRouter>
      <SMenuContainer>
        <SHashLink smooth to="#top"><STitle>HOME</STitle></SHashLink>
        <SOl id="indexList">
          <SHashLink smooth to="/#category1" scroll={(el: any) => scrollWithOffset(el)}><SLi className="active">肯定・お礼・あいさつ</SLi></SHashLink>
          <SHashLink smooth to="/#category2" scroll={(el: any) => scrollWithOffset(el)}><SLi>センシティブ</SLi></SHashLink>
          <SHashLink smooth to="/#category3" scroll={(el: any) => scrollWithOffset(el)}><SLi>返事・リアクション</SLi></SHashLink>
          <SHashLink smooth to="/#category4" scroll={(el: any) => scrollWithOffset(el)}><SLi>罵倒・怒・煽り</SLi></SHashLink>
          <SHashLink smooth to="/#category5" scroll={(el: any) => scrollWithOffset(el)}><SLi>疑問・問いかけ</SLi></SHashLink>
          <SHashLink smooth to="/#category6" scroll={(el: any) => scrollWithOffset(el)}><SLi>なきごえ・笑い声</SLi></SHashLink>
          <SHashLink smooth to="/#category7" scroll={(el: any) => scrollWithOffset(el)}><SLi>その他</SLi></SHashLink>
        </SOl>
      </SMenuContainer>
    </HashRouter>
  )
});

const SMenuContainer = styled.div`
  background-color: #e4e4e4;
  padding: 20px 40px 20px 20px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: #d8d8d8 -2px 2px 8px 5px;
  display: inline-flex;
  flex-direction: column;
  height: fit-content;
  caret-color: transparent;
`

const STitle = styled.h2`
  color: #3F3F3F;
  margin: 0;
`
const SOl = styled.ol`
  padding-left: 0;
  margin: 0;

  .active {
    color: #3F3F3F;
    background-color: #c5c5c5;
    border-radius: 10px;
    padding: 10px;
    padding-right: 30px;
    font-weight: bold;
  }
`
const SHashLink = styled(HashLink)`
  text-decoration: none;
`
const SLi = styled.li`
  list-style: none;
  color: #777777;
  margin-top:20px;
  padding: 10px;
`
