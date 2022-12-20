import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import App from "./App"
import Login from "./components/login/login"
import Signup from "./components/signup/signup"
import Page2 from "./components/pages/page2"
import Page3 from "./components/pages/page3"

import React from 'react'

const Landingpage = () => {
    const [formState, setFormState] = useState({})
    const [allUser, setAllUser] = useState([])
    const [surveyList, setSurveyList] = useState([]);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Signup  allUser={allUser} setAllUser={setAllUser} />}></Route>
                    <Route path='/login' element={<Login allUser={allUser} />}></Route>
                    <Route path='/form' element={<App formState={formState} setFormState={setFormState}/>}></Route>
                    <Route path='/form2' element={<Page2 formState={formState} setFormState={setFormState}/>}></Route>
                    <Route path='/form3' element={<Page3 surveyList={surveyList} setSurveyList={setSurveyList} formState={formState} setFormState={setFormState}/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Landingpage