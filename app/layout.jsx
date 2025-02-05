import "./globals.css";
import Providers from "./Providers";
import Navbar from "./components/Navbar/navbar";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font";

export const metadata = {
  title: "Leonel Rivera",
  description: "Bienvenido a mi portafolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta property="og:url" content="https://leonel-rivera.com/" />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/1012060083720556645/1177680812821450783/Lautaro_Chini.png?ex=657363ba&is=6560eeba&hm=a3590524c107df5bc8e6dbc674b0ab93c589a540f43f5da8a62502845d392717&"
        />
      </head>

      <body
        className={`${GeistSans.className} body-bg  antialiased w-full flex flex-col justify-center items-center`}
      >
        <Providers>
          <Navbar />

          {children}

          <Analytics />
        </Providers>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
