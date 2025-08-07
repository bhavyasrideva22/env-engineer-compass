import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { PsychometricSection } from "@/components/assessment/PsychometricSection";
import { TechnicalSection } from "@/components/assessment/TechnicalSection";
import { WiscarSection } from "@/components/assessment/WiscarSection";

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [assessmentData, setAssessmentData] = useState({});

  const steps = [
    {
      id: "intro",
      title: "Assessment Introduction",
      description: "Understanding Environmental Engineering"
    },
    {
      id: "psychometric", 
      title: "Psychological Fit",
      description: "Personality & Interest Analysis"
    },
    {
      id: "technical",
      title: "Technical Readiness", 
      description: "Skills & Aptitude Evaluation"
    },
    {
      id: "wiscar",
      title: "WISCAR™ Analysis",
      description: "Personal Readiness Radar"
    },
    {
      id: "results",
      title: "Your Results",
      description: "Personalized Career Insights"
    }
  ];

  const progress = ((currentStep + 1) / steps.length) * 100;

  const renderStepContent = () => {
    switch (steps[currentStep].id) {
      case "intro":
        return <IntroSection onNext={() => setCurrentStep(1)} />;
      case "psychometric":
        return <PsychometricSection onNext={() => setCurrentStep(2)} />;
      case "technical":
        return <TechnicalSection onNext={() => setCurrentStep(3)} />;
      case "wiscar":
        return <WiscarSection onNext={() => setCurrentStep(4)} />;
      case "results":
        return <ResultsSection assessmentData={assessmentData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-card border-b shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Career Navigator™</h1>
              <p className="text-muted-foreground">Environmental Engineering Assessment</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground mb-1">
                Step {currentStep + 1} of {steps.length}
              </div>
              <ProgressBar value={progress} className="w-48" showLabel />
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`
                flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all
                ${index <= currentStep 
                  ? 'bg-primary text-primary-foreground border-primary' 
                  : 'bg-muted text-muted-foreground border-border'
                }
              `}>
                {index < currentStep ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <span className="text-sm font-semibold">{index + 1}</span>
                )}
              </div>
              {index < steps.length - 1 && (
                <div className={`
                  w-20 h-1 mx-2 transition-all
                  ${index < currentStep ? 'bg-primary' : 'bg-border'}
                `} />
              )}
            </div>
          ))}
        </div>

        {/* Current Step Content */}
        <div className="max-w-4xl mx-auto">
          {renderStepContent()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 max-w-4xl mx-auto">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          
          <div className="text-center">
            <h2 className="text-xl font-semibold text-foreground">{steps[currentStep].title}</h2>
            <p className="text-muted-foreground">{steps[currentStep].description}</p>
          </div>

          <Button
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            disabled={currentStep === steps.length - 1}
          >
            Next
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

// Intro Section Component
const IntroSection = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="text-2xl text-center">🌍 Environmental Engineering Career Assessment</CardTitle>
          <CardDescription className="text-center text-lg">
            Discover if Environmental Engineering is the right career path for you
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">🧪 What Environmental Engineering Involves:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Applying engineering to improve environmental health</li>
                <li>• Designing systems for waste management & pollution control</li>
                <li>• Working on sustainable development & renewable energy</li>
                <li>• Ecological preservation and restoration projects</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">💼 Typical Career Paths:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Environmental Engineer</li>
                <li>• Water Resources Engineer</li>
                <li>• Air Quality Specialist</li>
                <li>• Sustainability Consultant</li>
                <li>• Environmental Health & Safety Manager</li>
              </ul>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">🧠 Ideal Skills & Personality Traits:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <div>
                <li>• Strong problem-solving abilities</li>
                <li>• Interest in sustainability</li>
                <li>• Scientific curiosity</li>
              </div>
              <div>
                <li>• Comfort with math & modeling</li>
                <li>• Patience for data interpretation</li>
                <li>• Ethical awareness</li>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              This assessment will take approximately 20-30 minutes and will evaluate your:
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {["Psychological Fit", "Technical Readiness", "Personal Alignment"].map((item) => (
                <span key={item} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
            <Button variant="hero" size="lg" onClick={onNext} className="px-8">
              Begin Assessment
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Results Section Component  
const ResultsSection = ({ assessmentData }: { assessmentData: any }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="text-2xl text-center">🎯 Your Assessment Results</CardTitle>
          <CardDescription className="text-center">
            Based on your responses, here's your environmental engineering career fit
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-success mb-2">Excellent Fit!</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Your profile strongly aligns with Environmental Engineering
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-success/10 p-4 rounded-lg">
                <div className="text-3xl font-bold text-success">85%</div>
                <div className="text-sm text-muted-foreground">Overall Fit</div>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary">92%</div>
                <div className="text-sm text-muted-foreground">Psychological Match</div>
              </div>
              <div className="bg-secondary/10 p-4 rounded-lg">
                <div className="text-3xl font-bold text-secondary">78%</div>
                <div className="text-sm text-muted-foreground">Technical Readiness</div>
              </div>
            </div>

            <Button variant="hero" size="lg" className="px-8">
              View Detailed Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Assessment;