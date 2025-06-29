import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Eye, LayoutDashboard, PlusCircle, Video } from "lucide-react";

import { db } from "@/lib/db";
import { IconBadge } from "@/components/icon-badge";
import { Banner } from "@/components/banner";

import { ChapterTitleForm } from "./_components/chapter-title-form";
import { ChapterDescriptionForm } from "./_components/chapter-description-form";
import { ChapterVideoForm } from "./_components/chapter-video-form";
import { ChapterQuizForm } from "./_components/chapter-quiz-form";
import { ChapterActions } from "./_components/chapter-actions";
import { currentUser } from "@/lib/auth";

const ChapterIdPage = async ({
  params
}: {
  params: { courseId: string; chapterId: string }
}) => {
  const user = await currentUser();
  let userId = user?.id ?? "";

  if (!userId) {
    return redirect("/");
  }

  const chapter = await db.chapter.findUnique({
    where: {
      id: params.chapterId,
      courseId: params.courseId
    },
    include: {
      quizzes: {
        include: {
          questions: true
        }
      }
    }
  });

  if (!chapter) {
    return redirect("/")
  }

  const isQuizCompleted = (quiz: { questions: string | any[]; }) => {
    return quiz.questions.length > 0;
  }

  const isQuizzesComplete = chapter.quizzes.length > 0 && chapter.quizzes.every(isQuizCompleted);

  const requiredFields = [
    chapter.title,
    chapter.description,
    isQuizzesComplete ? chapter.quizzes : null,
    chapter.videoUrl,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(field => field !== null).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <>
      {!chapter.isPublished && (
        <Banner
          variant="warning"
          label="Эта глава не опубликована. Она не будет видна в курсе"
        />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="w-full">
            <Link
              href={`/teacher/courses/${params.courseId}`}
              className="flex items-center text-sm hover:opacity-75 transition mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Вернуться к настройке курса
            </Link>
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-2xl font-medium">
                  Создание раздела
                </h1>
                <span className="text-sm text-slate-700">
                  Заполните все поля {completionText}
                </span>
              </div>
              <ChapterActions
                disabled={!isComplete}
                courseId={params.courseId}
                chapterId={params.chapterId}
                isPublished={chapter.isPublished}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={LayoutDashboard} />
                <h2 className="text-xl">
                  Настройте свой раздел
                </h2>
              </div>
              <ChapterTitleForm
                initialData={chapter}
                courseId={params.courseId}
                chapterId={params.chapterId}
              />
              <ChapterDescriptionForm
                initialData={chapter}
                courseId={params.courseId}
                chapterId={params.chapterId}
              />
              <ChapterQuizForm
                initialData={chapter}
                chapterId={params.chapterId} 
                courseId={params.courseId} />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={Video} />
              <h2 className="text-xl">
                Добавить видео
              </h2>
            </div>
            <ChapterVideoForm
              initialData={chapter}
              chapterId={params.chapterId}
              courseId={params.courseId}
            />
          </div>
        </div>
      </div >
    </>
  );
}

export default ChapterIdPage;
