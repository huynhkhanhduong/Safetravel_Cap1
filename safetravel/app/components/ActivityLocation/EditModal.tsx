import React, { useState } from "react";
import "./Location.css";

interface Location {
    id?: string;
    name: string;
    locationType: string;
    open_at: string;
    close_at: string;
    address: string;
}
interface ModalProps {
    item: Location | null;
    setAddLocation?: React.Dispatch<React.SetStateAction<boolean>>;
    setEditItem?: React.Dispatch<React.SetStateAction<Location | null>>;
    setDeleteItem?: React.Dispatch<React.SetStateAction<Location | null>>;
}
const EditModal: React.FC<ModalProps> = ({ item, setEditItem }) => {
    const [formData, setFormData] = useState<Location>(item as Location);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleClose = () => {
        setEditItem && setEditItem(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/activity-location/${formData.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                console.log('Location updated successfully:', result);
                setEditItem && setEditItem(null);
            } else {
                console.log('Error:', result);
            }
        } catch (error) {
            console.error("Error updating location:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="modal" style={{ display: 'block' }}>
            <div className="modal-content h-auto">
                <span className="close" onClick={handleClose}>&times;</span>
                <h3>Edit Location</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Location Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="locationType">Type</label>
                        <select
                            id="locationType"
                            name="locationType"
                            value={formData.locationType}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="Historical Site">Historical Site</option>
                            <option value="Natural Areas">Natural Areas</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="open_at">Open At</label>
                        <input
                            type="text"
                            id="open_at"
                            name="open_at"
                            value={formData.open_at}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="close_at">Close At</label>
                        <input
                            type="text"
                            id="close_at"
                            name="close_at"
                            value={formData.close_at}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-end">
                        <button
                            type="button"
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                            onClick={handleClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-[#326D7B] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditModal;
