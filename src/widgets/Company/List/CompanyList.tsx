"use client"

import { companyAPI } from "@/entities/Company/api/company.api";
import { useCompanyAll } from "@/entities/Company/hooks/useCompanyAll"

export default function CompanyList() {
    const { data: companyList, setData: setCompanyList } = useCompanyAll()
    console.log(companyList);

    return (
        <div>CompanyList</div>
    )
}
