export interface CareerPosition {
  slug: string;
  title: string;
  department: string;
  employmentType: string;
  location: string;
  datePosted: string;
  experience: string;
  aboutRole: string;
  responsibilities: string[];
  requirements: string[];
  applyHref: string;
}

export const careerPositions: CareerPosition[] = [
  {
    slug: "sales-executive",
    title: "Sales Executive",
    department: "Sales & Marketing",
    employmentType: "Full-Time",
    location: "Colombo, Sri Lanka",
    datePosted: "May 20, 2024",
    experience: "1-3 Years",
    aboutRole:
      "We are looking for a motivated and results-driven Sales Executive to join our growing team. You will build strong customer relationships, identify new business opportunities, and represent the Edinborough brand with confidence.",
    responsibilities: [
      "Develop and maintain strong customer relationships.",
      "Identify new sales and business opportunities.",
      "Achieve monthly and annual sales targets.",
      "Visit customers and support their product requirements.",
      "Coordinate with internal teams to ensure smooth order fulfilment.",
      "Monitor market trends and competitor activities.",
      "Represent Edinborough professionally in the market.",
    ],
    requirements: [
      "Strong communication and interpersonal skills.",
      "Customer-focused and positive attitude.",
      "Good negotiation and presentation skills.",
      "Ability to work independently and as part of a team.",
      "Previous experience in sales or FMCG is an advantage.",
      "Valid driving licence is an added advantage.",
    ],
    applyHref: "https://www.linkedin.com",
  },
  {
    slug: "production-executive",
    title: "Production Executive",
    department: "Operations",
    employmentType: "Full-Time",
    location: "Colombo, Sri Lanka",
    datePosted: "May 20, 2024",
    experience: "2-4 Years",
    aboutRole:
      "We are seeking a detail-oriented Production Executive to oversee daily production activities, ensuring output targets are met while maintaining our high standards of quality and safety.",
    responsibilities: [
      "Plan and monitor daily production schedules.",
      "Ensure production targets and deadlines are met.",
      "Supervise production staff and coordinate shift activities.",
      "Enforce food safety, hygiene, and quality standards.",
      "Maintain accurate production records and reports.",
      "Identify and resolve process bottlenecks.",
      "Liaise with quality control and supply chain teams.",
    ],
    requirements: [
      "Diploma or degree in Production, Engineering, or related field.",
      "Prior experience in an FMCG or food manufacturing environment.",
      "Strong leadership and team coordination skills.",
      "Good understanding of GMP and food safety standards.",
      "Ability to work shifts as required.",
      "Strong problem-solving and analytical skills.",
    ],
    applyHref: "https://www.linkedin.com",
  },
  {
    slug: "quality-control-officer",
    title: "Quality Control Officer",
    department: "Quality Assurance",
    employmentType: "Full-Time",
    location: "Colombo, Sri Lanka",
    datePosted: "May 20, 2024",
    experience: "1-3 Years",
    aboutRole:
      "We are looking for a meticulous Quality Control Officer to monitor and test our products at every stage of production, ensuring every batch meets Edinborough's quality benchmarks.",
    responsibilities: [
      "Conduct routine quality checks on raw materials and finished goods.",
      "Perform sensory, physical, and chemical testing on products.",
      "Document and report any deviations from quality standards.",
      "Support internal and external quality audits.",
      "Work with production teams to resolve quality issues.",
      "Maintain calibration records for testing equipment.",
      "Ensure compliance with relevant food safety regulations.",
    ],
    requirements: [
      "Degree/Diploma in Food Science, Chemistry, or related field.",
      "Experience in a quality assurance role, preferably in FMCG.",
      "Strong attention to detail and analytical mindset.",
      "Familiarity with HACCP and ISO quality systems.",
      "Good written and verbal communication skills.",
      "Ability to work independently under minimal supervision.",
    ],
    applyHref: "https://www.linkedin.com",
  },
  {
    slug: "hr-executive",
    title: "HR Executive",
    department: "Human Resources",
    employmentType: "Full-Time",
    location: "Colombo, Sri Lanka",
    datePosted: "May 20, 2024",
    experience: "2-4 Years",
    aboutRole:
      "We are looking for a proactive HR Executive to support recruitment, employee relations, and day-to-day HR operations, helping us build a workplace where people can thrive.",
    responsibilities: [
      "Manage end-to-end recruitment and onboarding processes.",
      "Maintain employee records and HR documentation.",
      "Support performance management and appraisal cycles.",
      "Assist in employee engagement and welfare initiatives.",
      "Ensure compliance with labour laws and company policies.",
      "Coordinate training and development programs.",
      "Address employee queries and grievances promptly.",
    ],
    requirements: [
      "Degree in Human Resource Management or related field.",
      "Prior experience in an HR generalist role.",
      "Strong interpersonal and conflict-resolution skills.",
      "Good knowledge of Sri Lankan labour regulations.",
      "Proficiency in HR information systems and MS Office.",
      "High level of confidentiality and professionalism.",
    ],
    applyHref: "https://www.linkedin.com",
  },
  {
    slug: "supply-chain-executive",
    title: "Supply Chain Executive",
    department: "Supply Chain",
    employmentType: "Full-Time",
    location: "Colombo, Sri Lanka",
    datePosted: "May 20, 2024",
    experience: "2-4 Years",
    aboutRole:
      "We are looking for an organized Supply Chain Executive to manage procurement, inventory, and logistics processes that keep our production and distribution running smoothly.",
    responsibilities: [
      "Coordinate procurement of raw materials and packaging.",
      "Monitor stock levels and manage inventory planning.",
      "Liaise with suppliers and negotiate favourable terms.",
      "Track shipments and resolve logistics issues.",
      "Support demand forecasting and production planning.",
      "Maintain accurate supply chain records and reports.",
      "Identify opportunities to improve supply chain efficiency.",
    ],
    requirements: [
      "Degree/Diploma in Supply Chain, Logistics, or related field.",
      "Experience in procurement, inventory, or logistics roles.",
      "Strong negotiation and vendor management skills.",
      "Good analytical and organizational abilities.",
      "Proficiency in inventory management systems and MS Excel.",
      "Ability to work under pressure and meet deadlines.",
    ],
    applyHref: "https://www.linkedin.com",
  },
  {
    slug: "finance-executive",
    title: "Finance Executive",
    department: "Finance & Accounts",
    employmentType: "Full-Time",
    location: "Colombo, Sri Lanka",
    datePosted: "May 20, 2024",
    experience: "2-4 Years",
    aboutRole:
      "We are looking for a detail-oriented Finance Executive to support financial reporting, reconciliations, and day-to-day accounting operations across the business.",
    responsibilities: [
      "Prepare and maintain accurate financial records.",
      "Assist in monthly and annual financial reporting.",
      "Reconcile accounts and resolve discrepancies.",
      "Support budgeting and cash flow monitoring.",
      "Ensure compliance with tax and statutory requirements.",
      "Coordinate with auditors during financial audits.",
      "Process invoices, payments, and expense claims.",
    ],
    requirements: [
      "Degree/Part-qualification in Accounting, Finance, or related field.",
      "Prior experience in an accounting or finance role.",
      "Strong numerical and analytical skills.",
      "Proficiency in accounting software and MS Excel.",
      "High attention to detail and accuracy.",
      "Good time-management and organizational skills.",
    ],
    applyHref: "https://www.linkedin.com",
  },
];

export function getCareerPositionBySlug(
  slug: string
): CareerPosition | undefined {
  return careerPositions.find((position) => position.slug === slug);
}
