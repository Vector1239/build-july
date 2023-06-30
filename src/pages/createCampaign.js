import React, { useState } from "react";
import { Typography, TextField, Box, Button, Stepper, Step, StepLabel, Card, FormControl, FormControlLabel, Radio, RadioGroup, CardContent} from "@mui/material";
import { useForm, Controller, FormProvider, useFormContext } from "react-hook-form";
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';


function getSteps() {
  return [
    "Basic Detail",
    "About Campaign",
    "Product",
    "Deliverables",
    "Incentives",
  ];
}

const BasicDetail = () => {
  const { control } = useFormContext();

  return (
    <>
      <div style={{ background: "#D3D3D3", padding: "10px", margin: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "48%" }}>
            <Controller
              control={control}
              name="platform"
              render={({ field }) => (
                <TextField
                  id="platform"
                  label="Platform"
                  variant="outlined"
                  placeholder="Enter Platform"
                  fullWidth
                  margin="normal"
                  InputProps={{
                    style: { background: "white" },
                    placeholder: "Enter Platform",
                  }}
                  {...field}
                />
              )}
            />
          </div>

          <div style={{ width: "48%" }}>
            <Controller
              control={control}
              name="campaignType"
              render={({ field }) => (
                <TextField
                  id="campaign-type"
                  label="Campaign Type"
                  variant="outlined"
                  placeholder="Enter Campaign Type"
                  fullWidth
                  margin="normal"
                  InputProps={{
                    style: { background: "white" },
                    placeholder: "Enter Campaign Type",
                  }}
                  {...field}
                />
              )}
            />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "48%" }}>
            <Controller
              control={control}
              name="campaignName"
              render={({ field }) => (
                <TextField
                  id="campaign-name"
                  label="Campaign Name"
                  variant="outlined"
                  placeholder="Enter Campaign Name"
                  fullWidth
                  margin="normal"
                  InputProps={{
                    style: { background: "white" },
                    placeholder: "Enter Campaign Name",
                  }}
                  {...field}
                />
              )}
            />
          </div>

          <div style={{ width: "48%" }}>
            <Controller
              control={control}
              name="brandName"
              render={({ field }) => (
                <TextField
                  id="brand-name"
                  label="Brand Name"
                  variant="outlined"
                  placeholder="Enter Brand Name"
                  fullWidth
                  margin="normal"
                  InputProps={{
                    style: { background: "white" },
                    placeholder: "Enter Brand Name",
                  }}
                  {...field}
                />
              )}
            />
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <img
            src="https://marketplace.canva.com/EAE-2Te6924/1/0/1131w/canva-violet-and-yellow-handdrawn-campaign-vote-reminder-poster-IikM6zhGLo8.jpg"
            alt="Campaign Cover"
            style={{ width: "100%", maxWidth: "400px", marginTop: "10px" }}
          />
        </div>
      </div>
    </>
  );
};


const Product = () => {
  const { control } = useFormContext();

  return (
    <>
    <div style={{ background: "#D3D3D3", padding: "10px", margin: "20px" }}>

    <Typography variant="h5" align="center" gutterBottom>
        Will Every Influencer order the same product bundle ?
      </Typography>

      <Typography align="center" marginBottom="20px" gutterBottom>
        A Product bundle is set of products that the influencer ordes, it can contain a single product as well.
      </Typography>


      <FormControl component="fieldset">
        <Controller
          control={control}
          name="radioButtonValue"
          render={({ field }) => (
            <RadioGroup row {...field}>
              <FormControlLabel
                value="option1"
                control={<Radio color="default" />}
                label="Every Influencer will order the same product bundle"
                style={{
                  backgroundColor: "white",
                  borderRadius: "20px 20px 20px 20px",
                  padding: "5px",
                  marginLeft: "60px"}}
              />
              <FormControlLabel
                value="option2"
                control={<Radio color="default" />}
                label="Different influencer will order different product bundle"
                style={{
                  backgroundColor: "white",
                  borderRadius: "20px 20px 20px 20px",
                  padding: "5px" }}
              />
            </RadioGroup>
          )}
        />
      </FormControl>
      </div>
    </>
  );
};


