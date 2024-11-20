const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center bg-white p-4">
      <input
        type="text"
        className="border rounded-md w-full max-w-lg p-2"
        placeholder="Search your course..."
      />
    </header>
  );
};

export default Header;
