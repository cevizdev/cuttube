import React from "react";
import Image from 'next/image';

const LegalLinks = () => {
    return (
        <nav className="flex flex-wrap justify-center space-x-6">
            <a href="#" className="mb-2 text-sm hover:text-gray-700">Privacy</a>
            <a href="#" className="mb-2 text-sm hover:text-gray-700">Content Terms Notice</a>
            <a href="#" className="mb-2 text-sm hover:text-gray-700">Legal</a>
            <a href="#" className="mb-2 text-sm hover:text-gray-700">Features</a>
            <a href="#" className="mb-2 text-sm hover:text-gray-700">Landing Pages</a>
        </nav>
    )
}

const Links = () => {
    return (

        <div className="grid max-w-screen-xl gap-6 px-6 mx-auto lg:px-8 xl:px-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
            <div>
                <h5 className="text-xl font-bold text-gray-700">Product</h5>
                <nav className="mt-4">
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-base hover:text-gray-500">Landingpages</a>
                        </li>
                        <li>
                            <a href="#" className="text-base hover:text-gray-500">Features</a>
                        </li>
                        <li>
                            <a href="#" className="text-base hover:text-gray-500">Showcase</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <h5 className="text-xl font-bold text-gray-700">Industries</h5>
                <nav className="mt-4">
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-base hover:text-gray-500">Employment</a>
                        </li>
                        <li>
                            <a href="#" className="text-base hover:text-gray-500">Childcare</a>
                        </li>
                        <li>
                            <a href="#" className="text-base hover:text-gray-500">Dealerships</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <h5 className="text-xl font-bold text-gray-700">About us</h5>
                <nav className="mt-4">
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-base hover:text-gray-500">Company</a>
                        </li>
                        <li>
                            <a href="#" className="text-base hover:text-gray-500">Download brochure</a>
                        </li>
                        <li>
                            <a href="#" className="text-base hover:text-gray-500">Resources</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <h5 className="text-xl font-bold text-gray-700">Legal</h5>
                <nav className="mt-4">
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-base hover:text-gray-500">Terms and conditions</a>
                        </li>
                        <li>
                            <a href="#" className="text-base hover:text-gray-500">Security</a>
                        </li>
                        <li>
                            <a href="#" className="text-base hover:text-gray-500">Privacy</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <footer className="py-12 text-gray-600 bg-white xl:pb-24">
            <div className="max-w-screen-xl px-6 mx-auto mb-12 lg:px-8 xl:px-4 lg:mb-16">
                <Image alt="CutTube - Youtube Video Cutter and Download" src="/images/logo.png" height="50" width="150" />
            </div>

            <div className="flex flex-col items-center justify-between max-w-screen-xl px-6 mx-auto mt-16 space-y-4 lg:px-8 xl:px-4 md:flex-row lg:mt-20">
                <div className="space-y-4 text-sm text-center md:space-y-1 md:text-left">
                    <p>©2021 Youtube Video Cutter and Downloader. Developed by <a href="https://github.com/peacecwz" target="_blank">PeaceCwz</a></p>
                    <p>It's Open Source project. You can sponsor and support project on Twitter and Github</p>
                </div>
                <a target="_blank" href="https://github.com/usigntech/cuttube" className="inline-block px-5 py-4 font-semibold text-white rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 lg:px-8 md:transform md:-translate-y-2">See Open Source Project</a>
            </div>
            <div className="flex flex-col items-center justify-between max-w-screen-xl px-6 mx-auto mt-8 space-y-4 lg:px-8 xl:px-4 md:flex-row lg:mt-12">
                <nav className="flex flex-wrap justify-center space-x-6">
                </nav>
                <nav className="flex items-center space-x-2">
                    <a href="https://github.com/usigntech/cuttube" target="_blank" className="text-gray-500 hover:text-gray-600">
                        <span className="sr-only">Github</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 256 250" version="1.1" preserveAspectRatio="xMidYMid">
                            <path d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z" fill="#161614"></path>
                        </svg>
                    </a>
                    <a href="https://twitter.com/peacecwz" target="_blank" className="text-gray-500 hover:text-gray-600">
                        <span className="sr-only">Twitter</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                    </a>
                </nav>
            </div>
        </footer>

    )
}

export default Footer;