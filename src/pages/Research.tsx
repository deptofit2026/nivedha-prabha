import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FlaskConical, Users, TrendingUp, Target } from "lucide-react";

const Research = () => {
  const projects = [
    {
      title: "Innovative Framework for Advanced Analysis",
      status: "Ongoing",
      funding: "NSF Grant",
      description: "Developing novel methodologies to address critical challenges in the field through interdisciplinary collaboration.",
      collaborators: ["Dr. Jane Smith", "Dr. Michael Chen"],
    },
    {
      title: "Empirical Study on Contemporary Issues",
      status: "Ongoing",
      funding: "University Research Fund",
      description: "Large-scale investigation examining the impact of emerging trends on practice and policy.",
      collaborators: ["Dr. Sarah Johnson"],
    },
    {
      title: "Theoretical Foundations of Modern Practice",
      status: "Completed",
      funding: "Internal Grant",
      description: "Comprehensive exploration of theoretical underpinnings with implications for future research directions.",
      collaborators: ["Dr. Robert Lee", "Dr. Amanda White"],
    },
  ];

  const researchAreas = [
    {
      icon: FlaskConical,
      title: "Experimental Research",
      description: "Conducting rigorous experiments to test hypotheses and advance theoretical understanding.",
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Partnering with communities to ensure research has meaningful real-world impact.",
    },
    {
      icon: TrendingUp,
      title: "Data Analytics",
      description: "Leveraging advanced statistical methods to uncover insights from complex datasets.",
    },
    {
      icon: Target,
      title: "Policy Analysis",
      description: "Examining the implications of research findings for public policy and practice.",
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Research</h1>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl">
            My research program focuses on advancing knowledge through rigorous inquiry and innovative 
            methodologies. I am committed to conducting research that not only contributes to academic 
            discourse but also addresses pressing societal challenges.
          </p>
        </div>

        {/* Research Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Research Areas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {researchAreas.map((area, index) => (
              <Card
                key={index}
                className="p-6 shadow-card hover:shadow-elegant transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <area.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                    <p className="text-foreground/80">{area.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Current Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Current & Recent Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 shadow-card hover:shadow-elegant transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                  <div className="flex gap-2">
                    <Badge variant={project.status === "Ongoing" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                    <Badge variant="outline">{project.funding}</Badge>
                  </div>
                </div>
                <p className="text-foreground/80 mb-4">{project.description}</p>
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold">Collaborators:</span>{" "}
                  {project.collaborators.join(", ")}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Research Impact */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-8">Research Impact</h2>
          <Card className="p-8 shadow-elegant bg-gradient-card">
            <div className="grid md:grid-cols-4 gap-8 text-center mb-8">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Publications</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">$500K+</div>
                <div className="text-sm text-muted-foreground">Research Funding</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">850+</div>
                <div className="text-sm text-muted-foreground">Citations</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Collaborations</div>
              </div>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed">
              My work has been recognized through numerous awards and grants, and continues to 
              influence both academic research and professional practice. I am committed to 
              making research accessible and impactful beyond the ivory tower.
            </p>
          </Card>
        </section>
      </div>
    </PageLayout>
  );
};

export default Research;
