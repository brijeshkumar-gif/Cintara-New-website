import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#0ea5e9] py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/90">

                    <div className="text-center md:text-left">
                        © 2026 Cintara. All rights reserved.
                    </div>

                    <div className="text-center">
                        Cintara, Inc. <span className="mx-2 opacity-50">|</span>
                        UEI: EAT5ZH6K4PX3 <span className="mx-2 opacity-50">|</span>
                        CAGE Code: 18ZU9 <span className="mx-2 opacity-50">|</span>
                        Delaware C-Corp
                    </div>

                    <div className="flex items-center gap-6 justify-center md:justify-end">
                        <Link href="#" className="hover:text-white transition-colors">
                            Privacy
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Terms
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Security
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    );
}
