import React, { useEffect, useState } from "react";
import axiosInstance from "../axios";

const Business = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        phone: "",
        location: "",
        latitude: 0.0,
        longitude: 0.0,
    });
    const [logo, setLogo] = useState(null);
    const [images, setImages] = useState([]);
    const [business_list, setBusinessList] = useState([]);

    const fetchList = async () => {
        const response = await axiosInstance.get("/admin/business/list", {
            headers: {
                "Content-Type": "multipart/form-data", // important for files
            },
            });
        setBusinessList(response.data);
    };
    useEffect(() => {
        fetchList();
    }, []);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogo = (e) => {
        setLogo(e.target.files[0]);
    }

    const handleImages = (e) => {
        setImages([...e.target.files]); // convert FileList → array
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("name", formData.name);
        data.append("description", formData.description);
        data.append("phone", formData.phone);
        data.append("location", formData.location);
        data.append("latitude", formData.latitude);
        data.append("longitude", formData.longitude);
        if (logo) {
            console.log(logo);
            data.append("logo", logo);
        }

        if (images && images.length > 0) {
            images.forEach((img) => {
            data.append("images", img); // append one by one
            });
        }
        for (let [key, value] of data.entries()) {
            console.log(key, value);
        }
        try {
            await axiosInstance.post("/admin/business/create", data, {
            headers: {
                "Content-Type": "multipart/form-data", // important for files
            },
            });
            fetchList();
            alert("Uploaded successfully!");
        } catch (err) {
        console.error(err);
        alert("Error uploading");
        }
    }

    return <div className='content px-3 py-4'>
        <h3 className="fw-bold fs-4 mb-3">
            Байгууллага бүртгэл
        </h3>
        <div className="row">
            <div className="col-6 cal-md-6">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input 
                        className="form-control" 
                        type="text" 
                        name="name"
                        placeholder="Байгууллагын нэр" 
                        value={formData.name}
                        onChange={handleChange}
                        ></input>
                    </div>
                    <div className="mb-3">
                        <input 
                        className="form-control" 
                        type="text" 
                        name="location"
                        placeholder="байршил" 
                        value={formData.location}
                        onChange={handleChange}
                        ></input>
                    </div>
                    <div className="mb-3">
                        <input 
                        className="form-control" 
                        type="number" 
                        name="phone"
                        placeholder="Phone number" 
                        aria-label="default input example"
                        value={formData.phone}
                        onChange={handleChange}
                        ></input>
                    </div>
                    <div className="mb-3">
                        <input 
                        className="form-control" 
                        type="number" 
                        step="0.01"
                        name="latitude"
                        placeholder="Latitude" 
                        aria-label="default input example"
                        value={formData.latitude}
                        onChange={handleChange}
                        ></input>
                    </div>
                    <div className="mb-3">
                        <input 
                        className="form-control" 
                        type="number" 
                        step="0.01"
                        name="longitude"
                        placeholder="Longitude" 
                        aria-label="default input example"
                        value={formData.longitude}
                        onChange={handleChange}
                        ></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> Байгууллагын лого </label>
                        <input type="file" onChange={handleLogo}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> Зурагууд </label>
                        <input type="file" multiple onChange={handleImages}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> Дэлгэрэнгүй </label>
                        <textarea 
                            className="form-control" 
                            rows="3" 
                            name="description" 
                            value={formData.description} 
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mb-3"> Хадгалах </button>
                </form>
            </div>
            <div className="col-6 cal-md-6">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Нэр
                            </th>
                            <th>
                                Дэлгэрэнгүй
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {business_list.length > 0 ? (
                            business_list.map((biz, index) => (
                            <tr key={biz.id}>
                                <td>{index + 1}</td>
                                <td>{biz.name || "—"}</td>
                                <td>{biz.description || "—"}</td>
                            </tr>
                            ))
                        ) : (
                            <tr>
                            <td colSpan="3" className="text-center">No businesses found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

export default Business;