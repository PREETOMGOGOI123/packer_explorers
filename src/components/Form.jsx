import { useState, useEffect } from 'react'
import { commercialVehicles } from "../data/homepageData.js";
import Select from 'react-select';
import { supabase } from '../config/supabaseClient.js';

export default function Form() {

    const [category, setCategory] = useState('');
    const [vehicle, setVehicle] = useState(null);

    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [days, setDays] = useState("");

    // ⭐ Today’s date (minimum allowed for date_from)
    const today = new Date().toISOString().split("T")[0];

    // Auto-calc integer number of days
    useEffect(() => {
        if (dateFrom && dateTo) {
            const from = new Date(dateFrom);
            const to = new Date(dateTo);

            const diffMs = to - from;
            const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

            setDays(diffDays >= 0 ? diffDays : 0);
        }
    }, [dateFrom, dateTo]);

    // Convert vehicle array to react-select format
    const vehicleOptions = commercialVehicles.map((vehicle) => ({
        value: vehicle.name,
        label: (
            <div className="flex items-center gap-2">
                <div className="bg-accent/20 p-2 rounded-full">
                    <img src={vehicle.icon_url} alt="icon" width="40" />
                </div>
                <span>{vehicle.name}</span>
            </div>
        ),
    }));

    function handleCategory(event) {
        setCategory(event.target.value);
    }

    // --------------------------
    // SUBMIT FORM TO SUPABASE
    // --------------------------
    async function handleSubmit(e) {
        e.preventDefault();

        // JS Validations
        if (dateFrom < today) {
            alert("❌ From Date cannot be earlier than today.");
            return;
        }

        if (dateTo && dateTo < dateFrom) {
            alert("❌ To Date cannot be earlier than From Date.");
            return;
        }

        const formData = new FormData(e.target);

        const data = {
            category: formData.get("category"),
            vehicle_type: vehicle?.value || "N/A",
            name: formData.get("name"),
            phone: formData.get("phone"),
            address: formData.get("address") || "N/A",
            destination: formData.get("destination") || "N/A",
            date_from: formData.get("date_from") || "N/A",
            date_to: formData.get("date_to") || "N/A",
            no_of_days: days || "N/A",
        };

        // ⭐ WhatsApp Message Formatting
        const message = `
*New Enquiry Received* 📩

*Category:* ${data.category}
*Vehicle:* ${data.vehicle_type}

*Name:* ${data.name}
*Phone:* ${data.phone}
*Address:* ${data.address}
*Destination:* ${data.destination}

*From:* ${data.date_from}
*To:* ${data.date_to}
*Total Days:* ${data.no_of_days}

Thank you 🙏
    `;

        const encodedMessage = encodeURIComponent(message);

        // ⭐ Your WhatsApp Number (Change this)
        const phoneNumber = "8011127009";

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Redirect user to WhatsApp
        window.open(whatsappURL, "_blank");

        // Reset form
        e.target.reset();
        setCategory("");
        setVehicle(null);
        setDateFrom("");
        setDateTo("");
        setDays("");
    }


    return (
        <div className="card w-full max-w-md bg-base-100/90 backdrop-blur-md shadow-lg rounded-xl border border-base-300">
            <div className="card-body p-6">

                <p className="mb-4 p-3 tracking-wider text-primary font-bold text-xl bg-primary/10 rounded-md">
                    ☎ +91 80111 27009
                </p>

                <h2 className="card-title mb-3 text-primary">Enquiry</h2>

                <form onSubmit={handleSubmit} className="space-y-3">

                    {/* ⭐ UPDATED CATEGORY DROPDOWN */}
                    <select
                        name="category"
                        required
                        className="select select-bordered w-full"
                        value={category}
                        onChange={handleCategory}
                    >
                        <option value="">— Select Category —</option>
                        <option value="Bike">Bike</option>
                        <option value="Car Rentals">Car Rentals</option>
                        <option value="House Office Shifting">House Office Shifting</option>
                        <option value="Tour Planner">Tour Planner</option>
                    </select>

                    {/* ⭐ SHOW VEHICLE LIST WHEN "Car Rentals" SELECTED */}
                    {category === "Car Rentals" && (
                        <div className="mt-4">
                            <label className="block font-medium mb-2">Select Vehicle Type</label>
                            <Select
                                options={vehicleOptions}
                                value={vehicle}
                                onChange={setVehicle}
                            />
                        </div>
                    )}

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        className="input input-bordered w-full"
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        className="input input-bordered w-full"
                    />

                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        className="input input-bordered w-full"
                    />

                    {/* Hide destination only for House Shifting */}
                    {category !== "House Office Shifting" && (
                        <input
                            type="text"
                            name="destination"
                            placeholder="Destination"
                            className="input input-bordered w-full"
                        />
                    )}

                    <div className="grid grid-cols-2 gap-2">
                        <input
                            type="date"
                            name="date_from"
                            min={today}
                            className="input input-bordered w-full"
                            onChange={(e) => setDateFrom(e.target.value)}
                        />

                        {category !== "House Office Shifting" && (
                            <input
                                type="date"
                                name="date_to"
                                min={dateFrom}
                                className="input input-bordered w-full"
                                onChange={(e) => setDateTo(e.target.value)}
                            />
                        )}
                    </div>

                    {category !== "House Office Shifting" && (
                        <input
                            type="number"
                            name="no_of_days"
                            placeholder="No. of Days"
                            readOnly
                            value={days}
                            className="input input-bordered w-full bg-base-200"
                        />
                    )}

                    <button type="submit" className="btn btn-primary w-full mt-2">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
