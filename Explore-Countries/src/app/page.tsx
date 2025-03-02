'use client'
import { Navbar, Search, Country } from '@/components';
import { useState } from 'react';


export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedQuery, setSelectedQuery] = useState('');

  return (
    <div>
      <Search setSelectedRegion={setSelectedRegion}  setSelectedQuery={setSelectedQuery} />
      <Country selectedRegion={selectedRegion}  selectedQuery={selectedQuery} />
    </div>
  );
}
