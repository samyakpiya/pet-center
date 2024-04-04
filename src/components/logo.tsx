import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

function Logo({ className }: LogoProps) {
  return (
    <Link href="/">
      <Image className={className} src={logo} alt="Pet Center Logo" />
    </Link>
  );
}

export default Logo;
