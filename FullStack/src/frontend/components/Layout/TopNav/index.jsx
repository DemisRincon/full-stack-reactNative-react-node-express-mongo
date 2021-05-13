import Icon from "../../Icon";
import React from "react";
import { redirectTo } from "lib/methods";
import styles from "./styles.module.scss";

const TopNav = () => {
  return (
    <div className={styles.MainTopNav}>
      <div onClick={() => redirectTo()} className={styles.LogoContainer}>
        <img src="/images/logo.png" alt="" />
      </div>
      <div className={styles.UserContainer}>
        <div className={styles.UsericonContainer}>
          <Icon noAnimation icon={["fas", "user"]} name="Demis" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
