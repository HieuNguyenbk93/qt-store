'use client';
import { Alert } from "antd";
import { useState } from "react";

export default function FormContactNetlify() {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setStatus('pending');
      setError(null);
      const myForm = event.currentTarget;
      const formData = new FormData(myForm);
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(
          Array.from(formData.entries()).map(([key, value]) => [key, value.toString()])
        ).toString()
      });
      if (res.status === 200) {
        setStatus('ok');
      } else {
        setStatus('error');
        console.log(res);
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      console.log(e);
      setStatus('error');
      setError(`${e}`);
    }
  }

  return (
    <section id="contact" className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-8">Liên hệ với chúng tôi</h2>
      <form name="contact"  onSubmit={handleFormSubmit} data-netlify="true" className="max-w-xl mx-auto space-y-4">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" placeholder="Tên của bạn" required className="w-full p-3 border rounded-lg shadow-sm" />
        <input type="text" name="telephone" placeholder="Số điện thoại" required className="w-full p-3 border rounded-lg shadow-sm" />
        <input type="email" name="email" placeholder="Email" required className="w-full p-3 border rounded-lg shadow-sm" />
        <textarea name="message" placeholder="Nội dung" required className="w-full p-3 border rounded-lg shadow-sm h-32"></textarea>
        <button type="submit" disabled={status === 'pending'}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Gửi
        </button>
        {status === 'ok' && <Alert type="success" message="Gửi thành công" />}
        {status === 'error' && <Alert type="error" message={`Gửi thất bại ${error}`} />}
      </form>
    </section>
  )
}