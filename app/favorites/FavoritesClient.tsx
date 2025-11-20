
import Container from "../components/Container"
import Heading from "../components/Heading"
import ListingCard from "../components/listings/ListingCard"

import { User } from "../generated/prisma"
import { SafeListing } from "../types"

interface FavoritesClientProps {
    listings: SafeListing[]
    currentUser: User | null
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
    listings,
    currentUser
}) => {
  return (
    <Container>
        <div className="mt-6">
            <Heading 
                title="Favorites"
                subtitle="List of places you have favorited!"
            />
        </div>
        <div className="
            mt-6
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
        ">
            {listings.map((listing) => (
                <ListingCard 
                    currentUser={currentUser}
                    key={listing.id}
                    data={listing}
                />
            ))}
        </div>
    </Container>
  )
}

export default FavoritesClient
