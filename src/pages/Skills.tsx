
import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";

const Skills = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Skills & Technologies</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Core Technologies</h3>
            <ul className="list-disc pl-5 text-foreground/80">
              <li>Java (J2EE)</li>
              <li>ASAP (Automated Service Activation Program)</li>
              <li>Oracle (8i/9i/11g)</li>
              <li>BEA WebLogic</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Tools & Methods</h3>
            <ul className="list-disc pl-5 text-foreground/80">
              <li>Eclipse, Service Studio</li>
              <li>PL/SQL Developer, Borland Star Team</li>
              <li>Agile & Traditional SDLC</li>
              <li>Unix environments</li>
            </ul>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Skills;
