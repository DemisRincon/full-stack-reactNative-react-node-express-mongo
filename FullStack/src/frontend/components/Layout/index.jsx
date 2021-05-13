import LeftNav from "./LeftNav";
import React from "react";
import TopNav from "./TopNav";
import styles from "./styles.module.scss";

const Layout = ({ children,noLeftNav }) => {
  return (
    <div className={styles.MainContainerLayout}>
      <TopNav />
      <div className={styles.BodyLayout}>
        {!noLeftNav&&<LeftNav />}
        <div className={styles.PageContainer}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
