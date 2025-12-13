import React, { useState } from 'react';
import { Button } from './Button';
import { 
  QuestionType, 
  FillBlankQuestion, 
  RearrangeQuestion, 
  MultipleChoiceQuestion, 
  GrammarSelectQuestion,
  QuizQuestion 
} from '../types';
import { Check, X } from 'lucide-react';

interface BaseCardProps {
  onAnswer: (isCorrect: boolean) => void;
  playSound: (type: 'correct' | 'wrong' | 'click') => void;
}

export const FillBlankCard: React.FC<BaseCardProps & { question: FillBlankQuestion }> = ({ question, onAnswer, playSound }) => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'none' | 'correct' | 'wrong'>('none');

  const handleSelect = (word: string) => {
    if (feedback === 'correct') return; // Locked
    
    setSelectedWord(word);
    playSound('click');
    
    if (word === question.answer) {
      setFeedback('correct');
      playSound('correct');
      onAnswer(true);
    } else {
      setFeedback('wrong');
      playSound('wrong');
      onAnswer(false);
      
      // Reset after short delay to allow retry
      setTimeout(() => {
        setFeedback('none');
        setSelectedWord(null);
      }, 1000);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
      <div className="text-xl font-medium text-gray-700 leading-relaxed text-center">
        {question.parts[0]}
        <span className={`inline-block px-3 py-1 mx-1 border-b-4 font-bold min-w-[80px] text-center transition-colors ${
          feedback === 'correct' ? 'border-green-500 text-green-600 bg-green-50' :
          feedback === 'wrong' ? 'border-red-500 text-red-600 bg-red-50' :
          'border-gray-400 text-brand-blue'
        }`}>
          {selectedWord || '_____'}
        </span>
        {question.parts[1]}
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {question.options.map(word => (
           <button
             key={word}
             onClick={() => handleSelect(word)}
             disabled={feedback === 'correct'}
             className={`px-4 py-2 rounded-xl font-bold transition-all ${
               selectedWord === word && feedback !== 'none'
                 ? feedback === 'correct' ? 'bg-green-100 text-green-700 border-2 border-green-300' : 'bg-red-100 text-red-700 border-2 border-red-300'
                 : 'bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-200'
             }`}
           >
             {word}
           </button>
        ))}
      </div>
    </div>
  );
};

