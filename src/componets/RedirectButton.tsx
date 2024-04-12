import { EllipsisVerticalIcon } from "@heroicons/react/24/outline"

export const RedirectButton = ({ link }: { link: string}) => {

    return (
        <>
            
            <div>
            <a target="_blank" className="copy-button" href={`https://${link}`}>
                <EllipsisVerticalIcon width={25} height={25}/>
            </a>
            </div>
        </>
    )
}