


export enum CC_TYPE {
    VISA = 'VISA',
    MASTER = 'MASTERCARD',
    AMEX = 'AMERICAN_EXPRESS',
    DISCO = 'DISCOVER'
}

export interface Card {
    id: string,
    title: string
    number: string,
    expire: string,
    sec_code: string,
    type: CC_TYPE,
    isFav: boolean
}

export interface CardParam {
    id?: string
    title: string
    number: string,
    expire: string,
    sec_code: string,
    type: CC_TYPE | undefined,
    isFav?: boolean
}