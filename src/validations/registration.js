import { ValidationTypes } from "js-object-validation";

export const RegisterValidations = {
  username: {
    [ ValidationTypes.REQUIRED ]: true,
    [ ValidationTypes.ALPHA_NUMERIC ]: true,
    [ ValidationTypes.MINLENGTH ]: 3,
    [ ValidationTypes.MAXLENGTH ]: 8,
  },
  email: {
    [ ValidationTypes.REQUIRED ]: true,
    [ ValidationTypes.EMAIL ]: true,
    [ ValidationTypes.MAXLENGTH ]: 50,
  },
  password: {
    [ ValidationTypes.REQUIRED ]: true,
    [ ValidationTypes.MINLENGTH ]: 8,
    [ ValidationTypes.MAXLENGTH ]:10,
  },
  first_name: {
    [ ValidationTypes.REQUIRED ]: true,
    [ ValidationTypes.MINLENGTH ]: 3,
    [ ValidationTypes.MAXLENGTH ]:20,
  },
  last_name: {
    [ ValidationTypes.REQUIRED ]: true,
    [ ValidationTypes.MINLENGTH ]: 3,
    [ ValidationTypes.MAXLENGTH ]:20,
  },
};

export const RegisterValidationsMessaages = {
  username: {
    [ ValidationTypes.REQUIRED ]: "Please enter user name.",
    [ ValidationTypes.ALPHA_NUMERIC ]: "Please input alphanumeric characters only",
    [ ValidationTypes.MINLENGTH ]: "Please enter atleast 3 charecters.",
    [ ValidationTypes.MAXLENGTH ]: "User Name cannot have more that 8 characters.",
  },
  email: {
    [ ValidationTypes.REQUIRED ]: "Please enter email.",
    [ ValidationTypes.EMAIL ]: "Please enter Email.",
    [ ValidationTypes.MAXLENGTH ]: "Email cannot have more that 50 characters.",
  },
  password: {
    [ ValidationTypes.REQUIRED ]: "Please enter password.",
    [ ValidationTypes.MINLENGTH ]: "Please enter atleast 8 charecters.",
    [ ValidationTypes.MAXLENGTH ]: "User Name cannot have more that 10 characters.",
  },
  first_name: {
    [ ValidationTypes.REQUIRED ]: "Please enter first name.",
    [ ValidationTypes.MINLENGTH ]: "Please enter atleast 3 charecters.",
    [ ValidationTypes.MAXLENGTH ]: "First Name cannot have more that 20 characters.",
  },
  last_name: {
    [ ValidationTypes.REQUIRED ]: "Please enter last name.",
    [ ValidationTypes.MINLENGTH ]: "Please enter atleast 8 charecters.",
    [ ValidationTypes.MAXLENGTH ]: "User Name cannot have more that 20 characters.",
  },
};
