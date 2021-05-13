import { Button, Input } from "components";
import React, { useState } from "react";

import styles from "./styles.module.scss";
import { useLogin } from "lib/customHooks";

const LoginLayou = ({ doLogin }) => {
  const [propsEmail, propsPassword, errors, submit] = useLogin(doLogin);
  const [isPassVisible, setIsPassVisible] = useState(false);

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
                icon={["fas", "user"]}
              />

              <Input
                {...propsPassword}
                errorLabel={errors.password}
                id="password"
                type={isPassVisible ? "text" : "password"}
                placeholder="Password"
                icon={isPassVisible ? ["fas", "eye-slash"] : ["fas", "eye"]}
                onClick={() => setIsPassVisible(!isPassVisible)}
              />

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
