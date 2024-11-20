import { Component } from "react";

type StatsCardProps = {
  title: string;
  subTitle: string;
  image: string;
  fromColor: string;
  toColor: string;
};

export default class StatsCard extends Component<StatsCardProps> {
  render() {
    const { title, image, fromColor, toColor, subTitle } = this.props;

    return (
      <div className="flex w-52">
        <div
          className={`flex p-4 m-3 rounded-full shadow-lg bg-gradient-to-r ${fromColor} ${toColor}`}
        >
          <img src={image} alt={title} className="h-6 w-6 object-contain" />
        </div>
        <div className="content-center">
          <div className=" text-xl font-semibold">{title}</div>
          <div className=" text-sm text-[#52565C]">{subTitle}</div>
        </div>
      </div>
    );
  }
}
