import { ReactNode } from "react"
import cl from './_BaseLayout.module.scss'
import { cls } from "@/shared/lib/classes.lib"

interface BaseLayoutProps {
    title: string
    className?: string
    children: ReactNode
}

export default function BaseLayout({title, className, children}: BaseLayoutProps) {
    return (
        <div className={cls(cl.main, className)}>
            <h1 className={cl.title}>{title}</h1>
            {children}
        </div>
    )
}
