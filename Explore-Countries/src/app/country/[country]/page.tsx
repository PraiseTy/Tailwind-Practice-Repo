'use client';
import React from 'react';
import { countryData } from '@/components/Country/CountryData';
import Image from 'next/image';
import { useTheme } from '@/provider/ThemeContext';
import { useRouter } from 'next/navigation';

interface CountryDetailsProps {
  params: { country: string | string[]; };
}

const CountryPage = ({ params }: CountryDetailsProps) => {
  const { isDarkMode } = useTheme();
  const router = useRouter();
  const country = countryData.find(c => c.alpha3Code === params.country);

  if (!country) {
    return <h1 className="text-center text-2xl">Country not found</h1>;
  }

  return (
    <div className="mt-10 container mx-auto ">
      <div onClick={() => router.back()}
           className="flex space-x-2 w-fit bg-[var(--color-navColor)]  rounded-sm px-6 py-1 cursor-pointer mb-10 shadow-2xl max-sm:ml-9 ">
        <Image src="/move-left.svg" alt="back-arrow" width={20} height={30} className={isDarkMode ? 'invert' : ''} />
        <p>Back</p>
      </div>
      <div className="flex flex-row max-sm:flex-col ">
        <div className="flex-1">
          {country.flags?.svg ?

            <div className="w-[550px] h-[350px] max-sm:w-[300px] max-sm:h-[200px] max-sm:mx-auto object-contain overflow-hidden">
              <div className=" max-sm:mx-auto">
                <Image src={country.flags.svg} alt="flag" layout="intrinsic" width={500} height={200}
                       className="max-sm:hidden object-contain w-full  h-full " />
                <Image src={country.flags.svg} alt="flag" width={300} height={200}
                       className="max-sm:block hidden  object-contain" />
              </div>
            </div>
            :
            <p>No country flag available</p>}
        </div>
        <div className="flex-1 max-sm:pl-10">
          <div className="flex flex-row max-sm:flex-col space-x-16">
            <div className='mt-10 space-y-3'>
              <h1 className='text-2xl font-bold'>{country.name}</h1>
              <p><span className="font-semibold">Native Name</span>: {country.nativeName}</p>
              <p><span className="font-semibold">Population</span>: {country.population}</p>
              <p><span className="font-semibold">Region</span>: {country.region}</p>
              <p><span className="font-semibold">Sub Region</span>: {country.subregion}</p>
              <p><span className="font-semibold">Capital</span>: {country.capital}</p>
            </div>
            <div className='mt-20 max-sm:mt-10 space-y-3'>
              <p><span className="font-semibold">Top Level Domain</span>: {country.topLevelDomain}</p>
              <p><span className="font-semibold">Currencies</span>: {country.currencies?.map(currency => currency.name)}
              </p>
              <p>
                <span
                className="font-semibold">Languages</span>: {country.languages?.map(language => `${language.name}`).join(' ')}
              </p>
            </div>
          </div>
          <div className="mt-10 flex max-sm:flex-col flex-wrap gap-2 items-center max-sm:items-start ">
            <p className="font-semibold ">Border Countries:</p>
            <div className="flex flex-wrap gap-2 ">
              {country.borders && country.borders.length > 0 ? (
                country.borders.map(borderCode => {
                  const borderCountry = countryData.find(c => c.alpha3Code === borderCode);
                  return borderCountry ? <button onClick={()=> router.push(`/country/${borderCountry.alpha3Code}`)} className=" bg-[var(--color-navColor)] px-3 py-1 rounded-sm shadow-2xl">{`${borderCountry.name}`}</button> :
                    <div>{`${borderCode}`}</div>;
                })
              ) : 'No border Countries'}
            </div>
            </div>
          </div>
        </div>
      </div>
      );
      };
      export default CountryPage;
