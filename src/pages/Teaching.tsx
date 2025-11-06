import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Target, Award } from "lucide-react";

const Teaching = () => {
  const courses = [
    {
      code: "DEPT 101",
      title: "Introduction to Field",
      level: "Undergraduate",
      description: "Foundational course covering core principles and methodologies.",
      students: "50-60 students per semester",
    },
    {
      code: "DEPT 301",
      title: "Advanced Topics",
      level: "Undergraduate",
      description: "Deep dive into specialized areas with hands-on projects.",
      students: "25-30 students per semester",
    },
    {
      code: "DEPT 501",
      title: "Research Methods",
      level: "Graduate",
      description: "Intensive training in research design and analysis.",
      students: "10-15 students per semester",
    },
    {
      code: "DEPT 601",
      title: "Seminar in Contemporary Issues",
      level: "Graduate",
      description: "Discussion-based exploration of current research and debates.",
      students: "8-12 students per semester",
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Teaching</h1>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl">
            My teaching philosophy centers on active learning, critical thinking, and the 
            development of both theoretical knowledge and practical skills. I strive to create 
            an inclusive classroom environment where all students feel valued and challenged.
          </p>
        </div>

        {/* Teaching Philosophy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Teaching Philosophy</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 shadow-card hover:shadow-elegant transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Active Learning</h3>
                <p className="text-sm text-foreground/70">
                  Engaging students through hands-on activities and real-world applications
                </p>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-elegant transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Collaborative</h3>
                <p className="text-sm text-foreground/70">
                  Fostering teamwork and peer learning opportunities
                </p>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-elegant transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Evidence-Based</h3>
                <p className="text-sm text-foreground/70">
                  Grounding instruction in pedagogical research and best practices
                </p>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-elegant transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Inclusive</h3>
                <p className="text-sm text-foreground/70">
                  Creating an equitable environment for diverse learners
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Courses Taught */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Courses Taught</h2>
          <div className="space-y-6">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="p-6 shadow-card hover:shadow-elegant transition-all hover:scale-[1.01]"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-primary">{course.code}</h3>
                      <Badge variant="secondary">{course.level}</Badge>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{course.title}</h4>
                  </div>
                  <div className="text-sm text-muted-foreground">{course.students}</div>
                </div>
                <p className="text-foreground/80">{course.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Student Mentorship */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-8">Student Mentorship</h2>
          <Card className="p-8 shadow-elegant bg-gradient-card">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Beyond the classroom, I am committed to mentoring students at all levels. I supervise 
              undergraduate research projects, guide graduate students through their theses and 
              dissertations, and provide career development support.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">12+</div>
                <div className="text-sm text-muted-foreground">Undergraduate Researchers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">5</div>
                <div className="text-sm text-muted-foreground">Graduate Students Advised</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">3</div>
                <div className="text-sm text-muted-foreground">Thesis Committees</div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </PageLayout>
  );
};

export default Teaching;
