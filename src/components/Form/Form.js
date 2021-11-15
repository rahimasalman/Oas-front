import { React, useState } from 'react'

function Form() {
  const [pass, setPass] = useState('password')
  const [eye, setEye] = useState('fa fa-eye-slash')

  const onClickEye = () => {
    if (pass === 'password') {
      setPass('text')
      setEye('fa fa-eye')
    } else {
      setPass('password')
      setEye('fa fa-eye-slash')
    }
  }

  return (
    <>
      <div className="form-group mb-3">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type={pass}
          className="form-control"
          id="exampleInputPassword1"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        />
        <span className="togglePassword" onClick={onClickEye}>
          <i className={eye}></i>
        </span>
      </div>
    </>
  )
}

export default Form
