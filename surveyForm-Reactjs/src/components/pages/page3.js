import React from "react";
import "../../App.css"
import { useNavigate, Link } from "react-router-dom";


const Page3 = (props) => {
  const navigate = useNavigate();

  const handleForm = () => {
    console.log(props.formState)
    props.setSurveyList([...props.surveyList, props.formState])
    console.log(props.surveyList)
    alert("Form submitted sucessfully ! Thanks for spending your valuable time.")
    navigate("/login")
  }
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
              <span>Quality of Product :</span><br></br>
              <input type="text" placeholder="good or bad..." id="productquality" name="productquality" onChange={(e) => { props.setFormState({ ...props.formState, productquality: e.target.value }) }} className="input"></input>
            </div>
            <div>
              <span>Did you apply any coopon?</span><br></br>
              <input type="text" placeholder="yes or no..." id="iscoopon" name="iscoopon" onChange={(e) => { props.setFormState({ ...props.formState, iscoopon: e.target.value }) }} className="input"></input>
            </div>
            <div>
              <span>Did you get any discount?</span><br></br>
              <input type="text" placeholder="yes or no..." id="isdiscount" name="isdiscount" onChange={(e) => { props.setFormState({ ...props.formState, isdiscount: e.target.value }) }} className="input"></input>
            </div>
            <div>
              <span>Do you want to reaturn the produst?</span><br></br>
              <input type="text" placeholder="yes or no..." id="isreturn" name="isreturn" onChange={(e) => { props.setFormState({ ...props.formState, isreturn: e.target.value }) }} className="input"></input>
            </div>
            <div>
              <span>Reason for returning :</span><br></br>
              <input type="text" placeholder="Reason..." id="reasonofreturn" name="reasonofreturn" onChange={(e) => { props.setFormState({ ...props.formState, reasonofreturn: e.target.value }) }} className="input"></input>
            </div>
            <div>
              <span>Have you filled this form before?</span><br></br>
              <input type="text" placeholder="yes or no..." id="isfilled" name="isfilled" onChange={(e) => { props.setFormState({ ...props.formState, isfilled: e.target.value }) }} className="input"></input>
            </div>
            <div>
              <span>Times of filling this form :</span><br></br>
              <input type="number" placeholder="Times" id="timesoffilling" name="timesoffilling" onChange={(e) => { props.setFormState({ ...props.formState, timesoffilling: e.target.value }) }} className="input"></input>
            </div>
            <div>
              <span>Rate us on the scale of 1 to 10 :</span><br></br>
              <input type="number" placeholder="1 to 10" id="rating" name="rating" onChange={(e) => { props.setFormState({ ...props.formState, rating: e.target.value }) }} className="input"></input>
            </div>
          </div> 
          <div className="links">
            <Link to="/form2" className="link">Prev</Link>
            <Link to="#" className="link">Next</Link>
          </div>
          <div>
          <button onClick={handleForm} className="sbutton">Submit</button>
          </div>
        </form>

      </div>
    </>
  )
}

export default Page3;