import styles from './index.css';
import Link from 'umi/link';
// import {Link} from 'umi'; //这样引用也可以

export default function() {
  return (
    <div className={styles.normal}>
      {/* <div className={styles.welcome} /> */}
      <Link to="/user">跳转到用户页面</Link>
      <br/>
      <Link to="/user/五帝">五帝</Link>
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
      </ul>
    </div>
  );
}
