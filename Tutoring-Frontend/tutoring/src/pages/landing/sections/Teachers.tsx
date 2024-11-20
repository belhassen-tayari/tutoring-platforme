import { Component } from "react";
import TeacherCard from "../components/TeacherCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default class Teacher extends Component {
  render() {
    return (
      <div className="flex-col mx-[240px] my-[90px] h-[450px] gap-5 ">
        <div>
          <div className="flex gap-3 text-3xl font-semibold">
            <h1>Most </h1> <h1 className="text-[#3461FD]"> Popular Teachers</h1>
          </div>
          <p className="text-sm text-gray-500 pt-1">
            Various versions have evolved over the years, sometimes by accident,
          </p>
        </div>

        <Carousel className=" mt-7">
          <CarouselContent>
            <CarouselItem className="basis-1/4">
              <TeacherCard></TeacherCard>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <TeacherCard></TeacherCard>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <TeacherCard></TeacherCard>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <TeacherCard></TeacherCard>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <TeacherCard></TeacherCard>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <TeacherCard></TeacherCard>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <TeacherCard></TeacherCard>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <TeacherCard></TeacherCard>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <TeacherCard></TeacherCard>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <TeacherCard></TeacherCard>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    );
  }
}
