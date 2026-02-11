import dataScience from '@/assets/courses/data-science.jpg';
import dataAnalytics from '@/assets/courses/data-analytics.jpg';
import pythonSql from '@/assets/courses/python-sql.jpg';
import fullStack from '@/assets/courses/full-stack.jpg';
import webDev from '@/assets/courses/web-development.jpg';
import pythonBasics from '@/assets/courses/python-basics.jpg';
import msOffice from '@/assets/courses/ms-office.jpg';
import digitalMarketingNew from '@/assets/courses/digital-marketing-new.jpg';
import sqlLanguage from '@/assets/courses/sql-language.jpg';

// Download brochures
import dataScienceBrochure from '@/assets/downloads/data-science-brochure.png';
import dataAnalyticsBrochure from '@/assets/downloads/data-analytics-brochure.png';
import pythonSqlBrochure from '@/assets/downloads/python-sql-brochure.png';
import fullStackBrochure from '@/assets/downloads/full-stack-brochure.png';
import webDevBrochure from '@/assets/downloads/web-development-brochure.png';
import valueAddedBrochure from '@/assets/downloads/value-added-courses-brochure.png';
import internshipBrochure from '@/assets/downloads/internship-program-brochure.png';

export interface Course {
  id: string;
  title: string;
  duration: string;
  type: string;
  description: string;
  features: string[];
  category: 'main' | 'value-added';
  detailedDescription?: string;
  image: string;
  downloadImages?: { url: string; filename: string }[];
}

