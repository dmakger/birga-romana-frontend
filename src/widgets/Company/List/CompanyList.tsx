"use client"

import { useCompanyAll } from "@/entities/Company/hooks/useCompanyAll"
import CompanyHList from "@/entities/Company/ui/horizontal/list/CompanyHList";

import cl from './_CompanyList.module.scss'

export default function CompanyList() {
    const { data: companyList, setData: setCompanyList } = useCompanyAll()

    if (!companyList)
        return null
    return <CompanyHList companyList={companyList} className={cl.block} />
    
}
