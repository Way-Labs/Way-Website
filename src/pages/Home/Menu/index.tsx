import { useLayoutEffect, useRef } from 'react';
import { ReactComponent as Box } from '@/assets/box.svg';
import { ReactComponent as ArrowMore } from '@/assets/expand_more.svg';
import { ReactComponent as ArrowLess } from '@/assets/expand_less.svg';

import styles from './index.less';

const Page = () => {
  return (
    <div className={styles.page}>
      <nav id="menu">
        <div className="menu-item">
          <div className="menu-text">
            <a href="#">Developers<ArrowMore /></a>
          </div>
          <div className="sub-menu triple" style={{ height: '20em' }}>
            <div
              className="top-container gb c icon-box"
              style={{ height: '3em' }}
            >
              <div className="icon big">
                <i className="far fa-book"></i>
              </div>
              <div className="text">
                <div className="title">Where to start</div>
                <div className="sub-text">How to start the development</div>
              </div>
            </div>
            <div className="box">
              <h3>Your Journey</h3>
              <a href="#">Get Started</a>
              <a href="#">Learn the Basics</a>
              <a href="#">Get Advanced</a>
            </div>
            <div className="box">
              <h3>Your Tools</h3>
              <a href="#">Turbo Editor</a>
              <a href="#">Time Stopper</a>
              <a href="#">Brain Enhancer</a>
            </div>
            <div style={{ width: '100%', height: '1em' }}></div>
            <div style={{ width: '100%', height: '1em' }}></div>
            <div className="icon-box flat">
              <div className="icon">
                <i className="fal fa-plug"></i>
              </div>
              <div className="text">
                <div className="title">
                  API Guide <i className="far fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="icon-box flat">
              <div className="icon">
                <i className="fal fa-comments"></i>
              </div>
              <div className="text">
                <div className="title">
                  Support Line <i className="far fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="icon-box flat">
              <div className="icon">
                <i className="fal fa-phone-volume"></i>
              </div>
              <div className="text">
                <div className="title">
                  Live Chat <i className="far fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="icon-box flat">
              <div className="icon">
                <i className="fal fa-book-spells"></i>
              </div>
              <div className="text">
                <div className="title">
                  Documentation <i className="far fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-text">
            <a href="#">Ecosystem</a>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-text">
            <a href="#">Community</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Page;
