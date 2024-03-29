"use client";

import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/_globals.scss";
import { NavHeader } from "@/sections/navHeader";
import { ProgressBar } from "@/components/ProgressBar";
import { Presentation } from "@/sections/Presentation";
import { About } from "@/sections/About";

export default function Home() {
  return (
    <main>
      <ProgressBar />
      <NavHeader />
      <Presentation />
      <About />
    </main>
  );
}
