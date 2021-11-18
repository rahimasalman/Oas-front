import axios from 'axios'
import React, { useState, useEffect, setStatus } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavItem, NavbarBrand, Row, Col } from 'reactstrap'
import data from './data.js'

return (
  <div className="container">
    <Navbar color="dark" dark className="mb-3">
      <Row className="w-100 mx-3">
        <Col lg={9}>
          <NavbarBrand href="/home"> OAS Team</NavbarBrand>
        </Col>
        <Col lg={3}>
          <Nav>
            <NavItem>
              <Link className="btn btn-primary" to="/add">
                Add User
              </Link>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </Navbar>

    <table className="table table-striped border ">
      <thead className=" bg-dark text-white ">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Operations</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, index) => {
          return (
            <tr key={index}>
              <th scope="row">{item.ID}</th>
              <td>{item.Username}</td>
              <td>{item.Email}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteUser(item.ID)}>
                  Delete
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
)

export default Home