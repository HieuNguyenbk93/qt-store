import Image from "next/image";
import tuya from "@/assets/logo/tuya.jpg";
import zitech from "@/assets/logo/zitech.png";
import acis from "@/assets/logo/ACIS.jpg";
import ruijie from "@/assets/logo/ruijie.jpeg";
import ruijieNetwork from "@/assets/logo/RuijieNetworks.png";
import ezviz from "@/assets/logo/ezviz.png";
import hikvision from "@/assets/logo/Hikvision.png";
import rangdong from "@/assets/logo/rangdong.png";
import homegy from "@/assets/logo/homegy.png";

export default function Brand() {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-2xl font-semibold text-center mb-8">Đối tác của chúng tôi</h2>
      <div className="flex items-center justify-center gap-8 flex-wrap max-w-6xl mx-auto px-4 animate-slide">
        <Image src={tuya} alt="Tuya" width={120} />
        <Image src={zitech} alt="Zitech" width={120} />
        <Image src={acis} alt="Acis" width={120} />
        <Image src={ruijie} alt="Ruijie" width={120} />
        <Image src={ruijieNetwork} alt="Ruijie" width={120} />
        <Image src={ezviz} alt="Ezviz" width={120} />
        <Image src={hikvision} alt="Hikvision" width={120} />
        <Image src={rangdong} alt="Rạng Đông" width={120} />
        <Image src={homegy} alt="Homegy" width={120} />
      </div>
    </section>
  )
}