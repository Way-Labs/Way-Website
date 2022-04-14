import { useEffect, useRef } from 'react';
import Slinky from '../Slinky';
import World from './world';
import CardHover from '../CardHover';
import Button from '../Button';
import Title from '../Title';
import styles from './index.less';
import { ReactComponent as LogoSVG } from '/public/logo.svg';

const Logo = () => {
  return (
    <div className="hayek-logo">
      <LogoSVG width="115" />
    </div>
  );
};
const GoStarted = () => {
  return (
    <a target="_blank" href="https://app.hayek.tech/">
      <div className="gostarted">GET STARTED</div>
    </a>
  );
};
const Banner = () => {
  // useEffect(() => {
  //   const world = new World({
  //     canvas: document.querySelector('canvas.webgl'),
  //     cameraPosition: { x: 0, y: 0, z: 4.5 },
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   });

  //   world.loop();
  // }, []);

  // const startBtnRef = useRef<HTMLButtonElement>(undefined!);
  // useEffect(() => {
  //   startBtnRef.current.click();
  // }, []);

  return (
    <div className={styles.banner}>
      <div className="container">
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="trigger"></div>
        <div className="monitor">
          <div className="camera o-x">
            <div className="camera o-y">
              <div className="camera o-z">
                <div className="vr">
                  <div className="vr_layer">
                    <div className="vr_layer_item"></div>
                  </div>
                  <div className="vr_layer">
                    <div className="vr_layer_item"></div>
                  </div>
                  <div className="vr_layer">
                    <div className="vr_layer_item"></div>
                  </div>
                  <div className="vr_layer">
                    <div className="vr_layer_item"></div>
                  </div>
                  <div className="vr_layer">
                    <div className="vr_layer_item"></div>
                  </div>
                  <div className="vr_layer">
                    <div className="vr_layer_item"></div>
                  </div>
                  <div className="vr_layer">
                    <div className="vr_layer_item"></div>
                  </div>
                  <div className="vr_layer">
                    <div className="vr_layer_item"></div>
                  </div>
                  <div className="vr_layer">
                    <div className="vr_layer_item"></div>
                  </div>
                  <div className="vr_layer">
                    <div className="vr_layer_item"></div>
                  </div>
                  <div className="vr_layer">
                    <div className="vr_layer_item"></div>
                  </div>
                  <div className="vr_layer">
                    <div className="vr_layer_item"></div>
                  </div>
                  <div className="vr_layer">
                    <div className="vr_layer_item"></div>
                  </div>
                  <div className="vr_layer">
                    <div className="vr_layer_item"></div>
                  </div>
                  <div className="vr_layer">
                    <div className="vr_layer_item"></div>
                  </div>
                  <div className="vr_layer">
                    <div className="vr_layer_item"></div>
                  </div>
                  <div className="vr_layer">
                    <div className="vr_layer_item"></div>
                  </div>
                  <div className="vr_layer">
                    <div className="vr_layer_item"></div>
                  </div>
                  <div className="vr_layer">
                    <div className="vr_layer_item"></div>
                  </div>
                  <div className="vr_layer">
                    <div className="vr_layer_item"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
