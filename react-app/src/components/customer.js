import React from "react";
import { TableCell, TableRow, TableHead, TableBody,  } from "@mui/material";

class Customer extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>
          <img src={this.props.Image} alt="profile"></img>{" "}
        </TableCell>
        <TableCell>{this.props.name} </TableCell>
        <TableCell>{this.props.birthday} </TableCell>
        <TableCell>{this.props.gender} </TableCell>
        <TableCell>{this.props.job} </TableCell>
      </TableRow>
    );
  }
}

export default Customer;
