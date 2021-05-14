import { Layout, OptionPanel } from "..";

import React from "react";
import styles from "./styles.module.scss";

const InsideMenu = ({ menu }) => {
  
  return (
    <Layout>
      <div className={styles.UsersMenu}>
        {menu.map((item) => (
          <OptionPanel key={item.name} {...item}/>
        ))}
      </div>
    </Layout>
  );
};

export default InsideMenu;
