import React, { useState } from "react";
import styles from "../../styles/Home.module.css";

import Select from "react-select";
import {
  MarkingSchemeOptions,
  TestFormatOptions,
  TestPlatformOptions,
  TestPurposeOptions,
  TestTypeOptions,
  OptionalLimitOptions,
} from "../Options/TestDetailsOptions";

// Renders sub-page containing test details

export default function TestDetails({ setActiveStep }) {
  const [selectedTestType, setSelectedTestType] = useState(null);
  const [selectedTestFormat, setSelectedTestFormat] = useState(null);
  const [selectedTestPurpose, setSelectedTestPurpose] = useState(null);
  const [selectedTestPlatform, setSelectedTestPlatform] = useState(null);
  const [selectedMarkingScheme, setSelectedMarkingScheme] = useState(null);
  const [selectedOptionalLimit, setSelectedOptionalLimit] = useState(null);
  return (
    <>
      <div className="bg-white rounded-2 border border-solid border-[#B52326] sm:m-10 m-5 rounded-lg">
        <form action="" className="flex flex-col items-center m-[60px]">
          <input className={styles.custom_input} placeholder="Test Name" />
          <Select
            className={styles.custom_input}
            options={TestTypeOptions}
            value={selectedTestType}
            onChange={(selectedOption) => setSelectedTestType(selectedOption)}
            instanceId="test_typeSelect"
            isSearchable
            placeholder="Test Type"
          />
          <Select
            className={styles.custom_input}
            options={TestFormatOptions}
            value={selectedTestFormat}
            onChange={(selectedOption) => setSelectedTestFormat(selectedOption)}
            instanceId="test_formatSelect"
            isSearchable
            placeholder="Test Format"
          />
          <Select
            className={styles.custom_input}
            options={TestPurposeOptions}
            value={selectedTestPurpose}
            onChange={(selectedOption) =>
              setSelectedTestPurpose(selectedOption)
            }
            instanceId="test_purposeSelect"
            isSearchable
            placeholder="Test Purpose"
          />
          <Select
            className={styles.custom_input}
            options={TestPlatformOptions}
            value={selectedTestPlatform}
            onChange={(selectedOption) =>
              setSelectedTestPlatform(selectedOption)
            }
            instanceId="test_platformSelect"
            isSearchable
            placeholder="Test Platform"
          />
          <Select
            className={styles.custom_input}
            options={OptionalLimitOptions}
            value={selectedOptionalLimit}
            onChange={(selectedOption) =>
              setSelectedOptionalLimit(selectedOption)
            }
            instanceId="Optional_limitSelect"
            isSearchable
            placeholder="Optional Limit"
          />

          <Select
            className={styles.custom_input}
            options={MarkingSchemeOptions}
            value={selectedMarkingScheme}
            onChange={(selectedOption) =>
              setSelectedMarkingScheme(selectedOption)
            }
            instanceId="marking_schemeSelect"
            isSearchable
            placeholder="Marking Scheme"
          />
          <input className={styles.custom_input} placeholder="Test id" />
          <input
            className={styles.custom_input}
            placeholder="Test Session id"
          />
          <input
            className={styles.custom_input}
            placeholder="Test Session Link"
          />
          <input className={styles.custom_input} placeholder="CMS Test id" />
          <div className="w-full flex justify-between">
            <button
              className="rounded-lg sm:w-44 text-xs w-10 h-8 bg-[#B52326] text-white sm:h-11 mt-10"
              onClick={() => {
                setActiveStep("StudentDetails");
              }}
            >
              Back
            </button>
            <button
              className="rounded-lg sm:w-44 text-xs w-10 h-8 bg-[#B52326] text-white sm:h-11 mt-10"
              onClick={() => {
                setActiveStep("Timeline");
              }}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
