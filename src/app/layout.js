import './globals.css'


export const metadata = {
  title: 'Quity',
  description: 'Miner site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
