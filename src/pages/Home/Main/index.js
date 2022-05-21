import { useLayoutEffect, useState } from 'react';
import { Drawer } from 'antd';
import { ReactComponent as Logo } from '@/assets/logo.svg';
import { ReactComponent as Arrow } from '@/assets/arrow.svg';
import { CopyBlock, dracula } from 'react-code-blocks';
const code = `pragma solidity 0.8.4;
pragma abicoder v2;

import "../lzApp/NonblockingLzApp.sol";

/// @title A LayerZero example sending a cross chain message from a source chain to a destination chain to increment a counter
contract OmniCounter is NonblockingLzApp {
    uint public counter;

    constructor(address _lzEndpoint) NonblockingLzApp(_lzEndpoint) {}

    function _nonblockingLzReceive(uint16, bytes memory, uint64, bytes memory) internal override {
        // _nonblockingLzReceive is how we provide custom logic to lzReceive()
        // in this case, increment a counter when a message is received.
        counter += 1;
    }

    function incrementCounter(uint16 _dstChainId) public payable {
        // _lzSend calls endpoint.send()
        _lzSend(_dstChainId, bytes(""), payable(msg.sender), address(0x0), bytes(""));
    }
}`;
const code2 = `// an endpoint is the contract which has the send() function
ILayerZeroEndpoint public endpoint;
// call send() to send a message/payload to another chain
endpoint.send{value:msg.value}(
    10001,               // destination LayerZero chainId
    dstContractAddress,  // send to this address on the destination          
    bytes("hello"),      // bytes payload
    msg.sender,          // refund address
    address(0x0),        // future parameter
    bytes("")            // adapterParams (see "Advanced Features")
 );`;
const Page = () => {
  const [mySwiper, setMyswiper] = useState();
  const [visible, setVisible] = useState(false);
  const [navList, setNavList] = useState([true, false, false, false]);
  useLayoutEffect(() => {
    setMyswiper(
      new Swiper('.swiper', {
        loop: true, // 循环模式选项
        autoplay: true,
        effect: 'fade',
        on: {
          slideChangeTransitionEnd: function () {
            setNavList((data) => {
              let newData = data.map((item) => false);
              return newData.map(
                (item, index) => index == this.activeIndex - 1,
              );
            });
          },
        },
      }),
    );
  }, []);
  const next = () => {
    mySwiper.slideNext();
    setVisible(true);
  };
  const options = {
    selectOnLineNumbers: true,
  };
  return (
    <div className="container">
      <header className="header">
        <a className="header__logo">
          <Logo style={{ width: '40px' }} />
        </a>
        <nav className="header__menu">
          <ul className="header__menu__list">
            <li className="header__menu__item">
              <a className="header__menu__link">works</a>
            </li>
            <li className="header__menu__item">
              <a className="header__menu__link">culture</a>
            </li>
            <li className="header__menu__item">
              <a className="header__menu__link">news</a>
            </li>
            <li className="header__menu__item">
              <a className="header__menu__link">careers</a>
            </li>
            <li className="header__menu__item">
              <a className="header__menu__link">contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <iframe src="/plan4/index.html"></iframe>
          </div>
          <div className="swiper-slide">
            <iframe src="/plan1/index.html"></iframe>
          </div>
          <div className="swiper-slide">
            <iframe src="/plan2/index.html"></iframe>
          </div>
          <div className="swiper-slide">
            <iframe src="/plan3/index.html"></iframe>
          </div>
        </div>
      </div>
      <main className="sliders-container">
        <ul className="pagination">
          {navList.map((item) => (
            <li
              className={`pagination__item ${
                item && 'pagination__item--active'
              }`}
              onClick={next}
            >
              <a className="pagination__button"></a>
            </li>
          ))}
        </ul>
      </main>
      <footer className="footer">
        <nav className="footer__menu">
          <ul className="footer__menu__list">
            <li className="footer__menu__item">
              <a className="footer__menu__link">facebook</a>
            </li>
            <li className="footer__menu__item">
              <a className="footer__menu__link">dribbble</a>
            </li>
            <li className="footer__menu__item">
              <a className="footer__menu__link">instagram</a>
            </li>
          </ul>
        </nav>
      </footer>
      <Drawer
        title={
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span>View On Github</span>&nbsp;&nbsp;
            <Arrow />
          </div>
        }
        placement={'bottom'}
        size="large"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <h1>第1段</h1>
        <CopyBlock
          language="go"
          wrapLines={true}
          text={code}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        />
        <h1>第2段</h1>
        <CopyBlock
          language="go"
          wrapLines={true}
          text={code2}
          codeBlock
          theme={dracula}
          showLineNumbers={false}
        />
      </Drawer>
    </div>
  );
};

export default Page;
