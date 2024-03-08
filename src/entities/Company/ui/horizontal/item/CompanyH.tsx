import { ICompany } from "@/entities/Company/model/company.model"
import cl from './_CompanyH.module.scss'
import { cls } from "@/shared/lib/classes.lib"

interface CompanyHProps {
    company: ICompany
    className?: string
}

export default function CompanyH({company, className}: CompanyHProps) {
    return (
        <div className={cls(cl.company, className)}>
            <div className={cl.left}>
                <span className={cl.title}>{company.title}</span>
                <span className={cl.code}>{company.code}</span>
            </div>
            <span className={cl.price}>{company.stock} ₽</span>
        </div>
    )
}
