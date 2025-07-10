 {/* Team Section */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The talented individuals behind ZeberAI's success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Team Member 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 group">
            <div className="relative overflow-hidden">
         <img 
  src={ceoImg} 
  alt="CEO Portrait" 
  className="w-full h-80 object-cover object-[center_30%] transition duration-500 group-hover:scale-105"
/>


              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex justify-end space-x-3">
                  <a href="#" className="text-white hover:text-blue-300 transition duration-300 cursor-pointer">
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                  <a href="#" className="text-white hover:text-blue-300 transition duration-300 cursor-pointer">
                    <i className="fab fa-twitter text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">Shubham Raj</h3>
              <p className="text-blue-600 mb-3">CEO & Founder</p>
              <p className="text-gray-600">
                CEO of a leading AI and automation company, driving innovation through AI solutions and transformative automation strategies. Experienced in business development and consulting, with a proven track record of delivering impactful, tech-driven growth.  
              </p>
            </div>
          </div>
          
          {/* Team Member 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 group">
            <div className="relative overflow-hidden">
             <img 
  src={ctoImg} 
  alt="CTO Portrait" 
  className="w-full h-80 object-cover object-[center_30%] transition duration-500 group-hover:scale-105"
/>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex justify-end space-x-3">
                  <a href="#" className="text-white hover:text-blue-300 transition duration-300 cursor-pointer">
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                  <a href="#" className="text-white hover:text-blue-300 transition duration-300 cursor-pointer">
                    <i className="fab fa-github text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">Shivam Tiwari</h3>
              <p className="text-blue-600 mb-3">CTO & Co-Founder</p>
              <p className="text-gray-600">
                CTO of an AI and automation company, expert in building strong backend systems and smart AI solutions. Loves turning complex tech into easy, real-world tools that work fast and scale big. 
              </p>
            </div>
          </div>
          
          {/* Team Member 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 group">
            <div className="relative overflow-hidden">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQHfR_13db7FOQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727801814636?e=1752710400&v=beta&t=oJWESWaMQUZRdu72q7eMunWoHeA7kctOsJWyrMagYY0" 
                alt="CAO Portrait" 
               className="w-full h-80 object-cover object-[center_30%] transition duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex justify-end space-x-3">
                  <a href="#" className="text-white hover:text-blue-300 transition duration-300 cursor-pointer">
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                  <a href="#" className="text-white hover:text-blue-300 transition duration-300 cursor-pointer">
                    <i className="fab fa-instagram text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">Pavan Kumar</h3>
              <p className="text-blue-600 mb-3">CAO & Co-Founder</p>
              <p className="text-gray-600">
                As Chief Analytics Officer (CAO), leading the charge in AI innovation, technology integration, and advanced data analysis—focused on transforming raw data into powerful insights and building intelligent AI systems that drive smart decision-making and business growth.
              </p>
            </div>
          </div>
          
          {/* Team Member 4 */}
          {/* <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 group">
            <div className="relative overflow-hidden">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQHfR_13db7FOQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727801814636?e=1752710400&v=beta&t=oJWESWaMQUZRdu72q7eMunWoHeA7kctOsJWyrMagYY0" 
                alt="Head of Product Portrait" 
                className="w-full h-80 object-cover object-top transition duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex justify-end space-x-3">
                  <a href="#" className="text-white hover:text-blue-300 transition duration-300 cursor-pointer">
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                  <a href="#" className="text-white hover:text-blue-300 transition duration-300 cursor-pointer">
                    <i className="fab fa-medium text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">Emily Zhang</h3>
              <p className="text-blue-600 mb-3">Head of Product</p>
              <p className="text-gray-600">
                Product visionary with experience in developing user-centric AI solutions for enterprise clients.
              </p>
            </div>
          </div> */}
          
          {/* Team Member 5 */}
          {/* <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 group">
            <div className="relative overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520a%2520male%2520lead%2520AI%2520engineer%2520in%2520business%2520casual%2520attire%2520with%2520a%2520subtle%2520blue%2520background%252C%2520natural%2520lighting%252C%2520professional%2520headshot%2520style%252C%2520looking%2520directly%2520at%2520camera%2520with%2520a%2520thoughtful%2520expression&width=600&height=600&seq=11&orientation=squarish" 
                alt="Lead AI Engineer Portrait" 
                className="w-full h-80 object-cover object-top transition duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex justify-end space-x-3">
                  <a href="#" className="text-white hover:text-blue-300 transition duration-300 cursor-pointer">
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                  <a href="#" className="text-white hover:text-blue-300 transition duration-300 cursor-pointer">
                    <i className="fab fa-github text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">Alex Thompson</h3>
              <p className="text-blue-600 mb-3">Lead AI Engineer</p>
              <p className="text-gray-600">
                Machine learning specialist focused on developing scalable and efficient AI algorithms.
              </p>
            </div>
          </div> */}
          
          {/* Team Member 6 */}
          {/* <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 group">
            <div className="relative overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520a%2520female%2520client%2520success%2520director%2520in%2520business%2520attire%2520with%2520a%2520subtle%2520blue%2520background%252C%2520natural%2520lighting%252C%2520professional%2520headshot%2520style%252C%2520looking%2520directly%2520at%2520camera%2520with%2520a%2520warm%2520welcoming%2520expression&width=600&height=600&seq=12&orientation=squarish" 
                alt="Client Success Director Portrait" 
                className="w-full h-80 object-cover object-top transition duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex justify-end space-x-3">
                  <a href="#" className="text-white hover:text-blue-300 transition duration-300 cursor-pointer">
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                  <a href="#" className="text-white hover:text-blue-300 transition duration-300 cursor-pointer">
                    <i className="fab fa-twitter text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">Olivia Patel</h3>
              <p className="text-blue-600 mb-3">Client Success Director</p>
              <p className="text-gray-600">
                Customer experience expert dedicated to ensuring clients achieve maximum value from our solutions.
              </p>
            </div>
          </div> */}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Interested in joining our team? Check out our <a href="#" className="text-blue-600 hover:underline cursor-pointer">career opportunities</a>.
          </p>
        </div>
      </div>
    </section>
