import Link from "next/link";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigation = [
    { name: "Dashboard", href: "/dashboard", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
    { name: "Reports", href: "#", current: false },
  ];

  return (
    <html lang="en" className="bg-gray-100">
      <head />
      <body>
        <div className="bg-gray-800 pt-5 pb-32">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="pb-3 border-b border-gray-700 space-x-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`inline-block px-3 py-2 rounded-md text-sm font-medium ${
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <header className="max-w-7xl mx-auto py-10">
              <h1 className="text-3xl font-bold tracking-tight text-white">
                Dashboard
              </h1>
            </header>
          </div>
        </div>

        <main className="max-w-7xl mx-auto -mt-32">
          <div className="min-h-[300px] rounded-lg bg-white mx-4 p-5 shadow">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
