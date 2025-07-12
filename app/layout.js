import Navbar from '../components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16">{children}</main> {/* Add padding to push content below nav */}
      </body>
    </html>
  );
}
