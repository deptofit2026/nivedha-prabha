
import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";

const Experience = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Experience</h1>

        <Card className="p-6 mb-6">
          <h3 className="text-xl font-semibold">Module Lead — Aircel Project</h3>
          <p className="text-sm text-foreground/70 mb-2">Mar 2011 – Apr 2012</p>
          <p className="text-foreground/80">Led a team of 3 in developing network cartridges for Nokia-Siemens HLR using ASAP, Weblogic and Java. Implemented XML-driven service configurations and delivered the solution on Unix/Oracle 11g.</p>
        </Card>

        <Card className="p-6 mb-6">
          <h3 className="text-xl font-semibold">Module Lead — FMC (Cable & Wireless)</h3>
          <p className="text-sm text-foreground/70 mb-2">Aug 2008 – Aug 2010</p>
          <p className="text-foreground/80">Led multiple waves of FMC development, integrating mobile and fixed networks, and managed teams (up to 5 members). Received 'Best Team' award for outstanding delivery.</p>
        </Card>

        <Card className="p-6 mb-6">
          <h3 className="text-xl font-semibold">Module Lead — WAD & Tesco (Cable & Wireless)</h3>
          <p className="text-sm text-foreground/70 mb-2">Mar 2009 – Sep 2009</p>
          <p className="text-foreground/80">Designed and developed modules for Wholesale Access Delivery and Tesco-specific features using ASAP, Weblogic, and Oracle.</p>
        </Card>

        <Card className="p-6 mb-6">
          <h3 className="text-xl font-semibold">Software Engineer — USAA</h3>
          <p className="text-sm text-foreground/70 mb-2">Jan 2007 – Jul 2008</p>
          <p className="text-foreground/80">Worked on funds transfer and annuity-related features using Java/J2EE and Unix-based systems.</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold">Academic Role — Assistant Professor</h3>
          <p className="text-sm text-foreground/70 mb-2">(Teaching experience details can be added)</p>
          <p className="text-foreground/80">Experienced in curriculum delivery, student mentorship, and academic advising.</p>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Experience;
