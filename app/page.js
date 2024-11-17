import Image from "next/image";

export default function Home() {
    return (
            <section className="herobg w-screen px-10 flex flex-col md:h-screen">
                <div className="flex flex-col  py-10 xl:py-0 xl:flex-row justify-between items-center ">
                    <div className="flex w-full flex-col bg-white border-2 border-slate-600 rounded-xl p-5 gap-5">
                        <h1 className="text-3xl">
                            {process.env.NEXT_PUBLIC_COMPANY_NAME_P1}{" "}
                            <span>
                                {process.env.NEXT_PUBLIC_COMPANY_NAME_P2}
                            </span>
                        </h1>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sapiente dignissimos distinctio neque obcaecati
                        aut! Magnam, laboriosam! Possimus harum tenetur quidem
                        at totam, sed nisi eligendi consequuntur corrupti
                        ducimus, quibusdam error. Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Minus, magnam doloribus.
                        Suscipit asperiores ut laboriosam ipsa rem dolorem
                        facere adipisci quaerat blanditiis. Deserunt quaerat
                        natus esse nisi. Laboriosam, tempora vero? Lorem ipsum
                        dolor, sit amet consectetur adipisicing elit. Deserunt,
                        omnis? Repudiandae obcaecati necessitatibus ut
                        recusandae labore provident excepturi hic voluptatem
                        nobis. Perspiciatis aliquam quaerat, hic dolorem ab
                        dolorum maxime iusto. Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Officia odit porro autem
                        vel delectus ipsa. Ratione labore maxime eveniet!
                        Ducimus voluptates et libero, minus blanditiis vel
                        necessitatibus nisi? Praesentium, eos.
                    </div>
                    <div className="w-full flex justify-center">
                        <Image
                            priority
                            src="/hero_bg.svg"
                            height={0}
                            width={0}
                            alt="hero"
                            className="h-[400px] w-[400px] lg:h-[700px] lg:w-[700px]"
                        />
                    </div>
                </div>
                {/* <a href="https://iconscout.com/illustrations/research-analysis-report" className="text-underline font-size-sm" target="_blank">Research analysis report</a> by <a href="https://iconscout.com/contributors/boimwoim" class="text-underline font-size-sm">Kafa Studio</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a> */}
            </section>
    );
}
