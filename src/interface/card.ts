


export enum CC_TYPE {
    VISA = 'visa',
    MASTER = 'MasterCard',
    AMEX = 'amex',
    DISCO = 'discover'
}

export interface TypeDetails {
    name: string,
    icon: string
}

export interface Card {
    id: string,
    title: string
    number: number,
    expire: Date,
    sec_code: number,
    type: CC_TYPE,
    typeDetails: TypeDetails
}