"use client";

import { Projects } from "@/components/project";
import { projectConfig } from "@/config/projects";
import React from "react";

export default function page() {
  return (
    <div className="container px-4 mx-auto">
      <Projects projects={projectConfig.mainLink} />
    </div>
  );
}
