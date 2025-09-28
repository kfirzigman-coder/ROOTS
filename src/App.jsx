import React from 'react'
import Header from './components/Header'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h2>
          <p className="text-gray-600">
            Welcome back! Here's what's happening with your databases today.
          </p>
        </div>
        <Dashboard />
      </main>
    </div>
  )
}

export default App