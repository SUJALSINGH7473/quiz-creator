import { Step } from "@/pages/SessionCreator";
import { MyForm } from "@/types/FormTypes";
import { ActiveFormProps } from "@/types/types";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  HasSyncedOptions,
  IsEnabledOptions,
  SessionTypeOptions,
} from "../Options/TimelineOptions";
import SelectField from "./Form/SelectedField";

export default function Timeline({
  data,
  setActiveStep,
  setData,
  createSession,
}: ActiveFormProps) {
  const { register, handleSubmit, control, reset } = useForm<MyForm>({
    defaultValues: { ...data.timeline },
  });

  const onSubmit: SubmitHandler<MyForm> = (timeline) => {
    setData((prevData) => ({ ...prevData, timeline }));
    createSession!();
    reset();
  };

  return (
    <div className="bg-white rounded-2 border border-solid border-[#B52326] sm:m-10 m-5 rounded-lg">
      <form
        className="flex flex-col items-center m-[60px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <div className="flex sm:mb-5 sm:space-x-5 mb-3 space-x-1 flex-col sm:flex-row space-y-3 sm:space-y-0">
            <label className="text-xs sm:text-sm">Start Date</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded sm:w-full sm:p-2.5 w-20"
              placeholder="Start Date"
              type="date"
              required
              {...register("startDate")}
            />
            <label className="text-xs sm:text-sm">End Date</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded  sm:w-full sm:p-2.5  w-20"
              placeholder="End Date"
              type="date"
              required
              {...register("endDate")}
            />
          </div>
        </div>

        <div className="flex sm:mb-5 sm:space-x-5 space-x-1 mt-3 flex-col md:flex-row space-y-3 sm:space-y-0">
          <p className="text-xs sm:text-sm">Start Time</p>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded block sm:w-full sm:p-2.5"
            placeholder="Start Time"
            type="time"
            required
            {...register("startTime")}
          />
          <p className="text-xs sm:text-sm">End Time</p>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded block sm:w-full sm:p-2.5"
            placeholder="End Time"
            type="time"
            required
            {...register("endTime")}
          />
        </div>

        <SelectField
          control={control}
          name_="isEnabled"
          options={IsEnabledOptions}
        />
        <SelectField
          control={control}
          name_="sessionType"
          options={SessionTypeOptions}
        />
        <SelectField
          control={control}
          name_="synced"
          options={HasSyncedOptions}
        />
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5 mt-10"
          placeholder="Report Schedule"
          required
          {...register("reportSchedule")}
        />
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5 mt-10"
          placeholder="Report Link"
          required
          {...register("reportLink")}
        />

        <div className="w-full flex justify-between">
          <button
            className="rounded-lg sm:w-44 w-10 text-xs h-8 bg-[#B52326] text-white sm:h-11 mt-10"
            onClick={() => {
              setActiveStep(Step.TEST_DETAILS);
            }}
          >
            Back
          </button>
          <button
            type="submit"
            className="rounded-lg sm:w-44 text-xs w-10 h-8 bg-[#B52326] text-white sm:h-11 mt-10"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}