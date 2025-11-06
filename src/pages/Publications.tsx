import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      year: "2024",
      items: [
        {
          title: "Advanced Methodologies in Contemporary Research: A Comprehensive Review",
          authors: "Your Name, Co-Author A., Co-Author B.",
          venue: "Journal of Advanced Studies",
          type: "Journal Article",
          status: "Published",
        },
        {
          title: "Innovative Approaches to Critical Challenges",
          authors: "Your Name, Collaborator C.",
          venue: "International Conference on Innovation",
          type: "Conference Paper",
          status: "Accepted",
        },
      ],
    },
    {
      year: "2023",
      items: [
        {
          title: "Theoretical Frameworks for Modern Practice",
          authors: "Your Name, Co-Author D., Co-Author E.",
          venue: "Quarterly Review of Field Studies",
          type: "Journal Article",
          status: "Published",
        },
        {
          title: "Empirical Analysis of Emerging Trends",
          authors: "Co-Author F., Your Name, Co-Author G.",
          venue: "Annual Symposium Proceedings",
          type: "Conference Paper",
          status: "Published",
        },
        {
          title: "Interdisciplinary Perspectives on Complex Problems",
          authors: "Your Name",
          venue: "Academic Press",
          type: "Book Chapter",
          status: "Published",
        },
      ],
    },
    {
      year: "2022",
      items: [
        {
          title: "Data-Driven Insights in Research Practice",
          authors: "Your Name, Collaborator H., Collaborator I.",
          venue: "International Journal of Research Methods",
          type: "Journal Article",
          status: "Published",
        },
        {
          title: "Exploring New Frontiers in Field Studies",
          authors: "Co-Author J., Your Name",
          venue: "Regional Conference Series",
          type: "Conference Paper",
          status: "Published",
        },
      ],
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Journal Article":
        return "default";
      case "Conference Paper":
        return "secondary";
      case "Book Chapter":
        return "outline";
      default:
        return "default";
    }
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Publications</h1>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl">
            A selection of my peer-reviewed publications, conference presentations, and book chapters. 
            These works represent collaborative efforts to advance knowledge in the field and contribute 
            to ongoing scholarly conversations.
          </p>
        </div>

        {/* Publications by Year */}
        <section className="space-y-12">
          {publications.map((yearGroup) => (
            <div key={yearGroup.year} className="animate-slide-in">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <span>{yearGroup.year}</span>
                <div className="h-px bg-border flex-1"></div>
              </h2>
              <div className="space-y-6">
                {yearGroup.items.map((pub, index) => (
                  <Card
                    key={index}
                    className="p-6 shadow-card hover:shadow-elegant transition-all hover:scale-[1.01]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                          <h3 className="text-xl font-semibold text-primary flex-1">
                            {pub.title}
                          </h3>
                          <div className="flex gap-2">
                            <Badge variant={getTypeColor(pub.type)}>{pub.type}</Badge>
                            <Badge
                              variant={pub.status === "Published" ? "default" : "secondary"}
                              className="bg-accent/20 text-accent hover:bg-accent/30"
                            >
                              {pub.status}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-foreground/70 mb-2">{pub.authors}</p>
                        <p className="text-foreground/80 font-medium mb-3">{pub.venue}</p>
                        <div className="flex gap-3">
                          <button className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
                            <ExternalLink className="w-4 h-4" />
                            View Publication
                          </button>
                          <button className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
                            <FileText className="w-4 h-4" />
                            Download PDF
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Additional Information */}
        <section className="mt-16">
          <Card className="p-8 shadow-elegant bg-gradient-card">
            <h2 className="text-2xl font-bold text-primary mb-4">Publication Profiles</h2>
            <p className="text-foreground/80 mb-6">
              For a complete list of publications and citation metrics, please visit my profiles on:
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Google Scholar
              </a>
              <a
                href="https://orcid.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                ORCID
              </a>
              <a
                href="https://researchgate.net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                ResearchGate
              </a>
            </div>
          </Card>
        </section>
      </div>
    </PageLayout>
  );
};

export default Publications;
