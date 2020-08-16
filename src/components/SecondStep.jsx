import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from "../StepContext";

function SecondStep() {
  const { firstStep, userData, setUserData, setStep } = useContext(multiStepContext);
  return (
    <div>
      <TextField label="Email" value={userData["email"]} onChange={(e) => setUserData({ ...userData, email: e.target.value })} margin="normal" variant="outlined" color="secondary" />
      <br />
      <TextField label="Country" value={userData["country"]} onChange={(e) => setUserData({ ...userData, country: e.target.value })} margin="normal" variant="outlined" color="secondary" />
      <br />
      <TextField label="District" value={userData["district"]} onChange={(e) => setUserData({ ...userData, district: e.target.value })} margin="normal" variant="outlined" color="secondary" />
      <br />
      <Button variant="contained" onClick={() => setStep(1)} color="secondary">
        Back
      </Button>
      <span> </span>
      <Button variant="contained" onClick={() => setStep(3)} color="primary">
        Next
      </Button>
    </div>
  );
}

export default SecondStep;
