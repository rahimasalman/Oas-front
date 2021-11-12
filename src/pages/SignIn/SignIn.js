import React from 'react'
import image from '../../images/office-2.jpeg'
import Button from '../../components/Button/Button'
import Form from '../../components/Form/Form'
import { Link } from "react-router-dom";

function SignIn() {
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
                    <Form/>

                    <Button
                        text="Sign In"/>
                    <p>
                       Do not have an accout ?
                        <Link to="/" className="m-2">Create one</Link>

                    </p>
                </form>
            </div>
        </div>
    )
}

export default SignIn
