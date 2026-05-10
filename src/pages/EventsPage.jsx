import "../styles/events.css";

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Orientation Week 2024",
      date: "July 15 - July 22, 2024",
      description:
        "Welcome program for new students introducing them to campus life, academic policies, and opportunities.",
      location: "Main Campus",
      category: "Orientation",
    },
    {
      id: 2,
      title: "Semester Registration",
      date: "August 1 - August 10, 2024",
      description:
        "Course registration for the upcoming semester. Register your courses through the portal.",
      location: "Online Portal",
      category: "Academic",
    },
    {
      id: 3,
      title: "Research Symposium",
      date: "September 5, 2024",
      description:
        "Annual platform for students and faculty to showcase their research work and innovations.",
      location: "Auditorium Hall",
      category: "Research",
    },
    {
      id: 4,
      title: "Guest Lecture Series",
      date: "Every Friday, 4:00 PM",
      description:
        "Lectures by industry experts and renowned academicians on emerging technologies and trends.",
      location: "Seminar Hall",
      category: "Seminar",
    },
    {
      id: 5,
      title: "Mid-Semester Exams",
      date: "September 20 - October 5, 2024",
      description:
        "Assessment of student performance in the first half of the semester.",
      location: "Examination Halls",
      category: "Academic",
    },
    {
      id: 6,
      title: "Career Development Workshop",
      date: "October 15, 2024",
      description:
        "Workshop on resume writing, interview preparation, and professional communication skills.",
      location: "Training Center",
      category: "Workshop",
    },
  ];

  return (
    <div className="events-container">
      <div className="events-header">
        <h1>Upcoming Events</h1>
        <p>Stay updated with all academic events and important dates</p>
      </div>

      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-category">{event.category}</div>
            <h3 className="event-title">{event.title}</h3>
            <div className="event-date">
              <span className="date-icon">📅</span>
              {event.date}
            </div>
            <div className="event-location">
              <span className="location-icon">📍</span>
              {event.location}
            </div>
            <p className="event-description">{event.description}</p>
            <button className="event-btn">Learn More</button>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>&copy; 2024 Academic Council, IIT Mandi. All rights reserved.</p>
      </footer>
    </div>
  );
}
