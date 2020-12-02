import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
/* ReactDOM.render(
<h1>Hi There, I am pritee</h1>,
document.getElementById("root")

); */

// function component- consider as element-yeeInfo

function DisplayEmployeeInfo(employee){
return <div>
<p>
  <lable>ID</lable>
  {employee.Id}
</p>
<p>
  <lable>Name</lable>
  {employee.Name}
</p>

</div>

}

const element = <DisplayEmployeeInfo  Id="101" Name="Ram"></DisplayEmployeeInfo>
ReactDOM.render(element,document.getElementById("root"));
