import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"

interface SectionTitleProps {
    title: string,
    name: string,
    redirectTo: string
}

export const SectionTitle = ({ title, name, redirectTo }: SectionTitleProps) => {

    return (
        <Link to={ redirectTo } className="section-title" data-test-id={name}>
           <div>
           <h2>{ title }</h2>
           </div>
            <div>
            <ChevronRightIcon strokeWidth={4} width={15} height={15} />
            </div>
        </Link>
    )
}