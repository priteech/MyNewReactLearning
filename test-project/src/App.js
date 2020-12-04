// import logo from './logo.svg';
import './App.css';
import React from 'react';



function  Header(props){
  return(
    <div>
      <h1>{props.name}  Pritee Chuaurasiya</h1>
    </div>
  )
}

function  Main(props){
  return(
    <div>
      <h1 style={{color:"blue"}}>this is Head</h1>
  <ul>
    {props.courses.map((course,i)=> <li key={i}>{course}</li>)}
    </ul>
    </div>
  )
}
function  Footer(){
  return(
    <div>
      <h1>this is footer</h1>
    </div>
  )
}

const courses = [
  "Angular",
  "React",
  "Java",
  "Dotnet",
"RDBMS"
]
const courseObjects = courses.map((course,i) => ({id:i,title:course}))
console.log(courseObjects);
// courses.map((course) =>console.log(course))


function App() {
  return (
    <div className="App">
      <Header name="My Name is"/>
      <Main courses ={courses}/>
      <Footer/>
      <Employee
      Id="101"
      Name="Ram"
      Location="channai"
      Salary = "70000"
      DeptName="Training"
      HeadName="Prasad"
      BasicSalary="10000"
      HRA = "1500"
      SpecialAllowence="25000"


      />
      <Student/>
      <CountCharectre/>
     
    </div>
  );
}

class Employee extends React.Component
{
  constructor(props){
    super(props)
    console.log(props)
  }

  render(){
    return<div>
      <h2 align="center">Employee Details</h2>
      <table border="1" width="70%"  align="center">
        <tbody>
<tr>
  <th>ID</th>
  <th>{this.props.Id}</th>
</tr>
<tr>
<th>Name</th>
  <th>{this.props.Name}</th>
</tr>
<tr>
  <th>Salary</th>
  <th>{this.props.Salary}</th>
</tr>
        </tbody>
        </table> 
        <Department
        DeptName={this.props.DeptName}
        HeadName={this.props.HeadName}
        />
        <Salary 
        BasicSalary={this.props.BasicSalary}
        HRA={this.props.HRA}
        SpecialAllowence={this.props.SpecialAllowence}
        />
         </div>

  }
}

class Department extends React.Component{
  render(){
    return <div>

      <h2>Department Details</h2>
      <table border="1" width="70%" align="center">
<tr>
  <th>Name</th>
  <th>{this.props.DeptName}</th>
</tr>
<tr>
  <th>Head</th>
  <th>{this.props.HeadName}</th>
</tr>
      </table>
      
    </div>
  }
}

class Salary extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
  }
  render(){
    return(
<div>
    <p>basic Salary: <b>{this.props.BasicSalary}</b></p>
    <p>basic HRA: <b>{this.props.HRA}</b></p>
    <p>Special Allowance: <b>{this.props.SpecialAllowence}</b></p>
</div>
    )
  }
}

class Student extends React.Component{
  counter= 0;
addStudent = () => 
{this.counter = this.counter+1;
    alert("Add Student Clicked Count:"+ this.counter);
  }
  render(){
    return(
      <div>
        <h2>Student Component</h2>
        <button onClick={this.addStudent}>Add Student</button>
      </div>
    )
  }
}

class CountCharectre extends React.Component{
  constructor(props){
    super(props)
      this.state={
        messange:"",
        counter:10

      }
  }


  onmassegeChange (text) {
    this.setState({
      messange:"Message has  "+text.length +"  Number of Characters" 
    }
    )

  }
  render(){
    return(
      <div>
        <h2>welcome to count Characters component</h2>
        <p><lable>Enter Messege<input type="text" 
        onChange={e=>this.onmassegeChange(e.target.value)}
        /></lable></p>
        <p><label>{this.state.messange}</label></p>
        <p><label>{this.state.counter}</label></p>
      </div>
    )
  }
}


export default App;
