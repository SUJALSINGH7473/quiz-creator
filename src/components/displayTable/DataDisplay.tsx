import TableRow from "./Row";
import ReactPaginate from "react-paginate";
import { DbTypes } from "@/types/ResponseTypes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Filter } from "react-feather";

const DataDisplay = ({
  data,
  hasMore,
  currentPage,
}: {
  data: DbTypes[];
  hasMore: boolean;
  currentPage: number;
}) => {
  const router = useRouter();
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [filters, setFilters] = useState({
    testName: "",
    dateCreated: "",
    startDate: "",
    testTakersCount: "",
  });
  const [isDropdownVisible, setIsDropdownVisible] = useState({
    batch: false,
    testName: false,
    dateCreated: false,
    startDate: false,
    testTakersCount: false,
  });

  useEffect(() => {
    setExpandedRow(null);
  }, [currentPage]);

  const handleFilterChange = (column: any, value: any) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [column]: value,
    }));
    // Apply the filters to the data
    applyFilters();
  };

  const applyFilters = () => {
    const filteredData = data.filter((item) => {
      // Apply filtering logic based on selected filters
      return (
        (filters.testName === "" || item.name === filters.testName) &&
        (filters.dateCreated === "" ||
          !item.meta_data?.date_created ||
          new Date(item.meta_data.date_created).toLocaleDateString() ===
            filters.dateCreated) &&
        (filters.startDate === "" ||
          !item.start_time ||
          new Date(item.start_time).toLocaleDateString() ===
            filters.startDate) &&
        (filters.testTakersCount === "" ||
          !item.meta_data?.test_takers_count ||
          item.meta_data.test_takers_count === filters.testTakersCount)
      );
    });
    setFilters({
      ...filters,
    });
  };

  return (
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-x-auto">
        <table className="min-w-full text-center">
          <thead>
            <tr>
              <th className="border-none p-2">S.No</th>
              {/* Batch Column */}
              <th>
                Batch
                <button
                  onClick={() =>
                    setIsDropdownVisible({
                      ...isDropdownVisible,
                      batch: !isDropdownVisible.batch,
                    })
                  }
                  className="ml-2"
                >
                  <Filter size={16} />
                </button>
                {isDropdownVisible.batch && (
                  <div className="dropdown">
                    {data
                      .map((item) => item.meta_data?.batch)
                      .filter(
                        (value, index, self) => self.indexOf(value) === index
                      )
                      .map((batch) => (
                        <div
                          key={batch}
                          onClick={() => handleFilterChange("batch", batch)}
                        >
                          {batch}
                        </div>
                      ))}
                  </div>
                )}
              </th>
              {/* Test Name Column */}
              <th>
                Test Name
                <button
                  onClick={() =>
                    setIsDropdownVisible({
                      ...isDropdownVisible,
                      testName: !isDropdownVisible.testName,
                    })
                  }
                  className="ml-2"
                >
                  <Filter size={16} />
                </button>
                {isDropdownVisible.testName && (
                  <div className="dropdown">
                    {data
                      .map((item) => item.name)
                      .filter(
                        (value, index, self) => self.indexOf(value) === index
                      )
                      .map((testName) => (
                        <div
                          key={testName}
                          onClick={() =>
                            handleFilterChange("testName", testName)
                          }
                        >
                          {testName}
                        </div>
                      ))}
                  </div>
                )}
              </th>
              {/* Date Created Column */}
              <th>
                Date Created
                <button
                  onClick={() =>
                    setIsDropdownVisible({
                      ...isDropdownVisible,
                      dateCreated: !isDropdownVisible.dateCreated,
                    })
                  }
                  className="ml-2"
                >
                  <Filter size={16} />
                </button>
                {isDropdownVisible.dateCreated && (
                  <div className="dropdown">
                    {data
                      .map(
                        (item) =>
                          item.meta_data?.date_created &&
                          new Date(
                            item.meta_data.date_created
                          ).toLocaleDateString()
                      )
                      .filter(
                        (value, index, self) => self.indexOf(value) === index
                      )
                      .map((dateCreated) => (
                        <div
                          key={dateCreated}
                          onClick={() =>
                            handleFilterChange("dateCreated", dateCreated)
                          }
                        >
                          {dateCreated}
                        </div>
                      ))}
                  </div>
                )}
              </th>
              <th>
                Start Date
                <button
                  onClick={() =>
                    setIsDropdownVisible({
                      ...isDropdownVisible,
                      startDate: !isDropdownVisible.startDate,
                    })
                  }
                  className="ml-2"
                >
                  <Filter size={16} />
                </button>
                {isDropdownVisible.startDate && (
                  <div className="dropdown">
                    {data
                      .map(
                        (item) =>
                          item.start_time &&
                          new Date(item.start_time).toLocaleDateString()
                      )
                      .filter(
                        (value, index, self) => self.indexOf(value) === index
                      )
                      .map((startDate) => (
                        <div
                          key={startDate}
                          onClick={() =>
                            handleFilterChange("startDate", startDate)
                          }
                        >
                          {startDate}
                        </div>
                      ))}
                  </div>
                )}
              </th>
              {/* Test Takers Count Column */}
              <th>
                Test Takers Count
                <button
                  onClick={() =>
                    setIsDropdownVisible({
                      ...isDropdownVisible,
                      testTakersCount: !isDropdownVisible.testTakersCount,
                    })
                  }
                  className="ml-2"
                >
                  <Filter size={16} />
                </button>
                {isDropdownVisible.testTakersCount && (
                  <div className="dropdown">
                    {data
                      .map(
                        (item) =>
                          item.meta_data?.test_takers_count &&
                          item.meta_data.test_takers_count
                      )
                      .filter(
                        (value, index, self) => self.indexOf(value) === index
                      )
                      .map((testTakersCount) => (
                        <div
                          key={testTakersCount}
                          onClick={() =>
                            handleFilterChange(
                              "testTakersCount",
                              testTakersCount
                            )
                          }
                        >
                          {testTakersCount}
                        </div>
                      ))}
                  </div>
                )}
              </th>
              <th className="border-none p-2">Report Link</th>
              <th className="border-none p-2">Portal Link</th>
              <th className="border-none p-2">Admin Testing Link</th>
              <th className="border-none p-2 ">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, i) => (
              <TableRow
                row={row}
                index={i}
                key={i}
                currentPage={currentPage}
                itemsPerPage={10}
                isExpanded={i === expandedRow}
                toggleExpand={() =>
                  setExpandedRow(expandedRow === i ? null : i)
                }
              />
            ))}
          </tbody>
        </table>
        <ReactPaginate
          initialPage={currentPage}
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakClassName={"break-me px-2 py-1"}
          pageCount={hasMore ? currentPage + 2 : currentPage + 1}
          onPageChange={({ selected }) => {
            router.push({
              pathname: router.pathname,
              query: {
                ...router.query,
                pageNo: selected,
              },
            });
          }}
          containerClassName={
            "flex flex-wrap justify-between items-center my-4 w-full"
          }
          pageClassName={"mx-1 hidden"}
          previousClassName={
            "mx-1 bg-[#B52326] text-white rounded px-2 py-1 sm:px-3 sm:py-2 hover: bg-[#B52326]"
          }
          nextClassName={
            "mx-1  bg-[#B52326] w-24 text-center text-white rounded px-2 py-1 sm:px-3 sm:py-2 hover: bg-[#B52326]"
          }
          disabledClassName={"opacity-50 cursor-not-allowed"}
        />
      </div>
    </div>
  );
};

export default DataDisplay;
