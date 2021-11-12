import React from 'react';

function Form(props) {
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
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
              />
          </div>
      </>
    );
}

export default Form;