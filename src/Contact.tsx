import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
  Alert,
  Snackbar,
  AlertTitle
} from "@mui/material";
import dotenv from "dotenv";

// Form Validation
import { Form, Formik, Field } from "formik";
// import { TextField } from "formik-mui";
import * as Yup from "yup";

const Contact = () => {
  const form = useRef<any>();

  const [validateName, setValidateName] = useState(false);
  const [validateEmail, setValidateEmail] = useState(false);
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Check Error Message If Service ID is wrong
    // const APP_YOUR_SERVICE_ID = "asdasd";
    const APP_YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID;
    const YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
    const YOUR_PUBLIC_KEY = process.env.REACT_APP_YOUR_PUBLIC_KEY;

    if (form.current[0].value === "") {
      setValidateName(true);
    }
    if (form.current[2].value === "") {
      setValidateEmail(true);
    }

    if (!(form.current[0].value === "") && !(form.current[2].value === "")) {
      console.log("sent");
      setSubmit(true);
      emailjs
        .sendForm(
          `${APP_YOUR_SERVICE_ID}`,
          `${YOUR_TEMPLATE_ID}`,
          form.current,
          `${YOUR_PUBLIC_KEY}`
        )
        .then(
          (result: any) => {
            setSuccess(true);
            setOpen(true);
            // @ts-ignore
            document.getElementById("myform").reset();
            console.log(result.text);
            console.log("message sent successfully.");
          },
          (error: any) => {
            setError(true);
            console.log(error.text);
          }
        );
    }
  };

  // const validationSchema = Yup.object({
  //   username: Yup.string().required("Please enter your fullname"),
  //   email: Yup.string().required("Please enter your email")
  // });

  return (
    <Box
      id="contact"
      sx={{
        paddingLeft: "20%",
        paddingRight: "20%",
        bgcolor: "#393E46"
      }}
    >
      <Typography
        sx={{
          fontFamily: "serif",
          fontSize: 65,
          fontWeight: "600",
          color: "#EEEEEE"
        }}
      >
        Contact
      </Typography>
      <Typography
        sx={{
          fontFamily: "serif",
          fontSize: 20,
          fontWeight: "200",
          color: "rgba(198,201,216,.75)"
        }}
      >
        This is a contact section.
      </Typography>
      {/* <Formik
        // ref={form}
        initialValues={{ username: "", email: "", subject: "", message: "" }}
        //It control whether Formik should reset the form if initialValues changes (using deep equality)
        validationSchema={validationSchema}
        //when user click on Next button onSubmit will be triggered.
        onSubmit={handleSubmit}
      >
        {() => (
          <Form ref={form}>
            <Card sx={{ padding: 5, bgcolor: "#393E46", border: "none" }}>
              <CardContent
                sx={{
                  alignItems: "center",
                  padding: 5,
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "rgba(198,201,216,.75)"
                }}
              >
                <Field
                  component={TextField}
                  sx={{ width: "50%", my: 1.5 }}
                  id="username"
                  name="username"
                  label="Your Name"
                  InputLabelProps={{ required: true }}
                />

                <Field
                  component={TextField}
                  sx={{ width: "50%", my: 1.5 }}
                  id="email"
                  name="email"
                  label="Your Email"
                  InputLabelProps={{ required: true }}
                />
                <Field
                  component={TextField}
                  sx={{ width: "50%", my: 1.5 }}
                  id="subject"
                  name="subject"
                  label="Subject"
                />
                <Field
                  component={TextField}
                  sx={{ width: "50%", my: 1.5 }}
                  multiline
                  rows={5}
                  id="message"
                  name="message"
                  placeholder="Your Message ..."
                  label="Message"
                />
                <Button
                  sx={{
                    my: 2,
                    bgcolor: "#D65A31",
                    mx: 10
                  }}
                  size="large"
                  variant="contained"
                  type="submit"
                >
                  Submit
                </Button>
              </CardContent>
            </Card>
          </Form>
        )}
      </Formik> */}
      <form id="myform" ref={form} onSubmit={handleSubmit}>
        <Card>
          <CardContent
            sx={{
              alignItems: "center",
              padding: 5,
              display: "flex",
              flexDirection: "column",
              bgcolor: "rgba(198,201,216,.75)"
            }}
          >
            {submit && error && (
              <Alert sx={{ width: "48%" }} severity="error">
                <AlertTitle>Error</AlertTitle>
                Oops! Something is wrong. Please try again.
              </Alert>
            )}
            <TextField
              sx={{ width: "50%", my: 1.5 }}
              id="username"
              name="username"
              type="text"
              label="Your Name*"
              variant="outlined"
              onChange={() => setValidateName(false)}
            />
            {validateName && (
              <Alert sx={{ width: "48%" }} severity="error">
                Please Enter Your Name!
              </Alert>
            )}
            <TextField
              sx={{ width: "50%", my: 1.5 }}
              id="email"
              name="email"
              type="text"
              label="Your Email*"
              variant="outlined"
              onChange={() => setValidateEmail(false)}
            />
            {validateEmail && (
              <Alert sx={{ width: "48%" }} severity="error">
                Please Enter Your Email!
              </Alert>
            )}
            <TextField
              sx={{ width: "50%", my: 1.5 }}
              id="subject"
              name="subject"
              type="text"
              label="Subject"
              variant="outlined"
            />
            <TextField
              sx={{ width: "50%", my: 1.5 }}
              multiline
              rows={5}
              id="message"
              name="message"
              type="text"
              placeholder="Your Message ..."
              label="Message"
            />
            <Button
              sx={{
                my: 2,
                bgcolor: "#D65A31",
                // borderRadius: 5,
                mx: 10
              }}
              size="large"
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
            {success && (
              <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  Message successfully sent!
                </Alert>
              </Snackbar>
            )}
          </CardContent>
        </Card>
      </form>
      <Box sx={{ minHeight: 50 }}></Box>
    </Box>
  );
};

export { Contact };
