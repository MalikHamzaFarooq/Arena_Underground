import React from "react";
import Slide2 from "../../Common/Slide2";
import { Grid, Container } from "@mui/material";
import CustomCard from "../../Common/CustomCard";

function SpecialistServices() {
  const servicesData = [
    {
      title: "IT contractors",
      subtitle:
        "The IT sector changes rapidly, and therefore IT specialists need accountants that are able to keep up.",
      link: "/services/it-contractors",
    },
    {
      title: "Dentists",
      subtitle:
        "As specialists in providing tailored accounting services for the dental industry, we understand the specific issues facing today's dental practitioners.",
      link: "/services/dentists",
    },
    {
      title: "Healthcare professionals",
      subtitle: "Are you a surgeon, a physiotherapist or a pharmacist?",
      link: "/services/healthcare-professionals",
    },
    {
      title: "Doctors",
      subtitle:
        "Having in place comprehensive systems for managing your practice and your finances is crucial: those within the medical profession face ever-changing accounting issues.",
      link: "/services/doctors",
    },
    {
      title: "Property companies",
      subtitle:
        "The property sphere has strict rules and regulations that must be adhered to. As your accountants we can help to make sure that you are fully compliant with all of these guidelines.",
      link: "/services/property-companies",
    },
    {
      title: "Barristers",
      subtitle:
        "Here at Stedman Accountants, we have a unique understanding of the issues affecting barristers and members of the Bar.",
      link: "/services/barristers",
    },
  ];

  const heading = "Specialist Services";
  const label =
    "Stedman Accountants prides itself on the one-of-a-kind accountancy, tax and support services its team members offer to those within specialist sectors.";
  return (
    <>
      <Slide2 heading={heading} label={label} />

      <Container>
        <Grid container spacing={5} sx={{ mt: 5 }}>
          {servicesData.map((service, index) => (
            <Grid item xs={12} md={4} lg={4} key={index}>
              <CustomCard title={service.title} subtitle={service.subtitle} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default SpecialistServices;
