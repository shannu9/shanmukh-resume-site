import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ResumePage from './pages/ResumePage';

export default function App() {
  const data = {
    name: "Shanmukh Sri Surya Gopi",
    email: "shanmukhsrisuryagopi@gmail.com",
    phone: "(201) 268-0951",
    linkedin: "https://in.linkedin.com/in/shanmukh-sri-surya-gopi-a164631b0",
    education: [
      {
        institution: "Stevens Institute of Technology",
        degree: "MBA in Analytics",
        location: "Hoboken, NJ",
        expected: "May 2025",
        relevantCourses: ["Business Analytics", "Machine Learning", "Strategic Management"]
      },
      {
        institution: "Lakireddy Bali Reddy College of Engineering",
        degree: "B.Tech in CSE",
        location: "Mylavaram, India",
        year: "2021",
        relevantCourses: ["Python", "Java", "Data Mining"]
      }
    ],
    skills: ["Python", "Java", "Apex", "SQL", "Excel", "Tableau", "Salesforce"],
    experience: [
      {
        company: "Infosys Limited",
        title: "Systems Engineer",
        duration: "Aug 2021 – Aug 2023",
        location: "Hyderabad, India",
        details: [
          "Improved Salesforce user adoption by 20%",
          "Created Python script to monitor LWC limits",
          "Automated email triggers using workflows"
        ]
      },
      {
        company: "Indian Servers",
        title: "Web App Pentester Intern",
        duration: "Apr 2020 – Jun 2020",
        location: "Vijayawada, India",
        details: [
          "Reported 6+ critical vulnerabilities",
          "Improved client security by 30%"
        ]
      }
    ],
    projects: [
      {
        id: 1,
        title: "Predicting Employee Attrition",
        description: "ML model using Orange tool with 89.9% accuracy",
        tech: ["Python", "Orange", "ML"]
      },
      {
        id: 2,
        title: "Fake News Detection",
        description: "Used SAS to classify fake news from 44k articles",
        tech: ["SAS", "Multivariate Analysis"]
      }
    ],
    activities: ["BI & Analytics Club", "Basketball", "NSS", "ACG Coordinator"]
  };

  return (
    <Router>
      <div className="p-4 max-w-4xl mx-auto">
        <Routes>
          <Route path="/" element={<ResumePage data={data} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}