"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlockBrick } from "@fortawesome/pro-duotone-svg-icons";

export const TopBar = () => {
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <div className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-3">
        <nav className="py-3 space-x-3 border-b border-gray-700">
          <FontAwesomeIcon icon={faBlockBrick} className="fa-2xl" />
          {navigation.map(({ name, href }) => {
            const current =
              pathname === href ||
              (href !== "/" && pathname?.indexOf(href) === 0);
            return (
              <Link
                key={name}
                href={href}
                className={`inline-block px-3 py-2 rounded-md text-sm font-medium ${
                  current
                    ? "bg-gray-900"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
