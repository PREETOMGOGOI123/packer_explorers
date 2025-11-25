import {whyUs} from '../../data/homepageData.js'
import SectionIdentifier from '../ui/SectionIdentifier.jsx'

const WhyTrustUs = () => {

    return (
        <section className="py-30" id="why-trust-us">
            <div className="container mx-auto px-6">
                <SectionIdentifier>Why Trust Us</SectionIdentifier>

                {/* Badges */}
                <div className="flex flex-wrap gap-8 items-center justify-center mb-16">
                    {whyUs.badges.map((badge) => (
                        <div
                            key={badge.id}
                            className={`badge badge-base-200 text-md rounded-md p-5 shadow-sm ${badge.class}`}
                        >
                            💨 &nbsp; {badge.text}
                        </div>
                    ))}
                </div>

                {/* Owner Info Section */}
                <div className="hero  rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="hero-content flex-col md:flex-row gap-10">

                        {/* Image */}
                        <img
                            src={whyUs.ownerInfo.data}
                            alt={whyUs.ownerInfo.alt}
                            className="max-w-xs rounded-full shadow-2xl border-4 border-primary"
                        />

                        {/* Text Section */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-3 text-primary">
                                {whyUs.ownerInfo.name}
                            </h3>

                            <p className="text-lg opacity-90 leading-relaxed mb-4">
                                {whyUs.ownerInfo.bio1}
                            </p>

                            <p className="opacity-90 leading-relaxed mb-6">
                                {whyUs.ownerInfo.bio2} <em>“{whyUs.ownerInfo.quote}”</em>
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyTrustUs;
