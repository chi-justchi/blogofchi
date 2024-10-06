import React, { useContext } from 'react';

import Link from 'next/link';

const categories=[{name: "Book Review", slug: "book-review"}, {name: "Travel", slug: "travel"}, {name: "Food", slug: "food"}, {name: "Lifestyle", slug: "lifestyle"}]

const Header = () => {
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="boerder-b w-full inline-block border-blue-400 py-8">
                <div className="md:float-left block">
                    <Link href="/">
                          <span className="cursor-pointer font-bold text-4x1 text-white">
                            Blog of Chi
                          </span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Header