import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const features = [
  {
    title: "AI Code Completion",
    description:
      "Intelligent code suggestions powered by advanced AI that learns from your coding patterns. Get real-time assistance with syntax, logic, and best practices.",
    codeSnippet: `function handleSubmit() {
  // AI suggests next line
  const data = await fetch("/api/submit")
  // Auto-completed by AI
}`,
    imagePosition: "left",
  },
  {
    title: "Automated Testing",
    description:
      "Generate comprehensive test suites automatically. Our AI analyzes your code and creates unit tests, integration tests, and edge case coverage.",
    codeSnippet: `describe("User Authentication", () => {
  // Auto-generated tests
  it("should login successfully", () => {
    // Test implementation
  })
})`,
    imagePosition: "right",
  },
  {
    title: "Smart Debugging",
    description:
      "Identify and fix bugs before they reach production. AI-powered error detection and resolution suggestions help you debug faster.",
    codeSnippet: `// AI suggests fix:
const result = await processData(input)
// Fixed: Added await keyword`,
    imagePosition: "left",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative" // Since it's not a Hero section, thus it should have more padding in the both side
    >
      {/* Encompass the entire section */}
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Your Complete Development
            </span>
            <br />
            <span className="bg-linear-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Workflow
            </span>
          </h2>
        </div>

        {/* IDE */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-32">
          {features.map((feature, key) => (
            <div
              key={key}
              className={`flex flex-col lg:grow items-center gap-8 sm:gap-12 ${feature.imagePosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row"}`}
            >
              {/* Code Section */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border group-hover:border-blue-600/50 transition-all duration-300">
                    {/* IDE Interface */}
                    <div className="bg-gray-950 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm">
                      <div className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                        <div className="flex items-center gap-1 sm:gap-2">
                          {/* 5.1:Red Dot */}
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 "></div>
                          {/* 5.2:Yellow Dot */}
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500 "></div>
                          {/* 5.3:Green Dot */}
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 "></div>
                        </div>
                        <span className="text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm">
                          {features.title}
                        </span>
                      </div>
                      <div>
                        <SyntaxHighlighter
                          language="javascript"
                          style={nightOwl}
                          customStyle={{
                            margin: 0,
                            borderRadius: "8px",
                            fontSize: "0.75rem",
                            lineHeight: "1.4",
                            height: "100%",
                            border: "1px solid #3c3c3c",
                            textAlign: "start",
                          }}
                          wrapLines={true}
                        >
                          {feature.codeSnippet}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Section */}
              <div>asodiuasodiu</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
