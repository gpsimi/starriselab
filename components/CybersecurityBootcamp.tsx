export default function CybersecurityBootcamp() {
    return (
      <div className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Diploma Programs Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Diploma Programs</h2>
            <div className="flex flex-wrap justify-center gap-8 text-gray-600">
              <p className="text-lg">12-weeks full-time</p>
              <p className="text-lg">30-weeks part-time</p>
            </div>
          </div>
  
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-8">
            ONLINE CYBERSECURITY BOOTCAMP
          </h1>
  
          {/* Description */}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            The immersive education you want, the flexibility you need and a rewarding career in cybersecurity is just a click away.
          </p>
  
          {/* CTA Section */}
          <div className="space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Apply Now
            </button>
            <button className="w-full sm:w-auto border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Download Curriculum
            </button>
          </div>
        </div>
      </div>
    );
  }