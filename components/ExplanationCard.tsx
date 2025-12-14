import React from 'react';
import { Lightbulb, MapPin } from 'lucide-react';

interface ExplanationCardProps {
  sectionId: string;
}

export const ExplanationCard: React.FC<ExplanationCardProps> = ({ sectionId }) => {
  if (sectionId === 'D') {
    return (
      <div className="bg-white border-l-8 border-xmas-gold rounded-2xl p-6 shadow-md mb-8 w-full max-w-3xl transform transition-all hover:scale-[1.01] relative overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 opacity-10 text-6xl pointer-events-none">🎄</div>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-xmas-gold p-2 rounded-full text-yellow-900">
            <Lightbulb size={24} />
          </div>
          <h3 className="text-xl font-black text-gray-800">Grammar Time! 🦌</h3>
        </div>
        
        <div className="space-y-4 text-gray-700 relative z-10">
          <div className="bg-green-50 p-4 rounded-xl border border-green-200">
            <p className="font-bold text-xmas-green mb-1">👍 Affirmative (Yes) ✅</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm md:text-base">
              <div>I / You / We / They <span className="font-bold text-gray-900 bg-green-100 px-1 rounded">want</span></div>
              <div>He / She / It <span className="font-bold text-gray-900 bg-green-100 px-1 rounded">wants</span></div>
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-xl border border-red-200">
            <p className="font-bold text-xmas-red mb-1">👎 Negative (No) ❌</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm md:text-base">
              <div>I / You / We / They <span className="font-bold text-gray-900 bg-red-100 px-1 rounded">don't want</span></div>
              <div>He / She / It <span className="font-bold text-gray-900 bg-red-100 px-1 rounded">doesn't want</span></div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
            <p className="font-bold text-brand-blue mb-1">❓ Question 🤔</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm md:text-base">
              <div><span className="font-bold text-gray-900 bg-blue-100 px-1 rounded">Do</span> I / you / we / they ...?</div>
              <div><span className="font-bold text-gray-900 bg-blue-100 px-1 rounded">Does</span> he / she / it ...?</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (sectionId === 'E') {
    return (
      <div className="bg-white border-l-8 border-xmas-green rounded-2xl p-6 shadow-md mb-8 w-full max-w-3xl transform transition-all hover:scale-[1.01] relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 text-6xl pointer-events-none">❄️</div>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-xmas-green p-2 rounded-full text-white">
            <MapPin size={24} />
          </div>
          <h3 className="text-xl font-black text-gray-800">Places 📍</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center relative z-10">
           <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:bg-blue-100 transition-colors shadow-sm">
              <div className="text-4xl mb-2">🏖️</div>
              <div className="font-bold text-gray-700 text-lg">A. Beach</div>
           </div>
           <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100 hover:bg-yellow-100 transition-colors shadow-sm">
              <div className="text-4xl mb-2">🚜</div>
              <div className="font-bold text-gray-700 text-lg">B. Farm</div>
           </div>
           <div className="bg-green-50 p-4 rounded-xl border border-green-100 hover:bg-green-100 transition-colors shadow-sm">
              <div className="text-4xl mb-2">🌳</div>
              <div className="font-bold text-gray-700 text-lg">C. Country Park</div>
           </div>
        </div>
      </div>
    );
  }

  if (sectionId === 'Last Round') {
    return (
      <div className="bg-white border-l-8 border-brand-orange rounded-2xl p-6 shadow-md mb-8 w-full max-w-3xl transform transition-all hover:scale-[1.01] relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 text-6xl pointer-events-none">🎁</div>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-brand-orange p-2 rounded-full text-white">
            <Lightbulb size={24} />
          </div>
          <h3 className="text-xl font-black text-gray-800">Short Answers! 💬</h3>
        </div>

        <div className="text-gray-700 space-y-2 relative z-10">
          <p>Look at the <strong>first word</strong> of the question!</p>
          
          <div className="grid gap-3 mt-4">
             <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg border border-gray-100">
               <span className="font-bold w-16 text-right text-brand-blue">Do...?</span>
               <span>👉</span>
               <span>Yes, ... <strong>do</strong>. / No, ... <strong>don't</strong>.</span>
             </div>
             <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg border border-gray-100">
               <span className="font-bold w-16 text-right text-brand-pink">Can...?</span>
               <span>👉</span>
               <span>Yes, ... <strong>can</strong>. / No, ... <strong>cannot</strong>.</span>
             </div>
             <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg border border-gray-100">
               <span className="font-bold w-16 text-right text-xmas-green">Is...?</span>
               <span>👉</span>
               <span>Yes, ... <strong>is</strong>. / No, ... <strong>is not</strong>.</span>
             </div>
             <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg border border-gray-100">
               <span className="font-bold w-16 text-right text-xmas-red">Are...?</span>
               <span>👉</span>
               <span>Yes, ... <strong>are</strong>. / No, ... <strong>are not</strong>.</span>
             </div>
             <div className="text-xs text-gray-500 pl-2 bg-yellow-50 p-2 rounded">
               ⭐ Note: "Are you...?" 👉 "Yes, I am."
             </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};