
import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";

const Projects = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Key Projects</h1>

        <Card className="p-6 mb-4">
          <h3 className="text-lg font-semibold">Aircel — Network Cartridge Development</h3>
          <p className="text-sm text-foreground/70 mb-2">Mar 2011 – Apr 2012</p>
          <p className="text-foreground/80">Developed network cartridges, XML-driven service configs, Nokia-Siemens HLR integration.</p>
        </Card>

        <Card className="p-6 mb-4">
          <h3 className="text-lg font-semibold">FMC — Fixed Mobile Convergence</h3>
          <p className="text-sm text-foreground/70 mb-2">Aug 2008 – Aug 2010</p>
          <p className="text-foreground/80">Designed FMC features to enable in-building mobile traffic over fixed networks.</p>
        </Card>

        <Card className="p-6 mb-4">
          <h3 className="text-lg font-semibold">WAD — Wholesale Access Delivery</h3>
          <p className="text-sm text-foreground/70 mb-2">Mar 2009 – Jan 2010</p>
          <p className="text-foreground/80">Built modules to process end-to-end provisioning and B2B interfaces.</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold">USAA — Funds Transfer Application</h3>
          <p className="text-sm text-foreground/70 mb-2">Jan 2007 – Jul 2008</p>
          <p className="text-foreground/80">Developed funds transfer features and annuity product functionality.</p>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Projects;
