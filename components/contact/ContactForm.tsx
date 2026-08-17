"use client";

import { FormEvent, Fragment } from "react";
import { contactInterests } from "@/data/site";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
  }

  return (
    <div className="tp-contact-me-interest-ptb px-contact-me-style p-relative pb-150">
      <div className="container container-1230">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="tp-contact-me-interest-wrapper pb-70">
                <h3 className="tp-contact-me-interest-title">
                  I&apos;m Interested in...
                </h3>
                <div className="tp-contact-me-form-category-list">
                  {contactInterests.map((interest, index) => (
                    <Fragment key={interest}>
                      {index === 4 ? <br /> : null}
                      <span>
                        <label>
                          <input
                            type="checkbox"
                            name="interests"
                            value={interest}
                          />
                          <span>{interest}</span>
                        </label>
                      </span>
                    </Fragment>
                  ))}
                </div>
              </div>
              <div className="tp-contact-me-interest-form">
                <h3 className="tp-contact-me-interest-title">
                  Request a Quote
                </h3>
                <div className="tp-contact-me-interest-form-wrap">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="tp-contact-form-input mb-20">
                        <label htmlFor="contact-name">Full name*</label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="tp-contact-form-input mb-20">
                        <label htmlFor="contact-email">Email address*</label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="tp-contact-form-input mb-20">
                        <label htmlFor="contact-website">Website link</label>
                        <input
                          id="contact-website"
                          name="website"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="tp-contact-form-input mb-20">
                        <label htmlFor="contact-message">
                          How Can We Help You*
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          required
                        />
                      </div>
                      <div className="tp-contact-form-btn">
                        <button className="w-100" type="submit">
                          <span>
                            <span className="text-1">Send Message</span>
                            <span className="text-2">Send Message</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
