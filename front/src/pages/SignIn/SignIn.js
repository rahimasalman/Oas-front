import { React, useEffect, useState } from 'react'
import image from '../../images/office-2.jpeg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import logo from '../../images/logo.svg'

function SignIn() {
  const [pass, setPass] = useState('password')
  const [eye, setEye] = useState('fa fa-eye-slash')

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const [namePassErr, setNamePassErr] = useState(false)
  const [err, setErr] = useState(false)

  const onClickEye = () => {
    if (pass === 'password') {
      setPass('text')
      setEye('fa fa-eye')
    } else {
      setPass('password')
      setEye('fa fa-eye-slash')
    }
  }

  const tokenAdmin = localStorage.getItem('tokenAdmin')
  const tokenUser = localStorage.getItem('tokenUser')

  useEffect(() => {
    if (tokenAdmin) {
      navigate('/home')
    } else if (tokenUser) {
      navigate('/dashboard')
    } else {
      navigate('/')
    }
  }, [tokenAdmin, tokenUser, navigate])

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_API_URL}api/login`,
        { name, password }
      )

      if (result.data.status === 200) {
        if (result.data.response.user.admin === true) {
          localStorage.setItem(
            'tokenAdmin',
            JSON.stringify(result.data.response.token)
          )
          navigate('/home')
        } else if (result.data.response.user.admin === false) {
          localStorage.setItem(
            'tokenUsers',
            JSON.stringify(result.data.response.token)
          )
          navigate('/dashboard')
        }
      }
    } catch (error) {
      setName(name)
      setPassword('')
      console.log(err)
      if (error.response.status === 422) {
        setErr(true)
      }
      if (error.response.status === 401) {
        setNamePassErr(true)
      }
    }
  }

  useEffect(() => {
    if (namePassErr === true || err === true) {
      const timeId = setTimeout(() => {
        // After 5 seconds set the show value to false
        if (namePassErr) {
          setNamePassErr(false)
        }
        if (err) {
          setErr(false)
        }
      }, 5000)

      return () => {
        clearTimeout(timeId)
      }
    }
  }, [err, namePassErr])

  return (
    <div className="main">
      <div className="row">
        <div className="left-side col-md-6 col-sm-12">
          <img src={logo} className="login-logo" alt="icon" />
          <img src={image} alt="background" className="back-image" />
        </div>
        <div className="right-side col-md-6 col-sm-12 d-flex flex-column justify-content-center px-5">
          <h1>
            Welcome to
            <span className="d-block"> Office Administration System</span>
          </h1>
          <p>We make job life easy for everone</p>
          <div
            className={`alert alert-danger text-center m-3 ${
              err === true ? 'd-block' : 'd-none'
            }`}
            role="alert">
            Name or password cannot be empty!
          </div>
          <div
            className={`alert alert-danger text-center m-3 ${
              namePassErr === true ? 'd-block' : 'd-none'
            }`}
            role="alert">
            Name or Password is incorrect!
          </div>
          <form className="my-3" onSubmit={onSubmitForm}>
            <div className="form-group mb-3">
              <label>User Name</label>
              <input
                onChange={(e) => {
                  setName(e.target.value)
                }}
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                type={pass}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />

              <span className="togglePassword" onClick={onClickEye}>
                <i className={eye}></i>
              </span>
            </div>
            <div className="form-group">
              <button className="btn btn-success float-right" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
