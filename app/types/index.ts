import { Reservation, Listing } from "../generated/prisma";

export type SafeListing = Omit<
  Listing,
  "createdAt"
> & {
  createdAt: string
}

export type SafeReservation = Omit<
  Reservation,
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string,
  startDate: string,
  endDate: string,
  listing: SafeListing
}