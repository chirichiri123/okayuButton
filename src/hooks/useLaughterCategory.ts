import id0 from "../0audio/なきごえ・笑い声/にゃぁ.mp3";
import id1 from "../0audio/なきごえ・笑い声/にゃぁー.mp3";
import id2 from "../0audio/なきごえ・笑い声/にゃっ.mp3";
import id3 from "../0audio/なきごえ・笑い声/にゃにゃ.mp3";
import id4 from "../0audio/なきごえ・笑い声/にゃははははは.mp3";
import id5 from "../0audio/なきごえ・笑い声/にゃはは.mp3";
import id6 from "../0audio/なきごえ・笑い声/にゃ1.mp3";
import id7 from "../0audio/なきごえ・笑い声/にゃ2.mp3";
import id8 from "../0audio/なきごえ・笑い声/にゃ3.mp3";
import id9 from "../0audio/なきごえ・笑い声/にゃ4.mp3";
import id10 from "../0audio/なきごえ・笑い声/にゃ5.mp3";
import id11 from "../0audio/なきごえ・笑い声/ははははぁ….mp3";
import id12 from "../0audio/なきごえ・笑い声/んにゃぁきもちいにゃぁ.mp3";
import id13 from "../0audio/なきごえ・笑い声/ニャ6.mp3";
import id14 from "../0audio/なきごえ・笑い声/ニャ―1.mp3";
import id15 from "../0audio/なきごえ・笑い声/ニャ―2.mp3";
import id16 from "../0audio/なきごえ・笑い声/ニャー3.mp3";
import id17 from "../0audio/なきごえ・笑い声/ニャー4.mp3";
import id18 from "../0audio/なきごえ・笑い声/笑い声-1.mp3";
import id19 from "../0audio/なきごえ・笑い声/笑い声-2.mp3";
import id20 from "../0audio/なきごえ・笑い声/笑い声-3.mp3";
import id21 from "../0audio/なきごえ・笑い声/笑い声-4.mp3";
import id22 from "../0audio/なきごえ・笑い声/笑い声-5.mp3";
import id23 from "../0audio/なきごえ・笑い声/笑い声-6.mp3";

export const useLaughterCategory = () => {
  const laughterCategory = [
    {
      id: 0,
      title: 'にゃぁ',
      src: id0,
      category: 'なきごえ・笑い声'
    },
    {
      id: 1,
      title: 'にゃぁー!',
      src: id1,
      category: 'なきごえ・笑い声'
    },
    {
      id: 2,
      title: 'にゃっ!',
      src: id2,
      category: 'なきごえ・笑い声'
    },
    {
      id: 3,
      title: 'にゃにゃ!',
      src: id3,
      category: 'なきごえ・笑い声'
    },
    {
      id: 4,
      title: 'にゃはははは',
      src: id4,
      category: 'なきごえ・笑い声'
    },
    {
      id: 5,
      title: 'にゃはは！',
      src: id5,
      category: 'なきごえ・笑い声'
    },
    {
      id: 6,
      title: 'にゃ！1',
      src: id6,
      category: 'なきごえ・笑い声'
    },
    {
      id: 7,
      title: 'にゃ！2',
      src: id7,
      category: 'なきごえ・笑い声'
    },
    {
      id: 8,
      title: 'にゃ！3',
      src: id8,
      category: 'なきごえ・笑い声'
    },
    {
      id: 9,
      title: 'にゃ！4',
      src: id9,
      category: 'なきごえ・笑い声'
    },
    {
      id: 10,
      title: 'にゃ！5',
      src: id10,
      category: 'なきごえ・笑い声'
    },
    {
      id: 11,
      title: 'ははははぁ….',
      src: id11,
      category: 'なきごえ・笑い声'
    },
    {
      id: 12,
      title: 'んにゃぁきもちいにゃぁ',
      src: id12,
      category: 'なきごえ・笑い声'
    },
    {
      id: 13,
      title: 'ニャ!6',
      src: id13,
      category: 'なきごえ・笑い声'
    },
    {
      id: 14,
      title: 'ニャ―!1',
      src: id14,
      category: 'なきごえ・笑い声'
    },
    {
      id: 15,
      title: 'ニャ―!2',
      src: id15,
      category: 'なきごえ・笑い声'
    },
    {
      id: 16,
      title: 'ニャー!3',
      src: id16,
      category: 'なきごえ・笑い声'
    },
    {
      id: 17,
      title: 'ニャー!4',
      src: id17,
      category: 'なきごえ・笑い声'
    },
    {
      id: 18,
      title: '笑い声-1',
      src: id18,
      category: 'なきごえ・笑い声'
    },
    {
      id: 19,
      title: '笑い声-2',
      src: id19,
      category: 'なきごえ・笑い声'
    },
    {
      id: 20,
      title: '笑い声-3',
      src: id20,
      category: 'なきごえ・笑い声'
    },
    {
      id: 21,
      title: '笑い声-4',
      src: id21,
      category: 'なきごえ・笑い声'
    },
    {
      id: 22,
      title: '笑い声-5',
      src: id22,
      category: 'なきごえ・笑い声'
    },
    {
      id: 23,
      title: '笑い声-6',
      src: id23,
      category: 'なきごえ・笑い声'
    },
  ];

  laughterCategory.sort((a,b) => (a.title > b.title) ? 1 : -1);

  return { laughterCategory };
};
