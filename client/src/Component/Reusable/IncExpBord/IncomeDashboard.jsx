import React from "react";
import Income from "../../Dashboard/Income";
import ResentTransation from "./ResentTransation";

function IncomeDashboard() {
  return (
    <>
    {/* income */}
      <ResentTransation heading="Income" />
      <Income  heading="Income"/>
    </>
  );
}

export default IncomeDashboard;
