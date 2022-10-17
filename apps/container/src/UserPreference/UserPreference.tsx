



import Select from 'react-select'

const options = [
  { value: 'india', label: 'India' },
  { value: 'singapore', label: 'Singapore' },
  { value: 'malaysia', label: 'Malaysia' }
]

export function UserPreference() {
    return (
        <Select options={options} placeholder='Select Country' />
    )
}