import "./globals.css";

export const metadata = {
  title: "Loyanox Portfolio",
  description: "Professional portfolio showcasing my work and services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-be-installed="true">
      <body
        data-liner-extension-version="7.16.7"
        data-new-gr-c-s-check-loaded="14.1232.0"
        data-gr-ext-installed=""
      >
        {children}
      </body>
    </html>
  );
}
