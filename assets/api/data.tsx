export type Destination = {
    location: string,
    name: string,
    rating: string,
    price: number,
    image: string,
    derajat: string,
    description: string,
    id: string
}

export async function getDestinations() {
    const res = await fetch(`https://68faff2694ec960660243ee8.mockapi.io/api/destinations`)
    if (!res.ok) throw new Error('Failed to fetch destinations')
    return res.json()
}

export async function getDestinationById(id: string): Promise<Destination> {
    const res = await fetch(`https://68faff2694ec960660243ee8.mockapi.io/api/destinations/${id}`)
    if (!res.ok) throw new Error('Failed to get destination detail')
    return res.json()
}