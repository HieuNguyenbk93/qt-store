import NavBar from "@/Components/NavBar";
import TopBar from "@/Components/TopBar";

export default function Contact() {
  return (
    <div className="bg-white">
      <TopBar />
      <NavBar />
      {/* Form liên hệ */}
      <section id="contact" className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-8">Liên hệ với chúng tôi</h2>
        <form name="contact" method="POST" data-netlify="true" className="max-w-xl mx-auto space-y-4">
          <input type="text" name="name" placeholder="Tên của bạn" required className="w-full p-3 border rounded-lg shadow-sm" />
          <input type="text" name="telephone" placeholder="Số điện thoại" required className="w-full p-3 border rounded-lg shadow-sm" />
          <input type="email" name="email" placeholder="Email" required className="w-full p-3 border rounded-lg shadow-sm" />
          <textarea name="message" placeholder="Nội dung" required className="w-full p-3 border rounded-lg shadow-sm h-32"></textarea>
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Gửi</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © 2025 QT Smart Home. All rights reserved.
      </footer>
    </div>
  )
}