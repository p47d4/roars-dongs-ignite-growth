import { Code, Shield, Calculator, ShoppingCart, GraduationCap, Building2, Users } from "lucide-react";
import serviceSoftware from '@/assets/service-software.jpg';
import serviceCybersecurity from '@/assets/service-cybersecurity.jpg';
import serviceTaxAudit from '@/assets/service-tax-audit.jpg';
import serviceProcurement from '@/assets/service-procurement.jpg';
import serviceTraining from '@/assets/service-training.jpg';
import serviceSmartCity from '@/assets/service-smart-city.jpg';
import serviceConsultation from '@/assets/service-consultation.jpg';

export const services = [
    {
      title: "Software Design & Integration",
      icon: Code,
      image: serviceSoftware,
      description: "We design, develop, and integrate custom software solutions that streamline your business operations. From web applications to mobile apps and system integrations, we deliver scalable and robust solutions tailored to your specific requirements.",
      points: [
        "Custom Web Application Development",
        "Mobile App Development",
        "System Integration & API Development",
        "Database Design & Management"
      ]
    },
    {
      title: "I.T, A.I & Cybersecurity Services",
      icon: Shield,
      image: serviceCybersecurity,
      description: "Protect your digital assets with our comprehensive cybersecurity solutions. We provide IT infrastructure management, security assessments, and implementation of robust security measures to safeguard your business from cyber threats.",
      points: [
        "I.T & A.I Infrastructure Management",
        "Cybersecurity Assessment & Implementation",
        "Network Security & Monitoring",
        "Data Protection & Recovery Solutions"
      ]
    },
    {
      title: "Tax, Audit & Insurance Advisory",
      icon: Calculator,
      image: serviceTaxAudit,
      description: "Our comprehensive tax and audit services ensure regulatory compliance while optimizing your financial performance. We provide strategic tax planning, audit services, and financial advisory to help you make informed business decisions.",
      points: [
        "Financial Statement Audits",
        "Tax Planning & Compliance",
        "Insurance Training & Compliance",
        "Due Diligence & Forensics",
        "Financial Modeling & Analysis",
        "Audit & Advisory Services",
        "Market Research & Analysis",
        "Operational Optimization",
        "Risk Assessment & Management"
      ]
    },
    {
      title: "Procurement & Contracting",
      icon: ShoppingCart,
      image: serviceProcurement,
      description: "Streamline your procurement processes with our expert procurement and contracting services. We help optimize your supply chain, manage vendor relationships, and ensure cost-effective procurement strategies.",
      points: [
        "Procurement Strategy Development",
        "Vendor Management & Selection",
        "Contract Negotiation & Management",
        "Supply Chain Optimization"
      ]
    },
    {
      title: "Training & Capacity Building",
      icon: GraduationCap,
      image: serviceTraining,
      description: "Empower your team with our comprehensive training and capacity building programs. We offer customized training solutions across various domains to enhance skills, improve productivity, and drive organizational growth.",
      points: [
        "Professional Skills Development",
        "Technology Training Programs",
        "Leadership & Management Training",
        "Organizational Development"
      ]
    },
    {
      title: "Smart City Solutions",
      icon: Building2,
      image: serviceSmartCity,
      description: "Transform urban environments with our innovative smart city solutions. We design and implement technology-driven solutions that enhance urban planning, improve public services, and create sustainable city ecosystems.",
      points: [
        "Urban Planning & Development",
        "Smart Infrastructure Solutions",
        "IoT Implementation for Cities",
        "Sustainable Technology Integration"
      ]
    },
    {
      title: "Business Consultation",
      icon: Users,
      image: serviceConsultation,
      description: "Get expert guidance to navigate complex business challenges and identify growth opportunities. Our business consultation services provide strategic insights, operational improvements, and market analysis to drive your business forward.",
      points: [
        "Strategic Business Planning",
        "Market Research & Analysis",
        "Operational Efficiency Consulting",
        "Business Process Optimization"
      ]
    }
  ];
