import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import LOGO from './images/download.png'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginData: {
        email: '',
        password: ''
      }
    }
  }
  handleChange = (event) => {
    const { loginData } = this.state;
    loginData[event.target.name] = event.target.value;
    this.setState({ loginData });
  }
  gotoHome = () => {
    this.getData().then(response=> {
      console.log(response);
       if (response.status === 200) {
        swal("Login success");
        sessionStorage.setItem('user', JSON.stringify(this.state.loginData))
        this.props.history.push("/profileList");
      } else {
        swal("invalid username or password");
      }
    })
  }
  getData = () => {
  return new Promise((resolve, reject) => {
    axios.put('http://10.117.189.197:9090/Matrimony/api/profiles/login', this.state.loginData).then( (response) => {
      resolve(response)     
    }).catch(function (error) {
      reject(error);
    });
  })
}
  render() {
    return (
      <div>
        <div className="row" style={{backgroundImage:{LOGO}  }}>
          <div className="col-md-12 pt-4 pb-2">
            {/* <Link to="/">  <img className=" rounded  img-fluid" width="170" style={{ height: "60px" }} height="10" src={amazon} alt="amazon" /></Link> */}
          </div>
          <div className="col-md-12 pt-4 pb-2">
            <h2 className="text-primary"> Login page </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 pb-2">
            <input className="col-md-3" style={{ height: "47px" }}
              placeholder="Enter Your UserName/Email " type="text"
              name="email" required
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-12 pb-3">
            <input className="col-md-3" style={{ height: "47px" }}
              placeholder="Enter Your Password " type="password"
              name="password" required
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-2">
            <p className="text-info">forgot password? </p>
          </div>
          <div className="col-sm-2">
            <Link to="/registration"> <b>   or signup </b></Link>
          </div>
        </div>
        <button className="btn btn-primary" style={{ width: "300px" }} onClick={this.gotoHome} >Submit</button>
      </div>
    );
  }
}

export default Login;
