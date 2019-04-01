import React, { Component } from 'react';
import AlertError from "./Alert/Error";
import AlertWarning from "./Alert/Warning";
import AlertSuccess from "./Alert/Success";
import AlertTimer from "./Alert/Timer";
import AlertAjax from "./Alert/Ajax";
import 'bootstrap/dist/css/bootstrap.min.css';

const ErrorData = {
  title: "Oops..",
  type: "error",
  text: "Something went wrong!",
  footer: "<a href>Why do I have this issue?</a>"
};

const WarningData = {
  title: "Are you sure?",
  type: "warning",
  text: "You won't be able to revert this!",
  footer: ""
};

const SuccessData = {
  title: "Success",
  type: "success",
  text: "Your work has been saved.",
  footer: ""
};

const TimerData = {
  title: 'Auto close alert!',
  html: 'I will close in 3 seconds.',
  timer: 3000,
  showConfirmButton: false,
};

const AjaxData = {
  title: 'Submit your Github username',
  input: "text",
  text: "e.g. developwithankit",
  inputAttributes: {
    autocapitalize: "off"
  },
  showCancelButton: true,
  confirmButtonText: 'Look up',
  showLoaderOnConfirm: true,
};

class App extends Component {
  render() {
    return (
      <div className="text-center">
        <hr />
        <h2>SweetAlert2 integration in React</h2>
        <hr />
        <AlertError {...ErrorData} />
        <br />
        <AlertWarning {...WarningData} />
        <br />
        <AlertSuccess {...SuccessData} />
        <br />
        <AlertTimer {...TimerData} />
        <br />
        <AlertAjax {...AjaxData} />
      </div>
    );
  }
}

export default App;

