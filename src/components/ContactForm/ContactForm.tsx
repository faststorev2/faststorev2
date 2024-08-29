import { useCallback, useState } from "react";
import { gql } from "@faststore/core/api";
import { useLazyQuery } from "../../hook/useLazyQuery";

import {
  InputField as UIInputField,
  Button as UIButton,
  TextArea as UITextArea,
} from "@faststore/ui";

import styles from "./contant-form.module.scss";

export const mutation = gql(`
          mutation SubmitContactForm($data: ContactFormInput!) {
            submitContactForm(input: $data) {
              message
            }
          }
        `);

export const ContactForm = () => {
  const [submitContactForm, { data, error }] = useLazyQuery(mutation, {
    data: { name: "", email: "", subject: "", message: "" },
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formValues = {
        name,
        email,
        subject,
        message,
      };

      submitContactForm({ data: formValues });

      if (error) {
        console.error(error);
      }

      if (data) {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    },
    [submitContactForm]
  );

  return (
    <section className={styles.contactForm}>
      <div>
        <h2>Contact Us</h2>
        <p>
          Need to get in touch with us? Please fill out the form, we'll get in
          touch with you soon.
        </p>
      </div>
      <form onSubmit={onSubmit}>
        <UIInputField
          id="name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <UIInputField
          id="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <UIInputField
          id="subject"
          label="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <UITextArea
          id="message"
          placeholder="Write here your message."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <UIButton type="submit" variant="primary">
          Send
        </UIButton>
      </form>
    </section>
  );
};

export default ContactForm;