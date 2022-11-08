import React from "react";
import { Formik, Field, Form } from "formik";
import Validations from "./Validations";
import { useTodo } from "../../../Contexts/TodoContext";

function NewTodoForm() {
  const { addTodo } = useTodo();

  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={(values, bag) => {
        console.log(values);

        addTodo(values.text);

        bag.resetForm();
      }}
      Validations={Validations}
    >
      <Form>
        <Field
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          id="text"
          name="text"
        />
      </Form>
    </Formik>
  );
}

export default NewTodoForm;
