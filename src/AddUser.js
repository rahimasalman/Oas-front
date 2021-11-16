import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

const AddUser = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
  })

  const { username, email } = user
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <h2 className="text-center mb-4">Add a user</h2>
      <Form className="container m-3" onSubmit={(e) => onSubmit(e)}>
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