export const courses: Course[] = [
  {
    id: 'data-science',
    title: 'Data Science',
    duration: '4-6 Months',
    type: 'Certified Internship',
    description: 'Master machine learning, data visualization, and statistical analysis with real-world data projects.',
    features: [
      'Machine Learning',
      'Data Visualization',
      'Statistics',
      'Real-World Data Project'
    ],
    category: 'main',
    detailedDescription: 'Dive deep into the world of data science with our comprehensive internship program. Learn Python, machine learning algorithms, data visualization techniques, and statistical analysis. Work on real-world datasets and complete a capstone project that demonstrates your skills to potential employers.',
    image: dataScience,
    downloadImages: [
      { url: dataScienceBrochure, filename: 'EDSEC-Data-Science-Brochure.png' }
    ]
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    duration: '4-6 Months',
    type: 'Certified Internship',
    description: 'Transform raw data into actionable insights using Excel, Power BI, SQL, and business intelligence tools.',
    features: [
      'Excel Advanced',
      'Power BI',
      'SQL',
      'Business Dashboarding',
      'Real Data Insights Project'
    ],
    category: 'main',
    detailedDescription: 'Become a data analytics expert through hands-on training in Excel, Power BI, SQL, and business intelligence. Learn to create stunning dashboards, perform complex data analysis, and communicate insights effectively. Complete real business case studies and build a professional portfolio.',
    image: dataAnalytics,
    downloadImages: [
      { url: dataAnalyticsBrochure, filename: 'EDSEC-Data-Analytics-Brochure.png' }
    ]
  },
  {
    id: 'python-sql',
    title: 'Python Programming with SQL',
    duration: '4-6 Months',
    type: 'Certified Internship',
    description: 'Build powerful applications by combining Python programming with database management using SQL.',
    features: [
      'Python Basics to Advanced',
      'SQL Integration',
      'API Handling',
      'Mini Project'
    ],
    category: 'main',
    detailedDescription: 'Master Python programming from basics to advanced concepts and integrate it with SQL for powerful data manipulation. Learn to build APIs, work with databases, and develop complete applications. Includes hands-on projects and real-world problem-solving.',
    image: pythonSql,
    downloadImages: [
      { url: pythonSqlBrochure, filename: 'EDSEC-Python-SQL-Brochure.png' }
    ]
  },
  {
    id: 'full-stack',
    title: 'Full Stack Development',
    duration: '4-6 Months',
    type: 'Certified Internship',
    description: 'Become a complete web developer with frontend and backend skills, ready to build production applications.',
    features: [
      'HTML, CSS, JavaScript',
      'React Framework',
      'Django Backend',
      'Database Management',
      'Cloud Hosting',
      'Capstone Full-Stack Project'
    ],
    category: 'main',
    detailedDescription: 'Comprehensive full-stack development training covering both frontend and backend technologies. Learn React for dynamic user interfaces, Django for robust backends, database design, and cloud deployment. Build multiple projects including a complete full-stack application.',
    image: fullStack,
    downloadImages: [
      { url: fullStackBrochure, filename: 'EDSEC-Full-Stack-Development-Brochure.png' }
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development',
    duration: '6 Months',
    type: 'Certified Internship',
    description: 'Create stunning, responsive websites from scratch with modern frontend technologies.',
    features: [
      'Frontend Design',
      'Responsive Layouts',
      'Hosting Basics',
      'Portfolio Project'
    ],
    category: 'main',
    detailedDescription: 'Learn professional web development from the ground up. Master HTML, CSS, JavaScript, and modern design principles. Create responsive, mobile-friendly websites and deploy them to the web. Build a stunning portfolio to showcase your work.',
    image: webDev,
    downloadImages: [
      { url: webDevBrochure, filename: 'EDSEC-Web-Development-Brochure.png' }
    ]
  },
  {
    id: 'python-basics',
    title: 'Basics of Python Programming',
    duration: '1 Month',
    type: 'Value Added Course',
    description: 'Quick start guide to Python programming fundamentals for beginners.',
    features: [
      'Introduction to Python & installation',
      'Variables & Data Types',
      'Input/Output operations',
      'Type casting',
      'Comments & indentation',
      'Operators (Arithmetic, Comparison, Logical, Assignment, Bitwise)'
    ],
    category: 'value-added',
    detailedDescription: 'Perfect introduction to Python for absolute beginners. Learn programming fundamentals, write your first programs, and understand core Python concepts in just one month.',
    image: pythonBasics,
    downloadImages: [
      { url: valueAddedBrochure, filename: 'EDSEC-Value-Added-Courses-Brochure.png' }
    ]
  },
  {
    id: 'augmented-reality',
    title: 'Augmented Reality',
    duration: '1 Month',
    type: 'Value Added Course',
    description: 'Explore AR technology and create immersive experiences with 3D object interactions.',
    features: [
      'Create 3D object interactions',
      'Track surfaces, images, faces',
      'Improve performance of AR apps',
      'Integrate animations & UI'
    ],
    category: 'value-added',
    detailedDescription: 'Step into the future with Augmented Reality development. Learn to create interactive AR experiences, track real-world objects, and build engaging applications that blend digital content with the physical world.',
    image: msOffice,
    downloadImages: [
      { url: valueAddedBrochure, filename: 'EDSEC-Value-Added-Courses-Brochure.png' }
    ]
  },
  {
    id: 'sql-language',
    title: 'SQL Language',
    duration: '1 Month',
    type: 'Value Added Course',
    description: 'Master database management and SQL queries for efficient data manipulation.',
    features: [
      'Database fundamentals',
      'SQL queries and operations',
      'Data manipulation',
      'Database design'
    ],
    category: 'value-added',
    detailedDescription: 'Learn SQL from scratch and become proficient in database management. Master queries, joins, aggregations, and database design. Essential skill for any developer or data professional.',
    image: sqlLanguage,
    downloadImages: [
      { url: valueAddedBrochure, filename: 'EDSEC-Value-Added-Courses-Brochure.png' }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    duration: '1 Month',
    type: 'Value Added Course',
    description: 'Learn social media marketing, SEO, email campaigns, and online advertising strategies.',
    features: [
      'Social Media Marketing',
      'SEO Optimization',
      'Email Marketing Campaigns',
      'Google Ads & Facebook Ads',
      'Analytics & Performance Tracking'
    ],
    category: 'value-added',
    detailedDescription: 'Master the fundamentals of digital marketing in just one month. Learn to create effective social media campaigns, optimize content for search engines, run successful email marketing, and analyze campaign performance. Perfect for entrepreneurs and marketing enthusiasts.',
    image: digitalMarketingNew,
    downloadImages: [
      { url: valueAddedBrochure, filename: 'EDSEC-Value-Added-Courses-Brochure.png' }
    ]
  }
];
