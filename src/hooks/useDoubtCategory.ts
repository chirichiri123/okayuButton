import id0 from "../0audio/疑問・問いかけ/あどばいす？？ .mp3";
import id1 from "../0audio/疑問・問いかけ/いいのぉ？ .mp3";
import id2 from "../0audio/疑問・問いかけ/ちゃんとしてるよ？.mp3";
import id3 from "../0audio/疑問・問いかけ/ねっ！？.mp3";
import id4 from "../0audio/疑問・問いかけ/ね？.mp3";
import id5 from "../0audio/疑問・問いかけ/ばれた？.mp3";
import id6 from "../0audio/疑問・問いかけ/ほんとう？.mp3";
import id7 from "../0audio/疑問・問いかけ/わかってるよ？.mp3";
import id8 from "../0audio/疑問・問いかけ/ん？.mp3";
import id9 from "../0audio/疑問・問いかけ/ホントにしらないの？.mp3";
import id10 from "../0audio/疑問・問いかけ/恥ずかしくないのぉ？.mp3";
import id11 from "../0audio/疑問・問いかけ/気をつけなさいよぉ？.mp3";

export const useDoubtCategory = () => {
  const doubtCategory = [
    {
      id: 0,
      title: 'あどばいす？？',
      src: id0,
      category: '疑問・問いかけ'
    },
    {
      id: 1,
      title: 'いいのぉ？',
      src: id1,
      category: '疑問・問いかけ'
    },
    {
      id: 2,
      title: 'ちゃんとしてるよ？',
      src: id2,
      category: '疑問・問いかけ'
    },
    {
      id: 3,
      title: 'ねっ！？',
      src: id3,
      category: '疑問・問いかけ'
    },
    {
      id: 4,
      title: 'ね？',
      src: id4,
      category: '疑問・問いかけ'
    },
    {
      id: 5,
      title: 'ばれた？',
      src: id5,
      category: '疑問・問いかけ'
    },
    {
      id: 6,
      title: 'ほんとう？',
      src: id6,
      category: '疑問・問いかけ'
    },
    {
      id: 7,
      title: 'わかってるよ？',
      src: id7,
      category: '疑問・問いかけ'
    },
    {
      id: 8,
      title: 'ん？',
      src: id8,
      category: '疑問・問いかけ'
    },
    {
      id: 9,
      title: 'ホントにしらないの？',
      src: id9,
      category: '疑問・問いかけ'
    },
    {
      id: 10,
      title: '恥ずかしくないのぉ？',
      src: id10,
      category: '疑問・問いかけ'
    },
    {
      id: 11,
      title: '気をつけなさいよぉ？',
      src: id11,
      category: '疑問・問いかけ'
    }
  ];

  doubtCategory.sort((a, b) => (a.title > b.title) ? 1 : -1);

  return { doubtCategory };
};
