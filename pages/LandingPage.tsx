
import React from 'react';
import Header from '../components/Header';
import { CheckCircleIcon, RocketLaunchIcon, BeakerIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">The Future of Paper Evaluation</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mt-4 mb-6">
              Grade Papers in Seconds with AI
            </h1>
            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Transform your grading workflow with our Gen-AI powered evaluation system. Save time, ensure consistency, and provide nuanced, personalized feedback to your students.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#features" className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300">
                Explore Features
              </a>
              <a href="#" className="px-8 py-3 bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-300 font-semibold rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300">
                Watch Demo
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold">Why Teachers Love EvalAI</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                Powerful features designed to make your grading experience seamless and efficient.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard 
                icon={<RocketLaunchIcon className="h-6 w-6" />}
                title="Automated End-to-End Evaluation"
                description="Our unified AI model processes exam papers, performs semantic analysis, and generates scores in a single step."
              />
              <FeatureCard 
                icon={<CheckCircleIcon className="h-6 w-6" />}
                title="Superior Semantic Accuracy"
                description="Goes beyond simple keyword matching to understand conceptual nuances, paraphrasing, and the true meaning of a student's answer."
              />
              <FeatureCard 
                icon={<BeakerIcon className="h-6 w-6" />}
                title="AI-Driven Personalized Feedback"
                description="Automatically generate detailed, actionable feedback highlighting students' conceptual strengths and weaknesses."
              />
              <FeatureCard 
                icon={<ChartBarIcon className="h-6 w-6" />}
                title="Actionable Analytics"
                description="Gain insights into class-wide performance and identify common student misconceptions to improve your teaching."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold">A Simple, Educator-Centric Workflow</h2>
                </div>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-2xl font-bold mb-4">1</div>
                        <h3 className="text-xl font-bold mb-2">Upload</h3>
                        <p className="text-gray-600 dark:text-gray-400">Easily upload student answer scripts and a master answer key.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-2xl font-bold mb-4">2</div>
                        <h3 className="text-xl font-bold mb-2">Evaluate</h3>
                        <p className="text-gray-600 dark:text-gray-400">Our AI Core processes each script, providing scores and detailed feedback.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-2xl font-bold mb-4">3</div>
                        <h3 className="text-xl font-bold mb-2">Review & Finalize</h3>
                        <p className="text-gray-600 dark:text-gray-400">Review the AI's suggestions, make adjustments, and finalize grades with full control.</p>
                    </div>
                </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} EvalAI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
