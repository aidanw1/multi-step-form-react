import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from "../StepContext";

function FirstStep() {
  const { firstStep, userData, setUserData, setStep } = useContext(multiStepContext);
  return (
    <div>
      <TextField label="First Name" value={userData["firstname"]} onChange={(e) => setUserData({ ...userData, firstname: e.target.value })} margin="normal" variant="outlined" color="secondary" />
      <br />
      <TextField label="Last Name" value={userData["lastname"]} onChange={(e) => setUserData({ ...userData, lastname: e.target.value })} margin="normal" variant="outlined" color="secondary" />
      <br />
      <TextField label="Contact Number" value={userData["contact"]} onChange={(e) => setUserData({ ...userData, contact: e.target.value })} margin="normal" variant="outlined" color="secondary" />
      <br />
      <Button variant="contained" color="primary" onClick={() => setStep(2)}>
        Next
      </Button>
    </div>
  );
}

export default FirstStep;
