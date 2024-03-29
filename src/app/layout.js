import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme/ThemeProviderMode";
const inter = Inter({ subsets: ["latin"] });
import Providers from "./Context/Providers";
export const metadata = {
  title: "Food order web",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
