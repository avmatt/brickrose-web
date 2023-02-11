type HeaderProps = {
  children: React.ReactNode;
};

export const Header: React.FC<HeaderProps> = ({ children }) => (
  <div className="bg-gray-800 text-white pb-32">
    <header className="max-w-7xl mx-auto  px-3 py-10">
      <h1 className="text-3xl font-bold tracking-tight text-white">
        {children}
      </h1>
    </header>
  </div>
);
