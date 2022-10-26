import { useLayoutEffect, useState } from 'react';
import { Drawer } from 'antd';
import { ReactComponent as Logo } from '@/assets/logo.svg';
import { ReactComponent as Arrow } from '@/assets/arrow.svg';
import { ReactComponent as Github } from '@/assets/github.svg';
import { ReactComponent as Twitter } from '@/assets/twitter.svg';
import { ReactComponent as Discord } from '@/assets/discord.svg';
import { ReactComponent as Medium } from '@/assets/medium.svg';
import { ReactComponent as Telegram } from '@/assets/telegram.svg';
import { ReactComponent as Youtube } from '@/assets/youtube.svg';
import { ReactComponent as Paper } from '@/assets/paper.svg';
import Menu from '../Menu';

import { CopyBlock } from 'react-code-blocks';
import styles from './index.less';
import theme from './theme';
import codeData from './code';
var letters = [];
let t = 'Zero-Knowledge Omnichain Asset and Data Interoperation Network';
for (let i = 0; i < t.length; i++) {
  letters.push({
    flag: true,
    // num: Math.random() > 0.5 && 1 || 0,
    num: 2,
    text: t[i],
  });
}
const Page = () => {
  const [mySwiper, setMyswiper] = useState();
  const [visible, setVisible] = useState(false);
  const [navList, setNavList] = useState([true, false, false, false]);
  const [aniText, setAniText] = useState(letters);
  useLayoutEffect(() => {
    setMyswiper(
      new Swiper('.swiper', {
        loop: false, // 循环模式选项
        // autoplay: true,
        // effect: 'fade',
        on: {
          slideChangeTransitionEnd: function () {
            setNavList((data) => {
              let newData = data.map((item) => false);
              return newData.map((item, index) => index == this.activeIndex);
            });
          },
        },
        // noSwiping : true
      }),
    );
  }, []);
  // useLayoutEffect(() => {
  //   const ran = Math.floor(Math.random() * 49);
  //   setTimeout(() => {
  //     setAniText(data => {
  //       let newData = data.map((item, index) => {
  //         if (aniText.filter(item => item.num == 2).length > 35) {
  //           item.num = 2;
  //         }
  //         else {
  //           if (ran == index && item.num < 2) {
  //             item.num++;
  //           }
  //         }

  //         return item;
  //       });
  //       return newData;
  //     });

  //   }, 10);
  // }, [aniText]);
  const start = () => {
    setTimeout(() => {
      const ran = Math.floor(Math.random() * 49);

      setAniText((data) => {
        let newData = data.map((item, index) => {
          if (aniText.filter((item) => item.num == 2).length > 35) {
            item.num = 2;
          } else {
            if (ran == index && item.num < 2) {
              item.num++;
            }
          }

          return item;
        });
        return newData;
      });
      if (aniText.filter((item) => item.num != 2).length > 0) {
        start();
      }
    }, 10);
  };
  const next = (index) => {
    // mySwiper.slideNext();
    mySwiper.slideTo(index);
  };
  const options = {
    selectOnLineNumbers: true,
  };

  const handleMouseEnter = () => {
    if (aniText.filter((item) => item.num == 2).length > 0) {
      setAniText((data) => {
        let newData = data.map((item) => {
          item.num = (Math.random() > 0.5 && 1) || 0;
          return item;
        });

        return newData;
      });
      start();
    }
  };
  return (
    <div className={styles.page}>
      <div className="container">
        <header className="header">
          <a className="header__logo">
            <Logo style={{ width: '40px' }} />
          </a>
          {/* <nav className="header__menu">
            <ul className="header__menu__list">
              <li className="header__menu__item">
                <a className="header__menu__link">Developers</a>
              </li>
              <li className="header__menu__item">
                <a className="header__menu__link">Ecosystem</a>
              </li>
              <li className="header__menu__item">
                <a className="header__menu__link">Community</a>
              </li>
            </ul>
          </nav> */}
        </header>
        <Menu />
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide plan1">
              <div className="left">
                <div className="random">
                  <h1
                    style={{ wordBreak: 'break-all' }}
                    onMouseEnter={handleMouseEnter}
                    className="swiper-no-swiping"
                  >
                    {aniText.map((item) => (
                      <span className="nbr ltr">
                        {(item.num == 2 && item.text) || item.num}
                      </span>
                    ))}
                  </h1>
                  {/* <h1>
                    Omnichain Asset and Data Interoperational Protocol
                  </h1> */}
                  {/* <iframe src="/plan6/index.html"></iframe> */}
                </div>
                {/*  */}

                <p className="swiper-no-swiping">
                  Way Network achieves the multichain asset and data
                  zero-knowledge interoperability based on zkRayler, ZK
                  Verifier, IPFS, Sender, and Receiver.
                </p>
                {/* <button
                  className="btn btn-4 hover-border-7"
                  onClick={() => setVisible(true)}
                >
                  <span>Explore</span>
                </button> */}
                <div>
                  <a className="viewCode">Explore</a>
                </div>
              </div>
              <div className="right">
                <div>
                  <iframe src="/plan5/index.html"></iframe>
                </div>
                <div style={{ position: 'relative', zIndex: '1' }}>
                  <iframe src="/plan1/index.html"></iframe>
                </div>
              </div>
            </div>
            <div className="swiper-slide plan1">
              <div className="left textsmall ">
                <h1 className="swiper-no-swiping">
                  The native zero-knowledge communication integrated with
                  permissionless computing and storage
                </h1>
                <p className="swiper-no-swiping">
                  The Way Endpoint is encapsulated in Communication, Validation,
                  and Network, which orchestrates the data by the permissionless
                  computing and storage between any pair of nodes.
                </p>
                {/* <button
                  className="btn btn-4 hover-border-7"
                  onClick={() => setVisible(true)}
                >
                  <span>Explore</span>
                </button> */}
                {/* <div><a className="viewCode">Explore</a></div> */}
              </div>
              <div className="right">
                <iframe src="/plan2/index.html"></iframe>
              </div>
            </div>
            <div className="swiper-slide plan1">
              <div className="left textsmall">
                <h1 className="swiper-no-swiping">
                  The universal solution to enable cross-chain transaction with
                  trustless and valid delivery
                </h1>
                <p className="swiper-no-swiping">
                  The way communication protocol is the preferred method of
                  cross-chain messaging system and can guarantee the trustless
                  valid delivery without placing any trust in intermediary
                  entities or tokens.
                </p>
                {/* <button
                  className="btn btn-4 hover-border-7"
                  onClick={() => setVisible(true)}
                >
                  <span>Explore</span>
                </button> */}
                {/* <div><a className="viewCode">Explore</a></div> */}
              </div>
              <div className="right">
                <iframe src="/plan4/index.html"></iframe>
              </div>
            </div>
            <div className="swiper-slide plan1">
              <div className="left textsmall">
                <h1 className="swiper-no-swiping">
                  The decentralized network fabric underlying the fully
                  connected omnichain ecosystem
                </h1>
                <p className="swiper-no-swiping">
                  Developers will be able to write seamless inter-chain
                  applications like DEX or yield aggregator without worrying
                  about differing semantics between inter- and intra-chain
                  transactions.
                </p>
                {/* <button
                  className="btn btn-4 hover-border-7"
                  onClick={() => setVisible(true)}
                >
                  <span>Explore</span>
                </button> */}
                {/* <div><a className="viewCode">Explore</a></div> */}
              </div>
              <div className="right">
                <iframe src="/plan3/index.html"></iframe>
              </div>
            </div>
          </div>
        </div>
        {/* <main className="sliders-container">

        </main> */}
        <footer className="footer">
          <ul className="pagination">
            {navList.map((item, index) => (
              <li
                className={`pagination__item ${
                  item && 'pagination__item--active'
                }`}
                onClick={() => next(index)}
              >
                <a className="pagination__button"></a>
              </li>
            ))}
          </ul>
          <nav className="footer__menu">
            <ul className="social">
              <li>
                <a
                  target="_blank"
                  href="https://github.com/Way-Labs"
                  title="Github"
                >
                  <Github />
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/WayNetwork_Labs"
                  title="Twitter"
                >
                  <Twitter />
                </a>{' '}
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://t.me/waynetwork_official"
                  title="Telegram"
                >
                  <Telegram />
                </a>{' '}
              </li>
              <li>
                <a href="#" title="Discord">
                  <Discord />
                </a>{' '}
              </li>
              <li>
                <a href="#" title="Medium">
                  <Medium />
                </a>{' '}
              </li>
              <li>
                <a href="#" title="Youtube">
                  <Youtube />
                </a>
              </li>
            </ul>
          </nav>
        </footer>
        <Drawer
          title={
            <a>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <span>View On Github</span>&nbsp;&nbsp;
                <Arrow />
              </div>
            </a>
          }
          placement={'bottom'}
          size="large"
          visible={visible}
          onClose={() => setVisible(false)}
        >
          <h1>Send Messages</h1>
          <p>
            To send a message, call the Endpoint's send() function. Initiate
            thesend() function in your contracts (similar to the CounterMock) to
            send a cross chain message.
          </p>
          <CopyBlock
            language="go"
            wrapLines={true}
            text={codeData.f1.code}
            codeBlock
            theme={theme}
            showLineNumbers={true}
          />
          <p>Here is an explanation of the endpoint.send() interface:</p>
          <CopyBlock
            language="go"
            wrapLines={true}
            text={codeData.f2.code}
            codeBlock
            theme={theme}
            showLineNumbers={true}
          />
        </Drawer>
      </div>
    </div>
  );
};

export default Page;
