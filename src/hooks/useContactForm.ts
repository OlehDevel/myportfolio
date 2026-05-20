import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export const useContactForm = (accessKey: string) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const tempErrors: Partial<Record<keyof FormData, string>> = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      tempErrors.name = "nameRequired";
    }

    if (!formData.email) {
      tempErrors.email = "emailRequired";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "emailInvalid";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "messageRequired";
    } else if (formData.message.trim().length < 5) {
      tempErrors.message = "messageTooShort";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  const resetStatus = () => {
    setStatus("idle");
  };

  const clearForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setStatus("idle");
  };

  return {
    formData,
    errors,
    status,
    handleChange,
    handleSubmit,
    resetStatus,
    clearForm,
  };
};
