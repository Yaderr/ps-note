interface EmptyMessageProps {
    Icon: JSX.ElementType
    type?: string
}

export const EmptyMessage = ({ Icon, type }: EmptyMessageProps) => {

    return (
        <div className='empty-error-container'>
            <Icon  width={70} height={70} />
            <span>You haven't added any {type} yet </span>
            <div>
                <a href={`/create/${type}`}>Create {type}</a>
            </div>
        </div>
    )
}
