import '../styles/style.scss'
import ReduxProvider from "../redux/provider.tsx";

export const metadata = {
  title: 'Quity',
  description: 'Miner site',
}

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body><ReduxProvider>{children}</ReduxProvider></body>
    </html>

  )
}

