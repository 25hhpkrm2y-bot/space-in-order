import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

const mailtoLink =
  'mailto:hello@spaceinorder.co.uk?subject=Space%20In%20Order%20-%20Project%20Enquiry';
const whatsappLink = 'https://wa.me/447000000000?text=Hello%20Space%20In%20Order';

const ease = [0.16, 1, 0.3, 1];

const reveal = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 1.05, ease } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } }
};

const heroWords = ['Space,', 'restored.'];

const residential = [
  ['Garage Reset', 'garage', 'For garages that have become overflow.'],
  ['Loft Organisation', 'roof', 'Calm access to the things worth keeping.'],
  ['Storage Systems', 'shelves', 'Shelving, cabinets and layouts with purpose.'],
  ['Lifestyle Spaces', 'sofa', 'Gyms, hobbies and utility zones, refined.'],
  ['Home Gym', 'dumbbell', 'Equipment, flooring and flow considered together.'],
  ['Shelving', 'shelf', 'Visible storage with architectural restraint.'],
  ['Slat Walls', 'slat', 'Vertical order for tools, equipment and overflow.'],
  ['Cabinets', 'cabinet', 'Concealed systems for calmer rooms.'],
  ['Lighting', 'pendant', 'Soft function, better atmosphere.'],
  ['Epoxy Floors', 'floor', 'A durable surface for complete garage transformation.'],
  ['Organisation Systems', 'grid', 'Modular logic that stays easy to use.']
];

const commercial = [
  ['Office Reset', 'office'],
  ['Desk Assembly', 'deskAssembly'],
  ['Office reconfiguration', 'plan'],
  ['Storage Walls', 'storageWall'],
  ['Archive Organisation', 'archive'],
  ['Meeting Room Setup', 'meeting'],
  ['Commercial Shelving', 'commercialShelf'],
  ['Workspace Optimisation', 'workflow'],
  ['Small office refurbishment support', 'cabinet'],
  ['Furniture Replacement', 'replacement']
];

const clients = [
  'Architects',
  'Interior designers',
  'Developers',
  'Facilities managers',
  'Commercial landlords',
  'Office managers',
  'Businesses'
];

const process = [
  ['CLEAR', 'Remove what no longer belongs.'],
  ['ORGANISE', 'Create structure around life and workflow.'],
  ['TRANSFORM', 'Refine the space with considered systems.'],
  ['OPTIMISE', 'Leave everything simple, visible and easy to maintain.']
];

const principles = [
  'Designed. Not improvised.',
  'Built around your lifestyle.',
  'Storage with purpose.',
  'Premium finishes.',
  'Long-term organisation.',
  'Attention to every detail.'
];

const packages = [
  ['RESET', 'from £599', 'For one space that needs structure, clarity and order.'],
  ['RESET+', 'from £1,495', 'For organisation, storage planning and upgraded finishing.'],
  ['SIGNATURE SPACE', 'from £4,995', 'For complete transformation with bespoke systems and a fully considered finish.']
];

function Reveal({ children, className = '', id }) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
    >
      {children}
    </motion.section>
  );
}

function MagneticLink({ href, className, children }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      className={className}
      whileHover={reduceMotion ? undefined : { y: -3, scale: 1.01 }}
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 240, damping: 26 }}
    >
      {children}
    </motion.a>
  );
}

