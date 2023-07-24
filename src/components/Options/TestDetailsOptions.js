const TestTypeOptions = [
  { value: "assessment", label: "Assessment" },
  { value: "homework", label: "Homework" },
  { value: "omr_assessment", label: "Omr-Assessment" },
];

const TestFormatOptions = [
  { value: "part_test", label: "Part Test" },
  { value: "major_test", label: "Major Test" },
  { value: "full_syllabus_test", label: "Full Syllabus Test" },
  { value: "evaluation_test", label: "Evaluation Test" },
  { value: "hiring_test", label: "Hiring Test" },
  { value: "homework", label: "Homework" },
];

const TestPurposeOptions = [
  { value: "baseline", label: "Baseline" },
  { value: "endline", label: "Endline" },
  { value: "weekly_test", label: "Weekly Test" },
  { value: "monthly_test", label: "Monthly Test" },
  { value: "reshuffling_test", label: "Reshuffling Test" },
  { value: "selection_test", label: "Selection Test" },
  { value: "one_time_test", label: "One Time Test" },
];

const TestPlatformOptions = [{ value: "Quiz", label: "Quiz" }];

const MarkingSchemeOptions = [
  { value: "4,-1", label: "4 , -1" },
  { value: "1,0", label: "1, 0" },
];

export {
  MarkingSchemeOptions,
  TestFormatOptions,
  TestPurposeOptions,
  TestPlatformOptions,
  TestTypeOptions,
};