import { IconType } from 'react-icons';
import { FiWifi, FiCoffee, FiHome, FiMonitor, FiShoppingBag, FiPhone, FiShield, FiCreditCard, FiUsers } from 'react-icons/fi';
import { PiHairDryer } from 'react-icons/pi';
import { GiWaterGallon, GiKeyCard, GiCctvCamera, GiTowel } from 'react-icons/gi';
import { FaCar, FaFirstAid, FaShuttleVan, FaSwimmingPool, FaPumpSoap } from 'react-icons/fa';
import { TbTeapot, TbAirConditioning } from 'react-icons/tb';
import { MdOutlineDesk } from 'react-icons/md';

export type Amenity = {
  name: string;
  icon: IconType;
  selected: boolean;
};

export const amenities: Amenity[] = [
  { name: 'Wi-Fi', icon: FiWifi, selected: false },
  { name: 'Coffee Machine', icon: FiCoffee, selected: false },
  { name: 'Air Conditioning', icon: TbAirConditioning, selected: false },
  { name: 'Housekeeping', icon: FiHome, selected: false },
  { name: 'TV', icon: FiMonitor, selected: false },
  { name: '24/7 hour security cameras', icon: GiCctvCamera , selected: false },
  { name: 'Key Card Access', icon: GiKeyCard , selected: false },
  { name: '24/7 hour Reception', icon: FiUsers , selected: false },
  { name: 'Hair Dryer', icon: PiHairDryer, selected: false },
  { name: 'Work Desk', icon:  MdOutlineDesk, selected: false },
  { name: 'Shuttle Service', icon: FaShuttleVan , selected: false },
  { name: 'Shopping Service', icon: FiShoppingBag, selected: false },
  { name: 'Free Parking', icon: FaCar, selected: false },
  { name: 'Water Dispenser', icon: GiWaterGallon, selected: false },
  { name: 'Telephone', icon: FiPhone, selected: false },
  { name: 'Kettle', icon: TbTeapot, selected: false },
  { name: 'Safety Deposit Box', icon: FiShield, selected: false },
  { name: 'First Aid Station', icon: FaFirstAid, selected: false },
  { name: 'Swimming Pool', icon: FaSwimmingPool, selected: false },
  { name: 'Credit Card Payment', icon: FiCreditCard, selected: false },
  { name: 'Towels', icon: GiTowel, selected: false },
  { name: 'Soap', icon: FaPumpSoap, selected: false },
];