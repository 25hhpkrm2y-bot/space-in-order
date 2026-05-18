export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#1f1f1f]">
      
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-36 grid md:grid-cols-2 gap-16 items-center">
        
        <div>
          <div className="inline-block border border-black/10 rounded-full px-4 py-2 text-sm tracking-[0.25em] uppercase mb-8 bg-white/50">
            Premium Space Transformation
          </div>

          <h1 className="text-5xl md:text-7xl font-light tracking-[0.08em] leading-[1.05] mb-8">
            SPACE <span className="text-[#b49a67]">IN</span> ORDER
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-black/70 max-w-xl mb-10">
            Calm, organised and beautifully optimised spaces.
            From garages and lofts to lifestyle rooms and storage systems.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-black text-white rounded-full text-sm tracking-[0.2em] uppercase">
              Book Consultation
            </button>

            <button className="px-8 py-4 border border-black/20 rounded-full text-sm tracking-[0.2em] uppercase bg-white/40">
              View Transformations
            </button>
          </div>
        </div>

        <div className="aspect-square rounded-[40px] bg-white border border-black/10 shadow-2xl p-10 flex items-center justify-center">
          <div className="w-full max-w-md">

            <div className="border-[3px] border-black rounded-t-[40px] rounded-b-[20px] p-8 bg-[#faf8f4]">

              <div className="grid grid-cols-2 gap-6 items-end">

                <div className="space-y-4">
                  <div className="h-20 border border-black/20 rounded-xl bg-white"></div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-14 border border-black/20 rounded-lg bg-white"></div>
                    <div className="h-14 border border-black/20 rounded-lg bg-white"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="h-10 border border-black/20 rounded-lg bg-white"></div>
                  <div className="h-10 border border-black/20 rounded-lg bg-white"></div>
                  <div className="h-10 border border-black/20 rounded-lg bg-white"></div>
                </div>

              </div>

            </div>

            <div className="mt-8 text-center">
              <p className="tracking-[0.4em] text-sm uppercase text-black/60">
                Reclaim Your Space
              </p>
            </div>

          </div>
        </div>

      </section>

    </div>
  )
}
