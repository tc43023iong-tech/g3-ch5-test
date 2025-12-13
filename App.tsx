import React, { useState, useEffect } from 'react';
import { QUESTIONS } from './data';
import { QuestionType, QuizQuestion } from './types';
import { Button } from './components/Button';
import { ProgressBar } from './components/ProgressBar';
import { Trophy, Star, RotateCcw, Menu, BookOpen } from 'lucide-react';
import { FillBlankCard, RearrangeCard, MultipleChoiceCard, GrammarSelectCard } from './components/QuestionCards';
import { ExplanationCard } from './components/ExplanationCard';

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
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-brand-blue to-blue-200">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
          <div className="mb-6 inline-block p-4 rounded-full bg-brand-yellow text-brand-orange">
             <Trophy size={64} />
          </div>
          <h2 className="text-3xl font-black text-gray-800 mb-2">Quiz Finished!</h2>
          <p className="text-gray-500 mb-6">Excellent effort!</p>
          
          <div className="bg-gray-50 rounded-2xl p-6 mb-8 border-2 border-gray-100">
             <div className="text-5xl font-black text-brand-blue mb-2">{score} / {totalQuestions}</div>
             <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Final Score</div>
             <div className="mt-4 flex justify-center gap-1">
               {[1, 2, 3].map(i => (
                 <Star key={i} size={32} className={percentage > (i * 30) ? "text-brand-yellow fill-current" : "text-gray-300"} />
               ))}
             </div>
          </div>

          <Button onClick={() => window.location.reload()} variant="primary" className="w-full justify-center">
            <RotateCcw className="mr-2" size={20} /> Play Again
          </Button>
        </div>
      </div>
    );
  }

  // Section Screen
  const instruction = currentSection.questions[0].instruction;

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col md:flex-row font-sans">
      
      {/* Sidebar Navigation (Desktop) */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 h-screen sticky top-0 p-6 overflow-y-auto">
        <div className="flex items-center gap-2 mb-8 text-brand-blue">
          <BookOpen size={28} />
          <h1 className="font-black text-2xl tracking-tight">Happy Quiz</h1>
        </div>
        
        <nav className="flex-1 space-y-2">
          {SECTIONS.map((sec, idx) => (
            <button
              key={sec.id}
              onClick={() => {
                ensureAudio();
                setCurrentSectionIdx(idx);
              }}
              className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all ${
                currentSectionIdx === idx 
                  ? 'bg-brand-blue text-white shadow-md' 
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
              }`}
            >
              Part {sec.id}
            </button>
          ))}
        </nav>
        
        <div className="mt-auto pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between bg-blue-50 px-4 py-3 rounded-xl">
            <span className="text-sm font-bold text-gray-400">Score</span>
            <div className="flex items-center gap-2">
              <Trophy size={16} className="text-brand-yellow fill-current" />
              <span className="font-bold text-brand-blue text-lg">{score}</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area - Increased bottom padding to pb-40 */}
      <main className="flex-1 flex flex-col items-center p-4 pb-40 md:p-8">
        
        {/* Mobile Header / Nav */}
        <div className="md:hidden w-full max-w-3xl mb-6 sticky top-0 bg-blue-50/95 backdrop-blur z-20 py-2 border-b border-blue-100">
           <div className="flex justify-between items-center px-2">
             <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                {SECTIONS.map((sec, idx) => (
                  <button
                    key={sec.id}
                    onClick={() => {
                      ensureAudio();
                      setCurrentSectionIdx(idx);
                    }}
                    className={`whitespace-nowrap px-3 py-1 rounded-lg text-sm font-bold transition-all ${
                      currentSectionIdx === idx 
                        ? 'bg-brand-blue text-white shadow-sm' 
                        : 'bg-white text-gray-500 border border-gray-100'
                    }`}
                  >
                    Part {sec.id}
                  </button>
                ))}
             </div>
             <div className="flex-shrink-0 flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm ml-2">
               <Trophy size={16} className="text-brand-yellow fill-current" />
               <span className="font-bold text-gray-700 text-sm">{score}</span>
             </div>
           </div>
        </div>

        <div className="w-full max-w-3xl">
          <ProgressBar current={currentSectionIdx} total={totalSections} />

          <ExplanationCard sectionId={currentSection.id} />

          <div className="mb-8 text-center">
            <h2 className="text-gray-600 text-lg md:text-xl font-bold bg-white inline-block px-6 py-3 rounded-full shadow-sm border border-gray-100">
              {instruction}
            </h2>
          </div>

          <div className="space-y-6">
            {currentSection.questions.map((q, idx) => (
              <div key={q.id} className="relative group">
                <div className="absolute -left-3 -top-3 w-8 h-8 bg-brand-yellow text-yellow-900 rounded-full flex items-center justify-center font-bold shadow-sm z-10 border-2 border-white group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
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
            ))}
          </div>

          {/* Encouragement Box */}
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 mt-8 mb-4 transform transition-all hover:scale-[1.02]">
            <h3 className="text-xl md:text-2xl font-black text-brand-blue flex items-center justify-center gap-2">
              ✨ 繼續加油！ Keep it up! ✨
            </h3>
          </div>

          {/* Footer Nav for Mobile & Desktop Bottom */}
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex justify-center z-20 md:left-64">
             <div className="w-full max-w-3xl flex justify-between items-center">
                <span className="text-gray-400 font-bold text-sm hidden sm:inline">
                  Part {currentSectionIdx + 1} of {totalSections}
                </span>
                <span className="sm:hidden"></span>
                <Button onClick={handleNextSection} variant="primary" className="shadow-lg px-8">
                  {currentSectionIdx === totalSections - 1 ? 'Finish Quiz 🏁' : 'Next Part ➡️'}
                </Button>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;