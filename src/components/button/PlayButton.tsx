import { FC, memo } from "react";
import styled from "styled-components";
import useSound from "use-sound";

type Props = {
  audioSrc: string;
  title: string;
  onContextMenu?: (e: any, element: any,  bool: boolean,) => void
}

export const PlayButton:FC<Props> = memo((props) => {
  const { audioSrc, title, onContextMenu } = props;
  const [ play ] = useSound(audioSrc);

  const handleClick = () => {
    play();
  };

  return (
    <SButton onClick={handleClick} onContextMenu={(e) => onContextMenu && onContextMenu(e, props, true)}>
      {title}
    </SButton>
  )
});

const SButton = styled.button`
  border-radius: 10px;
  border: none;
  margin: 5px;
  padding: 10px;
  caret-color: transparent;

  &:hover {
    cursor: pointer;
    transition : all 0.5s ease 0s;
    background-color: #c5c5c5;
  }
`