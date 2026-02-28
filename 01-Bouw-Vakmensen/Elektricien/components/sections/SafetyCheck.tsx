"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, AlertTriangle, CheckCircle, XCircle, Phone, RotateCcw } from "lucide-react"

const safetyQuestions = [
  {
    id: 1,
    question: "Is uw meterkast ouder dan 25 jaar?",
    risk: "high",
    explanation: "Oude meterkasten voldoen vaak niet meer aan huidige veiligheidsnormen.",
  },
  {
    id: 2,
    question: "Zijn er aluminium draden in uw installatie?",
    risk: "high",
    explanation: "Aluminium bedrading is verouderd en vormt een brandgevaar.",
  },
  {
    id: 3,
    question: "Heeft u een aardlekschakelaar (ALS) in de groepenkast?",
    risk: "high",
    explanation: "Een aardlekschakelaar is verplicht en beschermt tegen elektrische schokken.",
  },
  {
    id: 4,
    question: "Zijn er regelmatig problemen met doorgebrande zekeringen?",
    risk: "medium",
    explanation: "Dit kan duiden op overbelasting van de elektrische installatie.",
  },
  {
    id: 5,
    question: "Heeft u voldoende groepen voor al uw apparaten?",
    risk: "medium",
    explanation: "Te weinig groepen leidt tot overbelasting en brandgevaar.",
  },
]

type RiskLevel = "green" | "orange" | "red"

interface Answer {
  questionId: number
  value: boolean
}

