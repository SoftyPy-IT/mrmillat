import React from 'react';
import 'aos/dist/aos.css';



const JourneyToPolitics = () => {
  return (
    <section
    data-aos="fade-up"
    // data-aos-delay="500"
    data-aos-duration="1500"  
    
    className="bg-gray-100 py-16">
    <div className="container mx-auto px-6 lg:px-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-950">Journey to Politics</h2>
        <p className="text-gray-600 mt-4">
          A timeline of significant milestones in the life of <span className="font-semibold text-orange-500">M Rashiduzzaman Millat</span>.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-4 border-blue-700">
        
        {/* Timeline Items */}
        <div
           
        
        className="mb-10 ml-8">
          <div className="absolute w-6 h-6 bg-blue-700 rounded-full -left-3"></div>
          <h3
           data-aos="fade-left"
           data-aos-delay="100"
           data-aos-duration="1500" 
          
          className="text-2xl font-bold text-gray-800">Early Life</h3>
          <p className="text-gray-600 mt-2">
            Born in <span className="font-semibold">Dewanganj Upazila</span>, Jamalpur District, where he spent his early years.
          </p>
        </div>

        <div className="mb-10 ml-8">
          <div className="absolute w-6 h-6 bg-blue-700 rounded-full -left-3"></div>
          <h3
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1500" 
          className="text-2xl font-bold text-gray-800">Rise in Politics</h3>
          <p className="text-gray-600 mt-2">
            Joined the <span className="font-semibold">Bangladesh Nationalist Party (BNP)</span>, becoming the President of Dewanganj Upazila BNP.
          </p>
        </div>

        <div className="mb-10 ml-8">
          <div className="absolute w-6 h-6 bg-blue-700 rounded-full -left-3"></div>
          <h3
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-duration="1500" 
          className="text-2xl font-bold text-gray-800">Elected MP</h3>
          <p className="text-gray-600 mt-2">
            Elected as an MP in <span className="font-semibold">2001</span> from <span className="font-semibold">Jamalpur-1</span> (Dewanganj-Bakshiganj).
          </p>
        </div>

        <div className="mb-10 ml-8">
          <div className="absolute w-6 h-6 bg-blue-700 rounded-full -left-3"></div>
          <h3
          data-aos="fade-left"
          data-aos-delay="700"
          data-aos-duration="1500" 
          className="text-2xl font-bold text-gray-800">Key Achievements</h3>
          <p className="text-gray-600 mt-2">
            Facilitated the construction of a bridge over the Brahmaputra River in Bahadurabad, connecting Dewanganj to northern regions and establishing better road and rail connections to Dhaka.
          </p>
        </div>

        <div className="mb-10 ml-8">
          <div className="absolute w-6 h-6 bg-blue-700 rounded-full -left-3"></div>
          <h3
          data-aos="fade-left"
          data-aos-delay="900"
          data-aos-duration="1500" 
          
          className="text-2xl font-bold text-gray-800">Current Role</h3>
          <p className="text-gray-600 mt-2">
            Serving as the Treasurer of the <span className="font-semibold">BNP Central Committee</span> and Advisor to the &quot; BNP Family Cell&quot;.
          </p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default JourneyToPolitics;