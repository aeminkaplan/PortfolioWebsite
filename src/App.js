import React, { Component, useState} from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import resumeData from './resumeData';
import BTCTracker from './components/BTCTracker';

import ContactForm from './components/ContactForm';

import ReactDOM from "react-dom";

import "./styles-login.css";
class App extends Component {

  // const [errorMessages, setErrorMessages] = useState({});
  // const [isSubmitted, setIsSubmitted] = useState(false);

  // database = [
  //   {
  //     username: "user1",
  //     password: "pass1"
  //   },
  //   {
  //     username: "user2",
  //     password: "pass2"
  //   }
  // ];

  // errors = {
  //   uname: "invalid username",
  //   pass: "invalid password"
  // };

  // handleSubmit = (event) => {

  //   event.preventDefault();

  //   var { uname, pass } = document.forms[0];

  //   const userData = database.find((user) => user.username === uname.value);

  //   if (userData) {
  //     if (userData.password !== pass.value) {
  //       setErrorMessages({ name: "pass", message: errors.pass });
  //     } else {
  //       setIsSubmitted(true);
  //     }
  //   } else {
  //     setErrorMessages({ name: "uname", message: errors.uname });
  //   }
  // };

  // renderErrorMessage = (name) =>
  //   name === errorMessages.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   );

  // renderForm = (
  //   <div className="form">
  //     <form onSubmit={handleSubmit}>
  //       <div className="input-container">
  //         <label>Username </label>
  //         <input type="text" name="uname" required />
  //         {renderErrorMessage("uname")}
  //       </div>
  //       <div className="input-container">
  //         <label>Password </label>
  //         <input type="password" name="pass" required />
  //         {renderErrorMessage("pass")}
  //       </div>
  //       <div className="button-container">
  //         <input type="submit" />
  //       </div>
  //     </form>
  //   </div>
  // );

  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <BTCTracker btcTracker/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
         <ContactForm resumeData={resumeData}/>

        <Footer resumeData={resumeData}/>
        {/* <div className="login-form">
          <div className="title">Sign In</div>
          {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div> */}
      </div>
    );
  }
}

export default App;