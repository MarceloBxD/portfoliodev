"use client";

import React from "react";
import "../styles/_globals.scss";
import { NavHeader } from "@/sections/navHeader";
import { ProgressBar } from "@/components/ProgressBar";
import { Presentation } from "@/sections/Presentation";

export default function Home() {
  return (
    <main>
      <ProgressBar />
      <NavHeader />
      <Presentation />
    </main>
  );
}
