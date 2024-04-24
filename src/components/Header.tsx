import Image from "next/image";
import logo from "../assets/logo_header.png";

export function Header() {
  return (
    <header className="px-20">
      <Image src={logo} width={200} height={200} alt="" />
    </header>
  );
}
