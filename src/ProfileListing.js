import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14
    },
}))(TableCell);

class ProfileListing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profilelist: [],
            gender: ''
        }

    }

    componentDidMount() {
        this.profileData().then(response => {
            this.setState({ profilelist: response.data });
        })
    }

    handleChange = (event) => {
        this.setState({ gender: event.target.value });
    }
    profileData = () => {
        return new Promise((resolve, reject) => {
            const { gender } = this.state;
            axios.get(`http://10.117.189.197:9090/Matrimony/api/profiles/${this.state.gender}`).then(function (response) {

            // axios.get(`http://localhost:3000/matrimonial${this.state.gender}`).then(function (response) {
                resolve(response);
                console.log(response);
            }).catch(function (error) {
                reject(error);
            })
        });
    }

    render() {
        return (
            <div>
                <div className="col-md-12 pb-5 pt-5 text-info">
                    Search The profile:
                <input type="radio" name="gender" value="bride" onChange={this.handleChange} /> Male
                <input type="radio" name="gender" value="groom" onChange={this.handleChange} /> Female
            </div>


                <div>
                    <Table>
                        <TableHead>
                            <CustomTableCell><strong>First Name</strong></CustomTableCell>
                            <CustomTableCell><strong>Last Name</strong></CustomTableCell>
                            <CustomTableCell><strong>Age</strong></CustomTableCell>
                            <CustomTableCell><strong>Marital Status</strong></CustomTableCell>
                            <CustomTableCell><strong>Interested</strong></CustomTableCell>
                        </TableHead>
                        <TableBody className="table-hover">
                            {
                                this.state.profilelist.map((item, i) => {
                                    return (
                                        <TableRow className="table table-info table-striped" key={i}>
                                            <TableCell>{item.firstName}</TableCell>
                                            <TableCell>{item.lastName}</TableCell>
                                            <TableCell>{item.age}</TableCell>
                                            <TableCell>{item.maritalStatus}</TableCell>
                                            <TableCell><button className="btn btn-danger">Interested</button  ></TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>

                </div>
            </div>
        );
    }
}

export default ProfileListing;