import Link from 'next/link';
import { ExternalLink, Github, ArrowRight, Smartphone, Database, Globe, ShoppingCart, BarChart, Shield } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A comprehensive online marketplace with AI-powered product recommendations, advanced search, and seamless payment processing.',
      image: '/api/placeholder/600/400',
      category: 'E-commerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AI/ML'],
      icon: ShoppingCart,
      features: [
        'AI-powered recommendations',
        'Advanced search & filtering',
        'Multi-payment gateway',
        'Real-time inventory',
        'Admin dashboard'
      ],
      link: '#',
      github: '#'
    },
    {
      title: 'Healthcare Management System',
      description: 'A complete healthcare solution with patient management, appointment scheduling, and telemedicine capabilities.',
      image: '/api/placeholder/600/400',
      category: 'Healthcare',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'WebRTC'],
      icon: Shield,
      features: [
        'Patient records management',
        'Appointment scheduling',
        'Telemedicine integration',
        'HIPAA compliance',
        'Analytics dashboard'
      ],
      link: '#',
      github: '#'
    },
    {
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication, real-time transactions, and AI-powered fraud detection.',
      image: '/api/placeholder/600/400',
      category: 'Fintech',
      technologies: ['React Native', 'Node.js', 'Redis', 'Blockchain'],
      icon: Smartphone,
      features: [
        'Biometric authentication',
        'Real-time transactions',
        'AI fraud detection',
        'Investment tracking',
        'Secure messaging'
      ],
      link: '#',
      github: '#'
    },
    {
      title: 'Learning Management System',
      description: 'An AI-powered educational platform with personalized learning paths, progress tracking, and interactive content.',
      image: '/api/placeholder/600/400',
      category: 'EdTech',
      technologies: ['Next.js', 'Python', 'TensorFlow', 'MongoDB'],
      icon: Globe,
      features: [
        'Personalized learning paths',
        'AI tutoring system',
        'Progress analytics',
        'Interactive content',
        'Certification system'
      ],
      link: '#',
      github: '#'
    },
    {
      title: 'Business Intelligence Dashboard',
      description: 'A comprehensive analytics platform with real-time data visualization, predictive analytics, and automated reporting.',
      image: '/api/placeholder/600/400',
      category: 'Analytics',
      technologies: ['React', 'D3.js', 'Python', 'Apache Kafka'],
      icon: BarChart,
      features: [
        'Real-time dashboards',
        'Predictive analytics',
        'Automated reporting',
        'Data visualization',
        'Custom metrics'
      ],
      link: '#',
      github: '#'
    },
    {
      title: 'IoT Fleet Management',
      description: 'A comprehensive fleet management solution with real-time tracking, predictive maintenance, and route optimization.',
      image: '/api/placeholder/600/400',
      category: 'IoT',
      technologies: ['React', 'Node.js', 'IoT Sensors', 'Machine Learning'],
      icon: Database,
      features: [
        'Real-time tracking',
        'Predictive maintenance',
        'Route optimization',
        'Driver analytics',
        'Fuel monitoring'
      ],
      link: '#',
      github: '#'
    }
  ];

  // const categories = ['All', 'E-commerce', 'Healthcare', 'Fintech', 'EdTech', 'Analytics', 'IoT'];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses 
            transform their digital presence with cutting-edge solutions.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each project represents our commitment to excellence, innovation, and client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                    <project.icon className="h-16 w-16 text-blue-600" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-sm text-gray-500">
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={project.link}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>View Project</span>
                    </a>
                    <a
                      href={project.github}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak to our success and client satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures every project is delivered on time and exceeds expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600">We understand your business goals and technical requirements.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-gray-600">We create wireframes, mockups, and interactive prototypes.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-600">We build your solution using agile methodologies and best practices.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Deployment</h3>
              <p className="text-gray-600">We deploy your solution and provide ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your ideas and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2">
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
