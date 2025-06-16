const Team = () => {
  const founders = [
    {
      name: "Emmanuel Machaya",
      role: "CEO & Founder",
      background: "4 years Business Development at Flux",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Blockchain expert with extensive experience in business development and strategic partnerships in the fintech sector."
    },
    {
      name: "Justice Mukaro", 
      role: "COO & Co-Founder",
      background: "3 years Project Management",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=400&h=400&fit=crop&crop=face",
      bio: "Award-winning innovator and data analyst with deep expertise in project management and operational excellence."
    },
    {
      name: "Accuman A. Mafuva",
      role: "CTO & Co-Founder", 
      background: "5+ years Software Engineering",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack wizard and UI/UX designer with extensive experience in building scalable software solutions."
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Meet the
            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Founding Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced professionals with deep expertise in blockchain, fintech, and emerging markets
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group text-center">
              {/* Profile Image */}
              <div className="mb-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden border-4 border-gradient-to-r from-orange-500 to-red-500 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name & Role */}
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {founder.name}
                </h3>
                <div className="text-orange-500 font-semibold mb-2">
                  {founder.role}
                </div>
                <div className="text-sm text-blue-500 mb-4">
                  {founder.background}
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {founder.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Team credentials */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">Proven Track Record</h3>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">12+</div>
              <div className="text-sm text-gray-300">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
              <div className="text-sm text-gray-300">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">3</div>
              <div className="text-sm text-gray-300">Successful Ventures</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">1</div>
              <div className="text-sm text-gray-300">Award-Winning Innovator</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;