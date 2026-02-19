import React from 'react';
import { Sparkles, Zap } from 'lucide-react';

const WelcomeHeader = () => {
    return (
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[2rem] p-10 text-white relative overflow-hidden shadow-xl mb-8">
            <div className="relative z-10 max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                    <h1 className="text-4xl font-bold">Welcome back, Kushal!</h1>
                    <span className="text-4xl">🚀</span>
                </div>
                <p className="text-purple-100 text-lg mb-8 font-light">
                    Ready to crush your next interview at Google?
                </p>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl mb-8 border border-white/20">
                    <div className="flex gap-4">
                        <span className="text-2xl text-purple-200">❝</span>
                        <p className="font-medium italic text-lg leading-relaxed">
                            Success is where preparation and opportunity meet.
                        </p>
                        <span className="text-2xl text-purple-200 self-end">❞</span>
                    </div>
                </div>

                <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2">
                    Start Daily Practice
                    <Zap size={20} className="fill-purple-600" />
                </button>
            </div>

            {/* Decorative elements */}
            <div className="absolute right-0 bottom-0 h-full w-1/3">
                 <img 
                    src="https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-background_23-2148029483.jpg" 
                    alt="Profile"
                    className="h-[120%] object-cover object-top mask-image-gradient absolute bottom-[-40px] right-10 rounded-lg opacity-90 mix-blend-overlay"
                     style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }} // Simplistic placeholder style
                />
                 {/* Replaced with a placeholder div if image fails or for cleaner look without external assets */}
                 <div className="absolute right-10 bottom-0 h-[90%] w-64 bg-gradient-to-t from-black/20 to-transparent rounded-t-full opacity-50"></div>
            </div>
             <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl -mr-20 -mt-20"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl -ml-10 -mb-10"></div>
        </div>
    );
};

export default WelcomeHeader;
