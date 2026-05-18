export default function App() {
  return (
    <main className="site">
      <section className="hero">
        <nav className="nav">
          <div className="brand">SPACE IN ORDER</div>
          <div className="navLinks">
            <a href="#process">Process</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">Premium Space Transformation</p>

            <h1>
              Reclaim the space
              <span> your home forgot.</span>
            </h1>

            <p className="intro">
              We transform cluttered garages, lofts and underused spaces into
              calm, organised and highly functional environments.
            </p>

            <div className="actions">
              <a href="#contact" className="primaryBtn">Book Your Reset</a>
              <a href="#process" className="secondaryBtn">See The Process</a>
            </div>
          </div>

          <div className="heroVisual">
            <div className="glassPanel">
              <div className="garageIcon">
                <div className="roofLine"></div>
                <div className="garageBody">
                  <div className="shelves">
                    <span></span><span></span><span></span>
                    <span></span><span></span><span></span>
                  </div>
                  <div className="floorLine"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quietStatement">
        <p>
          A calm, structured reset for the spaces that quietly create stress in
          your home.
        </p>
      </section>

      <section id="process" className="process">
        <div className="sectionHeader">
          <p className="eyebrow">Our Method</p>
          <h2>From chaos to calm, in one structured process.</h2>
        </div>

        <div className="processGrid">
          {[
            ["01", "Clear", "We remove what is no longer needed and create breathing room."],
            ["02", "Organise", "Items are sorted, categorised and given a clear place."],
            ["03", "Transform", "The space is redesigned to feel clean, usable and calm."],
            ["04", "Optimise", "Storage systems, shelving and upgrades make it work long term."]
          ].map(([num, title, text]) => (
            <div className="processCard" key={title}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="services">
        <div className="serviceFeature">
          <p className="eyebrow">Primary Service</p>
          <h2>Garage Reset</h2>
          <p>
            A premium transformation service for cluttered garages — combining
            clearing, sorting, deep cleaning, organisation and optional storage
            installations.
          </p>
        </div>

        <div className="serviceGrid">
          {[
            ["Loft Reset", "Turn overloaded lofts into clean, labelled and usable storage."],
            ["Storage Systems", "Shelving, cabinets, hooks, boxes and wall-mounted systems."],
            ["Home Gym Setup", "Clear, prepare and optimise garage gyms and wellness spaces."],
            ["Lifestyle Spaces", "Utility rooms, workshops, studios and underused home areas."]
          ].map(([title, text]) => (
            <div className="serviceCard" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="beforeAfter">
        <div className="before">
          <span>Before</span>
          <p>Cluttered. Overwhelming. Unused.</p>
        </div>
        <div className="after">
          <span>After</span>
          <p>Clear. Calm. Functional.</p>
        </div>
      </section>

      <section id="contact" className="cta">
        <p className="eyebrow">Start With Photos</p>
        <h2>Send us your space. We’ll show you what it can become.</h2>
        <p>
          Upload or email 5 photos of your garage, loft or storage space and we
          will guide you toward the right reset package.
        </p>
        <a href="mailto:hello@spaceinorder.co.uk" className="primaryBtn">
          hello@spaceinorder.co.uk
        </a>
      </section>

      <footer className="footer">
        <p>SPACE IN ORDER</p>
        <span>Garage • Home • Lifestyle Spaces</span>
      </footer>
    </main>
  )
}
