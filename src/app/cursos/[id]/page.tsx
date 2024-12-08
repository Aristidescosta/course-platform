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
            Detalhe do curso {params.id}
        </main>
    );
}

export default PageCourseDetail;