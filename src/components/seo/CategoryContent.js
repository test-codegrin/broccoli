const styles = {
  section: {
    padding: "80px 0",
    background: "#ffffff",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
  },
  eyebrow: {
    display: "inline-block",
    marginBottom: "12px",
    color: "#5a7b42",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  heading: {
    margin: "0 0 16px",
    color: "#1c3515",
    fontSize: "clamp(26px, 3vw, 34px)",
    lineHeight: 1.2,
  },
  subheading: {
    margin: "0 0 8px",
    color: "#1f3d18",
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: 1.4,
  },
  paragraph: {
    margin: "0 0 16px",
    color: "#5b6f55",
    lineHeight: 1.75,
    maxWidth: "880px",
  },
  block: {
    marginBottom: "44px",
  },
  list: {
    margin: "0 0 12px",
    paddingLeft: "20px",
    color: "#5b6f55",
    lineHeight: 1.85,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "6px 24px",
    listStyle: "disc",
  },
  applicationGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
  },
  applicationCard: {
    background: "#f7fbf5",
    border: "1px solid #dfe9d8",
    padding: "20px 22px",
  },
  applicationTitle: {
    margin: "0 0 8px",
    color: "#1f3d18",
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: 1.4,
  },
  applicationText: {
    margin: 0,
    color: "#5b6f55",
    lineHeight: 1.7,
    fontSize: "14.5px",
  },
  note: {
    margin: "8px 0 0",
    color: "#7a8f6e",
    fontSize: "14px",
    lineHeight: 1.7,
  },
};

const CategoryContent = ({ category }) => {
  const rich = category?.richContent;

  if (!rich) {
    return null;
  }

  return (
    <section style={styles.section} aria-labelledby={`${category.slug}-content-heading`}>
      <div style={styles.container}>
        <div style={styles.block}>
          <span style={styles.eyebrow}>Quick Answer</span>
          <p style={{ ...styles.paragraph, marginBottom: 0 }}>{rich.quickAnswer}</p>
        </div>

        <div style={styles.block}>
          <h2 id={`${category.slug}-content-heading`} style={styles.heading}>
            {category.label} Overview
          </h2>
          {rich.overview?.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} style={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        {rich.productTypes?.length ? (
          <div style={styles.block}>
            <h2 style={styles.heading}>{category.label} Product Types</h2>
            <ul style={styles.list}>
              {rich.productTypes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {rich.productTypesNote ? <p style={styles.note}>{rich.productTypesNote}</p> : null}
          </div>
        ) : null}

        {rich.applications?.length ? (
          <div style={styles.block}>
            <h2 style={styles.heading}>{category.label} Applications</h2>
            <div style={styles.applicationGrid}>
              {rich.applications.map((application) => (
                <div key={application.title} style={styles.applicationCard}>
                  <h3 style={styles.applicationTitle}>{application.title}</h3>
                  <p style={styles.applicationText}>{application.text}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {rich.buyers?.length ? (
          <div style={styles.block}>
            <h2 style={styles.heading}>Who Buys {category.label} from Orbitto International</h2>
            <ul style={styles.list}>
              {rich.buyers.map((buyer) => (
                <li key={buyer}>{buyer}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {rich.bulkSupply ? (
          <div style={styles.block}>
            <h2 style={styles.heading}>Bulk Supply &amp; Packaging</h2>
            <p style={styles.paragraph}>{rich.bulkSupply}</p>
          </div>
        ) : null}

        {rich.privateLabel ? (
          <div style={styles.block}>
            <h2 style={styles.heading}>Private Label &amp; Contract Manufacturing</h2>
            <p style={styles.paragraph}>{rich.privateLabel}</p>
          </div>
        ) : null}

        {rich.qualityDocs ? (
          <div style={styles.block}>
            <h2 style={styles.heading}>Quality &amp; Documentation</h2>
            <p style={styles.paragraph}>{rich.qualityDocs}</p>
          </div>
        ) : null}

        {rich.moqSamples ? (
          <div style={{ ...styles.block, marginBottom: 0 }}>
            <h2 style={styles.heading}>MOQ, Samples &amp; Specifications</h2>
            <p style={{ ...styles.paragraph, marginBottom: 0 }}>{rich.moqSamples}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default CategoryContent;
