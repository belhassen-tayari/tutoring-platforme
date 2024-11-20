const Profile: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex items-center mb-4">
        <img
          src="path-to-avatar"
          alt="User"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">Good Morning, Alex</h3>
          <p className="text-gray-500">
            Continue Your Journey And Achieve Your Target
          </p>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        {/* Example stats */}
        <p className="font-bold">9/10 Watched</p>
        <div className="bg-purple-600 h-2 rounded-full w-9/10"></div>
      </div>
    </div>
  );
};

export default Profile;
