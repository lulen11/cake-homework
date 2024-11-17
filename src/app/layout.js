import { ThemeProvider } from "./components/ThemeContext/ThemeContext";
import Header from "./components/Header/Header";
import "./globals.css";

export const metadata = {
  title: "Lara's Cake Homework",
  description: "Lil homework task after Frontend Developer Cake Interview",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
