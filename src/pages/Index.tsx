import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Users, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <PageLayout>
      <section className="bg-white text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            {/* Changed name color to black */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black">
              Nivedha Prabha R
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 mb-6">
              Assistant Professor, Department of Information Technology
            </p>

            <div className="flex justify-center gap-4">
              <Link to="/about">
                <Button>About</Button>
              </Link>
              <Link to="/experience">
                <Button variant="secondary">Experience</Button>
              </Link>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Education</h3>
              <p className="text-foreground/70 mt-2">
                BE, ME — Anna University (Computer Science & Engineering)
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Experience</h3>
              <p className="text-foreground/70 mt-2">
                Assitant Professor — Sri Ramakrishna college of Eng , Roever Engineering college .
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Contact</h3>
              <p className="text-foreground/70 mt-2">
                nivedharam88@gmail.com • +91 9600363582
              </p>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
