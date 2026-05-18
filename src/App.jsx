export default function App() {
  return (
    <main className="site">
      <section className="hero upgradedHero">
        <nav className="nav fadeDown">
          <div className="brand">SPACE IN ORDER</div>

          <div className="navLinks">
            <a href="#process">Process</a>
            <a href="#services">Services</a>
            <a href="#transformation">Transformation</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy fadeUp">
            <p className="eyebrow">Premium Space Transformation</p>

            <h1>
              Clear space.
              <span> Clear mind.</span>
            </h1>

            <p className="intro">
              We transform cluttered garages, lofts and forgotten spaces into
              calm, organised and highly functional environments designed around
              the way you live.
            </p>

            <div className="actions">
              <a href="#contact" className="primaryBtn">
                Book Your Reset
              </a>
              <a href="#transformation" className="secondaryBtn">
                See Transformation
              </a>
            </div>
          </div>

          <div className="heroVisual fadeInSlow">
            <div className="premiumVisual floatSoft">
              <div className="visualTop">
                <span>Garage Reset</span>
                <strong>Before → After</strong>
              </div>

              <div className="storageWall">
                <div></div><div></div><div></div>
                <div></div><div></div><div></div>
                <div></div><div></div><div></div>
              </div>

              <div className="visualBottom">
                <p>Organised storage</p>
                <p>Calm lifestyle space</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quietStatement reveal">
        <p>
          Your garage should not feel like storage overflow. It should feel like
          part of the home.
        </p>
      </section>

      <section id="process" className="process premiumProcess">
        <div className="sectionHeader reveal">
          <p className="eyebrow">Our Method</p>
          <h2>From chaos to calm, in one structured process.</h2>
        </div>

        <div className="processGrid">
          {[
            [
              "01",
              "Assess",
              "We review the space, understand what needs to stay, what needs to go, and how the space should work.",
            ],
            [
              "02",
              "Reset",
              "We clear, sort and restructure the space so it immediately feels lighter, calmer and more usable.",
            ],
            [
              "03",
              "Optimise",
              "We introduce smart storage, zones, shelving and systems so everything has a proper place.",
            ],
            [
              "04",
              "Maintain",
              "We leave you with a simple structure that is easy to keep clean, organised and stress-free long term.",
            ],
          ].map(([num, title, text]) => (
            <div className="processCard revealCard" key={title}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="services">
        <div className="serviceFeature reveal">
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
            [
              "Loft Reset",
              "Turn overloaded lofts into clean, labelled and usable storage.",
            ],
            [
              "Storage Systems",
              "Shelving, cabinets, hooks, boxes and wall-mounted systems.",
            ],
            [
              "Home Gym Setup",
              "Clear, prepare and optimise garage gyms and wellness spaces.",
            ],
            [
              "Lifestyle Spaces",
              "Utility rooms, workshops, studios and underused home areas.",
            ],
          ].map(([title, text]) => (
            <div className="serviceCard revealCard" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="transformation" className="transformationSection">
        <div className="transformationHeader reveal">
          <p className="eyebrow">The Transformation</p>
          <h2>Mess becomes precision. Storage becomes space.</h2>
        </div>

        <div className="transformationGrid">
          <div className="transformationCard beforeTransform revealCard">
            <span>Before</span>
            <h3>Cluttered. Heavy. Avoided.</h3>
            <p>
              The space becomes a dumping ground — difficult to use, difficult
              to clean, and mentally draining every time you open the door.
            </p>
          </div>

          <div className="transformationCard afterTransform revealCard">
            <span>After</span>
            <h3>Clear. Calm. Functional.</h3>
            <p>
              Everything has a place. The room works properly again. The home
              feels lighter because the hidden chaos is gone.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="cta premiumCta reveal">
        <p className="eyebrow">Start With Photos</p>
        <h2>Your home feels different when the chaos disappears.</h2>
        <p>
          Send us 5 photos of your garage, loft or storage space and we will
          guide you toward the right reset package.
        </p>

        <a href="mailto:hello@spaceinorder.co.uk" className="primaryBtn">
          hello@spaceinorder.co.uk
        </a>
      </section>

      <footer className="footer upgradedFooter">
        <div>
          <p>SPACE IN ORDER</p>
          <span>Premium Garage • Home • Lifestyle Space Transformation</span>
        </div>

        <div className="footerLinks">
          <a href="#process">Process</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </main>
  )
}
