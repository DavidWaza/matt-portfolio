import React, { ReactNode, FC } from "react";

interface WorkProps {
  timeline: string;
  company: string;
  role: string;
  children?: ReactNode;
}
const WorkTimeline: FC<WorkProps> = ({ timeline, company, role, children }) => {
  return (
    <div className="grid lg:grid-cols-2">
      <div className="text-slate-400 leading-relaxed antialiased">
        {timeline}
      </div>
      <div>
        <p className="text-slate-200 leading-tight font-medium text-lg">
          {company}
        </p>
        <p className="text-[#E25F40] leading-relaxed antialiased ">{role}</p>
        {children}
      </div>
    </div>
  );
};

export default WorkTimeline;
