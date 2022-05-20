import { useLayoutEffect, useState } from 'react';
import { Drawer } from 'antd';
import { ReactComponent as Logo } from '@/assets/logo.svg';
import { ReactComponent as Arrow } from '@/assets/arrow.svg';
const code = 'const a = 0;';

const Page = () => {
  const [mySwiper, setMyswiper] = useState();
  const [visible, setVisible] = useState(false);
  const [editorValue, seteditorValue] = useState('');
  useLayoutEffect(() => {
    setMyswiper(
      new Swiper('.swiper', {
        loop: true, // 循环模式选项
        effect: 'fade',
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
          <li
            className="pagination__item pagination__item--active"
            onClick={next}
          >
            <a className="pagination__button"></a>
          </li>
          <li className="pagination__item">
            <a className="pagination__button"></a>
          </li>
          <li className="pagination__item">
            <a className="pagination__button"></a>
          </li>
          <li className="pagination__item">
            <a className="pagination__button"></a>
          </li>
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
        <iframe src="code/index.html"></iframe>
      </Drawer>
    </div>
  );
};

export default Page;
