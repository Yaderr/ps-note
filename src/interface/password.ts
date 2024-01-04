interface WebsiteDetail {
    websiteUrl: string,
    title: string,
    icon: string
}

export interface Password {
    id: string,
    title: string,
    websiteUrl: string,
    userNameEmail: string,
    password: string,
    websiteDetails: WebsiteDetail
}