"use client"

import { CompanyMore } from '@/entities/Company/ui/horizontal/CompanyMore/CompanyMore';
import cl from './_StocksCompanyPage.module.scss'
import { ICompany } from "@/entities/Company/model/company.model";
import { useStocksCompany } from "@/entities/Stock/hooks/useStock.hooks";
import BaseLayout from "@/widgets/Layout/Base/BaseLayout";
import Price from "@/widgets/Price/Price";
import { useEffect, useState } from "react";
import ChartStock from '@/widgets/Stock/Chart/ui/ChartStock';

interface IDPageProps {
    params: {id: string}
}

export default function Page({ params }: IDPageProps) {
    const {data: stocks} = useStocksCompany({company: params.id})
    const [company, setCompany] = useState<ICompany>()    

    useEffect(() => {
        if (stocks && company === undefined)
            setCompany(stocks[0].company)
    }, [stocks, company])

    if (stocks === undefined || company === undefined)
        return <></>

    return (
        <BaseLayout title={company.title}>
            <div className={cl.list}>
                <ChartStock stocks={stocks} />
                <div className={cl.right}>
                    <Price price={stocks[stocks.length - 1].cost} />
                    <CompanyMore company={company} />
                </div>
            </div>
        </BaseLayout>
    )
}
