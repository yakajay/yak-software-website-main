import React, { useState, useEffect } from 'react';
import {
  Menu, X, Mail, MapPin, ArrowRight, CheckCircle, Users, UserCheck, Briefcase,
  Building2, Globe2, Layers, Search, ClipboardCheck, Handshake, Rocket,
  CalendarCheck, Clock, Wallet, ShieldCheck, FileSpreadsheet, UserPlus,
  Smartphone, BarChart3, Network, LifeBuoy, Lock, Cpu, Landmark, HeartPulse,
  ShoppingCart, Factory, Phone as PhoneIcon,
} from 'lucide-react';

const CONTACT_EMAIL = 'info@yaksofts.com';
const CAREERS_EMAIL = 'hr@yaksofts.com';
const LOGO_DARK = '/yak-logo-dark.png';
const LOGO_LIGHT = '/yak-logo-light.png';

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Staffing Services' },
  { id: 'process', label: 'How We Work' },
  { id: 'ajax-portal', label: 'AJAX-Portal' },
  { id: 'about', label: 'Why Us' },
];

const SERVICES = [
  {
    icon: <Briefcase className="h-7 w-7" />,
    title: 'Contract Staffing',
    description:
      'Pre-screened IT and non-IT professionals deployed on short or long-term contracts, on our payroll, so you scale up or down without adding headcount.',
  },
  {
    icon: <UserCheck className="h-7 w-7" />,
    title: 'Permanent Hiring',
    description:
      'End-to-end recruitment for full-time roles, from sourcing and technical screening to offer negotiation and joining follow-up.',
  },
  {
    icon: <Layers className="h-7 w-7" />,
    title: 'Contract-to-Hire',
    description:
      'Evaluate talent on the job before converting them to your rolls, which lowers hiring risk for critical positions.',
  },
  {
    icon: <Users className="h-7 w-7" />,
    title: 'Dedicated Teams',
    description:
      'Ready-to-deploy project and delivery teams of developers, QA, DevOps, data and support engineers, managed to your processes and tools.',
  },
  {
    icon: <Search className="h-7 w-7" />,
    title: 'Leadership & Niche Hiring',
    description:
      'Targeted search for senior, specialist and hard-to-fill roles across cloud, data, SAP, cybersecurity and emerging technologies.',
  },
  {
    icon: <Building2 className="h-7 w-7" />,
    title: 'Payroll & Compliance Outsourcing',
    description:
      'We handle payroll, PF / ESI / PT, attendance, leave and statutory filings for deployed staff, all run on our own HRMS, AJAX-Portal.',
  },
];

const PROCESS = [
  {
    icon: <ClipboardCheck className="h-7 w-7" />,
    title: 'Understand the requirement',
    description: 'We align on skills, experience, budget, location and timelines with your hiring managers.',
  },
  {
    icon: <Search className="h-7 w-7" />,
    title: 'Source & screen',
    description: 'Our recruiters search our talent network and run technical and HR screening rounds.',
  },
  {
    icon: <Handshake className="h-7 w-7" />,
    title: 'Interview & select',
    description: 'You receive a curated shortlist; we coordinate interviews, feedback and offers.',
  },
  {
    icon: <Rocket className="h-7 w-7" />,
    title: 'Onboard & manage',
    description: 'Background checks, onboarding, timesheets, payroll and ongoing engagement through AJAX-Portal.',
  },
];

const INDUSTRIES = [
  { icon: <Cpu className="h-6 w-6" />, label: 'IT & Software Services' },
  { icon: <Landmark className="h-6 w-6" />, label: 'Banking, Financial Services & Insurance' },
  { icon: <HeartPulse className="h-6 w-6" />, label: 'Healthcare & Life Sciences' },
  { icon: <ShoppingCart className="h-6 w-6" />, label: 'Retail & E-commerce' },
  { icon: <Factory className="h-6 w-6" />, label: 'Manufacturing & Engineering' },
  { icon: <PhoneIcon className="h-6 w-6" />, label: 'Telecom & Shared Services' },
];

