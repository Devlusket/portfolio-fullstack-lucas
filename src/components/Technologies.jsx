import Image from "next/image";

const techs = [
  { name: "TypeScript", file: "typescript.svg" },
  { name: "JavaScript", file: "javascript.svg" },
  { name: "React", file: "react-1.svg" },
  { name: "Next.js", file: "next.svg" },
  { name: "Tailwind", file: "tw.svg" },
  { name: "Node.js", file: "nodejs.png" },
  { name: "Canva", file: "canva.png" },
  { name: "Vite", file: "vite.svg" },
  { name: "Supabase", file: "supabase.svg" },
  { name: "Vue.js", file: "vue-js.svg" },
  { name: "Angular", file: "angular.png" },
  { name: "HTML", file: "html.png" },
  { name: "CSS", file: "css-3.svg" },
  { name: "Figma", file: "figma.png" },
];

export default function Technologies() {
  return (
    <section className="py-10 px-6 flex justify-center">
      <div className="bg-header bg-opacity-10 p-6 rounded-2xl">
        <div className="grid grid-cols-7 gap-4 place-items-center">
          {techs.map(({ name, file }) => (
            <Image
              key={name}
              src={`/icons/${file}`}
              alt={name}
              width={50}
              height={50}
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}