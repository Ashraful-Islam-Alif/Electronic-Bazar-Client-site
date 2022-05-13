import phone1 from '../SmartPhone/phone1.jpg'
import phone2 from '../SmartPhone/phone2.jpg'
import phone3 from '../SmartPhone/phone3.jpg'
import phone4 from '../SmartPhone/phone4.jpg'
import './SmartPhone.css'

const SmartPhone = () => {

    return (
        <div className='container '>
            <h2 className='text-primary fw-bold fst-italic text-center m-5'>SmartPhone</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card h-100">
                        <div className=''>
                            <img src={phone1} className="card-img-top hover1" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">iPhone 13pro</h5>
                            <p><small>Rating: 4.9</small></p>
                            <p className="card-text">The iPhone 13 Pro display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.06 inches diagonally (actual viewable area is less).</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={phone2} className="card-img-top hover1" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Samsung Galaxy S22 Ultra</h5>
                            <p><small>Rating: 4.8</small></p>
                            <p className="card-text">Face Detection autofocus, Dual Pixel autofocus, Exposure compensation, ISO control, Continuos Shooting, High Dynamic Range mode (HDR), Digital Zoom, Auto Flash, Face detection, Touch to focus</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={phone3} className="card-img-top hover1" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">iPhone XR </h5>
                            <p><small>Rating: 4.6</small></p>
                            <p className="card-text">Quad-LED dual-tone flash, HDR (photo/panorama)</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={phone4} className="card-img-top hover1" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Samsung Galaxy A32 </h5>
                            <p><small>Rating: 4.7</small></p>
                            <p className="card-text">Exposure compensation, ISO control, Continuos Shooting, High Dynamic Range mode (HDR), Digital Zoom, Auto Flash, Digital image stabilization, Touch to focus, LED flash, panorama.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmartPhone;