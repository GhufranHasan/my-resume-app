import "./globals.css";
import Sidebar from "./component/sidebar";
import { personalData } from "../data/page-data";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Sidebar data={personalData} />
        {children}
      </body>
    </html>
  )
}
