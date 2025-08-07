import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  CheckCircle, 
  Clock, 
  Users, 
  TrendingUp, 
  Award,
  ArrowRight,
  Zap,
  Target,
  BarChart3
} from "lucide-react";
import heroImage from "@/assets/hero-environmental.jpg";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Psychological Fit Analysis",
      description: "Deep personality and motivation assessment using validated frameworks"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Technical Readiness Evaluation", 
      description: "Comprehensive skills assessment across core engineering domains"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "WISCAR™ Framework",
      description: "Personal readiness radar measuring Will, Interest, Skill, Cognitive ability, and Real-world fit"
    }
  ];

  const stats = [
    { number: "20-30", label: "Minutes", sublabel: "Complete assessment time" },
    { number: "85%", label: "Accuracy", sublabel: "Career prediction success rate" },
    { number: "6", label: "Dimensions", sublabel: "Comprehensive evaluation areas" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card border-b shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center text-white font-bold">
                E
              </div>
              <span className="text-xl font-bold text-foreground">Career Navigator™</span>
            </div>
            <Button variant="outline" onClick={() => navigate('/assessment')}>
              Take Assessment
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Environmental Engineering" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
        </div>
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-6 border-white/30 text-white bg-white/10">
              🌍 Environmental Engineering Career Assessment
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Is Environmental Engineering 
              <span className="text-primary-glow"> Right for You?</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Discover your career fit with our comprehensive AI-powered assessment. 
              Evaluate your psychological alignment, technical readiness, and personal compatibility 
              with environmental engineering roles.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={() => navigate('/assessment')}
                className="text-lg px-8 py-6"
              >
                Start Your Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground">{stat.label}</div>
                <div className="text-muted-foreground">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Comprehensive Career Assessment
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our scientifically-backed assessment evaluates multiple dimensions 
              to provide you with accurate career guidance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300 border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Preview */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                What You'll Discover
              </h2>
              <p className="text-xl text-muted-foreground">
                Get personalized insights into your environmental engineering career potential
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-success" />
                    Your Scores
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Psychological Fit</span>
                    <Badge variant="outline" className="text-success border-success">85%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Technical Readiness</span>
                    <Badge variant="outline" className="text-warning border-warning">72%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Overall Alignment</span>
                    <Badge variant="outline" className="text-primary border-primary">78%</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Personalized Guidance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Career path recommendations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Skills development plan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Learning resource suggestions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Alternative career options</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Discover Your Path?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards understanding your environmental engineering career potential. 
            Our assessment is designed by experts and validated through research.
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="w-5 h-5" />
              <span>20-30 minutes</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Users className="w-5 h-5" />
              <span>Thousands assessed</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Award className="w-5 h-5" />
              <span>Scientifically validated</span>
            </div>
          </div>
          <Button 
            variant="hero" 
            size="lg" 
            onClick={() => navigate('/assessment')}
            className="text-lg px-12 py-6 bg-white text-primary hover:bg-white/90"
          >
            Begin Assessment Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-gradient-hero rounded-lg flex items-center justify-center text-white font-bold text-sm">
              E
            </div>
            <span className="text-lg font-semibold text-foreground">Career Navigator™</span>
          </div>
          <p className="text-muted-foreground mb-4">
            AI-powered career assessment for environmental engineering
          </p>
          <p className="text-sm text-muted-foreground">
            Built with validated psychological frameworks and industry expertise
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;