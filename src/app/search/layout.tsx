import { ReactNode } from 'react';

export default function MenuLayout({ children, modal }: { children: ReactNode; modal: ReactNode }) {
  return (
    <section>
      <div className='relative'>search input header</div>
      {children}
    </section>
  );
}
