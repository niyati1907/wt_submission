import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function AddEditLaptop() {
    const { id } = useParams();  
    const appURL = 'http://localhost:8888/Laptop/';
    const navigate = useNavigate();

    const [data, setData] = useState({
        lapTopName: '',
        LaptopImage: '',
        LaptopRAM: '',
        LaptopHD: '',
        LaptopProcessor: '',
        LaptopGraphicsCard: '',
        LapTopPrice: '',
        id: ''
    });

    useEffect(() => {
        if (id) {
            fetch(`${appURL}${id}`)
                .then(res => res.json())
                .then(laptopData => setData(laptopData))
                .catch(err => console.error('Error fetching laptop data:', err));
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`,
        }).then((result) => {
            if (result.isConfirmed) {
                const method = id ? 'PUT' : 'POST';  
    
                fetch(`${appURL}${id || ''}`, {
                    method: method,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire('Success!', `Laptop ${id ? 'updated' : 'added'} successfully!`, 'success');
                        navigate('/home');  // Redirect back to home page
                    })
                    .catch(error => {
                        Swal.fire('Error!', `Failed to ${id ? 'update' : 'add'} laptop.`, 'error');
                        console.error('Error:', error);
                    });
            } else if (result.isDenied) {
                navigate('/home'); 
                Swal.fire('Changes are not saved', '', 'info');
            }
        });
    };
    

    return (
        <div className="container mt-4">
                        <h2>{id ? 'Edit' : 'Add'} a Laptop</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="lapTopName" className="form-label">Laptop Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="lapTopName" 
                        name="lapTopName" 
                        value={data.lapTopName} 
                        onChange={(e)=>{setData({...data, lapTopName:e.target.value})}}
                        required 
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="LaptopImage" className="form-label">Image URL</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="LaptopImage" 
                        name="LaptopImage" 
                        value={data.LaptopImage} 
                        onChange={(e)=>{setData({...data, LaptopImage:e.target.value})}}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="LaptopRAM" className="form-label">RAM</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="LaptopRAM" 
                        name="LaptopRAM" 
                        value={data.LaptopRAM} 
                        onChange={(e)=>{setData({...data, LaptopRAM:e.target.value})}}
                        required 
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="LaptopHD" className="form-label">Hard Drive</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="LaptopHD" 
                        name="LaptopHD" 
                        value={data.LaptopHD} 
                        onChange={(e)=>{setData({...data, LaptopHD:e.target.value})}}
                        required 
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="LaptopProcessor" className="form-label">Processor</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="LaptopProcessor" 
                        name="LaptopProcessor" 
                        value={data.LaptopProcessor} 
                        onChange={(e)=>{setData({...data, LaptopProcessor:e.target.value})}}
                        required 
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="LaptopGraphicsCard" className="form-label">Graphics Card</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="LaptopGraphicsCard" 
                        name="LaptopGraphicsCard" 
                        value={data.LaptopGraphicsCard} 
                        onChange={(e)=>{setData({...data, LaptopGraphicsCard:e.target.value})}}
                        required 
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="LapTopPrice" className="form-label">Price ($)</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="LapTopPrice" 
                        name="LapTopPrice" 
                        value={data.LapTopPrice} 
                        onChange={(e)=>{setData({...data, LapTopPrice:e.target.value})}}
                        required 
                    />
                </div>
                {!id && (
            <div className="mb-3">
                <label htmlFor="id" className="form-label">ID</label>
                <input 
                    type="number" 
                    className="form-control" 
                    id="id" 
                    name="id" 
                    value={data.id} 
                    onChange={(e) => setData({ ...data, id: e.target.value })} 
                    required 
                />
            </div>
        )}
                <button type="submit" className="btn btn-success">{id ? 'Update' : 'Add'} Laptop</button>
            </form>
        </div>
    );

}

export default AddEditLaptop;
