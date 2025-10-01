import Link from 'next/link';
import { ArrowRight, Code, Smartphone, Database, Zap, Star, Users, Award, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI-Powered Software Development
              <span className="block text-cyan-300">for the Modern World</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI-assisted development. 
              We build websites, mobile apps, and management systems that drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2">
                <span>Book a Demo</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/pricing" className="btn-secondary text-lg px-8 py-4">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Syntrix Section */}
      <section className="section-padding bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Syntrix</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a team of passionate developers and AI specialists dedicated to creating 
              innovative software solutions that help businesses thrive in the digital age.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Expert Team</h3>
              <p className="text-gray-600 leading-relaxed">Our diverse team brings together top talent in AI, software engineering, and design to deliver exceptional results.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Proven Track Record</h3>
              <p className="text-gray-600 leading-relaxed">Delivering successful projects for clients across various industries worldwide with consistent quality.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Innovation at Core</h3>
              <p className="text-gray-600 leading-relaxed">Constantly exploring new technologies and AI advancements to provide cutting-edge solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive software development solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                <Code className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Website Development</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Crafting responsive, high-performance websites with modern frameworks and AI enhancements for optimal user experience.
              </p>
              <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-3 w-full justify-center">
                <span>Book Demo</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                <Smartphone className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Mobile App Development</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Building intuitive and powerful mobile applications for iOS and Android platforms with cutting-edge technology.
              </p>
              <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-3 w-full justify-center">
                <span>Book Demo</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                <Database className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Management Systems</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Developing custom AI-driven management systems to streamline your operations and boost productivity.
              </p>
              <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-3 w-full justify-center">
                <span>Book Demo</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Syntrix?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with AI innovation to deliver solutions that exceed expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">AI-Powered Solutions</h3>
              <p className="text-gray-600 leading-relaxed">Integrating advanced AI to make your software smarter and more efficient.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Client-Centric Approach</h3>
              <p className="text-gray-600 leading-relaxed">Your vision is our priority. We work closely with you to bring your ideas to life.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Global Reach</h3>
              <p className="text-gray-600 leading-relaxed">Serving businesses worldwide with reliable and scalable software solutions.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Proven Excellence</h3>
              <p className="text-gray-600 leading-relaxed">Delivering exceptional results with a track record of successful projects.</p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our AI-powered solutions can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started Today
            </Link>
            <Link href="/pricing" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              View Our Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}