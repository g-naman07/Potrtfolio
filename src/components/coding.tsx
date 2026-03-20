"use client";

import Link from "next/link";
import Image from "next/image";

export function CodingHorizontal({ data }: any) {
    return (
        <div className="flex flex-col divide-y border rounded-xl overflow-hidden shadow-sm">

            {/* LEETCODE */}
            <Link href="https://leetcode.com/namg07" target="_blank" className="group">
                <div className="flex items-center justify-between px-5 py-4 transition-all duration-300 ease-out hover:bg-muted/40 hover:shadow-md hover:-translate-y-[2px]">

                    <div className="flex items-start gap-4">
                        <div className="w-[120px] h-10 flex items-center justify-center overflow-hidden">
                            <Image
                                src="/leetcode.png"
                                alt="Leetcode"
                                width={100}
                                height={40}
                                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">@namg07</p>
                            <div className="text-sm text-muted-foreground flex flex-wrap gap-x-4">
                                <span>Rating: 1694</span>
                                <span>Questions Solved: 474</span>
                                <span>Contests: 18</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-sm text-muted-foreground hidden sm:block group-hover:translate-x-1 transition">
                        View →
                    </div>
                </div>
            </Link>

            {/* CODECHEF */}
            <Link href="https://www.codechef.com/users/namg07" target="_blank" className="group">
                <div className="flex items-center justify-between px-5 py-4 transition-all duration-300 ease-out hover:bg-muted/40 hover:shadow-md hover:-translate-y-[2px]">

                    <div className="flex items-start gap-4">
                        <div className="w-[120px] h-10 flex items-center justify-center">
                            <Image
                                src="/codechef.png"
                                alt="Codechef"
                                width={100}
                                height={40}
                                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">@namg07</p>
                            <div className="text-sm text-muted-foreground flex flex-wrap gap-x-4">
                                <span>Rating: 1523 (★★)</span>
                                <span>Global Rank: 24587</span>
                                {/* <span>Country: 22588</span> */}
                            </div>
                        </div>
                    </div>

                    <div className="text-sm text-muted-foreground hidden sm:block group-hover:translate-x-1 transition">
                        View →
                    </div>
                </div>
            </Link>

            {/* CODEFORCES */}
            <Link href="https://codeforces.com/profile/namg07" target="_blank" className="group">
                <div className="flex items-center justify-between px-5 py-4 transition-all duration-300 ease-out hover:bg-muted/40 hover:shadow-md hover:-translate-y-[2px]">

                    <div className="flex items-start gap-4">
                        <div className="w-[120px] h-10 flex items-center justify-center">
                            <Image
                                src="/codeforces.png"
                                alt="Codeforces"
                                width={100}
                                height={40}
                                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">@namg07</p>
                            <div className="text-sm text-muted-foreground flex flex-wrap gap-x-4">
                                <span>Rating: 1105 </span>
                                {/* <span>Questions Solved: 110</span> */}
                            </div>
                        </div>
                    </div>

                    <div className="text-sm text-muted-foreground hidden sm:block group-hover:translate-x-1 transition">
                        View →
                    </div>
                </div>
            </Link>

            {/* ATCODER */}
            <Link href="https://atcoder.jp/users/namg07" target="_blank" className="group">
                <div className="flex items-center justify-between px-5 py-4 transition-all duration-300 ease-out hover:bg-muted/40 hover:shadow-md hover:-translate-y-[2px]">

                    <div className="flex items-start gap-4">
                        <div className="w-[120px] h-10 flex items-center justify-center">
                            <Image
                                src="/atcoder.png"
                                alt="AtCoder"
                                width={100}
                                height={40}
                                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">@namg07</p>
                            <div className="text-sm text-muted-foreground flex flex-wrap gap-x-4">
                                <span>Rating: 175 (10 Kyu)</span>
                                <span>Contests: 5</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-sm text-muted-foreground hidden sm:flex items-center gap-1 transition-all duration-300">
                        View
                        <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </div>
                </div>
            </Link>

        </div>
    );
}