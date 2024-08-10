import BotForm from '../components/BotForm'

export default function Home() {
  const { data: session } = useSession()

  return (
    <div className="p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Bot List</h1>
        {session ? (
          <button onClick={() => signOut()} className="bg-red-500 text-white p-2 rounded">
            Sign out
          </button>
        ) : (
          <a href="/auth/signin" className="bg-blue-500 text-white p-2 rounded">
            Sign in with Discord
          </a>
        )}
      </header>
      {session ? (
        <div>
          <h2 className="text-xl font-semibold">Welcome, {session.user.name}</h2>
          <BotForm />
        </div>
      ) : (
        <p>Please sign in to add your bots.</p>
      )}
    </div>
  )
          }
