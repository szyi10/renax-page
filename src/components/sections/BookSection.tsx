const BookSection = () => {
  return (
    <section className="relative py-32 bg-book-pattern bg-left-top bg-cover bg-fixed ">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-small-primary mb-5">Rent now</p>
          <h3 className="text-4xl leading-tight font-bold mb-4">
            Book Auto Rental
          </h3>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 bg-neutral-800 rounded-3xl lg:rounded-[60px] px-7 pt-7 pb-4 lg:p-4 gap-5 text-sm text-neutral-400">
          <select className="bg-neutral-800">
            <option value="">Car Type</option>
            <option value="">All</option>
            <option value="">Luxury</option>
            <option value="">Sport</option>
            <option value="">SUV</option>
            <option value="">Convertible</option>
          </select>
          <select className="bg-neutral-800">
            <option value="">Pick Up Location</option>
            <option value="">Dubai</option>
            <option value="">Abu Dhabi</option>
            <option value="">Sharjah</option>
            <option value="">Alain</option>
          </select>
          <input
            type="text"
            className="bg-neutral-800 placeholder:text-neutral-400 md:col-span-2 lg:col-span-1"
            placeholder="Pick up date"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
          <select className="bg-neutral-800">
            <option value="">Drop Off Location</option>
            <option value="">Alain</option>
            <option value="">Sharjah</option>
            <option value="">Abu Dhabi</option>
            <option value="">Dubai</option>
          </select>
          <input
            type="text"
            className="bg-neutral-800 placeholder:text-neutral-400 md:col-span-2 lg:col-span-1"
            placeholder="Return date"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
          <button className="button px-0 justify-center">Rent Now</button>
        </form>
      </div>
    </section>
  )
}

export default BookSection
