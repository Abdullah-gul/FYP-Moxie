import Loginpage from "./client_side/pages/Loginpage";
import { useEffect, useState } from "react";
import Leades from "./Service-side/pages/Leades";
import NaveBar from "./Service-side/components/leads/NaveBar";
import LoginNav from "./client_side/components/LoginNav";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import ClientLandingPage from "./client_side/pages/ClientLandingPage";
import SignupPage from "./client_side/pages/SignupPage";
import Dashboard from "./Service-side/pages/Dashboard";
import MyResponces from "./Service-side/pages/MyResponces";
import Settings from "./Service-side/pages/Settings";
import Myprofile from './Service-side/components/settings/Myprofile'
import About from './Service-side/components/settings/About'
import ServiceInfo from "./client_side/pages/ServiceInfo";
import ServiceList from "./client_side/pages/ServiceList";
import { useDispatch,useSelector } from "react-redux";
import {logInfo} from "./redux/features/userSlice"
import SingleServicePage from "./client_side/pages/SingleServicePage";
function App() {
  const [email, setEmail] = useState("");
  const[usertObjectId, setUserObjectId]=useState('')
  const [userPassword, setUserPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
const [Phone ,setPhone]=useState("")
  const [questions, setQuestions] = useState([""]);

const dispatch = useDispatch()
const user1 = useSelector((state)=> state.user.value)
  const location = useLocation().pathname;
  console.log(location)
  const navigate = useNavigate();

  function postLogin(email, userPassword) {
    axios({
      method: "post",
      url: "/login",
      data: {
        email: email,
        user_password: userPassword,
      },
    })
      .then((responce) => {
        if (responce.data.message === "login successfull") {
        //  console.log(responce.data)
         setUserObjectId(responce.data._id)
         dispatch(logInfo({email:responce.data.email,token:responce.data.token,userId:responce.data._id}))
          navigate("/client-page");
        } else {
          console.log("sorry");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function postSignup(email, userPassword, firstname, lastname,phone) {
  
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) & /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})$/.test(userPassword) & firstname.length !==0 & lastname.length !==0 & /^\d{11,}$/.test(phone) )
    {
      axios({
        method: "post",
        url: "/signup",
        data: {
          email: email,
          password: userPassword,
          firstName: firstname,
          lastName: lastname,
          phone: phone
        },
      })
        .then((responce) => {
          if (responce.data.message === "user added sucessfully") {
            navigate("/");
            setEmail("")
            setFirstname("")
            setLastname("")
            setPhone("")
          } else {
          
           alert(responce.data.message)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }else{
      if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        alert("incorrect email")
      }
      else if(!/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})$/.test(userPassword)){
        alert("must contains one digit from 0-9, must contains one lowercase characters,must contains one uppercase characters, must contains at least one special character,  , length at least 8 characters and maximum of 20 ")
      }
     else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && !/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})$/.test(userPassword) ){
        alert("incorrect email and not valid password")
      }
      else if (firstname.length === 0 || lastname.length === 0){
        alert(" field empty")
      }
      else if (!/^\d(11,)$/.test(phone) ){
        alert(" incorrect number")
      }
      
    }
   
  }

  function getQuestions() {
    console.log(localStorage.getItem("service"))
    axios({
      method: "post",
      url: "/getquestion",
      data:{ 
        service : localStorage.getItem("service")
      },
    })
      .then((res) => {
        console.log(res);
        const data1 = res.data;

        setQuestions(data1);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function ServiceProviderCheck() {
    console.log("activated")
    axios({
      method: "post",
      url: "/getservice",
      data:{ 
        user : user1.userId,
      },
    })
      .then((res) => {
        console.log(res);
       if(res.data.length === 0){
        navigate("/info");
       }else{
        navigate("/leads");
       }
      })
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <div className="App">
      {location === "/settings/myprofile" || location === "/about" ||location === "/leads" || location === "/dash"  || location === "/responce"|| location === "/settings"  ? <NaveBar /> : <LoginNav ServiceProviderCheck={ServiceProviderCheck}/>}
      <Routes>
        <Route
          path="/"
          element={
            <Loginpage
              email={email}
              setEmail={setEmail}
              userPassword={userPassword}
              setUserPassword={setUserPassword}
              postLogin={postLogin}
              setUserObjectId={setUserObjectId}
              usertObjectId={usertObjectId}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignupPage
              email={email}
              setEmail={setEmail}
              userPassword={userPassword}
              setUserPassword={setUserPassword}
              firstname={firstname}
              setFirstname={setFirstname}
              lastname={lastname}
              setLastname={setLastname}
              postSignup={postSignup}
              Phone={Phone}
              setPhone={setPhone}
            />
          }
        />
        <Route
          path="/client-page"
          element={
            <ClientLandingPage
              questions={questions}
              userObjectId ={usertObjectId}
              getQuestions={getQuestions}
              email = {email}
             
            />
          }
        />
        <Route
          path="/service_list"
          element={
            <ServiceList
            />
          }
        />
        <Route
          path="/single-service"
          element={
            <SingleServicePage
            />
          }
        />

{/* ---------------------------------Service side--------------------------------- */}
<Route path="/info" element={<ServiceInfo  usertObjectId={usertObjectId}  />} />
        <Route path="/leads" element={<Leades />} />
        <Route path="/dash" element={<Dashboard/>} />
        <Route path="/responce" element={<MyResponces />} />
        <Route path="/settings" element={<Settings />} />
        {/* ----------------- */}
        <Route path="/settings/myprofile" element={<Myprofile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
