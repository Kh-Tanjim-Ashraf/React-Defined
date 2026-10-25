import { useState, useEffect } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Create a function to track the coordinates of mouse position
    function handleMouseMove(e) {
      // console.log(e.clientX, e.clientY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    }

    // Subscribe an event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Unsubscribe the event-listener to avoid memory-leakage on unmounting the component
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // console.log(mousePosition.x, mousePosition.y);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Glowing radial background effect moves with mouse position */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      ></div>
      {/* Two fixed radial background blob-Pulsating animation & diffused */}
      <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#fa33d0]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
}
