import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Badge } from "@/components/ui/badge";

interface TechnicalSectionProps {
  onNext: () => void;
}

const TechnicalSection = ({ onNext }: TechnicalSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    {
      category: "Logical Reasoning",
      difficulty: "Medium",
      question: "A water treatment plant processes 50 million gallons per day. If efficiency increases by 20%, how many additional gallons can be processed daily?",
      options: [
        { value: "a", label: "10 million gallons" },
        { value: "b", label: "12 million gallons" },
        { value: "c", label: "15 million gallons" },
        { value: "d", label: "20 million gallons" }
      ],
      correct: "a"
    },
    {
      category: "Environmental Science Fundamentals",
      difficulty: "Easy",
      question: "Which of the following is the primary cause of acid rain?",
      options: [
        { value: "a", label: "Carbon dioxide emissions" },
        { value: "b", label: "Sulfur dioxide and nitrogen oxides" },
        { value: "c", label: "Methane emissions" },
        { value: "d", label: "Ozone depletion" }
      ],
      correct: "b"
    },
    {
      category: "Numerical Ability",
      difficulty: "Medium", 
      question: "If a city generates 1,200 tons of waste per day and recycles 35%, how many tons go to landfills?",
      options: [
        { value: "a", label: "420 tons" },
        { value: "b", label: "650 tons" },
        { value: "c", label: "780 tons" },
        { value: "d", label: "840 tons" }
      ],
      correct: "c"
    },
    {
      category: "Spatial & Visual Reasoning",
      difficulty: "Hard",
      question: "In designing a water filtration system, which arrangement would provide the most effective multi-stage treatment?",
      options: [
        { value: "a", label: "Parallel processing with equal flow rates" },
        { value: "b", label: "Series processing from coarse to fine filtration" },
        { value: "c", label: "Random arrangement based on available space" },
        { value: "d", label: "Single-stage high-capacity filtration" }
      ],
      correct: "b"
    },
    {
      category: "Math & Data Basics",
      difficulty: "Medium",
      question: "A pollution monitoring station shows the following readings over 5 days: 45, 52, 38, 61, 49 µg/m³. What is the average pollution level?",
      options: [
        { value: "a", label: "45 µg/m³" },
        { value: "b", label: "49 µg/m³" },
        { value: "c", label: "51 µg/m³" },
        { value: "d", label: "52 µg/m³" }
      ],
      correct: "b"
    },
    {
      category: "Environmental Science Fundamentals",
      difficulty: "Easy",
      question: "What is the primary purpose of a constructed wetland in wastewater treatment?",
      options: [
        { value: "a", label: "Aesthetic improvement" },
        { value: "b", label: "Natural biological treatment processes" },
        { value: "c", label: "Emergency water storage" },
        { value: "d", label: "Wildlife habitat only" }
      ],
      correct: "b"
    }
  ];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "success";
      case "Medium": return "warning";
      case "Hard": return "destructive";
      default: return "secondary";
    }
  };

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate technical score and proceed
      onNext();
    }
  };

  const canProceed = answers[currentQuestion] !== undefined;

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>🧮 Technical & Aptitude Assessment</span>
            <span className="text-sm font-normal text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </CardTitle>
          <CardDescription>
            Evaluating your technical readiness and problem-solving abilities
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <ProgressBar value={progress} showLabel />
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-secondary/10 px-3 py-1 rounded-lg">
                <span className="text-sm font-medium text-secondary">
                  {questions[currentQuestion].category}
                </span>
              </div>
              <Badge variant="outline" className={`
                ${getDifficultyColor(questions[currentQuestion].difficulty) === 'success' ? 'border-success text-success' : ''}
                ${getDifficultyColor(questions[currentQuestion].difficulty) === 'warning' ? 'border-warning text-warning' : ''}
                ${getDifficultyColor(questions[currentQuestion].difficulty) === 'destructive' ? 'border-destructive text-destructive' : ''}
              `}>
                {questions[currentQuestion].difficulty}
              </Badge>
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
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value={option.value} id={`option-${index}`} />
                  <Label 
                    htmlFor={`option-${index}`} 
                    className="flex-1 cursor-pointer leading-relaxed"
                  >
                    <span className="font-medium text-primary">{option.value.toUpperCase()})</span> {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Tip:</strong> Take your time and think through each problem systematically. 
              These questions assess your logical reasoning and foundational knowledge.
            </p>
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

export { TechnicalSection };