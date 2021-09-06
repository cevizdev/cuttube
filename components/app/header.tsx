import React from "react";
import Image from 'next/image';

const Header = () => {
    return (
        <header className="flex justify-between max-w-screen-xl px-6 py-4 mx-auto lg:px-8 xl:px-4 lg:py-6">
            <a href="/">
                <span className="sr-only">Youtube Video Cutter and Download</span>
                <Image alt="CutTube - Youtube Video Cutter and Download" src="/images/logo.png" height="50" width="150" />
            </a>
        </header>
    )
}

export default Header;
