import { Button, Input } from "components";
import { FaLock, FaUserAlt } from "react-icons/fa";

import React from "react";
import styles from "./styles.module.scss";
import { useLogin } from "lib/customHooks";

const LoginLayou = () => {
  const [propsEmail, propsPassword, errors, submit] = useLogin();
  return (
    <div className={styles.LayoutLogin}>
      <div className={styles.formContainer}>
        <form onSubmit={submit}>
          <div className={styles.Header}>
            <h1>Access </h1>
          </div>
          <div className={styles.InputContainer}>
            <div className={styles.InputSizebox}>
              <Input
                {...propsEmail}
                errorLabel={errors.email}
                id="email"
                type="text"
                placeholder="Email"
              >
                <FaUserAlt style={{ color: "#ccc" }} />
              </Input>
              <Input
                {...propsPassword}
                errorLabel={errors.password}
                id="password"
                type="password"
                placeholder="Password"
              >
                <FaLock style={{ color: "#ccc" }} />
              </Input>
              <Button type="submit" text="Login" />
            </div>
          </div>
        </form>
        <div className={styles.logoContainer}>
          <h4>Welcome back!</h4>
          <img src="/images/finalLogo.png" alt="" />
          <p>Remember, don't share your password to anyone.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginLayou;
