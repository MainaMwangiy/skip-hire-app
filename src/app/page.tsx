'use client';

import React, { useState, useEffect } from 'react';
import { Stepper } from '@/components/Stepper';
import { FilterSection } from '@/components/FilterSection';
import { SkipCard } from '@/components/SkipCard';
import { SkipDetails } from '@/components/SkipDetails';
import { Footer } from '@/components/Footer';
import { useSkipFilter } from '@/hooks/useSkipFilter';
import { fetchSkipsData } from '@/lib/data';
import { Skip } from '@/types/skip';
import { Truck } from 'lucide-react';

export default function Home() {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  const { filters, setFilters, filteredSkips } = useSkipFilter(skips);
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  useEffect(() => {
    const loadSkips = async () => {
      try {
        const data = await fetchSkipsData();
        setSkips(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load skips:', error);
        setLoading(false);
      }
    };

    loadSkips();
  }, []);

  useEffect(() => {
    if (filteredSkips.length > 0 && (!selectedSkip || !filteredSkips.find(s => s.id === selectedSkip.id))) {
      setSelectedSkip(filteredSkips[0]);
    }
  }, [filteredSkips, selectedSkip]);

  const handleBack = () => {
    console.log('Going back to previous step');
  };

  const handleContinue = () => {
    if (selectedSkip) {
      console.log('Continuing with selected skip:', selectedSkip);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Truck className="w-12 h-12 mx-auto mb-4 text-blue-500 animate-pulse" />
          <p className="text-gray-600 dark:text-gray-400">Loading skip options...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Stepper />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Choose Your Skip Size</h1>
          <p className="text-gray-600 dark:text-gray-400">Select the perfect skip for your project from our available options</p>
        </div>
        <FilterSection filters={filters} setFilters={setFilters} />
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-80 xl:w-96">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Available Skips</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">{filteredSkips.length} options</p>
              </div>
              <div className="max-h-[600px] overflow-y-auto">
                {filteredSkips.length === 0 ? (
                  <div className="p-8 text-center">
                    <div className="text-gray-400 dark:text-gray-500 mb-2">
                      <Truck className="w-12 h-12 mx-auto" />
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">No skips match your filters</p>
                  </div>
                ) : (
                  <div className="p-4 space-y-3">
                    {filteredSkips.map((skip) => (
                      <SkipCard
                        key={skip.id}
                        skip={skip}
                        isSelected={selectedSkip?.id === skip.id}
                        onClick={() => setSelectedSkip(skip)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <SkipDetails skip={selectedSkip} />
        </div>
      </div>
      <Footer
        selectedSkip={selectedSkip}
        onBack={handleBack}
        onContinue={handleContinue}
      />
    </div>
  );
}