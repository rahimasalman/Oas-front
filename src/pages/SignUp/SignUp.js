import { React, useState } from 'react'
import image from '../../images/office-2.jpeg'
import Button from '../../components/Button/Button'
import Form from '../../components/Form/Form'
import { Link } from 'react-router-dom'

function SignUp() {
  const [confirmPass, setConfirmPass] = useState('password')
  const [confirmEye, setConfirmEye] = useState('fa fa-eye-slash')

  const onClickEye = () => {
    if (confirmPass === 'password') {
      setConfirmPass('text')
      setConfirmEye('fa fa-eye')
    } else {
      setConfirmPass('password')
      setConfirmEye('fa fa-eye-slash')
    }
  }
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
              type={confirmPass}
              class="form-control"
              id="exampleInputPassword1"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            />
            <span className="togglePassword" onClick={onClickEye}>
              <i className={confirmEye}></i>
            </span>
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
