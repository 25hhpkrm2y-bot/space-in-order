"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"

const steps = [
  {
    number: "01",
    title: "Assess",
    description:
      "We evaluate the space, understand your lifestyle, and identify what’s creating visual and mental friction.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Reset",
    description:
      "We remove chaos, restructure the environment, and create immediate visual clarity throughout the space.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Optimise",
    description:
      "Premium storage systems, functional zoning, and intelligent organisation designed around daily life.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Maintain",
    description:
      "We create sustainable systems that keep your environment calm, efficient, and easy to maintain long-term.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
  },
]

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0.15, 0.4]
  )

  return (
    <section
      ref={containerRef}
      className="relative bg-[#0b0d0f] text-white min-h-[400vh]"
    >
      <motion.div
        style={{ opacity: backgroundOpacity }}
        className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,97,0.18),transparent_60%)] pointer-events-none"
      />

      <div className="sticky top-0 h-screen flex overflow-hidden">
        {/* LEFT VISUAL */}
        <div className="w-1/2 relative hidden lg:block">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                scale: activeIndex === index ? 1 : 1.08,
              }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${step.image})`,
                }}
              />

              <div className="absolute inset-0 bg-black/45" />

              <div className="absolute bottom-16 left-16 max-w-xl">
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    activeIndex === index
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.8 }}
                  className="text-sm tracking-[0.3em] uppercase text-[#c9a961]"
                >
                  ClearSpace Process
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    activeIndex === index
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 1 }}
                  className="text-6xl font-light mt-4 leading-tight"
                >
                  {step.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    activeIndex === index
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 1.2 }}
                  className="text-white/75 mt-6 text-lg leading-relaxed"
                >
                  {step.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-8 lg:px-20">
          <div className="w-full max-w-xl space-y-28">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                onViewportEnter={() => setActiveIndex(index)}
                viewport={{ amount: 0.6 }}
                initial={{ opacity: 0.3, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`relative border-l pl-8 transition-all duration-500 ${
                  activeIndex === index
                    ? "border-[#c9a961]"
                    : "border-white/10"
                }`}
              >
                <motion.div
                  animate={{
                    opacity: activeIndex === index ? 1 : 0.4,
                  }}
                  className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#c9a961] shadow-[0_0_20px_rgba(201,169,97,0.7)]"
                />

                <p className="text-sm tracking-[0.3em] uppercase text-[#c9a961] mb-4">
                  {step.number}
                </p>

                <h3 className="text-4xl font-light mb-6">
                  {step.title}
                </h3>

                <p className="text-white/65 leading-relaxed text-lg">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
