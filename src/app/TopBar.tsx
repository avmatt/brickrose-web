"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlockBrick } from "@fortawesome/pro-duotone-svg-icons";

export const TopBar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Boards", href: "/boards" },
  ];

  return (
    <div className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-3">
        <div className="flex justify-between py-3 border-b border-gray-700">
          <nav className="space-x-3">
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

          {session && session.user && (
            <div className="flex items-center gap-2">
              <img
                className="rounded-full h-9"
                src={session.user.image ?? ""}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
