import React from "react";
import { StatCardType } from "./StatCard.type";
import "./StatCard.css";

interface StatCardsProps {
  stats: StatCardType[];
  darkMode?: boolean;
}

const StatCards: React.FC<StatCardsProps> = ({ stats, darkMode }) => {
  return (
    <div className="stats-cards">
      {stats.map((stat, index) => (
        <div key={index} className={`stat-card ${darkMode ? "dark" : ""}`}>
          <h2>{stat.value}</h2>
          <h4>{stat.title}</h4>
          <a href={stat.link.url}>{stat.link.title}</a>
        </div>
      ))}
    </div>
  );
  <div className="skeleton"></div>;
};

export default StatCards;
