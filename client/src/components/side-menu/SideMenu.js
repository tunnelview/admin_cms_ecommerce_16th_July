import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleShowSideMenu } from "../../pages/system-state/systemSlice";

export const SideMenu = () => {
  const dispatch = useDispatch();

  const { showSideMenu } = useSelector((state) => state.system);

  // useEffect(() => {}, [showSideMenu]);

  return (
    <>
      <Offcanvas
        show={showSideMenu}
        onHide={() => dispatch(toggleShowSideMenu())}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CMS Admin Pannel</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            <ListGroup.Item
              onClick={() => dispatch(toggleShowSideMenu())}
              className="fs-5"
            >
              <Link to="/dashboard" className="nav-link">
                <i class="fa-solid fa-gauge"></i> Dashboard
              </Link>
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => dispatch(toggleShowSideMenu())}
              className="fs-5"
            >
              <Link to="/categories" className="nav-link">
                <i class="fa-solid fa-list"></i> Categories
              </Link>
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => dispatch(toggleShowSideMenu())}
              className="fs-5"
            >
              <Link to="/products" className="nav-link">
                <i class="fa-solid fa-boxes-stacked"></i> Products
              </Link>
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => dispatch(toggleShowSideMenu())}
              className="fs-5"
            >
              <Link to="/payment-method" className="nav-link">
                <i class="fa-solid fa-credit-card"></i> Payment Method
              </Link>
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => dispatch(toggleShowSideMenu())}
              className="fs-5"
            >
              <Link to="/users" className="nav-link">
                <i class="fa-solid fa-users"></i> Users
              </Link>
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => dispatch(toggleShowSideMenu())}
              className="fs-5"
            >
              <Link to="/ordes" className="nav-link">
                <i class="fa-solid fa-people-carry-box"></i> Orders
              </Link>
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => dispatch(toggleShowSideMenu())}
              className="fs-5"
            >
              <Link to="/admin-profile" className="nav-link">
                <i class="fa-solid fa-user"></i> Profile
              </Link>
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => dispatch(toggleShowSideMenu())}
              className="fs-5"
            >
              <Link to="/settings" className="nav-link">
                <i class="fa-solid fa-gears"></i> Settings
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
