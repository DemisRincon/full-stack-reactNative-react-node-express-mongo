import { Icon } from "../..";
import React from "react";
import { superAdmin as menu } from "./menu.json";
import { redirectTo } from "lib/methods";
import styles from "./styles.module.scss";

const LeftNav = () => {
  return (
    <div className={styles.MainLeftNav}>
      {menu.map(({ icon, url, name }) => {
        return (
          <Icon
            key={name}
            style={{ color: "#777" }}
            onClick={() => redirectTo(url)}
            icon={icon}
            name={name}
          />
        );
      })}
    </div>
  );
};

export default LeftNav;
