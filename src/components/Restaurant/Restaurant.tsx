import React from "react";
import { StarFill } from "react-bootstrap-icons";
import "./Restaurant.scss";

const Restaurant = () => {

    return (
        <div className="container-fluid mt-3 restaurant-container">
            <div className="row">
                <div className="col-4 col-md-2">
                    <div className="restaurant-wrapper border border-dark rounded">
                        <img src="https://images.deliveryhero.io/image/fd-bd/bd-logos/cr6fk-logo.jpg" alt="Gloria Jean's Coffee-Gulshan 1 vendor logo" className="w-100 rounded"></img>
                    </div>
                </div>
                <div className="col-8 col-md-3">
                    <div className="text-truncate">
                        <span className="text-muted">Italian • Pizza • Fast • Food • Cafe • Mediterranean</span>
                    </div>
                    <h4 className="mt-3">Gloria Jean's Coffee-Gulshan 1</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-7 d-flex align-items-center text-resizer mt-2">
                    <StarFill color="#ff860d"/><span className="fw-bold mx-1">4.9/5</span><span>(1000+)</span><span className="mx-1 fw-bold reviews">See Reviews</span>
                </div>
            </div>
        </div>
    );
};

export default Restaurant;
