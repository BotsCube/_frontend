import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Submit() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission (e.g., display a success message or redirect)
    alert('Bot submitted successfully!')
    router.push('/')
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Submit Your Bot</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Bot Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded w-full"
            rows="4"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit Bot
        </button>
      </form>
    </div>
  )
}
