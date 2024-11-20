import { Component } from "react";
import coma from "../../../assets/icons/coma.svg";

interface FeedbackCardProps {
  image: string;
  title: string;
  subtitle: string;
  comment: string;
}

export default class FeedbackCard extends Component<FeedbackCardProps> {
  render() {
    const { image, title, subtitle, comment } = this.props;

    return (
      <div className="w-[330px] rounded-lg overflow-hidden shadow-lg px-6 py-12 bg-white">
        <div className="flex justify-between">
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src={image}
              alt="Avatar"
            />
            <div className="text-base">
              <p className="text-gray-900 font-bold">{title}</p>
              <p className="text-gray-600 ">{subtitle}</p>
            </div>
          </div>

          <img className="w-6" src={coma} />
        </div>
        <div className="mt-4">
          <p className="text-gray-700 text-sm">{comment}</p>
        </div>
      </div>
    );
  }
}
