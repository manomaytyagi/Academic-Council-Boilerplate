import "../styles/home.css";
import { useEffect, useMemo, useState } from "react";

export default function HomePage() {
  const [selectedBranch, setSelectedBranch] = useState(null);

  const btechOverallTotalCredits = 160;

  const btechCreditStructure = [
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
        { subDivision: "Discipline Core", creditsKey: "dc" },
        { subDivision: "Discipline Electives", creditsKey: "de" },
      ],
    },
    {
      division: "Electives",
      items: [
        { subDivision: "MTP + ISTP (or equivalent)", credits: 12 },
        { subDivision: "Free Electives", credits: 22 },
      ],
    },
  ];

  const branches = useMemo(
    () => [
      {
        id: "bs-cs",
        name: "BS Computer Science (BS CS)",
        school: "School of Computing & Electrical Engineering",
        totalCredits: btechOverallTotalCredits,
        dc: 59,
        de: 23,
        curriculumPdf: "/curriculum/bs-cs.pdf",
      },
      {
        id: "cse",
        name: "Computer Science & Engineering",
        school: "School of Computing & Electrical Engineering",
        totalCredits: btechOverallTotalCredits,
        dc: 38,
        de: 28,
        curriculumPdf: "/curriculum/cse.pdf",
      },
      {
        id: "dse",
        name: "Data Science & Engineering",
        school: "School of Computing & Electrical Engineering",
        totalCredits: btechOverallTotalCredits,
        dc: 33,
        de: 33,
        curriculumPdf: "/curriculum/dse.pdf",
      },
      {
        id: "ee",
        name: "Electrical Engineering",
        school: "School of Computing & Electrical Engineering",
        totalCredits: btechOverallTotalCredits,
        dc: 52,
        de: 20,
        curriculumPdf: "/curriculum/ee.pdf",
      },
      {
        id: "me",
        name: "Mechanical Engineering",
        school: "School of Mechanical & Materials Engineering",
        totalCredits: btechOverallTotalCredits,
        dc: 50,
        de: 16,
        curriculumPdf: "/curriculum/me.pdf",
      },
      {
        id: "me-vlsi",
        name: "Mechanical Engineering (VLSI)",
        school: "School of Mechanical & Materials Engineering",
        totalCredits: btechOverallTotalCredits,
        dc: 54,
        de: 12,
        curriculumPdf: "/curriculum/me-vlsi.pdf",
      },
      {
        id: "ce",
        name: "Civil Engineering",
        school: "School of Civil & Environmental Engineering",
        totalCredits: btechOverallTotalCredits,
        dc: 49,
        de: 17,
        curriculumPdf: "/curriculum/ce.pdf",
      },
      {
        id: "ep",
        name: "Engineering Physics",
        school: "School of Basic Sciences",
        totalCredits: btechOverallTotalCredits,
        dc: 37,
        de: 29,
        curriculumPdf: "/curriculum/ep.pdf",
      },
      {
        id: "mse",
        name: "Materials Science & Engineering",
        school: "School of Mechanical & Materials Engineering",
        totalCredits: btechOverallTotalCredits,
        dc: 45,
        de: 21,
        curriculumPdf: "/curriculum/mse.pdf",
      },
      {
        id: "be",
        name: "Bioengineering",
        school: "School of Biosciences & Bioengineering",
        totalCredits: btechOverallTotalCredits,
        dc: 42,
        de: 24,
        curriculumPdf: "/curriculum/be.pdf",
      },
      {
        id: "mnc",
        name: "Mathematics & Computing (MnC)",
        school: "School of Computing & Electrical Engineering",
        totalCredits: btechOverallTotalCredits,
        dc: 51,
        de: 15,
        curriculumPdf: "/curriculum/mnc.pdf",
      },
      {
        id: "ge",
        name: "General Engineering (Undeclared)",
        school: "Common First-Year Curriculum",
        totalCredits: btechOverallTotalCredits,
        dc: 36,
        de: 30,
        curriculumPdf: "/curriculum/ge.pdf",
      },
    ],
    [btechOverallTotalCredits]
  );

  const academicStats = [
    { label: "Total Students", value: "3,500+" },
    { label: "Faculty Members", value: "250+" },
    { label: "AnnualResearch Publications", value: "500+" },
    { label: "Departments", value: "8" },
  ];

  const gradingSystem = [
    { grade: "O", points: "10", description: "Outstanding (90-100%)" },
    { grade: "A+", points: "9", description: "Excellent (80-89%)" },
    { grade: "A", points: "8", description: "Very Good (70-79%)" },
    { grade: "B", points: "7", description: "Good (60-69%)" },
    { grade: "C", points: "6", description: "Average (50-59%)" },
    { grade: "F", points: "0", description: "Fail (Below 50%)" },
  ];

  useEffect(() => {
    if (!selectedBranch) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelectedBranch(null);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selectedBranch]);

  const disciplineTotalCredits = selectedBranch
    ? selectedBranch.dc + selectedBranch.de
    : 0;

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Indian Institute of Technology Mandi</h1>
          <p className="hero-subtitle">Academic Council</p>
          <p className="hero-description">
            Committed to fostering excellence in engineering education,
            research, and innovation. We guide every student through their
            academic journey with world-class facilities and dedicated support.
          </p>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="quick-stats">
        <div className="stats-grid">
          {academicStats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Credit Requirements Section */}
      <section className="credit-requirements">
        <h2>Credit Requirements by Branch</h2>
        <p className="section-intro">
          Select your branch to view the credit requirement breakdown and open
          the official curriculum PDF.
        </p>

        <div className="branch-grid" role="list">
          {branches.map((branch) => (
            <button
              key={branch.id}
              type="button"
              className="branch-card"
              role="listitem"
              onClick={() => setSelectedBranch(branch)}
            >
              <div className="branch-name">{branch.name}</div>
              <div className="branch-school">{branch.school}</div>
              <div className="branch-meta">
                <span className="branch-badge">{branch.totalCredits} Credits</span>
                <span className="branch-badge branch-badge-secondary">
                  View breakdown
                </span>
              </div>
            </button>
          ))}
        </div>

      </section>

      {/* Branch Modal */}
      {selectedBranch && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Branch credit requirements"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setSelectedBranch(null);
          }}
        >
          <div className="modal">
            <div className="modal-header">
              <div>
                <h3 className="modal-title">{selectedBranch.name}</h3>
                <p className="modal-subtitle">{selectedBranch.school}</p>
              </div>
              <button
                type="button"
                className="modal-close"
                onClick={() => setSelectedBranch(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-stats">
                <div className="modal-stat">
                  <div className="modal-stat-label">Total Credits</div>
                  <div className="modal-stat-value">
                    {selectedBranch.totalCredits}
                  </div>
                </div>
                <div className="modal-stat">
                  <div className="modal-stat-label">Discipline Total</div>
                  <div className="modal-stat-value">
                    {disciplineTotalCredits}
                  </div>
                </div>
              </div>

              <div className="modal-table-wrap">
                <table className="modal-table">
                  <thead>
                    <tr>
                      <th>Division</th>
                      <th>Sub-Division</th>
                      <th className="modal-table-credits">Credits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {btechCreditStructure.flatMap((block) =>
                      block.items.map((item, idx) => {
                        const credits =
                          item.creditsKey === "dc"
                            ? selectedBranch.dc
                            : item.creditsKey === "de"
                              ? selectedBranch.de
                              : item.credits ?? "—";

                        return (
                          <tr
                            key={`${block.division}-${item.subDivision}`}
                          >
                            {idx === 0 ? (
                              <td rowSpan={block.items.length}>
                                <strong>{block.division}</strong>
                              </td>
                            ) : null}
                            <td>{item.subDivision}</td>
                            <td className="modal-table-credits">{credits}</td>
                          </tr>
                        );
                      }),
                    )}
                    <tr>
                      <td colSpan={2}>
                        <strong>Total</strong>
                      </td>
                      <td className="modal-table-credits">
                        <strong>{btechOverallTotalCredits}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="modal-mini-table">
                <div className="modal-mini-title">Discipline (DC/DE)</div>
                <div className="modal-mini-row">
                  <div className="modal-mini-cell">
                    <div className="modal-mini-label">DC</div>
                    <div className="modal-mini-value">{selectedBranch.dc}</div>
                  </div>
                  <div className="modal-mini-cell">
                    <div className="modal-mini-label">DE</div>
                    <div className="modal-mini-value">{selectedBranch.de}</div>
                  </div>
                  <div className="modal-mini-cell">
                    <div className="modal-mini-label">Total</div>
                    <div className="modal-mini-value">
                      {disciplineTotalCredits}
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-actions">
                <a
                  className="modal-primary"
                  href={selectedBranch.curriculumPdf}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open curriculum PDF
                </a>
                <button
                  type="button"
                  className="modal-secondary"
                  onClick={() => setSelectedBranch(null)}
                >
                  Close
                </button>
              </div>

              <div className="modal-footnote">
                Tip: press <kbd>Esc</kbd> to close.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grading System Section */}
      <section className="grading-system">
        <h2>Grading System</h2>
        <p className="section-intro">
          IIT Mandi follows a 10-point grading scale to evaluate student
          performance fairly and comprehensively.
        </p>
        <div className="grading-grid">
          {gradingSystem.map((grade, idx) => (
            <div key={idx} className="grade-card">
              <div className="grade-letter">{grade.grade}</div>
              <div className="grade-points">{grade.points} points</div>
              <div className="grade-description">{grade.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Structure Section */}
      <section className="academic-structure">
        <h2>Academic Calendar Structure</h2>
        <div className="structure-content">
          <div className="structure-item">
            <h3>Semesters</h3>
            <p>
              Two semesters per academic year (Odd and Even). Each semester
              spans 15 weeks of instruction plus evaluation period.
            </p>
          </div>
          <div className="structure-item">
            <h3>Assessment</h3>
            <p>
              Continuous evaluation through assignments, quizzes, and
              mid-semester exams. Final evaluation via end-semester
              examinations.
            </p>
          </div>
          <div className="structure-item">
            <h3>Degree Requirements</h3>
            <p>
              Students must maintain minimum CGPA, complete all required
              courses, and fulfill departmental requirements for degree.
            </p>
          </div>
          <div className="structure-item">
            <h3>Honors & Distinctions</h3>
            <p>
              Students achieving CGPA ≥ 8.0 graduate with Honors. Merit
              scholarships available for consistent high performers.
            </p>
          </div>
        </div>
      </section>

      {/* Key Academic Policies Section */}
      <section className="key-policies">
        <h2>Key Academic Policies</h2>
        <div className="policies-grid">
          <div className="policy-card">
            <h3>Minimum CGPA</h3>
            <p>
              Students must maintain a minimum cumulative GPA of 5.0 throughout
              their program to remain in good academic standing.
            </p>
          </div>
          <div className="policy-card">
            <h3>Course Load</h3>
            <p>
              Standard course load is 20-25 credits per semester. Overloading
              requires prior approval from the academic advisor.
            </p>
          </div>
          <div className="policy-card">
            <h3>Academic Probation</h3>
            <p>
              Students with CGPA below 5.0 in any semester are placed on
              academic probation and must improve performance next semester.
            </p>
          </div>
          <div className="policy-card">
            <h3>Attendance</h3>
            <p>
              Minimum 80% attendance is mandatory for all courses. Students
              below this threshold may be marked absent for the course.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Need Help?</h2>
        <p>
          Reach out to the Academic Affairs Office for course guidance, degree
          requirements, or academic policy clarifications.
        </p>
        <p className="contact-details">
          Email: academic.council@iitmandi.ac.in | Phone: +91 1905 123456
        </p>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Academic Council, IIT Mandi. All rights reserved.</p>
      </footer>
    </div>
  );
}
