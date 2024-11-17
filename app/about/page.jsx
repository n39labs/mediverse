import Image from "next/image";

const about = () => {
    const imageStyle = {
        borderRadius: '50%',
        border: 'none',
      }
    return (
            <section className="herobg md:h-full bg-white flex flex-col xl:flex-row p-10 justify-center items-center gap-10">
                <div className="flex flex-col justify-center items-center bg-companybg h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] rounded-[50%] p-5">
                    <Image
                        src="/mre_logo.svg"
                        height={500}
                        width={500}
                        priority
                        alt="logo"
                        style={imageStyle}
                        className=" border-companybg object-scale-down rounded-[50%] scale-125 xl:scale-150"
                    />
                </div>
                <div className=" lg:w-[50%] flex flex-col items-start justify-center bg-white border-2 border-slate-600 rounded-xl p-5 gap-5">
                    <h1 className="text-4xl">About Us</h1>

                    <p>
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
                    </p>
                </div>
            </section>
    );
};

export default about;
