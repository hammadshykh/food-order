import Link from "next/link";
import React from "react";

const linkClass = "hover:text-green-500";

function NavLinks({ items, className, hover }) {
  return (
    <div>
      <div className={`flex ${className} items-start justify-center`}>
        {items.map((link) => (
          <Link
            key={link.nameLink}
            href={link.link}
            className={`py-2 text-gray-700  ${linkClass}  dark:text-gray-300 flex`}
          >
            <span className="me-2">{link?.icon}</span>
            {link.nameLink}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavLinks;
