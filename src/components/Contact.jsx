import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const WEB3FORMS_ACCESS_KEY = 'c374dff1-842c-4bc9-99e9-46d2dff6515b';

const Contact = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.target);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container contact-container">
        <div className="contact-form-side">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
            <input type="hidden" name="subject" value="New SuriCatch Inquiry" />
            <input type="hidden" name="from_name" value="SuriCatch Website" />
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

            <div className="form-row">
              <input type="text" name="company" placeholder={t('contact.placeholderCompany')} required />
              <input type="text" name="contact_person" placeholder={t('contact.placeholderPerson')} required />
            </div>
            <div className="form-row">
              <input type="email" name="email" placeholder={t('contact.placeholderEmail')} required />
              <input type="tel" name="phone" placeholder={t('contact.placeholderPhone')} />
            </div>
            <div className="form-row form-full-row">
              <input type="text" name="inquiry" placeholder={t('contact.placeholderInquiry')} />
            </div>
            <div className="form-row form-full-row">
              <textarea name="message" placeholder={t('contact.placeholderMessage')} rows="5" required></textarea>
            </div>
            <div className="form-checkbox">
              <input type="checkbox" id="policy" name="policy_agreed" required />
              <label htmlFor="policy">{t('contact.policy')}</label>
            </div>
            <button type="submit" className="btn btn-secondary" disabled={status === 'submitting'}>
              {status === 'submitting' ? t('contact.btnSubmitting') : t('contact.btnSubmit')}
            </button>

            {status === 'success' && (
              <p className="form-msg form-msg-success">{t('contact.msgSuccess')}</p>
            )}
            {status === 'error' && (
              <p className="form-msg form-msg-error">{t('contact.msgError')}</p>
            )}
          </form>
        </div>

        <div className="contact-info-side">
          <h3>{t('contact.title')}</h3>
          <div className="info-item">
            <span className="icon">📞</span>
            <p>
              <strong>{t('contact.opTitle')}</strong><br/>
              <a href="tel:+5978460566">+597 8460566</a><br/>
              <a href="tel:+85260699003">+852 60699003</a><br/>
              <a href="tel:+8613823203003">+86 138 2320 3003</a>
            </p>
          </div>
          <div className="info-item">
            <span className="icon">✉️</span>
            <p><strong>{t('contact.salesTitle')}</strong><br/><a href="mailto:kjacgor@gmail.com">kjacgor@gmail.com</a></p>
          </div>
          <div className="info-item">
            <span className="icon">📍</span>
            <p><strong>{t('contact.hkTitle')}</strong><br/>{t('contact.hkAddress')}</p>
          </div>
          <div className="info-item">
            <span className="icon">📍</span>
            <p><strong>{t('contact.srTitle')}</strong><br/>{t('contact.srAddress')}</p>
          </div>
          <div className="info-item info-item-qr">
            <span className="icon">💬</span>
            <div className="qr-block">
              <strong>{t('contact.wechatTitle')}</strong>
              <img src="/assets/images/wechat-qr.jpg" alt="WeChat QR code" className="wechat-qr" />
              <span className="qr-hint">{t('contact.wechatHint')}</span>
            </div>
          </div>

          <div className="contact-image-wrap">
            <img src="/assets/images/footer_school.png" alt="Map/Texture" className="contact-texture" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
