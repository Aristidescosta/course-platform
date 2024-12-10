import { CourseHeader, StartCourse } from "@/components";
import { Metadata } from "next";

type Props = {
    params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {

    return {
        title: `CodarSe - Detalhe do curso ${params.id}`,
        description: params.id
    };
}
function PageCourseDetail({ params }: Props) {
    return (
        <main className="mt-8 flex justify-center">
            <div className="w-full min-[880px]:max-w-[880px] px-2 flex flex-col gap-4">
                <StartCourse
                    courseId="1"
                    classId="1"
                    imageUrl="https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg"
                />
                <CourseHeader />
            </div>
        </main>
    );
}

export default PageCourseDetail;