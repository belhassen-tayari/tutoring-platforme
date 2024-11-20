import { Component } from "react";
import SubjectCard from "../components/SubjectCard";

export default class Subjects extends Component {
  render() {
    return (
      <div className="flex-col  h-[550px] gap-5 bg-[#E7E9EB]">
        <div className="px-[240px] py-[90px]">
          <div>
            <div className="flex gap-3 text-3xl font-semibold">
              <h1>Most </h1>{" "}
              <h1 className="text-[#3461FD]"> Popular Subjects</h1>
            </div>
            <p className="text-sm text-gray-500 pt-1">
              Various versions have evolved over the years, sometimes by
              accident,
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-12">
            <SubjectCard></SubjectCard>
            <SubjectCard></SubjectCard>
            <SubjectCard></SubjectCard>
            <SubjectCard></SubjectCard>
            <SubjectCard></SubjectCard>
            <SubjectCard></SubjectCard>
            <SubjectCard></SubjectCard>
            <SubjectCard></SubjectCard>
            <SubjectCard></SubjectCard>
            <SubjectCard></SubjectCard>
            <SubjectCard></SubjectCard>
            <SubjectCard></SubjectCard>
          </div>
        </div>
      </div>
    );
  }
}
