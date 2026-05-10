import "../styles/courses.css";
import { useMemo, useState } from "react";

export default function CoursesPage() {
  const btechStructure = [
    {
      division: "Institute Core",
      items: [
        { subDivision: "IC Compulsory", credits: 39 },
        { subDivision: "IC Basket", credits: 6 },
        { subDivision: "HSS", credits: 12 },
        { subDivision: "Indian Knowledge System", credits: 3 },
      ],
    },
    {
      division: "Discipline",
      items: [
        { subDivision: "Discipline Core", credits: null },
        { subDivision: "Discipline Electives", credits: null },
      ],
      credits: 66,
    },
    {
      division: "Electives",
      items: [
        { subDivision: "MTP + ISTP (or equivalent)", credits: 12 },
        { subDivision: "Free Electives", credits: 22 },
      ],
    },
  ];

  const branchWiseDisciplineCredits = [
    { branch: "BS CS", dc: 59, de: 23 },
    { branch: "BioE", dc: 42, de: 24 },
    { branch: "Civil", dc: 49, de: 17 },
    { branch: "CSE", dc: 38, de: 28 },
    { branch: "DSE", dc: 33, de: 33 },
    { branch: "EE", dc: 52, de: 20 },
    { branch: "EP", dc: 37, de: 29 },
    { branch: "GE", dc: 36, de: 30 },
    { branch: "MSE", dc: 45, de: 21 },
    { branch: "MnC", dc: 51, de: 15 },
    { branch: "ME", dc: 50, de: 16 },
    { branch: "ME VLSI", dc: 54, de: 12 },
  ].map((row) => ({ ...row, total: row.dc + row.de }));

  const courseCatalog = [
    {
      school: "School of Computing & Electrical Engineering (SCEE)",
      courses: [
        {
          code: "CSE101",
          name: "Programming Fundamentals",
          semester: "Odd",
          recommendedFor: "CSE, ECE, IT",
          minor: "Yes",
          credits: 4,
        },
        {
          code: "CSE220",
          name: "Data Structures & Algorithms",
          semester: "Even",
          recommendedFor: "CSE, ECE",
          minor: "Yes",
          credits: 4,
        },
        {
          code: "ECE305",
          name: "Digital Signal Processing",
          semester: "Odd",
          recommendedFor: "ECE, EEE",
          minor: "Yes",
          credits: 3,
        },
        {
          code: "CSE422",
          name: "Machine Learning Systems",
          semester: "Even",
          recommendedFor: "CSE, AI",
          minor: "No",
          credits: 3,
        },
        {
          code: "CSE530",
          name: "Advanced Algorithms for Research",
          semester: "Odd",
          recommendedFor: "CSE, ECE, AI",
          minor: "No",
          credits: 3,
        },
      ],
    },
    {
      school: "School of Mechanical and Materials Engineering (SMME)",
      courses: [
        {
          code: "ME201",
          name: "Thermodynamics",
          semester: "Odd",
          recommendedFor: "ME, AOE",
          minor: "No",
          credits: 4,
        },
        {
          code: "ME223",
          name: "Fluid Mechanics",
          semester: "Even",
          recommendedFor: "ME, CE",
          minor: "Yes",
          credits: 4,
        },
        {
          code: "MM302",
          name: "Materials Processing and Design",
          semester: "Odd",
          recommendedFor: "MME, ME",
          minor: "Yes",
          credits: 3,
        },
      ],
    },
    {
      school: "School of Civil and Environmental Engineering (SCENE)",
      courses: [
        {
          code: "CE101",
          name: "Structural Analysis",
          semester: "Odd",
          recommendedFor: "CE, AOE",
          minor: "Yes",
          credits: 4,
        },
        {
          code: "CE215",
          name: "Environmental Engineering",
          semester: "Even",
          recommendedFor: "CE, EE",
          minor: "Yes",
          credits: 3,
        },
        {
          code: "CE322",
          name: "Water Resources Management",
          semester: "Even",
          recommendedFor: "CE, ME",
          minor: "No",
          credits: 3,
        },
      ],
    },
    {
      school: "School of Biosciences and Bioengineering (SBB)",
      courses: [
        {
          code: "BB101",
          name: "Biology for Engineers",
          semester: "Odd",
          recommendedFor: "BS Biosciences, Bioengineering",
          minor: "Yes",
          credits: 4,
        },
        {
          code: "BB220",
          name: "Genomics and Biotechnology",
          semester: "Even",
          recommendedFor: "BS Biosciences, Bioengineering",
          minor: "No",
          credits: 3,
        },
        {
          code: "BB315",
          name: "Environmental Biosystems",
          semester: "Odd",
          recommendedFor: "SBB, CE",
          minor: "Yes",
          credits: 3,
        },
      ],
    },
    {
      school: "School of Chemical Sciences (SCS)",
      courses: [
        {
          code: "CH101",
          name: "Chemistry I",
          semester: "Odd",
          recommendedFor: "CSE, ME, CH",
          minor: "Yes",
          credits: 4,
        },
        {
          code: "CH205",
          name: "Process Engineering",
          semester: "Even",
          recommendedFor: "CH, ME",
          minor: "No",
          credits: 4,
        },
        {
          code: "CH312",
          name: "Catalysis and Reaction Engineering",
          semester: "Even",
          recommendedFor: "CH, SBB",
          minor: "No",
          credits: 3,
        },
      ],
    },
    {
      school: "School of Physical Sciences (SPS)",
      courses: [
        {
          code: "PH101",
          name: "Engineering Physics",
          semester: "Odd",
          recommendedFor: "CSE, ME, PH",
          minor: "Yes",
          credits: 4,
        },
        {
          code: "PH220",
          name: "Quantum Technologies",
          semester: "Even",
          recommendedFor: "PH, CSE",
          minor: "Yes",
          credits: 3,
        },
        {
          code: "PH330",
          name: "Materials Physics",
          semester: "Odd",
          recommendedFor: "SPS, MME",
          minor: "No",
          credits: 3,
        },
      ],
    },
    {
      school: "School of Mathematical and Statistical Sciences (SMSS)",
      courses: [
        {
          code: "MA101",
          name: "Mathematics for Engineering",
          semester: "Odd",
          recommendedFor: "All Branches",
          minor: "Yes",
          credits: 4,
        },
        {
          code: "DS220",
          name: "Probability and Statistics",
          semester: "Even",
          recommendedFor: "All Branches",
          minor: "Yes",
          credits: 3,
        },
        {
          code: "DS330",
          name: "Data Science Fundamentals",
          semester: "Even",
          recommendedFor: "CSE, ECE, AI",
          minor: "Yes",
          credits: 3,
        },
      ],
    },
    {
      school: "School of Humanities and Social Sciences (SHSS)",
      courses: [
        {
          code: "HS150",
          name: "Development Studies",
          semester: "Odd",
          recommendedFor: "All Branches",
          minor: "Yes",
          credits: 3,
        },
        {
          code: "HS210",
          name: "Public Policy and Governance",
          semester: "Even",
          recommendedFor: "All Branches",
          minor: "Yes",
          credits: 3,
        },
      ],
    },
    {
      school: "School of Management (SoM)",
      courses: [
        {
          code: "BM101",
          name: "Principles of Management",
          semester: "Odd",
          recommendedFor: "All Branches",
          minor: "No",
          credits: 3,
        },
        {
          code: "BM220",
          name: "Business Analytics",
          semester: "Even",
          recommendedFor: "All Branches",
          minor: "Yes",
          credits: 3,
        },
      ],
    },
  ];

  const filteredCatalog = useMemo(
    () =>
      courseCatalog.map((schoolItem) => ({
        ...schoolItem,
        courses: schoolItem.courses,
      })),
    [],
  );

  return (
    <div className="courses-container">
      <div className="courses-header">
        <h1>Academic Programs</h1>
        <p>Branch-wise degree requirements and course offerings</p>
      </div>

      {/* Academic Programs / Requirements */}
      <div className="programs-requirements">
        <h2>B.Tech Degree</h2>
        <p className="requirements-intro">
          Credit distribution across institute core, discipline, and electives.
          Discipline credits (DC/DE) vary by branch.
        </p>

        <div className="requirements-grid">
          <div className="requirements-card">
            <h3>Overall Credit Structure (Total: 160)</h3>
            <div className="requirements-table-wrap">
              <table className="requirements-table">
                <thead>
                  <tr>
                    <th>Division</th>
                    <th>Sub-Division</th>
                    <th className="credits-col">Credits</th>
                  </tr>
                </thead>
                <tbody>
                  {btechStructure.map((block) =>
                    block.items.map((item, idx) => (
                      <tr key={`${block.division}-${item.subDivision}`}>
                        {idx === 0 ? (
                          <td rowSpan={block.items.length}>
                            <strong>{block.division}</strong>
                          </td>
                        ) : null}
                        <td>{item.subDivision}</td>
                        <td className="credits-col">
                          {item.credits ?? block.credits ?? "—"}
                        </td>
                      </tr>
                    )),
                  )}
                  <tr>
                    <td colSpan={2}>
                      <strong>Total</strong>
                    </td>
                    <td className="credits-col">
                      <strong>160</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="requirements-card">
            <h3>Branch-wise Discipline Credits</h3>
            <div className="requirements-table-wrap">
              <table className="requirements-table">
                <thead>
                  <tr>
                    <th>Branch</th>
                    <th className="credits-col">DC</th>
                    <th className="credits-col">DE</th>
                    <th className="credits-col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {branchWiseDisciplineCredits.map((row) => (
                    <tr key={row.branch}>
                      <td>
                        <strong>{row.branch}</strong>
                      </td>
                      <td className="credits-col">{row.dc}</td>
                      <td className="credits-col">{row.de}</td>
                      <td className="credits-col">
                        <strong>{row.total}</strong>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="requirements-footnote">
              Note: Most branches have Discipline Total = 66, except BS CS (82)
              and EE (72), as per the provided data.
            </p>
          </div>
        </div>
      </div>

      {/* Course Catalog Section */}
      <div className="course-catalog">
        <h2>Course Catalog</h2>
        <p className="catalog-intro">
          The institute offers a broad selection of courses grouped by school.
          Each listing includes the semester, recommended branches, and minor
          eligibility.
        </p>
        {filteredCatalog.length === 0 ? (
          <div className="no-results">
            <p>No courses available at the moment.</p>
          </div>
        ) : (
          filteredCatalog.map((schoolItem, idx) => (
            <details key={idx} className="school-panel" open={idx === 0}>
              <summary>{schoolItem.school}</summary>
              <div className="course-list">
                {schoolItem.courses.map((course, courseIdx) => (
                  <div key={courseIdx} className="course-card">
                    <div className="course-card-title">
                      <span className="course-code">{course.code}</span>
                      <h4>{course.name}</h4>
                    </div>
                    <div className="course-tags">
                      <span className="course-tag">{course.semester}</span>
                      <span className="course-tag">
                        {course.minor === "Yes"
                          ? "Minor eligible"
                          : "Not minor eligible"}
                      </span>
                      <span className="course-tag">
                        {course.credits} credits
                      </span>
                    </div>
                    <div className="course-meta">
                      <span className="meta-label">Recommended for:</span>
                      <span>{course.recommendedFor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </details>
          ))
        )}
      </div>

      <footer className="footer">
        <p>&copy; 2024 Academic Council, IIT Mandi. All rights reserved.</p>
      </footer>
    </div>
  );
}
