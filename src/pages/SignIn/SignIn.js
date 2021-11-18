import { React, useEffect, useState } from 'react'
import image from '../../images/office-2.jpeg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function SignIn() {
  const [pass, setPass] = useState('password')
  const [eye, setEye] = useState('fa fa-eye-slash')

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  // const [error, setError] = useState('')
  // const handleClick = () => {
  //   setErrorMessage("Name or password is incorrect!")

  const onClickEye = () => {
    if (pass === 'password') {
      setPass('text')
      setEye('fa fa-eye')
    } else {
      setPass('password')
      setEye('fa fa-eye-slash')
    }
  }

  const tokenAdmin = localStorage.getItem('tokenAdmin');
  const tokenUser = localStorage.getItem('tokenUser');

  useEffect(() => {
    if(tokenAdmin){
      navigate('/home');
    }
    else if(tokenUser){
      navigate('/dashboard');
    }
    else {
      navigate('/')
    }
  },[tokenAdmin,tokenUser])
  const onSubmitForm = async(e) => {
    e.preventDefault()
    try{
      const result = await axios.post(`${process.env.REACT_APP_API_URL}api/login`,{name, password});
      console.log(result);
      if(result.data.status === 200){
        if(result.data.response.user.admin === true){
          localStorage.setItem("tokenAdmin",JSON.stringify(result.data.response.token));
          navigate('/home');
        }
        else if(result.data.response.user.admin === false){
          localStorage.setItem("tokenUsers",JSON.stringify(result.data.response.token));
          navigate('/dashboard')
        }
      }
    }
    catch(error){
      setName(name);
      setPassword('');
    }
  }
  return (
      <div className="main">
        <div className="row">
          <div className="left-side col-md-6 col-sm-12">
            <img src={image} alt="background" className="back-image" />
          </div>
          <div className="right-side col-md-6 col-sm-12 d-flex flex-column justify-content-center px-5">
            <h1>
              Welcome to
              <span className="d-block"> Office Administration System</span>
            </h1>
            <p>We make job life easy for everone</p>
            <form className="my-3" onSubmit={onSubmitForm}>
              <div className="form-group mb-3">
                <label>User Name</label>
                <input
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                    type="text"
                    class="form-control"
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
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                />
                <span className="togglePassword" onClick={onClickEye}>
                <i className={eye}></i>
              </span>
              </div>
              <button type="submit" className="m-2 btn btn-danger my-3">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default SignIn
