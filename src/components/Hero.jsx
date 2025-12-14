import Image from "next/image";

export default function Hero() {
  return (
    <section id="header" className="text-center py-25 px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-white">
        Bem-vindo! <br /> Eu sou Lucas Soares <br /> Desenvolvedor Web
      </h1>
      <div className="mt-6 flex justify-center">
        <Image
          src="/lucas.jpg"
          alt="Lucas Soares"
          width={160}
          height={160}
          className="rounded-full border-4 border-white transition-transform hover:scale-105 duration-300"
        />
      </div>
    </section>
  );
}
