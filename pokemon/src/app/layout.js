import './globals.css'

export const metadata = {
  title: 'pokemon app',
  description: 'created by karuna yadav',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
