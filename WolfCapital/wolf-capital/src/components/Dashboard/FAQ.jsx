import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const faqData = [
  {
    question: "What is Wolf Capital?",
    answer:
      "Wolf Capital is a revolutionary DeFi staking platform on the BNB Chain. We enable investors to stake USDC, earning up to 547% APY through our unique team-staking model which offers a fresh approach to yield generation.",
  },
  {
    question: "How does staking work?",
    answer: "To get started, you need to...",
  },
  {
    question: "How does staking work?",
    answer: "To get started, you need to...",
  },
  // Add more FAQ items here
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box mt={6}>
      <Container component="lg">
        <Box
          sx={{
            background: "linear-gradient(45deg, #1B1B1B 30%, #282828 70%)",
            borderRadius: "10px",
            p: 6,
            mt: 3,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Wolf Capital FAQ
          </Typography>
          {faqData.map((data, i) => {
            const panel = `panel-${i}`;
            const isExpanded = expanded === panel;
            return (
              <Accordion
                key={i}
                expanded={isExpanded}
                onChange={handleAccordionChange(panel)}
                sx={{
                  background: "#333333",
                  mt: 2,
                }}
              >
                <AccordionSummary
                  expandIcon={
                    isExpanded ? (
                      <BiMinus
                        style={{
                          background: "#414141",
                          p: 1,
                          borderRadius: "50%",
                          color: "#fff",
                        }}
                      />
                    ) : (
                      <BiPlus
                        style={{
                          background: "#414141",
                          p: 1,
                          borderRadius: "50%",
                          color: "#fff",
                        }}
                      />
                    )
                  }
                  aria-controls={`faq-content-${i}`}
                  id={`faq-header-${i}`}
                >
                  <Typography variant="subtitle1" sx={{ color: "#fff" }}>
                    {data.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    background: "#242424",
                  }}
                >
                  <Typography sx={{ color: "#fff" }}>{data.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}

          <Typography
            sx={{
              color: "#fff",
              mt: 6,
              textAlign: "center",
            }}
          >
            We recommend reading{" "}
            <span style={{ color: "#0094FF" }}>GITBOOK</span> to better
            understand how Wolf Capital works.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;
