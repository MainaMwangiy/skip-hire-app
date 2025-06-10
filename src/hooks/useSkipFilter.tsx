import { useState } from 'react';
import { Skip, Filters } from '@/types/skip';

export const useSkipFilter = (skips: Skip[]) => {
    const [filters, setFilters] = useState<Filters>({
        skipSize: 'all',
        priceRange: 'all',
        roadPlacement: 'all',
        wasteType: 'all'
    });

    const filteredSkips = skips.filter(skip => {
        if (filters.skipSize !== 'all' && skip.size.toString() !== filters.skipSize) return false;
        if (filters.roadPlacement === 'road' && !skip.allowed_on_road) return false;
        if (filters.roadPlacement === 'private' && skip.allowed_on_road) return false;
        if (filters.wasteType === 'heavy' && !skip.allows_heavy_waste) return false;
        if (filters.wasteType === 'light' && skip.allows_heavy_waste) return false;
        return true;
    });

    return { filters, setFilters, filteredSkips };
};