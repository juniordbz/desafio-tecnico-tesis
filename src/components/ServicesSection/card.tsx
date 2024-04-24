interface CardProps {
  label: string;
  content: string;
}
export function Card({ label, content }: CardProps) {
  return (
    <div className="bg-white flex flex-col shadow-md w-80 rounded-lg items-center  p-4">
      <div className="flex items-center justify-center rounded-full w-24 h-24 bg-gradient-to-b from-indigo-700 to-indigo-900 -m-20 ">
        <span className=" text-white text-4xl ">{label}</span>
      </div>
      <span className="mt-24 text-center">{content}</span>
    </div>
  );
}
