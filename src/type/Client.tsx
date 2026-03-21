

export type Client = {
    id: string,
    name: string,
    nickname: string,
    cedula: string,
    address: string,
    phone: string,
    planId: string,
    status?: string
    routerSerial?: string,
}

export type clientProps = {
    client: Client
}