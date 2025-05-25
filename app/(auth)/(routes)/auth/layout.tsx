"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"

const reviews = [
  {
    text: 'Платформа очень удобная, всё понятно с первого раза. Прошёл курс по технике безопасности быстро и без проблем.',
    imageUrl: '/image.png',
    name: 'Иван Петров',
    job: 'Преподаватель физики',
  },
  {
    text: 'Материалы изложены чётко и доступно. Понравился формат обучения и наличие тестов после каждого раздела.',
    imageUrl: '/image.png',
    name: 'Анна Смирнова',
    job: 'Преподаватель математики',
  },
  {
    text: 'Интерфейс интуитивный, обучение не заняло много времени. Получил сертификат сразу после прохождения курса.',
    imageUrl: '/image.png',
    name: 'Олег Кузнецов',
    job: 'Преподаватель информатики',
  }
];

const AuthLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <div className="flex h-screen">
      <div className="m-auto bg-slate-50 rounded-md  flex lg:w-[70vw] lg:h-[90vh] md:w-[80vw] md:h-[80vh]">
        <div className="hidden md:flex w-2/5 rounded-tl-md rounded-bl-md bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-custom-primary to-purple-100 flex-col justify-between">
          {/* Content for left div */}
          <div className="m-10 mt-15">
            <h1 className="md:text-2xl lg:text-4xl font-bold text-left text-white">Безопасность — основа успешного обучения</h1>
            <p className="md:text-sm text-md font-light text-left text-white mt-8">
            Обеспечьте спокойную и защищённую образовательную среду, освоив ключевые правила техники безопасности. Наши рекомендации для преподавателей помогут действовать уверенно, предотвращать риски и сосредоточиться на главном — обучении и развитии учеников.
            </p>
          </div>

          <div className="flex justify-center ml-10">
            {/* Empty div to push the carousel to the bottom */}
          </div>
          <div className="flex justify-center mb-8">
            <Carousel
              plugins={[plugin.current]}
              className="w-full lg:block lg:w-[22vw] lg:h-[22vh] md:hidden"
            >
              <CarouselContent>
                {reviews.map((review, index) => (
                  <CarouselItem key={index}>
                    <div className="">
                      <Card>
                        <CardContent className="flex flex-col w-full h-[150px] p-6 items-start rounded-lg justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#B1A0FD] to-[#8D79F6]">
                          {/* <span className="text-4xl font-semibold">{}</span> */}

                          <div className="text-white font-normal text-xs">
                            <p>{review.text}</p>
                          </div>
                          {/* Dynamic image and name */}
                          <div className="flex items-start mt-5">
                            <Image 
                              src={review.imageUrl} 
                              alt={review.name} 
                              width={40} 
                              height={40} 
                              className="w-10 h-10 rounded-full mr-3" 
                            />
                            <div>
                              <span className="text-white text-sm block">{review.name}</span>
                              <span className="text-white text-xs block">{review.job}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

        </div>
        <div className="md:hidden w-[80vw]">
          <div className="text-center">
            {children}
          </div>
        </div>

        {/* Render only on large screens */}
        <div className="hidden md:flex w-3/5 rounded-tr-md rounded-br-md items-center justify-center">
          <div className="text-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