const ROLES = [
  'Full-stack, Java, .NET, Python & Node.js developers',
  'Cloud & DevOps (AWS, Azure, GCP, Kubernetes)',
  'Data engineering, analytics & AI/ML',
  'SAP, Salesforce & ERP consultants',
  'QA, automation & performance testing',
  'Cybersecurity & infrastructure',
  'Project, product & delivery managers',
  'Support, operations & back-office staff',
];

const PORTAL_FEATURES = [
  {
    icon: <Wallet className="h-6 w-6" />,
    title: 'Payroll & Payslips',
    description: 'Salary structures, monthly payroll runs, PDF payslips, bank payment files and accounting journal exports (Tally, Xero, QuickBooks).',
  },
  {
    icon: <FileSpreadsheet className="h-6 w-6" />,
    title: 'Statutory Compliance',
    description: 'PF, ESI and professional tax applied to payslips, filing CSVs, Labour Codes wage check, annual tax statements and a compliance calendar.',
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Attendance & Shifts',
    description: 'Clock in/out with optional geofence or office-IP rules, shifts, overtime, late / early-out flags and manager-approved corrections.',
  },
  {
    icon: <CalendarCheck className="h-6 w-6" />,
    title: 'Leave Management',
    description: 'Configurable leave types, monthly accrual, carry-forward, half days, holiday calendars and a team leave calendar.',
  },
  {
    icon: <UserPlus className="h-6 w-6" />,
    title: 'Recruitment to Exit',
    description: 'Job openings, candidate pipeline, one-click hire, onboarding checklists, resignations and full-and-final settlement.',
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: 'Outsourcing & Contractors',
    description: 'Contract dates with expiry alerts, weekly timesheets and client invoices with overdue tracking, built for staffing operations.',
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: 'Reports & Analytics',
    description: 'Headcount, joiners and leavers, attrition, payroll cost and leave reports, plus CSV exports.',
  },
  {
    icon: <Network className="h-6 w-6" />,
    title: 'Workflows & Organisation',
    description: 'Departments, org chart, approval workflows with escalation, expenses, performance reviews, goals and announcements.',
  },
  {
    icon: <LifeBuoy className="h-6 w-6" />,
    title: 'Employee Self-Service',
    description: 'Employees view payslips, apply for leave, raise tickets and get notifications, with a mobile app installable on any phone.',
  },
];

const MARQUEE = ['Java', 'React', 'Python', '.NET', 'AWS', 'Azure', 'DevOps', 'Data Engineering', 'AI / ML', 'SAP', 'Salesforce', 'QA Automation', 'Cybersecurity', 'Project Management'];

const PORTAL_SECURITY = [
  { icon: <Lock className="h-5 w-5" />, text: 'Encrypted salary, bank and ID data' },
  { icon: <ShieldCheck className="h-5 w-5" />, text: 'Two-factor login and SSO (Microsoft Entra ID, Google, Okta)' },
  { icon: <Globe2 className="h-5 w-5" />, text: 'Separate, isolated workspace for every company' },
  { icon: <Smartphone className="h-5 w-5" />, text: 'Mobile-friendly with English, Hindi and Spanish' },
];

const WHY_US = [
  'Specialists in staffing for MNCs and global capability centres (GCCs)',
  'Pre-screened candidates, so your hiring managers see quality profiles',
  'Fast turnaround from requirement to shortlist',
  'Transparent, compliant payroll for every deployed resource',
  'A single point of contact and real-time visibility through AJAX-Portal',
  'Flexible engagement models: contract, contract-to-hire, permanent or dedicated team',
];

