import React from "react";
import "../../App.css"
import { useNavigate, Link } from "react-router-dom";


const Page2 = (props) => {
  const navigate = useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem("name")
    navigate('/login')
  }

  return (
    <>
      <div className="form-container">

        <form>
          <h1>Please fill the Survey Form</h1>
          <p onClick={handleLogout} className="p">Logout</p>
          <div className="card">
             <div>
              <span>Did you get product in time?</span><br></br>
              <input type="text" placeholder="yes or no..." id="intime" name="intime" onChange={(e) => { props.setFormState({ ...props.formState, intime: e.target.value }) }} className="input"></input>
            </div>
            <div>
              <span>Product condition :</span><br></br>
              <input type="text" placeholder="good or bad..." id="productcond" name="productcond" onChange={(e) => { props.setFormState({ ...props.formState, productcond: e.target.value }) }} className="input"></input>
            </div>
            <div>
              <span>Quakity of pakaging :</span><br></br>
              <input type="text" placeholder="good or bad..." id="pakagingquality" name="pakagingquality" onChange={(e) => { props.setFormState({ ...props.formState, pakagingquality: e.target.value }) }} className="input"></input>
            </div>
            <div>
              <span>Any scratch to the product :</span><br></br>
              <input type="text" placeholder="yes or no..." id="isscratch" name="isscratch" onChange={(e) => { props.setFormState({ ...props.formState, isscratch: e.target.value }) }} className="input"></input>
            </div>
            <div>
              <span>Did it match your expectation?</span><br></br>
              <input type="text" placeholder="yes or no..." id="expectation" name="expectation" onChange={(e) => { props.setFormState({ ...props.formState, expectation: e.target.value }) }} className="input"></input>
            </div>
            <div>
              <span>Was it differnet from the product images?</span><br></br>
              <input type="text" placeholder="yes or no..." id="isdifferent" name="isdifferent" onChange={(e) => { props.setFormState({ ...props.formState, isdifferent: e.target.value }) }} className="input"></input>
            </div>
          </div> 
          <div className="links">
            <Link to="/form" className="link">Prev</Link>
            <Link to="/form3" className="link">Next</Link>
          </div>
        </form>

      </div>
    </>
  )
}

export default Page2;