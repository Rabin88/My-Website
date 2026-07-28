import { useRef, useState } from "react";
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
  AlertTitle,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { motion } from "framer-motion";
import { sectionHeadingSx } from "./sectionHeading";

const MotionCard = motion.create(Card);

const darkFieldSx = {
  "& .MuiOutlinedInput-root": {
    color: "#EEEEEE",
    "& fieldset": { borderColor: "rgba(198,201,216,0.3)" },
    "&:hover fieldset": { borderColor: "#D65A31" },
    "&.Mui-focused fieldset": { borderColor: "#D65A31" }
  },
  "& .MuiInputLabel-root": { color: "rgba(198,201,216,0.75)" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#D65A31" }
};

const Contact = () => {
  const form = useRef<any>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isIpad = useMediaQuery(theme.breakpoints.between("sm", "md"));

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

    const APP_YOUR_SERVICE_ID = import.meta.env.VITE_YOUR_SERVICE_ID;
    const YOUR_TEMPLATE_ID = import.meta.env.VITE_YOUR_TEMPLATE_ID;
    const YOUR_PUBLIC_KEY = import.meta.env.VITE_YOUR_PUBLIC_KEY;

    if (form.current[0].value === "") {
      setValidateName(true);
    }
    if (form.current[2].value === "") {
      setValidateEmail(true);
    }

    if (!(form.current[0].value === "") && !(form.current[2].value === "")) {
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
            document.getElementById("myform").reset({
              username: "",
              email: "",
              subject: "",
              message: ""
            });
            console.log(result.text);
          },
          (error: any) => {
            setError(true);
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        bgcolor: "#222831",
        paddingLeft: { sx: "10%", md: "13%", lg: "12%" },
        paddingRight: { sx: "10%", md: "13%", lg: "12%" }
      }}
    >
      <Typography sx={sectionHeadingSx}>Contact</Typography>
      <Typography
        sx={{
          marginLeft: 1,
          marginBottom: 2,
          fontFamily: "serif",
          fontSize: 20,
          fontWeight: "200",
          color: "rgba(198,201,216,.75)"
        }}
      >
        Know more about me? Get in touch.
      </Typography>
      <form id="myform" ref={form} onSubmit={handleSubmit}>
        <MotionCard
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          sx={{
            bgcolor: "#393E46",
            border: "1px solid rgba(198,201,216,.15)"
          }}
        >
          <CardContent
            sx={{
              alignItems: { xs: "left", md: "center" },
              padding: { sx: 0, md: 5 },
              display: "flex",
              flexDirection: "column"
            }}
          >
            {submit && error && (
              <Alert
                sx={{ width: isMobile ? "91%" : isIpad ? "96%" : "48%" }}
                severity="error"
              >
                <AlertTitle>Error</AlertTitle>
                Oops! Something went wrong. Please try again.
              </Alert>
            )}
            <TextField
              sx={{ minWidth: { sx: "100%", md: "50%" }, my: 1.5, ...darkFieldSx }}
              id="username"
              name="username"
              type="text"
              label="Your Name *"
              variant="outlined"
              onChange={() => setValidateName(false)}
            />
            {validateName && (
              <Alert
                sx={{ width: isMobile ? "91%" : isIpad ? "96%" : "48%" }}
                severity="error"
              >
                Please Enter Your Name !
              </Alert>
            )}
            <TextField
              sx={{ minWidth: { sx: "100%", md: "50%" }, my: 1.5, ...darkFieldSx }}
              id="email"
              name="email"
              type="email"
              label="Your Email *"
              variant="outlined"
              onChange={() => setValidateEmail(false)}
            />
            {validateEmail && (
              <Alert
                sx={{ width: isMobile ? "91%" : isIpad ? "96%" : "48%" }}
                severity="error"
              >
                Please Enter Your Email !
              </Alert>
            )}
            <TextField
              sx={{ minWidth: { sx: "100%", md: "50%" }, my: 1.5, ...darkFieldSx }}
              id="subject"
              name="subject"
              type="text"
              label="Subject"
              variant="outlined"
            />
            <TextField
              sx={{ minWidth: { sx: "100%", md: "50%" }, my: 1.5, ...darkFieldSx }}
              multiline
              rows={5}
              id="message"
              name="message"
              type="text"
              placeholder="Your Message ..."
              label="Message"
            />
            <Button
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              sx={{
                my: 2,
                bgcolor: "#D65A31",
                px: 5,
                borderRadius: 5,
                "&:hover": { bgcolor: "#D65A31" }
              }}
              size="large"
              variant="contained"
              type="submit"
            >
              Send Message
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
        </MotionCard>
      </form>
      <Box sx={{ minHeight: 50 }}></Box>
    </Box>
  );
};

export { Contact };
