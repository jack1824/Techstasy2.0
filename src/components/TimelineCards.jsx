import React from "react";

const timelineData = [
  {
    title: "Registration Opens",
    description: "Start your journey by registering for the event.",
    date: "January 1, 2024",
    day: "Day 1",
  },
  {
    title: "Workshop Sessions",
    description: "Participate in various workshops to enhance your skills.",
    date: "February 15, 2024",
    day: "Day 2",
  },
  {
    title: "Hackathon Begins",
    description: "Kick off the hackathon and start building your projects.",
    date: "March 10, 2024",
    day: "Day 3",
  },
  {
    title: "Project Submission",
    description: "Submit your projects for evaluation.",
    date: "March 20, 2024",
    day: "Day 4",
  },
];

function TimelineCards() {
  return <section id="timeline-cards"></section>;
}

export default TimelineCards;

function Cards({ title, description, date, day }) {
  return (
    <div id="cards">
      <h1>{day}</h1>
      <h2>{date}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