const AboutCampaign = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const handleText1Change = (event) => {
    setText1(event.target.value);
  };

  const handleText2Change = (event) => {
    setText2(event.target.value);
  };

  return (
    <>
    <div style={{ background: "#D3D3D3", padding: "10px", margin: "20px" }}>
      <Box display="flex" alignItems="center" marginBottom={2}>
        <Box flex={1} borderRadius="20px" overflow="hidden">
          <TextField
            id="text1"
            label="Text 1"
            variant="outlined"
            multiline
            rows={4}
            value={text1}
            onChange={handleText1Change}
            fullWidth
            InputProps={{
              style: {
                background: "white",
                padding: "10px",
                fontWeight: "bold",
                textAlign: "center",
                borderRadius: "20px 20px 20px 20px",
              },
            }}
          />
        </Box>
        <Box
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="20px 20px 20px 20px"
          bgcolor="#D3D3D3"
          padding={1}
          marginLeft={5}
        >
          <Typography variant="body1" style={{ color: "#808080" }}>
            Output: {text1}
          </Typography>
        </Box>
      </Box>

      <Box display="flex" alignItems="center">
        <Box flex={1} borderRadius="20px" overflow="hidden">
          <TextField
            id="text2"
            label="Text 2"
            variant="outlined"
            multiline
            rows={4}
            value={text2}
            onChange={handleText2Change}
            fullWidth
            InputProps={{
              style: {
                background: "white",
                padding: "10px",
                fontWeight: "bold",
                textAlign: "center",
                borderRadius: "20px 20px 20px 20px",
              },
            }}
          />
        </Box>
        <Box
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="20px 20px 20px 20px"
          bgcolor="#D3D3D3"
          padding={1}
          marginLeft={5}
        >
          <Typography variant="body1" style={{ color: "#808080" }}>
            Output: {text2}
          </Typography>
        </Box>
      </Box>
      </div>
    </>
  );
};


const Deliverables = () => {
  const { control } = useFormContext();

  return (
    <>
    <Typography variant="h5" align="center" marginTop = "30px" gutterBottom>
        Deliverables
      </Typography>
    </>
  );
};

const Incentives = () => {
  const { control } = useFormContext();

  return (
    <>
    <div style={{ background: "#D3D3D3", padding: "10px", margin: "20px"}}>
    <Typography variant="h5" align="center" gutterBottom>
        Influencer Incentives
      </Typography>

      <Typography align="center" marginBottom="20px" gutterBottom>
        Select the type of incentive for the participating influencers.
      </Typography>

      <FormControl component="fieldset">
        <Controller
          control={control}
          name="radioButtonValue"
          render={({ field }) => (
            <RadioGroup row {...field}>
              <FormControlLabel value="option1" control={<Radio />} label="Fixed Payout"                 style={{
                  backgroundColor: "white",
                  borderRadius: "10px 10px 10px 10px",
                  padding: "3px",
                  marginLeft: "330px"}}/>
              <FormControlLabel value="option2" control={<Radio />} label="Cashback"                 style={{
                  backgroundColor: "white",
                  borderRadius: "10px 10px 10px 10px",
                  padding: "3px",
                  marginLeft: "60px"}}/>
            </RadioGroup>
          )}
        />
      </FormControl>

      </div>
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicDetail />;
    case 1:
      return <AboutCampaign />;
    case 2:
      return <Product />;
    case 3:
      return <Deliverables />;
    case 4:
        return <Incentives />;
    default:
      return "Unknown";
  }
}

const FiveSteps = () => {
  const methods = useForm({
    defaultValues: {

    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  const handleComplete = () => {
    setActiveStep(steps.length);
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form>
              {getStepContent(activeStep)}

              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              {activeStep === steps.length - 1 ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleComplete}
                >
                  Finish
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Next
                </Button>
              )}
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

FiveSteps.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default FiveSteps;
