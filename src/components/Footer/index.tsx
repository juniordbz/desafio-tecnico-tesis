import Image from "next/image";
import logo from "@/assets/logo_footer.png";
export function Footer() {
  return (
    <footer className="w-full h-40 bg-zinc-100 flex items-center justify-center ">
      <Image src={logo} alt="" width={200} height={200} />
    </footer>
  );
}
