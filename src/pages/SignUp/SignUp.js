import React from 'react'
import image from '../../images/office-2.jpeg'
import Button from '../../components/Button/Button'
import Form from '../../components/Form/Form'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className="main row">
      <div className="left-side col-md-6 col-sm-12">
        <img src={image} alt="background" className="back-image" />
      </div>
      <div className="right-side col-md-6 col-sm-12 d-flex flex-column justify-content-center px-5">
        <h1>
          Welcome to
          <span className="d-block"> Office Administration System</span>
        </h1>
        <p>We make job life easy for everone</p>
        <form className="my-3">
          <Form />
          <div class="form-group mb-3">
            <label for="exampleInputPassword1">Confirm password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            />
          </div>
          <Button text="Sign Up" />
          <p>
            Already have an account?
            <Link to="/signin" className="m-2">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp
