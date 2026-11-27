const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Developer",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "This AI-powered development platform has revolutionized how we write code. The intelligent suggestions save us hours every day.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Tech Lead",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "The automated testing and debugging features are game-changers. We ship code faster and with more confidence than ever before.",
  },
  {
    name: "Emily Watson",
    role: "CTO",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "Our development velocity increased by 300% since adopting this platform. It's like having a senior developer pair programming with every team member.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
          {/* Left Side: Section Header */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              What developers are saying about us
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto ">
              Everything you need to build, test, and deploy applications with
              AI-powered development tools.
            </p>
          </div>
          {/* Right Side: Testimonials */}
          <div className="w-full lg:w-1/2">
            {/* Wrapper */}
            <div className="space-y-6 sm:space-y-8">
              {testimonials.map((testimonial, key) => (
                // Individual Testimonial
                <div
                  key={key}
                  className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl"
                >
                  {/* Left Side: Quotation Mark */}
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    "
                  </div>
                  {/* Right Side: Writtent Testimonials */}
                  <div className="grow">
                    <p className="text-white text-base lg:text-lg leading-relaxed mb-3 sm:mb-4">
                      {testimonial.content}
                    </p>
                    {/* User DP */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                      />
                      {/* User name, role */}
                      <div>
                        <h4 className="font-semibold text-white text-sm sm:text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
