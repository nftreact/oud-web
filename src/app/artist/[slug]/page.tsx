import React from 'react';

const page = ({ params: { slug } }: { params: { slug: string } }) => {
  return <div>artist{slug}</div>;
};

export default page;