function ServiceIcon({ type }) {
  const paths = {
    garage: ['M12 48V25l20-10 20 10v23', 'M20 48V32h24v16', 'M24 38h16'],
    roof: ['M12 36 32 16l20 20', 'M18 34v18h28V34', 'M26 52V39h12v13'],
    shelves: ['M15 18h34M15 32h34M15 46h34', 'M19 18v34M45 18v34', 'M24 25h9M31 39h9'],
    dumbbell: ['M24 32h16', 'M15 24v16M20 22v20M44 22v20M49 24v16'],
    sofa: ['M16 34h32v12H16z', 'M20 34v-8h24v8', 'M16 46v4M48 46v4'],
    pendant: ['M32 14v16', 'M23 42c1-8 4-12 9-12s8 4 9 12H23Z', 'M27 48h10'],
    cabinet: ['M16 14h32v38H16z', 'M32 14v38', 'M24 33h2M38 33h2'],
    shelf: ['M18 18v34M46 18v34', 'M18 24h28M18 38h28', 'M24 31h10M31 45h8'],
    slat: ['M18 16v36M25 16v36M32 16v36M39 16v36M46 16v36', 'M14 52h36'],
    floor: ['M14 42h36', 'M18 34h28', 'M22 26h20', 'M14 42l8-16M50 42l-8-16'],
    grid: ['M16 16h13v13H16zM35 16h13v13H35zM16 35h13v13H16zM35 35h13v13H35z'],
    utility: ['M18 18h28v34H18z', 'M24 25h16', 'M25 38a7 7 0 1 0 14 0 7 7 0 0 0-14 0Z'],
    desk: ['M14 30h36v8H14z', 'M20 38v12M44 38v12', 'M22 24h20'],
    office: ['M14 20h36v28H14z', 'M20 28h24M20 36h14', 'M20 48v4M44 48v4'],
    deskAssembly: ['M14 28h36', 'M18 28v20M46 28v20', 'M24 20h16M32 20v8'],
    plan: ['M13 15h38v34H13z', 'M27 15v34M27 31h24', 'M13 33h14'],
    storageWall: ['M14 16h36v36H14z', 'M26 16v36M38 16v36', 'M14 28h36M14 40h36'],
    meeting: ['M16 29h32v10H16z', 'M22 22h20', 'M22 39v10M42 39v10'],
    commercialShelf: ['M14 20h36M14 32h36M14 44h36', 'M20 20v24M44 20v24', 'M27 26h10M24 38h16'],
    workflow: ['M16 18h16v12H16zM36 34h12v12H36z', 'M32 24h8v10', 'M24 42h12'],
    replacement: ['M16 24h24v16H16z', 'M40 32h8', 'M44 28l4 4-4 4', 'M20 40v8M36 40v8'],
    archive: ['M17 20h30v30H17z', 'M21 14h22v6', 'M25 30h14M25 38h10']
  };

  return (
    <motion.svg
      className="brand-icon"
      viewBox="0 0 64 64"
      aria-hidden="true"
      whileHover={{ rotate: -2, scale: 1.04 }}
      transition={{ duration: 0.5, ease }}
    >
      {(paths[type] || paths.shelves).map((d) => (
        <path d={d} key={d} />
      ))}
    </motion.svg>
  );
}

function CursorLight() {
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 45, damping: 22 });
  const y = useSpring(mouseY, { stiffness: 45, damping: 22 });

  function handleMouseMove(event) {
    if (reduceMotion) return;
    mouseX.set(event.clientX - 190);
    mouseY.set(event.clientY - 190);
  }

  return (
    <motion.div className="cursor-surface" onMouseMove={handleMouseMove} aria-hidden="true">
      <motion.span className="cursor-light" style={{ x, y, opacity: reduceMotion ? 0 : 1 }} />
    </motion.div>
  );
}

function HeroArchitecture() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div className="hero-architecture" aria-hidden="true">
      <motion.div
        className="ambient ambient-one"
        animate={reduceMotion ? undefined : { x: [-16, 18, -16], y: [0, -14, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="ambient ambient-two"
        animate={reduceMotion ? undefined : { x: [10, -12, 10], y: [0, 18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        className="hero-line line-one"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.4, ease }}
      />
      <motion.span
        className="hero-line line-two"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.55, ease }}
      />
    </motion.div>
  );
}

