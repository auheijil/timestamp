import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Clock } from 'lucide-react'
import RealtimeConverter from './components/RealtimeConverter'
import TimestampToDateConverter from './components/TimestampToDateConverter'
import DateToTimestampConverter from './components/DateToTimestampConverter'
import DetailedDateToTimestampConverter from './components/DetailedDateToTimestampConverter'
import { TimeZoneProvider } from './contexts/TimeZoneContext'

function App() {
  return (
    <TimeZoneProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <nav className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-blue-500 mr-2" />
                  <span className="text-xl font-semibold">Timestamp.lol</span>
                </div>
                <div className="flex space-x-4">
                  <Link to="/" className="text-gray-700 hover:text-blue-500">Realtime</Link>
                  <Link to="/timestamp-to-date" className="text-gray-700 hover:text-blue-500">Timestamp to Date</Link>
                  <Link to="/date-to-timestamp" className="text-gray-700 hover:text-blue-500">Date to Timestamp</Link>
                  <Link to="/detailed-date-to-timestamp" className="text-gray-700 hover:text-blue-500">Epoch Converter</Link>
                </div>
              </div>
            </div>
          </nav>
          <div className="container mx-auto px-6 py-8">
            <Routes>
              <Route path="/" element={<RealtimeConverter />} />
              <Route path="/timestamp-to-date" element={<TimestampToDateConverter />} />
              <Route path="/date-to-timestamp" element={<DateToTimestampConverter />} />
              <Route path="/detailed-date-to-timestamp" element={<DetailedDateToTimestampConverter />} />
            </Routes>
          </div>
        </div>
      </Router>
    </TimeZoneProvider>
  )
}

export default App
