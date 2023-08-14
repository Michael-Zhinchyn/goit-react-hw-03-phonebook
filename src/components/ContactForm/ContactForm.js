import React, { Component } from 'react';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

import { StyledForm, SubmitFromBtn, StyledField } from './ContactForm.styled';

const NameSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  number: Yup.string().min(9).max(9).required('Required'),
});

export class ContactForm extends Component {
  handleSubmit = (values, action) => {
    const contact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    this.props.onAddContact(contact);
    action.resetForm();
  };

  render() {
    return (
      <>
        <Formik
          initialValues={{ name: '', number: '' }}
          validationSchema={NameSchema}
          onSubmit={this.handleSubmit}
        >
          {({ isSubmitting }) => (
            <StyledForm>
              Name
              <StyledField type="text" name="name" placeholder="John Doe" />
              <ErrorMessage name="name" />
              Number
              <StyledField type="tel" name="number" placeholder="123-45-67" />
              <ErrorMessage name="number" />
              <SubmitFromBtn type="submit" disabled={isSubmitting}>
                Add Contact
              </SubmitFromBtn>
            </StyledForm>
          )}
        </Formik>
      </>
    );
  }
}
