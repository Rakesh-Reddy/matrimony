import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import amazon from '../images/cart-logo.png'
import swal from 'sweetalert';
import axios from 'axios';


class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formdata: {
                firstName: '',
                lastName: '',
                age: '',
                gender: '',
                maritalStatus: '',
                job: '',
                salary: '',
                email: '',
                password: '',
                confirmPassword: ''
            }

        }
    }
    handleChange = (event) => {
        const { formdata } = this.state;
        formdata[event.target.name] = event.target.value;
        this.setState({ formdata });
    }

    proceed = (event) => {
        event.preventDefault(); 
        this.getData().then(response=> {
            console.log(response);
            if(response.status === 201) {
                swal("Registered Successfully");
                this.props.history.push("/login");
            } else {
                swal("Something went wrong, try again");
            }
            
          })
    }
    getData=()=> {const rakesh = this;
        return new Promise((resolve, reject) => {
            console.log("test")
            axios.post('http://10.117.189.197:9090/Matrimony/api/profiles', this.state.formdata).then(function (response)  {
                console.log("res")    
                console.log(response);

            console.log(response.data.message);
                resolve(response);
               
            }).catch(function (error) {
                reject(error);
            });
        })
    }
    render() {

        return (
            <div className="container zooming">
                <div className="row">
                    <div className="col-md-12 pt-3 pb-3">
                        {/* <img className=" rounded  img-fluid" width="170" style={{ height: "60px" }} height="10" src={amazon} alt="amazon" /> */}
                    </div>
                    <form className=" col-md-12">
                        <div className="col-md-12">
                            <h2 className="text-success col-md-12">Create New Account</h2>
                        </div>
                        <div className="col-md-12 pb-2">
                            <input className="col-md-4" style={{ height: "37px" }} type="text" name="firstName" placeholder="Your Frist Name" onChange={this.handleChange} />
                        </div>
                        <div className="col-md-12 pb-2">
                            <input className="col-md-4" style={{ height: "37px" }} type="text" name="lastName" placeholder="Your Last Name" onChange={this.handleChange} />
                        </div>
                        <div className="col-md-12 pb-2">
                            <input className="col-md-4" style={{ height: "37px" }} type="number" name="age" placeholder="Your Age" onChange={this.handleChange} />
                        </div>
                        <div className="col-md-12 pb-2 text-info">

                            gender:
                         <input type="radio" name="gender" value="male" onChange={this.handleChange} /> Male
                         <input type="radio" name="gender" value="female" onChange={this.handleChange} /> Female
                        <input type="radio" name="gender" value="other" onChange={this.handleChange} /> Other
                          
                          
              {/* <input className="col-md-4" style={{ height: "37px" }} type="text" name="gender" placeholder="Your gender" /> */}
                        </div>
                        <div className="col-md-12 pb-2 text-info">
                            Please Enter Marital Status : 
                        <select className="col-md-2" onChange={this.handleChange}>
                            <option value="maritalStatus">Single</option>
                             <option value="maritalStatus">Married</option>
                             <option value="maritalStatus">Divorced</option>
                        </select>
                            {/* <input className="col-md-4" style={{ height: "37px" }} type="text" name="maritalStatus" placeholder="Your maritalStatus" onChange={this.handleChange} /> */}
                        </div>
                        <div className="col-md-12 pb-2">
                            <input className="col-md-4" style={{ height: "37px" }} type="number" name="salary" placeholder="Enter Salary" onChange={this.handleChange}  />
                        </div>
                        <div className="col-md-12 pb-2">
                            <input className="col-md-4" style={{ height: "37px" }} type="email" name="email" placeholder="Email Address" onChange={this.handleChange}  />
                        </div>
                        <div className="col-md-12 pb-2">
                            <input className="col-md-4" style={{ height: "37px" }} type="password" name="password" placeholder="Password must be atleast 6 characters " onChange={this.handleChange}  />
                        </div>
                        <div className="col-md-12 pb-2">
                            <input className="col-md-4" style={{ height: "37px" }} type="password" name="confirmPassword" placeholder="Confirm Password " onChange={this.handleChange}  />
                        </div>
                        <div className="col-md-12">
                            <button className="btn btn-info" style={{ width: "250px" }} onClick={this.proceed}> Continue </button>
                        </div>
                        <div className="col-md-12 pt-3">Already have an account? <Link to="/login">     signin</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Registration;