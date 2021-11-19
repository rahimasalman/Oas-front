import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

const AddUser = () => {
  const [error, setError] = useState(false)

  const [user, setUser] = useState({
    username: '',
    email: '',
  })

  const navigate = useNavigate()

  const { username, email } = user

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (error === true) {
      const timeId = setTimeout(() => {
        // After 3 seconds set the show value to false
        setError(false)
      }, 5000)

      return () => {
        clearTimeout(timeId)
      }
    }
  }, [error])

  const submitHandler = (e) => {
    e.preventDefault()
    axios
      .post(
        `${process.env.REACT_APP_API_URL}api/register`,
        {
          name: user.username,
          email: user.email,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        console.log(res)
        setUser({
          username: '',
          email: '',
        })
        navigate('/home')
      })
      .catch((err) =>
        err.response.status === 422 ? setError(true) : setError(false)
      )
  }

  return (
    <>
      <h2 className="text-center mb-4">Add a user</h2>
      <div
        className={`alert alert-danger text-center m-3 ${
          error === true ? 'd-block' : 'd-none'
        }`}
        role="alert">
        Name or email address is invalid!
      </div>
      <Form className="container m-3" onSubmit={(e) => submitHandler(e)}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            name="username"
            placeholder="Enter Name"
            value={username}
            onChange={(e) => onInputChange(e)}></Input>
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Enter email"
            value={email}
            name="email"
            onChange={(e) => onInputChange(e)}></Input>
        </FormGroup>
        <Button type="submit" color="success">
          Submit
        </Button>
        <Link to="/home" className="btn btn-danger m-2">
          Cancel
        </Link>
      </Form>
    </>
  )
}

export default AddUser
