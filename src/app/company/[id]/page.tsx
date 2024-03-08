"use client"

import BaseLayout from "@/widgets/Layout/Base/BaseLayout";
import Price from "@/widgets/Price/Price";

interface IDPageProps {
    params: {id: string}
}

export default function Page({ params }: IDPageProps) {

    return (
        <BaseLayout title="Акции Яндекса">
            <div>Content</div>
            <div>{params.id}</div>
            <Price price={"123"} />
        </BaseLayout>
    )
}
