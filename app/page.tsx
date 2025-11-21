import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingsParams } from "./actions/getListings";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";

interface HomeProps {
  searchParams: Record<string, string | string[] | undefined>;
}

const Home = async ({ searchParams }: HomeProps) => {
  

   searchParams = await searchParams;

  const formattedParams: IListingsParams = {
    userId: searchParams.userId as string,
    category: searchParams.category as string,
    locationValue: searchParams.locationValue as string,
    startDate: searchParams.startDate as string,
    endDate: searchParams.endDate as string,
    guestCount: searchParams.guestCount ? Number(searchParams.guestCount) : undefined,
    roomCount: searchParams.roomCount ? Number(searchParams.roomCount) : undefined,
    bathroomCount: searchParams.bathroomCount ? Number(searchParams.bathroomCount) : undefined,
  };

  const listings = await getListings(formattedParams)
  const currentUser = await getCurrentUser()

  if(listings.length === 0){
    return (
      <EmptyState showReset/>
    )
  }

  return (
    <Container>
      <div className="
        pt-24
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
      ">
        {listings.map((listing: any) => {
          return (
            <ListingCard 
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          )
        })}
      </div>
    </Container>
  );
}

export default Home