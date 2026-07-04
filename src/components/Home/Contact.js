const Contact = () => {
  return (
    <section id="contact" className="py-12 ">
      <div className="container mx-auto px-4">
       

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.596057947815!2d85.30689407471701!3d27.72975562450408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19fc783b5b7f%3A0x8b8f261c974c49c!2sTimmure%20-%20Mhepi!5e0!3m2!1sen!2snp!4v1775456794425!5m2!1sen!2snp"
             height={200}
          style={{ border: 0, width: "100%", borderRadius: "2rem" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
         / >


             
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mt-8">
          <form className="flex flex-col gap-3" action="#">
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="w-full bg-white border border-primary/20 rounded-2xl px-4 py-2 focus:outline-2 focus:outline-primary"
            />
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email address"
              className="w-full bg-white border border-primary/20 rounded-2xl px-4 py-2 focus:outline-2 focus:outline-primary"
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="Phone number"
              className="w-full bg-white border border-primary/20 rounded-2xl px-4 py-2 focus:outline-2 focus:outline-primary"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Your message..."
              rows={5}
              className="w-full bg-white border border-primary/20 rounded-2xl px-4 py-2 focus:outline-2 focus:outline-primary"
              defaultValue={""}
            />
            <button className="bg-orange-400 rounded-3xl text-white px-10 py-3 transition duration-300 ease max-w-fit mt-2">
              Send Message
            </button>
          </form>
          <div className="info">
            <h2 className="text-3xl dark:text-white font-bold">
              Let&apos;s Connect
            </h2>
            <p className="text-light dark:text-gray-300 text-sm my-4">
              Have any questions? Please reach out to us.
            </p>
             <a
                href="https://www.google.com/maps/place/Timmure+-+Mhepi/@27.7297556,85.3068941,17z/data=!4m6!3m5!1s0x39eb19fc783b5b7f:0x8b8f261c974c49c!8m2!3d27.7297509!4d85.309469!16s%2Fg%2F11l1fq5ltd?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                >📍 Mitranager, Kathmandu, Mhepi</a
              >
            <a
              href="mailto:dipakrajpandey31@gmail.com"
              className="m-1 text-sm block text-dark hover:text-primary"
            >
              📨 dipakrajpandey39@gmail.com
            </a>
            <a
              href="tel:+977-9862460349"
              className="m-1 text-sm block text-dark hover:text-primary"
            >
              📞 +977-9862460349
            </a>
            <a
              href="https://wa.me/9862460349"
              className="m-1 text-sm block text-dark hover:text-primary"
            >
              💬 9862460349
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
