import React from "react";

export default function About() {
    return (
        <div className="bg-base-200">
            {/* About Us Section */}
            <section className="py-20 px-4 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 px-4">
                        <p className="text-sm text-primary font-semibold flex items-center justify-center gap-3 mb-3">
                            <span className="w-10 h-[2px] bg-primary/40"></span>
                            The Story
                            <span className="w-10 h-[2px] bg-primary/40"></span>
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-6">
                            About Us
                        </h2>
                        <p className="text-lg text-base-content/60 max-w-4xl mx-auto leading-relaxed">
                            We are a passionate team dedicated to delivering exceptional
                            digital solutions that drive growth and innovation for our
                            clients.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="bg-base-100 shadow-lg rounded-xl p-12 mb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Text Content */}
                            <div>
                                <h3 className="text-2xl font-semibold text-base-content mb-6">
                                    Who We Are
                                </h3>

                                <div className="space-y-4 text-base-content/70 leading-relaxed">
                                    <p className="text-lg">
                                        Founded in 2015, we have spent over 7+ years building a strong reputation as one of Northeast India’s most dependable transport and logistics service providers. From navigating the challenging terrains of the Northeast to handling time-critical deliveries, we have successfully completed thousands of goods transports, house and office shifting projects, and commercial vehicle assignments with exceptional reliability.

                                    </p>
                                    <p className="text-lg">
                                        What sets us apart is our commitment to safety, punctuality, and customer satisfaction. Over the years, we have proudly maintained a 100% customer satisfaction rate, ensuring every client receives professional, transparent, and personalized service.

                                    </p>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-6 mt-8">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-primary mb-2">
                                            250+
                                        </div>
                                        <div className="text-base-content/60">
                                            Projects Completed
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-primary mb-2">
                                            70+
                                        </div>
                                        <div className="text-base-content/60">
                                            Happy Clients
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-primary mb-2">
                                            7+
                                        </div>
                                        <div className="text-base-content/60">
                                            Years Experience
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-primary mb-2">
                                            50+
                                        </div>
                                        <div className="text-base-content/60">
                                            Vehicles Available
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Placeholder Image */}
                            <div className="bg-base-300 h-96 rounded-lg flex items-center justify-center overflow-hidden">
                                <img className="" src="/images/Indra.jpg" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
