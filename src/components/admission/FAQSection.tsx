import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "What is the admission process?",
    answer: "The admission process includes filling out the inquiry form, attending a school visit or counseling session, submitting required documents, and confirming admission by paying the fees."
  },
  {
    question: "What curriculum does the school follow?",
    answer: "London Look School follows a CBSE-based curriculum, focusing on academic excellence, discipline, creativity, and moral values."
  },
  {
    question: "What are the school hours?",
    answer: "The school operates from Monday to Friday, 8:30 AM to 3:30 PM, with a half-day on Saturdays for special activities."
  },
  {
    question: "Is there a specific school uniform?",
    answer: "Yes, the school has a standard uniform. Detailed information regarding uniforms will be provided upon admission."
  },
  {
    question: "Are there transport facilities available?",
    answer: "Yes, we offer safe and reliable school transport services for students within a certain radius. Contact us for more details."
  }
];

export default function FAQSection() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" fontWeight={700} textAlign="center" color="primary.dark" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Typography variant="body1" textAlign="center" color="textSecondary" mb={4}>
        Find answers to the most commonly asked questions about our school.
      </Typography>

      {faqs.map((faq, index) => (
        <Accordion key={index} sx={{ mb: 2, borderRadius: 2, boxShadow: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontWeight: "bold" }}>
            {faq.question}
          </AccordionSummary>
          <AccordionDetails sx={{ color: "text.secondary" }}>
            {faq.answer}
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}
