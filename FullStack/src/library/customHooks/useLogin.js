import { isValidEmail, isValidPassword } from "../methods";
import { useEffect, useState } from "react";

import { useInput } from "./useInput";

export const useLogin = (doLogin) => {
  const [propsEmail] = useInput("");
  const [propsPassword] = useInput("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (propsEmail.value && !isValidEmail(propsEmail.value)) {
      return setErrors({
        ...errors,
        email: "An valid email should be like example@exa.com",
      });
    } else {
      return setErrors({
        ...errors,
        email: "",
      });
    }
  }, [propsEmail.value]);

  useEffect(() => {
    if (propsPassword.value && !isValidPassword(propsPassword.value)) {
      return setErrors({
        ...errors,
        password:
          "A valid password should have minimum eight characters, at least one letter and one number",
      });
    } else {
      return setErrors({
        ...errors,
        password: "",
      });
    }
  }, [propsPassword.value]);

  const submit = (e) => {
    e.preventDefault();
    if (errors.email || errors.password) {
      return;
    }
    if (!propsEmail.value || !propsPassword.value) {
      return setErrors({
        email: !propsEmail.value ? "You should provide an email" : errors.email,
        password: !propsEmail.value
          ? "You should provide an email"
          : errors.password,
      });
    }
    doLogin({
      email: propsEmail.value,
      password: propsPassword.value,
    });
  };
  return [propsEmail, propsPassword, errors, submit];
};
