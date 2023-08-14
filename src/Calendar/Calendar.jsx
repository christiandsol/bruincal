import { Date } from "./CalendarUtilities/Date";
import { cn } from "./CalendarUtilities/cn";
import dayjs from "dayjs";
import "./Calendar.css";
import { useState } from "react";
import { Modal } from "./Modal";

export const Calendar = () => {
  console.log(Date());
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = dayjs();
  const [modal, setModal] = useState(false);
  const [today, setToday] = useState(currentDate);

  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="w-5/6 ">
          <div className="flex  pt-5 pb-5 border rounded-t-lg bg-slate-50">
            <h1 className="ml-7 font-bold flex items-center">
              {months[today.month()]} {today.year()}
            </h1>
            <span className="flex-1"></span>
            <div className="border rounded-md item h-9 font">
              <div className="flex h-full ">
                <div className="hover:bg-slate-100 h-full flex items-center">
                  <button
                    className="rounded-l-lg btn"
                    onClick={() => {
                      setToday(today.month(today.month() - 1));
                    }}
                  >
                    {"<"}
                  </button>
                </div>
                <div className="hover:bg-slate-100 h-full flex items-center">
                  <button
                    onClick={() => {
                      setToday(currentDate);
                    }}
                    className="font-bold pl-2 pr-2  today"
                  >
                    Today
                  </button>
                </div>
                <div className="hover:bg-slate-100 h-full flex items-center">
                  <button
                    onClick={() => {
                      setToday(today.month(today.month() + 1));
                    }}
                    className="rounded-r-lg btn"
                  >
                    {">"}
                  </button>
                </div>
              </div>
            </div>
            <button className="font-bold hover:bg-slate-100 item border rounded-md pl-2 pr-2 font">
              Month View
            </button>

            <button className="font-bold bg-purple-900 rounded-md text-white hover:bg-black item pl-2 pr-3 font">
              Add Event
            </button>
          </div>
          <div className="w-full grid grid-cols-7 border-r">
            {days.map((day, index) => {
              return (
                <h1
                  className="grid place-content-center h-10 text-xs border-l font-bold"
                  key={index}
                >
                  {day}
                </h1>
              );
            })}
          </div>
          <div className="w-full grid grid-cols-7 border-r border-b">
            {Date(today.month(), today.year()).map(
              ({ date, currentMonth, today }, index) => {
                return (
                  <div
                    key={index}
                    className={
                      "h-24 border-t border-l grid place-content-start p-2 text-xs" +
                      cn(currentMonth ? "" : " bg-slate-50")
                    }
                  >
                    <h1
                      className={cn(
                        currentMonth ? "" : "text-gray-500",
                        today ? "bg-purple-800 text-white" : "",
                        " h-7 w-7 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer"
                      )}
                    >
                      {date.date()}
                    </h1>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};
