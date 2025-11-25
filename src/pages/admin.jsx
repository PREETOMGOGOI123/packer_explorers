import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";

const Admin = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch all bookings
    async function fetchBookings() {
        const { data, error } = await supabase
            .from("bookings")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Error fetching bookings:", error.message);
        } else {
            setBookings(data);
        }

        setLoading(false);
    }

    useEffect(() => {
        fetchBookings();
    }, []);

    if (loading) {
        return <div className="p-5 text-center text-lg">Loading bookings...</div>;
    }

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-4">All Bookings</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr className="bg-base-200">
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Category</th>
                        <th>Vehicle</th>
                        <th>Address</th>
                        <th>Destination</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Days</th>
                        <th>Date Added</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bookings.map((b) => (
                        <tr key={b.id}>
                            <td>{b.name}</td>
                            <td>{b.phone}</td>
                            <td>{b.category}</td>
                            <td>{b.vehicle_type || "-"}</td>
                            <td>{b.address || "-"}</td>
                            <td>{b.destination || "-"}</td>
                            <td>{b.date_from || "-"}</td>
                            <td>{b.date_to || "-"}</td>
                            <td>{b.no_of_days || "-"}</td>
                            <td>{new Date(b.created_at).toLocaleString()}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;
