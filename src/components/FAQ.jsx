import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function FAQ() {
    return (
      <div className='mt-10'>
        <h2 className="text-3xl font-bold text-center mb-12">FAQ: What You Need to Know</h2>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span"><p className="font-bold">How do I take BioBoost Plus?</p></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Take the recommended dose daily with water for best results.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span"><p className="font-bold">How long before I see results?
            </p></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Most people notice increased energy within days and improved fat metabolism within a few weeks.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span"><p className="font-bold">Is this safe to take with other supplements?
            </p></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Yes, but always consult your healthcare provider before starting any new supplement.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span"><p className="font-bold">Can I take this with Semaglutide or other weight loss medications?
            </p></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Yes, BioBoost Plus can be used alone or alongside other weight loss strategies to enhance fat metabolism and energy levels.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }

