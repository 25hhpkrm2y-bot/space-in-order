export default function App() {
  return (
    <main className="site">
      <section className="hero">
        <nav className="nav">
          <div className="brand">SPACE IN ORDER</div>
          <div className="navLinks">
            <span>Garage</span>
            <span>Home</span>
            <span>Contact</span>
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
              We transform cluttered garages, lofts and lifestyle spaces into
              calm, organised and highly functional environments.
            </p>

            <div className="actions">
              <a href="#contact" className="primaryBtn">Book Your Reset</a>
              <a href="#process" className="secondaryBtn">See The Process</a>
            </div>
          </div>

          <div className="visualCard">
            <div className="houseLine">
              <div className="roof"></div>
              <div className="room">
                <div className="shelf">
                  <span></span><span></span><span></span>
                </div>
                <div className="boxes">
                  <i></i><i></i><i></i><i></i>
                </div>
                <div className="cabinet"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="statement">
        <p>
          Not clearance. Not cleaning. A complete reset of how your space feels,
          functions and supports your daily life.
        </p>
      </section>

      <section id="process" className="process">
        <div className="sectionHead">
          <p className="eyebrow">The Method</p>
          <h2>Clear. Organise. Transform. Optimise.</h2>
        </div>

        <div className="processGrid">
          {[
            ['01', 'Clear', 'We remove what you do not need and create breathing room.'],
            ['02', 'Organise', 'Every item receives a considered place and purpose.'],
            ['03', 'Transform', 'The space is redesigned into a calm, usable environment.'],
            ['04', 'Optimise', 'Storage systems, shelving and upgrades make it work long term.'],
          ].map(([num, title, text]) => (
            <div className="processCard" key={title}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="services">
        <div className="serviceCard large">
          <p className="eyebrow">Primary Service</p>
          <h2>Garage Reset</h2>
          <p>
            A premium one-day transformation for cluttered garages, including
            clearing, sorting, cleaning, organising and optional storage systems.
          </p>
        </div>

        <div className="serviceCard">
          <h3>Lofts</h3>
          <p>Clear, categorise and create usable storage systems.</p>
        </div>

        <div className="serviceCard">
          <h3>Home Gyms</h3>
          <p>Garage-to-gym layouts, flooring, storage and equipment placement.</p>
        </div>

        <div className="serviceCard">
          <h3>Storage Walls</h3>
          <p>Wall systems, shelving, hooks, cabinets and smart storage.</p>
        </div>
      </section>

      <section id="contact" className="cta">
        <p className="eyebrow">Start With Photos</p>
        <h2>Upload your space. We’ll show you what it can become.</h2>
        <p>
          Send 5 photos of your garage, loft or storage space and receive a
          simple starting estimate.
        </p>
        <a className="primaryBtn" href="mailto:hello@spaceinorder.co.uk">
          hello@spaceinorder.co.uk
        </a>
      </section>
    </main>
  )
}
