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
            <a
              target="_blank"
              href="https://way-networks-organization.gitbook.io/way-network/"
            >
              Developers
            </a>
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
