import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from "../StepContext";

function ThirdStep() {
  const { firstStep, userData, setUserData, setStep, submitData } = useContext(multiStepContext);
  return (
    <div>
      <TextField label="City" value={userData["city"]} onChange={(e) => setUserData({ ...userData, city: e.target.value })} margin="normal" variant="outlined" color="secondary" />
      <br />
      <TextField label="Landmark" value={userData["landmark"]} onChange={(e) => setUserData({ ...userData, landmark: e.target.value })} margin="normal" variant="outlined" color="secondary" />
      <br />
      <TextField label="Post Code" value={userData["postcode"]} onChange={(e) => setUserData({ ...userData, postcode: e.target.value })} margin="normal" variant="outlined" color="secondary" />
      <br />
      <Button variant="contained" onClick={() => setStep(2)} color="secondary">
        Back
      </Button>
      <span> </span>
      <Button variant="contained" onClick={submitData} color="primary">
        Submit
      </Button>
    </div>
  );
}

export default ThirdStep;
