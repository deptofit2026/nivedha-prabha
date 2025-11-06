import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, Users, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Dr. Your Name
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90">
              Assistant Professor
            </p>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/80">
              Department of Your Field | University Name
            </p>
            <p className="text-lg leading-relaxed mb-12 max-w-2xl mx-auto text-primary-foreground/90">
              Dedicated to advancing knowledge through innovative research and inspiring 
              the next generation of scholars and practitioners in the field.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/research">
                <Button size="lg" variant="secondary" className="gap-2">
                  View Research <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/20">
                  <Mail className="w-4 h-4" /> Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Areas of Focus
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center shadow-card hover:shadow-elegant transition-all hover:scale-105">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-6">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Research</h3>
              <p className="text-foreground/70 leading-relaxed">
                Advancing theoretical frameworks and conducting empirical studies 
                to address critical challenges in the field.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-elegant transition-all hover:scale-105">
              <div className="inline-flex p-4 bg-accent/10 rounded-full mb-6">
                <GraduationCap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Teaching</h3>
              <p className="text-foreground/70 leading-relaxed">
                Creating engaging learning experiences that foster critical thinking 
                and prepare students for success.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-elegant transition-all hover:scale-105">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Mentorship</h3>
              <p className="text-foreground/70 leading-relaxed">
                Guiding students and early-career researchers through their 
                academic and professional development.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Recent Highlights
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-6 shadow-card hover:shadow-elegant transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">New Research Grant Awarded</h3>
                  <p className="text-foreground/70 mb-2">
                    Received NSF funding for a three-year project investigating innovative 
                    approaches to complex challenges in the field.
                  </p>
                  <p className="text-sm text-muted-foreground">2024</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-elegant transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Publication in Top-Tier Journal</h3>
                  <p className="text-foreground/70 mb-2">
                    Latest research published in the Journal of Advanced Studies, advancing 
                    our understanding of contemporary issues.
                  </p>
                  <p className="text-sm text-muted-foreground">2024</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-elegant transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">International Conference Keynote</h3>
                  <p className="text-foreground/70 mb-2">
                    Invited to deliver keynote address at the Annual International Conference 
                    on Emerging Trends and Innovations.
                  </p>
                  <p className="text-sm text-muted-foreground">2023</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto p-8 md:p-12 text-center shadow-elegant bg-gradient-card">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Let's Collaborate
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              I'm always interested in connecting with fellow researchers, prospective students, 
              and professionals in the field. Whether you have questions about my work or are 
              interested in potential collaboration opportunities, I'd love to hear from you.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gap-2">
                <Mail className="w-5 h-5" />
                Contact Me
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
