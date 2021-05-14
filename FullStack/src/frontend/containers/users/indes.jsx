import { Layout, OptionPanel } from "../../components";

import React from "react";
import styles from "./styles.module.scss";

const Users = () => {
  return (
    <Layout>
      <div className={styles.UsersMenu}>
        <div className={styles.MenuOption}>
            
            <OptionPanel/>
        </div>
        <div className={styles.MenuOption}>hello</div>
        <div className={styles.MenuOption}>hello</div>
      </div>
    </Layout>
  );
};

export default Users;
