import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GradientH1 } from "../GradientText";
import { Modal } from "../Modal";
import { Overlay } from "../MainOverlay";
import { FaTwitter, FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import {
  ContactWrapper,
  ContactTextSection,
  ContactMainSection,
  ContactFormWrapper,
  ContactForm,
  FormGroup,
  NameInput,
  EmailInput,
  TextArea,
  ContactSubmitButton,
  FormLabelFloating,
} from "./styles";

export function Contact() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "feelings.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            width: 80
            quality: 50
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `);
  const [show, setShow] = useState(false);
  const [content, setContent] = useState({
    title: `Message Sent!`,
    body: `Really feeling the love! Thank you for reaching out! I'll be in touch soon.`,
    type: "dismiss",
    icon: data.file.childImageSharp.gatsbyImageData,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formData;
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleDismiss = () => {
    setShow(false);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setContent({ ...content, title: `Thank you ${name}!` });
    fetch("/", {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: encode({ "form-name": "new-portfolio-contact", ...formData }),
    })
      .then(() => {
        setShow(true);
        setFormData({ name: "", email: "", message: "" });
        return console.log("Success!");
      })
      .catch(error => {
        console.log("error tripped");
        return alert(
          `Whoops - something unexpected happened...please try again later`
        );
      });
  };
  return (
    <ContactWrapper id="contact">
      <ContactTextSection>
        <GradientH1 font="'Monoton', cursive" color="#fff, #00de53">
          Contact Me <FaEnvelope />
        </GradientH1>
        <ContactMainSection>
          <div>
            <h3>Find me on social</h3>
            <a href="https://twitter.com/goloisaninja">
              <FaTwitter />
            </a>
            <a href="https://github.com/goloisaninja">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/jonmcollins/">
              <FaLinkedinIn />
            </a>
          </div>
          <ContactFormWrapper>
            <ContactForm
              name="new-portfolio-contact"
              id="contact-form"
              method="POST"
              data-netlify="true"
              onSubmit={e => handleSubmit(e)}
            >
              <input
                type="hidden"
                name="new-portfolio-contact"
                value="contact"
              />
              <FormGroup>
                <NameInput
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={e => onChange(e)}
                  required
                />
                <FormLabelFloating htmlFor="name">your name</FormLabelFloating>
              </FormGroup>
              <FormGroup>
                <EmailInput
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={e => onChange(e)}
                  required
                />
                <FormLabelFloating htmlFor="email">
                  your email
                </FormLabelFloating>
              </FormGroup>
              <FormGroup>
                <TextArea
                  cols="30"
                  rows="10"
                  id="message"
                  name="message"
                  value={message}
                  onChange={e => onChange(e)}
                  required
                ></TextArea>
                <FormLabelFloating htmlFor="message">
                  message body
                </FormLabelFloating>
              </FormGroup>
              <ContactSubmitButton type="submit">submit</ContactSubmitButton>
            </ContactForm>
          </ContactFormWrapper>
        </ContactMainSection>
        <Overlay></Overlay>
      </ContactTextSection>
      <Modal show={show} handleDismiss={handleDismiss} content={content} />
    </ContactWrapper>
  );
}