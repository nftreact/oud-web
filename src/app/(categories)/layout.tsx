import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <section>
      <div>categories</div>
      <div className='relative'>{children}</div>
    </section>
  );
}
