import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen, Users } from "lucide-react";

const About = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Me</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I am an Assistant Professor passionate about bridging theory and practice in my field. 
              With a strong commitment to both research excellence and student success, I strive to 
              create an inclusive learning environment where ideas flourish and innovation thrives.
            </p>
          </div>
        </div>

        {/* Education & Background */}
        <section className="mb-16 animate-slide-in">
          <h2 className="text-3xl font-bold text-primary mb-8">Education & Background</h2>
          <div className="space-y-6">
            <Card className="p-6 shadow-card hover:shadow-elegant transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ph.D. in Your Field</h3>
                  <p className="text-muted-foreground mb-1">Prestigious University, 2020</p>
                  <p className="text-foreground/80">
                    Dissertation: "Innovative Research in Advanced Topics"
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-elegant transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">M.S. in Your Field</h3>
                  <p className="text-muted-foreground mb-1">University Name, 2015</p>
                  <p className="text-foreground/80">
                    Specialization in Advanced Research Methods
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-elegant transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">B.S. in Related Field</h3>
                  <p className="text-muted-foreground mb-1">Institution Name, 2012</p>
                  <p className="text-foreground/80">Magna Cum Laude</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Research Interests */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Research Interests</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 shadow-card hover:shadow-elegant transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Advanced Theory</h3>
                  <p className="text-foreground/80">
                    Developing novel theoretical frameworks and methodologies to address complex challenges.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-elegant transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Applied Research</h3>
                  <p className="text-foreground/80">
                    Translating cutting-edge research into practical applications with real-world impact.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-elegant transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Interdisciplinary Collaboration</h3>
                  <p className="text-foreground/80">
                    Fostering partnerships across disciplines to tackle multifaceted research questions.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-elegant transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Innovation & Technology</h3>
                  <p className="text-foreground/80">
                    Exploring emerging technologies and their implications for the field.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Professional Philosophy */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-8">Professional Philosophy</h2>
          <Card className="p-8 shadow-elegant bg-gradient-card">
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              My approach to academia is grounded in the belief that education and research are 
              deeply interconnected. I am committed to creating an environment where students 
              feel empowered to explore, question, and contribute to the advancement of knowledge.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Through rigorous scholarship and dedicated mentorship, I aim to inspire the next 
              generation of researchers and practitioners while contributing meaningful insights 
              to our field's ongoing evolution.
            </p>
          </Card>
        </section>
      </div>
    </PageLayout>
  );
};

export default About;
