import { ArrowRight, BookOpen, Users, Pen, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-green-600" />,
      title: "Discover Stories",
      description:
        "Read thousands of articles from writers across the globe on topics that matter to you.",
    },
    {
      icon: <Pen className="w-6 h-6 text-green-600" />,
      title: "Share Your Voice",
      description:
        "Create and share your stories with our easy-to-use editor and reach readers worldwide.",
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "Join the Community",
      description:
        "Connect with other writers and readers, follow your favorites, and build your network.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      title: "Grow Your Audience",
      description:
        "Get your stories in front of the right readers and build a loyal following.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Where good ideas</span>
                  <span className="block text-green-600">find you</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Discover stories, thinking, and expertise from writers on any
                  topic. Share your ideas with millions of readers.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    {/* text-white bg-gradient-to-r from-green-400 via-green-500
                    to-green-600 hover:bg-gradient-to-br focus:ring-4
                    focus:outline-none focus:ring-green-300
                    */}
                    <Link to={"/signup"}>
                      <button
                        className="bg-gradient-to-r from-green-400 via-green-500
                      to-green-600 hover:bg-gradient-to-br focus:ring-4
                      focus:outline-none focus:ring-green-300 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white  md:py-4 md:text-lg md:px-10"
                      >
                        Start Reading <ArrowRight className="ml-2 w-5 h-5" />
                      </button>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link to={"/signup"}>
                      <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10">
                        Start Writing
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to share your story
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div key={index} className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center p-3 bg-green-50 rounded-md shadow-lg">
                        {feature.icon}
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to start sharing?</span>
            <span className="block">Create your account today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-green-100">
            Join our community of writers and readers. Start sharing your
            stories with the world.
          </p>
          <Link to={"/signup"}>
            <button className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 sm:w-auto">
              Sign up for free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
