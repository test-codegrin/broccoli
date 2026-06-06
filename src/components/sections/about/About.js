import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="home-about">
      {/* <div className="home-about__bg-text">ABOUT</div> */}
      <div className="home-about__container">
        <div className="home-about__content">
          <h2>About our Products</h2>
          <p>
            Orbitto International is an export-focused food ingredient manufacturer
            based in Morbi, Gujarat, India. We manufacture high-quality food powders
            including fruit powder, vegetable powder, herbal blends, and premium spice
            mixes for global buyers, importers, food brands, and distributors. Using
            advanced low-temperature spray drying and dehydration technology, we ensure
            maximum retention of natural flavor, color, and nutritional value.
          </p>
          <p>
            We source fresh ingredients from trusted farms across India and process
            every batch with precision to deliver consistent quality for bulk ingredient
            supply. Our dehydrated powders and spice blends are ideal for food
            manufacturing, beverage production, nutraceutical applications, and
            private label product development for international markets.
          </p>
          <p>
            With a strong focus on purity and export-readiness, Orbitto International
            products meet the quality expectations of global buyers. We support private
            label manufacturing, contract manufacturing, and third-party manufacturing
            arrangements for food brands seeking a reliable food ingredient supplier
            from India.
          </p>
          <Link
            href="/products"
            className="theme-btn-1 btn btn-effect-1 text-uppercase"
          >
            View more details
          </Link>
        </div>

        <div className="home-about__image-wrap">
          <Image
            src="/img/hero/about.webp"
            alt="Orbitto International food ingredient manufacturing facility in Morbi, Gujarat, India"
            width={760}
            height={520}
            className="home-about__image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
