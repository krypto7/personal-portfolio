import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
  description: `Get in touch with ${site.name}.`,
};

export default function ContactPage() {
  return (
    <main>
      <div className="in-team-hero-area px-contact-me-style pt-150 pb-100" id="top">
        <div className="container container-1550">
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <div className="in-team-hero-content">
                <span className="px-section-subtitle mb-30">CONTACT ME</span>
                <h1 className="in-team-hero-title">
                  Let&apos;s <span>discuss</span> <br />
                  <img src="/assets/img/team/circle-img.png" alt="" /> your project!
                </h1>
                <p>
                  Let&apos;s start a conversation! fill out our <br />
                  contact form and we&apos;ll get back to you as <br />
                  soon as possible
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </main>
  );
}
