"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// import { useRouter } from 'next/navigation'

function Navbar() {
	const pathname = usePathname();
	console.log(pathname);
	//     const router = useRouter();

	//     function handleClick(e, page){
	//         e.preventDefault();
	//         router.push(page);
	//     }

	return (
		<div>
			<ul className="flex justify-center gap-5 bg-green-500 border rounded-md">
				{pathname !== "/signin/signinadmin" ? (
					<li>
						<Link href="/signin/signinadmin">Login Admin</Link>
					</li>
				) : (
					<li>
						<Link href="/signin/signinuser">Login User</Link>
					</li>
				)}
			</ul>
		</div>
	);
}

export default Navbar;
