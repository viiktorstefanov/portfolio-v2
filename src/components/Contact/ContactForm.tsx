import React, { useState } from "react";
import { useForm, ValidationError as FormspreeValidationErrorComponent } from "@formspree/react";
import { TextField, Button } from "@mui/material";
import Result from "./ContactResult";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const EMAIL_REGEX = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

// eslint-disable-next-line no-control-regex
const FORBIDDEN_MESSAGE_CHARS_REGEX = /[<>&"'`]|[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/;

type CustomErrors = {
  email?: string;   
  message?: string;
  captcha?: string;
};

interface ContactFormState {
  email: string;
  message: string;
  captchaValue: string | null;
  customErrors: CustomErrors;
};

type LikelyFormspreeIndividualError ={
  code?: string;
  field?: string;
  message?: string;
};

function isLikelyIndividualError(obj: unknown): obj is LikelyFormspreeIndividualError {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }
  return ('message' in obj || 'field' in obj || 'code' in obj);
};

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;
const HCAPTCHA_SITE_KEY = import.meta.env.VITE_HCAPTCHA_SITE_KEY;

const commonTextFieldStyles = {
  "& .MuiInputLabel-asterisk": { display: "none" },
  "& .MuiInputBase-input": { fontFamily: "Poppins, sans-serif" },
  "& .MuiInputLabel-root": { color: "black", fontFamily: "Poppins, sans-serif" },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": { borderColor: "black" },
    "&.Mui-focused fieldset": { borderColor: "black" },
  },
  "& .MuiInputLabel-root.Mui-focused": { color: "black" },
};

