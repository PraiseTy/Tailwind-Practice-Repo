import React from 'react';
import { countryData } from '@/components/Country/CountryData';
import Image from 'next/image';

const Country = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-30 md:gap-auto w-[1500px] max-sm:w-[400px] px-8 max-sm:px-20">
        {countryData.map((country, index) => (
          <div className="bg-[var(--color-navColor)] mb-2 rounded-lg pb-10  ">
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
            <div className='space-y-5 mx-auto'>
              <h1 className='mt-4 text-3xl max-sm:text-md pl-8 font-bold'>{country.name}</h1>
              <div key={country.alpha3Code || index} className='pl-8'>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Country;
