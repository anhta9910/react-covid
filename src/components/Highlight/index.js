import { Grid } from "@material-ui/core";
import React from "react";
import HighLightCard from "./HighLightCard";

export default function Highlight({ report }) {
  const data = report && report.length ? report[report.length - 1] : [];

  const summary = [
    {
      title: "So ca nhiem",
      count: data.Confirmed,
      type: "confirmed",
    },
    {
      title: "So ca khoi",
      count: data.Recovered,
      type: "recovered",
    },
    {
      title: "So ca tu vong",
      count: data.Deaths,
      type: "deaths",
    },
  ];

  return (
    <Grid container spacing={3}>
      {summary.map((item) => (
        <Grid item sm={4} xs={12} key={item.title}>
          <HighLightCard
            title={item.title}
            count={item.count}
            type={item.type}
          />
        </Grid>
      ))}
    </Grid>
  );
}
