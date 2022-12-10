import React, { useState, useRef, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FaArrowRight } from "react-icons/fa";
import { Modal } from "../Modal";
import { Spinner } from "../Spinner";
import { FaGithubAlt, FaDrawPolygon } from "react-icons/fa";
import { ImReddit } from "react-icons/im";
import { SiMastodon, SiLinkedin } from "react-icons/si";
import { ContactSectionIntro } from "../../utils/sectionIntros";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import {
  Offset,
  ContactWrapper,
  ContactIntro,
  RedSpan,
  ContactIconWrapper,
  ContactIconCard,
  ContactFormWrapper,
  ContactForm,
  AltFormGroup,
  FormGroup,
  NameInput,
  EmailInput,
  SubjectInput,
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
  const [ip, setIP] = useState("");
  const [show, setShow] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [content, setContent] = useState({
    title: `Message Sent!`,
    body: `Really feeling the love! Thank you for reaching out! I'll be in touch soon.`,
    type: "dismiss",
    icon: data.file.childImageSharp.gatsbyImageData,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    //"g-recaptcha-response": "",
  });
  const baseAPIURL = process.env.GATSBY_CUSTOM_API_BASEURL;
  const getIpData = async () => {
    const res = await axios.get("https://api.ipgeolocation.io/getip");
    setIP(res.data.ip);
  };
  useEffect(() => {
    getIpData();
  }, []);
  const blockedIPs = [
    "46.161.11.83",
    "188.126.94.212",
    "191.96.168.122",
    "190.2.132.155",
    "195.78.54.34",
    "46.161.11.252",
    "138.199.63.46",
    "31.171.152.104",
    "192.40.57.54",
    "191.96.168.55",
  ];
  const { name, email, subject, message } = formData;
  // TODO
  // - remove netlify code if form responses can be successfully handled and sent via aws ses on backend
  // legacy netlify form code -- can be cleaned up in future push if all goes well
  // const encode = data => {
  //   return Object.keys(data)
  //     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  //     .join("&");
  // };
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // const setFormFieldWithRecpatchaResponseFromServer = async res => {
  //   setFormData({ ...formData, "g-recaptcha-response": res });
  // };

  const handleDismiss = () => {
    setShow(false);
  };
  const errorFormModal = (tStr, bStr) => {
    setContent({ ...content, title: tStr, body: bStr });
    setShow(true);
  };
  const checkInputs = e => {
    e.preventDefault();
    const formBtn = document.getElementById("mySubmitBtn");
    const isDisabled = formBtn.getAttribute("aria-disabled") === "true";
    if (isDisabled) {
      return;
    }
    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    const title = "Oops...something is wrong...";
    const emptyBody = "Please fill out all fields of the form!";
    const badEmail = "Hmm...email is sus...try again...";
    if (!name) {
      errorFormModal(title, emptyBody);
      return;
    }
    if (!regex.test(email)) {
      errorFormModal(title, badEmail);
      return;
    }
    if (!message) {
      errorFormModal(title, emptyBody);
      return;
    }
    formBtn.setAttribute("aria-disabled", "true");
    setShowSpinner(true);
    handleSubmit();
  };

  const handleSubmit = async () => {
    const formBtn = document.getElementById("mySubmitBtn");
    try {
      const token = await recaptchaInstance.current.executeAsync();
      const body = { token };
      //const badBody = `03AIIukzhaYGXiM9vqpr9npB8BY2Y-VoQyvAfac8BDOLoD9_rGwjdC2C4rJwZUZ2u1UafjiazBq8Ym9BGPA2xJKQNmjvXuaVYHE5UXJ4pxJw57ix1Ipadw8a5lixFJsEuZNse4-JcTA1hzm2PNnpn4rDFQRFt9-d0NBSiMHiugc52faZ9BxFl9szPEJKe9fav1i7Ckxef7BBljESaofpqsjz9JVwjosLVTZIfq4QaSoj_fkZpxeiQlro6Au_w_4q56_s9PYtqjZ8ZShpbbipv2gNjk-bTWGcFEKJFOigGWuzCX-fqJtrr1OST6HiKdCTMkiUF4fdoUfYkxQ1k4cQhmm7mBbIxkxs-MOU3dFicvTPVxQ5a-fq6uTkvkAmgNcWSv4sBn5WUbgwBHny7OPGYfmlse7vc1tS8AMzcnj55_Fozze7AYvvceiRUlywYYyNY0Fjt6QCEmfeBQAtPBHY0s4OhxFqDTsO4PrEgurxTsu7TcBxk4AS01BMAhnBuIeH_IAd4lWjP9Mm-AzAZqE5ah3DqJaKIiIf-kuw`;
      const response = await axios.post(`${baseAPIURL}/recaptcha`, body);
      //await setFormFieldWithRecpatchaResponseFromServer(token);
      setShowSpinner(false);
      if (response.data.success) {
        setContent({
          ...content,
          title: `Thank you ${name}!`,
          body: `Really feeling the love! Thank you for reaching out! I'll be in touch soon.`,
        });
        // TODO - more legacy netlify code to be removed
        // fetch("/", {
        //   method: "POST",
        //   headers: {
        //     "Content-type": "application/x-www-form-urlencoded",
        //   },
        //   body: encode({ "form-name": "new-portfolio-contact", ...formData }),
        // })
        //   .then(res => {
        //     setShow(true);
        //     setFormData({
        //       name: "",
        //       email: "",
        //       subject: "",
        //       message: "",
        //       //"g-recaptcha-response": "",
        //     });
        //     return console.log(res);
        //   })
        //   .catch(error => {
        //     console.log(error);
        //     setContent({
        //       ...content,
        //       title: "Uh oh...",
        //       body: "Sorry! Please try submitting your details later.",
        //     });
        //     setShow(true);
        //   });
        try {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
          const body = { ...formData };
          let mailResponse = await axios.post(
            `${baseAPIURL}/contact`,
            body,
            config
          );
          if (mailResponse.status === 200) {
            setShow(true);
            setFormData({
              name: "",
              email: "",
              subject: "",
              message: "",
            });
          } else {
            setContent({
              ...content,
              title: "Uh oh...",
              body:
                "Something went wrong - please try and sumbit your message later!",
            });
            setShow(true);
          }
        } catch (error) {
          setContent({
            ...content,
            title: "Uh oh...",
            body: "Sorry! Please try submitting your details later.",
          });
          setShow(true);
        }
      }
    } catch (error) {
      setShowSpinner(false);
      console.error(error);
      setContent({
        ...content,
        title: "Server issues...",
        body: "Sorry! Please try submitting your details later.",
      });
      setShow(true);
    }
    formBtn.setAttribute("aria-disabled", "false");
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
        <ContactSectionIntro />
        <h5>{`I don't know how to put this but I'm kind of a big deal.`}</h5>
      </ContactIntro>
      <ContactIconWrapper>
        <ContactIconCard>
          <a
            aria-label="Find Jon on Mastodon"
            href="https://hachyderm.io/@joncollinsdev"
            alt="A link to Jon's Mastodon Profile"
          >
            <SiMastodon />
          </a>
          <p>MASTODON</p>
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
      {!blockedIPs.some(address => address === ip) && (
        <ContactFormWrapper>
          <ContactForm
            name="new-portfolio-contact"
            id="contact-form"
            //netlify-honeypot="subject"
            //data-netlify="true"
            // data-netlify-recaptcha="true"
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
            <AltFormGroup className="hidden">
              <SubjectInput
                name="subject"
                id="subject"
                tabIndex="-1"
                value={subject}
                onChange={e => onChange(e)}
              />
              <FormLabelFloating htmlFor="subject">subject</FormLabelFloating>
            </AltFormGroup>
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
                id="mySubmitBtn"
                onClick={e => checkInputs(e)}
                aria-label="contact form submit button to send your message to Jon"
                aria-disabled={blockedIPs.some(address => address === ip)}
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
      )}

      <Modal show={show} handleDismiss={handleDismiss} content={content} />
      <Spinner show={showSpinner} />
    </ContactWrapper>
  );
}
