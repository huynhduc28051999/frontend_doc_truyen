type Location = {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

type Profiles = {
  network: string;
  username: string;
  url: string;
}

type BasicInfo = {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  summary: string;
  location: Location;
  profiles: Profiles[];
}

export type { Location, Profiles, BasicInfo }