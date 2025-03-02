'use client'
import React from 'react';
import { countryData } from '@/components/Country/CountryData';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


interface CountryProps {
  selectedRegion: string;
  selectedQuery: string;
}

const Country = ({ selectedRegion, selectedQuery }: CountryProps) => {
  const router = useRouter();
  const filteredCountry = countryData.filter(country => {
    return (
      (selectedRegion ? country.region === selectedRegion : true) && (selectedQuery ? country.name.toLowerCase().includes(selectedQuery) : true)
    );
  });
  return (
    <div className="container mx-auto mt-20">
      <div
        className="grid grid-cols-4 max-sm:grid-cols-1 gap-30 md:gap-auto w-[1500px] max-sm:w-[400px] px-8 max-sm:px-20">
        {filteredCountry.map((country, index) => (
          <div className="bg-[var(--color-navColor)] mb-2 rounded-lg pb-10" onClick={()=> router.push(`/country/${country.alpha3Code}`)}>
            {country.flags?.svg ? (
              <Image
                src={country.flags.svg}
                alt={`${country.name} flag`}
                width={200}
                height={120}
                className="w-full rounded-t-lg h-[150px] object-cover"
              />
            ) : (
              <p>No flag available</p>
            )}
            <div className="space-y-5 mx-auto">
              <h1 className="mt-4 text-3xl max-sm:text-md pl-8 font-bold">{country.name}</h1>
              <div key={country.alpha3Code || index} className="pl-8">
                <p> <span className='font-semibold'>Population</span>: {country.population}</p>
                <p> <span className='font-semibold'>Region</span>: {country.region}</p>
                <p><span className='font-semibold'> Capital</span>: {country.capital}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Country;
