import Link from 'next/link';
import React from 'react';
import { MdPlayCircleOutline } from 'react-icons/md';

interface IStartCourseProps {
    courseId: string;
    classId: string;
    imageUrl: string;
}

export const StartCourse = ({ courseId, classId, imageUrl }: IStartCourseProps) => {
    return (
        <div
            className='p-3 bg-paper rounded-md flex flex-col gap-4'
        >
            <Link
                href={`/player/${courseId}/${classId}`}
                style={{ backgroundImage: `url(${imageUrl})` }}
                className='w-full bg-no-repeat aspect-video bg-cover bg-center rounded'
            >
                <div className='w-full h-full flex items-center justify-center bg-background opacity-0 hover:opacity-70 transition-opacity'>
                    <MdPlayCircleOutline size={58} />
                </div>
            </Link>
            <Link href={`cursos/${courseId}`} className='bg-primary p-2 px-3 rounded text-center'>Começar o curso</Link>
        </div>
    );
};
