import { PhoneOutlined, MailOutlined } from "@ant-design/icons"

export default function TopBar() {
  return (
    <div className="bg-gray-600 text-white py-2 px-4">
      <div className="container mx-auto flex justify-end items-center text-sm">
        <div className="flex items-center mr-6">
          <PhoneOutlined className="mr-2" />
          <span>Phone : +84372085699</span>
        </div>
        <div className="flex items-center">
          <MailOutlined className="mr-2" />
          <span>Email: qtsmarthomebnh@gmail.com</span>
        </div>
      </div>
    </div>
  )
}