export const RearrangeCard: React.FC<BaseCardProps & { question: RearrangeQuestion }> = ({ question, onAnswer, playSound }) => {
  const [order, setOrder] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'none' | 'correct' | 'wrong'>('none');

  const handleAdd = (word: string) => {
    if (feedback === 'correct') return;
    setOrder(prev => [...prev, word]);
    playSound('click');
  };

  const handleRemove = (index: number) => {
     if (feedback === 'correct') return;
     setOrder(prev => prev.filter((_, i) => i !== index));
     playSound('click');
  };

  const handleCheck = () => {
    const isCorrect = order.join('') === question.correctOrder.join('');
    if (isCorrect) {
      setFeedback('correct');
      playSound('correct');
      onAnswer(true);
    } else {
      setFeedback('wrong');
      playSound('wrong');
      onAnswer(false);
      setTimeout(() => setFeedback('none'), 1500);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
      <div className="min-h-[60px] bg-blue-50/50 rounded-xl border-2 border-brand-blue/30 p-3 flex flex-wrap gap-2 items-center">
        {order.length === 0 && <span className="text-gray-400 text-sm italic w-full text-center">Tap words below to build</span>}
        {order.map((word, idx) => (
          <button key={`${word}-${idx}`} onClick={() => handleRemove(idx)} className="px-3 py-1 bg-brand-yellow rounded-lg font-bold text-yellow-900 text-sm animate-bounce-short">
            {word}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {question.words.map((word, idx) => {
           // Count usage
           const totalInQ = question.words.filter(w => w === word).length;
           const usedInOrder = order.filter(w => w === word).length;
           const isAvailable = usedInOrder < totalInQ;

           return (
             <button
               key={`${word}-${idx}`}
               onClick={() => isAvailable && handleAdd(word)}
               disabled={!isAvailable || feedback === 'correct'}
               className={`px-3 py-2 rounded-xl font-bold border-b-4 transition-all ${
                 !isAvailable ? 'opacity-20 cursor-default border-transparent' : 'bg-white border-gray-200 hover:bg-gray-50 active:mt-1 active:border-b-0'
               }`}
             >
               {word}
             </button>
           );
        })}
      </div>

      <div className="flex justify-between items-center mt-2">
        <div className="h-6">
           {feedback === 'wrong' && <span className="text-red-500 font-bold text-sm">Try again!</span>}
           {feedback === 'correct' && <span className="text-green-500 font-bold text-sm">Great job!</span>}
        </div>
        <Button 
          onClick={handleCheck} 
          variant={feedback === 'correct' ? 'success' : 'primary'}
          disabled={order.length === 0 || feedback === 'correct'}
          className="py-2 px-4 text-sm"
        >
          {feedback === 'correct' ? 'Correct' : 'Check'}
        </Button>
      </div>
       {feedback === 'wrong' && <div className="text-xs text-gray-400 mt-1">Hint: {question.displayAnswer}</div>}
    </div>
  );
};

export const MultipleChoiceCard: React.FC<BaseCardProps & { question: MultipleChoiceQuestion }> = ({ question, onAnswer, playSound }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'none' | 'correct' | 'wrong'>('none');

  const handleSelect = (val: string, isCorrect: boolean) => {
    if (feedback === 'correct') return;
    setSelected(val);
    
    if (isCorrect) {
      setFeedback('correct');
      playSound('correct');
      onAnswer(true);
    } else {
      setFeedback('wrong');
      playSound('wrong');
      onAnswer(false);
      setTimeout(() => {
        setFeedback('none');
        setSelected(null);
      }, 1000);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
      {question.contextImage && (
        <div className="text-center text-4xl mb-2">{question.contextImage}</div>
      )}
      <h3 className="text-lg font-bold text-gray-800 text-center">{question.questionText}</h3>
      <div className="flex flex-col gap-2">
        {question.options.map(opt => (
          <button
            key={opt.value}
            onClick={() => handleSelect(opt.value, opt.isCorrect)}
            disabled={feedback === 'correct'}
            className={`flex items-center p-3 rounded-xl border-2 transition-all text-left ${
              selected === opt.value
                ? feedback === 'correct' ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50'
                : 'border-transparent bg-gray-50 hover:bg-gray-100'
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold text-sm ${
               selected === opt.value 
               ? feedback === 'correct' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
               : 'bg-white text-gray-500'
            }`}>
              {opt.value}
            </div>
            <span className={`font-medium ${selected === opt.value ? 'font-bold' : 'text-gray-700'}`}>
              {opt.label}
            </span>
            {selected === opt.value && feedback === 'correct' && <Check className="ml-auto text-green-500" size={20} />}
            {selected === opt.value && feedback === 'wrong' && <X className="ml-auto text-red-500" size={20} />}
          </button>
        ))}
      </div>
    </div>
  );
};

export const GrammarSelectCard: React.FC<BaseCardProps & { question: GrammarSelectQuestion }> = ({ question, onAnswer, playSound }) => {
  const [gSel, setGSel] = useState<string>('');
  const [vSel, setVSel] = useState<string>('');
  const [feedback, setFeedback] = useState<'none' | 'correct' | 'wrong'>('none');

  const handleCheck = () => {
    if (feedback === 'correct') return;
    const isCorrect = gSel === question.correctGrammar && vSel === question.correctVocab;
    
    if (isCorrect) {
      setFeedback('correct');
      playSound('correct');
      onAnswer(true);
    } else {
      setFeedback('wrong');
      playSound('wrong');
      onAnswer(false);
      setTimeout(() => setFeedback('none'), 1500);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
       <div className="text-lg text-gray-700 leading-loose flex flex-wrap items-center gap-2">
         <span>{question.preText}</span>
         
         {/* Grammar Options Toggle */}
         <div className="inline-flex rounded-lg bg-gray-100 p-1 border border-gray-200">
           {question.grammarOptions.map((opt) => (
             <button
               key={opt}
               onClick={() => setGSel(opt)}
               disabled={feedback === 'correct'}
               className={`px-3 py-1 rounded-md text-sm font-bold transition-colors ${
                 gSel === opt 
                   ? 'bg-brand-yellow text-yellow-900 shadow-sm' 
                   : 'text-gray-500 hover:bg-gray-200'
               }`}
             >
               {opt}
             </button>
           ))}
         </div>

         <span>{question.midText}</span>
         
         {/* Vocab Options Toggle - Can be large if many options, wrap nicely */}
         <div className="inline-flex flex-wrap gap-1 rounded-lg bg-gray-100 p-1 border border-gray-200">
           {question.vocabOptions.map((opt) => (
             <button
               key={opt}
               onClick={() => setVSel(opt)}
               disabled={feedback === 'correct'}
               className={`px-3 py-1 rounded-md text-sm font-bold transition-colors ${
                 vSel === opt 
                   ? 'bg-brand-blue text-white shadow-sm' 
                   : 'text-gray-500 hover:bg-gray-200'
               }`}
             >
               {opt}
             </button>
           ))}
         </div>

         <span>{question.postText}</span>
       </div>
       
       <div className="flex justify-between items-center mt-4 border-t pt-4">
          <div className="text-sm font-bold">
            {feedback === 'wrong' && <span className="text-red-500">Try again!</span>}
            {feedback === 'correct' && <span className="text-green-500">Perfect!</span>}
          </div>
          <Button 
            onClick={handleCheck} 
            disabled={!gSel || !vSel || feedback === 'correct'}
            className="py-2 px-6 text-sm"
            variant={feedback === 'correct' ? 'success' : 'primary'}
          >
            {feedback === 'correct' ? 'Correct!' : 'Check'}
          </Button>
       </div>
    </div>
  );
};