export default function SafetyCheck() {
  const [answers, setAnswers] = useState<Answer[]>([])
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (questionId: number, value: boolean) => {
    const newAnswers = answers.filter((a) => a.questionId !== questionId)
    newAnswers.push({ questionId, value })
    setAnswers(newAnswers)
  }

  const calculateRisk = (): RiskLevel => {
    const highRiskCount = answers.filter((a) => {
      const q = safetyQuestions.find((q) => q.id === a.questionId)
      return q?.risk === "high" && a.value === true
    }).length

    const mediumRiskCount = answers.filter((a) => {
      const q = safetyQuestions.find((q) => q.id === a.questionId)
      return q?.risk === "medium" && a.value === true
    }).length

    if (highRiskCount >= 2) return "red"
    if (highRiskCount === 1 || mediumRiskCount >= 2) return "orange"
    return "green"
  }

  const getRiskInfo = (risk: RiskLevel) => {
    switch (risk) {
      case "red":
        return {
          icon: AlertTriangle,
          title: "Hoog Risico",
          description: "Uw elektrische installatie vereist dringend onderhoud. Neem contact op voor een inspectie.",
          color: "from-red-600 to-red-800",
          borderColor: "border-red-500",
          bgColor: "bg-red-900/20",
        }
      case "orange":
        return {
          icon: AlertTriangle,
          title: "Matig Risico",
          description: "Er zijn enkele aandachtspunten. Een inspectie wordt aanbevolen.",
          color: "from-orange-600 to-orange-800",
          borderColor: "border-orange-500",
          bgColor: "bg-orange-900/20",
        }
      case "green":
        return {
          icon: CheckCircle,
          title: "Laag Risico",
          description: "Uw installatie lijkt in goede staat. Blijf alert op veranderingen.",
          color: "from-green-600 to-green-800",
          borderColor: "border-green-500",
          bgColor: "bg-green-900/20",
        }
    }
  }

  const allAnswered = answers.length === safetyQuestions.length
  const riskLevel = allAnswered ? calculateRisk() : null
  const riskInfo = riskLevel ? getRiskInfo(riskLevel) : null

  const resetCheck = () => {
    setAnswers([])
    setShowResult(false)
  }

  return (
    <section className="py-24 bg-circuit-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-safety-500/20 border border-safety-500/30 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-safety-500" />
              <span className="text-safety-500 font-medium">Veiligheid Check</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Is Uw Meterkast <span className="text-electric-500">Veilig</span>?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Beantwoord 5 korte vragen over uw elektrische installatie en ontdek direct of er risico's zijn.
            </p>
          </motion.div>

          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-circuit-dark/80 backdrop-blur-sm border border-electric-800 rounded-2xl p-6 md:p-8"
          >
            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div
                  key="questions"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {safetyQuestions.map((q, index) => (
                    <motion.div
                      key={q.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-electric-900/30 rounded-xl border border-electric-800/50 hover:border-electric-700 transition-colors"
                    >
                      <p className="text-white font-medium mb-4">{q.question}</p>
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleAnswer(q.id, true)}
                          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
                            answers.find((a) => a.questionId === q.id)?.value === true
                              ? "bg-red-600 text-white"
                              : "bg-electric-900/50 text-gray-400 hover:bg-red-600/20"
                          }`}
                        >
                          <XCircle className="w-4 h-4" />
                          Ja
                        </button>
                        <button
                          onClick={() => handleAnswer(q.id, false)}
                          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
                            answers.find((a) => a.questionId === q.id)?.value === false
                              ? "bg-green-600 text-white"
                              : "bg-electric-900/50 text-gray-400 hover:bg-green-600/20"
                          }`}
                        >
                          <CheckCircle className="w-4 h-4" />
                          Nee
                        </button>
                      </div>
                    </motion.div>
                  ))}

                  {/* Progress */}
                  <div className="mt-6">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Voortgang</span>
                      <span>{answers.length} / {safetyQuestions.length}</span>
                    </div>
                    <div className="h-2 bg-electric-900 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-electric-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${(answers.length / safetyQuestions.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    onClick={() => setShowResult(true)}
                    disabled={!allAnswered}
                    whileHover={allAnswered ? { scale: 1.02 } : {}}
                    whileTap={allAnswered ? { scale: 0.98 } : {}}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                      allAnswered
                        ? "bg-electric-600 hover:bg-electric-700 text-white shadow-electric"
                        : "bg-electric-900/50 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {allAnswered ? "Bekijk Resultaat" : "Beantwoord alle vragen"}
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center"
                >
                  {riskInfo && (
                    <>
                      <div className={`inline-flex p-6 rounded-full bg-gradient-to-br ${riskInfo.color} mb-6`}>
                        <riskInfo.icon className="w-12 h-12 text-white" />
                      </div>
                      
                      <h3 className={`text-3xl font-heading font-bold mb-4 ${
                        riskLevel === "red" ? "text-red-400" : 
                        riskLevel === "orange" ? "text-orange-400" : "text-green-400"
                      }`}>
                        {riskInfo.title}
                      </h3>
                      
                      <div className={`${riskInfo.bgColor} border ${riskInfo.borderColor} rounded-xl p-6 mb-8`}>
                        <p className="text-gray-300 text-lg">{riskInfo.description}</p>
                      </div>

                      {/* Concerns */}
                      {answers.some((a) => a.value === true) && (
                        <div className="text-left mb-8">
                          <h4 className="text-white font-bold mb-4">Geconstateerde aandachtspunten:</h4>
                          <ul className="space-y-2">
                            {answers
                              .filter((a) => a.value === true)
                              .map((a) => {
                                const q = safetyQuestions.find((q) => q.id === a.questionId)
                                return (
                                  <li key={a.questionId} className="flex items-start gap-3 text-gray-400">
                                    <AlertTriangle className="w-5 h-5 text-safety-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                      <p className="text-white">{q?.question}</p>
                                      <p className="text-sm">{q?.explanation}</p>
                                    </div>
                                  </li>
                                )
                              })}
                          </ul>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        {(riskLevel === "red" || riskLevel === "orange") && (
                          <motion.a
                            href="tel:020-1234567"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 flex items-center justify-center gap-2 bg-electric-600 hover:bg-electric-700 text-white px-6 py-4 rounded-xl font-bold transition-colors"
                          >
                            <Phone className="w-5 h-5" />
                            Plan een Inspectie (DEMO)
                          </motion.a>
                        )}
                        <motion.button
                          onClick={resetCheck}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center gap-2 bg-electric-900/50 hover:bg-electric-900 text-white px-6 py-4 rounded-xl font-medium transition-colors"
                        >
                          <RotateCcw className="w-5 h-5" />
                          Opnieuw
                        </motion.button>
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
