import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Carousel } from "react-bootstrap";
function HomePage() {
    const appURL = 'http://localhost:8888/Laptop/';  // Base URL for API

    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(appURL)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.error(err));
    }, []);

    const handleCardClick = (id) => {
        navigate(`/laptop/${id}`);
    }

    return (
        <>        
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/800x300?text=First+Slide"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First Slide</h3>
                            <p>Some description for the first slide.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/800x300?text=Second+Slide"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second Slide</h3>
                            <p>Some description for the second slide.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/800x300?text=Third+Slide"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third Slide</h3>
                            <p>Some description for the third slide.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        <div className="container mt-4">
            <div className="row">
                {data.map((item) => (
                    <div className="col-md-3 mb-4" key={item.id}>
                        <div className="card h-100" onClick={() => handleCardClick(item.id)}>
                            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRoW-do_ycr9ANh4TQICdG3ck61yoi1FZzm6u6Tq0XkUMcCdQHXhJeLjSHQbOP4a7Od2u_vELKC0sCiLdbSH210kSD0kaEeMva9swMNewXaXWphMLpTUU7UIg" className="card-img-top" alt={item.lapTopName} />
                            <div className="card-body">
                                <h5 className="card-title">{item.lapTopName}</h5>
                                <p className="card-text"><strong>Processor:</strong> {item.LaptopProcessor}</p>
                                <p className="card-text"><strong>RAM:</strong> {item.LaptopRAM}</p>
                                <p className="card-text"><strong>HD:</strong> {item.LaptopHD}</p>
                                <p className="card-text"><strong>Graphics Card:</strong> {item.LaptopGraphicsCard}</p>
                                <p className="card-text"><strong>Price:</strong> ${item.LapTopPrice}</p>
                        <button class="btn btn-primary">Details</button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>

    );
}

export default HomePage;
