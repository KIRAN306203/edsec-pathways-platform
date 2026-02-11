import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GraduationCap, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { validateEmail, validatePhone } from '@/utils/validation';
import { courses } from '@/data/courses';

const Enroll = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    qualification: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.course) {
      toast.error('Please fill in all required fields');
      return;
    }
    if (!validateEmail(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    if (!validatePhone(formData.phone)) {
      toast.error('Please enter a valid phone number');
      return;
    }

    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-enrollment-email', {
        body: formData,
      });
      if (error) throw error;

      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', course: '', qualification: '', message: '' });
      toast.success('Enrollment submitted successfully! We will contact you soon.');
    } catch (error: any) {
      console.error('Enrollment error:', error);
      toast.error('Failed to submit enrollment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-lg text-center">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Enrollment Submitted!</h1>
            <p className="text-muted-foreground mb-6">
              Thank you for enrolling with EDSEC Innovations. Our team will review your application and contact you within 24 hours.
            </p>
            <Button onClick={() => setIsSuccess(false)} className="bg-gradient-primary text-white hover:opacity-90">
              Submit Another Enrollment
            </Button>
          </div>
        </section>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Student Enrollment</h1>
            <p className="text-muted-foreground text-lg">
              Fill in the form below to enroll in your preferred course. We'll get back to you within 24 hours.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Enrollment Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required maxLength={100} />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required maxLength={255} />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number *</label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXXXXXXX" required maxLength={20} />
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-medium mb-2">Select Course *</label>
                  <Select value={formData.course} onValueChange={(value) => setFormData({ ...formData, course: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a course" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course.id} value={course.title}>
                          {course.title} ({course.duration})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="qualification" className="block text-sm font-medium mb-2">Highest Qualification</label>
                  <Input id="qualification" name="qualification" value={formData.qualification} onChange={handleChange} placeholder="e.g. B.Tech, BCA, 12th Pass" maxLength={100} />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Additional Message</label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Any questions or additional info..." rows={4} maxLength={2000} />
                </div>

                <Button type="submit" className="w-full bg-gradient-primary text-white hover:opacity-90" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Enrollment'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Enroll;
