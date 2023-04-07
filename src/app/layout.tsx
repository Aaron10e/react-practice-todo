import './globals.css'

export const metadata = {
  title: 'Todo Next App',
  description: 'Todo Next App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
