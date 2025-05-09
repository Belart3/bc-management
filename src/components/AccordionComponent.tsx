import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import PlusIcon from './PlusIcon'
import { Inter } from 'next/font/google';

const inter = Inter(
  { 
    subsets: ['latin'] ,
    variable: "--font-inter",
  }
)
type props = {
    question: string;
    answer: string;
};

export default function AccordionComponent(props: props) {
  return (
    <>
      <Accordion className='border-[#E6E6E6] !rounded-none !shadow-none border-0 !border-y !border-x-0 !m-0 !py-5 !px-2 md:!py-10 md:!px-4 [&_.Mui-expanded]:!m-0 [&_.MuiAccordionSummary-root]:p-0 [&_.MuiAccordionDetails-root]:p-0'>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls={props.question}
          id={props.question}
          expandIcon={<PlusIcon />}
          className='!m-0 !P-0 [&_.MuiAccordionSummary-content]:m-0 [&_.MuiAccordionSummary-content]:p-0'
        >
          <h3 className={`${inter.className} !text-[24px]/[32px] !m-0 !p-0 text-black`}>
            {props.question}
          </h3>
        </AccordionSummary>
        <AccordionDetails className='!mt-5'>
          <p className={`${inter.className} text-[16px]/[24px] text-[#666666]`}>
            {props.answer}
          </p>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
