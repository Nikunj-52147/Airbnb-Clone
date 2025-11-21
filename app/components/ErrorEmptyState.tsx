'use client'

import EmptyState from "./EmptyState";

export default function ErrorEmptyState() {
  return (
    <EmptyState 
      title="Not Found"
      subtitle="The page you are looking for does not exist."
    />
  );
}
