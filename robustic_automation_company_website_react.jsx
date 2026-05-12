export default function RobusticAutomationWebsite() {
  const services = [
    {
      title: 'Robotic Pick & Place Systems',
      desc: 'High-speed robotic automation solutions for packaging, sorting, assembly, and industrial material handling.'
    },
    {
      title: 'Soap Packaging Machines',
      desc: 'Servo-controlled horizontal soap packaging machines with reliable performance and precision sealing.'
    },
    {
      title: 'Palletizing Automation',
      desc: 'Automatic palletizing systems for cartons, bags, and industrial products using robotic arms.'
    },
    {
      title: 'PLC & Servo Automation',
      desc: 'Custom PLC programming, HMI development, motion control, and servo synchronization systems.'
    },
    {
      title: 'Industrial Conveyor Systems',
      desc: 'Custom conveyor solutions for production lines, packaging plants, and factory automation.'
    },
    {
      title: 'Machine Retrofits & Upgrades',
      desc: 'Upgrade existing machinery with modern automation, servo systems, and intelligent controls.'
    }
  ];

  const projects = [
    '6-Axis Robotic Pick & Place System',
    'Horizontal Soap Packaging Machine',
    'Servo-Based Conveyor Automation',
    'Automatic Carton Handling System',
    'Industrial Palletizing Robot',
    'PLC-Controlled Production Line'
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              ROBUSTIC AUTOMATION (OPC) PRIVATE LIMITED
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Advanced Industrial Automation, Robotic Systems, Packaging Machinery, PLC Programming, and Smart Manufacturing Solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
                Request Quotation
              </button>

              <button className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-slate-900 transition">
                View Projects
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1200&auto=format&fit=crop"
              alt="Industrial Automation"
              className="rounded-3xl shadow-2xl w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop"
              alt="Automation Engineering"
              className="rounded-3xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6 text-slate-900">About Us</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              ROBUSTIC AUTOMATION (OPC) PRIVATE LIMITED specializes in designing and manufacturing advanced industrial automation systems, robotic solutions, and packaging machinery for modern industries.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We provide innovative automation technologies including robotic pick & place systems, servo automation, PLC programming, conveyor systems, and customized machine development.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                <h3 className="text-3xl font-bold text-blue-700">50+</h3>
                <p className="mt-2">Projects Delivered</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                <h3 className="text-3xl font-bold text-blue-700">24/7</h3>
                <p className="mt-2">Technical Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg">
              Smart Automation Solutions for Modern Industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">Projects & Solutions</h2>
            <p className="text-gray-300 text-lg">
              Industrial Automation Projects Delivered by ROBUSTIC AUTOMATION
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-semibold mb-4">{project}</h3>
                <p className="text-gray-300 leading-relaxed">
                  Custom-engineered industrial automation project focused on reliability, productivity, and intelligent control systems.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Customized Automation Solutions',
              'Experienced Technical Team',
              'High-Speed Servo Technology',
              'Reliable After-Sales Support'
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-md text-center"
              >
                <h3 className="text-xl font-semibold text-slate-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-900 to-slate-900 rounded-[40px] text-white p-12 shadow-2xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Contact ROBUSTIC AUTOMATION</h2>

            <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
              Get in touch for industrial automation projects, robotic systems, packaging machinery, PLC programming, and customized machine development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 p-6 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-3">Phone</h3>
              <p className="text-gray-200">+91 XXXXX XXXXX</p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-3">Email</h3>
              <p className="text-gray-200">info@robusticautomation.com</p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-3">Location</h3>
              <p className="text-gray-200">Haryana, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8 px-6 text-center">
        <p>
          © 2026 ROBUSTIC AUTOMATION (OPC) PRIVATE LIMITED. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
