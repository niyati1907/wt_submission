import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function LaptopDetail() {
    const { id } = useParams();  // Extract the laptop ID from the URL
    const appURL = `http://localhost:8888/Laptop/${id}`;
    const [laptop, setLaptop] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(appURL)
            .then(res => res.json())
            .then(res => setLaptop(res))
            .catch(err => console.error(err));
    }, [id]);

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${appURL}`, { method: 'DELETE' })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire("Deleted!", "Your laptop has been deleted.", "success");
                        navigate('/home');  // Redirect to the home page after deletion
                    })
                    .catch((error) => {
                        console.error("Error deleting:", error);
                        Swal.fire("Error!", "An error occurred while deleting.", "error");
                    });
            }
        });
    };

    const handleEdit = () => {
        navigate(`/add-laptop/${id}`); // Navigate to the edit page
    };

    if (!laptop) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRoW-do_ycr9ANh4TQICdG3ck61yoi1FZzm6u6Tq0XkUMcCdQHXhJeLjSHQbOP4a7Od2u_vELKC0sCiLdbSH210kSD0kaEeMva9swMNewXaXWphMLpTUU7UIg" alt={laptop.lapTopName} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h1>{laptop.lapTopName}</h1>
                    <p><strong>Processor:</strong> {laptop.LaptopProcessor}</p>
                    <p><strong>RAM:</strong> {laptop.LaptopRAM}</p>
                    <p><strong>HD:</strong> {laptop.LaptopHD}</p>
                    <p><strong>Graphics Card:</strong> {laptop.LaptopGraphicsCard}</p>
                    <p><strong>Price:</strong> ${laptop.LapTopPrice}</p>
                    <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
                    <button className="btn btn-danger ms-2" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default LaptopDetail;
