import { Component } from "react";
import image from "../../../assets/images/profile.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FeedbackCard from "../components/FeedbackCard";

export default class Feedback extends Component {
  render() {
    return (
      <div className="flex-col  h-[550px] gap-5">
        <div className="px-[240px] py-[90px]">
          <div>
            <div className="flex gap-3 text-3xl font-semibold">
              <h1>Student </h1> <h1 className="text-[#3461FD]"> Feedback</h1>
            </div>
            <p className="text-sm text-gray-500 pt-1">
              Various versions have evolved over the years, sometimes by
              accident,
            </p>
          </div>
          <div>
            <Carousel className=" py-2 px-4 mt-7">
              <CarouselContent>
                <CarouselItem className="basis-1/3">
                  <FeedbackCard
                    image={image}
                    title="Guy Hawkins"
                    subtitle="UI-UX Designer"
                    comment="Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis."
                  ></FeedbackCard>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <FeedbackCard
                    image={image}
                    title="Guy Hawkins"
                    subtitle="UI-UX Designer"
                    comment="Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis."
                  ></FeedbackCard>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <FeedbackCard
                    image={image}
                    title="Guy Hawkins"
                    subtitle="UI-UX Designer"
                    comment="Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis."
                  ></FeedbackCard>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <FeedbackCard
                    image={image}
                    title="Guy Hawkins"
                    subtitle="UI-UX Designer"
                    comment="Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis."
                  ></FeedbackCard>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <FeedbackCard
                    image={image}
                    title="Guy Hawkins"
                    subtitle="UI-UX Designer"
                    comment="Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis."
                  ></FeedbackCard>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <FeedbackCard
                    image={image}
                    title="Guy Hawkins"
                    subtitle="UI-UX Designer"
                    comment="Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis."
                  ></FeedbackCard>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <FeedbackCard
                    image={image}
                    title="Guy Hawkins"
                    subtitle="UI-UX Designer"
                    comment="Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis."
                  ></FeedbackCard>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <FeedbackCard
                    image={image}
                    title="Guy Hawkins"
                    subtitle="UI-UX Designer"
                    comment="Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis."
                  ></FeedbackCard>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <FeedbackCard
                    image={image}
                    title="Guy Hawkins"
                    subtitle="UI-UX Designer"
                    comment="Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis."
                  ></FeedbackCard>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <FeedbackCard
                    image={image}
                    title="Guy Hawkins"
                    subtitle="UI-UX Designer"
                    comment="Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis."
                  ></FeedbackCard>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}
