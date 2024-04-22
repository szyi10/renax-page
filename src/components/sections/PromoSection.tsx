const PromoSection = () => {
  return (
    <section className="relative py-32 bg-promo-pattern bg-left-top bg-cover bg-fixed ">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-small-primary mb-5">Explore</p>
          <h3 className="text-4xl leading-tight font-bold mb-4">
            Car <span className="text-primary">Promo</span> Video
          </h3>
        </div>
        <div className="flex justify-center">
          <a href="#" className="group/promo">
            <div className="w-24 h-24 border border-primary rounded-full flex items-center justify-center">
              <span className=" text-4xl text-center group-hover/promo:text-primary transition-effect">
                <i className="ti-control-play"></i>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default PromoSection
