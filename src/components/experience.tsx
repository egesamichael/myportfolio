'use client';
import React from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    company: "Praise Web Solutions",
    role: "Software Engineer",
    startDate: "Feb 2013",
    endDate: "Present",
    logo: "/images/praise-logo.png",
  },
  {
    company: "Preventive Care",
    role: "Mobile Developer",
    startDate: "Feb 2018",
    endDate: "Feb 2020",
    logo: "/images/uber-logo.png",
  },
  {
    company: "SBCA (USAID)",
    role: "React Native Developer Consultant",
    startDate: "Feb 2020",
    endDate: "Feb 2024",
    logo: "/images/gojek-logo.png",
  },
  {
    company: "Sideplayr",
    role: "Part-time Backend Developer",
    startDate: "Feb 2020",
    endDate: "Present",
    logo: "/images/google-logo.png",
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-white-100 to-white-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>

        <div className="space-y-8">
          {experienceData.map((job, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-6 bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Logo with circular border 
              <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-full shadow-md">
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                  className="w-12 h-12 object-contain"
                />
              </div> */}

              {/* Job Details */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {job.role} at <span className="text-blue-600">{job.company}</span>
                </h3>
                <p className="text-gray-600 text-lg">{job.startDate} – {job.endDate}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}