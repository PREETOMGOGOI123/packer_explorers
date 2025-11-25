import Form from '../Form.jsx'

export default  function Hero() {
    return (
        <section
            className="hero min-h-screen bg-cover bg-center relative"
            style={{
                backgroundImage:
                    "url('https://images.pexels.com/photos/8495440/pexels-photo-8495440.jpeg?_gl=1*fcrq4j*_ga*MTM5MDk3MzQuMTc2MDI3MTc0NQ..*_ga_8JE65Q40S6*czE3NjM1NDM0NjckbzEyJGcxJHQxNzYzNTQzNDk5JGoyOCRsMCRoMA..')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-neutral/70"></div>

            <div className="hero-content flex-col lg:flex-row-reverse justify-between items-center w-full max-w-6xl px-6 gap-12 relative z-20">


                <Form />

                {/* Text Content */}
                <div className="text-center lg:text-left max-w-xl p-5 rounded-md text-neutral-content/70">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md ">
                        Packers & Explorers
                    </h1>

                    <p className="text-lg leading-relaxed mb-4 uppercase font-black">
                        <span className="text-purple-400">Transport, rentals, and tours across</span>{" "}
                        <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-300 bg-clip-text text-transparent">
    Northeast India
  </span>.
                    </p>

                    <p className="text-sm  opacity-90 leading-relaxed mb-6 uppercase">
                        Led by <strong>Mr. Indra Nath Senapati</strong> — a seasoned carrier with
                        7+ years of experience conquering the toughest terrains with dedication
                        and care.
                    </p>

                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        <div className="badge  badge-neutral-content badge-outline hover:badge-primary hover:text-primary-content transition">
                            7+ Years Experience
                        </div>
                        <div className="badge  badge-neutral-content badge-outline hover:badge-primary hover:text-primary-content transition">
                            Trusted Transporter
                        </div>
                        <div className="badge  badge-neutral-content badge-outline hover:badge-primary hover:text-primary-content transition">
                            Northeast Expert
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};


