
import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";

const Experience = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Experience</h1>
        <Card className="p-6">
          <h3 className="text-xl font-semibold">Academic Role — Assistant Professor</h3>
          <p className="text-sm text-foreground/70 mb-2">(Sri Ramakrishna College of Engineering)</p>
          <p className="text-foreground/80">Experienced in curriculum delivery, student mentorship, and academic advising.</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-semibold">Academic Role — Assistant Professor</h3>
          <p className="text-sm text-foreground/70 mb-2">(Roever Engineering College)</p>
          <p className="text-foreground/80">Proficient in course design, student supervision, and academic counseling.</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-semibold">Roles Played</h3>
          <p className="text-sm text-foreground/80 mb-2">(Tutor , Trainer for Placement , Quality Improvement Cell In-Charge , Project Guide , Time table In-Charg)</p>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Experience;
