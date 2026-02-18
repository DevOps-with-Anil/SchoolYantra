import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ClipboardList, DollarSign, Calendar, Users, BarChart3, BookOpen,
  Bell, MessageSquare, CalendarDays, Wallet, Receipt, LineChart,
  Shield, FileText, GraduationCap, Settings,
  UserCheck, PenTool, Layout, Send, MapPin, CreditCard,
} from "lucide-react";

const featureCategories = {
  administration: {
    title: "Administration",
    description: "Streamline all administrative processes",
    features: [
      { icon: ClipboardList, title: "Admissions Management", description: "Digitize the entire admissions process from inquiry to enrollment with automated workflows." },
      { icon: DollarSign, title: "Fee Management", description: "Configure fee structures, generate invoices, track payments, and send automated reminders." },
      { icon: Calendar, title: "Timetable Management", description: "Create and manage class schedules, allocate rooms, and handle substitutions effortlessly." },
      { icon: Users, title: "Staff Management", description: "Manage staff profiles, attendance, leave requests, and performance evaluations." },
      { icon: BarChart3, title: "Reports & Analytics", description: "Generate comprehensive reports on academics, finance, and operations with visual dashboards." },
      { icon: Settings, title: "School Configuration", description: "Customize academic years, classes, sections, subjects, and grading systems." },
    ],
  },
  academics: {
    title: "Academics",
    description: "Enhance teaching and learning outcomes",
    features: [
      { icon: UserCheck, title: "Attendance Tracking", description: "Mark and monitor student attendance with real-time reports and parent notifications." },
      { icon: BookOpen, title: "Gradebook", description: "Record, calculate, and publish student grades with customizable grading criteria." },
      { icon: FileText, title: "Exam Management", description: "Schedule exams, manage seating arrangements, and publish results digitally." },
      { icon: Layout, title: "Curriculum Planning", description: "Plan and track curriculum delivery with lesson plans and learning objectives." },
      { icon: PenTool, title: "Assignments", description: "Create, distribute, and grade assignments digitally with submission tracking." },
      { icon: GraduationCap, title: "Student Profiles", description: "Maintain comprehensive student records including academics, health, and extracurriculars." },
    ],
  },
  communication: {
    title: "Communication",
    description: "Bridge the gap between school and home",
    features: [
      { icon: Bell, title: "Announcements", description: "Broadcast important updates to parents, teachers, or specific classes instantly." },
      { icon: MessageSquare, title: "Messaging", description: "Enable secure parent-teacher messaging with read receipts and conversation history." },
      { icon: Send, title: "Push Notifications", description: "Send real-time alerts for attendance, fees, events, and academic updates." },
      { icon: CalendarDays, title: "Event Calendar", description: "Share school events, holidays, and important dates with the entire community." },
    ],
  },
  finance: {
    title: "Finance",
    description: "Complete financial management toolkit",
    features: [
      { icon: CreditCard, title: "Fee Collection", description: "Accept payments online and offline with multiple payment gateway integrations." },
      { icon: Receipt, title: "Expense Tracking", description: "Track and categorize school expenses with approval workflows." },
      { icon: Wallet, title: "Payroll Management", description: "Automate salary calculations, deductions, and disbursements for staff." },
      { icon: LineChart, title: "Financial Reports", description: "Generate income statements, balance sheets, and custom financial reports." },
    ],
  },
  parentApp: {
    title: "Parent App",
    description: "Keep parents connected and informed",
    features: [
      { icon: BarChart3, title: "Student Progress", description: "View academic performance, report cards, and learning analytics in real-time." },
      { icon: Bell, title: "Attendance Alerts", description: "Receive instant notifications when your child is marked absent or late." },
      { icon: CreditCard, title: "Fee Payments", description: "Pay school fees securely through the app with payment history and receipts." },
      { icon: MessageSquare, title: "Communication", description: "Chat directly with teachers and receive school announcements." },
      { icon: MapPin, title: "Transport Tracking", description: "Track school bus location in real-time for your child's safety." },
    ],
  },
  teacherApp: {
    title: "Teacher App",
    description: "Empower teachers with mobile tools",
    features: [
      { icon: UserCheck, title: "Attendance Marking", description: "Mark class attendance in seconds with a simple, intuitive interface." },
      { icon: BookOpen, title: "Mobile Gradebook", description: "Enter and update student grades on-the-go from any device." },
      { icon: Layout, title: "Lesson Planning", description: "Create and manage lesson plans with resource attachments." },
      { icon: MessageSquare, title: "Parent Connect", description: "Communicate with parents about student progress and concerns." },
    ],
  },
};

const Features = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="section-padding text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful <span className="text-gradient">Features</span> for Modern Schools
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your school efficiently, from admissions to alumni.
            </p>
          </div>
        </section>

        <section ref={ref} className="section-padding pt-0">
          <div
            className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Tabs defaultValue="administration" className="w-full">
              <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/50 p-1.5 rounded-xl mb-10 w-full justify-start">
                {Object.entries(featureCategories).map(([key, cat]) => (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="text-xs sm:text-sm px-3 py-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {cat.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(featureCategories).map(([key, cat]) => (
                <TabsContent key={key} value={key}>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">{cat.title}</h2>
                    <p className="text-muted-foreground">{cat.description}</p>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cat.features.map((feature) => (
                      <Card
                        key={feature.title}
                        className="group hover:shadow-md hover:border-primary/20 transition-all"
                      >
                        <CardHeader className="pb-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-gradient-primary transition-all">
                            <feature.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                          </div>
                          <CardTitle className="text-lg">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-sm">{feature.description}</CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Features;
