import { ValidationTypes } from "js-object-validation";

export const LoginValidations = {
  email: {
    [ ValidationTypes.REQUIRED ]: true,
    [ ValidationTypes.MINLENGTH ]: 2,
    [ ValidationTypes.MAXLENGTH ]: 8,
  },
  password: {
    [ ValidationTypes.REQUIRED ]: true,
    [ ValidationTypes.MAXLENGTH ]: 20,
    [ ValidationTypes.MINLENGTH ]: 6,
  },
};

export const LoginValidationsMessaages = {
  email: {
    [ ValidationTypes.REQUIRED ]: "Please enter user name.",
    [ ValidationTypes.MINLENGTH ]: "Please enter atleast 5 characters",
    [ ValidationTypes.MAXLENGTH ]: "User Name cannot have more that 8 characters.",
  },
  password: {
    [ ValidationTypes.REQUIRED ]: "Please enter password.",
    [ ValidationTypes.MAXLENGTH ]: "Password cannot have more that 20 characters",
    [ ValidationTypes.MINLENGTH ]: "Please enter atleast 6 characters.",
  },
};
