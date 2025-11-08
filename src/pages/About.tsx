
import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">About</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-2">Sumathi</h2>
              <p className="text-sm text-foreground/70">Assistant Professor, Department of Information Technology</p>
              <div className="mt-4 text-sm text-foreground/80">
                <p><strong>Email:</strong> msumathi02@gmail.com</p>
                <p><strong>Phone:</strong> +91 9789673675</p>
                <p><strong>Location:</strong> (City, India)</p>
              </div>
            </Card>
          </div>
          <div className="md:col-span-2">
            <Card className="p-6 mb-6">
              <h3 className="text-lg font-semibold mb-2">Profile</h3>
              <p className="text-foreground/80 leading-relaxed">Experienced software professional and educator with a strong background in Java-based enterprise applications, telecom solutions, and academic instruction. Over 4 years of professional experience leading teams, designing solutions, and delivering projects for telecom and insurance domains.</p>
            </Card>

            <Card className="p-6 mb-6">
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <ul className="list-disc pl-5 text-foreground/80">
                <li>Master of Engineering, Computer Science & Engineering — Anna University (2013-2015)</li>
                <li>Bachelor of Engineering, Computer Science & Engineering — Anna University (2002-2006)</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Certifications & Awards</h3>
              <ul className="list-disc pl-5 text-foreground/80">
                <li>SCJP 1.5 (2007)</li>
                <li>DB2 v8.1 (2007)</li>
                <li>Best Team Award (Cable & Wireless project)</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
