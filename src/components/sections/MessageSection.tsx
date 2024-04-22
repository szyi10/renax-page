const MessageSection = () => {
  return (
    <section className="relative py-32 bg-message-pattern bg-left-top bg-cover bg-fixed ">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-small-primary mb-5">Rent your car</p>
          <h3 className="text-4xl leading-tight font-bold mb-4">
            Intrested in Renting?
          </h3>
          <p className="text-sm font-light">
            Don't hesitate and send us a message.
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <a href="#" className="button">
            <img src="/icons/whatsapp.svg" className="w-4" /> Whatsapp
          </a>
          <a
            href="#"
            className="button border-white bg-transparent text-white hover:border-primary hover:bg-primary hover:text-dark"
          >
            Rent Now <span className="ti-arrow-top-right"></span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default MessageSection
