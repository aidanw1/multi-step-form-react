import React, { useContext } from "react";
import { TableContainer, TableHead, TableCell, TableRow, Table, TableBody } from "@material-ui/core";
import { multiStepContext } from "../StepContext";

function DisplayData() {
  const { finalData } = useContext(multiStepContext);
  return (
    <div>
      <TableContainer style={{ display: "flex", justifyContent: "center" }}>
        <Table border="1" style={{ width: "70%", justifyContent: "center" }} size="small" aria-label="caption table">
          <TableHead>
            <TableRow style={{ backgroundColor: "burlywood", color: "aliceblue" }}>
              <TableCell>First Name:</TableCell>
              <TableCell>Last Name:</TableCell>
              <TableCell>Contact Number:</TableCell>
              <TableCell>Email Address:</TableCell>
              <TableCell>Country:</TableCell>
              <TableCell>District:</TableCell>
              <TableCell>City:</TableCell>
              <TableCell>Landmark</TableCell>
              <TableCell>Postal Code:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {finalData.map((data) => (
              <TableRow key={data.email}>
                <TableCell>{data.firstname}</TableCell>
                <TableCell>{data.lastname}</TableCell>
                <TableCell>{data.contact}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.country}</TableCell>
                <TableCell>{data.district}</TableCell>
                <TableCell>{data.city}</TableCell>
                <TableCell>{data.landmark}</TableCell>
                <TableCell>{data.postcode}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DisplayData;
