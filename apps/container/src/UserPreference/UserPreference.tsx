



import { useEffect, useState } from 'react'
import Select from 'react-select'

const options = [
  {label: 'India', value: 'India'},
  {label: 'Singapore', value: 'Singapore'},
  {label: 'Malaysia', value: 'Malaysia'}
];

export function UserPreference() {
  const [preference, setPreference] = useState<Preference>();

  useEffect(() => {
    const preferenceChange = new CustomEvent('preference-change', {detail: preference });
    document.dispatchEvent(preferenceChange);
    console.log('event dispatched', preferenceChange.detail);
  }, [preference]);

    return (
        <Select
        options={options}
        placeholder='Select Country'
        value={preference && {label: preference?.country, value: preference?.country}}
        onChange={(newValue) => setPreference({country: `${newValue?.value}` })}
        />
    )
}

export interface Preference {
  country: string;
}