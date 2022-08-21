import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function NavBar() {
  return (
    <Navbar>
      <Link to="/"> Home </Link>
      <h1>
        <Link to="/snacks"> Snacks </Link>
      </h1>
      <Button className="justify-content-end me-4" variant="outline-dark">
        <Link to="/snacks/new">New Snack</Link>
      </Button>
    </Navbar>
  );
}
