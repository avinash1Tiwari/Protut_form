import React from 'react';

const SessionInfoCard = () => {
  const stats = {
    minutesTaught: 5000,
    learners: 150,
    bookings: 300,
    reviews: {
      total: 68,
      rating: 4.4,
    },
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl text-black text-center font-bold mb-4">Statistics</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-700 font-semibold">Minutes Taught</span>
          <span className="text-gray-900">{stats.minutesTaught}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700 font-semibold">Learners</span>
          <span className="text-gray-900">{stats.learners}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700 font-semibold">Bookings</span>
          <span className="text-gray-900">{stats.bookings}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700 font-semibold">Total Reviews</span>
          <div className="text-gray-900">
            {stats.reviews.total} ({stats.reviews.rating}/5)
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionInfoCard;
