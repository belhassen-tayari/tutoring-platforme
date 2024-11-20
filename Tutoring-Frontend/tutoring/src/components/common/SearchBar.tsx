import { Component } from "react";
import search from "../../assets/icons/search.png";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="relative w-full">
        <input
          className="w-full h-[48px] pl-4 pr-16 text-sm rounded-full bg-white text-gray-700 focus:outline-none"
          type="text"
          placeholder="What do you want to learn?"
        />
        <button className="absolute right-0 top-0 h-full w-12 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-yellow-400">
          <img src={search} className="w-[35%]" alt="" />
        </button>
      </div>
    );
  }
}
