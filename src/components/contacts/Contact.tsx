import { useTranslation } from "../../hooks/useTranslation";
import { useContactForm } from "../../hooks/useContactForm";
import "./contact.scss";

const Contact = () => {
  const { t } = useTranslation();

  const { formData, errors, status, handleChange, handleSubmit, resetStatus, clearForm } =
    useContactForm("5d7308c5-6511-4559-b332-c4beb9bc59b6");

  return (
    <section id="contact">
      <h3>{t.contact.title}</h3>
      <p>{t.contact.subtitle}</p>

      <div className="contact-container">
        {status === "success" ? (
          <div className="form-success-block">
            <p className="form-success">{t.messageStatus.success}</p>
            <div className="success-actions">
              <button type="button" onClick={resetStatus} className="btn-secondary">
                {t.actions.edit}
              </button>
              <button type="button" onClick={clearForm} className="btn-primary">
                {t.actions.sendAnother}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">{t.contact.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                className={errors.name ? "input-error" : ""}
                value={formData.name}
                onChange={handleChange}
                placeholder={t.contact.placeholderName}
                required
              />
              {errors.name && <span className="error-message">{t.validation.nameRequired}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">{t.contact.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                className={errors.email ? "input-error" : ""}
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
              {errors.email === "emailRequired" && (
                <span className="error-message">{t.validation.emailRequired}</span>
              )}
              {errors.email === "emailInvalid" && (
                <span className="error-message">{t.validation.emailInvalid}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">{t.contact.message}</label>
              <textarea
                id="message"
                name="message"
                className={errors.message ? "input-error" : ""}
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder={t.contact.placeholderMessage}
                required
              ></textarea>
              {errors.message === "messageRequired" && (
                <span className="error-message">{t.validation.messageRequired}</span>
              )}
              {errors.message === "messageTooShort" && (
                <span className="error-message">{t.validation.messageTooShort}</span>
              )}
            </div>

            {status === "error" && <p className="form-global-error">{t.messageStatus.error}</p>}

            <button type="submit" disabled={status === "loading"}>
              {status === "loading" ? t.messageStatus.sending : t.contact.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
