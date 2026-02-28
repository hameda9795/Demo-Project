"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Droplets, Leaf, Bug, Recycle,
  Check, RefreshCw, Award
} from "lucide-react";

interface Question {
  id: string;
  question: string;
  icon: typeof Droplets;
  options: { value: number; label: string }[];
}

const questions: Question[] = [
  {
    id: 'rainwater',
    question: 'Heeft u een regenton of regenwateropvang?',
    icon: Droplets,
    options: [
      { value: 0, label: 'Nee' },
      { value: 1, label: '1 regenton' },
      { value: 2, label: 'Meerdere/Geavanceerd systeem' },
    ],
  },
  {
    id: 'native',
    question: 'Plant u inheemse planten (uit Nederland)?',
    icon: Leaf,
    options: [
      { value: 0, label: 'Nee, voornamelijk exoten' },
      { value: 1, label: 'Een aantal' },
      { value: 2, label: 'Voornamelijk inheems' },
    ],
  },
  {
    id: 'insects',
    question: 'Heeft u insectenhotels of nestkastjes?',
    icon: Bug,
    options: [
      { value: 0, label: 'Nee' },
      { value: 1, label: '1-2 items' },
      { value: 2, label: 'Meerdere verspreid' },
    ],
  },
  {
    id: 'compost',
    question: 'Composteert u tuinafval?',
    icon: Recycle,
    options: [
      { value: 0, label: 'Nee, alles bij het afval' },
      { value: 1, label: 'Soms' },
      { value: 2, label: 'Ja, actieve composthoop' },
    ],
  },
];

export function EcoCalculator() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const calculateScore = () => {
    const total = Object.values(answers).reduce((sum, val) => sum + val, 0);
    const maxScore = questions.length * 2;
    return { score: total, maxScore, percentage: Math.round((total / maxScore) * 10) };
  };

  const { score, maxScore, percentage } = calculateScore();

  const getTips = () => {
    const tips = [];
    if (!answers.rainwater || answers.rainwater < 2) {
      tips.push('Installeer een regenton om water te besparen (tot 200L per bui!)');
    }
    if (!answers.native || answers.native < 2) {
      tips.push('Kies voor inheemse planten - beter voor bijen en minder onderhoud');
    }
    if (!answers.insects || answers.insects < 2) {
      tips.push('Plaats een insectenhotel voor meer biodiversiteit');
    }
    if (!answers.compost || answers.compost < 2) {
      tips.push('Start een composthoop voor gratis, rijke bodemverbetering');
    }
    return tips;
  };

  const getTitle = () => {
    if (percentage >= 8) return 'Eco Champion!';
    if (percentage >= 5) return 'Groene Tuinier';
    if (percentage >= 3) return 'Goed Begonnen';
    return 'Nog Ruimte voor Groen';
  };

  const allAnswered = questions.every(q => answers[q.id] !== undefined);

  return (
    <section className="py-24 bg-gradient-to-br from-green-900 via-forest-900 to-green-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 
            bg-white/10 text-green-300 rounded-full text-sm font-medium mb-4">
            <Leaf className="w-4 h-4" />
            Duurzaamheid Check
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Hoe groen is uw tuin?
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ontdek hoe duurzaam uw tuin is en ontvang persoonlijke tips 
            voor een nog groenere leefomgeving.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="space-y-8">
                {questions.map((q, index) => {
                  const Icon = q.icon;
                  return (
                    <motion.div
                      key={q.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <Icon className="w-5 h-5 text-green-600" />
                        </div>
                        <h3 className="font-medium text-forest-900">{q.question}</h3>
                      </div>
                      <div className="grid sm:grid-cols-3 gap-3 ml-11">
                        {q.options.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => handleAnswer(q.id, option.value)}
                            className={`p-3 rounded-xl border-2 text-sm text-left transition-all
                              ${answers[q.id] === option.value
                                ? 'border-green-600 bg-green-50 text-green-700'
                                : 'border-forest-200 hover:border-green-300 text-forest-600'}`}>
                            {answers[q.id] === option.value && (
                              <Check className="w-4 h-4 inline mr-1" />
                            )}
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-10 pt-8 border-t border-forest-100">
                <button
                  onClick={() => setShowResult(true)}
                  disabled={!allAnswered}
                  className={`w-full py-4 rounded-full font-medium text-lg transition-all
                    ${allAnswered
                      ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg'
                      : 'bg-forest-200 text-forest-400 cursor-not-allowed'}`}>
                  Bereken mijn score
                </button>
                {!allAnswered && (
                  <p className="text-center text-forest-400 text-sm mt-2">
                    Beantwoord alle vragen om je resultaat te zien
                  </p>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center">
              {/* Score */}
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-32 h-32 
                  bg-gradient-to-br from-green-500 to-green-600 
                  rounded-full shadow-xl mb-4">
                  <div className="text-white">
                    <Award className="w-12 h-12 mx-auto mb-1" />
                    <span className="text-3xl font-bold">{percentage}/10</span>
                  </div>
                </div>
                <h3 className="font-serif text-3xl text-forest-900 mb-2">{getTitle()}</h3>
                <p className="text-forest-600">
                  U heeft {score} van de {maxScore} punten behaald
                </p>
              </div>

              {/* Leaves visual */}
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(10)].map((_, i) => (
                  <Leaf
                    key={i}
                    className={`w-6 h-6 transition-all ${
                      i < percentage ? 'text-green-500 fill-green-500' : 'text-forest-200'
                    }`}
                  />
                ))}
              </div>

              {/* Water savings estimate */}
              <div className="bg-blue-50 rounded-2xl p-6 mb-8">
                <Droplets className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <p className="text-blue-900 font-medium">
                  Geschatte waterbesparing per jaar
                </p>
                <p className="text-3xl font-bold text-blue-600">
                  {percentage * 500} liter
                </p>
                <p className="text-blue-600 text-sm">
                  Door regenwateropvang en efficiënt bewateren
                </p>
              </div>

              {/* Tips */}
              {getTips().length > 0 && (
                <div className="text-left mb-8">
                  <h4 className="font-medium text-forest-900 mb-4">Tips voor verbetering:</h4>
                  <ul className="space-y-2">
                    {getTips().map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-forest-600">
                        <Leaf className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                onClick={() => { setShowResult(false); setAnswers({}); }}
                className="inline-flex items-center gap-2 px-8 py-4 
                  bg-forest-800 text-white rounded-full font-medium
                  hover:bg-forest-700 transition-colors">
                <RefreshCw className="w-5 h-5" />
                Opnieuw doen
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
