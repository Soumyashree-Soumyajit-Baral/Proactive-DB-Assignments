import React, { useState } from "react";
import "./App.css"

const App = () => {
  const [formState, setFormState] = useState({});
  const [surveyList, setSurveyList] = useState([]);

  const handleForm = () => {
    console.log(formState)
    setSurveyList([...surveyList, formState])
    console.log(surveyList)
  }

  return (
    <>
      <div className="form-container">

        <form>
          <h1>Please fill the Survey Form</h1>
          <div className="card">
            <div>
              <span>User Name :</span><br></br>
              <input type="text" placeholder="UserName..." id="username" name="username" onChange={(e) => { setFormState({ ...formState, username: e.target.value }) }}></input>
            </div>
            <div>
              <span>Email :</span><br></br>
              <input type="email" placeholder="Email..." id="email" name="email" onChange={(e) => { setFormState({ ...formState, email: e.target.value }) }}></input>
            </div>
            <div>
              <span>Mobile No :</span><br></br>
              <input type="number" placeholder="Mobile no..." id="phone" name="phone" onChange={(e) => { setFormState({ ...formState, phone: e.target.value }) }}></input>
            </div>
            <div>
              <span>Age :</span><br></br>
              <input type="number" placeholder="Age..." id="age" name="age" onChange={(e) => { setFormState({ ...formState, age: e.target.value }) }}></input>
            </div>
            <div>
              <span>Location :</span><br></br>
              <input type="text" placeholder="Location..." id="location" name="location" onChange={(e) => { setFormState({ ...formState, location: e.target.value }) }}></input>
            </div>
            <div>
              <span>Experience with ths delivery :</span><br></br>
              <input type="text" placeholder="good or bad...." id="deliveryexp" name="deliveryexp" onChange={(e) => { setFormState({ ...formState, deliveryexp: e.target.value }) }}></input>
            </div>
            <div>
              <span>Did you get product in time?</span><br></br>
              <input type="text" placeholder="yes or no..." id="intime" name="intime" onChange={(e) => { setFormState({ ...formState, intime: e.target.value }) }}></input>
            </div>
            <div>
              <span>Product condition :</span><br></br>
              <input type="text" placeholder="good or bad..." id="productcond" name="productcond" onChange={(e) => { setFormState({ ...formState, productcond: e.target.value }) }}></input>
            </div>
            <div>
              <span>Quakity of pakaging : :</span><br></br>
              <input type="text" placeholder="good or bad..." id="pakagingquality" name="pakagingquality" onChange={(e) => { setFormState({ ...formState, pakagingquality: e.target.value }) }}></input>
            </div>
            <div>
              <span>Any scratch to the product :</span><br></br>
              <input type="text" placeholder="yes or no..." id="isscratch" name="isscratch" onChange={(e) => { setFormState({ ...formState, isscratch: e.target.value }) }}></input>
            </div>
            <div>
              <span>Did it match your expectation?</span><br></br>
              <input type="text" placeholder="yes or no..." id="expectation" name="expectation" onChange={(e) => { setFormState({ ...formState, expectation: e.target.value }) }}></input>
            </div>
            <div>
              <span>Was it differnet from the product images?</span><br></br>
              <input type="text" placeholder="yes or no..." id="isdifferent" name="isdifferent" onChange={(e) => { setFormState({ ...formState, isdifferent: e.target.value }) }}></input>
            </div>
            <div>
              <span>Quality of Product :</span><br></br>
              <input type="text" placeholder="good or bad..." id="productquality" name="productquality" onChange={(e) => { setFormState({ ...formState, productquality: e.target.value }) }}></input>
            </div>
            <div>
              <span>Did you apply any coopon?</span><br></br>
              <input type="text" placeholder="yes or no..." id="iscoopon" name="iscoopon" onChange={(e) => { setFormState({ ...formState, iscoopon: e.target.value }) }}></input>
            </div>
            <div>
              <span>Did you get any discount?</span><br></br>
              <input type="text" placeholder="yes or no..." id="isdiscount" name="isdiscount" onChange={(e) => { setFormState({ ...formState, isdiscount: e.target.value }) }}></input>
            </div>
            <div>
              <span>Do you want to reaturn the produst?</span><br></br>
              <input type="text" placeholder="yes or no..." id="isreturn" name="isreturn" onChange={(e) => { setFormState({ ...formState, isreturn: e.target.value }) }}></input>
            </div>
            <div>
              <span>Reason for returning :</span><br></br>
              <input type="text" placeholder="Reason..." id="reasonofreturn" name="reasonofreturn" onChange={(e) => { setFormState({ ...formState, reasonofreturn: e.target.value }) }}></input>
            </div>
            <div>
              <span>Have you filled this form before?</span><br></br>
              <input type="text" placeholder="yes or no..." id="isfilled" name="isfilled" onChange={(e) => { setFormState({ ...formState, isfilled: e.target.value }) }}></input>
            </div>
            <div>
              <span>Times of filling this form :</span><br></br>
              <input type="number" placeholder="Times" id="timesoffilling" name="timesoffilling" onChange={(e) => { setFormState({ ...formState, timesoffilling: e.target.value }) }}></input>
            </div>
            <div>
              <span>Rate us on the scale of 1 to 10 :</span><br></br>
              <input type="number" placeholder="1 to 10" id="rating" name="rating" onChange={(e) => { setFormState({ ...formState, rating: e.target.value }) }}></input>
            </div>
          </div>
          <div>
            <button onClick={handleForm}>Submit</button>
          </div>
        </form>

      </div>
    </>
  )
}

export default App;
