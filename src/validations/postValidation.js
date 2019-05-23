import { ValidationTypes } from "js-object-validation";

export const PostValidations = {
  title: {
    [ ValidationTypes.REQUIRED ]: true,
    [ ValidationTypes.ALPHA_NUMERIC ]: true,
    [ ValidationTypes.MAXLENGTH ]: 50,
  },
  content: {
    [ ValidationTypes.REQUIRED ]: true,
    [ ValidationTypes.MAXLENGTH ]: 250,
  },
  status: {
    [ ValidationTypes.REQUIRED ]: true,
  },
};

export const PostValidationsMessaages = {
  firstName: {
    [ ValidationTypes.REQUIRED ]: "Please enter first name.",
    [ ValidationTypes.ALPHA_NUMERIC ]: "Please input alphanumeric characters only",
    [ ValidationTypes.MAXLENGTH ]: "First Name cannot have more that 50 characters.",
  },
  lastName: {
    [ ValidationTypes.REQUIRED ]: "Please enter last name.",
    [ ValidationTypes.MAXLENGTH ]: "Last Name cannot have more that 250 characters",
  },
  description: {
    [ ValidationTypes.REQUIRED ]: "Please enter description.",
  },
};
