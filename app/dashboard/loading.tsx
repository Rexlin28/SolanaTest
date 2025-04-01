export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-16 bg-white border-b border-gray-200"></div>
      <div className="container mx-auto px-4 py-8">
        <div className="h-32 bg-gray-200 rounded-lg animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="md:col-span-2 space-y-6">
            <div className="h-64 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="h-96 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
          <div>
            <div className="h-80 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

