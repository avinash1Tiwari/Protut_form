import React from 'react'
import { Tag } from "keep-react";

const ServiceTags = () => {
    const tags = [
        "Project Mentoring",
        "1:1 Session",
        "Resume Review",
        "Mock Interview",
      ];
  return (
    <div className="grid grid-cols-2 gap-3">
      {tags.map((tag, index) => (
        <Tag
          key={index}
          className="bg-indigo-500 text-white p-2 flex items-center justify-center"
          style={{ minWidth: "80px" }}
        >
          {tag}
        </Tag>
      ))}
    </div>
  )
}

export default ServiceTags