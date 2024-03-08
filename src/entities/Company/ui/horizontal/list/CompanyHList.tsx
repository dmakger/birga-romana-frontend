import { ICompany } from "@/entities/Company/model/company.model"
import CompanyH from "../item/CompanyH"
import { cls } from "@/shared/lib/classes.lib"
import cl from './_CompanyHList.module.scss'

interface CompanyHListProps {
    companyList: ICompany[]
    className?: string
}

export default function CompanyHList({companyList, className}: CompanyHListProps) {
    return (
        <div className={cls(cl.list, className)}>
            {companyList.map(it => (
                <CompanyH company={it} key={it.id} />
            ))}
        </div>
    )
}
