// import Image from 'next/image';

import NavBar from "@/Components/NavBar";
import TopBar from "@/Components/TopBar";

export default function BaoGia() {
  const packages = [
    {
      title: 'CƠ BẢN',
      price: '20.000.000đ',
      color: 'blue-300',
      features: [
        { name: 'ĐK Chiếu sáng cơ bản (Bật/Tắt)', supported: true },
        { name: 'Điều khiển bình nước nóng', supported: true },
        { name: 'Điều khiển điều hòa, Tivi, Quạt', supported: true },
        { name: 'Điều khiển bằng giọng nói', supported: true },
        { name: 'Cảm biến tự động hóa', supported: false },
        { name: 'Khóa cửa thông minh', supported: false },
        { name: 'Rèm cửa tự động', supported: false },
        { name: 'Màn hình trung tâm sang trọng', supported: false },
        { name: 'Camera an ninh thông minh', supported: false },
        { name: 'Nhạc thông minh', supported: false },
        { name: 'Hệ thống an ninh', supported: false },
        // { name: 'Chuông cửa có hình', supported: false },
        { name: 'Kiểm soát môi trường sống', supported: false },
        { name: 'Chiếu sáng cao cấp (Dim, Temp, RGB)', supported: false },
      ],
    },
    {
      title: 'NÂNG CAO',
      price: '40.000.000đ',
      color: 'orange-400',
      features: [
        { name: 'ĐK Chiếu sáng cơ bản (Bật/Tắt)', supported: true },
        { name: 'Điều khiển bình nước nóng', supported: true },
        { name: 'Điều khiển điều hòa, Tivi, Quạt', supported: true },
        { name: 'Điều khiển bằng giọng nói', supported: true },
        { name: 'Cảm biến tự động hóa', supported: true },
        { name: 'Khóa cửa thông minh', supported: true },
        { name: 'Rèm cửa tự động', supported: true },
        { name: 'Màn hình trung tâm sang trọng', supported: true },
        { name: 'Camera an ninh thông minh', supported: true },
        { name: 'Nhạc thông minh', supported: false },
        { name: 'Hệ thống an ninh', supported: false },
        // { name: 'Chuông cửa có hình', supported: false },
        { name: 'Kiểm soát môi trường sống', supported: false },
        { name: 'Chiếu sáng cao cấp (Dim, Temp, RGB)', supported: false },
      ],
    },
    {
      title: 'CAO CẤP',
      price: '80.000.000đ',
      color: 'red-500',
      features: [
        { name: 'ĐK Chiếu sáng cơ bản (Bật/Tắt)', supported: true },
        { name: 'Điều khiển bình nước nóng', supported: true },
        { name: 'Điều khiển điều hòa, Tivi, Quạt', supported: true },
        { name: 'Điều khiển bằng giọng nói', supported: true },
        { name: 'Cảm biến tự động hóa', supported: true },
        { name: 'Khóa cửa thông minh', supported: true },
        { name: 'Rèm cửa tự động', supported: true },
        { name: 'Màn hình trung tâm sang trọng', supported: true },
        { name: 'Camera an ninh thông minh', supported: true },
        { name: 'Nhạc thông minh', supported: true },
        { name: 'Hệ thống an ninh', supported: true },
        // { name: 'Chuông cửa có hình', supported: true },
        { name: 'Kiểm soát môi trường sống', supported: true },
        { name: 'Chiếu sáng cao cấp (Dim, Temp, RGB)', supported: true },
      ],
    },
  ];

  return (
    <>
      <TopBar />
      <NavBar />
      <div className="min-h-screen bg-blue-900 text-gray-800 flex items-center justify-center p-4">
        <div className="max-w-6xl w-full">
          {/* Header */}
          <div className="text-center mb-8">
            {/* <Image
              src="/aqara-logo.png"
              alt="Aqara Logo"
              width={100}
              height={50}
              className="mx-auto"
            /> */}
            <h1 className="text-2xl md:text-3xl font-bold text-yellow-400">
              GIẢI PHÁP NHÀ THÔNG MINH DÀNH CHO<br />
              CHUNG CƯ - CĂN HỘ
            </h1>
          </div>

          {/* Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-lg p-6 text-gray-900 shadow-lg bg-white`}
              >
                <p className={`text-xl text-center font-semibold mb-4 text-${pkg.color}`}>TÍNH NĂNG THÔNG MINH</p>
                <ul className="text-left space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="mr-2">
                        {feature.supported ? (
                          <span className="text-green-600">✔</span>
                        ) : (
                          <span className="text-red-600">✖</span>
                        )}
                      </span>
                      {feature.name}
                    </li>
                  ))}
                </ul>
                <div className={`mt-4 text-center bg-${pkg.color}`}>
                  <p className="text-lg font-bold">{pkg.title}</p>
                  <p className="text-base">CHỈ TỪ: {pkg.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          {/* <div className="text-center">
            <Image
              src="/thai-hung-logo.png"
              alt="Thai Hung Smarthome Logo"
              width={150}
              height={50}
              className="mx-auto mb-4"
            />
            <div className="flex justify-center gap-6 mb-4">
              <Image
                src="/apple-home.png"
                alt="Works with Apple Home"
                width={50}
                height={50}
              />
              <Image
                src="/google-assistant.png"
                alt="Works with Google Assistant"
                width={50}
                height={50}
              />
              <Image src="/matter.png" alt="Matter" width={50} height={50} />
            </div>
            <p className="text-white text-lg">HOTLINE: 0397 602 861</p>
          </div> */}
        </div>
      </div>
    </>
  );
}