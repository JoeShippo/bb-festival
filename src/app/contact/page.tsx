import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { sendContact } from '@/app/actions/contact';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="relative min-h-[20vh] py-20 md:py-30 grid place-items-center bg-[var(--teal)] text-white text-center">
        <div className="px-6 -rotate-1">
          <h1 className="font-heading text-6xl md:text-[120px] leading-[0.85]">
            Contact Us
          </h1>
          <p className="mt-4 text-xl md:text-3xl font-heading">
            We're here to help - get in touch!
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-16 md:py-24 bg-white text-[#052c2f]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT – FORM */}
          <div>
            <h2 className="font-heading text-4xl md:text-5xl mb-6">
              Send Us a Message
            </h2>

            <ContactForm />
          </div>

          {/* RIGHT – INFO */}
          <div className="space-y-4 md:text-lg">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl mb-4">
                Get in Touch
              </h2>
              <p>
                If you have any questions about the festival, sponsorship, or anything else,
                please don't hesitate to get in touch.
              </p>
            </div>

            <div>
              <p className="font-heading text-xl">Phone</p>
              <a href="tel:01234385537">01234 385537</a>
            </div>

            <div>
              <p className="font-heading text-xl">Email</p>
              <a
                href="mailto:info@thebellandbear.co.uk"
                className="underline"
              >
                info@thebellandbear.co.uk
              </a>
            </div>

            <div>
              <p className="font-heading text-xl">Location</p>
              <p>The Bell & Bear, 12 High Street, Emberton, MK46 5DH</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