function App() {
  return (
    <main>
      <motion.div
        className="page-loader"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.95, ease }}
        aria-hidden="true"
      />

      <section className="hero" id="top">
        <CursorLight />
        <HeroArchitecture />
        <motion.nav
          className="nav shell"
          aria-label="Primary"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.15, ease }}
        >
          <a className="brand" href="#top" aria-label="Space In Order home">
            <span>SIO</span>
            Space In Order
          </a>
          <div className="nav-links">
            <a href="#residential">Residential</a>
            <a href="#commercial">Commercial</a>
            <a href="#process">Process</a>
          </div>
        </motion.nav>

        <div className="hero-inner shell">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p className="eyebrow" variants={reveal}>
              Reclaim Your Space.
            </motion.p>
            <motion.h1 aria-label="Space, restored.">
              {heroWords.map((word, index) => (
                <motion.span key={word} variants={reveal}>
                  {word}{index < heroWords.length - 1 ? ' ' : ''}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p className="hero-text" variants={reveal}>
              Premium space transformation for homes, workplaces and lifestyle spaces.
            </motion.p>
            <motion.div className="hero-actions" variants={reveal}>
              <MagneticLink className="button light" href={mailtoLink}>
                Start Your Transformation
              </MagneticLink>
              <MagneticLink className="button ghost" href="#process">
                Explore Services
              </MagneticLink>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Reveal className="philosophy shell">
        <p className="kicker">Our Philosophy</p>
        <div className="philosophy-lines">
          <span>We don’t organise possessions.</span>
          <span>We create calmer ways of living.</span>
          <span>Everything has purpose.</span>
          <span>Everything has its place.</span>
          <span>Order creates clarity.</span>
        </div>
      </Reveal>

      <Reveal className="residential shell" id="residential">
        <div className="section-intro">
          <p className="eyebrow">Residential Spaces</p>
          <h2>Homes with less friction.</h2>
          <p>Garage organisation, loft organisation and premium storage solutions for London homes.</p>
        </div>
        <div className="editorial-services">
          {residential.map(([title, type, copy], index) => (
            <motion.article
              className="editorial-service"
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, delay: (index % 3) * 0.05, ease }}
            >
              <ServiceIcon type={type} />
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Reveal>

      <Reveal className="commercial" id="commercial">
        <div className="shell commercial-inner">
          <div className="section-intro">
            <p className="eyebrow">Commercial</p>
            <h2>Commercial Space Reset</h2>
            <p>
              Premium workplace organisation for offices, studios, clinics and commercial interiors
              that need calmer storage, sharper flow and installation support.
            </p>
          </div>
          <div className="client-strip" aria-label="Commercial clients">
            {clients.map((client) => (
              <span key={client}>{client}</span>
            ))}
          </div>
          <div className="commercial-services">
            {commercial.map(([item, type]) => (
              <span key={item}>
                <ServiceIcon type={type} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="process shell" id="process">
        <div className="sticky-process">
          <div className="process-title">
            <p className="eyebrow">Our Process</p>
            <h2>From noise to order.</h2>
          </div>
          <div className="process-story">
            {process.map(([title, copy], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0.22, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.74 }}
                transition={{ duration: 0.9, ease }}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="principles">
        <div className="shell principles-inner">
          <p className="eyebrow">Services</p>
          <h2>Precision for homes, workplaces and the spaces in between.</h2>
          {principles.map((principle) => (
            <motion.p
              key={principle}
              initial={{ opacity: 0.18, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.55 }}
              transition={{ duration: 0.85, ease }}
            >
              {principle}
            </motion.p>
          ))}
        </div>
      </Reveal>

      <Reveal className="packages shell" id="packages">
        <div className="section-intro">
          <p className="eyebrow">Packages</p>
          <h2>Three levels of reset.</h2>
        </div>
        <div className="package-rows">
          {packages.map(([name, price, copy]) => (
            <motion.article key={name} whileHover={{ x: 8 }} transition={{ duration: 0.45, ease }}>
              <h3>{name}</h3>
              <strong>{price}</strong>
              <p>{copy}</p>
            </motion.article>
          ))}
        </div>
        <p className="note">Prices shown are starting prices. Final quotation depends on project size and specification.</p>
      </Reveal>

      <Reveal className="contact shell" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Begin with the space.</h2>
          <p>Send photos, describe what is not working, and we’ll suggest the right next step.</p>
        </div>
        <form className="enquiry-form" aria-label="Project enquiry form">
          <label>
            Name
            <input name="name" type="text" autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" />
          </label>
          <label>
            Project type
            <select name="projectType" defaultValue="">
              <option value="" disabled>Select one</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Both</option>
            </select>
          </label>
          <label>
            Notes
            <textarea name="notes" rows="4" />
          </label>
          <div className="contact-actions">
            <MagneticLink className="button dark" href={mailtoLink}>
              Upload project photos
            </MagneticLink>
            <MagneticLink className="button quiet-dark" href={mailtoLink}>
              Book consultation
            </MagneticLink>
            <MagneticLink className="button quiet-dark" href={whatsappLink}>
              WhatsApp
            </MagneticLink>
            <MagneticLink className="button quiet-dark" href="https://www.instagram.com/space_inorder/">
              Instagram
            </MagneticLink>
          </div>
        </form>
      </Reveal>

      <footer className="footer shell">
        <h2>Reclaim Your Space.</h2>
        <div>
          <strong>Space In Order</strong>
          <p>Homes · Workplaces · Storage Systems</p>
        </div>
        <nav aria-label="Footer">
          <a href="#residential">Residential</a>
          <a href="#commercial">Commercial</a>
          <a href="#contact">Contact</a>
          <a href="mailto:hello@spaceinorder.co.uk">Email</a>
        </nav>
      </footer>
    </main>
  );
}

export default App;
