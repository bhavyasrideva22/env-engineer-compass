import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ProgressBar } from "@/components/ui/progress-bar";

interface PsychometricSectionProps {
  onNext: () => void;
}

const PsychometricSection = ({ onNext }: PsychometricSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    {
      category: "Interest Inventory",
      question: "How interested are you in learning about water treatment processes?",
      options: [
        { value: "5", label: "Extremely interested" },
        { value: "4", label: "Very interested" },
        { value: "3", label: "Moderately interested" },
        { value: "2", label: "Slightly interested" },
        { value: "1", label: "Not interested at all" }
      ]
    },
    {
      category: "Personality Profiler", 
      question: "When working on a complex environmental problem, you prefer to:",
      options: [
        { value: "structured", label: "Follow a systematic, step-by-step approach" },
        { value: "flexible", label: "Adapt your approach as you discover new information" },
        { value: "collaborative", label: "Seek input from various stakeholders" },
        { value: "independent", label: "Work independently with minimal supervision" }
      ]
    },
    {
      category: "Cognitive Preferences",
      question: "Which appeals to you more when solving environmental challenges?",
      options: [
        { value: "analytical", label: "Analyzing detailed data and scientific measurements" },
        { value: "creative", label: "Developing innovative, outside-the-box solutions" },
        { value: "practical", label: "Implementing proven, practical approaches" },
        { value: "theoretical", label: "Understanding underlying scientific principles" }
      ]
    },
    {
      category: "Motivation Scale",
      question: "What motivates you most about environmental work?",
      options: [
        { value: "impact", label: "Making a positive impact on the planet" },
        { value: "challenge", label: "Solving complex technical challenges" },
        { value: "stability", label: "Having a stable, well-paying career" },
        { value: "recognition", label: "Being recognized as an expert in the field" }
      ]
    },
    {
      category: "Values Assessment",
      question: "In your ideal work environment, you would:",
      options: [
        { value: "fieldwork", label: "Spend time both in the field and office" },
        { value: "office", label: "Work primarily in an office or lab setting" },
        { value: "remote", label: "Have flexibility to work remotely" },
        { value: "travel", label: "Travel frequently to different project sites" }
      ]
    }
  ];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate psychometric score and proceed
      onNext();
    }
  };

  const canProceed = answers[currentQuestion] !== undefined;

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>🧠 Psychological Fit Assessment</span>
            <span className="text-sm font-normal text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </CardTitle>
          <CardDescription>
            Understanding your personality, interests, and motivations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <ProgressBar value={progress} showLabel />
          
          <div className="space-y-4">
            <div className="bg-primary/5 p-3 rounded-lg">
              <span className="text-sm font-medium text-primary">
                {questions[currentQuestion].category}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold leading-relaxed">
              {questions[currentQuestion].question}
            </h3>
            
            <RadioGroup
              value={answers[currentQuestion] || ""}
              onValueChange={handleAnswer}
              className="space-y-3"
            >
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value={option.value} id={`option-${index}`} />
                  <Label 
                    htmlFor={`option-${index}`} 
                    className="flex-1 cursor-pointer text-sm leading-relaxed"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="flex justify-between items-center pt-4">
            <Button
              variant="outline"
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
            >
              Previous Question
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={!canProceed}
              variant={canProceed ? "default" : "outline"}
            >
              {currentQuestion === questions.length - 1 ? "Complete Section" : "Next Question"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { PsychometricSection };