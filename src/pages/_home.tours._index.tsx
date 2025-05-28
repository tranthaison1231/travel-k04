import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/shared/ui/atoms/Card";
import { Button } from "~/shared/ui/atoms/Button";
import { Input } from "~/shared/ui/atoms/Input";
import { Checkbox } from "~/shared/ui/molecules/Checkbox";
import Dalat from "~/assets/images/dalat.png";
import Danang from "~/assets/images/danang.png";
import Hoian from "~/assets/images/hoian.png";
import Banner from "~/assets/images/banner.png";

const tours = [
  {
    id: 1,
    title: "Tour Đà Lạt 3N2Đ",
    price: "3,500,000 VND",
    image: Dalat,
    location: "Đà Lạt",
    duration: "3 Ngày 2 Đêm",
    departure: "Hồ Chí Minh",
    transport: "Xe du lịch",
    description: "Khám phá Đà Lạt mộng mơ với những cảnh đẹp thơ mộng và khí hậu trong lành."
  },
  {
    id: 2,
    title: "Tour Phú Quốc 4N3Đ",
    price: "6,000,000 VND",
    image: Danang,
    location: "Đà Nẵng",
    duration: "4 Ngày 3 Đêm",
    departure: "Hà Nội",
    transport: "Máy bay + xe du lịch",
    description: "Trải nghiệm biển xanh, cát trắng và những món ăn hải sản tuyệt vời tại Đà Nẵng."
  },
  {
    id: 3,
    title: "Tour Đà Nẵng - Hội An 3N2Đ",
    price: "4,500,000 VND",
    image: Hoian,
    location: "Đà Nẵng - Hội An",
    duration: "3 Ngày 2 Đêm",
    departure: "Hồ Chí Minh",
    transport: "Máy bay + xe du lịch",
    description: "Thăm quan những địa điểm nổi tiếng và tận hưởng không gian cổ kính của Hội An."
  }
];

const banners = [
  Dalat,
  Hoian,
  Danang,
];

const TourPage = () => {
  const [currentBanner] = useState(0);

  return (
    <div className="container mx-auto p-4 flex flex-col">
      {/* Banner Slider */}
      <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
        <img
          src={Banner}
          alt="Banner Du Lịch"
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
          Khám phá những chuyến đi tuyệt vời
        </div>
      </div>


      <div className="flex">
        {/* Sidebar */}
        <aside className="w-1/4 p-4 bg-gray-200 rounded-lg">
          <div className="mb-2">
            <label className="flex items-center">
              <Checkbox />
              <span className="ml-2">Tour Nội Địa</span>
            </label>
          </div>
          <Button className="mt-4 w-full ">Áp dụng</Button>
        </aside>

        {/* Tour List */}
        <div className="w-3/4 pl-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {tours.map((tour) => (
            <Card key={tour.id} className="shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
              <img src={tour.image} alt={tour.title} className="w-full h-52 object-cover" />
              <CardHeader>
                <CardTitle className="text-lg font-bold">{tour.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-gray-600">📍 {tour.location}</p>
                <p className="text-sm text-gray-600">🕒 {tour.duration}</p>
                <p className="text-sm text-gray-600">🚍 {tour.transport}</p>
                <p className="text-sm text-gray-600">📌 Khởi hành từ: {tour.departure}</p>
              </CardContent>
              <div className="p-4 flex flex-col items-center">
                <p className="text-lg font-bold text-red-500">{tour.price}</p>
                <Button className="mt-2 w-full">Đặt Tour</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      {/* Search Bar */}
      <div className="flex bg-[#203B64] p-4 rounded-lg w-full justify-between mt-6">
        <p className="text-white text-4xl font-semibold mr-4">Đăng ký ngay để nhận tin tức</p>
        <div className="flex gap-4 ">
          <Input placeholder="Email..." className="flex-grow p-2 rounded-l-md bg-white " />
          <Button className="bg-white text-[#203B64]">Đăng ký</Button>
        </div>
      </div>
    </div>
  );
};

export default TourPage;
