import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Database, Settings, User, Bell } from 'lucide-react'

export default function Header() {
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Database className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Base44</h1>
                <p className="text-xs text-gray-500">Database Management</p>
              </div>
            </div>
            <Badge variant="secondary" className="hidden sm:inline-flex">
              v2.1.0
            </Badge>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#dashboard" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Dashboard
            </a>
            <a href="#databases" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Databases
            </a>
            <a href="#analytics" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Analytics
            </a>
            <a href="#api" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              API
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}