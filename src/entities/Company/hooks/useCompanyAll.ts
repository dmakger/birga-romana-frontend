import { SkipToken, useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { companyAPI } from '../api/company.api'
import { ICompany } from '../model/company.model'
import useAPI from '@/api/useApi'


export function useCompanyAll() {
	return useAPI<ICompany[]>(['companyList'], () => companyAPI.all())
}
