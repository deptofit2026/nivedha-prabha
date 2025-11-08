
import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || 'Contact from portfolio');
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:msumathi02@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">Get in touch</h3>
              <p className="text-foreground/80 mb-4">For academic inquiries or consulting, contact via email or phone.</p>
              <div className="space-y-3 text-sm text-foreground/80">
                <p><Mail className="inline-block mr-2 w-4 h-4 align-text-bottom"/> msumathi02@gmail.com</p>
                <p><Phone className="inline-block mr-2 w-4 h-4 align-text-bottom"/> +91 9789673675</p>
                <p><MapPin className="inline-block mr-2 w-4 h-4 align-text-bottom"/> (City, India)</p>
              </div>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label>Name</Label>
                  <Input value={formData.name} onChange={(e:any)=>setFormData({...formData,name:e.target.value})} required />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input type="email" value={formData.email} onChange={(e:any)=>setFormData({...formData,email:e.target.value})} required />
                </div>
                <div>
                  <Label>Subject</Label>
                  <Input value={formData.subject} onChange={(e:any)=>setFormData({...formData,subject:e.target.value})} />
                </div>
                <div>
                  <Label>Message</Label>
                  <Textarea value={formData.message} onChange={(e:any)=>setFormData({...formData,message:e.target.value})} rows={4} />
                </div>
                <div className="flex justify-end">
                  <Button type="submit">Send Message</Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
