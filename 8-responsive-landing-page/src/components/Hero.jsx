import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Play, Sparkles } from "lucide-react";
import Button from "./ui/button";
import SyntaxHighlighter from "react-syntax-highlighter";
import { codeExamples, floatingCards } from "../data/CodeExamples";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("App.jsx");

  // File tabs
  const fileTabs = ["App.jsx", "Hero.jsx", "Navbar.jsx"];

  // Active floating Cards
  const activeFloatingCard = floatingCards[activeTab];

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
      {/* [Background] Two fixed radial background blobs-Pulsating animation & diffused */}
      <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#fa33d0]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Hero: Parent Wrapper Container */}
      <div className="max-w-7xl mx-auto w-full text-center relative">
        {/* Hero: Layout changing wrapper; Based on display breakpoint */}
        {/* Note: >1024px (large screen) the display will be flexxed with column level display orientation; In contrast, it will be a grid layout; `sm:gap-8` gets effect while the screen in >640px & it's in flex layout */}
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative">
          {/* Hero Text */}
          <div>
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs sm:text-sm text-blue-300">
                Introducing to CodeFlow AI
              </span>
            </div>
            {/* Tag Line/Website Heading */}
            <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
              <span className="bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                Code Faster
              </span>
              <span className="bg-linear-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2">
                Build Better
              </span>
              <span className="bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                With CodeFlow AI
              </span>
            </h1>
            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed">
              Accelerate your development workflow with intelligent code
              completion, automated testing, and smart debugging. Ship
              production-ready code 10x faster.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300">
              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center gap-2">
                <span>Start Coding Free</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-2">
                <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 duration-300 transition-colors">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
          {/* Hero IDE/Code Editor:Started from inner part to outer; following the numbers */}
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

                {/* File Tab & Code Editor */}
                <div className="p-3 sm:p-4 relative h-full">
                  {/* File tab; `overflow-x-auto` is used to let users on the mobile screen to swipe horizontally instead of breaking the layout */}
                  <div className="flex gap-1 sm:gap-2 mb-3 sm:mb-4 overflow-x-auto">
                    {fileTabs.map((tab, index) => (
                      <Button
                        key={index}
                        onClick={() => setActiveTab(tab)}
                        className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                          activeTab === tab
                            ? "bg-blue-500/30 text-white border-blue-400/20"
                            : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                        } transition-all duration-200 whitespace-nowrap cursor-pointer`}
                      >
                        {tab}
                      </Button>
                    ))}
                  </div>
                  {/* Code Content */}
                  <div className="relative overflow-hidden grow">
                    <SyntaxHighlighter
                      language="javascript"
                      style={nightOwl}
                      customStyle={{
                        margin: 0,
                        borderRadius: "8px",
                        fontSize: "11px",
                        lineHeight: "1.4",
                        height: "100%",
                        border: "1px solid #3c3c3c",
                      }}
                    >
                      {codeExamples[activeTab]}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              {/* Floating Cards; absolute bottom-0 right-0 establishes that starting position: it aligns the div’s bottom-right with the parent’s bottom-right. Then the translations move/nudge it 16px right and down. */}
              <div
                className={`hidden lg:block absolute bottom-0 right-0 transform translate-x-4 translate-y-4 w-72 ${activeFloatingCard.bgColor} backdrop-blur-xl rounded-lg p-4 border border-white/20 shadow-2xl`}
              >
                {/* Header */}
                <div className="flex items-center gap-2 mb-2">
                  {/* Icon */}
                  <div
                    className={`w-6 h-6 ${activeFloatingCard.iconColor} flex items-center justify-center text-sm font-bold`}
                  >
                    {activeFloatingCard.icon}
                  </div>
                  {/* Headline */}
                  <span
                    className={`text-sm font-medium ${activeFloatingCard.textColor}`}
                  >
                    {activeFloatingCard.title}
                  </span>
                </div>
                {/* Content */}
                <p
                  className={`text-sm text-left ${activeFloatingCard.contentColor}`}
                >
                  {activeFloatingCard.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
