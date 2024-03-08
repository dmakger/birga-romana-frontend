import { cls } from "@/shared/lib/classes.lib"
import cl from './_Price.module.scss'

interface PriceProps {
    price: number | string
    className?: string
}

export default function Price({price, className}: PriceProps) {
    return (
        <div className={cls(cl.block, className)}>
            <span className={cl.price}>{price} ₽</span>
        </div>
    )
}
