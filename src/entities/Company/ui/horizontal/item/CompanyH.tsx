import { ICompany } from "@/entities/Company/model/company.model"
import cl from './_CompanyH.module.scss'
import { cls } from "@/shared/lib/classes.lib"
import Link from "next/link"
import { COMPANY_PAGES } from "@/config/pages-url.config"

interface CompanyHProps {
    company: ICompany
    className?: string
}

export default function CompanyH({company, className}: CompanyHProps) {
    return (
        <Link href={COMPANY_PAGES.DETAIL(company.id)} className={cls(cl.company, className)}>
            <div className={cl.left}>
                <span className={cl.title}>{company.title}</span>
                <span className={cl.code}>{company.code}</span>
            </div>
            <span className={cl.price}>{company.stock} ₽</span>
        </Link>
    )
}
