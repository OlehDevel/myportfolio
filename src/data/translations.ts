export const translations = {
  ua: {
    hero: {
      title: "Привіт, я",
      name: "Олег",
      subtitle: "Доступний для нових проектів",
      role: "Frontend Developer",
      description:
        "Створюю сучасні, продуктивні та зручні веб-інтерфейси. Спеціалізуюся на React, TypeScript та архітектурі сучасних додатків.",
      cta: "Зв'язатися",
    },
    skills: {
      title: "Мої навички",
    },
    contact: {
      title: "Зв'язатися зі мною",
      subtitle: "Я завжди відкритий до нових пропозицій та цікавих проектів. Пишіть!",
      name: "Ім'я",
      email: "Email",
      message: "Повідомлення",
      placeholderName: "Ваше ім'я",
      placeholderMessage: "Ваше повідомлення...",
      submit: "Надіслати",
    },
    messageStatus: {
      success: "Дякую! Ваше повідомлення успішно надіслано. Я зв'яжуся з вами найближчим часом.",
      error: "Щось пішло не так. Спробуйте ще раз або напишіть мені в Telegram.",
      sending: "Надсилання...",
    },
    validation: {
      nameRequired: "Поле обов'язкове для заповнення",
      emailRequired: "Введіть ваш email",
      emailInvalid: "Некоректний формат пошти (наприклад, name@domain.com)",
      messageRequired: "Напишіть ваше повідомлення",
      messageTooShort: "Повідомлення занадто коротке (мінімум 5 символів)",
    },
    actions: {
      edit: "Редагувати відправлене",
      sendAnother: "Надіслати інший лист",
    },
    projects: {
      title: "Проекти",
      loading: "Завантаження проектів",
      subtitle: "Модуль портфоліо на стадії збірки.",
    },
  },
  en: {
    hero: {
      title: "Hello, i`m",
      name: "Oleh",
      subtitle: "Available for new projects",
      role: "Frontend Developer",
      description:
        "Building modern, performant, and user-friendly web interfaces. Specializing in React, TypeScript, and modern application architecture.",
      cta: "Contact me",
    },
    skills: {
      title: "My skills",
    },
    contact: {
      title: "Contact Me",
      subtitle: "I am always open to new proposals and interesting projects. Write to me!",
      name: "Name",
      email: "Email",
      message: "Message",
      placeholderName: "Your name",
      placeholderMessage: "Your message...",
      submit: "Send",
    },
    messageStatus: {
      success:
        "Thank you! Your message has been sent successfully. I will get back to you shortly.",
      error: "Something went wrong. Please try again or message me on Telegram.",
      sending: "Sending...",
    },
    validation: {
      nameRequired: "This field is required",
      emailRequired: "Please enter your email",
      emailInvalid: "Invalid email format (e.g., name@domain.com)",
      messageRequired: "Please enter your message",
      messageTooShort: "Message is too short (minimum 5 characters)",
    },
    actions: {
      edit: "Edit submitted message",
      sendAnother: "Send another message",
    },
    projects: {
      title: "Projects",
      loading: "Loading projects",
      subtitle: "Portfolio module is under construction.",
    },
  },
};

export type Language = "ua" | "en";
export type TranslationsType = typeof translations.ua;
