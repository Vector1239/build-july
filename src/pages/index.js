import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewBudget } from 'src/sections/overview/overview-budget';
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders';
import { OverviewLatestProducts } from 'src/sections/overview/overview-latest-products';
import { OverviewSales } from 'src/sections/overview/overview-sales';
import { OverviewTasksProgress } from 'src/sections/overview/overview-tasks-progress';
import { OverviewTotalCustomers } from 'src/sections/overview/overview-total-customers';
import { OverviewTotalProfit } from 'src/sections/overview/overview-total-profit';
import { OverviewTraffic } from 'src/sections/overview/overview-traffic';
import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Modal,
  Card,
  CardContent,
} from "@mui/material";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import { useRouter } from 'next/router';

const now = new Date();

function getSteps() {
  return ["Select Platform", "Select Campaign Type", "Create New Campaign"];
}

const SelectPlatform = () => {
  const { control } = useFormContext();

  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        Choose the Platform on which you want to run the Campaign
      </Typography>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://img.freepik.com/premium-vector/instagram-icon_488108-3.jpg?w=2000"
          alt="Image 1"
          style={{ width: "200px", height: "200px", marginRight: "20px" }}
        />

        <img
          src="https://static.vecteezy.com/system/resources/previews/018/910/794/original/youtube-logo-youtube-icon-youtube-symbol-free-free-vector.jpg"
          alt="Image 2"
          style={{ width: "200px", height: "200px", marginLeft: "20px", marginBottom: "20px" }}
        />
      </div>
    </>
  );
};

const SelectCampaignType = () => {
  const { control } = useFormContext();

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "20px"}}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Barter Campaign
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Influencers keep the products in-exchange for posting content. Brand can create multiple hampers for influencers to choose. This type is most popular.
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Payout Campaign
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Influencers keep the products in-exchange for posting content. Brand can create multiple hampers for influencers to choose. This type is most popular..
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Cashback Campaign
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Influencers keep the products in-exchange for posting content. Brand can create multiple hampers for influencers to choose. This type is most popular.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

const CreateNewCampaign = () => {
  const { control } = useFormContext();

  return (
    <>
    <Typography variant="h5" align="center" gutterBottom>
        Enter the highlights of your campaign to get started with the campaign setup.
      </Typography>

      <Typography align="center" marginBottom="20px" gutterBottom>
        The information below will be displayed to the influencers on the App.
      </Typography>

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
                {...field}
              />
            )}
          />
        </div>
      </div>

      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            Upload Image
          </Typography>
          <input type="file" accept="image/*" />
        </CardContent>
      </Card>
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <SelectPlatform />;
    case 1:
      return <SelectCampaignType />;
    case 2:
      return <CreateNewCampaign />;
    default:
      return "Unknown";
  }
}

