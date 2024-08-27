import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Sheet } from 'react-modal-sheet';
import { PlusCircle, DashCircle } from "react-bootstrap-icons";
import "./ItemModal.scss";

const ItemModal = (props: any) => {

    return (
        // <Modal
        //     {...props}
        //     size="lg"
        //     aria-labelledby="contained-modal-title-vcenter"
        //     style={{position: "absolute", bottom: 0, margin: 0, width: "100%"}}
        // >
        //     <Modal.Header closeButton>
        //         <Modal.Title id="contained-modal-title-vcenter">
        //             Modal heading
        //         </Modal.Title>
        //     </Modal.Header>
        //     <Modal.Body>
        //         <h4>Centered Modal</h4>
        //         <p>
        //             Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        //             dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        //             consectetur ac, vestibulum at eros.
        //         </p>
        //     </Modal.Body>
        //     <Modal.Footer>
        //         {/* <Button onClick={props.onHide}>Close</Button> */}
        //     </Modal.Footer>
        // </Modal>
        <Sheet {...props}>
            <Sheet.Container className="overflow-auto sheet-container">
                {/* <Sheet.Header /> */}
                <img src="https://images.deliveryhero.io/image/fd-bd/Products/928328.jpg" alt="Chicken Momo" className="rounded h-50"></img>
                <Sheet.Content>
                    <div className="m-3">
                        <div className="fw-bold" style={{ fontSize: "20px" }}>Chicken Momo</div>
                        <div className="mt-2">Stuffed with minced chicken, coriander, red chili served with chili soy</div>
                        <div className="fw-bold mt-2" style={{ fontSize: "20px" }}>Tk 450</div>
                        <div className="fw-bold mt-5" style={{ fontSize: "17px" }}>Special instructions</div>
                        <div className="mt-2">Special requests are subject to the restaurant's approval. Tell us here!</div>
                        <div className="instruction">
                            <Form className="mt-2">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={3} placeholder="e.g. No mayo" />
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </Sheet.Content>
                <Navbar fixed="bottom" bg="light">
                    <Nav className="me-auto d-flex align-items-center mx-3 my-2">
                        <DashCircle className="mx-2 cart" size={25} /> 1 <PlusCircle className="mx-2 cart" size={25} /><Button className="add-cart px-5">Add to cart</Button>
                    </Nav>
                </Navbar>
            </Sheet.Container>
            <Sheet.Backdrop />
        </Sheet>
    );
};

export default ItemModal;
