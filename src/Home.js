import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Nav, Navbar, NavItem, NavbarBrand, Row, Col } from 'reactstrap'
function Home() {

    const tokenAdmin = localStorage.getItem('tokenAdmin');
  const [users, setUsers] = useState([])

    const deleteUser = (id) => {
        axios
            .delete(`${process.env.REACT_APP_API_URL}api/delete/${id}`, {
                headers: {
                    Authorization: 'Bearer 48|KLRu1k2HXCX2RN9CPRlHCBWshR69CU37rtpxa9kG',
                },
            })
            .then((res) => {
                getUsers()
            })
            .catch((err) => console.log(err));
    }

    const navigate = useNavigate()

  const getUsers = () => {
    axios
        .get(`${process.env.REACT_APP_API_URL}api/index`, {
          headers: {
            Authorization: 'Bearer 48|KLRu1k2HXCX2RN9CPRlHCBWshR69CU37rtpxa9kG',
          },
        })
        .then((res) => {
          if (res.data.users) {
            setUsers(res.data.users)
          } else {
            setUsers([])
          }
        })
        .catch((err) => console.log(err))
  }

    const logoutHandler = () => {
        if(tokenAdmin){
            localStorage.removeItem('tokenAdmin');
        }
    }

    useEffect(() => {
        tokenAdmin ? getUsers() : navigate('/')
    }, [tokenAdmin, navigate])
  return (
      <div className="container home">
        <Navbar color="dark" dark className="mb-3">
          <Row className="w-100 mx-3">
            <Col lg={9} >
              <NavbarBrand href="/home" className="m-3"> OAS Team</NavbarBrand>
            </Col>
            <Col lg={3}
            >
              <Nav>
                <NavItem>
                  <Link className="btn btn-primary m-2" to="/add">
                    Add User
                  </Link>
                    <Link className="btn btn-light m-2"
                          to="/"
                          onClick={logoutHandler}>
                   Log out
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
          {users.map((user, index) => {
            return (
                <tr key={index}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteUser(user.id)}>
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
}
export default Home