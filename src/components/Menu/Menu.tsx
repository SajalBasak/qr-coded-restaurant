import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import { Fire } from 'react-bootstrap-icons';
import "./Menu.scss";
import ItemModal from "../ItemModal/ItemModal";

const Menu = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <div className="container-fluid menu-container">
                <Nav defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="#scrollspyHeading1">Popular (6)</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="#scrollspyHeading2">Specialities - Hot Drinks (9)</Nav.Link>
                    </Nav.Item>
                </Nav>
                {/* <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex={0}>
                <h4 id="scrollspyHeading1">First heading</h4>
                <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                <h4 id="scrollspyHeading2">Second heading</h4>
                <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                <h4 id="scrollspyHeading3">Third heading</h4>
                <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                <h4 id="scrollspyHeading4">Fourth heading</h4>
                <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                <h4 id="scrollspyHeading5">Fifth heading</h4>
                <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
            </div> */}
                <div className="d-flex align-items-center mt-3 mb-1">
                    <Fire className="popular" size={22} /><span className="mx-1 popular-text fw-bold">Popular</span>
                </div>
                <h6 className="text-muted">Most ordered right now.</h6>
                <div className="">
                    <Card className="w-100 my-3 container" onClick={() => setModalShow(true)}>
                        <Card.Body className="row">
                            <div className="col-7">
                                <Card.Title>
                                    <span style={{ fontSize: "17px" }}>Chicken Momo</span>
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Tk 450</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text
                                </Card.Text>
                            </div>
                            <div className="col-5">
                                <img src="https://images.deliveryhero.io/image/fd-bd/Products/928328.jpg" alt="Chicken Momo" className="rounded menu-img"></img>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <ItemModal
                isOpen={modalShow}
                onClose={() => setModalShow(false)}
            />
        </>
    );
};

export default Menu;
