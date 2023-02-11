type MainProps = {
  children: React.ReactNode;
};

export const Main: React.FC<MainProps> = ({ children }) => (
  <main className="max-w-7xl mx-auto -mt-32">
    <div className="min-h-[300px] rounded-lg bg-white mx-3 p-5 shadow">
      {children}
    </div>
  </main>
);
