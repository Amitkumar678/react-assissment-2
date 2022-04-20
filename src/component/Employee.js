import React, { Component } from 'react'
import './Assissment.css'

export class Employee extends Component {
  
  
    state = {
       name:"",
       dept:"",
       rating:"",
       clicked:false,
       user:[]
    }   
  
  funhandlar=(event)=>{
   this.setState({[event.target.name]:event.target.value})
  }
  buttonhandlar=(event)=>{
    event.preventDefault()
    // console.log(this.state);
    
    

    const obj={
      name:this.state.name,
      dept:this.state.dept,
      rating:this.state.rating,
      // count:this.state.count
    }
    const user1=[...this.state.user]

    user1.push(obj)

    this.setState({
     user:user1,
      clicked:true,
      name:"",
      dept:"",
      rating:""
    })
  }
  
  render() {
    return (
      <div className='container'>
      <h2> EMPLOYEE FEEDBACK FORM</h2>
      <br />
        <form action="">
          <label className='label' htmlFor="name">NAME :   </label>
          <input  className='input1' type="text" id='name' name='name' value={this.state.name} onChange={(event)=>{this.funhandlar(event)}} />
          <br />
          <label className='label' htmlFor="dept">DEPARTMENT :</label>
          <input  className='input1' type="text" id='dept' name='dept'value={this.state.dept} onChange={(event)=>{this.funhandlar(event)}} />
          <br />
          <label className='label' htmlFor="rating">RATING :</label>
          <input className='input1' type="text" id='rating' name='rating'value={this.state.rating} onChange={(event)=>{this.funhandlar(event)}} />
        </form>
        {/* <button className='btn' onClick={this.buttonhandlar.bind(this)}>SUBMIT</button> */}
        
        <button className='btn' onClick={(event)=>{this.buttonhandlar(event)}}>SUBMIT</button>
       

        <div className="outputcontainer">
          {this.state.user.length>0 && this.state.user.map((elem)=>{
            return(
              <div className="outputcontainer2">
              <h2> {elem.name} || {elem.dept} ||{elem.rating} </h2>
              </div>
            )
          })}
        </div>
        
      </div>
    )
  }
}

export default Employee
