import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import axios from 'axios';

function IndexPage() {

  return (

    <div className={styles.normal}>
      <button className='btn btn-primary' onClick={()=>axios.get('/api/users')}>获取数据</button>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
