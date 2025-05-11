import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { TextField, Button } from "@mui/material";
import Result from "./ContactResult";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("manoovqe");
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const hasError = (field: string): boolean => {
    return Array.isArray(state.errors)
      ? state.errors.some((e) => e.field === field)
      : false;
  };
  
  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const isCaptchaValid = captchaValue !== null;

  if (state.succeeded) {
    return <Result />;
  }

  return (
    <form onSubmit={handleSubmit} className="w-[330px] md:w-[660px]">
      <TextField
        id="email"
        label="Email Address"
        type="email"
        name="email"
        required
        fullWidth
        variant="outlined"
        margin="normal"
        placeholder="your@email.com"
        error={hasError("email")}
        helperText={
          hasError("email") && (
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          )
        }
        sx={{
          "& .MuiInputLabel-asterisk": {
            display: "none",
          },
         "& .MuiInputBase-input": {
            fontFamily: "Poppins, sans-serif",
          },
          "& .MuiInputLabel-root": {
            color: "black",
            fontFamily: "Poppins, sans-serif",
          },
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": { borderColor: "black" },
            "&.Mui-focused fieldset": { borderColor: "black" },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "black",
          },
        }}
      />

      <TextField
        id="message"
        label="Message"
        name="message"
        required
        multiline
        rows={4}
        fullWidth
        variant="outlined"
        margin="normal"
        placeholder="Write your message here..."
        error={hasError("message")}
        helperText={
          hasError("message") && (
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          )
        }
        sx={{
          "& .MuiInputLabel-asterisk": {
            display: "none",
          },
          "& .MuiInputBase-input": {
            fontFamily: "Poppins, sans-serif",
          },
          "& .MuiInputLabel-root": {
            color: "black",
            fontFamily: "Poppins, sans-serif",
          },
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": { borderColor: "black" },
            "&.Mui-focused fieldset": { borderColor: "black" },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "black",
          },
        }}
      />

      <div className="flex items-center justify-center w-full mt-8 mb-8 md:mt-8 md:mb-8 text-white captcha-wrapper">
        <HCaptcha
          sitekey={import.meta.env.VITE_HCAPTCHA_SITEKEY}
          onVerify={handleCaptchaChange}
          theme={"dark"}
        />
      </div>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={state.submitting || !isCaptchaValid}
        sx={{
          mt: 2,
          backgroundColor: "#171721",
          color: "white",
          "&:hover": {
            cursor: "pointer",
            opacity: 0.9,
          },
        }}
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
