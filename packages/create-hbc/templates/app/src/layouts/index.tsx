import { Outlet } from 'hbc-core';

const Index = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
      }}
    >
      <Outlet/>
    </div>
  );
}

export default Index;
