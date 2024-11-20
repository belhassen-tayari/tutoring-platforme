interface CourseCardProps {
  title: string;
  type: string;
  watched: number;
  total: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  type,
  watched,
  total,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-sm text-gray-500 mb-2">{type}</p>
      <p className="text-sm text-purple-600">
        {watched}/{total} Watched
      </p>
    </div>
  );
};

export default CourseCard;
