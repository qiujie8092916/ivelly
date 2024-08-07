import clsx from 'clsx';

import React from 'react';
import Github from './components/Github';
import styles from './index.less';

const HomePage: React.FC = () => {
  return (
    <>
      <header>
        <h1 className={clsx(styles.header, styles.center, styles.mt15)}>
          Hello World!!!
        </h1>
      </header>

      <div className={styles.container}>
        <a className={clsx(styles.mlr20, styles['no-decoration'])} href="/resume">
          Resume（Invalid）
        </a>
        {/* <a className={clsx(styles.mlr20, styles['no-decoration'])} href="/axure">
          Axure
        </a> */}
        <a
          className={clsx(styles.mlr20, styles['no-decoration'])}
          href="//frps.ivelly.com"
        >
          frps
        </a>
        <a
          className={clsx(styles.mlr20, styles['no-decoration'])}
          href="//frpc.ivelly.com"
        >
          frpc gateway
        </a>
        <a
          className={clsx(styles.mlr20, styles['no-decoration'])}
          href="//openwrt.ivelly.com"
        >
          openwrt gateway
        </a>
        <a
          className={clsx(styles.mlr20, styles['no-decoration'])}
          href="//clash.ivelly.com"
        >
          clash gateway
        </a>
      </div>

      <footer className={clsx(styles.center, styles.footer)}>
        <a href="https://beian.miit.gov.cn">蜀ICP备20000809号-1</a>
      </footer>

      <Github />
    </>
  );
};

export default HomePage;
