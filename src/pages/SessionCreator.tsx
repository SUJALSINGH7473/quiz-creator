import Stepper from "@/components/Stepper";
import StudentDetails from "@/components/Steps/StudentDetails";
import { TestDetails } from "@/components/Steps/TestDetails";
import Timeline from "@/components/Steps/Timeline";
import { RowType } from "@/types/types";
import { useRouter } from "next/router";

import { useState } from "react";

export enum Step {
  STUDENT_DETAILS = "StudentDetails",
  TEST_DETAILS = "TestDetails",
  TIMELINE = "Timeline",
}

const stepArr: string[] = [
  Step.STUDENT_DETAILS,
  Step.TEST_DETAILS,
  Step.TIMELINE,
];

export default function SessionCreator() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState<string>(Step.STUDENT_DETAILS);
  const [data, setData] = useState<RowType>({
    student: {},
    test: {},
    timeline: {},
  });
  console.log(data!);

  const createSession = () => {
    console.log(data!);
    // TODO: POST DATA FUNCTION HERE

    // setTimeout(() => router.push('/'), 2000);
  };

  const activeForm = () => {
    if (activeStep === Step.STUDENT_DETAILS) {
      return (
        <StudentDetails
          data={data}
          setActiveStep={setActiveStep}
          setData={setData}
        />
      );
    } else if (activeStep === Step.TEST_DETAILS) {
      return (
        <TestDetails
          data={data}
          setActiveStep={setActiveStep}
          setData={setData}
        />
      );
    } else {
      return (
        <Timeline
          data={data}
          setActiveStep={setActiveStep}
          setData={setData}
          createSession={createSession}
        />
      );
    }
  };
  return (
    <>
      <div className="md:flex md:justify-around mt-5 flex flex-col items-center md:flex-row text-xs md:text-lg">
        <div>Session Creator</div>
        <div>Created Date: 26-06-2023</div>
        <div>Created By: Arya Jain</div>
      </div>
      <Stepper steps={stepArr} activeStep={activeStep} />
      {activeForm()}
    </>
  );
}