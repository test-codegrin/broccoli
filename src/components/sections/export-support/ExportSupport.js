import Image from "next/image";

const ExportSupport = () => {
  return (
    <section className="export-support">
      <div className="export-support__container">
        <div className="export-support__visual" aria-label="Export products">
          <div className="export-support__image export-support__image--main">
            <Image
              src="/img/service/2.webp"
              alt="Orbitto International food ingredients ready for bulk export packaging"
              width={560}
              height={410}
              sizes="(max-width: 768px) 80vw, 40vw"
            />
          </div>
          <div className="export-support__image export-support__image--top">
            <Image
              src="/img/hero/Container.webp"
              alt="Packed turmeric powder for export"
              width={290}
              height={220}
              sizes="(max-width: 768px) 42vw, 18vw"
            />
          </div>
          <div className="export-support__image export-support__image--bottom">
            <Image
              src="/img/hero/Container2.webp"
              alt="Natural honey product for export"
              width={290}
              height={220}
              sizes="(max-width: 768px) 42vw, 18vw"
            />
          </div>
        </div>

        <div className="export-support__content">
          <span className="export-support__eyebrow">Export Support</span>
          <h2>Orbitto International   Export-Ready Ingredient Supply for Global Buyers</h2>
          <p>
            Orbitto International supports importers, distributors, food brands, private
            label companies, and wholesale buyers with export-ready food ingredient supply
            from India. We prioritise buyer requirements across purchasing, product
            protection, flexible packaging, legal documentation, and customs clearance  
            ensuring a smooth and reliable supply relationship for every international order.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExportSupport;
