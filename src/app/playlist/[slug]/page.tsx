import React from 'react';

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
  return (
    <>
      <h1>{slug}</h1>
    </>
  );
}