function SectionHeading({ eyebrow, title, highlight, subtitle, dark = false }: {
  eyebrow: string; title: string; highlight: string; subtitle?: string; dark?: boolean;
}) {
  return (
    <div className="text-center mb-14">
      <p className="text-sm font-semibold tracking-widest uppercase text-[#76b445] mb-3">{eyebrow}</p>
      <h2 className={`text-3xl md:text-5xl font-extrabold tracking-tight mb-5 ${dark ? 'text-white' : 'text-gray-900'}`}>
        {title} <span className="text-gradient">{highlight}</span>
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-3xl mx-auto ${dark ? 'text-gray-300' : 'text-gray-600'}`}>{subtitle}</p>
      )}
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [enquiryType, setEnquiryType] = useState('Hire talent');
  const [formStatus, setFormStatus] = useState<{ state: 'idle' | 'sending' | 'sent' | 'error'; mailto?: string }>({ state: 'idle' });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const contactWith = (type: string) => {
    setEnquiryType(type);
    scrollToSection('contact');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const enquiry = String(formData.get('enquiry') || 'General');
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      enquiry,
      message: formData.get('message'),
      _subject: `Website enquiry: ${enquiry} - ${formData.get('company')}`,
      _replyto: formData.get('email'),
      _template: 'table',
      _captcha: 'false',
      _honey: formData.get('_honey'),
    };

    setFormStatus({ state: 'sending' });
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({ success: false }));
      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        throw new Error((result && result.message) || `Request failed with status ${response.status}`);
      }
      setFormStatus({ state: 'sent' });
      form.reset();
      setEnquiryType('Hire talent');
    } catch (error) {
      console.error('Contact form error:', error);
      const body = encodeURIComponent(
        `Name: ${data.name}\nCompany: ${data.company}\nEnquiry: ${enquiry}\n\n${data.message}`,
      );
      setFormStatus({
        state: 'error',
        mailto: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(data._subject)}&body=${body}`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 px-3 sm:px-6 pt-3">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 rounded-2xl transition-all duration-300 ${
          scrolled || isMenuOpen ? 'bg-white/85 backdrop-blur-xl shadow-lg border border-gray-200/70' : 'bg-transparent'
        }`}>
          <div className="flex justify-between items-center py-2">
            <button onClick={() => scrollToSection('home')} className="flex items-center" aria-label="Go to top">
              <img src={scrolled || isMenuOpen ? LOGO_DARK : LOGO_LIGHT} alt="Yak Software Solutions logo" className="h-11 md:h-14 w-auto transition-all duration-300" />
            </button>

            <div className="hidden lg:flex items-center gap-1">
              {NAV.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => contactWith('Hire talent')}
                className="ml-3 bg-[#76b445] text-white px-5 py-2.5 rounded-full hover:bg-[#5a8a33] transition-colors text-sm font-bold shadow-lg shadow-[#76b445]/30 flex items-center gap-1.5"
              >
                Hire Talent <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${scrolled || isMenuOpen ? 'text-gray-800' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden pb-4 space-y-1">
              {NAV.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-800 font-medium px-3 py-2.5 rounded-lg hover:bg-gray-100"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => contactWith('Hire talent')}
                className="block w-full text-center bg-[#76b445] text-white px-4 py-3 rounded-xl font-bold mt-2"
              >
                Hire Talent
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center bg-[#07090b] overflow-hidden">
        <div className="absolute inset-0 bg-grid"></div>
        <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-[#76b445]/25 blur-[120px]"></div>
        <div className="absolute -bottom-40 right-0 w-[32rem] h-[32rem] rounded-full bg-teal-500/20 blur-[120px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 grid lg:grid-cols-2 gap-14 items-center w-full">
          <div className="animate-fade-in-up text-center lg:text-left">
            <span className="inline-flex items-center gap-2 glass text-white/90 text-xs sm:text-sm font-semibold rounded-full px-4 py-1.5 mb-7">
              <span className="w-2 h-2 rounded-full bg-[#76b445] animate-pulse"></span>
              Staffing partner for MNCs &amp; GCCs
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              The right talent,
              <span className="block text-gradient">right when you need it.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Contract, permanent and dedicated-team staffing for multinational companies, with payroll and
              compliance managed on our own HRMS, <span className="text-white font-semibold">AJAX-Portal</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => contactWith('Hire talent')}
                className="group bg-[#76b445] hover:bg-[#5a8a33] text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-xl shadow-[#76b445]/30 flex items-center justify-center gap-2"
              >
                Hire Talent
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('ajax-portal')}
                className="glass text-white hover:bg-white/15 px-8 py-4 rounded-full text-base font-bold transition-all"
              >
                Explore AJAX-Portal
              </button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start text-sm text-gray-400">
              {['Contract staffing', 'Permanent hiring', 'Dedicated teams', 'Payroll & compliance'].map((label) => (
                <span key={label} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#76b445]" /> {label}
                </span>
              ))}
            </div>
          </div>

          {/* Dashboard preview */}
          <div className="relative hidden md:block animate-fade-in-up">
            <div className="glass rounded-3xl p-6 shadow-2xl animate-float">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400/80"></span>
                </div>
                <span className="text-xs font-semibold text-gray-400">AJAX-Portal · Workforce</span>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { k: 'Deployed', v: 'Active', c: 'text-[#9be15d]' },
                  { k: 'Timesheets', v: 'Approved', c: 'text-teal-300' },
                  { k: 'Payroll', v: 'On time', c: 'text-white' },
                ].map((t) => (
                  <div key={t.k} className="bg-white/5 rounded-xl p-3">
                    <div className="text-[11px] text-gray-400 mb-1">{t.k}</div>
                    <div className={`text-sm font-bold ${t.c}`}>{t.v}</div>
                  </div>
                ))}
              </div>
              <div className="bg-white/5 rounded-xl p-4 mb-5">
                <div className="text-xs text-gray-400 mb-3">Hiring pipeline</div>
                <div className="flex items-end gap-2 h-24">
                  {[90, 70, 52, 34, 22].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-[#5a8a33] to-[#9be15d]" style={{ height: `${h}%`, opacity: 1 - i * 0.12 }}></div>
                  ))}
                </div>
                <div className="flex justify-between text-[10px] text-gray-500 mt-2">
                  <span>Sourced</span><span>Screened</span><span>Interview</span><span>Offer</span><span>Hired</span>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { n: 'Cloud Engineer', s: 'Onboarded', c: 'bg-[#76b445]/20 text-[#9be15d]' },
                  { n: 'Data Analyst', s: 'Offer sent', c: 'bg-teal-400/20 text-teal-300' },
                  { n: 'QA Automation', s: 'Interview', c: 'bg-white/10 text-gray-300' },
                ].map((r) => (
                  <div key={r.n} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2.5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#76b445] to-teal-500 flex items-center justify-center text-white text-xs font-bold">
                        {r.n.split(' ').map((w) => w[0]).join('')}
                      </div>
                      <span className="text-sm text-white font-medium">{r.n}</span>
                    </div>
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${r.c}`}>{r.s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-4 flex items-center gap-3 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-[#76b445] flex items-center justify-center text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-white text-sm font-bold">PF · ESI · PT</div>
                <div className="text-gray-400 text-xs">Statutory compliant payroll</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills marquee */}
      <section className="bg-[#76b445] py-4 overflow-hidden" aria-label="Skills we hire for">
        <div className="flex w-max animate-marquee">
          {[...MARQUEE, ...MARQUEE].map((t, i) => (
            <span key={i} className="flex items-center text-white font-bold text-sm md:text-base whitespace-nowrap px-6">
              {t}<span className="ml-12 opacity-60">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we offer"
            title="Staffing"
            highlight="Services"
            subtitle="Flexible workforce solutions that help global enterprises build, scale and run their teams in India."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div key={service.title} className="group">
                <div className="bg-white rounded-2xl border border-gray-200 card-hover p-8 h-full">
                  <div className={`w-14 h-14 bg-gradient-to-r ${index % 2 === 0 ? 'from-[#76b445] to-[#5a8a33]' : 'from-black to-gray-800'} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles & Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-[#76b445] mb-3">Talent we deliver</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Roles we hire for</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ROLES.map((role) => (
                <div key={role} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#76b445] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{role}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-[#76b445] mb-3">Who we serve</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Industries</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {INDUSTRIES.map((ind) => (
                <div key={ind.label} className="flex items-center space-x-3 bg-gray-50 border border-gray-100 rounded-2xl p-4 card-hover">
                  <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    {ind.icon}
                  </div>
                  <span className="text-gray-800 font-medium">{ind.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our process"
            title="How We"
            highlight="Work"
            subtitle="A structured, transparent hiring process from the first conversation to day one and beyond."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS.map((step, index) => (
              <div key={step.title} className="relative bg-white rounded-2xl border border-gray-200 card-hover p-8">
                <span className="absolute top-4 right-5 text-6xl font-extrabold text-gray-100 select-none">{index + 1}</span>
                <div className="relative w-14 h-14 bg-[#76b445] rounded-lg flex items-center justify-center text-white mb-6">
                  {step.icon}
                </div>
                <h3 className="relative text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="relative text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AJAX-Portal */}
      <section id="ajax-portal" className="relative py-24 bg-[#07090b] overflow-hidden">
        <div className="absolute inset-0 bg-grid"></div>
        <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] rounded-full bg-[#76b445]/20 blur-[120px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            eyebrow="Our HRMS product"
            title="Introducing"
            highlight="AJAX-Portal"
            subtitle="A complete, multi-tenant HR and payroll platform built by Yak Software. It powers our own staffing operations and is available to your organisation too."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {PORTAL_FEATURES.map((f, i) => (
              <div key={f.title} className={`glass rounded-3xl p-7 card-hover ${i === 0 ? 'lg:col-span-2' : ''} ${i === PORTAL_FEATURES.length - 1 ? 'md:col-span-2 lg:col-span-3' : ''}`}>
                <div className="w-12 h-12 bg-[#76b445] rounded-lg flex items-center justify-center text-white mb-4">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">{f.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-8 lg:p-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Enterprise-grade <span className="text-[#76b445]">security</span>
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Each company gets its own isolated workspace with role-based admin permissions,
                audit logs and encryption for sensitive data.
              </p>
              <div className="space-y-4">
                {PORTAL_SECURITY.map((s) => (
                  <div key={s.text} className="flex items-center space-x-3">
                    <div className="w-9 h-9 bg-black text-white rounded-lg flex items-center justify-center flex-shrink-0">{s.icon}</div>
                    <span className="text-gray-800">{s.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-3">How AJAX-Portal helps you</h4>
              <ul className="space-y-3 mb-8">
                {[
                  'Staffing clients: track deployed resources, timesheets and invoices in one place',
                  'HR teams: run payroll, leave, attendance and compliance without spreadsheets',
                  'Employees: self-service payslips, leave and requests from their phone',
                ].map((t) => (
                  <li key={t} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#76b445] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{t}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => contactWith('AJAX-Portal demo')}
                className="w-full bg-[#76b445] hover:bg-[#5a8a33] text-white py-3.5 px-6 rounded-full font-bold transition-colors shadow-lg shadow-[#76b445]/30 flex items-center justify-center space-x-2"
              >
                <span>Request an AJAX-Portal Demo</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-[#76b445] mb-3">Why Yak Software</p>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Your trusted <span className="text-[#76b445]">workforce partner</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Based in Hyderabad, we help multinational companies find, deploy and manage skilled professionals.
                We combine experienced recruiters with our own HR technology, so every placement is fast,
                compliant and fully visible to you.
              </p>
              <div className="space-y-4">
                {WHY_US.map((item) => (
                  <div key={item} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#76b445] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6 text-center">
                {[
                  { value: 'IT & Non-IT', label: 'Talent across functions' },
                  { value: 'Pan-India', label: 'Hiring reach' },
                  { value: 'Compliant', label: 'PF, ESI & PT payroll' },
                  { value: 'In-house', label: 'HRMS: AJAX-Portal' },
                ].map((s, i) => (
                  <div key={s.label} className="bg-white rounded-lg p-6 shadow-lg">
                    <div className={`text-2xl font-bold mb-2 ${i % 3 === 0 ? 'text-[#76b445]' : 'text-black'}`}>{s.value}</div>
                    <div className="text-gray-600 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-24 bg-[#07090b] overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-[#76b445]/20 blur-[120px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            eyebrow="Get in touch"
            title="Let's Build Your"
            highlight="Team"
            subtitle="Share your hiring needs or request an AJAX-Portal demo. Our team will respond within one business day."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us an enquiry</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input type="text" name="name" required placeholder="Your name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#76b445] focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Work email</label>
                      <input type="email" name="email" required placeholder="you@company.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#76b445] focus:border-transparent" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                      <input type="text" name="company" required placeholder="Company name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#76b445] focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">I'm interested in</label>
                      <select name="enquiry" value={enquiryType} onChange={(e) => setEnquiryType(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#76b445] focus:border-transparent bg-white">
                        <option>Hire talent</option>
                        <option>Contract staffing</option>
                        <option>Permanent hiring</option>
                        <option>Dedicated team</option>
                        <option>Payroll & compliance outsourcing</option>
                        <option>AJAX-Portal demo</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Requirement details</label>
                    <textarea rows={5} name="message" required
                      placeholder="Roles, number of positions, skills, location, duration..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#76b445] focus:border-transparent resize-none"></textarea>
                  </div>
                  <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                  <button type="submit" disabled={formStatus.state === 'sending'}
                    className="w-full bg-[#76b445] hover:bg-[#5a8a33] disabled:opacity-60 text-white py-3.5 px-6 rounded-full font-bold transition-colors shadow-lg shadow-[#76b445]/30">
                    {formStatus.state === 'sending' ? 'Sending…' : 'Submit Enquiry'}
                  </button>
                  {formStatus.state === 'sent' && (
                    <div role="status" className="flex items-start gap-3 bg-green-50 border border-green-200 text-green-800 rounded-xl p-4">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>Thank you! Your enquiry has been sent. Our team will get back to you within one business day.</span>
                    </div>
                  )}
                  {formStatus.state === 'error' && (
                    <div role="alert" className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-4">
                      We couldn't send your enquiry right now.{' '}
                      <a href={formStatus.mailto} className="font-semibold underline">Click here to email it to us instead</a>{' '}
                      or write to {CONTACT_EMAIL}.
                    </div>
                  )}
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 text-white flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#76b445] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-300 hover:text-white">{CONTACT_EMAIL}</a>
                </div>
              </div>
              <div className="glass rounded-2xl p-6 text-white flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#76b445] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Office</h4>
                  <p className="text-gray-300">Nizampet, Hyderabad, India</p>
                </div>
              </div>
              <div className="glass rounded-2xl p-6 text-white">
                <h4 className="font-semibold mb-2">Looking for a job?</h4>
                <p className="text-gray-300 text-sm">
                  Send your resume to <a href={`mailto:${CAREERS_EMAIL}`} className="text-[#76b445] hover:underline">{CAREERS_EMAIL}</a> with
                  the role you're interested in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-14 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <img src={LOGO_LIGHT} alt="Yak Software Solutions logo" className="h-20 w-auto mb-5" />
              <p className="text-gray-400">
                Staffing and workforce solutions for multinational companies, powered by AJAX-Portal HRMS.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                {SERVICES.map((s) => (
                  <li key={s.title}>
                    <button onClick={() => scrollToSection('services')} className="hover:text-white">{s.title}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                {NAV.slice(1).map((n) => (
                  <li key={n.id}>
                    <button onClick={() => scrollToSection(n.id)} className="hover:text-white">{n.label}</button>
                  </li>
                ))}
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white">Contact</button></li>
              </ul>
            </div>
          </div>
          <p className="text-gray-500 text-center mt-10 pt-6 border-t border-gray-800">
            © {new Date().getFullYear()} Yak Software Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
