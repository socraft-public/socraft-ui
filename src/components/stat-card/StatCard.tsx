import React from "react";
import "./StatCard.css";
import { StatCardProps } from "./StatCard.type";

const StatCard: React.FC<StatCardProps> = ({ stat, darkMode, loading }) => {
  if (loading)
    return <div className={`skeleton ${darkMode ? "dark" : ""}`}></div>;

  return (
    <div className={`stat-card ${darkMode ? "dark" : ""}`}>
      <h2>{stat.value}</h2>
      <h4>{stat.title}</h4>
      <a href={stat.link.url}>{stat.link.title}</a>
    </div>
  );
};

export default StatCard;
