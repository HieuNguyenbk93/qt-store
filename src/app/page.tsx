import TopBar from "@/Components/TopBar";
import Link from "next/link"
import bgImage from "@/assets/bg-smart-home.jpg"
import Image from "next/image";
import light from "@/assets/light.png"
import acunit from "@/assets/air-conditioner.png"
import camera from "@/assets/cctv-camera.png"
import protect from "@/assets/protect.png"
import curtain from "@/assets/smart-curtain.png"
import smartdoor from "@/assets/smart-door.png"
import sound from "@/assets/sound-waves.png"
import tree from "@/assets/sprinkler.png"
import voice from "@/assets/voice-assistant.png"
import NavBar from "@/Components/NavBar";
import Brand from "@/Components/Brand";
import FormContactNetlify from "@/Components/FormContactNetlify";
import Footer from "@/Components/Footer";

// </head>
export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <TopBar />
      <NavBar />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt="Hero Background"
            className="w-full h-full object-cover object-center scale-105"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transform: 'scale(1.05)' }}
          />
        </div>
        <div className="relative z-10 px-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">QT Smart Home</h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">Cung cấp các giải pháp công nghệ tạo ra không gian sống hiện đại <br/> tiện nghi hoàn hảo.</p>
          <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Liên hệ ngay</Link>
        </div>
      </section>

      {/* Dịch vụ chính */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-10">Giải pháp nhà thông minh</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Smart Lighting */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <Image src={light} alt="Smart lighting" width={64} height={64} className="w-16 h-16" />
            </div>
            <p className="text-center">Điều khiển chiếu sáng thông minh</p>
          </div>

          {/* Smart AC and TV */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <Image src={acunit} alt="Smart AC and TV" width={64} height={64} className="w-16 h-16" />
            </div>
            <p className="text-center">Điều khiển điều hòa – TV thông minh</p>
          </div>

          {/* Smart Curtains */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <Image src={curtain} alt="Smart curtains" width={64} height={64} className="w-16 h-16" />
            </div>
            <p className="text-center">Rèm tự động thông minh</p>
          </div>

          {/* Security Solutions */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Image src={protect} alt="Security solutions" width={40} height={40} className="w-10 h-10" />
              </div>
            </div>
            <p className="text-center">Giải pháp an ninh bảo trộm</p>
          </div>

          {/* Audio Entertainment */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <Image
                src={sound}
                alt="Audio entertainment"
                width={64}
                height={64}
                className="w-16 h-16"
              />
            </div>
            <p className="text-center">Âm thanh giải trí</p>
          </div>

          {/* Camera Solutions */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <Image src={camera} alt="Camera solutions" width={64} height={64} className="w-16 h-16" />
            </div>
            <p className="text-center">Giải pháp Camera</p>
          </div>

          {/* Smart Watering */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <Image src={tree} alt="Smart watering" width={64} height={64} className="w-16 h-16" />
            </div>
            <p className="text-center">Tưới cây thông minh</p>
          </div>

          {/* Smart Door Locks */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <Image src={smartdoor} alt="Smart door locks" width={64} height={64} className="w-16 h-16" />
            </div>
            <p className="text-center">Khóa cửa thông minh</p>
          </div>

          {/* Voice Control */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <Image src={voice} alt="Voice control" width={64} height={64} className="w-16 h-16" />
            </div>
            <p className="text-center">Điều khiển giọng nói màn hình</p>
          </div>
        </div>
      </section>

      {/* Logo hãng đối tác */}
      <Brand/>

      {/* Form liên hệ */}
      {/* <section id="contact" className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-8">Liên hệ với chúng tôi</h2>
        <form name="contact" method="POST" data-netlify="true" className="max-w-xl mx-auto space-y-4">
          <input type="text" name="name" placeholder="Tên của bạn" required className="w-full p-3 border rounded-lg shadow-sm" />
          <input type="text" name="telephone" placeholder="Số điện thoại" required className="w-full p-3 border rounded-lg shadow-sm" />
          <input type="email" name="email" placeholder="Email" required className="w-full p-3 border rounded-lg shadow-sm" />
          <textarea name="message" placeholder="Nội dung" required className="w-full p-3 border rounded-lg shadow-sm h-32"></textarea>
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Gửi</button>
        </form>
      </section> */}
      <FormContactNetlify />

      {/* Footer */}
      <Footer/>
    </div>
  )
}