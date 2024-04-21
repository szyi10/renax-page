import { Link } from "react-router-dom"

interface ContactMethodProps {
  title: string
  info: string
  icon: string
  withSeparator: boolean
}

const ContactMethod = ({
  title,
  info,
  icon,
  withSeparator,
}: ContactMethodProps) => {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 min-w-14 bg-primary flex items-center justify-center rounded-full">
          <img src={icon} />
        </div>
        <div className="flex flex-col">
          <h6 className="text-sm font-bold">{title}</h6>
          <p className="text-sm font-light text-neutral-400">{info}</p>
        </div>
      </div>
      {withSeparator && (
        <div className="w-full h-[1px] md:w-[1px] md:h-auto my-5 md:my-0 md:mx-5 bg-neutral-800" />
      )}
    </>
  )
}

const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* Upper footer */}
        <div className="pt-24">
          <div className="flex flex-col justify-between md:flex-row border border-neutral-800 rounded-3xl py-5 px-5 lg:px-10 mb-8">
            <ContactMethod
              title="Call us"
              info="+971 52-333-4444"
              icon="/icons/phone.svg"
              withSeparator={true}
            />
            <ContactMethod
              title="Write to us"
              info="info@renax.com"
              icon="/icons/envelope.svg"
              withSeparator={true}
            />
            <ContactMethod
              title="Address"
              info="Dubai, Water Tower, Office 123"
              icon="/icons/map-pin.svg"
              withSeparator={false}
            />
          </div>
        </div>
        {/* Middle footer */}
        <div className="border-b border-b-neutral-800">
          <div className="flex flex-col justify-between md:flex-row">
            {/* About & social icons */}
            <div className="flex-[0_0_auto] w-full md:w-1/3 py-11">
              <img src="/img/logo-light.png" className="mb-4" width={130} />
              <div className="mb-5 text-sm font-light leading-loose text-neutral-300">
                <p className="mb-5">
                  Rent a car imperdiet sapien porttito the bibenum ellentesue
                  the commodo erat nesuen.
                </p>
                <ul className="flex gap-2">
                  <li className="w-14 h-14 mr-1 border border-primary rounded-full flex items-center justify-center hover:bg-primary transition-effect">
                    <a href="#">
                      <img
                        src="/icons/whatsapp-light.svg"
                        className="w-6 h-6"
                      />
                    </a>
                  </li>
                  <li className="w-14 h-14 mr-1 border border-primary rounded-full flex items-center justify-center hover:bg-primary transition-effect">
                    <a href="#">
                      <img src="/icons/facebook.svg" className="w-6 h-6" />
                    </a>
                  </li>
                  <li className="w-14 h-14 mr-1 border border-primary rounded-full flex items-center justify-center hover:bg-primary transition-effect">
                    <a href="#">
                      <img src="/icons/youtube.svg" className="w-6 h-6" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Quick links */}
            <div className="flex-[0_0_auto] w-full md:w-1/4 py-11 px-3">
              <div className="flex md:ml-[8.33%] flex-col">
                <h3 className="text-xl mb-4 font-bold">Quick Links</h3>
                <ul className="text-primary list-disc list-inside">
                  <li className="mb-1">
                    <Link to="/about" className="text-neutral-400 font-light">
                      About
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link to="/cars" className="text-neutral-400 font-light">
                      Cars
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link to="/service" className="text-neutral-400 font-light">
                      Service
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link to="/team" className="text-neutral-400 font-light">
                      Team
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link to="/contact" className="text-neutral-400 font-light">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Subscribe */}
            <div className="flex-[0_0_auto] w-full md:w-1/3 py-11">
              <div>
                <h3 className="text-xl mb-4 font-bold">Quick Links</h3>
                <p className="mb-5 text-sm font-light leading-loose text-neutral-300">
                  Want to be notified about our services. Just sign up and we'll
                  send you a notification by email.
                </p>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="button bg-transparent hover:bg-transparent hover:border-primary text-left text-white px-6 w-full"
                  />
                  <button className="button absolute right-3 top-1/2 -translate-y-1/2 p-0 w-[34px] h-[34px] flex items-center justify-center">
                    <i className="ti-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* ----- */}
          </div>
        </div>
        {/* Bottom footer */}
        <div className="py-10 text-xs text-neutral-400">
          <p>
            &copy;2024{" "}
            <a
              href="https://duruthemes.com/demo/html/renax/dark/index.html#"
              className="text-white underline underline-offset-4 decoration-primary"
            >
              DuruThemes
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/szyi10/"
              className="text-white underline underline-offset-4 decoration-primary"
            >
              Szymon Kędzior
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
