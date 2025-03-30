import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-be-installed="true">
      <body
        data-liner-extension-version="7.16.5"
        data-new-gr-c-s-check-loaded="14.1229.0"
        data-gr-ext-installed=""
      >
        {children}
      </body>
    </html>
  );
}
