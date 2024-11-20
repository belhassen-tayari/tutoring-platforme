import { Component } from "react";

interface MediaBubbleProps {
  imageUrl: string;
}

export default class MediaBubble extends Component<MediaBubbleProps> {
  render() {
    const { imageUrl } = this.props;

    return (
      <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
        <img src={imageUrl} alt="Social Media Icon" />
      </div>
    );
  }
}
