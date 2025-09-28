import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Database, 
  Users, 
  Activity, 
  TrendingUp, 
  Server, 
  Shield, 
  Zap,
  Plus,
  MoreHorizontal,
  CheckCircle,
  AlertCircle,
  Clock
} from 'lucide-react'

export default function Dashboard() {
  const stats = [
    {
      title: "Total Databases",
      value: "12",
      change: "+2 this month",
      icon: Database,
      color: "text-blue-600"
    },
    {
      title: "Active Users",
      value: "1,247",
      change: "+12% from last month",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "API Requests",
      value: "45.2K",
      change: "+8% from last week",
      icon: Activity,
      color: "text-purple-600"
    },
    {
      title: "Uptime",
      value: "99.9%",
      change: "Last 30 days",
      icon: TrendingUp,
      color: "text-emerald-600"
    }
  ]

  const databases = [
    {
      name: "Production DB",
      status: "active",
      size: "2.4 GB",
      connections: 45,
      lastBackup: "2 hours ago"
    },
    {
      name: "Staging DB",
      status: "active",
      size: "1.8 GB",
      connections: 12,
      lastBackup: "4 hours ago"
    },
    {
      name: "Analytics DB",
      status: "maintenance",
      size: "5.2 GB",
      connections: 0,
      lastBackup: "1 day ago"
    },
    {
      name: "Development DB",
      status: "active",
      size: "892 MB",
      connections: 8,
      lastBackup: "6 hours ago"
    }
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'maintenance':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
      case 'maintenance':
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Maintenance</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Databases List */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Database Overview</CardTitle>
                <CardDescription>
                  Manage and monitor your database instances
                </CardDescription>
              </div>
              <Button size="sm" className="gap-2">
                <Plus className="h-4 w-4" />
                New Database
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {databases.map((db, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(db.status)}
                      <div>
                        <h4 className="font-medium text-gray-900">{db.name}</h4>
                        <p className="text-sm text-gray-500">Size: {db.size}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{db.connections} connections</p>
                      <p className="text-xs text-gray-500">Backup: {db.lastBackup}</p>
                    </div>
                    {getStatusBadge(db.status)}
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
              <CardDescription>
                Common database operations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start gap-3" variant="outline">
                <Database className="h-4 w-4" />
                Create Database
              </Button>
              <Button className="w-full justify-start gap-3" variant="outline">
                <Server className="h-4 w-4" />
                Backup All
              </Button>
              <Button className="w-full justify-start gap-3" variant="outline">
                <Shield className="h-4 w-4" />
                Security Scan
              </Button>
              <Button className="w-full justify-start gap-3" variant="outline">
                <Zap className="h-4 w-4" />
                Performance Test
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">System Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">API Status</span>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  Operational
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Database Cluster</span>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  Healthy
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Backup Service</span>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  Running
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Monitoring</span>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  Active
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}