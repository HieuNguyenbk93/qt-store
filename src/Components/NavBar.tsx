"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, Row, Col } from "antd"
import type { MenuProps } from "antd"
import {
  ProductOutlined,
  SolutionOutlined
} from "@ant-design/icons"
import { useRouter } from 'next/navigation';

type MenuItem = Required<MenuProps>['items'][number];

const NavBar = () => {

  const [current, setCurrent] = useState("home")
  const router = useRouter();

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    router.push(`/${e.key}`)
  };

  const menuItems: MenuItem[] = [
    { label: "Sản phẩm & Dịch vụ", key: 'service', icon: <ProductOutlined style={{ fontSize: '20px'}} /> },
    { label: "Liên hệ", key: 'contact', icon: <SolutionOutlined style={{ fontSize: '20px'}}/> }
  ]

  return (
    <div className="w-full max-w-full overflow-hidden py-3 top-0 z-50" style={{backgroundColor: 'lightgrey'}}>
      <div className="container mx-auto">
        <Row justify="space-between" align="middle">
          {/* Logo */}
          <Col xs={20} md={4}>
            <div className="flex items-center justify-center">
              <Link href="/" className="ml-4">
                <div className="flex items-baseline-last">
                  <span className="text-3xl font-bold text-red-500">QT</span>
                  <span className="text-xl font-bold">Home</span>
                </div>
              </Link>
            </div>
          </Col>
          {/* Navigation Menu */}
          <Col xs={4} md={20}>
            <div className="items-start">
              <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={menuItems}
                style={{ background: "transparent", borderBottom: "none", fontSize: '18px' }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default NavBar