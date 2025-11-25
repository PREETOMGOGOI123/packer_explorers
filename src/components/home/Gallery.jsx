import React from "react";

const Gallery = () => {
    return (
        <section className="py-20 bg-base-200">
            <div className="max-w-6xl mx-auto px-4">

                {/* Better heading */}
                <div className="text-center mb-12">
                    <p className="text-base font-medium text-base-content/70 mb-3">
                        Gallery
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-6">
                        Our Work in Action
                    </h2>
                    <p className="text-base-content/60 mt-2">
                        Real snapshots from our day-to-day operations across Northeast India.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                    {/* LARGE TILE (unchanged image) */}
                    <GalleryTileLarge
                        title="Premium Transport Service"
                        subtitle="Professional loading & careful handling"
                        img="/images/tour_images/1.jpeg"
                    />

                    {/* SMALL TILES — same images, better captions */}
                    <GalleryTile
                        title="Food Deliveries"
                        img="/images/tour_images/2.jpeg"
                    />

                    <GalleryTile
                        title="Tech Equipment Transport"
                        img="/images/tour_images/3.jpeg"
                    />

                    <GalleryTile
                        title="Travel Assistance"
                        img="/images/tour_images/4.jpeg"
                    />

                    <GalleryTile
                        title="Art & Decor Shift"
                        img="/images/tour_images/5.jpeg"
                    />

                    <GalleryTile
                        title="Fitness Equipment Move"
                        img="/images/tour_images/6.jpeg"
                    />

                    <GalleryTile
                        title="Furniture Shifting"
                        img="/images/tour_images/7.jpeg"
                    />

                    <GalleryTile
                        title="Sports Gear Transport"
                        img="/images/tour_images/8.jpeg"
                    />

                    <GalleryTile
                        title="Cricket Kits Delivery"
                        img="/images/tour_images/9.jpeg"
                    />

                </div>
            </div>
        </section>
    );
};

const GalleryTileLarge = ({ title, subtitle, img }) => (
    <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
        <img src={img} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 p-5 text-white">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p>{subtitle}</p>
            </div>
        </div>
    </div>
);

const GalleryTile = ({ title, img }) => (
    <div className="relative overflow-hidden rounded-2xl shadow-lg group">
        <img src={img} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-lg font-bold text-white">{title}</h4>
            </div>
        </div>
    </div>
);

export default Gallery;
