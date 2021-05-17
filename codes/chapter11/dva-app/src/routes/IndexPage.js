import React from "react";
import { connect } from "dva";
import styles from "./IndexPage.css";
import { Button } from "antd";

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          To get started, edit <code>src/index.js</code> and save to reload.
        </li>
        <li>
          <a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">
            Getting Started
          </a>
        </li>
      </ul>
      <Button type="primary">上市公司</Button>
      <Button>私营企业</Button>
      <Button type="dashed">外包公司</Button>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
