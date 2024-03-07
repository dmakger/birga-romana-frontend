import { ICompany } from "@/entities/Company/model/company.model"


export interface IStock {
    id: number
    company: ICompany
    cost: number
    created_at: string
}