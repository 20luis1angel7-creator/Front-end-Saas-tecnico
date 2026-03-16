

export type Client = {
    id: string,
    name: string,
    nickname: string,
    cedula: string,
    address: string,
    phone: string,
    planId: string,
    routerSerial?: string,
    status?: string
}

export type clientProps = {
    client: Client
}