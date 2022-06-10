import React, { useState, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FaArrowRight } from "react-icons/fa";
import { Modal } from "../Modal";
import { FaGithubAlt, FaDrawPolygon } from "react-icons/fa";
import { ImReddit } from "react-icons/im";
import { SiTwitter, SiLinkedin } from "react-icons/si";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Offset,
  ContactWrapper,
  ContactIntro,
  RedSpan,
  ContactIconWrapper,
  ContactIconCard,
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
  let recaptchaInstance = useRef();
  const siteKey = process.env.GATSBY_RECAPTCHA_SITE_KEY;
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
  const errorFormModal = (tStr, bStr) => {
    setContent({ ...content, title: tStr, body: bStr });
    setShow(true);
  };
  const checkInputs = e => {
    e.preventDefault();
    console.log("check inputs is called");
    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    const title = "Oops...something is wrong...";
    const emptyBody = "Please fill out all fields of the form!";
    const badEmail = "Hmm...email is sus...try again...";
    if (!name) {
      errorFormModal(title, emptyBody);
      return;
    }
    console.log("passed name");
    if (!regex.test(email)) {
      errorFormModal(title, badEmail);
      return;
    }
    console.log("passed email");
    if (!message) {
      errorFormModal(title, emptyBody);
      return;
    }
    console.log("passed message");
    console.log("executing captcha");
    //executeCaptcha();
    handleSubmit();
  };
  // const executeCaptcha = () => {
  //   recaptchaInstance.current.execute();
  //   console.log("called captcha execute");
  // };

  // const verifyCallback = response => {
  //   console.log(response);
  //   console.log("verified captcha...");
  //   handleSubmit();
  // };

  const handleSubmit = async () => {
    try {
      console.log("submit func called...");
      const token = await recaptchaInstance.current.executeAsync();
      console.log(token);
      setContent({
        ...content,
        title: `Thank you ${name}!`,
        body: `Really feeling the love! Thank you for reaching out! I'll be in touch soon.`,
      });
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
    } catch (error) {
      console.error(error);
      setContent({
        ...content,
        title: "Server issues...",
        body: "Sorry! Please try submitting your details later.",
      });
      setShow(true);
    }
  };
  return (
    <ContactWrapper id="contact">
      <Offset></Offset>
      <ContactIntro>
        <h3>
          <RedSpan>{`> `}</RedSpan>everyone loves a contact form
        </h3>
        <span role="img" aria-label="wave emoji">
          👋🏻
        </span>
        <h5>
          {`I'm just going to say it. I like you. We should keep in touch. There
        are lots of different ways to connect with me, the contact form below, 
        Twitter, LinkedIn, murder mystery weekends, and long walks on the beach. 
        But yeah, the contact form and social media links are probably the easiest! Thank
        you for visiting and come back soon! 
        `}
        </h5>
        <h5>{`I don't know how to put this but I'm kind of a big deal.`}</h5>
      </ContactIntro>
      <ContactIconWrapper>
        <ContactIconCard>
          <a
            aria-label="Find Jon on Twitter"
            href="https://twitter.com/goloisaninja"
            alt="A link to Jon's Twitter Page"
          >
            <SiTwitter />
          </a>
          <p>TWITTER</p>
        </ContactIconCard>
        <ContactIconCard>
          <a
            aria-label="Visit Jon's LinkedIn Profile"
            href="https://www.linkedin.com/in/jonmcollins/"
            alt="A Link to Jon's LinkedIn Profile"
          >
            <SiLinkedin />
          </a>
          <p>LINKEDIN</p>
        </ContactIconCard>
        <ContactIconCard>
          <a
            aria-label="Find Jon on Polywork"
            href="https://www.polywork.com/jcollins"
            alt="A Link to Jon's PolyWork"
          >
            <FaDrawPolygon />
          </a>
          <p>POLYWORK</p>
        </ContactIconCard>
        <ContactIconCard>
          <a
            aria-label="Browse Jon's Profile on Github and see Project Repositories"
            href="https://github.com/goloisaninja"
            alt="A link to Jon's Github Profile"
          >
            <FaGithubAlt />
          </a>
          <p>GITHUB</p>
        </ContactIconCard>
        <ContactIconCard>
          <a
            aria-label="Find Jon on Reddit and drop some memes"
            href="https://reddit.com/user/goloisaninja"
            alt="A link to Jon's Reddit Profile"
          >
            <ImReddit />
          </a>
          <p>REDDIT</p>
        </ContactIconCard>
      </ContactIconWrapper>
      <ContactFormWrapper>
        <ContactForm
          name="new-portfolio-contact"
          id="contact-form"
          data-netlify="true"
          method="POST"
        >
          <input type="hidden" name="new-portfolio-contact" value="contact" />
          <FormGroup>
            <NameInput
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={e => onChange(e)}
              aria-required
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
              aria-required
              required
            />
            <FormLabelFloating htmlFor="email">your email</FormLabelFloating>
          </FormGroup>
          <FormGroup>
            <TextArea
              cols="30"
              rows="10"
              id="message"
              name="message"
              value={message}
              onChange={e => onChange(e)}
              aria-required
              required
            ></TextArea>
            <FormLabelFloating htmlFor="message">
              message body
            </FormLabelFloating>
          </FormGroup>
          <div>
            <ContactSubmitButton
              onClick={e => checkInputs(e)}
              aria-label="contact form submit button to send your message to Jon"
            >
              <FaArrowRight />
            </ContactSubmitButton>
            <p>send your message!</p>
          </div>
          <ReCAPTCHA
            ref={recaptchaInstance}
            size="invisible"
            sitekey={siteKey}
            theme="dark"
            badge="inline"
          />
        </ContactForm>
      </ContactFormWrapper>
      <Modal show={show} handleDismiss={handleDismiss} content={content} />
    </ContactWrapper>
  );
}
