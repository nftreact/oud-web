import { ReactNode } from 'react';

export default function MenuLayout({ children, modal }: { children: ReactNode; modal: ReactNode }) {
  return (
    <section>
      <div className='relative'>artist page header</div>
      {children}
    </section>
  );
}
