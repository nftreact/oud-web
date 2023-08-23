import React from 'react';

const page = ({ params: { slug } }: { params: { slug: string } }) => {
  return <div>catch all {slug}</div>;
};

export default page;
