"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";

interface CourseEnrollButtonProps {
  courseId: string;
}

export const CourseEnrollButton = ({
  courseId,
}: CourseEnrollButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      const response = await axios.post(`/api/courses/${courseId}/enroll`);

      if (response.status === 200) {
        toast.success("Успешно зачислен на курс!");
        window.location.reload();
      } else {
        toast.error("Что-то пошло не так");
      }
    } catch (error) {
      toast.error("Что-то пошло не так");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={onClick}
      disabled={isLoading}
      size="sm"
      className="w-full md:w-auto"
    >
      Записаться на курс
    </Button>
  );
};
