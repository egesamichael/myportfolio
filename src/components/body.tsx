import ExperienceSection from "./experience";
import TechnologiesSection from "./techstack";

export default function Main() {
  return (
    <div className="flex flex-wrap gap-8 px-10 py-4 max-w-7xl mx-auto">
      {/* Left side: Experience */}
      <div className="flex-1 min-w-[300px]">
        <ExperienceSection />
      </div>

      {/* Right side: Technologies */}
      <div className="flex-1 min-w-[300px]">
        <TechnologiesSection />
      </div>
    </div>
  );
}