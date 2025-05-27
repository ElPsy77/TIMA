"use client";

import axios from "axios";
import { Trash } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/modals/confirm-modal";

interface QuizActionsProps {
  disabled: boolean;
  courseId: string;
  chapterId: string;
  quizId: string;
  isPublished: boolean;
}

export const QuizActions = ({
  disabled,
  courseId,
  chapterId,
  quizId,
  isPublished,
}: QuizActionsProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      if (isPublished) {
        await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}/quizzes/${quizId}/unpublish`);
        toast.success("Quiz не опубликован");
      } else {
        await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}/quizzes/${quizId}/publish`);
        toast.success("Quiz опубликован");
      }

      router.refresh();
    } catch {
      toast.error("Что-то пошло не так");
    } finally {
      setIsLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);

      await axios.delete(`/api/courses/${courseId}/chapters/${chapterId}/quizzes/${quizId}`);

      toast.success("Quiz удалён");
      router.refresh();
      router.push(`/teacher/courses/${courseId}/chapters/${chapterId}`);
      router.refresh();
    } catch {
      toast.error("Что-то пошло не так");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <Button onClick={onClick} disabled={disabled || isLoading} variant="outline" size="sm">
        {isPublished ? "Отменить публикацию" : "Опубликовать"}
      </Button>
      <ConfirmModal onConfirm={onDelete}>
        <Button size="sm" disabled={isLoading}>
          <Trash className="h-4 w-4" />
        </Button>
      </ConfirmModal>
    </div>
  );
};
