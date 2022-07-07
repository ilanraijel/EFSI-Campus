import inscipcion from "./inscipcion.jpeg";
import './App.css';
import Carousel from 'react-bootstrap/Carousel';

function Carousel() {
  return (

  <div className="container">
    <div className="pt-4 pb-4">
      <div id="carouselExampleControls" class="carousel slide box-shadow" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={inscipcion} alt="Campus ORT"></img>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={inscipcion} alt="Campus ORT"></img>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={inscipcion} alt="Campus ORT"></img>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>

  );
}
export default Carousel;