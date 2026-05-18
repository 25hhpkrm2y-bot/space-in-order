/* PREMIUM PROCESS UPGRADE */

.premiumProcess {
  position: relative;
  overflow: hidden;
}

.premiumProcess::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at top right,
    rgba(211,177,121,0.12),
    transparent 32%);
  pointer-events: none;
}

.processGrid {
  position: relative;
  z-index: 2;
}

.processCard {
  position: relative;
  overflow: hidden;
  transition:
    transform 0.45s ease,
    box-shadow 0.45s ease,
    border-color 0.45s ease,
    background 0.45s ease;
}

.processCard::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      135deg,
      rgba(255,255,255,0.18),
      transparent 60%
    );
  opacity: 0;
  transition: opacity 0.45s ease;
}

.processCard:hover {
  transform:
    translateY(-10px)
    scale(1.02);

  background: rgba(255,255,255,0.82);

  border-color: rgba(211,177,121,0.28);

  box-shadow:
    0 30px 80px rgba(0,0,0,0.08),
    0 0 40px rgba(211,177,121,0.08);
}

.processCard:hover::before {
  opacity: 1;
}

.processCard span {
  display: inline-block;
  margin-bottom: 18px;
  letter-spacing: 3px;
  position: relative;
}

.processCard span::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 42px;
  height: 1px;
  background: rgba(169,130,70,0.5);
}

.processCard h3 {
  transition: transform 0.35s ease;
}

.processCard:hover h3 {
  transform: translateX(4px);
}

.processCard p {
  transition: opacity 0.35s ease;
}

.processCard:hover p {
  opacity: 0.92;
}
