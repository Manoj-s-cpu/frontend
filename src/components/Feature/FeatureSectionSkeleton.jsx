import React from "react";

const FeatureSectionSkeleton = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 animate-pulse">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white shadow rounded-2xl p-6">
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSectionSkeleton;
