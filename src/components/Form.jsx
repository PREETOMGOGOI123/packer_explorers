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

        // ⭐ JS VALIDATIONS
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
            vehicle_type: vehicle?.value || null,
            name: formData.get("name"),
            phone: formData.get("phone"),
            address: formData.get("address"),
            destination: formData.get("destination"),
            date_from: formData.get("date_from"),
            date_to: formData.get("date_to"),
            no_of_days: days === "" ? null : days, // use auto-calculated integer
        };

        console.log("Sending to Supabase:", data);

        const { error } = await supabase.from("bookings").insert([data]);

        if (error) {
            alert("❌ Error: " + error.message);
        } else {
            alert("✅ Booking saved!");
            e.target.reset();
            setCategory("");
            setVehicle(null);
            setDateFrom("");
            setDateTo("");
            setDays("");
        }
    }

    return (
        <div className="card w-full max-w-md bg-base-100/90 backdrop-blur-md shadow-lg rounded-xl border border-base-300">
            <div className="card-body p-6">
                <p className="mb-4 p-3 tracking-wider text-primary font-bold text-xl bg-primary/10 rounded-md">
                    ☎ +91 80111 27009
                </p>

                <h2 className="card-title mb-3 text-primary">Enquiry</h2>

                <form onSubmit={handleSubmit} className="space-y-3">

                    <select
                        name="category"
                        required
                        className="select select-bordered w-full"
                        value={category}
                        onChange={handleCategory}
                    >
                        <option value="">— Select Category —</option>
                        <option value="Commercial Vehicles">Commercial Vehicles</option>
                        <option value="Bike">Bike</option>
                        <option value="House Office Shifting">House Office Shifting</option>
                        <option value="Tour Planner">Tour Planner</option>
                    </select>

                    {category === 'Commercial Vehicles' && (
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
                            min={today}                       // ⭐ cannot pick past date
                            className="input input-bordered w-full"
                            onChange={(e) => setDateFrom(e.target.value)}
                        />

                        {category !== "House Office Shifting" && (
                            <input
                                type="date"
                                name="date_to"
                                min={dateFrom}                  // ⭐ cannot pick earlier than from date
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
