import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Badge } from "@/components/ui/badge";

interface WiscarSectionProps {
  onNext: () => void;
}

const WiscarSection = ({ onNext }: WiscarSectionProps) => {
  const [currentDimension, setCurrentDimension] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Record<number, string>>>({});

  const dimensions = [
    {
      id: "will",
      name: "Will",
      icon: "💪",
      description: "Your persistence and determination",
      questions: [
        {
          question: "When facing a challenging environmental problem, how likely are you to persist even when solutions aren't immediately apparent?",
          options: [
            { value: "5", label: "I persist until I find a solution, no matter how long it takes" },
            { value: "4", label: "I usually persist but may seek help after some effort" },
            { value: "3", label: "I persist for a reasonable amount of time" },
            { value: "2", label: "I try briefly but move on if it's too difficult" },
            { value: "1", label: "I prefer to work on easier problems" }
          ]
        },
        {
          question: "How do you typically respond to setbacks in projects you care about?",
          options: [
            { value: "5", label: "See them as learning opportunities and motivation to improve" },
            { value: "4", label: "Feel disappointed but bounce back relatively quickly" },
            { value: "3", label: "Need some time to recover but eventually continue" },
            { value: "2", label: "Get discouraged and may avoid similar challenges" },
            { value: "1", label: "Prefer to switch to something easier" }
          ]
        }
      ]
    },
    {
      id: "interest",
      name: "Interest", 
      icon: "🔍",
      description: "Your genuine curiosity and passion",
      questions: [
        {
          question: "How often do you find yourself reading about environmental issues or innovations in your free time?",
          options: [
            { value: "5", label: "Frequently - it's one of my main interests" },
            { value: "4", label: "Often - I actively seek out this information" },
            { value: "3", label: "Sometimes - when interesting articles come up" },
            { value: "2", label: "Rarely - only when it's particularly newsworthy" },
            { value: "1", label: "Never - it's not something I think about" }
          ]
        }
      ]
    },
    {
      id: "skill",
      name: "Skill",
      icon: "🛠️", 
      description: "Your current abilities and competencies",
      questions: [
        {
          question: "How would you rate your current understanding of basic scientific principles (chemistry, physics, biology)?",
          options: [
            { value: "5", label: "Strong - I have a solid foundation in multiple sciences" },
            { value: "4", label: "Good - I understand most basic concepts" },
            { value: "3", label: "Moderate - I know some basics but have gaps" },
            { value: "2", label: "Limited - I struggle with scientific concepts" },
            { value: "1", label: "Weak - Science has always been challenging for me" }
          ]
        }
      ]
    },
    {
      id: "cognitive", 
      name: "Cognitive Readiness",
      icon: "🧠",
      description: "Your learning ability and mental agility",
      questions: [
        {
          question: "When learning new technical concepts, you typically:",
          options: [
            { value: "5", label: "Grasp concepts quickly and can apply them to new situations" },
            { value: "4", label: "Learn at a good pace with some practice" },
            { value: "3", label: "Need moderate time and repetition to understand" },
            { value: "2", label: "Find it challenging and need significant support" },
            { value: "1", label: "Struggle to understand technical concepts" }
          ]
        }
      ]
    },
    {
      id: "ability",
      name: "Ability to Learn",
      icon: "📚",
      description: "Your capacity for acquiring new knowledge",
      questions: [
        {
          question: "How do you prefer to learn new technical skills?",
          options: [
            { value: "hands-on", label: "Hands-on practice and experimentation" },
            { value: "structured", label: "Structured courses and systematic learning" },
            { value: "collaborative", label: "Working with others and discussion" },
            { value: "self-directed", label: "Independent research and reading" }
          ]
        }
      ]
    },
    {
      id: "real-world",
      name: "Real-World Fit",
      icon: "🌍",
      description: "Your alignment with actual work environments",
      questions: [
        {
          question: "Which work environment appeals to you most?",
          options: [
            { value: "field", label: "Field work at environmental sites and project locations" },
            { value: "lab", label: "Laboratory research and controlled experiments" },
            { value: "office", label: "Office-based planning, analysis, and consulting" },
            { value: "mixed", label: "A combination of field, lab, and office work" }
          ]
        }
      ]
    }
  ];

  const currentQuestions = dimensions[currentDimension].questions;
  const progress = ((currentDimension + 1) / dimensions.length) * 100;

  const handleAnswer = (questionIndex: number, value: string) => {
    const dimensionId = dimensions[currentDimension].id;
    setAnswers({
      ...answers,
      [dimensionId]: {
        ...answers[dimensionId],
        [questionIndex]: value
      }
    });
  };

  const canProceed = () => {
    const dimensionId = dimensions[currentDimension].id;
    const dimensionAnswers = answers[dimensionId] || {};
    return currentQuestions.every((_, index) => dimensionAnswers[index] !== undefined);
  };

  const handleNext = () => {
    if (currentDimension < dimensions.length - 1) {
      setCurrentDimension(currentDimension + 1);
    } else {
      // Calculate WISCAR scores and proceed
      onNext();
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>🧭 WISCAR™ Framework Analysis</span>
            <span className="text-sm font-normal text-muted-foreground">
              Dimension {currentDimension + 1} of {dimensions.length}
            </span>
          </CardTitle>
          <CardDescription>
            Personal Readiness Radar - Comprehensive career alignment assessment
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <ProgressBar value={progress} showLabel />
          
          {/* Current Dimension Header */}
          <div className="bg-gradient-card p-6 rounded-lg border">
            <div className="flex items-center gap-4 mb-3">
              <div className="text-3xl">{dimensions[currentDimension].icon}</div>
              <div>
                <h3 className="text-xl font-bold">{dimensions[currentDimension].name}</h3>
                <p className="text-muted-foreground">{dimensions[currentDimension].description}</p>
              </div>
            </div>
            
            {/* Dimension Progress */}
            <div className="flex gap-2 mt-4">
              {dimensions.map((dim, index) => (
                <div
                  key={dim.id}
                  className={`flex-1 h-2 rounded-full transition-colors ${
                    index < currentDimension 
                      ? 'bg-success' 
                      : index === currentDimension 
                        ? 'bg-primary' 
                        : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Questions for Current Dimension */}
          <div className="space-y-6">
            {currentQuestions.map((question, questionIndex) => (
              <div key={questionIndex} className="space-y-4">
                <h4 className="text-lg font-semibold leading-relaxed">
                  {question.question}
                </h4>
                
                <RadioGroup
                  value={answers[dimensions[currentDimension].id]?.[questionIndex] || ""}
                  onValueChange={(value) => handleAnswer(questionIndex, value)}
                  className="space-y-3"
                >
                  {question.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem 
                        value={option.value} 
                        id={`dim-${currentDimension}-q-${questionIndex}-opt-${optionIndex}`} 
                      />
                      <Label 
                        htmlFor={`dim-${currentDimension}-q-${questionIndex}-opt-${optionIndex}`}
                        className="flex-1 cursor-pointer text-sm leading-relaxed"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center pt-4">
            <Button
              variant="outline"
              onClick={() => setCurrentDimension(Math.max(0, currentDimension - 1))}
              disabled={currentDimension === 0}
            >
              Previous Dimension
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              variant={canProceed() ? "default" : "outline"}
            >
              {currentDimension === dimensions.length - 1 ? "Complete Assessment" : "Next Dimension"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { WiscarSection };