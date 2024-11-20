import { Input } from "@/components/ui/input";
import { Component } from "react";
import photo from "../../../assets/images/profile.jpg";
import Header from "../components/Header";
import CourseCard from "../components/CourseCard";
import Profile from "../components/Profile";
import MentorList from "../components/MentorList";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100">
          <Header />

          {/* Dashboard Content */}
          <div className="grid grid-cols-12 gap-4 mt-6">
            {/* Main Section */}
            <div className="col-span-8">
              {/* Banner */}
              <div className="bg-purple-200 p-6 rounded-lg mb-6">
                <h2 className="text-xl font-bold">
                  Sharpen Your Skills With Professional Online Courses
                </h2>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-md mt-4">
                  Join Now
                </button>
              </div>

              {/* Course Cards */}
              <div className="grid grid-cols-2 gap-4">
                <CourseCard
                  title="Frontend Development"
                  type="Front-end"
                  watched={8}
                  total={15}
                />
                <CourseCard
                  title="Backend Development"
                  type="Back-end"
                  watched={3}
                  total={14}
                />
              </div>
            </div>

            {/* Profile & Mentors */}
            <div className="col-span-4">
              <Profile />
              <MentorList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
