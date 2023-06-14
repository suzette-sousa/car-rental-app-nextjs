'use client';

import { useState } from 'react';

import SearchManufacturer from './SearchManufacturer';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="search icon"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const updateSearchParams = (model: string, manufacturer: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (model) {
      params.set('model', model);
    } else {
      params.delete('model');
    }

    if (manufacturer) {
      params.set('manufacturer', manufacturer);
    } else {
      params.delete('manufacturer');
    }

    const newPathname = `${pathname}?${params.toString()}`;

    router.push(newPathname);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === '' && model === '') {
      return alert('Veuillez renseigner votre recherche');
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
