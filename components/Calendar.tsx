"use client";

import { GitHubCalendar, CombinationCalendar,LeetCodeCalendar } from "github-leetcode-component";


export default function Calendar() {
  return (
    <div>
      <div className=" w-full" id="calendar">
      {/* <h1 className="heading py-10">
        My <span className="text-purple">work experience</span>
      </h1> */}
      <div className=" text-center items-center ml-10">
      <h1 className="heading py-10">
        Github <span className="text-purple">Calendar</span>
      </h1>
        <GitHubCalendar username="HarshGalav" size="large" />
      </div>

      <div className="center my-10 ml-10">
      <h1 className="heading py-10">
        Leetcode <span className="text-purple">Calendar</span>
      </h1>
      <LeetCodeCalendar username="harshsharma3122" size="Large" />

      </div>
      
      </div>
    </div>
  );
}