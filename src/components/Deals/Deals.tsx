import React from "react";
import Card from 'react-bootstrap/Card';
import { TicketPerforated } from 'react-bootstrap-icons';
import "./Deals.scss";

const Deals = () => {

    return (
        <div className="container-fluid mt-5 deals-container">
            <h6>Available deals</h6>
            <div className="deals-wrapper">
                <Card className="item">
                    <Card.Body>
                        <Card.Title>
                            <TicketPerforated className="discount" /><span className="text-resizer-md mx-1">Tk 100 off (BANKASIA100)</span>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            <span className="text-resizer-sm">Min. order Tk 399. Valid for all items. Use in cart.</span>
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
                <Card className="item">
                    <Card.Body>
                        <Card.Title>
                            <TicketPerforated className="discount" /><span className="text-resizer-md mx-1">Tk 100 off (BANKASIA100)</span>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            <span className="text-resizer-sm">Min. order Tk 399. Valid for all items. Use in cart.</span>
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
                <Card className="item">
                    <Card.Body>
                        <Card.Title>
                            <TicketPerforated className="discount" /><span className="text-resizer-md mx-1">Tk 100 off (BANKASIA100)</span>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            <span className="text-resizer-sm">Min. order Tk 399. Valid for all items. Use in cart.</span>
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Deals;
