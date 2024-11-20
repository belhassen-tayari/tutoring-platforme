const MentorList: React.FC = () => {
  const mentors = [
    { name: "Kiliam Rosevilt", role: "Software Developer" },
    { name: "Teodor Maksevich", role: "Product Owner" },
    { name: "Andrew Kooller", role: "Frontend Developer" },
  ];

  return (
    <div className="bg-white p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Your Mentor</h3>
      <ul>
        {mentors.map((mentor, index) => (
          <li key={index} className="flex justify-between items-center mb-4">
            <div>
              <h4 className="font-semibold">{mentor.name}</h4>
              <p className="text-sm text-gray-500">{mentor.role}</p>
            </div>
            <button className="bg-purple-600 text-white px-4 py-1 rounded-md">
              Follow
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorList;