const ContactForm: React.FC = () => {
  const [formspreeState, formspreeHandleSubmit] = useForm(FORMSPREE_ID);
  
  const [componentState, setComponentState] = useState<ContactFormState>({
    email: "",
    message: "",
    captchaValue: null,
    customErrors: {},
  });

  const getNormalizedErrorArray = (): LikelyFormspreeIndividualError[] => {
    const errors = formspreeState.errors;
    if (!errors) return [];
    if (Array.isArray(errors)) {
      return errors.filter(isLikelyIndividualError);
    }
    if (isLikelyIndividualError(errors)) {
      return [errors];
    }
    return [];
  };

  const hasFormspreeError = (field: string): boolean => {
    const errorArray = getNormalizedErrorArray();
    return errorArray.some(
      (e) => e.field === field || (e.field === "" && e.message && e.message.toLowerCase().includes(field.toLowerCase()))
    );
  };

  const validateEmail = (emailValue: string): string | undefined => {
    const trimmedEmail = emailValue.trim();
    if (!trimmedEmail) {
      return "Please enter your email address.";
    }
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return "Please enter a valid email address.";
    }
    const parts = trimmedEmail.split('@');
    const domainPart = parts[1];
    if (domainPart) {
      if (domainPart.startsWith('-') || domainPart.endsWith('-')) {
        return "Email domain cannot start or end with a hyphen.";
      }
      if (domainPart.includes('..')) {
        return "Email domain cannot contain consecutive dots.";
      }
    }
    return undefined;
  };

  const validateMessage = (messageValue: string): string | undefined => {
    const trimmedMessage = messageValue.trim();
    if (!trimmedMessage) {
      return "Please enter your message.";
    }
    if (trimmedMessage.length < 10) {
      return "Message must be at least 10 characters long.";
    }
    if (trimmedMessage.length > 5000) {
      return "Message cannot exceed 5000 characters.";
    }
    if (FORBIDDEN_MESSAGE_CHARS_REGEX.test(messageValue)) {
      const forbiddenMatch = messageValue.match(FORBIDDEN_MESSAGE_CHARS_REGEX);
      const forbiddenChar = forbiddenMatch ? forbiddenMatch[0] : "a forbidden character";
      const charCode = forbiddenChar.charCodeAt(0);
      const displayChar = (charCode < 0x20 || charCode === 0x7F)
        ? `control character (0x${charCode.toString(16).padStart(2, '0')})`
        : `character '${forbiddenChar}'`;
      return `Message contains ${displayChar}, which is not allowed.`;
    }
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: CustomErrors = {};
    
    const emailError = validateEmail(componentState.email);
    if (emailError) {
      newErrors.email = emailError;
    }

    const messageError = validateMessage(componentState.message);
    if (messageError) {
      newErrors.message = messageError;
    }

    if (!componentState.captchaValue) {
        newErrors.captcha = "Please complete the CAPTCHA verification.";
    }

    setComponentState(prev => ({ ...prev, customErrors: newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComponentState(prev => ({ ...prev, email: e.target.value }));
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComponentState(prev => ({ ...prev, message: e.target.value }));
  };

  const handleEmailBlur = () => {
    const emailError = validateEmail(componentState.email);
    setComponentState(prev => ({
      ...prev,
      customErrors: { ...prev.customErrors, email: emailError }
    }));
  };

  const handleMessageBlur = () => {
    const messageError = validateMessage(componentState.message);
    setComponentState(prev => ({
      ...prev,
      customErrors: { ...prev.customErrors, message: messageError }
    }));
  };

  const handleCaptchaChange = (value: string | null) => {
    setComponentState(prev => ({
      ...prev,
      captchaValue: value,
      customErrors: { 
        ...prev.customErrors, 
        captcha: value ? undefined : prev.customErrors.captcha || "Please complete the CAPTCHA verification." 
      },
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formData = new FormData(event.currentTarget);
    formData.set('email', componentState.email.trim());
    formData.set('message', componentState.message.trim());

    await formspreeHandleSubmit(formData);
  };


  if (formspreeState.succeeded) {
    return <Result />;
  }

  const generalFormspreeErrors = getNormalizedErrorArray().filter(
    (e): e is LikelyFormspreeIndividualError & { message: string } =>
      e.message !== undefined && (!e.field || e.code === "FORM_ERROR")
  );

  const hasAnyCustomClientError = Object.values(componentState.customErrors).some(error => !!error);

  return (
    <form onSubmit={handleSubmit} className="w-[330px] md:w-[660px]" noValidate>
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
        value={componentState.email}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        error={!!componentState.customErrors.email || hasFormspreeError("email")}
        helperText={
          componentState.customErrors.email ||
          (hasFormspreeError("email") && (
            <FormspreeValidationErrorComponent
              prefix="Email"
              field="email"
              errors={formspreeState.errors}
            />
          )) || " "
        }
        sx={commonTextFieldStyles}
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
        value={componentState.message}
        onChange={handleMessageChange}
        onBlur={handleMessageBlur}
        error={!!componentState.customErrors.message || hasFormspreeError("message")}
        helperText={
          componentState.customErrors.message ||
          (hasFormspreeError("message") && (
            <FormspreeValidationErrorComponent
              prefix="Message"
              field="message"
              errors={formspreeState.errors}
            />
          )) || " "
        }
        sx={commonTextFieldStyles}
      />

      <div className="flex flex-col items-center justify-center w-full mt-8 mb-4 md:mt-8 md:mb-4 captcha-wrapper">
        <HCaptcha
          sitekey={HCAPTCHA_SITE_KEY}
          onVerify={handleCaptchaChange}
          onExpire={() => handleCaptchaChange(null)}
          onError={() => {
             setComponentState(prev => ({
                ...prev,
                customErrors: { ...prev.customErrors, captcha: "Captcha error. Please try again." }
             }));
          }}
          theme={"dark"}
        />
        {componentState.customErrors.captcha && (
          <p className="mt-2 text-xs text-red-600">{componentState.customErrors.captcha}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={
          formspreeState.submitting ||
          !componentState.captchaValue ||
          hasAnyCustomClientError
        }
        sx={{
          mt: 2,
          mb: 2,
          backgroundColor: "#171721",
          color: "white",
          fontFamily: "Poppins, sans-serif",
          "&:hover": {
            backgroundColor: "#2d2d3a",
            opacity: 1,
          },
        }}
      >
        {formspreeState.submitting ? "Sending..." : "Send Message"}
      </Button>

      {generalFormspreeErrors.length > 0 &&
        generalFormspreeErrors.map((error, index) => (
            <p key={`formError-${index}`} className="text-xs text-red-600 mt-2">
              {error.message}
            </p>
          )
        )}
    </form>
  );
};

export default ContactForm;