import { CountryInfo } from './countryInfo';

export interface Report {
    country: string;
    countryInfo:CountryInfo;
    cases: number;
    todayCases: number;
    deaths: string;
    todayDeaths: string;
    recovered: number;
    active: number;
    casesPerOneMillion: string;
  }