import { homepageData } from "../../data/homepageData.js";

const Services = () => {
    return (
        <section className="py-40 px-4 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 px-4">
                    <p className="text-sm text-primary font-semibold flex items-center justify-center gap-3 mb-3">
                        <span className="w-10 h-[2px] bg-primary/40"></span>
                        Our Services
                        <span className="w-10 h-[2px] bg-primary/40"></span>
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
                        What We Offer
                    </h2>

                    <p className="text-lg text-base-content/60 max-w-3xl mx-auto leading-relaxed">
                        From dependable vehicle rentals to seamless shifting services and curated travel planning, we provide solutions designed to make your journeys easier, safer, and more enjoyable.
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
                    {homepageData.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ service }) => {
    return (
        <div className="card bg-base-100 shadow-md hover:shadow-xl border border-base-300 rounded-2xl transition-all duration-300 hover:scale-[1.02]">

            {/* Icon + Title */}
            <div className="card-body">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                    <span className="text-4xl">{service.emoji}</span>
                </div>

                {/* Tagline */}
                <div className="badge badge-primary badge-outline py-3 px-4 mt-2 text-xs">
                    {service.tagline}
                </div>

                {/* Short Description */}
                <p className="text-base-content/70 leading-relaxed text-sm mt-4">
                    {service.short}
                </p>

                {/* Feature List (first 3 visible) */}
                <ul className="mt-4 space-y-2 text-sm">
                    {service.features.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                            <span className="text-primary">✔</span>
                            {item}
                        </li>
                    ))}
                </ul>

                {/* More Features (DaisyUI Collapse) */}
                {service.features.length > 3 && (
                    <div className="collapse collapse-arrow bg-base-200/50 rounded-lg mt-3 text-sm">
                        <input type="checkbox" />
                        <div className="collapse-title text-xs text-base-content/50">
                            View all features
                        </div>
                        <div className="collapse-content">
                            <ul className="mt-2 space-y-2">
                                {service.features.slice(3).map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 opacity-80">
                                        <span className="text-primary">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Services;
