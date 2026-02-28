import "../styles/globals.css"

export const metadata = {
  title: "efreq — твои скины = деньги",
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}