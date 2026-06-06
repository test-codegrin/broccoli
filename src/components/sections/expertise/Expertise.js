const expertiseItems = [
  {
    icon: "fas fa-stopwatch",
    title: "Timely Supply",
    desc: "Structured order planning and coordinated execution for dependable delivery timelines across international markets.",
  },
  {
    icon: "fas fa-award",
    title: "Consistent Quality",
    desc: "Export-grade sourcing, processing, and supply of fruit powders, vegetable powders, spices, honey, and herbal ingredients.",
  },
  {
    icon: "fas fa-globe-asia",
    title: "Global Reach",
    desc: "Export-ready ingredient supply for importers, distributors, food brands, and private label buyers worldwide.",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Safe Export Handling",
    desc: "Careful packaging, product protection, and export documentation for secure and compliant international ingredient delivery.",
  },
];

const Expertise = () => {
  return (
    <section className="home-expertise">
      <div className="home-expertise__container">
        <div className="home-expertise__heading">
          <span>Our Expertise</span>
          <h2>Reliable Food Ingredient Export From India   Planning to Delivery</h2>
          <p>
            Orbitto International provides export-focused food ingredient supply for
            global buyers, ensuring each order is strategically planned and precisely
            executed from our Gujarat, India facility.
          </p>
        </div>

        <div className="home-expertise__grid">
          {expertiseItems.map(({ icon, title, desc }) => (
            <article className="home-expertise__card" key={title}>
              <div className="home-expertise__icon" aria-hidden="true">
                <i className={icon}></i>
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