const Page = () => {
  const methods = useForm({
    defaultValues: {

    },

  });

  const router = useRouter();

  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const [openModal, setOpenModal] = useState(false);
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
    router.push("/createCampaign");
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
  <>
    <Head>
      <title>
        Overview | Admyre Demo
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewBudget
              difference={12}
              positive
              sx={{ height: '100%' }}
              value="$24k"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalCustomers
              difference={16}
              positive={false}
              sx={{ height: '100%' }}
              value="1.6k"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTasksProgress
              sx={{ height: '100%' }}
              value={75.5}
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalProfit
              sx={{ height: '100%' }}
              value="$15k"
            />
          </Grid>

          <Grid
            xs={12}
            lg={8}>
                  <div

                  style={{
                  backgroundImage:
                  'url("https://www.dxglobal.com/media/pu3f2ano/dx-general-background-1.jpeg")', // Replace with the URL of your background image
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "10px",
                  height: "170px",
                  position: "relative",
                  width: "100%"
                  }}
                  >
                    <h2
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            color: "#000",
            marginLeft: "22px",
          }}
        >
         Create a Camapaign
        </h2>
        <h4
          style={{
            position: "absolute",
            top: "50px",
            left: "10px",
            color: "#000",
            marginLeft: "22px",
          }}
        >
          and help you brand grow
        </h4>
              <Button
                  variant="contained"
                  color="primary"
                  onClick={handleOpenModal}
                  style={{
                    position: "absolute",
                    top: "110px",
                    left: "10px",
                    marginLeft: "20px",
                  }}
                >
                  New Campaign
                </Button>

                <Modal open={openModal} onClose={handleCloseModal}>
                  <div className="modal-content">
                    <Stepper alternativeLabel activeStep={activeStep}>
                      {steps.map((step, index) => (
                        <Step key={index}>
                          <StepLabel>{step}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>

                    {
                    // activeStep === steps.length ? (
                    //   <Typography variant="h3" align="center">
                    //     Thank YOu
                    //     <FiveSteps />
                    //   </Typography>
                    // ) : (
                      <>
                        <FormProvider {...methods}>
                          <form className="modal-form">
                            {getStepContent(activeStep)}

                            <Button
                              disabled={activeStep === 0}
                              onClick={handleBack}
                            >
                              Back
                            </Button>
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={handleNext}
                            >
                              Next
                            </Button>
                            {activeStep === steps.length - 1 && (
                              <Button
                                variant="contained"
                                color="primary"
                                onClick={handleComplete}
                                style = {{marginLeft: '10px'}}
                              >
                                Finish
                              </Button>
                            )}
                          </form>
                        </FormProvider>
                      </>
                    // )
                    }
                  </div>
                </Modal>
                <style>
                              {`
                    .modal-content {
                      background-color: #ffffff;
                      padding: 20px;
                      border-radius: 4px;
                      width: 700px;
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                    }

                    .modal-form {
                      background-color: #ffffff;
                      margin-top: 20px;
                      padding: 20px;
                    }

                    .modal-buttons {
                      display: flex;
                      justify-content: flex-end;
                      margin-top: 20px;
                    }
                  `}
                </style>
                </div>
          </Grid>
          <Grid
            xs={12}
            lg={8}
          >
            <OverviewSales
              chartSeries={[
                {
                  name: 'This year',
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
                },
                {
                  name: 'Last year',
                  data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewTraffic
              chartSeries={[63, 15, 22]}
              labels={['Desktop', 'Tablet', 'Phone']}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewLatestProducts
              products={[
                {
                  id: '5ece2c077e39da27658aa8a9',
                  image: '/assets/products/product-1.png',
                  name: 'Healthcare Erbology',
                  updatedAt: subHours(now, 6).getTime()
                },
                {
                  id: '5ece2c0d16f70bff2cf86cd8',
                  image: '/assets/products/product-2.png',
                  name: 'Makeup Lancome Rouge',
                  updatedAt: subDays(subHours(now, 8), 2).getTime()
                },
                {
                  id: 'b393ce1b09c1254c3a92c827',
                  image: '/assets/products/product-5.png',
                  name: 'Skincare Soja CO',
                  updatedAt: subDays(subHours(now, 1), 1).getTime()
                },
                {
                  id: 'a6ede15670da63f49f752c89',
                  image: '/assets/products/product-6.png',
                  name: 'Makeup Lipstick',
                  updatedAt: subDays(subHours(now, 3), 3).getTime()
                },
                {
                  id: 'bcad5524fe3a2f8f8620ceda',
                  image: '/assets/products/product-7.png',
                  name: 'Healthcare Ritual',
                  updatedAt: subDays(subHours(now, 5), 6).getTime()
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={12}
            lg={8}
          >
            <OverviewLatestOrders
              orders={[
                {
                  id: 'f69f88012978187a6c12897f',
                  ref: 'DEV1049',
                  amount: 30.5,
                  customer: {
                    name: 'Ekaterina Tankova'
                  },
                  createdAt: 1555016400000,
                  status: 'pending'
                },
                {
                  id: '9eaa1c7dd4433f413c308ce2',
                  ref: 'DEV1048',
                  amount: 25.1,
                  customer: {
                    name: 'Cao Yu'
                  },
                  createdAt: 1555016400000,
                  status: 'delivered'
                },
                {
                  id: '01a5230c811bd04996ce7c13',
                  ref: 'DEV1047',
                  amount: 10.99,
                  customer: {
                    name: 'Alexa Richardson'
                  },
                  createdAt: 1554930000000,
                  status: 'refunded'
                },
                {
                  id: '1f4e1bd0a87cea23cdb83d18',
                  ref: 'DEV1046',
                  amount: 96.43,
                  customer: {
                    name: 'Anje Keizer'
                  },
                  createdAt: 1554757200000,
                  status: 'pending'
                },
                {
                  id: '9f974f239d29ede969367103',
                  ref: 'DEV1045',
                  amount: 32.54,
                  customer: {
                    name: 'Clarke Gillebert'
                  },
                  createdAt: 1554670800000,
                  status: 'delivered'
                },
                {
                  id: 'ffc83c1560ec2f66a1c05596',
                  ref: 'DEV1044',
                  amount: 16.76,
                  customer: {
                    name: 'Adam Denisov'
                  },
                  createdAt: 1554670800000,
                  status: 'delivered'
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
)};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
