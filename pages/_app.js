import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <a href="/" className="mr-4">Home</a>
          <a href="/submit">Submit Bot</a>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        <Component {...pageProps} />
      </main>
    </div>
  )
}
