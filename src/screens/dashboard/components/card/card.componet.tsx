import { LayoutProps } from "../../../../shared/components/layout/index.componet";



export default function Card({ children }: LayoutProps) {
    return (
        <div style={{ flexGrow: 1}}>
            {children}
        </div>
    )
}