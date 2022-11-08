import * as Yup from "yup";

const Validations = Yup.object().shape({
  Text: Yup.string().required("Text is a required field"),
});

export default Validations;
