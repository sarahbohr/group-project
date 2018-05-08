import React from 'react'

const Form = () => (
  <form>
    <div className="form-row">
      <div className="form-group col">
        <label for="inputEmail4">Brewery Name</label>
        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
      </div>
      <div className="form-group">
        <label for="inputPassword4">Type of Beer</label>
        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
      </div>
    </div>
    <div className="form-group">
      <label for="inputAddress">Brewery Address</label>
      <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
    </div>
    <div className="form-group col">
      <label for="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip" />
    </div>
    <button type="submit" className="btn btn-primary">Sign in</button>
  </form>
)

export default Form