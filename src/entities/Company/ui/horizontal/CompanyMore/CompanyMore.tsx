import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_CompanyMore.module.scss'
import { ICompany } from "@/entities/Company/model/company.model";

interface CompanyMoreProps{
    company: ICompany
    className?: string,
}

export const CompanyMore:FC<CompanyMoreProps> = ({company, className}) => {
    return (
        <div className={cls(cl.block, className)}>
            <div className={cl.top}>
                <h3 className={cl.title}>{company.title}</h3>
                <span className={cl.code}>{company.code}</span>
            </div>
            {company.description && 
                <>
                    <div className={cl.line} />
                    <p dangerouslySetInnerHTML={{__html: company.description}} 
                        className={cl.description}/>
                </>
            }
        </div>
    )
}
