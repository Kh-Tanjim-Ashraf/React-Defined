import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Create a function to track the coordinates of mouse position
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }

    // Subscribe an event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Unsubscribe the event-listener to avoid memory-leakage on unmounting the component
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Glowing radial background effect moves with mouse position */}
      <div
        className="absolute inset-0 opacity-30" // `inset-0` puts a wrapper invisible glass stretches every corner of the <section> element
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      ></div>
      {/* Two fixed radial background blobs-Pulsating animation & diffused */}
      <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#fa33d0]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      {/* Code Editor:Started from inner part to outer; following the numbers */}
      {/* 4:IDE Parent Wrapper */}
      <div className="relative order-2 w-full">
        {/* 3:IDE-Outer Layer */}
        <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
          {/* 2:IDE */}
          <div className="bg-linear-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-70 sm:w-87.5 lg:h-112.5 border border-white/5">
            {/* 1:IDE HEADER */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
              {/* 7:Three Dots & App Name */}
              <div className="flex items-center gap-2">
                {/* 5:Three Dots */}
                <div className="flex items-center gap-1 sm:gap-2">
                  {/* 5.1:Red Dot */}
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 "></div>
                  {/* 5.2:Yellow Dot */}
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500 "></div>
                  {/* 5.3:Green Dot */}
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 "></div>
                </div>
                {/* 6:CodeFlow AI */}
                <span className="text-xs sm:text-sm text-gray-300">
                  CodeFlow AI
                </span>
              </div>
              {/* 8:Chevron down icon */}
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
