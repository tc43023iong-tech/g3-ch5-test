import React, { useState, useEffect } from 'react';
import { QUESTIONS } from './data';
import { QuestionType, QuizQuestion } from './types';
import { Button } from './components/Button';
import { ProgressBar } from './components/ProgressBar';
import { Trophy, Star, RotateCcw, Menu, BookOpen, Gift, Snowflake, Trees } from 'lucide-react';
import { FillBlankCard, RearrangeCard, MultipleChoiceCard, GrammarSelectCard } from './components/QuestionCards';
import { ExplanationCard } from './components/ExplanationCard';

// Christmas Lights Component
const ChristmasLights = () => (
  <div className="flex justify-center gap-2 sm:gap-6 mb-2 overflow-hidden py-4 absolute top-0 left-0 right-0 z-10 pointer-events-none">
    {[...Array(12)].map((_, i) => (
      <div 
        key={i} 
        className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full shadow-lg animate-pulse ${
          i % 4 === 0 ? 'bg-red-500 shadow-red-500/50' : 
          i % 4 === 1 ? 'bg-green-500 shadow-green-500/50' : 
          i % 4 === 2 ? 'bg-yellow-400 shadow-yellow-400/50' :
          'bg-blue-400 shadow-blue-400/50'
        }`} 
        style={{ animationDelay: `${i * 0.1}s`, animationDuration: '1.5s' }} 
      />
    ))}
  </div>
);

// Group questions by section
const SECTIONS = Object.values(QUESTIONS.reduce((acc, q) => {
  (acc[q.section] = acc[q.section] || []).push(q);
  return acc;
}, {} as Record<string, QuizQuestion[]>)).map(qs => ({
  id: qs[0].section,
  questions: qs
}));

const App: React.FC = () => {
  const [currentSectionIdx, setCurrentSectionIdx] = useState(0);
  
  // Track correctly answered questions (by ID) to avoid double points
  const [answeredIds, setAnsweredIds] = useState<Set<string>>(new Set());
  
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  const currentSection = SECTIONS[currentSectionIdx];
  const totalSections = SECTIONS.length;
  const score = answeredIds.size;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSectionIdx]);

  // Init audio on first interaction if not already done
  const ensureAudio = () => {
    if (!audioContext) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      setAudioContext(new AudioCtx());
    }
  };

  const playSound = (type: 'correct' | 'wrong' | 'click') => {
    ensureAudio();
    if (!audioContext) return;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.connect(gain);
    gain.connect(audioContext.destination);
    const now = audioContext.currentTime;

    if (type === 'correct') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.1);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
      osc.start(now);
      osc.stop(now + 0.4);
    } else if (type === 'wrong') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(200, now);
      osc.frequency.linearRampToValueAtTime(100, now + 0.3);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    } else {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, now);
      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    }
  };

  const handleNextSection = () => {
    ensureAudio();
    if (currentSectionIdx < totalSections - 1) {
      setCurrentSectionIdx(prev => prev + 1);
    } else {
      // Finished
      setCurrentSectionIdx(totalSections); // Use as "Result" state index
    }
  };

  const handleQuestionAnswered = (qId: string, isCorrect: boolean) => {
    ensureAudio();
    if (isCorrect) {
      setAnsweredIds(prev => new Set(prev).add(qId));
    }
  };

  // Result Screen
  if (currentSectionIdx >= totalSections) {
    const totalQuestions = QUESTIONS.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-blue-100 to-white relative overflow-hidden">
        {/* Confetti / Snow */}
        <div className="absolute top-10 left-10 text-4xl animate-bounce-short delay-100">❄️</div>
        <div className="absolute top-20 right-10 text-4xl animate-bounce-short delay-300">❄️</div>
        <div className="absolute bottom-10 left-20 text-4xl animate-bounce-short delay-700">🎅</div>

        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center border-4 border-xmas-red relative z-10">
          <div className="mb-6 inline-block p-4 rounded-full bg-xmas-red text-white shadow-lg transform -rotate-6">
             <Gift size={64} />
          </div>
          <h2 className="text-3xl font-black text-xmas-green mb-2">Merry Christmas! 🎄</h2>
          <p className="text-gray-500 mb-6">You did a great job on the quiz!</p>
          
          <div className="bg-green-50 rounded-2xl p-6 mb-8 border-2 border-green-200 dashed">
             <div className="text-5xl font-black text-xmas-red mb-2">{score} / {totalQuestions}</div>
             <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Final Score</div>
             <div className="mt-4 flex justify-center gap-1">
               {[1, 2, 3].map(i => (
                 <Star key={i} size={32} className={percentage > (i * 30) ? "text-xmas-gold fill-current drop-shadow-sm" : "text-gray-200"} />
               ))}
             </div>
          </div>

          <Button onClick={() => window.location.reload()} variant="primary" className="w-full justify-center bg-xmas-red">
            <RotateCcw className="mr-2" size={20} /> Play Again
          </Button>
        </div>
      </div>
    );
  }

  // Section Screen
  const instruction = currentSection.questions[0].instruction;

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans relative">
      <ChristmasLights />

      {/* Decorative fixed elements */}
      <div className="fixed bottom-4 right-4 text-4xl md:text-6xl opacity-20 pointer-events-none z-0">🎄</div>
      <div className="fixed top-20 left-4 text-4xl opacity-10 pointer-events-none z-0">❄️</div>

      {/* Sidebar Navigation (Desktop) */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 h-screen sticky top-0 p-6 overflow-y-auto z-20 shadow-lg">
        <div className="flex items-center gap-2 mb-8 text-xmas-red mt-4">
          <Trees size={28} />
          <h1 className="font-black text-2xl tracking-tight">Merry Quiz 🎄</h1>
        </div>
        
        <nav className="flex-1 space-y-2">
          {SECTIONS.map((sec, idx) => (
            <button
              key={sec.id}
              onClick={() => {
                ensureAudio();
                setCurrentSectionIdx(idx);
              }}
              className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all flex items-center justify-between ${
                currentSectionIdx === idx 
                  ? 'bg-xmas-red text-white shadow-md' 
                  : 'text-gray-500 hover:bg-red-50 hover:text-red-700'
              }`}
            >
              <span>Part {sec.id}</span>
              {currentSectionIdx === idx && <Snowflake size={16} className="animate-spin-slow" />}
            </button>
          ))}
        </nav>
        
        <div className="mt-auto pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between bg-red-50 px-4 py-3 rounded-xl border border-red-100">
            <span className="text-sm font-bold text-gray-400">Score</span>
            <div className="flex items-center gap-2">
              <Gift size={18} className="text-xmas-red" />
              <span className="font-bold text-gray-800 text-lg">{score}</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center p-4 pb-40 md:p-8 pt-16 z-10">
        
        {/* Mobile Header / Nav */}
        <div className="md:hidden w-full max-w-3xl mb-6 sticky top-0 bg-white/90 backdrop-blur z-30 py-3 border-b border-gray-100 rounded-b-xl shadow-sm">
           <div className="flex justify-between items-center px-2">
             <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar items-center">
                <span className="text-xl mr-1">🎄</span>
                {SECTIONS.map((sec, idx) => (
                  <button
                    key={sec.id}
                    onClick={() => {
                      ensureAudio();
                      setCurrentSectionIdx(idx);
                    }}
                    className={`whitespace-nowrap px-3 py-1 rounded-full text-sm font-bold transition-all border ${
                      currentSectionIdx === idx 
                        ? 'bg-xmas-red text-white border-xmas-red shadow-sm' 
                        : 'bg-white text-gray-500 border-gray-200'
                    }`}
                  >
                    Part {sec.id}
                  </button>
                ))}
             </div>
             <div className="flex-shrink-0 flex items-center gap-1 bg-red-50 px-3 py-1 rounded-full border border-red-100 ml-2">
               <Gift size={16} className="text-xmas-red" />
               <span className="font-bold text-gray-700 text-sm">{score}</span>
             </div>
           </div>
        </div>

        <div className="w-full max-w-3xl relative">
          
          <ProgressBar current={currentSectionIdx} total={totalSections} />

          <ExplanationCard sectionId={currentSection.id} />

          <div className="mb-8 text-center relative">
            {/* Hanging ornament decoration */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-2xl animate-bounce-short">🎗️</div>
            
            <h2 className="text-gray-700 text-lg md:text-xl font-bold bg-white inline-block px-8 py-3 rounded-full shadow-sm border-2 border-green-100">
              {instruction}
            </h2>
          </div>

          <div className="space-y-6">
            {currentSection.questions.map((q, idx) => (
              <div key={q.id} className="relative group">
                <div className="absolute -left-3 -top-3 w-8 h-8 bg-xmas-green text-white rounded-full flex items-center justify-center font-bold shadow-sm z-10 border-2 border-white group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                {/* White card background with slight transparency for snow effect behind */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 hover:border-red-200 transition-colors">
                  {q.type === QuestionType.FILL_BLANK && (
                    <FillBlankCard 
                      question={q as any} 
                      onAnswer={(c) => handleQuestionAnswered(q.id, c)} 
                      playSound={playSound} 
                    />
                  )}
                  {q.type === QuestionType.REARRANGE && (
                    <RearrangeCard 
                      question={q as any} 
                      onAnswer={(c) => handleQuestionAnswered(q.id, c)} 
                      playSound={playSound} 
                    />
                  )}
                  {q.type === QuestionType.MULTIPLE_CHOICE && (
                    <MultipleChoiceCard 
                      question={q as any} 
                      onAnswer={(c) => handleQuestionAnswered(q.id, c)} 
                      playSound={playSound} 
                    />
                  )}
                  {q.type === QuestionType.GRAMMAR_SELECT && (
                    <GrammarSelectCard 
                      question={q as any} 
                      onAnswer={(c) => handleQuestionAnswered(q.id, c)} 
                      playSound={playSound} 
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Encouragement Box */}
          <div className="bg-white rounded-2xl p-6 text-center shadow-md border-2 border-xmas-gold/30 mt-8 mb-4 transform transition-all hover:scale-[1.02] relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 via-green-400 to-red-400"></div>
            <h3 className="text-xl md:text-2xl font-black text-xmas-red flex items-center justify-center gap-2">
              ✨ 繼續加油！ Keep it up! ✨
            </h3>
            <div className="text-sm text-gray-400 mt-1">You are doing great! 🎅</div>
          </div>

          {/* Footer Nav for Mobile & Desktop Bottom */}
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t-4 border-xmas-red shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex justify-center z-30 md:left-64">
             <div className="w-full max-w-3xl flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-xmas-green font-bold text-sm hidden sm:inline bg-green-50 px-3 py-1 rounded-full">
                    Part {currentSectionIdx + 1} of {totalSections}
                  </span>
                </div>
                <span className="sm:hidden"></span>
                <Button onClick={handleNextSection} variant="primary" className="shadow-lg px-8 w-full sm:w-auto">
                  {currentSectionIdx === totalSections - 1 ? 'Finish Quiz 🎁' : 'Next Part ➡️'}
                </Button>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;