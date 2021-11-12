import React from 'react'
import image from '../../images/office-2.jpeg'

function SignUp() {
  return (
    <div className="main row">
      <div className="left-side col-lg-6 col-sm-12">
        <img src="" />
        <img src={image} alt="background" className="back-image" />
      </div>
      <div className="right-side col-lg-6 col-sm-12 d-flex flex-column justify-content-center px-5">
        <h1>
          Welcome to
          <span className="d-block"> Office Administration System</span>
        </h1>
        <p>We make job life easy for everone</p>
        <form className="my-3">
          <div class="form-group mb-3">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group mb-3">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            />
          </div>
          <div class="form-group mb-3">
            <label for="exampleInputPassword1">Confirm password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            />
          </div>
          <button type="submit" class="btn btn-danger my-3">
            Sign Up
          </button>
          <p>
            Already have an account?
            <a href="" className="m-2">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp
