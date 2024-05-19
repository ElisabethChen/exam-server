const stations = [
    {
        "code": "AAA",
        "country": "PF",
        "state": "",
        "name": "Anaa Airport"
    },
    {
        "code": "AAD",
        "country": "SO",
        "state": "",
        "name": "Adado Airport"
    },
    {
        "code": "AAE",
        "country": "DZ",
        "state": "",
        "name": "Rabah Bitat Airport"
    },
    {
        "code": "AAK",
        "country": "KI",
        "state": "",
        "name": "Aranuka Airport"
    },
    {
        "code": "AAL",
        "country": "DK",
        "state": "",
        "name": "Aalborg Airport"
    },
    {
        "code": "AAM",
        "country": "ZA",
        "state": "",
        "name": "Mala Mala Airport"
    },
    {
        "code": "AAN",
        "country": "AE",
        "state": "",
        "name": "Al Ain International Airport"
    },
    {
        "code": "AAP",
        "country": "ID",
        "state": "",
        "name": "Aji Pangeran Tumenggung Airport"
    },
    {
        "code": "AAQ",
        "country": "RU",
        "state": "",
        "name": "Vityazevo Airport"
    },
    {
        "code": "AAR",
        "country": "DK",
        "state": "",
        "name": "Aarhus Airport"
    },
    {
        "code": "AAT",
        "country": "CN",
        "state": "",
        "name": "Altay Airport"
    },
    {
        "code": "AAX",
        "country": "BR",
        "state": "MG",
        "name": "Araxa Airport"
    },
    {
        "code": "AAY",
        "country": "YE",
        "state": "",
        "name": "Al Ghaydah Airport"
    },
    {
        "code": "AAZ",
        "country": "GT",
        "state": "",
        "name": "Quetzaltenango Airport"
    },
    {
        "code": "ABA",
        "country": "RU",
        "state": "",
        "name": "Abakan Airport"
    },
    {
        "code": "ABB",
        "country": "NG",
        "state": "",
        "name": "Asaba International Airport"
    },
    {
        "code": "ABD",
        "country": "IR",
        "state": "",
        "name": "Abadan Airport"
    },
    {
        "code": "ABE",
        "country": "US",
        "state": "PA",
        "name": "Lehigh Valley International Airport"
    },
    {
        "code": "ABF",
        "country": "KI",
        "state": "",
        "name": "Abaiang Airport"
    },
    {
        "code": "ABI",
        "country": "US",
        "state": "TX",
        "name": "Abilene Regional Airport"
    },
    {
        "code": "ABJ",
        "country": "CI",
        "state": "",
        "name": "Felix Houphouet-Boigny Airport"
    },
    {
        "code": "ABL",
        "country": "US",
        "state": "AK",
        "name": "Ambler Airport"
    },
    {
        "code": "ABM",
        "country": "AU",
        "state": "QL",
        "name": "Northern Peninsula Airport"
    },
    {
        "code": "ABQ",
        "country": "US",
        "state": "NM",
        "name": "International Sunport Airport"
    },
    {
        "code": "ABR",
        "country": "US",
        "state": "SD",
        "name": "Aberdeen Regional Airport"
    },
    {
        "code": "ABS",
        "country": "EG",
        "state": "",
        "name": "Abu Simbel Airport"
    },
    {
        "code": "ABT",
        "country": "SA",
        "state": "",
        "name": "Al-Aqiq Airport"
    },
    {
        "code": "ABU",
        "country": "ID",
        "state": "",
        "name": "Haliwen Airport"
    },
    {
        "code": "ABV",
        "country": "NG",
        "state": "",
        "name": "Nnamdi Azikiwe International Airport"
    },
    {
        "code": "ABX",
        "country": "AU",
        "state": "NS",
        "name": "Albury Airport"
    },
    {
        "code": "ABY",
        "country": "US",
        "state": "GA",
        "name": "Southwest Georgia Regional Airport"
    },
    {
        "code": "ABZ",
        "country": "GB",
        "state": "",
        "name": "Dyce Airport"
    },
    {
        "code": "ACA",
        "country": "MX",
        "state": "",
        "name": "Juan N. Alvarez International Airport"
    },
    {
        "code": "ACC",
        "country": "GH",
        "state": "",
        "name": "Kotoka International Airport"
    },
    {
        "code": "ACE",
        "country": "ES",
        "state": "",
        "name": "Lanzarote Airport"
    },
    {
        "code": "ACF",
        "country": "CN",
        "state": "",
        "name": "Alaer Talimu Airport"
    },
    {
        "code": "ACH",
        "country": "CH",
        "state": "",
        "name": "Saint Gallen-Altenrhein Airport"
    },
    {
        "code": "ACI",
        "country": "GG",
        "state": "",
        "name": "Alderney Airport"
    },
    {
        "code": "ACK",
        "country": "US",
        "state": "MA",
        "name": "Nantucket Memorial Airport"
    },
    {
        "code": "ACP",
        "country": "IR",
        "state": "",
        "name": "Sahand Airport"
    },
    {
        "code": "ACT",
        "country": "US",
        "state": "TX",
        "name": "Waco Regional Airport"
    },
    {
        "code": "ACV",
        "country": "US",
        "state": "CA",
        "name": "Arcata Airport"
    },
    {
        "code": "ACX",
        "country": "CN",
        "state": "",
        "name": "Xingyi Airport"
    },
    {
        "code": "ACY",
        "country": "US",
        "state": "NJ",
        "name": "Atlantic City International Airport"
    },
    {
        "code": "ACZ",
        "country": "IR",
        "state": "",
        "name": "Zabol Airport"
    },
    {
        "code": "ADA",
        "country": "TR",
        "state": "",
        "name": "Sakirpasa Airport"
    },
    {
        "code": "ADB",
        "country": "TR",
        "state": "",
        "name": "Adnan Menderes Airport"
    },
    {
        "code": "ADD",
        "country": "ET",
        "state": "",
        "name": "Bole International Airport"
    },
    {
        "code": "ADE",
        "country": "YE",
        "state": "",
        "name": "Aden International Airport"
    },
    {
        "code": "ADF",
        "country": "TR",
        "state": "",
        "name": "Adiyaman Airport"
    },
    {
        "code": "ADJ",
        "country": "JO",
        "state": "",
        "name": "Marka International Airport"
    },
    {
        "code": "ADK",
        "country": "US",
        "state": "AK",
        "name": "Adak Island Airport"
    },
    {
        "code": "ADL",
        "country": "AU",
        "state": "SA",
        "name": "Adelaide International Airport"
    },
    {
        "code": "ADQ",
        "country": "US",
        "state": "AK",
        "name": "Kodiak Airport"
    },
    {
        "code": "ADU",
        "country": "IR",
        "state": "",
        "name": "Ardabil Airport"
    },
    {
        "code": "ADZ",
        "country": "CO",
        "state": "",
        "name": "Gustavo Rojas Pinilla International Air"
    },
    {
        "code": "AEA",
        "country": "KI",
        "state": "",
        "name": "Abemama Airport"
    },
    {
        "code": "AEB",
        "country": "CN",
        "state": "",
        "name": "Youjiang Airport"
    },
    {
        "code": "AEM",
        "country": "RU",
        "state": "",
        "name": "Amgu Airport"
    },
    {
        "code": "AEP",
        "country": "AR",
        "state": "BA",
        "name": "Jorge Newbery Airport"
    },
    {
        "code": "AER",
        "country": "RU",
        "state": "",
        "name": "Sochi International"
    },
    {
        "code": "AES",
        "country": "NO",
        "state": "",
        "name": "Vigra Airport"
    },
    {
        "code": "AET",
        "country": "US",
        "state": "AK",
        "name": "Allakaket Airport"
    },
    {
        "code": "AEU",
        "country": "IR",
        "state": "",
        "name": "Abu Musa Island Airport"
    },
    {
        "code": "AEX",
        "country": "US",
        "state": "LA",
        "name": "Alexandria International Airport"
    },
    {
        "code": "AEY",
        "country": "IS",
        "state": "",
        "name": "Akureyri Airport"
    },
    {
        "code": "AFA",
        "country": "AR",
        "state": "MD",
        "name": "San Rafael Airport"
    },
    {
        "code": "AFL",
        "country": "BR",
        "state": "MT",
        "name": "Oswaldo Marques Dias Airport"
    },
    {
        "code": "AGA",
        "country": "MA",
        "state": "",
        "name": "Al Massira Airport"
    },
    {
        "code": "AGH",
        "country": "SE",
        "state": "",
        "name": "Angelholm/Helsingborg Airport"
    },
    {
        "code": "AGM",
        "country": "GL",
        "state": "",
        "name": "Ammassalik Heliport"
    },
    {
        "code": "AGN",
        "country": "US",
        "state": "AK",
        "name": "Angoon Sea Plane Base"
    },
    {
        "code": "AGP",
        "country": "ES",
        "state": "",
        "name": "Malaga Airport"
    },
    {
        "code": "AGR",
        "country": "IN",
        "state": "UP",
        "name": "Agra Airport"
    },
    {
        "code": "AGS",
        "country": "US",
        "state": "GA",
        "name": "Augusta Regional (Bush Field) Airport"
    },
    {
        "code": "AGT",
        "country": "PY",
        "state": "",
        "name": "Guarani International Airport"
    },
    {
        "code": "AGU",
        "country": "MX",
        "state": "",
        "name": "Jesus Teran Peredo International Airpor"
    },
    {
        "code": "AGX",
        "country": "IN",
        "state": "LD",
        "name": "Agatti Island Airport"
    },
    {
        "code": "AGY",
        "country": "DE",
        "state": "",
        "name": "Augsburg Hbf Railway Station"
    },
    {
        "code": "AHB",
        "country": "SA",
        "state": "",
        "name": "Abha Airport"
    },
    {
        "code": "AHE",
        "country": "PF",
        "state": "",
        "name": "Ahe Airport"
    },
    {
        "code": "AHJ",
        "country": "CN",
        "state": "",
        "name": "Aba/Hongyuan Airport"
    },
    {
        "code": "AHO",
        "country": "IT",
        "state": "",
        "name": "Fertilia Airport"
    },
    {
        "code": "AHU",
        "country": "MA",
        "state": "",
        "name": "Cherif El Idrissi Airport"
    },
    {
        "code": "AIA",
        "country": "US",
        "state": "NE",
        "name": "Alliance Municipal Airport"
    },
    {
        "code": "AIN",
        "country": "US",
        "state": "AK",
        "name": "Wainwright Airport"
    },
    {
        "code": "AIR",
        "country": "BR",
        "state": "MT",
        "name": "Aripuana Airport"
    },
    {
        "code": "AIS",
        "country": "KI",
        "state": "",
        "name": "Arorae Airport"
    },
    {
        "code": "AIT",
        "country": "CK",
        "state": "",
        "name": "Aitutaki Island Airport"
    },
    {
        "code": "AJA",
        "country": "FR",
        "state": "",
        "name": "Napoleon Bonaparte Airport"
    },
    {
        "code": "AJF",
        "country": "SA",
        "state": "",
        "name": "Jouf Airport"
    },
    {
        "code": "AJI",
        "country": "TR",
        "state": "",
        "name": "Agri Airport"
    },
    {
        "code": "AJL",
        "country": "IN",
        "state": "MZ",
        "name": "Lengpui Airport"
    },
    {
        "code": "AJN",
        "country": "KM",
        "state": "",
        "name": "Ouani Airport"
    },
    {
        "code": "AJR",
        "country": "SE",
        "state": "",
        "name": "Arvidsjaur Airport"
    },
    {
        "code": "AJU",
        "country": "BR",
        "state": "SE",
        "name": "Santa Maria Airport"
    },
    {
        "code": "AJY",
        "country": "NE",
        "state": "",
        "name": "Manu Dayak International Airport"
    },
    {
        "code": "AKA",
        "country": "CN",
        "state": "",
        "name": "Fuqiang Airport"
    },
    {
        "code": "AKB",
        "country": "US",
        "state": "AK",
        "name": "Atka Airport"
    },
    {
        "code": "AKJ",
        "country": "JP",
        "state": "",
        "name": "Asahikawa Airport"
    },
    {
        "code": "AKK",
        "country": "US",
        "state": "AK",
        "name": "Akhiok Airport"
    },
    {
        "code": "AKL",
        "country": "NZ",
        "state": "",
        "name": "Auckland International Airport"
    },
    {
        "code": "AKN",
        "country": "US",
        "state": "AK",
        "name": "King Salmon Airport"
    },
    {
        "code": "AKP",
        "country": "US",
        "state": "AK",
        "name": "Anaktuvuk Pass Airport"
    },
    {
        "code": "AKR",
        "country": "NG",
        "state": "",
        "name": "Akure Airport"
    },
    {
        "code": "AKS",
        "country": "SB",
        "state": "",
        "name": "Gwaunaru'u Airport"
    },
    {
        "code": "AKU",
        "country": "CN",
        "state": "",
        "name": "Aksu Airport"
    },
    {
        "code": "AKV",
        "country": "CA",
        "state": "QC",
        "name": "Akulivik Airport"
    },
    {
        "code": "AKX",
        "country": "KZ",
        "state": "",
        "name": "Aktobe Airport"
    },
    {
        "code": "AKY",
        "country": "MM",
        "state": "",
        "name": "Sittwe Airport"
    },
    {
        "code": "ALA",
        "country": "KZ",
        "state": "",
        "name": "Almaty International Airport"
    },
    {
        "code": "ALB",
        "country": "US",
        "state": "NY",
        "name": "Albany International Airport"
    },
    {
        "code": "ALC",
        "country": "ES",
        "state": "",
        "name": "Alicante Airport"
    },
    {
        "code": "ALF",
        "country": "NO",
        "state": "",
        "name": "Alta Airport"
    },
    {
        "code": "ALG",
        "country": "DZ",
        "state": "",
        "name": "Houari Boumediene Airport"
    },
    {
        "code": "ALH",
        "country": "AU",
        "state": "WA",
        "name": "Albany Airport"
    },
    {
        "code": "ALO",
        "country": "US",
        "state": "IA",
        "name": "Waterloo Regional Airport"
    },
    {
        "code": "ALP",
        "country": "SY",
        "state": "",
        "name": "Aleppo International Airport"
    },
    {
        "code": "ALQ",
        "country": "BR",
        "state": "RS",
        "name": "Guadencio Machado Ramos Airport"
    },
    {
        "code": "ALS",
        "country": "US",
        "state": "CO",
        "name": "San Luis Valley Regional Airport"
    },
    {
        "code": "ALW",
        "country": "US",
        "state": "WA",
        "name": "Walla Walla Regional Airport"
    },
    {
        "code": "ALZ",
        "country": "US",
        "state": "AK",
        "name": "Alitak Sea Plane Base"
    },
    {
        "code": "AMA",
        "country": "US",
        "state": "TX",
        "name": "Rick Husband International Airport"
    },
    {
        "code": "AMD",
        "country": "IN",
        "state": "GJ",
        "name": "Sardar VallabhBhai Patel Airport"
    },
    {
        "code": "AMH",
        "country": "ET",
        "state": "",
        "name": "Arba Minch Airport"
    },
    {
        "code": "AMM",
        "country": "JO",
        "state": "",
        "name": "Queen Alia International Airport"
    },
    {
        "code": "AMQ",
        "country": "ID",
        "state": "",
        "name": "Pattimura Airport"
    },
    {
        "code": "AMS",
        "country": "NL",
        "state": "",
        "name": "Schiphol Airport"
    },
    {
        "code": "ANA",
        "country": "KE",
        "state": "",
        "name": "Angama Airport"
    },
    {
        "code": "ANC",
        "country": "US",
        "state": "AK",
        "name": "Ted Stevens International Airport"
    },
    {
        "code": "ANF",
        "country": "CL",
        "state": "",
        "name": "Cerro Moreno Airport"
    },
    {
        "code": "ANI",
        "country": "US",
        "state": "AK",
        "name": "Aniak Airport"
    },
    {
        "code": "ANR",
        "country": "BE",
        "state": "",
        "name": "Antwerp International Airport"
    },
    {
        "code": "ANU",
        "country": "AG",
        "state": "",
        "name": "V.C. Bird International Airport"
    },
    {
        "code": "ANX",
        "country": "NO",
        "state": "",
        "name": "Andoya Airport"
    },
    {
        "code": "AOE",
        "country": "TR",
        "state": "",
        "name": "Anadolu Airport"
    },
    {
        "code": "AOG",
        "country": "CN",
        "state": "",
        "name": "Teng'ao Airport"
    },
    {
        "code": "AOI",
        "country": "IT",
        "state": "",
        "name": "Falconara Airport"
    },
    {
        "code": "AOJ",
        "country": "JP",
        "state": "",
        "name": "Aomori Airport"
    },
    {
        "code": "AOK",
        "country": "GR",
        "state": "",
        "name": "Karpathos Airport"
    },
    {
        "code": "AOO",
        "country": "US",
        "state": "PA",
        "name": "Blair County Airport"
    },
    {
        "code": "AOQ",
        "country": "GL",
        "state": "",
        "name": "Aappilattoq-Upernavik Heliport"
    },
    {
        "code": "AOR",
        "country": "MY",
        "state": "",
        "name": "Sultan Abdul Halim Airport"
    },
    {
        "code": "AOS",
        "country": "US",
        "state": "AK",
        "name": "Amook Bay Sea Plane Base"
    },
    {
        "code": "APK",
        "country": "PF",
        "state": "",
        "name": "Apataki Airport"
    },
    {
        "code": "APL",
        "country": "MZ",
        "state": "",
        "name": "Nampula Airport"
    },
    {
        "code": "APN",
        "country": "US",
        "state": "MI",
        "name": "Alpena CountyRegional Airport"
    },
    {
        "code": "APO",
        "country": "CO",
        "state": "",
        "name": "Carepa-Antonio Roldan Betancourt Airpor"
    },
    {
        "code": "APW",
        "country": "WS",
        "state": "",
        "name": "Faleolo International Airport"
    },
    {
        "code": "AQG",
        "country": "CN",
        "state": "",
        "name": "Tianzhushan Airport"
    },
    {
        "code": "AQI",
        "country": "SA",
        "state": "",
        "name": "Hafar al Batin"
    },
    {
        "code": "AQJ",
        "country": "JO",
        "state": "",
        "name": "King Hussein International Airport"
    },
    {
        "code": "AQP",
        "country": "PE",
        "state": "",
        "name": "Rodriguez Ballon International Airport"
    },
    {
        "code": "ARC",
        "country": "US",
        "state": "AK",
        "name": "Arctic Village Airport"
    },
    {
        "code": "ARD",
        "country": "ID",
        "state": "",
        "name": "Mali Airport"
    },
    {
        "code": "ARH",
        "country": "RU",
        "state": "",
        "name": "Talagi Airport"
    },
    {
        "code": "ARI",
        "country": "CL",
        "state": "",
        "name": "Chacalluta Airport"
    },
    {
        "code": "ARK",
        "country": "TZ",
        "state": "",
        "name": "Arusha Airport"
    },
    {
        "code": "ARM",
        "country": "AU",
        "state": "NS",
        "name": "Armidale Airport"
    },
    {
        "code": "ARN",
        "country": "SE",
        "state": "",
        "name": "Arlanda Airport"
    },
    {
        "code": "ART",
        "country": "US",
        "state": "NY",
        "name": "Watertown International Airport"
    },
    {
        "code": "ARU",
        "country": "BR",
        "state": "SP",
        "name": "Dario Guarita Airport"
    },
    {
        "code": "ARX",
        "country": "BR",
        "state": "CE",
        "name": "Dragao do Mar Airport"
    },
    {
        "code": "ASB",
        "country": "TM",
        "state": "",
        "name": "Ashgabat International Airport"
    },
    {
        "code": "ASE",
        "country": "US",
        "state": "CO",
        "name": "Pitkin County Airport"
    },
    {
        "code": "ASF",
        "country": "RU",
        "state": "",
        "name": "Astrakhan Airport"
    },
    {
        "code": "ASI",
        "country": "SH",
        "state": "",
        "name": "Ascension Island Royal Air Force Statio"
    },
    {
        "code": "ASJ",
        "country": "JP",
        "state": "",
        "name": "Amami Airport"
    },
    {
        "code": "ASM",
        "country": "ER",
        "state": "",
        "name": "Asmara International Airport"
    },
    {
        "code": "ASO",
        "country": "ET",
        "state": "",
        "name": "Asosa Airport"
    },
    {
        "code": "ASP",
        "country": "AU",
        "state": "NT",
        "name": "Alice Springs Airport"
    },
    {
        "code": "ASR",
        "country": "TR",
        "state": "",
        "name": "Erkilet Airport"
    },
    {
        "code": "ASU",
        "country": "PY",
        "state": "",
        "name": "Silvio Pettirossi International Airport"
    },
    {
        "code": "ASV",
        "country": "KE",
        "state": "",
        "name": "Amboseli Airport"
    },
    {
        "code": "ASW",
        "country": "EG",
        "state": "",
        "name": "Aswan International Airport"
    },
    {
        "code": "ATA",
        "country": "PE",
        "state": "",
        "name": "German Arias Graziani Airport"
    },
    {
        "code": "ATD",
        "country": "SB",
        "state": "",
        "name": "Atoifi Airport"
    },
    {
        "code": "ATH",
        "country": "GR",
        "state": "",
        "name": "Eleftherios Venizelos Airport"
    },
    {
        "code": "ATK",
        "country": "US",
        "state": "AK",
        "name": "E.Burnell Sr Memorial Airport"
    },
    {
        "code": "ATL",
        "country": "US",
        "state": "GA",
        "name": "Hartsfield-Jackson International Airpor"
    },
    {
        "code": "ATM",
        "country": "BR",
        "state": "PA",
        "name": "Altamira Airport"
    },
    {
        "code": "ATQ",
        "country": "IN",
        "state": "PB",
        "name": "Sri Guru Ram Dass Jee Airport"
    },
    {
        "code": "ATT",
        "country": "US",
        "state": "AK",
        "name": "Atmautluak Airport"
    },
    {
        "code": "ATW",
        "country": "US",
        "state": "WI",
        "name": "Appleton International Airport"
    },
    {
        "code": "ATY",
        "country": "US",
        "state": "SD",
        "name": "Watertown Regional Airport"
    },
    {
        "code": "ATZ",
        "country": "EG",
        "state": "",
        "name": "Asyut Airport"
    },
    {
        "code": "AUA",
        "country": "AW",
        "state": "",
        "name": "Reina Beatrix Airport"
    },
    {
        "code": "AUB",
        "country": "DE",
        "state": "",
        "name": "Augsburg Bus Station"
    },
    {
        "code": "AUC",
        "country": "CO",
        "state": "",
        "name": "Santiago Perez Quiroz Airport"
    },
    {
        "code": "AUG",
        "country": "US",
        "state": "ME",
        "name": "Augusta State Airport"
    },
    {
        "code": "AUH",
        "country": "AE",
        "state": "",
        "name": "Abu Dhabi International Airport"
    },
    {
        "code": "AUK",
        "country": "US",
        "state": "AK",
        "name": "Alakanuk Airport"
    },
    {
        "code": "AUQ",
        "country": "PF",
        "state": "",
        "name": "Atuona Airport"
    },
    {
        "code": "AUR",
        "country": "FR",
        "state": "",
        "name": "Aurillac Airport"
    },
    {
        "code": "AUS",
        "country": "US",
        "state": "TX",
        "name": "Austin-Bergstrom International Airport"
    },
    {
        "code": "AUU",
        "country": "AU",
        "state": "QL",
        "name": "Aurukun Airport"
    },
    {
        "code": "AUX",
        "country": "BR",
        "state": "TO",
        "name": "Araguaina Airport"
    },
    {
        "code": "AUY",
        "country": "VU",
        "state": "",
        "name": "Anatom Island Airport"
    },
    {
        "code": "AVA",
        "country": "CN",
        "state": "",
        "name": "Huangguoshu Airport"
    },
    {
        "code": "AVL",
        "country": "US",
        "state": "NC",
        "name": "Asheville Regional Airport"
    },
    {
        "code": "AVP",
        "country": "US",
        "state": "PA",
        "name": "Wilkes-Barre/Scranton International Air"
    },
    {
        "code": "AVV",
        "country": "AU",
        "state": "VI",
        "name": "Avalon Airport"
    },
    {
        "code": "AWA",
        "country": "ET",
        "state": "",
        "name": "Awasa Airport"
    },
    {
        "code": "AWD",
        "country": "VU",
        "state": "",
        "name": "Aniwa Island Airport"
    },
    {
        "code": "AWZ",
        "country": "IR",
        "state": "",
        "name": "Ahwaz Airport"
    },
    {
        "code": "AXA",
        "country": "AI",
        "state": "",
        "name": "Clayton J. Lloyd International Airport"
    },
    {
        "code": "AXD",
        "country": "GR",
        "state": "",
        "name": "Dimokritos Airport"
    },
    {
        "code": "AXF",
        "country": "CN",
        "state": "",
        "name": "Alxa Left Banner Airport"
    },
    {
        "code": "AXJ",
        "country": "JP",
        "state": "",
        "name": "Amakusa Airport"
    },
    {
        "code": "AXM",
        "country": "CO",
        "state": "",
        "name": "El Eden International Airport"
    },
    {
        "code": "AXP",
        "country": "BS",
        "state": "",
        "name": "Spring Point Airport"
    },
    {
        "code": "AXR",
        "country": "PF",
        "state": "",
        "name": "Arutua Airport"
    },
    {
        "code": "AXT",
        "country": "JP",
        "state": "",
        "name": "Akita Airport"
    },
    {
        "code": "AYJ",
        "country": "IN",
        "state": "UP",
        "name": "Ayodhya Airport"
    },
    {
        "code": "AYP",
        "country": "PE",
        "state": "",
        "name": "Alfredo M. Duarte Airport"
    },
    {
        "code": "AYQ",
        "country": "AU",
        "state": "NT",
        "name": "Connellan Airport"
    },
    {
        "code": "AYT",
        "country": "TR",
        "state": "",
        "name": "Antalya Airport"
    },
    {
        "code": "AZA",
        "country": "US",
        "state": "AZ",
        "name": "Mesa Gateway Airport"
    },
    {
        "code": "AZD",
        "country": "IR",
        "state": "",
        "name": "Shahid Sadooghi"
    },
    {
        "code": "AZO",
        "country": "US",
        "state": "MI",
        "name": "Kalamazoo/Battle Creek International Ai"
    },
    {
        "code": "AZR",
        "country": "DZ",
        "state": "",
        "name": "Touat Airport"
    },
    {
        "code": "AZS",
        "country": "DO",
        "state": "",
        "name": "El Catey International Airport"
    },
    {
        "code": "BAG",
        "country": "PH",
        "state": "",
        "name": "Loakan Airport"
    },
    {
        "code": "BAH",
        "country": "BH",
        "state": "",
        "name": "Bahrain International Airport"
    },
    {
        "code": "BAL",
        "country": "TR",
        "state": "",
        "name": "Batman Airport"
    },
    {
        "code": "BAQ",
        "country": "CO",
        "state": "",
        "name": "Ernesto Cortissoz International Airport"
    },
    {
        "code": "BAR",
        "country": "CN",
        "state": "",
        "name": "Bo'ao Airport"
    },
    {
        "code": "BAS",
        "country": "SB",
        "state": "",
        "name": "Balalae Airport"
    },
    {
        "code": "BAU",
        "country": "IT",
        "state": "",
        "name": "Bari Central Railway Station"
    },
    {
        "code": "BAV",
        "country": "CN",
        "state": "",
        "name": "Erliban Airport"
    },
    {
        "code": "BAX",
        "country": "RU",
        "state": "",
        "name": "Barnaul Airport"
    },
    {
        "code": "BAY",
        "country": "RO",
        "state": "",
        "name": "Baia Mare Airport"
    },
    {
        "code": "BAZ",
        "country": "BR",
        "state": "AM",
        "name": "Barcelos Airport"
    },
    {
        "code": "BBA",
        "country": "CL",
        "state": "",
        "name": "Balmaceda Airport"
    },
    {
        "code": "BBG",
        "country": "KI",
        "state": "",
        "name": "Butaritari Airport"
    },
    {
        "code": "BBI",
        "country": "IN",
        "state": "OR",
        "name": "Biju Patnaik Airport"
    },
    {
        "code": "BBK",
        "country": "BW",
        "state": "",
        "name": "Kasane Airport"
    },
    {
        "code": "BBN",
        "country": "MY",
        "state": "",
        "name": "Bario Airport"
    },
    {
        "code": "BBU",
        "country": "RO",
        "state": "",
        "name": "Baneasa - Aurel Vlaicu Airport"
    },
    {
        "code": "BCD",
        "country": "PH",
        "state": "",
        "name": "Silay International Airport"
    },
    {
        "code": "BCI",
        "country": "AU",
        "state": "QL",
        "name": "Barcaldine Airport"
    },
    {
        "code": "BCM",
        "country": "RO",
        "state": "",
        "name": "Bacau Airport"
    },
    {
        "code": "BCN",
        "country": "ES",
        "state": "",
        "name": "Barcelona Airport"
    },
    {
        "code": "BCO",
        "country": "ET",
        "state": "",
        "name": "Bako Airport"
    },
    {
        "code": "BCT",
        "country": "US",
        "state": "FL",
        "name": "Boca Raton Airport"
    },
    {
        "code": "BDA",
        "country": "BM",
        "state": "",
        "name": "L.F. Wade International Airport"
    },
    {
        "code": "BDB",
        "country": "AU",
        "state": "QL",
        "name": "Bundaberg Airport"
    },
    {
        "code": "BDD",
        "country": "AU",
        "state": "QL",
        "name": "Badu Island Airport"
    },
    {
        "code": "BDH",
        "country": "IR",
        "state": "",
        "name": "Bandar Lengeh Airport"
    },
    {
        "code": "BDJ",
        "country": "ID",
        "state": "",
        "name": "Syamsudin Noor Airport"
    },
    {
        "code": "BDL",
        "country": "US",
        "state": "CT",
        "name": "Bradley International Airport"
    },
    {
        "code": "BDO",
        "country": "ID",
        "state": "",
        "name": "Husein Sastranegara Airport"
    },
    {
        "code": "BDP",
        "country": "NP",
        "state": "",
        "name": "Chandragadhi Airport"
    },
    {
        "code": "BDQ",
        "country": "IN",
        "state": "GJ",
        "name": "Vadodara Airport"
    },
    {
        "code": "BDS",
        "country": "IT",
        "state": "",
        "name": "Casale Airport"
    },
    {
        "code": "BDU",
        "country": "NO",
        "state": "",
        "name": "Bardufoss Airport"
    },
    {
        "code": "BEB",
        "country": "GB",
        "state": "",
        "name": "Benbecula Airport"
    },
    {
        "code": "BEF",
        "country": "NI",
        "state": "",
        "name": "Bluefields Airport"
    },
    {
        "code": "BEG",
        "country": "RS",
        "state": "",
        "name": "Nikola Tesla Airport"
    },
    {
        "code": "BEJ",
        "country": "ID",
        "state": "",
        "name": "Kalimarau Airport"
    },
    {
        "code": "BEK",
        "country": "IN",
        "state": "UP",
        "name": "Bareilly Airport"
    },
    {
        "code": "BEL",
        "country": "BR",
        "state": "PA",
        "name": "Val de Cans International Airport"
    },
    {
        "code": "BEM",
        "country": "MA",
        "state": "",
        "name": "Beni Mellal National Airport"
    },
    {
        "code": "BEN",
        "country": "LY",
        "state": "",
        "name": "Benina International Airport"
    },
    {
        "code": "BER",
        "country": "DE",
        "state": "",
        "name": "Brandenburg Airport"
    },
    {
        "code": "BES",
        "country": "FR",
        "state": "",
        "name": "Bretagne Airport"
    },
    {
        "code": "BET",
        "country": "US",
        "state": "AK",
        "name": "Bethel Airport"
    },
    {
        "code": "BEU",
        "country": "AU",
        "state": "QL",
        "name": "Bedourie Airport"
    },
    {
        "code": "BEW",
        "country": "MZ",
        "state": "",
        "name": "Beira Airport"
    },
    {
        "code": "BEY",
        "country": "LB",
        "state": "",
        "name": "Rafic Hariri International"
    },
    {
        "code": "BEZ",
        "country": "KI",
        "state": "",
        "name": "Beru Airport"
    },
    {
        "code": "BFD",
        "country": "US",
        "state": "PA",
        "name": "Bradford Regional Airport"
    },
    {
        "code": "BFF",
        "country": "US",
        "state": "NE",
        "name": "Western Nebraska Regional Airport"
    },
    {
        "code": "BFI",
        "country": "US",
        "state": "WA",
        "name": "Boeing Field-King County International"
    },
    {
        "code": "BFJ",
        "country": "CN",
        "state": "",
        "name": "Bijie Airport"
    },
    {
        "code": "BFL",
        "country": "US",
        "state": "CA",
        "name": "Meadows Field"
    },
    {
        "code": "BFM",
        "country": "US",
        "state": "AL",
        "name": "Mobile Downtown Airport"
    },
    {
        "code": "BFN",
        "country": "ZA",
        "state": "",
        "name": "Bloemfontein International Airport"
    },
    {
        "code": "BFS",
        "country": "GB",
        "state": "",
        "name": "Belfast International Airport"
    },
    {
        "code": "BFV",
        "country": "TH",
        "state": "",
        "name": "Buriram Airport"
    },
    {
        "code": "BFX",
        "country": "CM",
        "state": "",
        "name": "Bafoussam Airport"
    },
    {
        "code": "BGA",
        "country": "CO",
        "state": "",
        "name": "Palonegro International Airport"
    },
    {
        "code": "BGF",
        "country": "CF",
        "state": "",
        "name": "Mpoko International Airport"
    },
    {
        "code": "BGG",
        "country": "TR",
        "state": "",
        "name": "Bingol Airport"
    },
    {
        "code": "BGI",
        "country": "BB",
        "state": "",
        "name": "Grantley Adams International Airport"
    },
    {
        "code": "BGM",
        "country": "US",
        "state": "NY",
        "name": "Greater Binghamton Airport"
    },
    {
        "code": "BGN",
        "country": "RU",
        "state": "",
        "name": "Belaya Gora Airport"
    },
    {
        "code": "BGO",
        "country": "NO",
        "state": "",
        "name": "Flesland Airport"
    },
    {
        "code": "BGR",
        "country": "US",
        "state": "ME",
        "name": "Bangor International Airport"
    },
    {
        "code": "BGS",
        "country": "RU",
        "state": "",
        "name": "Boguchany Airport"
    },
    {
        "code": "BGW",
        "country": "IQ",
        "state": "",
        "name": "Baghdad International Airport"
    },
    {
        "code": "BGX",
        "country": "BR",
        "state": "RS",
        "name": "Gustavo Kraemer Airport"
    },
    {
        "code": "BGY",
        "country": "IT",
        "state": "",
        "name": "Bergamo/Orio al Serio Airport"
    },
    {
        "code": "BHB",
        "country": "US",
        "state": "ME",
        "name": "Hancock County Airport"
    },
    {
        "code": "BHD",
        "country": "GB",
        "state": "",
        "name": "George Best City Airport"
    },
    {
        "code": "BHE",
        "country": "NZ",
        "state": "",
        "name": "Woodbourne Airport"
    },
    {
        "code": "BHH",
        "country": "SA",
        "state": "",
        "name": "Bisha Airport"
    },
    {
        "code": "BHI",
        "country": "AR",
        "state": "BA",
        "name": "Comandante Espora Airport"
    },
    {
        "code": "BHJ",
        "country": "IN",
        "state": "GJ",
        "name": "Shyamji Krishna Verma Airport"
    },
    {
        "code": "BHK",
        "country": "UZ",
        "state": "",
        "name": "Bukhara International Airport"
    },
    {
        "code": "BHM",
        "country": "US",
        "state": "AL",
        "name": "Shuttlesworth International Airport"
    },
    {
        "code": "BHO",
        "country": "IN",
        "state": "MP",
        "name": "Raja Bhoj Airport"
    },
    {
        "code": "BHQ",
        "country": "AU",
        "state": "NS",
        "name": "Broken Hill Airport"
    },
    {
        "code": "BHR",
        "country": "NP",
        "state": "",
        "name": "Bharatpur Airport"
    },
    {
        "code": "BHU",
        "country": "IN",
        "state": "GJ",
        "name": "Bhavnagar Airport"
    },
    {
        "code": "BHX",
        "country": "GB",
        "state": "",
        "name": "Birmingham Airport"
    },
    {
        "code": "BHY",
        "country": "CN",
        "state": "",
        "name": "Fucheng Airport"
    },
    {
        "code": "BIA",
        "country": "FR",
        "state": "",
        "name": "Poretta Airport"
    },
    {
        "code": "BIB",
        "country": "SO",
        "state": "",
        "name": "Baidoa Airport"
    },
    {
        "code": "BIH",
        "country": "US",
        "state": "CA",
        "name": "Eastern Sierra Regional Airport"
    },
    {
        "code": "BIK",
        "country": "ID",
        "state": "",
        "name": "Frans Kaisiepo Airport"
    },
    {
        "code": "BIL",
        "country": "US",
        "state": "MT",
        "name": "Logan International Airport"
    },
    {
        "code": "BIM",
        "country": "BS",
        "state": "",
        "name": "South Bimini Airport"
    },
    {
        "code": "BIO",
        "country": "ES",
        "state": "",
        "name": "Bilbao Airport"
    },
    {
        "code": "BIQ",
        "country": "FR",
        "state": "",
        "name": "Pays Basque Airport"
    },
    {
        "code": "BIR",
        "country": "NP",
        "state": "",
        "name": "Biratnagar Airport"
    },
    {
        "code": "BIS",
        "country": "US",
        "state": "ND",
        "name": "Bismarck Municipal Airport"
    },
    {
        "code": "BIU",
        "country": "IS",
        "state": "",
        "name": "Bildudalur Airport"
    },
    {
        "code": "BJA",
        "country": "DZ",
        "state": "",
        "name": "Soummam-Abane Ramdane Airport"
    },
    {
        "code": "BJB",
        "country": "IR",
        "state": "",
        "name": "Bojnurd Airport"
    },
    {
        "code": "BJC",
        "country": "US",
        "state": "CO",
        "name": "Rocky Mountain Metropolitan Airport"
    },
    {
        "code": "BJF",
        "country": "NO",
        "state": "",
        "name": "Batsfjord Airport"
    },
    {
        "code": "BJI",
        "country": "US",
        "state": "MN",
        "name": "Bemidji Regional Airport"
    },
    {
        "code": "BJL",
        "country": "GM",
        "state": "",
        "name": "Banjul International Airport"
    },
    {
        "code": "BJM",
        "country": "BI",
        "state": "",
        "name": "Bujumbura International Airport"
    },
    {
        "code": "BJR",
        "country": "ET",
        "state": "",
        "name": "Bahar Dar Airport"
    },
    {
        "code": "BJV",
        "country": "TR",
        "state": "",
        "name": "Milas Airport"
    },
    {
        "code": "BJW",
        "country": "ID",
        "state": "",
        "name": "Soa Airport"
    },
    {
        "code": "BJX",
        "country": "MX",
        "state": "",
        "name": "Del Bajio International Airport"
    },
    {
        "code": "BJZ",
        "country": "ES",
        "state": "",
        "name": "Badajoz Airport"
    },
    {
        "code": "BKA",
        "country": "RU",
        "state": "",
        "name": "Baykit Airport"
    },
    {
        "code": "BKB",
        "country": "IN",
        "state": "RJ",
        "name": "Nal Airport"
    },
    {
        "code": "BKC",
        "country": "US",
        "state": "AK",
        "name": "Buckland Airport"
    },
    {
        "code": "BKG",
        "country": "US",
        "state": "MO",
        "name": "Branson Airport"
    },
    {
        "code": "BKI",
        "country": "MY",
        "state": "",
        "name": "Kota Kinabalu International Airport"
    },
    {
        "code": "BKK",
        "country": "TH",
        "state": "",
        "name": "Suvarnabhumi International"
    },
    {
        "code": "BKM",
        "country": "MY",
        "state": "",
        "name": "Bakelalan Airport"
    },
    {
        "code": "BKO",
        "country": "ML",
        "state": "",
        "name": "Senou International Airport"
    },
    {
        "code": "BKQ",
        "country": "AU",
        "state": "QL",
        "name": "Blackall Airport"
    },
    {
        "code": "BKS",
        "country": "ID",
        "state": "",
        "name": "Fatmawati Soekarno Airport"
    },
    {
        "code": "BKW",
        "country": "US",
        "state": "WV",
        "name": "Raleigh County Memorial Airport"
    },
    {
        "code": "BKZ",
        "country": "TZ",
        "state": "",
        "name": "Bukoba Airport"
    },
    {
        "code": "BLA",
        "country": "VE",
        "state": "",
        "name": "Jose Antonio Anzoategui International A"
    },
    {
        "code": "BLB",
        "country": "PA",
        "state": "",
        "name": "Panama Pacifico Airport"
    },
    {
        "code": "BLD",
        "country": "US",
        "state": "NV",
        "name": "Boulder City Municipal Airport"
    },
    {
        "code": "BLI",
        "country": "US",
        "state": "WA",
        "name": "Bellingham International Airport"
    },
    {
        "code": "BLJ",
        "country": "DZ",
        "state": "",
        "name": "Mostepha Ben Boulaid Airport"
    },
    {
        "code": "BLL",
        "country": "DK",
        "state": "",
        "name": "Billund Airport"
    },
    {
        "code": "BLQ",
        "country": "IT",
        "state": "",
        "name": "Guglielmo Marconi Airport"
    },
    {
        "code": "BLR",
        "country": "IN",
        "state": "KA",
        "name": "Kempegowda International Airport"
    },
    {
        "code": "BLV",
        "country": "US",
        "state": "IL",
        "name": "MidAmerica Saint Louis Airport"
    },
    {
        "code": "BLZ",
        "country": "MW",
        "state": "",
        "name": "Chileka International Airport"
    },
    {
        "code": "BMA",
        "country": "SE",
        "state": "",
        "name": "Bromma Airport"
    },
    {
        "code": "BME",
        "country": "AU",
        "state": "WA",
        "name": "Broome International Airport"
    },
    {
        "code": "BMI",
        "country": "US",
        "state": "IL",
        "name": "Central Illinois Regional Airport"
    },
    {
        "code": "BMO",
        "country": "MM",
        "state": "",
        "name": "Bhamo Airport"
    },
    {
        "code": "BMU",
        "country": "ID",
        "state": "",
        "name": "Sultan M. Salahuddin Airport"
    },
    {
        "code": "BMV",
        "country": "VN",
        "state": "",
        "name": "Buon Ma Thuot Airport"
    },
    {
        "code": "BMW",
        "country": "DZ",
        "state": "",
        "name": "Bordj Mokhtar Airport"
    },
    {
        "code": "BNA",
        "country": "US",
        "state": "TN",
        "name": "Nashville International Airport"
    },
    {
        "code": "BNC",
        "country": "CD",
        "state": "",
        "name": "Mavivi Airport"
    },
    {
        "code": "BND",
        "country": "IR",
        "state": "",
        "name": "Bandar Abbas International Airport"
    },
    {
        "code": "BNE",
        "country": "AU",
        "state": "QL",
        "name": "Brisbane International Airport"
    },
    {
        "code": "BNI",
        "country": "NG",
        "state": "",
        "name": "Benin City Airport"
    },
    {
        "code": "BNK",
        "country": "AU",
        "state": "NS",
        "name": "Byron Gateway Airport"
    },
    {
        "code": "BNN",
        "country": "NO",
        "state": "",
        "name": "Bronnoy Airport"
    },
    {
        "code": "BNS",
        "country": "VE",
        "state": "",
        "name": "Barinas Airport"
    },
    {
        "code": "BNX",
        "country": "BA",
        "state": "",
        "name": "Banja Luka International Airport"
    },
    {
        "code": "BNY",
        "country": "SB",
        "state": "",
        "name": "Anua Airport"
    },
    {
        "code": "BOB",
        "country": "PF",
        "state": "",
        "name": "Motu Mute Airport"
    },
    {
        "code": "BOC",
        "country": "PA",
        "state": "",
        "name": "Isla Colon International Airport"
    },
    {
        "code": "BOD",
        "country": "FR",
        "state": "",
        "name": "Merignac Airport"
    },
    {
        "code": "BOG",
        "country": "CO",
        "state": "",
        "name": "El Dorado International Airport"
    },
    {
        "code": "BOH",
        "country": "GB",
        "state": "",
        "name": "Bournemouth International Airport"
    },
    {
        "code": "BOI",
        "country": "US",
        "state": "ID",
        "name": "Boise Air Terminal (Gowen Field)"
    },
    {
        "code": "BOJ",
        "country": "BG",
        "state": "",
        "name": "Burgas Airport"
    },
    {
        "code": "BOM",
        "country": "IN",
        "state": "MH",
        "name": "Chhatrapati Shivaji Maharaj Airport"
    },
    {
        "code": "BON",
        "country": "BQ",
        "state": "",
        "name": "Flamingo International Airport"
    },
    {
        "code": "BOO",
        "country": "NO",
        "state": "",
        "name": "Bodo Airport"
    },
    {
        "code": "BOS",
        "country": "US",
        "state": "MA",
        "name": "Edward L. Logan International Airport"
    },
    {
        "code": "BOY",
        "country": "BF",
        "state": "",
        "name": "Bobo Dioulasso Airport"
    },
    {
        "code": "BPA",
        "country": "PH",
        "state": "",
        "name": "Borongan Airport"
    },
    {
        "code": "BPE",
        "country": "CN",
        "state": "",
        "name": "Beidaihe Airport"
    },
    {
        "code": "BPG",
        "country": "BR",
        "state": "MT",
        "name": "Barra do Garcas Airport"
    },
    {
        "code": "BPL",
        "country": "CN",
        "state": "",
        "name": "Alashankou Airport"
    },
    {
        "code": "BPN",
        "country": "ID",
        "state": "",
        "name": "Sepinggan Airport"
    },
    {
        "code": "BPR",
        "country": "GB",
        "state": "",
        "name": "Parkway Railway Station"
    },
    {
        "code": "BPS",
        "country": "BR",
        "state": "BA",
        "name": "Porto Seguro Airport"
    },
    {
        "code": "BPT",
        "country": "US",
        "state": "TX",
        "name": "Jack Brooks Regional Airport"
    },
    {
        "code": "BPX",
        "country": "CN",
        "state": "",
        "name": "Bamda/Bangda Airport"
    },
    {
        "code": "BQB",
        "country": "AU",
        "state": "WA",
        "name": "Busselton Airport"
    },
    {
        "code": "BQC",
        "country": "CA",
        "state": "QC",
        "name": "Sainte-Foy Bus Station"
    },
    {
        "code": "BQD",
        "country": "IT",
        "state": "",
        "name": "Brindisi Railway Station"
    },
    {
        "code": "BQJ",
        "country": "RU",
        "state": "",
        "name": "Batagay Airport"
    },
    {
        "code": "BQK",
        "country": "US",
        "state": "GA",
        "name": "Golden Isles Airport"
    },
    {
        "code": "BQL",
        "country": "AU",
        "state": "QL",
        "name": "Boulia Airport"
    },
    {
        "code": "BQN",
        "country": "PR",
        "state": "",
        "name": "Rafael Hernandez Airport"
    },
    {
        "code": "BQS",
        "country": "RU",
        "state": "",
        "name": "Ignatyevo Airport"
    },
    {
        "code": "BQT",
        "country": "BY",
        "state": "",
        "name": "Brest Airport"
    },
    {
        "code": "BQW",
        "country": "AU",
        "state": "WA",
        "name": "Balgo Hill Airport"
    },
    {
        "code": "BRA",
        "country": "BR",
        "state": "BA",
        "name": "Barreiras Airport"
    },
    {
        "code": "BRB",
        "country": "BR",
        "state": "MA",
        "name": "Barreirinhas Airport"
    },
    {
        "code": "BRC",
        "country": "AR",
        "state": "RN",
        "name": "San Carlos Bariloche Airport"
    },
    {
        "code": "BRD",
        "country": "US",
        "state": "MN",
        "name": "Brainerd Lakes Regional Airport"
    },
    {
        "code": "BRE",
        "country": "DE",
        "state": "",
        "name": "Bremen Airport"
    },
    {
        "code": "BRI",
        "country": "IT",
        "state": "",
        "name": "Palese Airport"
    },
    {
        "code": "BRK",
        "country": "AU",
        "state": "NS",
        "name": "Bourke Airport"
    },
    {
        "code": "BRL",
        "country": "US",
        "state": "IA",
        "name": "Southeast Iowa Regional Airport"
    },
    {
        "code": "BRM",
        "country": "VE",
        "state": "",
        "name": "Jacinto Lara International Airport"
    },
    {
        "code": "BRN",
        "country": "CH",
        "state": "",
        "name": "Belp Airport"
    },
    {
        "code": "BRO",
        "country": "US",
        "state": "TX",
        "name": "South Padre Island International Airpor"
    },
    {
        "code": "BRQ",
        "country": "CZ",
        "state": "",
        "name": "Turany Airport"
    },
    {
        "code": "BRR",
        "country": "GB",
        "state": "",
        "name": "Barra Airport"
    },
    {
        "code": "BRS",
        "country": "GB",
        "state": "",
        "name": "Bristol Airport"
    },
    {
        "code": "BRU",
        "country": "BE",
        "state": "",
        "name": "Brussels Airport"
    },
    {
        "code": "BRW",
        "country": "US",
        "state": "AK",
        "name": "Wiley Post-Will Rogers Memorial Airport"
    },
    {
        "code": "BRZ",
        "country": "IT",
        "state": "",
        "name": "Brescia Railway Station"
    },
    {
        "code": "BSA",
        "country": "SO",
        "state": "",
        "name": "Bosaso International Airport"
    },
    {
        "code": "BSB",
        "country": "BR",
        "state": "DF",
        "name": "Juscelino Kubitscheck International Air"
    },
    {
        "code": "BSC",
        "country": "CO",
        "state": "",
        "name": "Jose Celestino Mutis Airport"
    },
    {
        "code": "BSD",
        "country": "CN",
        "state": "",
        "name": "Baoshan Airport"
    },
    {
        "code": "BSG",
        "country": "GQ",
        "state": "",
        "name": "Bata Airport"
    },
    {
        "code": "BSH",
        "country": "GB",
        "state": "",
        "name": "Brighton Railway Station"
    },
    {
        "code": "BSK",
        "country": "DZ",
        "state": "",
        "name": "Mohamed Khider Airport"
    },
    {
        "code": "BSL",
        "country": "CH",
        "state": "",
        "name": "EuroAirport Swiss"
    },
    {
        "code": "BSO",
        "country": "PH",
        "state": "",
        "name": "Basco Airport"
    },
    {
        "code": "BSR",
        "country": "IQ",
        "state": "",
        "name": "Basrah International Airport"
    },
    {
        "code": "BTH",
        "country": "ID",
        "state": "",
        "name": "HangNadim Airport"
    },
    {
        "code": "BTI",
        "country": "US",
        "state": "AK",
        "name": "Barter Island Airport"
    },
    {
        "code": "BTJ",
        "country": "ID",
        "state": "",
        "name": "Sultan Iskandar Muda Airport"
    },
    {
        "code": "BTK",
        "country": "RU",
        "state": "",
        "name": "Bratsk Airport"
    },
    {
        "code": "BTM",
        "country": "US",
        "state": "MT",
        "name": "Bert Mooney Airport"
    },
    {
        "code": "BTR",
        "country": "US",
        "state": "LA",
        "name": "Baton Rouge Metropolitan Airport-Ryan F"
    },
    {
        "code": "BTS",
        "country": "SK",
        "state": "",
        "name": "M.R. Stefanik Airport"
    },
    {
        "code": "BTT",
        "country": "US",
        "state": "AK",
        "name": "Bettles Airport"
    },
    {
        "code": "BTU",
        "country": "MY",
        "state": "",
        "name": "Bintulu Airport"
    },
    {
        "code": "BTV",
        "country": "US",
        "state": "VT",
        "name": "Burlington International Airport"
    },
    {
        "code": "BTW",
        "country": "ID",
        "state": "",
        "name": "Batu Licin Airport"
    },
    {
        "code": "BUA",
        "country": "PG",
        "state": "",
        "name": "Buka Airport"
    },
    {
        "code": "BUC",
        "country": "AU",
        "state": "QL",
        "name": "Burketown Airport"
    },
    {
        "code": "BUD",
        "country": "HU",
        "state": "",
        "name": "Liszt Ferenc International Airport"
    },
    {
        "code": "BUF",
        "country": "US",
        "state": "NY",
        "name": "Buffalo Niagara International Airport"
    },
    {
        "code": "BUN",
        "country": "CO",
        "state": "",
        "name": "Gerardo Tobar Lopez Airport"
    },
    {
        "code": "BUP",
        "country": "IN",
        "state": "PB",
        "name": "Bathinda Airport"
    },
    {
        "code": "BUQ",
        "country": "ZW",
        "state": "",
        "name": "Joshua Mqabuko Nkomo International Airp"
    },
    {
        "code": "BUR",
        "country": "US",
        "state": "CA",
        "name": "Bob Hope Airport"
    },
    {
        "code": "BUS",
        "country": "GE",
        "state": "",
        "name": "Batumi Airport"
    },
    {
        "code": "BUT",
        "country": "BT",
        "state": "",
        "name": "Bathpalathang Airport"
    },
    {
        "code": "BUU",
        "country": "ID",
        "state": "",
        "name": "Muara Bungo Airport"
    },
    {
        "code": "BUW",
        "country": "ID",
        "state": "",
        "name": "Betoambari Airport"
    },
    {
        "code": "BUX",
        "country": "CD",
        "state": "",
        "name": "Bunia Airport"
    },
    {
        "code": "BUZ",
        "country": "IR",
        "state": "",
        "name": "Bushehr Airport"
    },
    {
        "code": "BVA",
        "country": "FR",
        "state": "",
        "name": "Beauvais-Tille Airport"
    },
    {
        "code": "BVB",
        "country": "BR",
        "state": "RR",
        "name": "Atlas Brasil Cantanhede International A"
    },
    {
        "code": "BVC",
        "country": "CV",
        "state": "",
        "name": "Rabil Airport"
    },
    {
        "code": "BVE",
        "country": "FR",
        "state": "",
        "name": "Vallee de la Dordogne Airport"
    },
    {
        "code": "BVG",
        "country": "NO",
        "state": "",
        "name": "Berlevag Airport"
    },
    {
        "code": "BVH",
        "country": "BR",
        "state": "RO",
        "name": "Brigadeiro Camarao Airport"
    },
    {
        "code": "BVI",
        "country": "AU",
        "state": "QL",
        "name": "Birdsville Airport"
    },
    {
        "code": "BVS",
        "country": "BR",
        "state": "PA",
        "name": "Breves Airport"
    },
    {
        "code": "BWA",
        "country": "NP",
        "state": "",
        "name": "Gautam Buddha Airport"
    },
    {
        "code": "BWI",
        "country": "US",
        "state": "MD",
        "name": "Baltimore/Washington International Airp"
    },
    {
        "code": "BWK",
        "country": "HR",
        "state": "",
        "name": "Bol Airport"
    },
    {
        "code": "BWN",
        "country": "BN",
        "state": "",
        "name": "Brunei International Airport"
    },
    {
        "code": "BWT",
        "country": "AU",
        "state": "TS",
        "name": "Wynyard Airport"
    },
    {
        "code": "BWX",
        "country": "ID",
        "state": "",
        "name": "Blimbingsari Airport"
    },
    {
        "code": "BXG",
        "country": "AU",
        "state": "VI",
        "name": "Bendigo Airport"
    },
    {
        "code": "BXR",
        "country": "IR",
        "state": "",
        "name": "Bam Airport"
    },
    {
        "code": "BXU",
        "country": "PH",
        "state": "",
        "name": "Bancasi Airport"
    },
    {
        "code": "BYC",
        "country": "BO",
        "state": "",
        "name": "Yacuiba Airport"
    },
    {
        "code": "BYK",
        "country": "CI",
        "state": "",
        "name": "Bouake Airport"
    },
    {
        "code": "BYN",
        "country": "MN",
        "state": "",
        "name": "Bayankhongor Airport"
    },
    {
        "code": "BYO",
        "country": "BR",
        "state": "MS",
        "name": "Bonito Airport"
    },
    {
        "code": "BZE",
        "country": "BZ",
        "state": "",
        "name": "Philip S.W. Goldson International Airpo"
    },
    {
        "code": "BZG",
        "country": "PL",
        "state": "",
        "name": "Ignacy Jan Paderewski Airport"
    },
    {
        "code": "BZL",
        "country": "BD",
        "state": "",
        "name": "Barisal Airport"
    },
    {
        "code": "BZN",
        "country": "US",
        "state": "MT",
        "name": "Yellowstone International Airport"
    },
    {
        "code": "BZO",
        "country": "IT",
        "state": "",
        "name": "Dolomiti Airport"
    },
    {
        "code": "BZR",
        "country": "FR",
        "state": "",
        "name": "Beziers Vias Airport"
    },
    {
        "code": "BZV",
        "country": "CG",
        "state": "",
        "name": "Maya-Maya Airport"
    },
    {
        "code": "BZX",
        "country": "CN",
        "state": "",
        "name": "Enyang Airport"
    },
    {
        "code": "BZZ",
        "country": "GB",
        "state": "",
        "name": "Brize Norton Royal Air Force Station"
    },
    {
        "code": "CAB",
        "country": "AO",
        "state": "",
        "name": "Cabinda Airport"
    },
    {
        "code": "CAC",
        "country": "BR",
        "state": "PR",
        "name": "Adalberto Mendes da Silva Airport"
    },
    {
        "code": "CAE",
        "country": "US",
        "state": "SC",
        "name": "Columbia Metropolitan Airport"
    },
    {
        "code": "CAG",
        "country": "IT",
        "state": "",
        "name": "Elmas Airport"
    },
    {
        "code": "CAH",
        "country": "VN",
        "state": "",
        "name": "Ca Mau Airport"
    },
    {
        "code": "CAI",
        "country": "EG",
        "state": "",
        "name": "Cairo International Airport"
    },
    {
        "code": "CAJ",
        "country": "VE",
        "state": "",
        "name": "Canaima Airport"
    },
    {
        "code": "CAK",
        "country": "US",
        "state": "OH",
        "name": "Akron/Canton Regional Airport"
    },
    {
        "code": "CAL",
        "country": "GB",
        "state": "",
        "name": "Campbeltown Airport"
    },
    {
        "code": "CAN",
        "country": "CN",
        "state": "",
        "name": "Baiyun International Airport"
    },
    {
        "code": "CAP",
        "country": "HT",
        "state": "",
        "name": "Hugo Chavez International Airport"
    },
    {
        "code": "CAQ",
        "country": "CO",
        "state": "",
        "name": "Juan H. White Airport"
    },
    {
        "code": "CAU",
        "country": "BR",
        "state": "PE",
        "name": "Oscar Laranjeiras Airport"
    },
    {
        "code": "CAW",
        "country": "BR",
        "state": "RJ",
        "name": "Bartolomeu Lisandro Airport"
    },
    {
        "code": "CAY",
        "country": "GF",
        "state": "",
        "name": "Felix Eboue Airport"
    },
    {
        "code": "CAZ",
        "country": "AU",
        "state": "NS",
        "name": "Cobar Airport"
    },
    {
        "code": "CBB",
        "country": "BO",
        "state": "",
        "name": "Jorge Wilstermann International Airport"
    },
    {
        "code": "CBG",
        "country": "GB",
        "state": "",
        "name": "Cambridge Airport"
    },
    {
        "code": "CBH",
        "country": "DZ",
        "state": "",
        "name": "Boudghene Ben Ali Lofti Airport"
    },
    {
        "code": "CBL",
        "country": "VE",
        "state": "",
        "name": "Tomas de Heres Airport"
    },
    {
        "code": "CBO",
        "country": "PH",
        "state": "",
        "name": "Awang Airport"
    },
    {
        "code": "CBQ",
        "country": "NG",
        "state": "",
        "name": "Margaret Ekpo International Airport"
    },
    {
        "code": "CBR",
        "country": "AU",
        "state": "AC",
        "name": "Canberra Airport"
    },
    {
        "code": "CBT",
        "country": "AO",
        "state": "",
        "name": "Catumbela Airport"
    },
    {
        "code": "CCC",
        "country": "CU",
        "state": "",
        "name": "Jardines del Rey Airport"
    },
    {
        "code": "CCF",
        "country": "FR",
        "state": "",
        "name": "Salvaza Airport"
    },
    {
        "code": "CCJ",
        "country": "IN",
        "state": "KL",
        "name": "Kozhikode International Airport"
    },
    {
        "code": "CCK",
        "country": "CC",
        "state": "",
        "name": "Cocos Islands Airport"
    },
    {
        "code": "CCL",
        "country": "AU",
        "state": "QL",
        "name": "Chinchilla Airport"
    },
    {
        "code": "CCP",
        "country": "CL",
        "state": "",
        "name": "Carriel Sur Airport"
    },
    {
        "code": "CCR",
        "country": "US",
        "state": "CA",
        "name": "Buchanan Field"
    },
    {
        "code": "CCS",
        "country": "VE",
        "state": "",
        "name": "Simon Bolivar International Airport"
    },
    {
        "code": "CCU",
        "country": "IN",
        "state": "WB",
        "name": "Subhas Chandra Bose Airport"
    },
    {
        "code": "CCV",
        "country": "VU",
        "state": "",
        "name": "Craig Cove Airport"
    },
    {
        "code": "CDB",
        "country": "US",
        "state": "AK",
        "name": "Cold Bay Airport"
    },
    {
        "code": "CDC",
        "country": "US",
        "state": "UT",
        "name": "Cedar City Regional Airport"
    },
    {
        "code": "CDE",
        "country": "CN",
        "state": "",
        "name": "PuningAirport"
    },
    {
        "code": "CDG",
        "country": "FR",
        "state": "",
        "name": "Charles de Gaulle Airport"
    },
    {
        "code": "CDP",
        "country": "IN",
        "state": "AP",
        "name": "Cuddapah Airport"
    },
    {
        "code": "CDR",
        "country": "US",
        "state": "NE",
        "name": "Chadron Municipal Airport"
    },
    {
        "code": "CDT",
        "country": "ES",
        "state": "",
        "name": "Castellon de la Plana Airport"
    },
    {
        "code": "CDV",
        "country": "US",
        "state": "AK",
        "name": "Merle K (Mudhole) Smith Airport"
    },
    {
        "code": "CDZ",
        "country": "ES",
        "state": "",
        "name": "Cadiz Railway Station"
    },
    {
        "code": "CEB",
        "country": "PH",
        "state": "",
        "name": "Mactan International Airport"
    },
    {
        "code": "CEC",
        "country": "US",
        "state": "CA",
        "name": "Del Norte County Regional Airport"
    },
    {
        "code": "CED",
        "country": "AU",
        "state": "SA",
        "name": "Ceduna Airport"
    },
    {
        "code": "CEE",
        "country": "RU",
        "state": "",
        "name": "Cherepovets Airport"
    },
    {
        "code": "CEI",
        "country": "TH",
        "state": "",
        "name": "Mae Fah Luang International Airport"
    },
    {
        "code": "CEJ",
        "country": "ES",
        "state": "",
        "name": "Cuenca Railway Station"
    },
    {
        "code": "CEK",
        "country": "RU",
        "state": "",
        "name": "Balandino Airport"
    },
    {
        "code": "CEL",
        "country": "BR",
        "state": "RS",
        "name": "Canela"
    },
    {
        "code": "CEM",
        "country": "US",
        "state": "AK",
        "name": "Central Airport"
    },
    {
        "code": "CEN",
        "country": "MX",
        "state": "",
        "name": "Ciudad Obregon International Airport"
    },
    {
        "code": "CEZ",
        "country": "US",
        "state": "CO",
        "name": "Cortez Municipal Airport"
    },
    {
        "code": "CFB",
        "country": "BR",
        "state": "RJ",
        "name": "Cabo Frio International Airport"
    },
    {
        "code": "CFE",
        "country": "FR",
        "state": "",
        "name": "Auvergne Airport"
    },
    {
        "code": "CFG",
        "country": "CU",
        "state": "",
        "name": "Jaime Gonzalez Airport"
    },
    {
        "code": "CFK",
        "country": "DZ",
        "state": "",
        "name": "Aboubakr Belkaid Airport"
    },
    {
        "code": "CFN",
        "country": "IE",
        "state": "",
        "name": "Donegal Airport"
    },
    {
        "code": "CFR",
        "country": "FR",
        "state": "",
        "name": "Carpiquet Airport"
    },
    {
        "code": "CFS",
        "country": "AU",
        "state": "NS",
        "name": "Coffs Harbour Airport"
    },
    {
        "code": "CFU",
        "country": "GR",
        "state": "",
        "name": "Ioannis Kapodistrias Airport"
    },
    {
        "code": "CFW",
        "country": "GB",
        "state": "",
        "name": "Cardiff Railway Station"
    },
    {
        "code": "CGB",
        "country": "BR",
        "state": "MT",
        "name": "Marechal Rondon International Airport"
    },
    {
        "code": "CGD",
        "country": "CN",
        "state": "",
        "name": "Taohuayuan Airport"
    },
    {
        "code": "CGH",
        "country": "BR",
        "state": "SP",
        "name": "Congonhas Airport"
    },
    {
        "code": "CGI",
        "country": "US",
        "state": "MO",
        "name": "Cape Girardeau Regional Airport"
    },
    {
        "code": "CGK",
        "country": "ID",
        "state": "",
        "name": "Soekarno-Hatta International Airport"
    },
    {
        "code": "CGM",
        "country": "PH",
        "state": "",
        "name": "Mambajao Airport"
    },
    {
        "code": "CGN",
        "country": "DE",
        "state": "",
        "name": "Cologne/Bonn Airport"
    },
    {
        "code": "CGO",
        "country": "CN",
        "state": "",
        "name": "Xinzheng International Airport"
    },
    {
        "code": "CGP",
        "country": "BD",
        "state": "",
        "name": "Shah Amanat International Airport"
    },
    {
        "code": "CGQ",
        "country": "CN",
        "state": "",
        "name": "Longjia International Airport"
    },
    {
        "code": "CGR",
        "country": "BR",
        "state": "MS",
        "name": "Campo Grande International Airport"
    },
    {
        "code": "CGY",
        "country": "PH",
        "state": "",
        "name": "Laguindingan International Airport"
    },
    {
        "code": "CHA",
        "country": "US",
        "state": "TN",
        "name": "Chattanooga Metropolitan Airport"
    },
    {
        "code": "CHC",
        "country": "NZ",
        "state": "",
        "name": "Christchurch International Airport"
    },
    {
        "code": "CHG",
        "country": "CN",
        "state": "",
        "name": "Chaoyang Airport"
    },
    {
        "code": "CHH",
        "country": "PE",
        "state": "",
        "name": "Chachapoyas Airport"
    },
    {
        "code": "CHO",
        "country": "US",
        "state": "VA",
        "name": "Albemarle Airport"
    },
    {
        "code": "CHQ",
        "country": "GR",
        "state": "",
        "name": "Ioannis Daskalogiannis Airport"
    },
    {
        "code": "CHS",
        "country": "US",
        "state": "SC",
        "name": "Charleston International Airport/Air Fo"
    },
    {
        "code": "CHT",
        "country": "NZ",
        "state": "",
        "name": "Tuuta Airport"
    },
    {
        "code": "CHW",
        "country": "GB",
        "state": "",
        "name": "Royal Well Bus Station"
    },
    {
        "code": "CHX",
        "country": "PA",
        "state": "",
        "name": "Manuel Nino International Airport"
    },
    {
        "code": "CHY",
        "country": "SB",
        "state": "",
        "name": "Choiseul Bay Airport"
    },
    {
        "code": "CIA",
        "country": "IT",
        "state": "",
        "name": "Ciampino Airport"
    },
    {
        "code": "CID",
        "country": "US",
        "state": "IA",
        "name": "The Eastern Iowa Airport"
    },
    {
        "code": "CIF",
        "country": "CN",
        "state": "",
        "name": "Yulong Airport"
    },
    {
        "code": "CIH",
        "country": "CN",
        "state": "",
        "name": "Wangcun Airport"
    },
    {
        "code": "CIJ",
        "country": "BO",
        "state": "",
        "name": "Capitan Anibal Arab Airport"
    },
    {
        "code": "CIK",
        "country": "US",
        "state": "AK",
        "name": "Chalkyitsik Airport"
    },
    {
        "code": "CIT",
        "country": "KZ",
        "state": "",
        "name": "Shymkent International Airport"
    },
    {
        "code": "CIU",
        "country": "US",
        "state": "MI",
        "name": "Chippewa County International Airport"
    },
    {
        "code": "CIX",
        "country": "PE",
        "state": "",
        "name": "J.A. Quinones Gonzalez Airport"
    },
    {
        "code": "CIY",
        "country": "IT",
        "state": "",
        "name": "Vincenzo Magliocco Airport"
    },
    {
        "code": "CIZ",
        "country": "BR",
        "state": "AM",
        "name": "Coari Airport"
    },
    {
        "code": "CJA",
        "country": "PE",
        "state": "",
        "name": "Armando R. Iglesias Airport"
    },
    {
        "code": "CJB",
        "country": "IN",
        "state": "TN",
        "name": "Coimbatore International Airport"
    },
    {
        "code": "CJC",
        "country": "CL",
        "state": "",
        "name": "El Loa Airport"
    },
    {
        "code": "CJJ",
        "country": "KR",
        "state": "",
        "name": "Cheongju International Airport"
    },
    {
        "code": "CJM",
        "country": "TH",
        "state": "",
        "name": "Chumphon Airport"
    },
    {
        "code": "CJS",
        "country": "MX",
        "state": "",
        "name": "Abraham Gonzalez International Airport"
    },
    {
        "code": "CJU",
        "country": "KR",
        "state": "",
        "name": "Jeju International Airport"
    },
    {
        "code": "CJZ",
        "country": "BR",
        "state": "PB",
        "name": "Cajazeiras Airport"
    },
    {
        "code": "CKB",
        "country": "US",
        "state": "WV",
        "name": "North Central West Virginia Airport"
    },
    {
        "code": "CKG",
        "country": "CN",
        "state": "",
        "name": "Jiangbei International Airport"
    },
    {
        "code": "CKH",
        "country": "RU",
        "state": "",
        "name": "Chokurdakh Airport"
    },
    {
        "code": "CKS",
        "country": "BR",
        "state": "PA",
        "name": "Carajas Airport"
    },
    {
        "code": "CKX",
        "country": "US",
        "state": "AK",
        "name": "Chicken Airport"
    },
    {
        "code": "CKY",
        "country": "GN",
        "state": "",
        "name": "Conakry International Airport"
    },
    {
        "code": "CKZ",
        "country": "TR",
        "state": "",
        "name": "Canakkale Airport"
    },
    {
        "code": "CLB",
        "country": "GB",
        "state": "",
        "name": "Colchester Bus Station"
    },
    {
        "code": "CLD",
        "country": "US",
        "state": "CA",
        "name": "McClellan-Palomar Airport"
    },
    {
        "code": "CLE",
        "country": "US",
        "state": "OH",
        "name": "Hopkins International Airport"
    },
    {
        "code": "CLJ",
        "country": "RO",
        "state": "",
        "name": "Cluj-Napoca Airport"
    },
    {
        "code": "CLL",
        "country": "US",
        "state": "TX",
        "name": "Easterwood Field"
    },
    {
        "code": "CLO",
        "country": "CO",
        "state": "",
        "name": "Alfonso Bonilla Aragon International Ai"
    },
    {
        "code": "CLP",
        "country": "US",
        "state": "AK",
        "name": "Clarks Point Airport"
    },
    {
        "code": "CLQ",
        "country": "MX",
        "state": "",
        "name": "Miguel de la Madrid Airport"
    },
    {
        "code": "CLT",
        "country": "US",
        "state": "NC",
        "name": "Douglas International Airport"
    },
    {
        "code": "CLV",
        "country": "BR",
        "state": "GO",
        "name": "Nelson R. Guimaraes Airport"
    },
    {
        "code": "CLY",
        "country": "FR",
        "state": "",
        "name": "Sainte Catherine Airport"
    },
    {
        "code": "CMA",
        "country": "AU",
        "state": "QL",
        "name": "Cunnamulla Airport"
    },
    {
        "code": "CMB",
        "country": "LK",
        "state": "",
        "name": "Bandaranaike International Airport"
    },
    {
        "code": "CME",
        "country": "MX",
        "state": "",
        "name": "Ciudad del Carmen International Airport"
    },
    {
        "code": "CMF",
        "country": "FR",
        "state": "",
        "name": "Chambery/Aix-les-Bains Airport"
    },
    {
        "code": "CMG",
        "country": "BR",
        "state": "MS",
        "name": "Corumba International Airport"
    },
    {
        "code": "CMH",
        "country": "US",
        "state": "OH",
        "name": "John Glenn International Airport"
    },
    {
        "code": "CMI",
        "country": "US",
        "state": "IL",
        "name": "University of Illinois Airport"
    },
    {
        "code": "CMN",
        "country": "MA",
        "state": "",
        "name": "Mohammed V Airport"
    },
    {
        "code": "CMW",
        "country": "CU",
        "state": "",
        "name": "Ignacio Agramonte International Airport"
    },
    {
        "code": "CMX",
        "country": "US",
        "state": "MI",
        "name": "Houghton County Memorial Airport"
    },
    {
        "code": "CNC",
        "country": "AU",
        "state": "QL",
        "name": "Coconut Island Airport"
    },
    {
        "code": "CND",
        "country": "RO",
        "state": "",
        "name": "Mihail Kogalniceanu Airport"
    },
    {
        "code": "CNF",
        "country": "BR",
        "state": "MG",
        "name": "Tancredo Neves International Airport"
    },
    {
        "code": "CNJ",
        "country": "AU",
        "state": "QL",
        "name": "Cloncurry Airport"
    },
    {
        "code": "CNM",
        "country": "US",
        "state": "NM",
        "name": "Cavern City Air Terminal"
    },
    {
        "code": "CNN",
        "country": "IN",
        "state": "KL",
        "name": "Kannur International Airport"
    },
    {
        "code": "CNP",
        "country": "GL",
        "state": "",
        "name": "Neerlerit Inaat Airport"
    },
    {
        "code": "CNQ",
        "country": "AR",
        "state": "CR",
        "name": "Corrientes Airport"
    },
    {
        "code": "CNS",
        "country": "AU",
        "state": "QL",
        "name": "Cairns International Airport"
    },
    {
        "code": "CNX",
        "country": "TH",
        "state": "",
        "name": "Chiang Mai International Airport"
    },
    {
        "code": "CNY",
        "country": "US",
        "state": "UT",
        "name": "Canyonlands Field"
    },
    {
        "code": "COD",
        "country": "US",
        "state": "WY",
        "name": "Yellowstone Regional Airport"
    },
    {
        "code": "COH",
        "country": "IN",
        "state": "WB",
        "name": "Cooch Behar Airport"
    },
    {
        "code": "COK",
        "country": "IN",
        "state": "KL",
        "name": "Kochi International Airport"
    },
    {
        "code": "COL",
        "country": "GB",
        "state": "",
        "name": "Coll Island Airport"
    },
    {
        "code": "COO",
        "country": "BJ",
        "state": "",
        "name": "Cadjehoun Airport"
    },
    {
        "code": "COR",
        "country": "AR",
        "state": "CD",
        "name": "A.L.V. Taravella Airport"
    },
    {
        "code": "COS",
        "country": "US",
        "state": "CO",
        "name": "Colorado Springs Municipal Airport"
    },
    {
        "code": "COU",
        "country": "US",
        "state": "MO",
        "name": "Columbia Regional Airport"
    },
    {
        "code": "CPC",
        "country": "AR",
        "state": "NE",
        "name": "Aviador Carlos Campos Airport"
    },
    {
        "code": "CPD",
        "country": "AU",
        "state": "SA",
        "name": "Coober Pedy Airport"
    },
    {
        "code": "CPE",
        "country": "MX",
        "state": "",
        "name": "Alberto Acuna Ongay International Airpo"
    },
    {
        "code": "CPH",
        "country": "DK",
        "state": "",
        "name": "Kastrup Airport"
    },
    {
        "code": "CPO",
        "country": "CL",
        "state": "",
        "name": "Desierto de Atacama Airport"
    },
    {
        "code": "CPR",
        "country": "US",
        "state": "WY",
        "name": "Natrona County International Airport"
    },
    {
        "code": "CPT",
        "country": "ZA",
        "state": "",
        "name": "Cape Town International Airport"
    },
    {
        "code": "CPV",
        "country": "BR",
        "state": "PB",
        "name": "Joao Suassuna Airport"
    },
    {
        "code": "CPX",
        "country": "PR",
        "state": "",
        "name": "Benjamin Rivera Noriega Airport"
    },
    {
        "code": "CQD",
        "country": "IR",
        "state": "",
        "name": "Shahre Kord Airport"
    },
    {
        "code": "CQW",
        "country": "CN",
        "state": "",
        "name": "Chongqing Xiannvshan Airport"
    },
    {
        "code": "CRA",
        "country": "RO",
        "state": "",
        "name": "Craiova Airport"
    },
    {
        "code": "CRD",
        "country": "AR",
        "state": "CB",
        "name": "General E. Mosconi Airport"
    },
    {
        "code": "CRI",
        "country": "BS",
        "state": "",
        "name": "Colonel Hill Airport"
    },
    {
        "code": "CRK",
        "country": "PH",
        "state": "",
        "name": "Clark International Airport"
    },
    {
        "code": "CRL",
        "country": "BE",
        "state": "",
        "name": "Brussels S. Charleroi Airport"
    },
    {
        "code": "CRM",
        "country": "PH",
        "state": "",
        "name": "Catarman National Airport"
    },
    {
        "code": "CRP",
        "country": "US",
        "state": "TX",
        "name": "Corpus Christi International Airport"
    },
    {
        "code": "CRV",
        "country": "IT",
        "state": "",
        "name": "Crotone Airport"
    },
    {
        "code": "CRW",
        "country": "US",
        "state": "WV",
        "name": "Yeager Airport"
    },
    {
        "code": "CRZ",
        "country": "TM",
        "state": "",
        "name": "Turkmenabat Airport"
    },
    {
        "code": "CSA",
        "country": "GB",
        "state": "",
        "name": "Colonsay Airport"
    },
    {
        "code": "CSG",
        "country": "US",
        "state": "GA",
        "name": "Columbus Airport"
    },
    {
        "code": "CSK",
        "country": "SN",
        "state": "",
        "name": "Cap Skiring Airport"
    },
    {
        "code": "CSU",
        "country": "BR",
        "state": "RS",
        "name": "Santa Cruz do Sul Airport"
    },
    {
        "code": "CSX",
        "country": "CN",
        "state": "",
        "name": "Huanghua International Airport"
    },
    {
        "code": "CSY",
        "country": "RU",
        "state": "",
        "name": "Cheboksary Airport"
    },
    {
        "code": "CTA",
        "country": "IT",
        "state": "",
        "name": "Fontanarossa Airport"
    },
    {
        "code": "CTC",
        "country": "AR",
        "state": "CA",
        "name": "Catamarca Airport"
    },
    {
        "code": "CTD",
        "country": "PA",
        "state": "",
        "name": "Alonso Valderrama Airport"
    },
    {
        "code": "CTG",
        "country": "CO",
        "state": "",
        "name": "Rafael Nunez International Airport"
    },
    {
        "code": "CTJ",
        "country": "IT",
        "state": "",
        "name": "Caserta Railway Station"
    },
    {
        "code": "CTL",
        "country": "AU",
        "state": "QL",
        "name": "Charleville Airport"
    },
    {
        "code": "CTM",
        "country": "MX",
        "state": "",
        "name": "Chetumal International Airport"
    },
    {
        "code": "CTN",
        "country": "AU",
        "state": "QL",
        "name": "Cooktown Airport"
    },
    {
        "code": "CTS",
        "country": "JP",
        "state": "",
        "name": "New Chitose Airport"
    },
    {
        "code": "CTU",
        "country": "CN",
        "state": "",
        "name": "Shuangliu International"
    },
    {
        "code": "CUC",
        "country": "CO",
        "state": "",
        "name": "Camilo Daza Airport"
    },
    {
        "code": "CUE",
        "country": "EC",
        "state": "",
        "name": "Mariscal Lamar International Airport"
    },
    {
        "code": "CUF",
        "country": "IT",
        "state": "",
        "name": "Levaldigi Airport"
    },
    {
        "code": "CUK",
        "country": "BZ",
        "state": "",
        "name": "Caye Caulker Airport"
    },
    {
        "code": "CUL",
        "country": "MX",
        "state": "",
        "name": "Federal de Bachigualato Airport"
    },
    {
        "code": "CUM",
        "country": "VE",
        "state": "",
        "name": "Antonio Jose de Sucre Airport"
    },
    {
        "code": "CUN",
        "country": "MX",
        "state": "",
        "name": "Cancun International Airport"
    },
    {
        "code": "CUQ",
        "country": "AU",
        "state": "QL",
        "name": "Coen Airport"
    },
    {
        "code": "CUR",
        "country": "CW",
        "state": "",
        "name": "Hato International Airport"
    },
    {
        "code": "CUU",
        "country": "MX",
        "state": "",
        "name": "R. Fierro Villalobos Airport"
    },
    {
        "code": "CUZ",
        "country": "PE",
        "state": "",
        "name": "Alejandro Velasco Astete International"
    },
    {
        "code": "CVG",
        "country": "US",
        "state": "OH",
        "name": "Northern Kentucky International Airport"
    },
    {
        "code": "CVM",
        "country": "MX",
        "state": "",
        "name": "Pedro Jose Mendez International Airport"
    },
    {
        "code": "CVN",
        "country": "US",
        "state": "NM",
        "name": "Clovis Municipal Airport"
    },
    {
        "code": "CVQ",
        "country": "AU",
        "state": "WA",
        "name": "Carnarvon Airport"
    },
    {
        "code": "CVT",
        "country": "GB",
        "state": "",
        "name": "Coventry Airport"
    },
    {
        "code": "CVU",
        "country": "PT",
        "state": "",
        "name": "Corvo Island Airport"
    },
    {
        "code": "CWA",
        "country": "US",
        "state": "WI",
        "name": "Central Wisconsin Airport"
    },
    {
        "code": "CWB",
        "country": "BR",
        "state": "PR",
        "name": "Afonso Pena International Airport"
    },
    {
        "code": "CWJ",
        "country": "CN",
        "state": "",
        "name": "Washan Airport"
    },
    {
        "code": "CWL",
        "country": "GB",
        "state": "",
        "name": "Cardiff Airport"
    },
    {
        "code": "CXB",
        "country": "BD",
        "state": "",
        "name": "Coxs Bazar Airport"
    },
    {
        "code": "CXH",
        "country": "CA",
        "state": "BC",
        "name": "Vancouver Harbour Sea Plane Base"
    },
    {
        "code": "CXI",
        "country": "KI",
        "state": "",
        "name": "Cassidy International Airport"
    },
    {
        "code": "CXJ",
        "country": "BR",
        "state": "RS",
        "name": "Hugo Cantergiani Airport"
    },
    {
        "code": "CXR",
        "country": "VN",
        "state": "",
        "name": "Cam Ranh International Airport"
    },
    {
        "code": "CXT",
        "country": "AU",
        "state": "QL",
        "name": "Charters Towers Airport"
    },
    {
        "code": "CXX",
        "country": "GB",
        "state": "",
        "name": "Carlisle Central Railway Station"
    },
    {
        "code": "CYA",
        "country": "HT",
        "state": "",
        "name": "Antoine-Simon Airport"
    },
    {
        "code": "CYB",
        "country": "KY",
        "state": "",
        "name": "Charles Kirkconnell International Airpo"
    },
    {
        "code": "CYF",
        "country": "US",
        "state": "AK",
        "name": "Chefornak Airport"
    },
    {
        "code": "CYI",
        "country": "TW",
        "state": "",
        "name": "Chiayi Airport"
    },
    {
        "code": "CYO",
        "country": "CU",
        "state": "",
        "name": "Vilo Acuna International Airport"
    },
    {
        "code": "CYP",
        "country": "PH",
        "state": "",
        "name": "Calbayog Airport"
    },
    {
        "code": "CYS",
        "country": "US",
        "state": "WY",
        "name": "Cheyenne Regional Airport"
    },
    {
        "code": "CYX",
        "country": "RU",
        "state": "",
        "name": "Chersky Airport"
    },
    {
        "code": "CYZ",
        "country": "PH",
        "state": "",
        "name": "Cauayan Airport"
    },
    {
        "code": "CZH",
        "country": "BZ",
        "state": "",
        "name": "Corozal Airport"
    },
    {
        "code": "CZL",
        "country": "DZ",
        "state": "",
        "name": "Mohamed Boudiaf Airport"
    },
    {
        "code": "CZM",
        "country": "MX",
        "state": "",
        "name": "Cozumel International Airport"
    },
    {
        "code": "CZN",
        "country": "US",
        "state": "AK",
        "name": "Chisana Airport"
    },
    {
        "code": "CZS",
        "country": "BR",
        "state": "AC",
        "name": "Cruzeiro do Sul International Airport"
    },
    {
        "code": "CZU",
        "country": "CO",
        "state": "",
        "name": "Las Brujas Airport"
    },
    {
        "code": "CZX",
        "country": "CN",
        "state": "",
        "name": "Benniu Airport"
    },
    {
        "code": "DAB",
        "country": "US",
        "state": "FL",
        "name": "Daytona Beach International Airport"
    },
    {
        "code": "DAC",
        "country": "BD",
        "state": "",
        "name": "Hazrat Shahjalal International"
    },
    {
        "code": "DAD",
        "country": "VN",
        "state": "",
        "name": "Da Nang International Airport"
    },
    {
        "code": "DAL",
        "country": "US",
        "state": "TX",
        "name": "Love Field"
    },
    {
        "code": "DAM",
        "country": "SY",
        "state": "",
        "name": "Damascus International Airport"
    },
    {
        "code": "DAR",
        "country": "TZ",
        "state": "",
        "name": "Julius Nyerere International Airport"
    },
    {
        "code": "DAT",
        "country": "CN",
        "state": "",
        "name": "Beijiazao Airport"
    },
    {
        "code": "DAU",
        "country": "PG",
        "state": "",
        "name": "Daru Airport"
    },
    {
        "code": "DAV",
        "country": "PA",
        "state": "",
        "name": "Enrique Malek International Airport"
    },
    {
        "code": "DAY",
        "country": "US",
        "state": "OH",
        "name": "James M. Cox International Airport"
    },
    {
        "code": "DBB",
        "country": "EG",
        "state": "",
        "name": "Al Alamain International"
    },
    {
        "code": "DBC",
        "country": "CN",
        "state": "",
        "name": "Chang'an Airport"
    },
    {
        "code": "DBO",
        "country": "AU",
        "state": "NS",
        "name": "Dubbo City Airport"
    },
    {
        "code": "DBQ",
        "country": "US",
        "state": "IA",
        "name": "Dubuque Regional Airport"
    },
    {
        "code": "DBR",
        "country": "IN",
        "state": "BR",
        "name": "Darbhanga Airport"
    },
    {
        "code": "DBV",
        "country": "HR",
        "state": "",
        "name": "Dubrovnik Airport"
    },
    {
        "code": "DCA",
        "country": "US",
        "state": "DC",
        "name": "Ronald Reagan National Airport"
    },
    {
        "code": "DCF",
        "country": "DM",
        "state": "",
        "name": "Canefield Airport"
    },
    {
        "code": "DCM",
        "country": "FR",
        "state": "",
        "name": "Mazamet Airport"
    },
    {
        "code": "DCY",
        "country": "CN",
        "state": "",
        "name": "Yading Airport"
    },
    {
        "code": "DDC",
        "country": "US",
        "state": "KS",
        "name": "Dodge City Regional Airport"
    },
    {
        "code": "DDD",
        "country": "MV",
        "state": "",
        "name": "Dhaalu Atoll Airport"
    },
    {
        "code": "DDG",
        "country": "CN",
        "state": "",
        "name": "Langtou Airport"
    },
    {
        "code": "DDR",
        "country": "CN",
        "state": "",
        "name": "Xigaze Dingri Airport"
    },
    {
        "code": "DEB",
        "country": "HU",
        "state": "",
        "name": "Debrecen Airport"
    },
    {
        "code": "DEC",
        "country": "US",
        "state": "IL",
        "name": "Decatur Airport"
    },
    {
        "code": "DED",
        "country": "IN",
        "state": "UT",
        "name": "Jolly Grant Airport"
    },
    {
        "code": "DEE",
        "country": "RU",
        "state": "",
        "name": "Mendeleyevo Airport"
    },
    {
        "code": "DEF",
        "country": "IR",
        "state": "",
        "name": "Dezful Airport"
    },
    {
        "code": "DEL",
        "country": "IN",
        "state": "DL",
        "name": "Indira Gandhi International Airport"
    },
    {
        "code": "DEM",
        "country": "ET",
        "state": "",
        "name": "Dembi Dolo Airport"
    },
    {
        "code": "DEN",
        "country": "US",
        "state": "CO",
        "name": "Denver International Airport"
    },
    {
        "code": "DEX",
        "country": "ID",
        "state": "",
        "name": "Nop Goliath Airport"
    },
    {
        "code": "DFW",
        "country": "US",
        "state": "TX",
        "name": "Dallas/Ft. Worth International Airport"
    },
    {
        "code": "DGA",
        "country": "BZ",
        "state": "",
        "name": "Dangriga Airport"
    },
    {
        "code": "DGE",
        "country": "AU",
        "state": "NS",
        "name": "Mudgee Airport"
    },
    {
        "code": "DGH",
        "country": "IN",
        "state": "JH",
        "name": "Deoghar International Airport"
    },
    {
        "code": "DGO",
        "country": "MX",
        "state": "",
        "name": "Guadalupe Victoria International Airpor"
    },
    {
        "code": "DGT",
        "country": "PH",
        "state": "",
        "name": "Sibulan Airport"
    },
    {
        "code": "DHC",
        "country": "DE",
        "state": "",
        "name": "Bremen HBF"
    },
    {
        "code": "DHG",
        "country": "RU",
        "state": "",
        "name": "Dalnegorsk Airport"
    },
    {
        "code": "DHI",
        "country": "NP",
        "state": "",
        "name": "Dhangarhi Airport"
    },
    {
        "code": "DHM",
        "country": "IN",
        "state": "HP",
        "name": "Kangra Airport"
    },
    {
        "code": "DHN",
        "country": "US",
        "state": "AL",
        "name": "Dothan Regional Airport"
    },
    {
        "code": "DIB",
        "country": "IN",
        "state": "AS",
        "name": "Mohanbari Airport"
    },
    {
        "code": "DIE",
        "country": "MG",
        "state": "",
        "name": "Arrachart Airport"
    },
    {
        "code": "DIG",
        "country": "CN",
        "state": "",
        "name": "Shangri-La Airport"
    },
    {
        "code": "DIK",
        "country": "US",
        "state": "ND",
        "name": "Theodore Roosevelt Regional Airport"
    },
    {
        "code": "DIL",
        "country": "TL",
        "state": "",
        "name": "Pres. Nicolau Lobato Airport"
    },
    {
        "code": "DIN",
        "country": "VN",
        "state": "",
        "name": "Dien Bien Phu Airport"
    },
    {
        "code": "DIR",
        "country": "ET",
        "state": "",
        "name": "Aba Tenna Dejazmach Yilma International"
    },
    {
        "code": "DIU",
        "country": "IN",
        "state": "DD",
        "name": "Diu Airport"
    },
    {
        "code": "DIY",
        "country": "TR",
        "state": "",
        "name": "Diyarbakir Airport"
    },
    {
        "code": "DJB",
        "country": "ID",
        "state": "",
        "name": "Sultan Thaha Airport"
    },
    {
        "code": "DJE",
        "country": "TN",
        "state": "",
        "name": "Zarzis Airport"
    },
    {
        "code": "DJG",
        "country": "DZ",
        "state": "",
        "name": "Tiska Airport"
    },
    {
        "code": "DJJ",
        "country": "ID",
        "state": "",
        "name": "Sentani Airport"
    },
    {
        "code": "DJN",
        "country": "US",
        "state": "AK",
        "name": "Delta Junction Airport"
    },
    {
        "code": "DKA",
        "country": "NG",
        "state": "",
        "name": "Katsina Airport"
    },
    {
        "code": "DKR",
        "country": "SN",
        "state": "",
        "name": "Leopold Sedar Senghor"
    },
    {
        "code": "DKS",
        "country": "RU",
        "state": "",
        "name": "Dikson Airport"
    },
    {
        "code": "DLA",
        "country": "CM",
        "state": "",
        "name": "Douala International Airport"
    },
    {
        "code": "DLC",
        "country": "CN",
        "state": "",
        "name": "Zhoushuizi International Airport"
    },
    {
        "code": "DLE",
        "country": "FR",
        "state": "",
        "name": "Tavaux Airport"
    },
    {
        "code": "DLG",
        "country": "US",
        "state": "AK",
        "name": "Dillingham Airport"
    },
    {
        "code": "DLH",
        "country": "US",
        "state": "MN",
        "name": "Duluth International Airport"
    },
    {
        "code": "DLI",
        "country": "VN",
        "state": "",
        "name": "Lien Khuong Airport"
    },
    {
        "code": "DLM",
        "country": "TR",
        "state": "",
        "name": "Dalaman Airport"
    },
    {
        "code": "DLU",
        "country": "CN",
        "state": "",
        "name": "Dali Airport"
    },
    {
        "code": "DLY",
        "country": "VU",
        "state": "",
        "name": "Dillon's Bay Airport"
    },
    {
        "code": "DLZ",
        "country": "MN",
        "state": "",
        "name": "Gurvan Saikhan Airport"
    },
    {
        "code": "DMB",
        "country": "KZ",
        "state": "",
        "name": "Taraz Airport"
    },
    {
        "code": "DMD",
        "country": "AU",
        "state": "QL",
        "name": "Doomadgee Airport"
    },
    {
        "code": "DME",
        "country": "RU",
        "state": "",
        "name": "Domodedovo Airport"
    },
    {
        "code": "DMK",
        "country": "TH",
        "state": "",
        "name": "Don Mueang International Airport"
    },
    {
        "code": "DMM",
        "country": "SA",
        "state": "",
        "name": "King Fahd International Airport"
    },
    {
        "code": "DMS",
        "country": "SA",
        "state": "",
        "name": "SABTCO Bus Station"
    },
    {
        "code": "DMU",
        "country": "IN",
        "state": "NL",
        "name": "Dimapur Airport"
    },
    {
        "code": "DND",
        "country": "GB",
        "state": "",
        "name": "Dundee Airport"
    },
    {
        "code": "DNH",
        "country": "CN",
        "state": "",
        "name": "Dunhuang Airport"
    },
    {
        "code": "DNZ",
        "country": "TR",
        "state": "",
        "name": "Cardak Airport"
    },
    {
        "code": "DOB",
        "country": "ID",
        "state": "",
        "name": "Rar Gwamar Airport"
    },
    {
        "code": "DOD",
        "country": "TZ",
        "state": "",
        "name": "Dodoma Airport"
    },
    {
        "code": "DOH",
        "country": "QA",
        "state": "",
        "name": "Hamad International Airport"
    },
    {
        "code": "DOL",
        "country": "FR",
        "state": "",
        "name": "Saint Gatien Airport"
    },
    {
        "code": "DOM",
        "country": "DM",
        "state": "",
        "name": "Melville Hall Airport"
    },
    {
        "code": "DOY",
        "country": "CN",
        "state": "",
        "name": "Shengli Airport"
    },
    {
        "code": "DPB",
        "country": "CL",
        "state": "",
        "name": "Pampa Guanaco Airport"
    },
    {
        "code": "DPL",
        "country": "PH",
        "state": "",
        "name": "Dipolog Airport"
    },
    {
        "code": "DPO",
        "country": "AU",
        "state": "TS",
        "name": "Devonport Airport"
    },
    {
        "code": "DPS",
        "country": "ID",
        "state": "",
        "name": "Ngurah Rai Airport"
    },
    {
        "code": "DPT",
        "country": "RU",
        "state": "",
        "name": "Deputatsky Airport"
    },
    {
        "code": "DQA",
        "country": "CN",
        "state": "",
        "name": "Sartu Airport"
    },
    {
        "code": "DQM",
        "country": "OM",
        "state": "",
        "name": "Duqm International Airport"
    },
    {
        "code": "DRB",
        "country": "AU",
        "state": "WA",
        "name": "Derby Airport"
    },
    {
        "code": "DRG",
        "country": "US",
        "state": "AK",
        "name": "Deering Airport"
    },
    {
        "code": "DRK",
        "country": "CR",
        "state": "",
        "name": "Drake Bay Airport"
    },
    {
        "code": "DRO",
        "country": "US",
        "state": "CO",
        "name": "La Plata County Airport"
    },
    {
        "code": "DRP",
        "country": "PH",
        "state": "",
        "name": "Legazpi, PH Airport"
    },
    {
        "code": "DRS",
        "country": "DE",
        "state": "",
        "name": "Dresden Airport"
    },
    {
        "code": "DRV",
        "country": "MV",
        "state": "",
        "name": "Dharavandhoo Island Airport"
    },
    {
        "code": "DRW",
        "country": "AU",
        "state": "NT",
        "name": "Darwin International Airport"
    },
    {
        "code": "DSA",
        "country": "GB",
        "state": "",
        "name": "Robin Hood Airport"
    },
    {
        "code": "DSE",
        "country": "ET",
        "state": "",
        "name": "Kombolcha Airport"
    },
    {
        "code": "DSI",
        "country": "US",
        "state": "FL",
        "name": "Destin Executive Airport"
    },
    {
        "code": "DSM",
        "country": "US",
        "state": "IA",
        "name": "Des Moines International Airport"
    },
    {
        "code": "DSN",
        "country": "CN",
        "state": "",
        "name": "Ejin Horo Airport"
    },
    {
        "code": "DSS",
        "country": "SN",
        "state": "",
        "name": "Blaise Diagne International Airport"
    },
    {
        "code": "DTB",
        "country": "ID",
        "state": "",
        "name": "Silangit Airport"
    },
    {
        "code": "DTM",
        "country": "DE",
        "state": "",
        "name": "Dortmund Airport"
    },
    {
        "code": "DTU",
        "country": "CN",
        "state": "",
        "name": "Dedu Airport"
    },
    {
        "code": "DTW",
        "country": "US",
        "state": "MI",
        "name": "Metropolitan Wayne County Airport"
    },
    {
        "code": "DTZ",
        "country": "DE",
        "state": "",
        "name": "Dortmund Hbf Railway Station"
    },
    {
        "code": "DUB",
        "country": "IE",
        "state": "",
        "name": "Dublin International Airport"
    },
    {
        "code": "DUD",
        "country": "NZ",
        "state": "",
        "name": "Dunedin International Airport"
    },
    {
        "code": "DUE",
        "country": "AO",
        "state": "",
        "name": "Dundo Airport"
    },
    {
        "code": "DUJ",
        "country": "US",
        "state": "PA",
        "name": "DuBois Regional Airport"
    },
    {
        "code": "DUR",
        "country": "ZA",
        "state": "",
        "name": "King Shaka International Airport"
    },
    {
        "code": "DUS",
        "country": "DE",
        "state": "",
        "name": "Duesseldorf International"
    },
    {
        "code": "DUT",
        "country": "US",
        "state": "AK",
        "name": "Driftwood Bay Air Force Station"
    },
    {
        "code": "DVL",
        "country": "US",
        "state": "ND",
        "name": "Devils Lake Regional Airport"
    },
    {
        "code": "DVO",
        "country": "PH",
        "state": "",
        "name": "Francisco Bangoy International Airport"
    },
    {
        "code": "DWC",
        "country": "AE",
        "state": "",
        "name": "Al Maktoum International"
    },
    {
        "code": "DWD",
        "country": "SA",
        "state": "",
        "name": "ALDAWADMI AIRPORT"
    },
    {
        "code": "DXB",
        "country": "AE",
        "state": "",
        "name": "Dubai International Airport"
    },
    {
        "code": "DXJ",
        "country": "CN",
        "state": "",
        "name": "Xiangxi Biancheng Airport"
    },
    {
        "code": "DYG",
        "country": "CN",
        "state": "",
        "name": "Hehua Airport"
    },
    {
        "code": "DYR",
        "country": "RU",
        "state": "",
        "name": "Ugolny Airport"
    },
    {
        "code": "DYU",
        "country": "TJ",
        "state": "",
        "name": "Dushanbe International Airport"
    },
    {
        "code": "DZA",
        "country": "YT",
        "state": "",
        "name": "Pamandzi International Airport"
    },
    {
        "code": "DZH",
        "country": "CN",
        "state": "",
        "name": "Dazhou Jinya"
    },
    {
        "code": "DZN",
        "country": "KZ",
        "state": "",
        "name": "Zhezkazgan Airport"
    },
    {
        "code": "EAA",
        "country": "US",
        "state": "AK",
        "name": "Eagle Airport"
    },
    {
        "code": "EAM",
        "country": "SA",
        "state": "",
        "name": "Nejran Airport"
    },
    {
        "code": "EAR",
        "country": "US",
        "state": "NE",
        "name": "Kearney Regional Airport"
    },
    {
        "code": "EAS",
        "country": "ES",
        "state": "",
        "name": "San Sebastian Airport"
    },
    {
        "code": "EAT",
        "country": "US",
        "state": "WA",
        "name": "Pangborn Memorial Airport"
    },
    {
        "code": "EAU",
        "country": "US",
        "state": "WI",
        "name": "Chippewa Valley Regional Airport"
    },
    {
        "code": "EBB",
        "country": "UG",
        "state": "",
        "name": "Entebbe International Airport"
    },
    {
        "code": "EBG",
        "country": "CO",
        "state": "",
        "name": "El Bagre Airport"
    },
    {
        "code": "EBH",
        "country": "DZ",
        "state": "",
        "name": "El Bayadh Airport"
    },
    {
        "code": "EBJ",
        "country": "DK",
        "state": "",
        "name": "Esbjerg Airport"
    },
    {
        "code": "EBL",
        "country": "IQ",
        "state": "",
        "name": "Erbil International Airport"
    },
    {
        "code": "EBV",
        "country": "FR",
        "state": "",
        "name": "Saint Etienne Bus Station"
    },
    {
        "code": "ECN",
        "country": "CY",
        "state": "",
        "name": "Ercan Airport"
    },
    {
        "code": "ECP",
        "country": "US",
        "state": "FL",
        "name": "NW Florida Beaches International Airpor"
    },
    {
        "code": "EDI",
        "country": "GB",
        "state": "",
        "name": "Edinburgh Airport"
    },
    {
        "code": "EDL",
        "country": "KE",
        "state": "",
        "name": "Eldoret International Airport"
    },
    {
        "code": "EDN",
        "country": "RU",
        "state": "",
        "name": "Yedinka Airport"
    },
    {
        "code": "EDO",
        "country": "TR",
        "state": "",
        "name": "Koca Seyit Airport"
    },
    {
        "code": "EDR",
        "country": "AU",
        "state": "QL",
        "name": "Pormpuraaw Airport"
    },
    {
        "code": "EEA",
        "country": "BR",
        "state": "SC",
        "name": "Reg do Planalto Serano"
    },
    {
        "code": "EEK",
        "country": "US",
        "state": "AK",
        "name": "Eek Airport"
    },
    {
        "code": "EEM",
        "country": "ES",
        "state": "",
        "name": "Albacete Railway Station"
    },
    {
        "code": "EEP",
        "country": "ES",
        "state": "",
        "name": "Pamplona Railway Station"
    },
    {
        "code": "EEU",
        "country": "ES",
        "state": "",
        "name": "Leon Railway Station"
    },
    {
        "code": "EFL",
        "country": "GR",
        "state": "",
        "name": "Kefallinia Airport"
    },
    {
        "code": "EGC",
        "country": "FR",
        "state": "",
        "name": "Roumaniere Airport"
    },
    {
        "code": "EGE",
        "country": "US",
        "state": "CO",
        "name": "Eagle County Regional Airport"
    },
    {
        "code": "EGM",
        "country": "SB",
        "state": "",
        "name": "Seghe Airport"
    },
    {
        "code": "EGN",
        "country": "SD",
        "state": "",
        "name": "Geneina Airport"
    },
    {
        "code": "EGO",
        "country": "RU",
        "state": "",
        "name": "Belgorod Airport"
    },
    {
        "code": "EGS",
        "country": "IS",
        "state": "",
        "name": "Egilsstadir Airport"
    },
    {
        "code": "EHU",
        "country": "CN",
        "state": "",
        "name": "Ezhou Huahu Airport"
    },
    {
        "code": "EIN",
        "country": "NL",
        "state": "",
        "name": "Eindhoven Airport"
    },
    {
        "code": "EIS",
        "country": "VG",
        "state": "",
        "name": "Terrance B. Lettsome Airport"
    },
    {
        "code": "EJA",
        "country": "CO",
        "state": "",
        "name": "Yariguies Airport"
    },
    {
        "code": "EKO",
        "country": "US",
        "state": "NV",
        "name": "Elko Regional Airport"
    },
    {
        "code": "EKS",
        "country": "RU",
        "state": "",
        "name": "Shakhtersk Airport"
    },
    {
        "code": "ELC",
        "country": "AU",
        "state": "NT",
        "name": "Elcho Island Airport"
    },
    {
        "code": "ELD",
        "country": "US",
        "state": "AR",
        "name": "South Arkansas Regional Airport"
    },
    {
        "code": "ELG",
        "country": "DZ",
        "state": "",
        "name": "El Golea Airport"
    },
    {
        "code": "ELH",
        "country": "BS",
        "state": "",
        "name": "North Eleuthera Airport"
    },
    {
        "code": "ELI",
        "country": "US",
        "state": "AK",
        "name": "Elim Airport"
    },
    {
        "code": "ELM",
        "country": "US",
        "state": "NY",
        "name": "Elmira/Corning Regional Airport"
    },
    {
        "code": "ELP",
        "country": "US",
        "state": "TX",
        "name": "El Paso International Airport"
    },
    {
        "code": "ELQ",
        "country": "SA",
        "state": "",
        "name": "Gassim Airport"
    },
    {
        "code": "ELS",
        "country": "ZA",
        "state": "",
        "name": "East London Airport"
    },
    {
        "code": "ELU",
        "country": "DZ",
        "state": "",
        "name": "Guemar Airport"
    },
    {
        "code": "ELV",
        "country": "US",
        "state": "AK",
        "name": "Elfin Cove Sea Plane Base"
    },
    {
        "code": "EMA",
        "country": "GB",
        "state": "",
        "name": "East Midlands Airport"
    },
    {
        "code": "EMD",
        "country": "AU",
        "state": "QL",
        "name": "Emerald Airport"
    },
    {
        "code": "EMK",
        "country": "US",
        "state": "AK",
        "name": "Emmonak Airport"
    },
    {
        "code": "EMN",
        "country": "MR",
        "state": "",
        "name": "Nema Airport"
    },
    {
        "code": "ENA",
        "country": "US",
        "state": "AK",
        "name": "Kenai Municipal Airport"
    },
    {
        "code": "ENE",
        "country": "ID",
        "state": "",
        "name": "H.Hasan Aroeboesman Airport"
    },
    {
        "code": "ENH",
        "country": "CN",
        "state": "",
        "name": "Xujiaping Airport"
    },
    {
        "code": "ENI",
        "country": "PH",
        "state": "",
        "name": "El Nido Airport"
    },
    {
        "code": "ENU",
        "country": "NG",
        "state": "",
        "name": "Akanu Ibiam International Airport"
    },
    {
        "code": "ENY",
        "country": "CN",
        "state": "",
        "name": "Nanniwan Airport"
    },
    {
        "code": "EOH",
        "country": "CO",
        "state": "",
        "name": "Enrique Olaya Herrera Airport"
    },
    {
        "code": "EPR",
        "country": "AU",
        "state": "WA",
        "name": "Esperance Airport"
    },
    {
        "code": "EQS",
        "country": "AR",
        "state": "CB",
        "name": "Esquel Airport"
    },
    {
        "code": "ERC",
        "country": "TR",
        "state": "",
        "name": "Erzincan Airport"
    },
    {
        "code": "ERF",
        "country": "DE",
        "state": "",
        "name": "Erfurt-Weimar Airport"
    },
    {
        "code": "ERG",
        "country": "RU",
        "state": "",
        "name": "Yerbogachen Airport"
    },
    {
        "code": "ERH",
        "country": "MA",
        "state": "",
        "name": "Moulay Ali Cherif Airport"
    },
    {
        "code": "ERI",
        "country": "US",
        "state": "PA",
        "name": "Erie International Airport"
    },
    {
        "code": "ERL",
        "country": "CN",
        "state": "",
        "name": "Saiwusu International Airport"
    },
    {
        "code": "ERN",
        "country": "BR",
        "state": "AM",
        "name": "Amaury Feitosa Tomaz Airport"
    },
    {
        "code": "ERS",
        "country": "NA",
        "state": "",
        "name": "Eros Airport"
    },
    {
        "code": "ERZ",
        "country": "TR",
        "state": "",
        "name": "Erzurum Airport"
    },
    {
        "code": "ESB",
        "country": "TR",
        "state": "",
        "name": "Esenboga Airport"
    },
    {
        "code": "ESC",
        "country": "US",
        "state": "MI",
        "name": "Delta County Airport"
    },
    {
        "code": "ESD",
        "country": "US",
        "state": "WA",
        "name": "Orcas Island Airport"
    },
    {
        "code": "ESU",
        "country": "MA",
        "state": "",
        "name": "Mogador Airport"
    },
    {
        "code": "ESZ",
        "country": "DE",
        "state": "",
        "name": "Essen Hbf Railway Station"
    },
    {
        "code": "ETL",
        "country": "RU",
        "state": "",
        "name": "Svetlaya Airport"
    },
    {
        "code": "ETR",
        "country": "EC",
        "state": "",
        "name": "Santa Rosa International Airport"
    },
    {
        "code": "ETZ",
        "country": "FR",
        "state": "",
        "name": "Lorraine Airport"
    },
    {
        "code": "EUA",
        "country": "TO",
        "state": "",
        "name": "Kaufana Airport"
    },
    {
        "code": "EUG",
        "country": "US",
        "state": "OR",
        "name": "Mahlon Sweet Field"
    },
    {
        "code": "EUN",
        "country": "MA",
        "state": "",
        "name": "Hassan I Airport"
    },
    {
        "code": "EUQ",
        "country": "PH",
        "state": "",
        "name": "Evelio Javier Airport"
    },
    {
        "code": "EUX",
        "country": "BQ",
        "state": "",
        "name": "F.D. Roosevelt Airport"
    },
    {
        "code": "EVE",
        "country": "NO",
        "state": "",
        "name": "Evenes Airport"
    },
    {
        "code": "EVN",
        "country": "AM",
        "state": "",
        "name": "Zvartnots International Airport"
    },
    {
        "code": "EVV",
        "country": "US",
        "state": "IN",
        "name": "Evansville Regional Airport"
    },
    {
        "code": "EWB",
        "country": "US",
        "state": "MA",
        "name": "New Bedford Regional Airport"
    },
    {
        "code": "EWE",
        "country": "ID",
        "state": "",
        "name": "Ewer Airport"
    },
    {
        "code": "EWN",
        "country": "US",
        "state": "NC",
        "name": "Coastal Carolina Regional Airport"
    },
    {
        "code": "EWR",
        "country": "US",
        "state": "NY",
        "name": "Newark Liberty International Airport"
    },
    {
        "code": "EXS",
        "country": "GB",
        "state": "",
        "name": "Saint Thomas Railway Station"
    },
    {
        "code": "EXT",
        "country": "GB",
        "state": "",
        "name": "Exeter Airport"
    },
    {
        "code": "EYA",
        "country": "RU",
        "state": "",
        "name": "Zeya Airport"
    },
    {
        "code": "EYK",
        "country": "RU",
        "state": "",
        "name": "Beloyarsky Airport"
    },
    {
        "code": "EYP",
        "country": "CO",
        "state": "",
        "name": "El Alcaravan Airport"
    },
    {
        "code": "EYW",
        "country": "US",
        "state": "FL",
        "name": "Key West International Airport"
    },
    {
        "code": "EZE",
        "country": "AR",
        "state": "BA",
        "name": "Ministro Pistarini Airport"
    },
    {
        "code": "EZS",
        "country": "TR",
        "state": "",
        "name": "Elazig Airport"
    },
    {
        "code": "EZV",
        "country": "RU",
        "state": "",
        "name": "Berezovo Airport"
    },
    {
        "code": "FAC",
        "country": "PF",
        "state": "",
        "name": "Faaite Airport"
    },
    {
        "code": "FAE",
        "country": "FO",
        "state": "",
        "name": "Vagar Airport"
    },
    {
        "code": "FAI",
        "country": "US",
        "state": "AK",
        "name": "Fairbanks International Airport"
    },
    {
        "code": "FAO",
        "country": "PT",
        "state": "",
        "name": "Faro Airport"
    },
    {
        "code": "FAR",
        "country": "US",
        "state": "ND",
        "name": "Hector International Airport"
    },
    {
        "code": "FAT",
        "country": "US",
        "state": "CA",
        "name": "Fresno Yosemite International"
    },
    {
        "code": "FAV",
        "country": "PF",
        "state": "",
        "name": "Fakarava Airport"
    },
    {
        "code": "FAY",
        "country": "US",
        "state": "NC",
        "name": "Regional (Grannis Field) Airport"
    },
    {
        "code": "FBM",
        "country": "CD",
        "state": "",
        "name": "Luano International Airport"
    },
    {
        "code": "FCA",
        "country": "US",
        "state": "MT",
        "name": "Glacier Park International Airport"
    },
    {
        "code": "FCO",
        "country": "IT",
        "state": "",
        "name": "Fiumicino Airport"
    },
    {
        "code": "FDE",
        "country": "NO",
        "state": "",
        "name": "Bringeland Airport"
    },
    {
        "code": "FDF",
        "country": "MQ",
        "state": "",
        "name": "Martinique A. Cesaire Airport"
    },
    {
        "code": "FDH",
        "country": "DE",
        "state": "",
        "name": "Friedrichshafen Airport"
    },
    {
        "code": "FEC",
        "country": "BR",
        "state": "BA",
        "name": "Joao Durval Carneiro Airport"
    },
    {
        "code": "FEG",
        "country": "UZ",
        "state": "",
        "name": "Fergana International Airport"
    },
    {
        "code": "FEN",
        "country": "BR",
        "state": "PE",
        "name": "Fernando de Noronha Airport"
    },
    {
        "code": "FEZ",
        "country": "MA",
        "state": "",
        "name": "Saiss Airport"
    },
    {
        "code": "FGU",
        "country": "PF",
        "state": "",
        "name": "Fangatau Airport"
    },
    {
        "code": "FHZ",
        "country": "PF",
        "state": "",
        "name": "Fakahina Airport"
    },
    {
        "code": "FIE",
        "country": "GB",
        "state": "",
        "name": "Fair Isle Airport"
    },
    {
        "code": "FIH",
        "country": "CD",
        "state": "",
        "name": "N'djili International Airport"
    },
    {
        "code": "FIR",
        "country": "IT",
        "state": "",
        "name": "Campo Marte Railway Station"
    },
    {
        "code": "FIZ",
        "country": "AU",
        "state": "WA",
        "name": "Fitzroy Crossing Airport"
    },
    {
        "code": "FJR",
        "country": "AE",
        "state": "",
        "name": "Fujairah International Airport"
    },
    {
        "code": "FKB",
        "country": "DE",
        "state": "",
        "name": "Baden Airpark"
    },
    {
        "code": "FKI",
        "country": "CD",
        "state": "",
        "name": "Bangoka International Airport"
    },
    {
        "code": "FKQ",
        "country": "ID",
        "state": "",
        "name": "Torea Airport"
    },
    {
        "code": "FKS",
        "country": "JP",
        "state": "",
        "name": "Fukushima Airport"
    },
    {
        "code": "FLA",
        "country": "CO",
        "state": "",
        "name": "Gustavo A. Paredes Airport"
    },
    {
        "code": "FLG",
        "country": "US",
        "state": "AZ",
        "name": "Flagstaff Pulliam Airport"
    },
    {
        "code": "FLL",
        "country": "US",
        "state": "FL",
        "name": "Fort Lauderdale International Airport"
    },
    {
        "code": "FLN",
        "country": "BR",
        "state": "SC",
        "name": "Hercilio Luz International Airport"
    },
    {
        "code": "FLO",
        "country": "US",
        "state": "SC",
        "name": "Florence Regional Airport"
    },
    {
        "code": "FLR",
        "country": "IT",
        "state": "",
        "name": "Peretola Airport"
    },
    {
        "code": "FLS",
        "country": "AU",
        "state": "TS",
        "name": "Flinders Island Airport"
    },
    {
        "code": "FLW",
        "country": "PT",
        "state": "",
        "name": "Flores Island Airport"
    },
    {
        "code": "FLZ",
        "country": "ID",
        "state": "",
        "name": "Ferdinand LumbanTobing Airport"
    },
    {
        "code": "FMA",
        "country": "AR",
        "state": "FO",
        "name": "Formosa Airport"
    },
    {
        "code": "FMI",
        "country": "CD",
        "state": "",
        "name": "Kalemie Airport"
    },
    {
        "code": "FMM",
        "country": "DE",
        "state": "",
        "name": "Allgaeu Airport"
    },
    {
        "code": "FMO",
        "country": "DE",
        "state": "",
        "name": "Muenster/Osnabrueck Airport"
    },
    {
        "code": "FMT",
        "country": "MV",
        "state": "",
        "name": "Faresmathoda Airport"
    },
    {
        "code": "FNA",
        "country": "SL",
        "state": "",
        "name": "Lungi International Airport"
    },
    {
        "code": "FNC",
        "country": "PT",
        "state": "",
        "name": "Madeira Airport"
    },
    {
        "code": "FND",
        "country": "MV",
        "state": "",
        "name": "Funadhoo Station"
    },
    {
        "code": "FNI",
        "country": "FR",
        "state": "",
        "name": "Garons Airport"
    },
    {
        "code": "FNL",
        "country": "US",
        "state": "CO",
        "name": "Fort Collins/Loveland Municipal Airport"
    },
    {
        "code": "FNT",
        "country": "US",
        "state": "MI",
        "name": "Bishop International Airport"
    },
    {
        "code": "FOA",
        "country": "GB",
        "state": "",
        "name": "Foula Airport"
    },
    {
        "code": "FOC",
        "country": "CN",
        "state": "",
        "name": "Changle International Airport"
    },
    {
        "code": "FOD",
        "country": "US",
        "state": "IA",
        "name": "Fort Dodge Regional Airport"
    },
    {
        "code": "FOG",
        "country": "IT",
        "state": "",
        "name": "Gino Lisa Airport"
    },
    {
        "code": "FOI",
        "country": "IT",
        "state": "",
        "name": "Foggia Railway Station"
    },
    {
        "code": "FON",
        "country": "CR",
        "state": "",
        "name": "Arenal Airport"
    },
    {
        "code": "FOR",
        "country": "BR",
        "state": "CE",
        "name": "Pinto Martins International Airport"
    },
    {
        "code": "FPO",
        "country": "BS",
        "state": "",
        "name": "Grand Bahama International Airport"
    },
    {
        "code": "FRA",
        "country": "DE",
        "state": "",
        "name": "Frankfurt International Airport"
    },
    {
        "code": "FRD",
        "country": "US",
        "state": "WA",
        "name": "Friday Harbor Airport"
    },
    {
        "code": "FRE",
        "country": "SB",
        "state": "",
        "name": "Fera Island Airport"
    },
    {
        "code": "FRL",
        "country": "IT",
        "state": "",
        "name": "Luigi Ridolfi Airport"
    },
    {
        "code": "FRO",
        "country": "NO",
        "state": "",
        "name": "Floro Airport"
    },
    {
        "code": "FRS",
        "country": "GT",
        "state": "",
        "name": "Mundo Maya International Airport"
    },
    {
        "code": "FRU",
        "country": "KG",
        "state": "",
        "name": "Manas International Airport"
    },
    {
        "code": "FRW",
        "country": "BW",
        "state": "",
        "name": "Francistown Airport"
    },
    {
        "code": "FSC",
        "country": "FR",
        "state": "",
        "name": "Sud-Corse Airport"
    },
    {
        "code": "FSD",
        "country": "US",
        "state": "SD",
        "name": "Joe Foss Field"
    },
    {
        "code": "FSM",
        "country": "US",
        "state": "AR",
        "name": "Fort Smith Regional Airport"
    },
    {
        "code": "FSP",
        "country": "PM",
        "state": "",
        "name": "Saint Pierre Airport"
    },
    {
        "code": "FSZ",
        "country": "JP",
        "state": "",
        "name": "Mount Fuji Airport"
    },
    {
        "code": "FTA",
        "country": "VU",
        "state": "",
        "name": "Futuna Island Airport"
    },
    {
        "code": "FTE",
        "country": "AR",
        "state": "SC",
        "name": "Comandante A. Tola Airport"
    },
    {
        "code": "FTU",
        "country": "MG",
        "state": "",
        "name": "Marillac Airport"
    },
    {
        "code": "FUE",
        "country": "ES",
        "state": "",
        "name": "Fuerteventura Airport"
    },
    {
        "code": "FUG",
        "country": "CN",
        "state": "",
        "name": "Xiguan Airport"
    },
    {
        "code": "FUJ",
        "country": "JP",
        "state": "",
        "name": "Goto-Fukue Airport"
    },
    {
        "code": "FUK",
        "country": "JP",
        "state": "",
        "name": "Fukuoka Airport"
    },
    {
        "code": "FUN",
        "country": "TV",
        "state": "",
        "name": "Funafuti International Airport"
    },
    {
        "code": "FUO",
        "country": "CN",
        "state": "",
        "name": "Shadi Airport"
    },
    {
        "code": "FVM",
        "country": "MV",
        "state": "",
        "name": "Fuvahmulak Island Airport"
    },
    {
        "code": "FWA",
        "country": "US",
        "state": "IN",
        "name": "Fort Wayne International Airport"
    },
    {
        "code": "FYG",
        "country": "CN",
        "state": "",
        "name": "Fuyong Ferry Port"
    },
    {
        "code": "FYJ",
        "country": "CN",
        "state": "",
        "name": "Fuyuan Airport"
    },
    {
        "code": "FYN",
        "country": "CN",
        "state": "",
        "name": "Fuyun Airport"
    },
    {
        "code": "FYU",
        "country": "US",
        "state": "AK",
        "name": "Fort Yukon Airport"
    },
    {
        "code": "GAE",
        "country": "TN",
        "state": "",
        "name": "Matmata Airport"
    },
    {
        "code": "GAJ",
        "country": "JP",
        "state": "",
        "name": "Yamagata Airport"
    },
    {
        "code": "GAL",
        "country": "US",
        "state": "AK",
        "name": "Edward G. Pitka Sr. Airport"
    },
    {
        "code": "GAM",
        "country": "US",
        "state": "AK",
        "name": "Gambell Airport"
    },
    {
        "code": "GAN",
        "country": "MV",
        "state": "",
        "name": "Gan Island International Airport"
    },
    {
        "code": "GAO",
        "country": "CU",
        "state": "",
        "name": "Mariana Grajales Airport"
    },
    {
        "code": "GAU",
        "country": "IN",
        "state": "AS",
        "name": "Gopinath Bordoloi International Airport"
    },
    {
        "code": "GAX",
        "country": "GA",
        "state": "",
        "name": "Yenzi Airport"
    },
    {
        "code": "GAY",
        "country": "IN",
        "state": "BR",
        "name": "Gaya Airport"
    },
    {
        "code": "GBE",
        "country": "BW",
        "state": "",
        "name": "Sir Seretse Khama International Airport"
    },
    {
        "code": "GBI",
        "country": "IN",
        "state": "KA",
        "name": "Kalaburagi Airport"
    },
    {
        "code": "GBJ",
        "country": "GP",
        "state": "",
        "name": "Marie-Galante Airport"
    },
    {
        "code": "GBT",
        "country": "IR",
        "state": "",
        "name": "Gorgan Airport"
    },
    {
        "code": "GCC",
        "country": "US",
        "state": "WY",
        "name": "Campbell County Airport"
    },
    {
        "code": "GCH",
        "country": "IR",
        "state": "",
        "name": "Gachsaran Airport"
    },
    {
        "code": "GCI",
        "country": "GG",
        "state": "",
        "name": "Guernsey Airport"
    },
    {
        "code": "GCK",
        "country": "US",
        "state": "KS",
        "name": "Garden City Regional Airport"
    },
    {
        "code": "GCM",
        "country": "KY",
        "state": "",
        "name": "Owen Roberts International Airport"
    },
    {
        "code": "GCN",
        "country": "US",
        "state": "AZ",
        "name": "Grand Canyon National Park Airport"
    },
    {
        "code": "GCW",
        "country": "US",
        "state": "AZ",
        "name": "Grand Canyon West Airport"
    },
    {
        "code": "GDB",
        "country": "IN",
        "state": "MH",
        "name": "Birsi Airport"
    },
    {
        "code": "GDE",
        "country": "ET",
        "state": "",
        "name": "Gode Airport"
    },
    {
        "code": "GDL",
        "country": "MX",
        "state": "",
        "name": "Miguel Hidalgo International Airport"
    },
    {
        "code": "GDN",
        "country": "PL",
        "state": "",
        "name": "Lech Walesa Airport"
    },
    {
        "code": "GDQ",
        "country": "ET",
        "state": "",
        "name": "Azezo Airport"
    },
    {
        "code": "GDT",
        "country": "TC",
        "state": "",
        "name": "J.A.G.S. McCartney International Airpor"
    },
    {
        "code": "GDV",
        "country": "US",
        "state": "MT",
        "name": "Dawson Community Airport"
    },
    {
        "code": "GDX",
        "country": "RU",
        "state": "",
        "name": "Sokol Airport"
    },
    {
        "code": "GDZ",
        "country": "RU",
        "state": "",
        "name": "Gelendzhik Airport"
    },
    {
        "code": "GEA",
        "country": "NC",
        "state": "",
        "name": "Magenta Airport"
    },
    {
        "code": "GEG",
        "country": "US",
        "state": "WA",
        "name": "Spokane International Airport"
    },
    {
        "code": "GEL",
        "country": "BR",
        "state": "RS",
        "name": "Sepe Tiaraju Airport"
    },
    {
        "code": "GEM",
        "country": "GQ",
        "state": "",
        "name": "Mongomeyen Airport"
    },
    {
        "code": "GEO",
        "country": "GY",
        "state": "",
        "name": "Cheddi Jagan International Airport"
    },
    {
        "code": "GEP",
        "country": "IT",
        "state": "",
        "name": "Brignole Railway Station"
    },
    {
        "code": "GER",
        "country": "CU",
        "state": "",
        "name": "Rafael Cabrera Airport"
    },
    {
        "code": "GES",
        "country": "PH",
        "state": "",
        "name": "General Santos International Airport"
    },
    {
        "code": "GET",
        "country": "AU",
        "state": "WA",
        "name": "Geraldton Airport"
    },
    {
        "code": "GEV",
        "country": "SE",
        "state": "",
        "name": "Gallivare Airport"
    },
    {
        "code": "GFF",
        "country": "AU",
        "state": "NS",
        "name": "Griffith Airport"
    },
    {
        "code": "GFK",
        "country": "US",
        "state": "ND",
        "name": "Grand Forks International Airport"
    },
    {
        "code": "GGA",
        "country": "ES",
        "state": "",
        "name": "La Graciosa Ferry Port"
    },
    {
        "code": "GGF",
        "country": "BR",
        "state": "PA",
        "name": "Almeirim Airport"
    },
    {
        "code": "GGG",
        "country": "US",
        "state": "TX",
        "name": "East Texas Regional Airport"
    },
    {
        "code": "GGJ",
        "country": "BR",
        "state": "PR",
        "name": "Guaira Airport"
    },
    {
        "code": "GGM",
        "country": "KE",
        "state": "",
        "name": "Kakamega Airport"
    },
    {
        "code": "GGR",
        "country": "SO",
        "state": "",
        "name": "Garowe Airport"
    },
    {
        "code": "GGT",
        "country": "BS",
        "state": "",
        "name": "Exuma International Airport"
    },
    {
        "code": "GGW",
        "country": "US",
        "state": "MT",
        "name": "Glasgow International Airport"
    },
    {
        "code": "GGZ",
        "country": "AT",
        "state": "",
        "name": "Graz Railway Station"
    },
    {
        "code": "GHA",
        "country": "DZ",
        "state": "",
        "name": "Noumerat Airport"
    },
    {
        "code": "GHB",
        "country": "BS",
        "state": "",
        "name": "Governor's Harbour Airport"
    },
    {
        "code": "GHS",
        "country": "ID",
        "state": "",
        "name": "Melalan Airport"
    },
    {
        "code": "GHT",
        "country": "LY",
        "state": "",
        "name": "Ghat Airport"
    },
    {
        "code": "GHV",
        "country": "RO",
        "state": "",
        "name": "Ghimbav Brasov Airport"
    },
    {
        "code": "GIB",
        "country": "GI",
        "state": "",
        "name": "Gibraltar Airport"
    },
    {
        "code": "GIC",
        "country": "AU",
        "state": "QL",
        "name": "Boigu Island Airport"
    },
    {
        "code": "GIG",
        "country": "BR",
        "state": "RJ",
        "name": "Galeao-A.C. Jobim International Airport"
    },
    {
        "code": "GIL",
        "country": "PK",
        "state": "",
        "name": "Gilgit Airport"
    },
    {
        "code": "GIS",
        "country": "NZ",
        "state": "",
        "name": "Gisborne Airport"
    },
    {
        "code": "GIT",
        "country": "TZ",
        "state": "",
        "name": "Geita Airport"
    },
    {
        "code": "GIZ",
        "country": "SA",
        "state": "",
        "name": "Gizan Airport"
    },
    {
        "code": "GJA",
        "country": "HN",
        "state": "",
        "name": "Guanaja Airport"
    },
    {
        "code": "GJL",
        "country": "DZ",
        "state": "",
        "name": "Ferhat Abbas Airport"
    },
    {
        "code": "GJR",
        "country": "IS",
        "state": "",
        "name": "Gjogur Airport"
    },
    {
        "code": "GJT",
        "country": "US",
        "state": "CO",
        "name": "Grand Junction Regional Airport"
    },
    {
        "code": "GKA",
        "country": "PG",
        "state": "",
        "name": "Goroka Airport"
    },
    {
        "code": "GKK",
        "country": "MV",
        "state": "",
        "name": "Kooddoo Island Airport"
    },
    {
        "code": "GLA",
        "country": "GB",
        "state": "",
        "name": "Glasgow International Airport"
    },
    {
        "code": "GLF",
        "country": "CR",
        "state": "",
        "name": "Golfito Airport"
    },
    {
        "code": "GLH",
        "country": "US",
        "state": "MS",
        "name": "Mid-Delta Airport"
    },
    {
        "code": "GLK",
        "country": "SO",
        "state": "",
        "name": "Galcaio Airport"
    },
    {
        "code": "GLN",
        "country": "MA",
        "state": "",
        "name": "Guelmime Airport"
    },
    {
        "code": "GLO",
        "country": "GB",
        "state": "",
        "name": "Gloucestershire Airport"
    },
    {
        "code": "GLT",
        "country": "AU",
        "state": "QL",
        "name": "Gladstone Airport"
    },
    {
        "code": "GLU",
        "country": "BT",
        "state": "",
        "name": "Gelephu Airport"
    },
    {
        "code": "GLV",
        "country": "US",
        "state": "AK",
        "name": "Golovin Airport"
    },
    {
        "code": "GMA",
        "country": "CD",
        "state": "",
        "name": "Gemena Airport"
    },
    {
        "code": "GMB",
        "country": "ET",
        "state": "",
        "name": "Gambela Airport"
    },
    {
        "code": "GME",
        "country": "BY",
        "state": "",
        "name": "Gomel Airport"
    },
    {
        "code": "GMO",
        "country": "NG",
        "state": "",
        "name": "Lawanti Airport"
    },
    {
        "code": "GMP",
        "country": "KR",
        "state": "",
        "name": "Gimpo International Airport"
    },
    {
        "code": "GMQ",
        "country": "CN",
        "state": "",
        "name": "Maqin Airport"
    },
    {
        "code": "GMR",
        "country": "PF",
        "state": "",
        "name": "Totegegie Airport"
    },
    {
        "code": "GMZ",
        "country": "ES",
        "state": "",
        "name": "La Gomera Airport"
    },
    {
        "code": "GNB",
        "country": "FR",
        "state": "",
        "name": "Grenoble-Isere Airport"
    },
    {
        "code": "GND",
        "country": "GD",
        "state": "",
        "name": "Maurice Bishop International Airport"
    },
    {
        "code": "GNJ",
        "country": "AZ",
        "state": "",
        "name": "Ganja Airport"
    },
    {
        "code": "GNM",
        "country": "BR",
        "state": "BA",
        "name": "Guanambi Airport"
    },
    {
        "code": "GNS",
        "country": "ID",
        "state": "",
        "name": "Binaka Airport"
    },
    {
        "code": "GNV",
        "country": "US",
        "state": "FL",
        "name": "Gainesville Regional Airport"
    },
    {
        "code": "GNY",
        "country": "TR",
        "state": "",
        "name": "Guney Anadolu Projesi Airport"
    },
    {
        "code": "GOA",
        "country": "IT",
        "state": "",
        "name": "Cristoforo Colombo Airport"
    },
    {
        "code": "GOB",
        "country": "ET",
        "state": "",
        "name": "Robe Airport"
    },
    {
        "code": "GOH",
        "country": "GL",
        "state": "",
        "name": "Nuuk Airport"
    },
    {
        "code": "GOI",
        "country": "IN",
        "state": "GA",
        "name": "Dabolim Airport"
    },
    {
        "code": "GOJ",
        "country": "RU",
        "state": "",
        "name": "Strigino Airport"
    },
    {
        "code": "GOM",
        "country": "CD",
        "state": "",
        "name": "Goma International Airport"
    },
    {
        "code": "GOP",
        "country": "IN",
        "state": "UP",
        "name": "Gorakhpur Airport"
    },
    {
        "code": "GOQ",
        "country": "CN",
        "state": "",
        "name": "Golmud Airport"
    },
    {
        "code": "GOT",
        "country": "SE",
        "state": "",
        "name": "Landvetter Airport"
    },
    {
        "code": "GOU",
        "country": "CM",
        "state": "",
        "name": "Garoua International Airport"
    },
    {
        "code": "GOV",
        "country": "AU",
        "state": "NT",
        "name": "Gove Airport"
    },
    {
        "code": "GOX",
        "country": "IN",
        "state": "GA",
        "name": "Mopa Airport"
    },
    {
        "code": "GOY",
        "country": "RU",
        "state": "",
        "name": "Tura Gornij Airport"
    },
    {
        "code": "GPA",
        "country": "GR",
        "state": "",
        "name": "Araxos Airport"
    },
    {
        "code": "GPB",
        "country": "BR",
        "state": "PR",
        "name": "Tancredo Thomas de Faria Airport"
    },
    {
        "code": "GPI",
        "country": "CO",
        "state": "",
        "name": "Juan Casiano Airport"
    },
    {
        "code": "GPP",
        "country": "IT",
        "state": "",
        "name": "Piazza Principe Railway Station"
    },
    {
        "code": "GPS",
        "country": "EC",
        "state": "",
        "name": "Seymour Airport"
    },
    {
        "code": "GPT",
        "country": "US",
        "state": "MS",
        "name": "Gulfport/Biloxi International Airport"
    },
    {
        "code": "GRB",
        "country": "US",
        "state": "WI",
        "name": "Austin Straubel International Airport"
    },
    {
        "code": "GRI",
        "country": "US",
        "state": "NE",
        "name": "Central Nebraska Regional Airport"
    },
    {
        "code": "GRJ",
        "country": "ZA",
        "state": "",
        "name": "George Airport"
    },
    {
        "code": "GRK",
        "country": "US",
        "state": "TX",
        "name": "Killeen/Fort Hood Regional Airport/Robe"
    },
    {
        "code": "GRO",
        "country": "ES",
        "state": "",
        "name": "Costa Brava Airport"
    },
    {
        "code": "GRQ",
        "country": "NL",
        "state": "",
        "name": "Eelde Airport"
    },
    {
        "code": "GRR",
        "country": "US",
        "state": "MI",
        "name": "Gerald R. Ford International Airport"
    },
    {
        "code": "GRU",
        "country": "BR",
        "state": "SP",
        "name": "Guarulhos International Airport"
    },
    {
        "code": "GRV",
        "country": "RU",
        "state": "",
        "name": "Grozny Airport"
    },
    {
        "code": "GRW",
        "country": "PT",
        "state": "",
        "name": "Graciosa Island Airport"
    },
    {
        "code": "GRX",
        "country": "ES",
        "state": "",
        "name": "Federico Garcia Lorca Airport"
    },
    {
        "code": "GRY",
        "country": "IS",
        "state": "",
        "name": "Grimsey Airport"
    },
    {
        "code": "GRZ",
        "country": "AT",
        "state": "",
        "name": "Graz Airport"
    },
    {
        "code": "GSM",
        "country": "IR",
        "state": "",
        "name": "Dayrestan Airport"
    },
    {
        "code": "GSO",
        "country": "US",
        "state": "NC",
        "name": "Piedmont Triad International Airport"
    },
    {
        "code": "GSP",
        "country": "US",
        "state": "SC",
        "name": "Greenville-Spartanburg International Ai"
    },
    {
        "code": "GST",
        "country": "US",
        "state": "AK",
        "name": "Gustavus Airport"
    },
    {
        "code": "GSV",
        "country": "RU",
        "state": "",
        "name": "Gagarin Airport"
    },
    {
        "code": "GTE",
        "country": "AU",
        "state": "NT",
        "name": "Groote Eylandt Airport"
    },
    {
        "code": "GTF",
        "country": "US",
        "state": "MT",
        "name": "Great Falls International Airport"
    },
    {
        "code": "GTO",
        "country": "ID",
        "state": "",
        "name": "Djalaluddin Airport"
    },
    {
        "code": "GTR",
        "country": "US",
        "state": "MS",
        "name": "Golden Triangle Regional Airport"
    },
    {
        "code": "GTS",
        "country": "AU",
        "state": "NT",
        "name": "The Granites Airport"
    },
    {
        "code": "GTZ",
        "country": "TZ",
        "state": "",
        "name": "Kirawira B Airport"
    },
    {
        "code": "GUA",
        "country": "GT",
        "state": "",
        "name": "La Aurora International Airport"
    },
    {
        "code": "GUC",
        "country": "US",
        "state": "CO",
        "name": "Gunnison-Crested Butte Airport"
    },
    {
        "code": "GUM",
        "country": "GU",
        "state": "",
        "name": "A.B. Won Pat International Airport"
    },
    {
        "code": "GUP",
        "country": "US",
        "state": "NM",
        "name": "Gallup Municipal Airport"
    },
    {
        "code": "GUR",
        "country": "PG",
        "state": "",
        "name": "Gurney Airport"
    },
    {
        "code": "GUW",
        "country": "KZ",
        "state": "",
        "name": "Atyrau Airport"
    },
    {
        "code": "GVA",
        "country": "CH",
        "state": "",
        "name": "Geneva International Airport"
    },
    {
        "code": "GVN",
        "country": "RU",
        "state": "",
        "name": "May-Gatka Airport"
    },
    {
        "code": "GVR",
        "country": "BR",
        "state": "MG",
        "name": "Altino Machado Oliveira Airport"
    },
    {
        "code": "GWD",
        "country": "PK",
        "state": "",
        "name": "Gwadar International Airport"
    },
    {
        "code": "GWL",
        "country": "IN",
        "state": "MP",
        "name": "Gwalior Airport"
    },
    {
        "code": "GWT",
        "country": "DE",
        "state": "",
        "name": "Sylt Airport"
    },
    {
        "code": "GXF",
        "country": "YE",
        "state": "",
        "name": "Sayun Airport"
    },
    {
        "code": "GXH",
        "country": "CN",
        "state": "",
        "name": "Gannan Xiahe Airport"
    },
    {
        "code": "GYA",
        "country": "BO",
        "state": "",
        "name": "Guayaramerin Airport"
    },
    {
        "code": "GYD",
        "country": "AZ",
        "state": "",
        "name": "Heydar Aliyev International Airport"
    },
    {
        "code": "GYE",
        "country": "EC",
        "state": "",
        "name": "Jose Joaquin de Olmedo Airport"
    },
    {
        "code": "GYN",
        "country": "BR",
        "state": "GO",
        "name": "Santa Genoveva Airport"
    },
    {
        "code": "GYS",
        "country": "CN",
        "state": "",
        "name": "Panlong Airport"
    },
    {
        "code": "GYU",
        "country": "CN",
        "state": "",
        "name": "Liupanshan Airport"
    },
    {
        "code": "GZG",
        "country": "CN",
        "state": "",
        "name": "Ganzi Airport"
    },
    {
        "code": "GZO",
        "country": "SB",
        "state": "",
        "name": "Nusatupe Airport"
    },
    {
        "code": "GZP",
        "country": "TR",
        "state": "",
        "name": "Gazipasa Alanya Airport"
    },
    {
        "code": "GZT",
        "country": "TR",
        "state": "",
        "name": "Oguzeli"
    },
    {
        "code": "HAA",
        "country": "NO",
        "state": "",
        "name": "Hasvik Airport"
    },
    {
        "code": "HAC",
        "country": "JP",
        "state": "",
        "name": "Hachijojima Airport"
    },
    {
        "code": "HAD",
        "country": "SE",
        "state": "",
        "name": "Halmstad Airport"
    },
    {
        "code": "HAH",
        "country": "KM",
        "state": "",
        "name": "Prince Said Ibrahim Airport"
    },
    {
        "code": "HAJ",
        "country": "DE",
        "state": "",
        "name": "Hannover Airport"
    },
    {
        "code": "HAK",
        "country": "CN",
        "state": "",
        "name": "Meilan International Airport"
    },
    {
        "code": "HAM",
        "country": "DE",
        "state": "",
        "name": "Hamburg Airport"
    },
    {
        "code": "HAN",
        "country": "VN",
        "state": "",
        "name": "Noi Bai International Airport"
    },
    {
        "code": "HAQ",
        "country": "MV",
        "state": "",
        "name": "Hanimaadhoo Island Airport"
    },
    {
        "code": "HAS",
        "country": "SA",
        "state": "",
        "name": "Hail Airport"
    },
    {
        "code": "HAU",
        "country": "NO",
        "state": "",
        "name": "Karmoy Airport"
    },
    {
        "code": "HAV",
        "country": "CU",
        "state": "",
        "name": "Jose Marti International Airport"
    },
    {
        "code": "HAY",
        "country": "CO",
        "state": "",
        "name": "Hacaritama airport"
    },
    {
        "code": "HBA",
        "country": "AU",
        "state": "TS",
        "name": "Hobart International Airport"
    },
    {
        "code": "HBE",
        "country": "EG",
        "state": "",
        "name": "Borg el Arab Airport"
    },
    {
        "code": "HBQ",
        "country": "CN",
        "state": "",
        "name": "Haibei Airport"
    },
    {
        "code": "HBX",
        "country": "IN",
        "state": "KA",
        "name": "Hubli Airport"
    },
    {
        "code": "HCJ",
        "country": "CN",
        "state": "",
        "name": "Jin Cheng Jiang Airport"
    },
    {
        "code": "HCQ",
        "country": "AU",
        "state": "WA",
        "name": "Halls Creek Airport"
    },
    {
        "code": "HCZ",
        "country": "CN",
        "state": "",
        "name": "Beihu"
    },
    {
        "code": "HDF",
        "country": "DE",
        "state": "",
        "name": "Heringsdorf Airport"
    },
    {
        "code": "HDG",
        "country": "CN",
        "state": "",
        "name": "Handan Airport"
    },
    {
        "code": "HDK",
        "country": "MV",
        "state": "",
        "name": "Kulhudhuffushi Airport"
    },
    {
        "code": "HDM",
        "country": "IR",
        "state": "",
        "name": "Hamadan Airport"
    },
    {
        "code": "HDN",
        "country": "US",
        "state": "CO",
        "name": "Yampa Valley Airport"
    },
    {
        "code": "HDS",
        "country": "ZA",
        "state": "",
        "name": "Hoedspruit Air Force Base"
    },
    {
        "code": "HDY",
        "country": "TH",
        "state": "",
        "name": "Hat Yai International Airport"
    },
    {
        "code": "HEA",
        "country": "AF",
        "state": "",
        "name": "Herat Airport"
    },
    {
        "code": "HEH",
        "country": "MM",
        "state": "",
        "name": "Heho Airport"
    },
    {
        "code": "HEK",
        "country": "CN",
        "state": "",
        "name": "Heihe Airport"
    },
    {
        "code": "HEL",
        "country": "FI",
        "state": "",
        "name": "Helsinki-Vantaa Airport"
    },
    {
        "code": "HER",
        "country": "GR",
        "state": "",
        "name": "Nikos Kazantzakis Airport"
    },
    {
        "code": "HET",
        "country": "CN",
        "state": "",
        "name": "Baita International Airport"
    },
    {
        "code": "HFE",
        "country": "CN",
        "state": "",
        "name": "Xinqiao International Airport"
    },
    {
        "code": "HFH",
        "country": "GB",
        "state": "",
        "name": "Hereford Railway Station"
    },
    {
        "code": "HFT",
        "country": "NO",
        "state": "",
        "name": "Hammerfest Airport"
    },
    {
        "code": "HGA",
        "country": "SO",
        "state": "",
        "name": "Egal International Airport"
    },
    {
        "code": "HGD",
        "country": "AU",
        "state": "QL",
        "name": "Hughenden Airport"
    },
    {
        "code": "HGH",
        "country": "CN",
        "state": "",
        "name": "Xiaoshan International Airport"
    },
    {
        "code": "HGI",
        "country": "IN",
        "state": "AR",
        "name": "Hollongi Airport"
    },
    {
        "code": "HGN",
        "country": "TH",
        "state": "",
        "name": "Mae Hong Son Airport"
    },
    {
        "code": "HGO",
        "country": "CI",
        "state": "",
        "name": "Korhogo Airport"
    },
    {
        "code": "HGR",
        "country": "US",
        "state": "MD",
        "name": "Hagerstown Regional Airport"
    },
    {
        "code": "HGU",
        "country": "PG",
        "state": "",
        "name": "Kagamuga Airport"
    },
    {
        "code": "HHH",
        "country": "US",
        "state": "SC",
        "name": "Hilton Head Airport"
    },
    {
        "code": "HHN",
        "country": "DE",
        "state": "",
        "name": "Hahn Airport"
    },
    {
        "code": "HHQ",
        "country": "TH",
        "state": "",
        "name": "Hua Hin Airport"
    },
    {
        "code": "HHR",
        "country": "US",
        "state": "CA",
        "name": "Hawthorne Municipal Airport"
    },
    {
        "code": "HHZ",
        "country": "PF",
        "state": "",
        "name": "Hikueru Airport"
    },
    {
        "code": "HIA",
        "country": "CN",
        "state": "",
        "name": "Lianshui Airport"
    },
    {
        "code": "HIB",
        "country": "US",
        "state": "MN",
        "name": "Range Regional Airport"
    },
    {
        "code": "HID",
        "country": "AU",
        "state": "QL",
        "name": "Horn Island Airport"
    },
    {
        "code": "HIJ",
        "country": "JP",
        "state": "",
        "name": "Hiroshima Airport"
    },
    {
        "code": "HIN",
        "country": "KR",
        "state": "",
        "name": "Sacheon Airport"
    },
    {
        "code": "HIR",
        "country": "SB",
        "state": "",
        "name": "Honiara International Airport"
    },
    {
        "code": "HIS",
        "country": "AU",
        "state": "QL",
        "name": "Hayman Island Heliport"
    },
    {
        "code": "HJJ",
        "country": "CN",
        "state": "",
        "name": "Zhijiang Airport"
    },
    {
        "code": "HJR",
        "country": "IN",
        "state": "MP",
        "name": "Khajuraho Airport"
    },
    {
        "code": "HKB",
        "country": "US",
        "state": "AK",
        "name": "Healy Lake Airport"
    },
    {
        "code": "HKD",
        "country": "JP",
        "state": "",
        "name": "Hakodate Airport"
    },
    {
        "code": "HKG",
        "country": "HK",
        "state": "",
        "name": "Hong Kong International Airport"
    },
    {
        "code": "HKK",
        "country": "NZ",
        "state": "",
        "name": "Hokitika Airport"
    },
    {
        "code": "HKM",
        "country": "MO",
        "state": "",
        "name": "Hong Kong Zhuhai Macao Bridge"
    },
    {
        "code": "HKN",
        "country": "PG",
        "state": "",
        "name": "Hoskins Airport"
    },
    {
        "code": "HKT",
        "country": "TH",
        "state": "",
        "name": "Phuket International Airport"
    },
    {
        "code": "HLA",
        "country": "ZA",
        "state": "",
        "name": "Lanseria International Airport"
    },
    {
        "code": "HLD",
        "country": "CN",
        "state": "",
        "name": "Dongshan Airport"
    },
    {
        "code": "HLE",
        "country": "SH",
        "state": "",
        "name": "Saint Helena Airport"
    },
    {
        "code": "HLH",
        "country": "CN",
        "state": "",
        "name": "Ulanhot Airport"
    },
    {
        "code": "HLN",
        "country": "US",
        "state": "MT",
        "name": "Helena Regional Airport"
    },
    {
        "code": "HLP",
        "country": "ID",
        "state": "",
        "name": "Halim Perdanakusuma Airport"
    },
    {
        "code": "HLZ",
        "country": "NZ",
        "state": "",
        "name": "Hamilton International Airport"
    },
    {
        "code": "HMA",
        "country": "RU",
        "state": "",
        "name": "Khanty-Mansiysk"
    },
    {
        "code": "HMB",
        "country": "EG",
        "state": "",
        "name": "Sohag International Airport"
    },
    {
        "code": "HME",
        "country": "DZ",
        "state": "",
        "name": "Oued Irara Airport"
    },
    {
        "code": "HMI",
        "country": "CN",
        "state": "",
        "name": "Hami Airport"
    },
    {
        "code": "HMO",
        "country": "MX",
        "state": "",
        "name": "Ignacio Pesqueira Garcia Airport"
    },
    {
        "code": "HMS",
        "country": "ID",
        "state": "",
        "name": "Haji Muhammad Sidik"
    },
    {
        "code": "HMV",
        "country": "SE",
        "state": "",
        "name": "Hemavan/Tarnaby Airport"
    },
    {
        "code": "HNA",
        "country": "JP",
        "state": "",
        "name": "Hanamaki Airport"
    },
    {
        "code": "HND",
        "country": "JP",
        "state": "",
        "name": "Tokyo International (Haneda) Airport"
    }
]


const stationsFull = [
    {
        "code": "AAA",
        "country": "PF",
        "state": "",
        "name": "Anaa Airport"
    },
    {
        "code": "AAD",
        "country": "SO",
        "state": "",
        "name": "Adado Airport"
    },
    {
        "code": "AAE",
        "country": "DZ",
        "state": "",
        "name": "Rabah Bitat Airport"
    },
    {
        "code": "AAK",
        "country": "KI",
        "state": "",
        "name": "Aranuka Airport"
    },
    {
        "code": "AAL",
        "country": "DK",
        "state": "",
        "name": "Aalborg Airport"
    },
    {
        "code": "AAM",
        "country": "ZA",
        "state": "",
        "name": "Mala Mala Airport"
    },
    {
        "code": "AAN",
        "country": "AE",
        "state": "",
        "name": "Al Ain International Airport"
    },
    {
        "code": "AAP",
        "country": "ID",
        "state": "",
        "name": "Aji Pangeran Tumenggung Airport"
    },
    {
        "code": "AAQ",
        "country": "RU",
        "state": "",
        "name": "Vityazevo Airport"
    },
    {
        "code": "AAR",
        "country": "DK",
        "state": "",
        "name": "Aarhus Airport"
    },
    {
        "code": "AAT",
        "country": "CN",
        "state": "",
        "name": "Altay Airport"
    },
    {
        "code": "AAX",
        "country": "BR",
        "state": "MG",
        "name": "Araxa Airport"
    },
    {
        "code": "AAY",
        "country": "YE",
        "state": "",
        "name": "Al Ghaydah Airport"
    },
    {
        "code": "AAZ",
        "country": "GT",
        "state": "",
        "name": "Quetzaltenango Airport"
    },
    {
        "code": "ABA",
        "country": "RU",
        "state": "",
        "name": "Abakan Airport"
    },
    {
        "code": "ABB",
        "country": "NG",
        "state": "",
        "name": "Asaba International Airport"
    },
    {
        "code": "ABD",
        "country": "IR",
        "state": "",
        "name": "Abadan Airport"
    },
    {
        "code": "ABE",
        "country": "US",
        "state": "PA",
        "name": "Lehigh Valley International Airport"
    },
    {
        "code": "ABF",
        "country": "KI",
        "state": "",
        "name": "Abaiang Airport"
    },
    {
        "code": "ABI",
        "country": "US",
        "state": "TX",
        "name": "Abilene Regional Airport"
    },
    {
        "code": "ABJ",
        "country": "CI",
        "state": "",
        "name": "Felix Houphouet-Boigny Airport"
    },
    {
        "code": "ABL",
        "country": "US",
        "state": "AK",
        "name": "Ambler Airport"
    },
    {
        "code": "ABM",
        "country": "AU",
        "state": "QL",
        "name": "Northern Peninsula Airport"
    },
    {
        "code": "ABQ",
        "country": "US",
        "state": "NM",
        "name": "International Sunport Airport"
    },
    {
        "code": "ABR",
        "country": "US",
        "state": "SD",
        "name": "Aberdeen Regional Airport"
    },
    {
        "code": "ABS",
        "country": "EG",
        "state": "",
        "name": "Abu Simbel Airport"
    },
    {
        "code": "ABT",
        "country": "SA",
        "state": "",
        "name": "Al-Aqiq Airport"
    },
    {
        "code": "ABU",
        "country": "ID",
        "state": "",
        "name": "Haliwen Airport"
    },
    {
        "code": "ABV",
        "country": "NG",
        "state": "",
        "name": "Nnamdi Azikiwe International Airport"
    },
    {
        "code": "ABX",
        "country": "AU",
        "state": "NS",
        "name": "Albury Airport"
    },
    {
        "code": "ABY",
        "country": "US",
        "state": "GA",
        "name": "Southwest Georgia Regional Airport"
    },
    {
        "code": "ABZ",
        "country": "GB",
        "state": "",
        "name": "Dyce Airport"
    },
    {
        "code": "ACA",
        "country": "MX",
        "state": "",
        "name": "Juan N. Alvarez International Airport"
    },
    {
        "code": "ACC",
        "country": "GH",
        "state": "",
        "name": "Kotoka International Airport"
    },
    {
        "code": "ACE",
        "country": "ES",
        "state": "",
        "name": "Lanzarote Airport"
    },
    {
        "code": "ACF",
        "country": "CN",
        "state": "",
        "name": "Alaer Talimu Airport"
    },
    {
        "code": "ACH",
        "country": "CH",
        "state": "",
        "name": "Saint Gallen-Altenrhein Airport"
    },
    {
        "code": "ACI",
        "country": "GG",
        "state": "",
        "name": "Alderney Airport"
    },
    {
        "code": "ACK",
        "country": "US",
        "state": "MA",
        "name": "Nantucket Memorial Airport"
    },
    {
        "code": "ACP",
        "country": "IR",
        "state": "",
        "name": "Sahand Airport"
    },
    {
        "code": "ACT",
        "country": "US",
        "state": "TX",
        "name": "Waco Regional Airport"
    },
    {
        "code": "ACV",
        "country": "US",
        "state": "CA",
        "name": "Arcata Airport"
    },
    {
        "code": "ACX",
        "country": "CN",
        "state": "",
        "name": "Xingyi Airport"
    },
    {
        "code": "ACY",
        "country": "US",
        "state": "NJ",
        "name": "Atlantic City International Airport"
    },
    {
        "code": "ACZ",
        "country": "IR",
        "state": "",
        "name": "Zabol Airport"
    },
    {
        "code": "ADA",
        "country": "TR",
        "state": "",
        "name": "Sakirpasa Airport"
    },
    {
        "code": "ADB",
        "country": "TR",
        "state": "",
        "name": "Adnan Menderes Airport"
    },
    {
        "code": "ADD",
        "country": "ET",
        "state": "",
        "name": "Bole International Airport"
    },
    {
        "code": "ADE",
        "country": "YE",
        "state": "",
        "name": "Aden International Airport"
    },
    {
        "code": "ADF",
        "country": "TR",
        "state": "",
        "name": "Adiyaman Airport"
    },
    {
        "code": "ADJ",
        "country": "JO",
        "state": "",
        "name": "Marka International Airport"
    },
    {
        "code": "ADK",
        "country": "US",
        "state": "AK",
        "name": "Adak Island Airport"
    },
    {
        "code": "ADL",
        "country": "AU",
        "state": "SA",
        "name": "Adelaide International Airport"
    },
    {
        "code": "ADQ",
        "country": "US",
        "state": "AK",
        "name": "Kodiak Airport"
    },
    {
        "code": "ADU",
        "country": "IR",
        "state": "",
        "name": "Ardabil Airport"
    },
    {
        "code": "ADZ",
        "country": "CO",
        "state": "",
        "name": "Gustavo Rojas Pinilla International Air"
    },
    {
        "code": "AEA",
        "country": "KI",
        "state": "",
        "name": "Abemama Airport"
    },
    {
        "code": "AEB",
        "country": "CN",
        "state": "",
        "name": "Youjiang Airport"
    },
    {
        "code": "AEM",
        "country": "RU",
        "state": "",
        "name": "Amgu Airport"
    },
    {
        "code": "AEP",
        "country": "AR",
        "state": "BA",
        "name": "Jorge Newbery Airport"
    },
    {
        "code": "AER",
        "country": "RU",
        "state": "",
        "name": "Sochi International"
    },
    {
        "code": "AES",
        "country": "NO",
        "state": "",
        "name": "Vigra Airport"
    },
    {
        "code": "AET",
        "country": "US",
        "state": "AK",
        "name": "Allakaket Airport"
    },
    {
        "code": "AEU",
        "country": "IR",
        "state": "",
        "name": "Abu Musa Island Airport"
    },
    {
        "code": "AEX",
        "country": "US",
        "state": "LA",
        "name": "Alexandria International Airport"
    },
    {
        "code": "AEY",
        "country": "IS",
        "state": "",
        "name": "Akureyri Airport"
    },
    {
        "code": "AFA",
        "country": "AR",
        "state": "MD",
        "name": "San Rafael Airport"
    },
    {
        "code": "AFL",
        "country": "BR",
        "state": "MT",
        "name": "Oswaldo Marques Dias Airport"
    },
    {
        "code": "AGA",
        "country": "MA",
        "state": "",
        "name": "Al Massira Airport"
    },
    {
        "code": "AGH",
        "country": "SE",
        "state": "",
        "name": "Angelholm/Helsingborg Airport"
    },
    {
        "code": "AGM",
        "country": "GL",
        "state": "",
        "name": "Ammassalik Heliport"
    },
    {
        "code": "AGN",
        "country": "US",
        "state": "AK",
        "name": "Angoon Sea Plane Base"
    },
    {
        "code": "AGP",
        "country": "ES",
        "state": "",
        "name": "Malaga Airport"
    },
    {
        "code": "AGR",
        "country": "IN",
        "state": "UP",
        "name": "Agra Airport"
    },
    {
        "code": "AGS",
        "country": "US",
        "state": "GA",
        "name": "Augusta Regional (Bush Field) Airport"
    },
    {
        "code": "AGT",
        "country": "PY",
        "state": "",
        "name": "Guarani International Airport"
    },
    {
        "code": "AGU",
        "country": "MX",
        "state": "",
        "name": "Jesus Teran Peredo International Airpor"
    },
    {
        "code": "AGX",
        "country": "IN",
        "state": "LD",
        "name": "Agatti Island Airport"
    },
    {
        "code": "AGY",
        "country": "DE",
        "state": "",
        "name": "Augsburg Hbf Railway Station"
    },
    {
        "code": "AHB",
        "country": "SA",
        "state": "",
        "name": "Abha Airport"
    },
    {
        "code": "AHE",
        "country": "PF",
        "state": "",
        "name": "Ahe Airport"
    },
    {
        "code": "AHJ",
        "country": "CN",
        "state": "",
        "name": "Aba/Hongyuan Airport"
    },
    {
        "code": "AHO",
        "country": "IT",
        "state": "",
        "name": "Fertilia Airport"
    },
    {
        "code": "AHU",
        "country": "MA",
        "state": "",
        "name": "Cherif El Idrissi Airport"
    },
    {
        "code": "AIA",
        "country": "US",
        "state": "NE",
        "name": "Alliance Municipal Airport"
    },
    {
        "code": "AIN",
        "country": "US",
        "state": "AK",
        "name": "Wainwright Airport"
    },
    {
        "code": "AIR",
        "country": "BR",
        "state": "MT",
        "name": "Aripuana Airport"
    },
    {
        "code": "AIS",
        "country": "KI",
        "state": "",
        "name": "Arorae Airport"
    },
    {
        "code": "AIT",
        "country": "CK",
        "state": "",
        "name": "Aitutaki Island Airport"
    },
    {
        "code": "AJA",
        "country": "FR",
        "state": "",
        "name": "Napoleon Bonaparte Airport"
    },
    {
        "code": "AJF",
        "country": "SA",
        "state": "",
        "name": "Jouf Airport"
    },
    {
        "code": "AJI",
        "country": "TR",
        "state": "",
        "name": "Agri Airport"
    },
    {
        "code": "AJL",
        "country": "IN",
        "state": "MZ",
        "name": "Lengpui Airport"
    },
    {
        "code": "AJN",
        "country": "KM",
        "state": "",
        "name": "Ouani Airport"
    },
    {
        "code": "AJR",
        "country": "SE",
        "state": "",
        "name": "Arvidsjaur Airport"
    },
    {
        "code": "AJU",
        "country": "BR",
        "state": "SE",
        "name": "Santa Maria Airport"
    },
    {
        "code": "AJY",
        "country": "NE",
        "state": "",
        "name": "Manu Dayak International Airport"
    },
    {
        "code": "AKA",
        "country": "CN",
        "state": "",
        "name": "Fuqiang Airport"
    },
    {
        "code": "AKB",
        "country": "US",
        "state": "AK",
        "name": "Atka Airport"
    },
    {
        "code": "AKJ",
        "country": "JP",
        "state": "",
        "name": "Asahikawa Airport"
    },
    {
        "code": "AKK",
        "country": "US",
        "state": "AK",
        "name": "Akhiok Airport"
    },
    {
        "code": "AKL",
        "country": "NZ",
        "state": "",
        "name": "Auckland International Airport"
    },
    {
        "code": "AKN",
        "country": "US",
        "state": "AK",
        "name": "King Salmon Airport"
    },
    {
        "code": "AKP",
        "country": "US",
        "state": "AK",
        "name": "Anaktuvuk Pass Airport"
    },
    {
        "code": "AKR",
        "country": "NG",
        "state": "",
        "name": "Akure Airport"
    },
    {
        "code": "AKS",
        "country": "SB",
        "state": "",
        "name": "Gwaunaru'u Airport"
    },
    {
        "code": "AKU",
        "country": "CN",
        "state": "",
        "name": "Aksu Airport"
    },
    {
        "code": "AKV",
        "country": "CA",
        "state": "QC",
        "name": "Akulivik Airport"
    },
    {
        "code": "AKX",
        "country": "KZ",
        "state": "",
        "name": "Aktobe Airport"
    },
    {
        "code": "AKY",
        "country": "MM",
        "state": "",
        "name": "Sittwe Airport"
    },
    {
        "code": "ALA",
        "country": "KZ",
        "state": "",
        "name": "Almaty International Airport"
    },
    {
        "code": "ALB",
        "country": "US",
        "state": "NY",
        "name": "Albany International Airport"
    },
    {
        "code": "ALC",
        "country": "ES",
        "state": "",
        "name": "Alicante Airport"
    },
    {
        "code": "ALF",
        "country": "NO",
        "state": "",
        "name": "Alta Airport"
    },
    {
        "code": "ALG",
        "country": "DZ",
        "state": "",
        "name": "Houari Boumediene Airport"
    },
    {
        "code": "ALH",
        "country": "AU",
        "state": "WA",
        "name": "Albany Airport"
    },
    {
        "code": "ALO",
        "country": "US",
        "state": "IA",
        "name": "Waterloo Regional Airport"
    },
    {
        "code": "ALP",
        "country": "SY",
        "state": "",
        "name": "Aleppo International Airport"
    },
    {
        "code": "ALQ",
        "country": "BR",
        "state": "RS",
        "name": "Guadencio Machado Ramos Airport"
    },
    {
        "code": "ALS",
        "country": "US",
        "state": "CO",
        "name": "San Luis Valley Regional Airport"
    },
    {
        "code": "ALW",
        "country": "US",
        "state": "WA",
        "name": "Walla Walla Regional Airport"
    },
    {
        "code": "ALZ",
        "country": "US",
        "state": "AK",
        "name": "Alitak Sea Plane Base"
    },
    {
        "code": "AMA",
        "country": "US",
        "state": "TX",
        "name": "Rick Husband International Airport"
    },
    {
        "code": "AMD",
        "country": "IN",
        "state": "GJ",
        "name": "Sardar VallabhBhai Patel Airport"
    },
    {
        "code": "AMH",
        "country": "ET",
        "state": "",
        "name": "Arba Minch Airport"
    },
    {
        "code": "AMM",
        "country": "JO",
        "state": "",
        "name": "Queen Alia International Airport"
    },
    {
        "code": "AMQ",
        "country": "ID",
        "state": "",
        "name": "Pattimura Airport"
    },
    {
        "code": "AMS",
        "country": "NL",
        "state": "",
        "name": "Schiphol Airport"
    },
    {
        "code": "ANA",
        "country": "KE",
        "state": "",
        "name": "Angama Airport"
    },
    {
        "code": "ANC",
        "country": "US",
        "state": "AK",
        "name": "Ted Stevens International Airport"
    },
    {
        "code": "ANF",
        "country": "CL",
        "state": "",
        "name": "Cerro Moreno Airport"
    },
    {
        "code": "ANI",
        "country": "US",
        "state": "AK",
        "name": "Aniak Airport"
    },
    {
        "code": "ANR",
        "country": "BE",
        "state": "",
        "name": "Antwerp International Airport"
    },
    {
        "code": "ANU",
        "country": "AG",
        "state": "",
        "name": "V.C. Bird International Airport"
    },
    {
        "code": "ANX",
        "country": "NO",
        "state": "",
        "name": "Andoya Airport"
    },
    {
        "code": "AOE",
        "country": "TR",
        "state": "",
        "name": "Anadolu Airport"
    },
    {
        "code": "AOG",
        "country": "CN",
        "state": "",
        "name": "Teng'ao Airport"
    },
    {
        "code": "AOI",
        "country": "IT",
        "state": "",
        "name": "Falconara Airport"
    },
    {
        "code": "AOJ",
        "country": "JP",
        "state": "",
        "name": "Aomori Airport"
    },
    {
        "code": "AOK",
        "country": "GR",
        "state": "",
        "name": "Karpathos Airport"
    },
    {
        "code": "AOO",
        "country": "US",
        "state": "PA",
        "name": "Blair County Airport"
    },
    {
        "code": "AOQ",
        "country": "GL",
        "state": "",
        "name": "Aappilattoq-Upernavik Heliport"
    },
    {
        "code": "AOR",
        "country": "MY",
        "state": "",
        "name": "Sultan Abdul Halim Airport"
    },
    {
        "code": "AOS",
        "country": "US",
        "state": "AK",
        "name": "Amook Bay Sea Plane Base"
    },
    {
        "code": "APK",
        "country": "PF",
        "state": "",
        "name": "Apataki Airport"
    },
    {
        "code": "APL",
        "country": "MZ",
        "state": "",
        "name": "Nampula Airport"
    },
    {
        "code": "APN",
        "country": "US",
        "state": "MI",
        "name": "Alpena CountyRegional Airport"
    },
    {
        "code": "APO",
        "country": "CO",
        "state": "",
        "name": "Carepa-Antonio Roldan Betancourt Airpor"
    },
    {
        "code": "APW",
        "country": "WS",
        "state": "",
        "name": "Faleolo International Airport"
    },
    {
        "code": "AQG",
        "country": "CN",
        "state": "",
        "name": "Tianzhushan Airport"
    },
    {
        "code": "AQI",
        "country": "SA",
        "state": "",
        "name": "Hafar al Batin"
    },
    {
        "code": "AQJ",
        "country": "JO",
        "state": "",
        "name": "King Hussein International Airport"
    },
    {
        "code": "AQP",
        "country": "PE",
        "state": "",
        "name": "Rodriguez Ballon International Airport"
    },
    {
        "code": "ARC",
        "country": "US",
        "state": "AK",
        "name": "Arctic Village Airport"
    },
    {
        "code": "ARD",
        "country": "ID",
        "state": "",
        "name": "Mali Airport"
    },
    {
        "code": "ARH",
        "country": "RU",
        "state": "",
        "name": "Talagi Airport"
    },
    {
        "code": "ARI",
        "country": "CL",
        "state": "",
        "name": "Chacalluta Airport"
    },
    {
        "code": "ARK",
        "country": "TZ",
        "state": "",
        "name": "Arusha Airport"
    },
    {
        "code": "ARM",
        "country": "AU",
        "state": "NS",
        "name": "Armidale Airport"
    },
    {
        "code": "ARN",
        "country": "SE",
        "state": "",
        "name": "Arlanda Airport"
    },
    {
        "code": "ART",
        "country": "US",
        "state": "NY",
        "name": "Watertown International Airport"
    },
    {
        "code": "ARU",
        "country": "BR",
        "state": "SP",
        "name": "Dario Guarita Airport"
    },
    {
        "code": "ARX",
        "country": "BR",
        "state": "CE",
        "name": "Dragao do Mar Airport"
    },
    {
        "code": "ASB",
        "country": "TM",
        "state": "",
        "name": "Ashgabat International Airport"
    },
    {
        "code": "ASE",
        "country": "US",
        "state": "CO",
        "name": "Pitkin County Airport"
    },
    {
        "code": "ASF",
        "country": "RU",
        "state": "",
        "name": "Astrakhan Airport"
    },
    {
        "code": "ASI",
        "country": "SH",
        "state": "",
        "name": "Ascension Island Royal Air Force Statio"
    },
    {
        "code": "ASJ",
        "country": "JP",
        "state": "",
        "name": "Amami Airport"
    },
    {
        "code": "ASM",
        "country": "ER",
        "state": "",
        "name": "Asmara International Airport"
    },
    {
        "code": "ASO",
        "country": "ET",
        "state": "",
        "name": "Asosa Airport"
    },
    {
        "code": "ASP",
        "country": "AU",
        "state": "NT",
        "name": "Alice Springs Airport"
    },
    {
        "code": "ASR",
        "country": "TR",
        "state": "",
        "name": "Erkilet Airport"
    },
    {
        "code": "ASU",
        "country": "PY",
        "state": "",
        "name": "Silvio Pettirossi International Airport"
    },
    {
        "code": "ASV",
        "country": "KE",
        "state": "",
        "name": "Amboseli Airport"
    },
    {
        "code": "ASW",
        "country": "EG",
        "state": "",
        "name": "Aswan International Airport"
    },
    {
        "code": "ATA",
        "country": "PE",
        "state": "",
        "name": "German Arias Graziani Airport"
    },
    {
        "code": "ATD",
        "country": "SB",
        "state": "",
        "name": "Atoifi Airport"
    },
    {
        "code": "ATH",
        "country": "GR",
        "state": "",
        "name": "Eleftherios Venizelos Airport"
    },
    {
        "code": "ATK",
        "country": "US",
        "state": "AK",
        "name": "E.Burnell Sr Memorial Airport"
    },
    {
        "code": "ATL",
        "country": "US",
        "state": "GA",
        "name": "Hartsfield-Jackson International Airpor"
    },
    {
        "code": "ATM",
        "country": "BR",
        "state": "PA",
        "name": "Altamira Airport"
    },
    {
        "code": "ATQ",
        "country": "IN",
        "state": "PB",
        "name": "Sri Guru Ram Dass Jee Airport"
    },
    {
        "code": "ATT",
        "country": "US",
        "state": "AK",
        "name": "Atmautluak Airport"
    },
    {
        "code": "ATW",
        "country": "US",
        "state": "WI",
        "name": "Appleton International Airport"
    },
    {
        "code": "ATY",
        "country": "US",
        "state": "SD",
        "name": "Watertown Regional Airport"
    },
    {
        "code": "ATZ",
        "country": "EG",
        "state": "",
        "name": "Asyut Airport"
    },
    {
        "code": "AUA",
        "country": "AW",
        "state": "",
        "name": "Reina Beatrix Airport"
    },
    {
        "code": "AUB",
        "country": "DE",
        "state": "",
        "name": "Augsburg Bus Station"
    },
    {
        "code": "AUC",
        "country": "CO",
        "state": "",
        "name": "Santiago Perez Quiroz Airport"
    },
    {
        "code": "AUG",
        "country": "US",
        "state": "ME",
        "name": "Augusta State Airport"
    },
    {
        "code": "AUH",
        "country": "AE",
        "state": "",
        "name": "Abu Dhabi International Airport"
    },
    {
        "code": "AUK",
        "country": "US",
        "state": "AK",
        "name": "Alakanuk Airport"
    },
    {
        "code": "AUQ",
        "country": "PF",
        "state": "",
        "name": "Atuona Airport"
    },
    {
        "code": "AUR",
        "country": "FR",
        "state": "",
        "name": "Aurillac Airport"
    },
    {
        "code": "AUS",
        "country": "US",
        "state": "TX",
        "name": "Austin-Bergstrom International Airport"
    },
    {
        "code": "AUU",
        "country": "AU",
        "state": "QL",
        "name": "Aurukun Airport"
    },
    {
        "code": "AUX",
        "country": "BR",
        "state": "TO",
        "name": "Araguaina Airport"
    },
    {
        "code": "AUY",
        "country": "VU",
        "state": "",
        "name": "Anatom Island Airport"
    },
    {
        "code": "AVA",
        "country": "CN",
        "state": "",
        "name": "Huangguoshu Airport"
    },
    {
        "code": "AVL",
        "country": "US",
        "state": "NC",
        "name": "Asheville Regional Airport"
    },
    {
        "code": "AVP",
        "country": "US",
        "state": "PA",
        "name": "Wilkes-Barre/Scranton International Air"
    },
    {
        "code": "AVV",
        "country": "AU",
        "state": "VI",
        "name": "Avalon Airport"
    },
    {
        "code": "AWA",
        "country": "ET",
        "state": "",
        "name": "Awasa Airport"
    },
    {
        "code": "AWD",
        "country": "VU",
        "state": "",
        "name": "Aniwa Island Airport"
    },
    {
        "code": "AWZ",
        "country": "IR",
        "state": "",
        "name": "Ahwaz Airport"
    },
    {
        "code": "AXA",
        "country": "AI",
        "state": "",
        "name": "Clayton J. Lloyd International Airport"
    },
    {
        "code": "AXD",
        "country": "GR",
        "state": "",
        "name": "Dimokritos Airport"
    },
    {
        "code": "AXF",
        "country": "CN",
        "state": "",
        "name": "Alxa Left Banner Airport"
    },
    {
        "code": "AXJ",
        "country": "JP",
        "state": "",
        "name": "Amakusa Airport"
    },
    {
        "code": "AXM",
        "country": "CO",
        "state": "",
        "name": "El Eden International Airport"
    },
    {
        "code": "AXP",
        "country": "BS",
        "state": "",
        "name": "Spring Point Airport"
    },
    {
        "code": "AXR",
        "country": "PF",
        "state": "",
        "name": "Arutua Airport"
    },
    {
        "code": "AXT",
        "country": "JP",
        "state": "",
        "name": "Akita Airport"
    },
    {
        "code": "AYJ",
        "country": "IN",
        "state": "UP",
        "name": "Ayodhya Airport"
    },
    {
        "code": "AYP",
        "country": "PE",
        "state": "",
        "name": "Alfredo M. Duarte Airport"
    },
    {
        "code": "AYQ",
        "country": "AU",
        "state": "NT",
        "name": "Connellan Airport"
    },
    {
        "code": "AYT",
        "country": "TR",
        "state": "",
        "name": "Antalya Airport"
    },
    {
        "code": "AZA",
        "country": "US",
        "state": "AZ",
        "name": "Mesa Gateway Airport"
    },
    {
        "code": "AZD",
        "country": "IR",
        "state": "",
        "name": "Shahid Sadooghi"
    },
    {
        "code": "AZO",
        "country": "US",
        "state": "MI",
        "name": "Kalamazoo/Battle Creek International Ai"
    },
    {
        "code": "AZR",
        "country": "DZ",
        "state": "",
        "name": "Touat Airport"
    },
    {
        "code": "AZS",
        "country": "DO",
        "state": "",
        "name": "El Catey International Airport"
    },
    {
        "code": "BAG",
        "country": "PH",
        "state": "",
        "name": "Loakan Airport"
    },
    {
        "code": "BAH",
        "country": "BH",
        "state": "",
        "name": "Bahrain International Airport"
    },
    {
        "code": "BAL",
        "country": "TR",
        "state": "",
        "name": "Batman Airport"
    },
    {
        "code": "BAQ",
        "country": "CO",
        "state": "",
        "name": "Ernesto Cortissoz International Airport"
    },
    {
        "code": "BAR",
        "country": "CN",
        "state": "",
        "name": "Bo'ao Airport"
    },
    {
        "code": "BAS",
        "country": "SB",
        "state": "",
        "name": "Balalae Airport"
    },
    {
        "code": "BAU",
        "country": "IT",
        "state": "",
        "name": "Bari Central Railway Station"
    },
    {
        "code": "BAV",
        "country": "CN",
        "state": "",
        "name": "Erliban Airport"
    },
    {
        "code": "BAX",
        "country": "RU",
        "state": "",
        "name": "Barnaul Airport"
    },
    {
        "code": "BAY",
        "country": "RO",
        "state": "",
        "name": "Baia Mare Airport"
    },
    {
        "code": "BAZ",
        "country": "BR",
        "state": "AM",
        "name": "Barcelos Airport"
    },
    {
        "code": "BBA",
        "country": "CL",
        "state": "",
        "name": "Balmaceda Airport"
    },
    {
        "code": "BBG",
        "country": "KI",
        "state": "",
        "name": "Butaritari Airport"
    },
    {
        "code": "BBI",
        "country": "IN",
        "state": "OR",
        "name": "Biju Patnaik Airport"
    },
    {
        "code": "BBK",
        "country": "BW",
        "state": "",
        "name": "Kasane Airport"
    },
    {
        "code": "BBN",
        "country": "MY",
        "state": "",
        "name": "Bario Airport"
    },
    {
        "code": "BBU",
        "country": "RO",
        "state": "",
        "name": "Baneasa - Aurel Vlaicu Airport"
    },
    {
        "code": "BCD",
        "country": "PH",
        "state": "",
        "name": "Silay International Airport"
    },
    {
        "code": "BCI",
        "country": "AU",
        "state": "QL",
        "name": "Barcaldine Airport"
    },
    {
        "code": "BCM",
        "country": "RO",
        "state": "",
        "name": "Bacau Airport"
    },
    {
        "code": "BCN",
        "country": "ES",
        "state": "",
        "name": "Barcelona Airport"
    },
    {
        "code": "BCO",
        "country": "ET",
        "state": "",
        "name": "Bako Airport"
    },
    {
        "code": "BCT",
        "country": "US",
        "state": "FL",
        "name": "Boca Raton Airport"
    },
    {
        "code": "BDA",
        "country": "BM",
        "state": "",
        "name": "L.F. Wade International Airport"
    },
    {
        "code": "BDB",
        "country": "AU",
        "state": "QL",
        "name": "Bundaberg Airport"
    },
    {
        "code": "BDD",
        "country": "AU",
        "state": "QL",
        "name": "Badu Island Airport"
    },
    {
        "code": "BDH",
        "country": "IR",
        "state": "",
        "name": "Bandar Lengeh Airport"
    },
    {
        "code": "BDJ",
        "country": "ID",
        "state": "",
        "name": "Syamsudin Noor Airport"
    },
    {
        "code": "BDL",
        "country": "US",
        "state": "CT",
        "name": "Bradley International Airport"
    },
    {
        "code": "BDO",
        "country": "ID",
        "state": "",
        "name": "Husein Sastranegara Airport"
    },
    {
        "code": "BDP",
        "country": "NP",
        "state": "",
        "name": "Chandragadhi Airport"
    },
    {
        "code": "BDQ",
        "country": "IN",
        "state": "GJ",
        "name": "Vadodara Airport"
    },
    {
        "code": "BDS",
        "country": "IT",
        "state": "",
        "name": "Casale Airport"
    },
    {
        "code": "BDU",
        "country": "NO",
        "state": "",
        "name": "Bardufoss Airport"
    },
    {
        "code": "BEB",
        "country": "GB",
        "state": "",
        "name": "Benbecula Airport"
    },
    {
        "code": "BEF",
        "country": "NI",
        "state": "",
        "name": "Bluefields Airport"
    },
    {
        "code": "BEG",
        "country": "RS",
        "state": "",
        "name": "Nikola Tesla Airport"
    },
    {
        "code": "BEJ",
        "country": "ID",
        "state": "",
        "name": "Kalimarau Airport"
    },
    {
        "code": "BEK",
        "country": "IN",
        "state": "UP",
        "name": "Bareilly Airport"
    },
    {
        "code": "BEL",
        "country": "BR",
        "state": "PA",
        "name": "Val de Cans International Airport"
    },
    {
        "code": "BEM",
        "country": "MA",
        "state": "",
        "name": "Beni Mellal National Airport"
    },
    {
        "code": "BEN",
        "country": "LY",
        "state": "",
        "name": "Benina International Airport"
    },
    {
        "code": "BER",
        "country": "DE",
        "state": "",
        "name": "Brandenburg Airport"
    },
    {
        "code": "BES",
        "country": "FR",
        "state": "",
        "name": "Bretagne Airport"
    },
    {
        "code": "BET",
        "country": "US",
        "state": "AK",
        "name": "Bethel Airport"
    },
    {
        "code": "BEU",
        "country": "AU",
        "state": "QL",
        "name": "Bedourie Airport"
    },
    {
        "code": "BEW",
        "country": "MZ",
        "state": "",
        "name": "Beira Airport"
    },
    {
        "code": "BEY",
        "country": "LB",
        "state": "",
        "name": "Rafic Hariri International"
    },
    {
        "code": "BEZ",
        "country": "KI",
        "state": "",
        "name": "Beru Airport"
    },
    {
        "code": "BFD",
        "country": "US",
        "state": "PA",
        "name": "Bradford Regional Airport"
    },
    {
        "code": "BFF",
        "country": "US",
        "state": "NE",
        "name": "Western Nebraska Regional Airport"
    },
    {
        "code": "BFI",
        "country": "US",
        "state": "WA",
        "name": "Boeing Field-King County International"
    },
    {
        "code": "BFJ",
        "country": "CN",
        "state": "",
        "name": "Bijie Airport"
    },
    {
        "code": "BFL",
        "country": "US",
        "state": "CA",
        "name": "Meadows Field"
    },
    {
        "code": "BFM",
        "country": "US",
        "state": "AL",
        "name": "Mobile Downtown Airport"
    },
    {
        "code": "BFN",
        "country": "ZA",
        "state": "",
        "name": "Bloemfontein International Airport"
    },
    {
        "code": "BFS",
        "country": "GB",
        "state": "",
        "name": "Belfast International Airport"
    },
    {
        "code": "BFV",
        "country": "TH",
        "state": "",
        "name": "Buriram Airport"
    },
    {
        "code": "BFX",
        "country": "CM",
        "state": "",
        "name": "Bafoussam Airport"
    },
    {
        "code": "BGA",
        "country": "CO",
        "state": "",
        "name": "Palonegro International Airport"
    },
    {
        "code": "BGF",
        "country": "CF",
        "state": "",
        "name": "Mpoko International Airport"
    },
    {
        "code": "BGG",
        "country": "TR",
        "state": "",
        "name": "Bingol Airport"
    },
    {
        "code": "BGI",
        "country": "BB",
        "state": "",
        "name": "Grantley Adams International Airport"
    },
    {
        "code": "BGM",
        "country": "US",
        "state": "NY",
        "name": "Greater Binghamton Airport"
    },
    {
        "code": "BGN",
        "country": "RU",
        "state": "",
        "name": "Belaya Gora Airport"
    },
    {
        "code": "BGO",
        "country": "NO",
        "state": "",
        "name": "Flesland Airport"
    },
    {
        "code": "BGR",
        "country": "US",
        "state": "ME",
        "name": "Bangor International Airport"
    },
    {
        "code": "BGS",
        "country": "RU",
        "state": "",
        "name": "Boguchany Airport"
    },
    {
        "code": "BGW",
        "country": "IQ",
        "state": "",
        "name": "Baghdad International Airport"
    },
    {
        "code": "BGX",
        "country": "BR",
        "state": "RS",
        "name": "Gustavo Kraemer Airport"
    },
    {
        "code": "BGY",
        "country": "IT",
        "state": "",
        "name": "Bergamo/Orio al Serio Airport"
    },
    {
        "code": "BHB",
        "country": "US",
        "state": "ME",
        "name": "Hancock County Airport"
    },
    {
        "code": "BHD",
        "country": "GB",
        "state": "",
        "name": "George Best City Airport"
    },
    {
        "code": "BHE",
        "country": "NZ",
        "state": "",
        "name": "Woodbourne Airport"
    },
    {
        "code": "BHH",
        "country": "SA",
        "state": "",
        "name": "Bisha Airport"
    },
    {
        "code": "BHI",
        "country": "AR",
        "state": "BA",
        "name": "Comandante Espora Airport"
    },
    {
        "code": "BHJ",
        "country": "IN",
        "state": "GJ",
        "name": "Shyamji Krishna Verma Airport"
    },
    {
        "code": "BHK",
        "country": "UZ",
        "state": "",
        "name": "Bukhara International Airport"
    },
    {
        "code": "BHM",
        "country": "US",
        "state": "AL",
        "name": "Shuttlesworth International Airport"
    },
    {
        "code": "BHO",
        "country": "IN",
        "state": "MP",
        "name": "Raja Bhoj Airport"
    },
    {
        "code": "BHQ",
        "country": "AU",
        "state": "NS",
        "name": "Broken Hill Airport"
    },
    {
        "code": "BHR",
        "country": "NP",
        "state": "",
        "name": "Bharatpur Airport"
    },
    {
        "code": "BHU",
        "country": "IN",
        "state": "GJ",
        "name": "Bhavnagar Airport"
    },
    {
        "code": "BHX",
        "country": "GB",
        "state": "",
        "name": "Birmingham Airport"
    },
    {
        "code": "BHY",
        "country": "CN",
        "state": "",
        "name": "Fucheng Airport"
    },
    {
        "code": "BIA",
        "country": "FR",
        "state": "",
        "name": "Poretta Airport"
    },
    {
        "code": "BIB",
        "country": "SO",
        "state": "",
        "name": "Baidoa Airport"
    },
    {
        "code": "BIH",
        "country": "US",
        "state": "CA",
        "name": "Eastern Sierra Regional Airport"
    },
    {
        "code": "BIK",
        "country": "ID",
        "state": "",
        "name": "Frans Kaisiepo Airport"
    },
    {
        "code": "BIL",
        "country": "US",
        "state": "MT",
        "name": "Logan International Airport"
    },
    {
        "code": "BIM",
        "country": "BS",
        "state": "",
        "name": "South Bimini Airport"
    },
    {
        "code": "BIO",
        "country": "ES",
        "state": "",
        "name": "Bilbao Airport"
    },
    {
        "code": "BIQ",
        "country": "FR",
        "state": "",
        "name": "Pays Basque Airport"
    },
    {
        "code": "BIR",
        "country": "NP",
        "state": "",
        "name": "Biratnagar Airport"
    },
    {
        "code": "BIS",
        "country": "US",
        "state": "ND",
        "name": "Bismarck Municipal Airport"
    },
    {
        "code": "BIU",
        "country": "IS",
        "state": "",
        "name": "Bildudalur Airport"
    },
    {
        "code": "BJA",
        "country": "DZ",
        "state": "",
        "name": "Soummam-Abane Ramdane Airport"
    },
    {
        "code": "BJB",
        "country": "IR",
        "state": "",
        "name": "Bojnurd Airport"
    },
    {
        "code": "BJC",
        "country": "US",
        "state": "CO",
        "name": "Rocky Mountain Metropolitan Airport"
    },
    {
        "code": "BJF",
        "country": "NO",
        "state": "",
        "name": "Batsfjord Airport"
    },
    {
        "code": "BJI",
        "country": "US",
        "state": "MN",
        "name": "Bemidji Regional Airport"
    },
    {
        "code": "BJL",
        "country": "GM",
        "state": "",
        "name": "Banjul International Airport"
    },
    {
        "code": "BJM",
        "country": "BI",
        "state": "",
        "name": "Bujumbura International Airport"
    },
    {
        "code": "BJR",
        "country": "ET",
        "state": "",
        "name": "Bahar Dar Airport"
    },
    {
        "code": "BJV",
        "country": "TR",
        "state": "",
        "name": "Milas Airport"
    },
    {
        "code": "BJW",
        "country": "ID",
        "state": "",
        "name": "Soa Airport"
    },
    {
        "code": "BJX",
        "country": "MX",
        "state": "",
        "name": "Del Bajio International Airport"
    },
    {
        "code": "BJZ",
        "country": "ES",
        "state": "",
        "name": "Badajoz Airport"
    },
    {
        "code": "BKA",
        "country": "RU",
        "state": "",
        "name": "Baykit Airport"
    },
    {
        "code": "BKB",
        "country": "IN",
        "state": "RJ",
        "name": "Nal Airport"
    },
    {
        "code": "BKC",
        "country": "US",
        "state": "AK",
        "name": "Buckland Airport"
    },
    {
        "code": "BKG",
        "country": "US",
        "state": "MO",
        "name": "Branson Airport"
    },
    {
        "code": "BKI",
        "country": "MY",
        "state": "",
        "name": "Kota Kinabalu International Airport"
    },
    {
        "code": "BKK",
        "country": "TH",
        "state": "",
        "name": "Suvarnabhumi International"
    },
    {
        "code": "BKM",
        "country": "MY",
        "state": "",
        "name": "Bakelalan Airport"
    },
    {
        "code": "BKO",
        "country": "ML",
        "state": "",
        "name": "Senou International Airport"
    },
    {
        "code": "BKQ",
        "country": "AU",
        "state": "QL",
        "name": "Blackall Airport"
    },
    {
        "code": "BKS",
        "country": "ID",
        "state": "",
        "name": "Fatmawati Soekarno Airport"
    },
    {
        "code": "BKW",
        "country": "US",
        "state": "WV",
        "name": "Raleigh County Memorial Airport"
    },
    {
        "code": "BKZ",
        "country": "TZ",
        "state": "",
        "name": "Bukoba Airport"
    },
    {
        "code": "BLA",
        "country": "VE",
        "state": "",
        "name": "Jose Antonio Anzoategui International A"
    },
    {
        "code": "BLB",
        "country": "PA",
        "state": "",
        "name": "Panama Pacifico Airport"
    },
    {
        "code": "BLD",
        "country": "US",
        "state": "NV",
        "name": "Boulder City Municipal Airport"
    },
    {
        "code": "BLI",
        "country": "US",
        "state": "WA",
        "name": "Bellingham International Airport"
    },
    {
        "code": "BLJ",
        "country": "DZ",
        "state": "",
        "name": "Mostepha Ben Boulaid Airport"
    },
    {
        "code": "BLL",
        "country": "DK",
        "state": "",
        "name": "Billund Airport"
    },
    {
        "code": "BLQ",
        "country": "IT",
        "state": "",
        "name": "Guglielmo Marconi Airport"
    },
    {
        "code": "BLR",
        "country": "IN",
        "state": "KA",
        "name": "Kempegowda International Airport"
    },
    {
        "code": "BLV",
        "country": "US",
        "state": "IL",
        "name": "MidAmerica Saint Louis Airport"
    },
    {
        "code": "BLZ",
        "country": "MW",
        "state": "",
        "name": "Chileka International Airport"
    },
    {
        "code": "BMA",
        "country": "SE",
        "state": "",
        "name": "Bromma Airport"
    },
    {
        "code": "BME",
        "country": "AU",
        "state": "WA",
        "name": "Broome International Airport"
    },
    {
        "code": "BMI",
        "country": "US",
        "state": "IL",
        "name": "Central Illinois Regional Airport"
    },
    {
        "code": "BMO",
        "country": "MM",
        "state": "",
        "name": "Bhamo Airport"
    },
    {
        "code": "BMU",
        "country": "ID",
        "state": "",
        "name": "Sultan M. Salahuddin Airport"
    },
    {
        "code": "BMV",
        "country": "VN",
        "state": "",
        "name": "Buon Ma Thuot Airport"
    },
    {
        "code": "BMW",
        "country": "DZ",
        "state": "",
        "name": "Bordj Mokhtar Airport"
    },
    {
        "code": "BNA",
        "country": "US",
        "state": "TN",
        "name": "Nashville International Airport"
    },
    {
        "code": "BNC",
        "country": "CD",
        "state": "",
        "name": "Mavivi Airport"
    },
    {
        "code": "BND",
        "country": "IR",
        "state": "",
        "name": "Bandar Abbas International Airport"
    },
    {
        "code": "BNE",
        "country": "AU",
        "state": "QL",
        "name": "Brisbane International Airport"
    },
    {
        "code": "BNI",
        "country": "NG",
        "state": "",
        "name": "Benin City Airport"
    },
    {
        "code": "BNK",
        "country": "AU",
        "state": "NS",
        "name": "Byron Gateway Airport"
    },
    {
        "code": "BNN",
        "country": "NO",
        "state": "",
        "name": "Bronnoy Airport"
    },
    {
        "code": "BNS",
        "country": "VE",
        "state": "",
        "name": "Barinas Airport"
    },
    {
        "code": "BNX",
        "country": "BA",
        "state": "",
        "name": "Banja Luka International Airport"
    },
    {
        "code": "BNY",
        "country": "SB",
        "state": "",
        "name": "Anua Airport"
    },
    {
        "code": "BOB",
        "country": "PF",
        "state": "",
        "name": "Motu Mute Airport"
    },
    {
        "code": "BOC",
        "country": "PA",
        "state": "",
        "name": "Isla Colon International Airport"
    },
    {
        "code": "BOD",
        "country": "FR",
        "state": "",
        "name": "Merignac Airport"
    },
    {
        "code": "BOG",
        "country": "CO",
        "state": "",
        "name": "El Dorado International Airport"
    },
    {
        "code": "BOH",
        "country": "GB",
        "state": "",
        "name": "Bournemouth International Airport"
    },
    {
        "code": "BOI",
        "country": "US",
        "state": "ID",
        "name": "Boise Air Terminal (Gowen Field)"
    },
    {
        "code": "BOJ",
        "country": "BG",
        "state": "",
        "name": "Burgas Airport"
    },
    {
        "code": "BOM",
        "country": "IN",
        "state": "MH",
        "name": "Chhatrapati Shivaji Maharaj Airport"
    },
    {
        "code": "BON",
        "country": "BQ",
        "state": "",
        "name": "Flamingo International Airport"
    },
    {
        "code": "BOO",
        "country": "NO",
        "state": "",
        "name": "Bodo Airport"
    },
    {
        "code": "BOS",
        "country": "US",
        "state": "MA",
        "name": "Edward L. Logan International Airport"
    },
    {
        "code": "BOY",
        "country": "BF",
        "state": "",
        "name": "Bobo Dioulasso Airport"
    },
    {
        "code": "BPA",
        "country": "PH",
        "state": "",
        "name": "Borongan Airport"
    },
    {
        "code": "BPE",
        "country": "CN",
        "state": "",
        "name": "Beidaihe Airport"
    },
    {
        "code": "BPG",
        "country": "BR",
        "state": "MT",
        "name": "Barra do Garcas Airport"
    },
    {
        "code": "BPL",
        "country": "CN",
        "state": "",
        "name": "Alashankou Airport"
    },
    {
        "code": "BPN",
        "country": "ID",
        "state": "",
        "name": "Sepinggan Airport"
    },
    {
        "code": "BPR",
        "country": "GB",
        "state": "",
        "name": "Parkway Railway Station"
    },
    {
        "code": "BPS",
        "country": "BR",
        "state": "BA",
        "name": "Porto Seguro Airport"
    },
    {
        "code": "BPT",
        "country": "US",
        "state": "TX",
        "name": "Jack Brooks Regional Airport"
    },
    {
        "code": "BPX",
        "country": "CN",
        "state": "",
        "name": "Bamda/Bangda Airport"
    },
    {
        "code": "BQB",
        "country": "AU",
        "state": "WA",
        "name": "Busselton Airport"
    },
    {
        "code": "BQC",
        "country": "CA",
        "state": "QC",
        "name": "Sainte-Foy Bus Station"
    },
    {
        "code": "BQD",
        "country": "IT",
        "state": "",
        "name": "Brindisi Railway Station"
    },
    {
        "code": "BQJ",
        "country": "RU",
        "state": "",
        "name": "Batagay Airport"
    },
    {
        "code": "BQK",
        "country": "US",
        "state": "GA",
        "name": "Golden Isles Airport"
    },
    {
        "code": "BQL",
        "country": "AU",
        "state": "QL",
        "name": "Boulia Airport"
    },
    {
        "code": "BQN",
        "country": "PR",
        "state": "",
        "name": "Rafael Hernandez Airport"
    },
    {
        "code": "BQS",
        "country": "RU",
        "state": "",
        "name": "Ignatyevo Airport"
    },
    {
        "code": "BQT",
        "country": "BY",
        "state": "",
        "name": "Brest Airport"
    },
    {
        "code": "BQW",
        "country": "AU",
        "state": "WA",
        "name": "Balgo Hill Airport"
    },
    {
        "code": "BRA",
        "country": "BR",
        "state": "BA",
        "name": "Barreiras Airport"
    },
    {
        "code": "BRB",
        "country": "BR",
        "state": "MA",
        "name": "Barreirinhas Airport"
    },
    {
        "code": "BRC",
        "country": "AR",
        "state": "RN",
        "name": "San Carlos Bariloche Airport"
    },
    {
        "code": "BRD",
        "country": "US",
        "state": "MN",
        "name": "Brainerd Lakes Regional Airport"
    },
    {
        "code": "BRE",
        "country": "DE",
        "state": "",
        "name": "Bremen Airport"
    },
    {
        "code": "BRI",
        "country": "IT",
        "state": "",
        "name": "Palese Airport"
    },
    {
        "code": "BRK",
        "country": "AU",
        "state": "NS",
        "name": "Bourke Airport"
    },
    {
        "code": "BRL",
        "country": "US",
        "state": "IA",
        "name": "Southeast Iowa Regional Airport"
    },
    {
        "code": "BRM",
        "country": "VE",
        "state": "",
        "name": "Jacinto Lara International Airport"
    },
    {
        "code": "BRN",
        "country": "CH",
        "state": "",
        "name": "Belp Airport"
    },
    {
        "code": "BRO",
        "country": "US",
        "state": "TX",
        "name": "South Padre Island International Airpor"
    },
    {
        "code": "BRQ",
        "country": "CZ",
        "state": "",
        "name": "Turany Airport"
    },
    {
        "code": "BRR",
        "country": "GB",
        "state": "",
        "name": "Barra Airport"
    },
    {
        "code": "BRS",
        "country": "GB",
        "state": "",
        "name": "Bristol Airport"
    },
    {
        "code": "BRU",
        "country": "BE",
        "state": "",
        "name": "Brussels Airport"
    },
    {
        "code": "BRW",
        "country": "US",
        "state": "AK",
        "name": "Wiley Post-Will Rogers Memorial Airport"
    },
    {
        "code": "BRZ",
        "country": "IT",
        "state": "",
        "name": "Brescia Railway Station"
    },
    {
        "code": "BSA",
        "country": "SO",
        "state": "",
        "name": "Bosaso International Airport"
    },
    {
        "code": "BSB",
        "country": "BR",
        "state": "DF",
        "name": "Juscelino Kubitscheck International Air"
    },
    {
        "code": "BSC",
        "country": "CO",
        "state": "",
        "name": "Jose Celestino Mutis Airport"
    },
    {
        "code": "BSD",
        "country": "CN",
        "state": "",
        "name": "Baoshan Airport"
    },
    {
        "code": "BSG",
        "country": "GQ",
        "state": "",
        "name": "Bata Airport"
    },
    {
        "code": "BSH",
        "country": "GB",
        "state": "",
        "name": "Brighton Railway Station"
    },
    {
        "code": "BSK",
        "country": "DZ",
        "state": "",
        "name": "Mohamed Khider Airport"
    },
    {
        "code": "BSL",
        "country": "CH",
        "state": "",
        "name": "EuroAirport Swiss"
    },
    {
        "code": "BSO",
        "country": "PH",
        "state": "",
        "name": "Basco Airport"
    },
    {
        "code": "BSR",
        "country": "IQ",
        "state": "",
        "name": "Basrah International Airport"
    },
    {
        "code": "BTH",
        "country": "ID",
        "state": "",
        "name": "HangNadim Airport"
    },
    {
        "code": "BTI",
        "country": "US",
        "state": "AK",
        "name": "Barter Island Airport"
    },
    {
        "code": "BTJ",
        "country": "ID",
        "state": "",
        "name": "Sultan Iskandar Muda Airport"
    },
    {
        "code": "BTK",
        "country": "RU",
        "state": "",
        "name": "Bratsk Airport"
    },
    {
        "code": "BTM",
        "country": "US",
        "state": "MT",
        "name": "Bert Mooney Airport"
    },
    {
        "code": "BTR",
        "country": "US",
        "state": "LA",
        "name": "Baton Rouge Metropolitan Airport-Ryan F"
    },
    {
        "code": "BTS",
        "country": "SK",
        "state": "",
        "name": "M.R. Stefanik Airport"
    },
    {
        "code": "BTT",
        "country": "US",
        "state": "AK",
        "name": "Bettles Airport"
    },
    {
        "code": "BTU",
        "country": "MY",
        "state": "",
        "name": "Bintulu Airport"
    },
    {
        "code": "BTV",
        "country": "US",
        "state": "VT",
        "name": "Burlington International Airport"
    },
    {
        "code": "BTW",
        "country": "ID",
        "state": "",
        "name": "Batu Licin Airport"
    },
    {
        "code": "BUA",
        "country": "PG",
        "state": "",
        "name": "Buka Airport"
    },
    {
        "code": "BUC",
        "country": "AU",
        "state": "QL",
        "name": "Burketown Airport"
    },
    {
        "code": "BUD",
        "country": "HU",
        "state": "",
        "name": "Liszt Ferenc International Airport"
    },
    {
        "code": "BUF",
        "country": "US",
        "state": "NY",
        "name": "Buffalo Niagara International Airport"
    },
    {
        "code": "BUN",
        "country": "CO",
        "state": "",
        "name": "Gerardo Tobar Lopez Airport"
    },
    {
        "code": "BUP",
        "country": "IN",
        "state": "PB",
        "name": "Bathinda Airport"
    },
    {
        "code": "BUQ",
        "country": "ZW",
        "state": "",
        "name": "Joshua Mqabuko Nkomo International Airp"
    },
    {
        "code": "BUR",
        "country": "US",
        "state": "CA",
        "name": "Bob Hope Airport"
    },
    {
        "code": "BUS",
        "country": "GE",
        "state": "",
        "name": "Batumi Airport"
    },
    {
        "code": "BUT",
        "country": "BT",
        "state": "",
        "name": "Bathpalathang Airport"
    },
    {
        "code": "BUU",
        "country": "ID",
        "state": "",
        "name": "Muara Bungo Airport"
    },
    {
        "code": "BUW",
        "country": "ID",
        "state": "",
        "name": "Betoambari Airport"
    },
    {
        "code": "BUX",
        "country": "CD",
        "state": "",
        "name": "Bunia Airport"
    },
    {
        "code": "BUZ",
        "country": "IR",
        "state": "",
        "name": "Bushehr Airport"
    },
    {
        "code": "BVA",
        "country": "FR",
        "state": "",
        "name": "Beauvais-Tille Airport"
    },
    {
        "code": "BVB",
        "country": "BR",
        "state": "RR",
        "name": "Atlas Brasil Cantanhede International A"
    },
    {
        "code": "BVC",
        "country": "CV",
        "state": "",
        "name": "Rabil Airport"
    },
    {
        "code": "BVE",
        "country": "FR",
        "state": "",
        "name": "Vallee de la Dordogne Airport"
    },
    {
        "code": "BVG",
        "country": "NO",
        "state": "",
        "name": "Berlevag Airport"
    },
    {
        "code": "BVH",
        "country": "BR",
        "state": "RO",
        "name": "Brigadeiro Camarao Airport"
    },
    {
        "code": "BVI",
        "country": "AU",
        "state": "QL",
        "name": "Birdsville Airport"
    },
    {
        "code": "BVS",
        "country": "BR",
        "state": "PA",
        "name": "Breves Airport"
    },
    {
        "code": "BWA",
        "country": "NP",
        "state": "",
        "name": "Gautam Buddha Airport"
    },
    {
        "code": "BWI",
        "country": "US",
        "state": "MD",
        "name": "Baltimore/Washington International Airp"
    },
    {
        "code": "BWK",
        "country": "HR",
        "state": "",
        "name": "Bol Airport"
    },
    {
        "code": "BWN",
        "country": "BN",
        "state": "",
        "name": "Brunei International Airport"
    },
    {
        "code": "BWT",
        "country": "AU",
        "state": "TS",
        "name": "Wynyard Airport"
    },
    {
        "code": "BWX",
        "country": "ID",
        "state": "",
        "name": "Blimbingsari Airport"
    },
    {
        "code": "BXG",
        "country": "AU",
        "state": "VI",
        "name": "Bendigo Airport"
    },
    {
        "code": "BXR",
        "country": "IR",
        "state": "",
        "name": "Bam Airport"
    },
    {
        "code": "BXU",
        "country": "PH",
        "state": "",
        "name": "Bancasi Airport"
    },
    {
        "code": "BYC",
        "country": "BO",
        "state": "",
        "name": "Yacuiba Airport"
    },
    {
        "code": "BYK",
        "country": "CI",
        "state": "",
        "name": "Bouake Airport"
    },
    {
        "code": "BYN",
        "country": "MN",
        "state": "",
        "name": "Bayankhongor Airport"
    },
    {
        "code": "BYO",
        "country": "BR",
        "state": "MS",
        "name": "Bonito Airport"
    },
    {
        "code": "BZE",
        "country": "BZ",
        "state": "",
        "name": "Philip S.W. Goldson International Airpo"
    },
    {
        "code": "BZG",
        "country": "PL",
        "state": "",
        "name": "Ignacy Jan Paderewski Airport"
    },
    {
        "code": "BZL",
        "country": "BD",
        "state": "",
        "name": "Barisal Airport"
    },
    {
        "code": "BZN",
        "country": "US",
        "state": "MT",
        "name": "Yellowstone International Airport"
    },
    {
        "code": "BZO",
        "country": "IT",
        "state": "",
        "name": "Dolomiti Airport"
    },
    {
        "code": "BZR",
        "country": "FR",
        "state": "",
        "name": "Beziers Vias Airport"
    },
    {
        "code": "BZV",
        "country": "CG",
        "state": "",
        "name": "Maya-Maya Airport"
    },
    {
        "code": "BZX",
        "country": "CN",
        "state": "",
        "name": "Enyang Airport"
    },
    {
        "code": "BZZ",
        "country": "GB",
        "state": "",
        "name": "Brize Norton Royal Air Force Station"
    },
    {
        "code": "CAB",
        "country": "AO",
        "state": "",
        "name": "Cabinda Airport"
    },
    {
        "code": "CAC",
        "country": "BR",
        "state": "PR",
        "name": "Adalberto Mendes da Silva Airport"
    },
    {
        "code": "CAE",
        "country": "US",
        "state": "SC",
        "name": "Columbia Metropolitan Airport"
    },
    {
        "code": "CAG",
        "country": "IT",
        "state": "",
        "name": "Elmas Airport"
    },
    {
        "code": "CAH",
        "country": "VN",
        "state": "",
        "name": "Ca Mau Airport"
    },
    {
        "code": "CAI",
        "country": "EG",
        "state": "",
        "name": "Cairo International Airport"
    },
    {
        "code": "CAJ",
        "country": "VE",
        "state": "",
        "name": "Canaima Airport"
    },
    {
        "code": "CAK",
        "country": "US",
        "state": "OH",
        "name": "Akron/Canton Regional Airport"
    },
    {
        "code": "CAL",
        "country": "GB",
        "state": "",
        "name": "Campbeltown Airport"
    },
    {
        "code": "CAN",
        "country": "CN",
        "state": "",
        "name": "Baiyun International Airport"
    },
    {
        "code": "CAP",
        "country": "HT",
        "state": "",
        "name": "Hugo Chavez International Airport"
    },
    {
        "code": "CAQ",
        "country": "CO",
        "state": "",
        "name": "Juan H. White Airport"
    },
    {
        "code": "CAU",
        "country": "BR",
        "state": "PE",
        "name": "Oscar Laranjeiras Airport"
    },
    {
        "code": "CAW",
        "country": "BR",
        "state": "RJ",
        "name": "Bartolomeu Lisandro Airport"
    },
    {
        "code": "CAY",
        "country": "GF",
        "state": "",
        "name": "Felix Eboue Airport"
    },
    {
        "code": "CAZ",
        "country": "AU",
        "state": "NS",
        "name": "Cobar Airport"
    },
    {
        "code": "CBB",
        "country": "BO",
        "state": "",
        "name": "Jorge Wilstermann International Airport"
    },
    {
        "code": "CBG",
        "country": "GB",
        "state": "",
        "name": "Cambridge Airport"
    },
    {
        "code": "CBH",
        "country": "DZ",
        "state": "",
        "name": "Boudghene Ben Ali Lofti Airport"
    },
    {
        "code": "CBL",
        "country": "VE",
        "state": "",
        "name": "Tomas de Heres Airport"
    },
    {
        "code": "CBO",
        "country": "PH",
        "state": "",
        "name": "Awang Airport"
    },
    {
        "code": "CBQ",
        "country": "NG",
        "state": "",
        "name": "Margaret Ekpo International Airport"
    },
    {
        "code": "CBR",
        "country": "AU",
        "state": "AC",
        "name": "Canberra Airport"
    },
    {
        "code": "CBT",
        "country": "AO",
        "state": "",
        "name": "Catumbela Airport"
    },
    {
        "code": "CCC",
        "country": "CU",
        "state": "",
        "name": "Jardines del Rey Airport"
    },
    {
        "code": "CCF",
        "country": "FR",
        "state": "",
        "name": "Salvaza Airport"
    },
    {
        "code": "CCJ",
        "country": "IN",
        "state": "KL",
        "name": "Kozhikode International Airport"
    },
    {
        "code": "CCK",
        "country": "CC",
        "state": "",
        "name": "Cocos Islands Airport"
    },
    {
        "code": "CCL",
        "country": "AU",
        "state": "QL",
        "name": "Chinchilla Airport"
    },
    {
        "code": "CCP",
        "country": "CL",
        "state": "",
        "name": "Carriel Sur Airport"
    },
    {
        "code": "CCR",
        "country": "US",
        "state": "CA",
        "name": "Buchanan Field"
    },
    {
        "code": "CCS",
        "country": "VE",
        "state": "",
        "name": "Simon Bolivar International Airport"
    },
    {
        "code": "CCU",
        "country": "IN",
        "state": "WB",
        "name": "Subhas Chandra Bose Airport"
    },
    {
        "code": "CCV",
        "country": "VU",
        "state": "",
        "name": "Craig Cove Airport"
    },
    {
        "code": "CDB",
        "country": "US",
        "state": "AK",
        "name": "Cold Bay Airport"
    },
    {
        "code": "CDC",
        "country": "US",
        "state": "UT",
        "name": "Cedar City Regional Airport"
    },
    {
        "code": "CDE",
        "country": "CN",
        "state": "",
        "name": "PuningAirport"
    },
    {
        "code": "CDG",
        "country": "FR",
        "state": "",
        "name": "Charles de Gaulle Airport"
    },
    {
        "code": "CDP",
        "country": "IN",
        "state": "AP",
        "name": "Cuddapah Airport"
    },
    {
        "code": "CDR",
        "country": "US",
        "state": "NE",
        "name": "Chadron Municipal Airport"
    },
    {
        "code": "CDT",
        "country": "ES",
        "state": "",
        "name": "Castellon de la Plana Airport"
    },
    {
        "code": "CDV",
        "country": "US",
        "state": "AK",
        "name": "Merle K (Mudhole) Smith Airport"
    },
    {
        "code": "CDZ",
        "country": "ES",
        "state": "",
        "name": "Cadiz Railway Station"
    },
    {
        "code": "CEB",
        "country": "PH",
        "state": "",
        "name": "Mactan International Airport"
    },
    {
        "code": "CEC",
        "country": "US",
        "state": "CA",
        "name": "Del Norte County Regional Airport"
    },
    {
        "code": "CED",
        "country": "AU",
        "state": "SA",
        "name": "Ceduna Airport"
    },
    {
        "code": "CEE",
        "country": "RU",
        "state": "",
        "name": "Cherepovets Airport"
    },
    {
        "code": "CEI",
        "country": "TH",
        "state": "",
        "name": "Mae Fah Luang International Airport"
    },
    {
        "code": "CEJ",
        "country": "ES",
        "state": "",
        "name": "Cuenca Railway Station"
    },
    {
        "code": "CEK",
        "country": "RU",
        "state": "",
        "name": "Balandino Airport"
    },
    {
        "code": "CEL",
        "country": "BR",
        "state": "RS",
        "name": "Canela"
    },
    {
        "code": "CEM",
        "country": "US",
        "state": "AK",
        "name": "Central Airport"
    },
    {
        "code": "CEN",
        "country": "MX",
        "state": "",
        "name": "Ciudad Obregon International Airport"
    },
    {
        "code": "CEZ",
        "country": "US",
        "state": "CO",
        "name": "Cortez Municipal Airport"
    },
    {
        "code": "CFB",
        "country": "BR",
        "state": "RJ",
        "name": "Cabo Frio International Airport"
    },
    {
        "code": "CFE",
        "country": "FR",
        "state": "",
        "name": "Auvergne Airport"
    },
    {
        "code": "CFG",
        "country": "CU",
        "state": "",
        "name": "Jaime Gonzalez Airport"
    },
    {
        "code": "CFK",
        "country": "DZ",
        "state": "",
        "name": "Aboubakr Belkaid Airport"
    },
    {
        "code": "CFN",
        "country": "IE",
        "state": "",
        "name": "Donegal Airport"
    },
    {
        "code": "CFR",
        "country": "FR",
        "state": "",
        "name": "Carpiquet Airport"
    },
    {
        "code": "CFS",
        "country": "AU",
        "state": "NS",
        "name": "Coffs Harbour Airport"
    },
    {
        "code": "CFU",
        "country": "GR",
        "state": "",
        "name": "Ioannis Kapodistrias Airport"
    },
    {
        "code": "CFW",
        "country": "GB",
        "state": "",
        "name": "Cardiff Railway Station"
    },
    {
        "code": "CGB",
        "country": "BR",
        "state": "MT",
        "name": "Marechal Rondon International Airport"
    },
    {
        "code": "CGD",
        "country": "CN",
        "state": "",
        "name": "Taohuayuan Airport"
    },
    {
        "code": "CGH",
        "country": "BR",
        "state": "SP",
        "name": "Congonhas Airport"
    },
    {
        "code": "CGI",
        "country": "US",
        "state": "MO",
        "name": "Cape Girardeau Regional Airport"
    },
    {
        "code": "CGK",
        "country": "ID",
        "state": "",
        "name": "Soekarno-Hatta International Airport"
    },
    {
        "code": "CGM",
        "country": "PH",
        "state": "",
        "name": "Mambajao Airport"
    },
    {
        "code": "CGN",
        "country": "DE",
        "state": "",
        "name": "Cologne/Bonn Airport"
    },
    {
        "code": "CGO",
        "country": "CN",
        "state": "",
        "name": "Xinzheng International Airport"
    },
    {
        "code": "CGP",
        "country": "BD",
        "state": "",
        "name": "Shah Amanat International Airport"
    },
    {
        "code": "CGQ",
        "country": "CN",
        "state": "",
        "name": "Longjia International Airport"
    },
    {
        "code": "CGR",
        "country": "BR",
        "state": "MS",
        "name": "Campo Grande International Airport"
    },
    {
        "code": "CGY",
        "country": "PH",
        "state": "",
        "name": "Laguindingan International Airport"
    },
    {
        "code": "CHA",
        "country": "US",
        "state": "TN",
        "name": "Chattanooga Metropolitan Airport"
    },
    {
        "code": "CHC",
        "country": "NZ",
        "state": "",
        "name": "Christchurch International Airport"
    },
    {
        "code": "CHG",
        "country": "CN",
        "state": "",
        "name": "Chaoyang Airport"
    },
    {
        "code": "CHH",
        "country": "PE",
        "state": "",
        "name": "Chachapoyas Airport"
    },
    {
        "code": "CHO",
        "country": "US",
        "state": "VA",
        "name": "Albemarle Airport"
    },
    {
        "code": "CHQ",
        "country": "GR",
        "state": "",
        "name": "Ioannis Daskalogiannis Airport"
    },
    {
        "code": "CHS",
        "country": "US",
        "state": "SC",
        "name": "Charleston International Airport/Air Fo"
    },
    {
        "code": "CHT",
        "country": "NZ",
        "state": "",
        "name": "Tuuta Airport"
    },
    {
        "code": "CHW",
        "country": "GB",
        "state": "",
        "name": "Royal Well Bus Station"
    },
    {
        "code": "CHX",
        "country": "PA",
        "state": "",
        "name": "Manuel Nino International Airport"
    },
    {
        "code": "CHY",
        "country": "SB",
        "state": "",
        "name": "Choiseul Bay Airport"
    },
    {
        "code": "CIA",
        "country": "IT",
        "state": "",
        "name": "Ciampino Airport"
    },
    {
        "code": "CID",
        "country": "US",
        "state": "IA",
        "name": "The Eastern Iowa Airport"
    },
    {
        "code": "CIF",
        "country": "CN",
        "state": "",
        "name": "Yulong Airport"
    },
    {
        "code": "CIH",
        "country": "CN",
        "state": "",
        "name": "Wangcun Airport"
    },
    {
        "code": "CIJ",
        "country": "BO",
        "state": "",
        "name": "Capitan Anibal Arab Airport"
    },
    {
        "code": "CIK",
        "country": "US",
        "state": "AK",
        "name": "Chalkyitsik Airport"
    },
    {
        "code": "CIT",
        "country": "KZ",
        "state": "",
        "name": "Shymkent International Airport"
    },
    {
        "code": "CIU",
        "country": "US",
        "state": "MI",
        "name": "Chippewa County International Airport"
    },
    {
        "code": "CIX",
        "country": "PE",
        "state": "",
        "name": "J.A. Quinones Gonzalez Airport"
    },
    {
        "code": "CIY",
        "country": "IT",
        "state": "",
        "name": "Vincenzo Magliocco Airport"
    },
    {
        "code": "CIZ",
        "country": "BR",
        "state": "AM",
        "name": "Coari Airport"
    },
    {
        "code": "CJA",
        "country": "PE",
        "state": "",
        "name": "Armando R. Iglesias Airport"
    },
    {
        "code": "CJB",
        "country": "IN",
        "state": "TN",
        "name": "Coimbatore International Airport"
    },
    {
        "code": "CJC",
        "country": "CL",
        "state": "",
        "name": "El Loa Airport"
    },
    {
        "code": "CJJ",
        "country": "KR",
        "state": "",
        "name": "Cheongju International Airport"
    },
    {
        "code": "CJM",
        "country": "TH",
        "state": "",
        "name": "Chumphon Airport"
    },
    {
        "code": "CJS",
        "country": "MX",
        "state": "",
        "name": "Abraham Gonzalez International Airport"
    },
    {
        "code": "CJU",
        "country": "KR",
        "state": "",
        "name": "Jeju International Airport"
    },
    {
        "code": "CJZ",
        "country": "BR",
        "state": "PB",
        "name": "Cajazeiras Airport"
    },
    {
        "code": "CKB",
        "country": "US",
        "state": "WV",
        "name": "North Central West Virginia Airport"
    },
    {
        "code": "CKG",
        "country": "CN",
        "state": "",
        "name": "Jiangbei International Airport"
    },
    {
        "code": "CKH",
        "country": "RU",
        "state": "",
        "name": "Chokurdakh Airport"
    },
    {
        "code": "CKS",
        "country": "BR",
        "state": "PA",
        "name": "Carajas Airport"
    },
    {
        "code": "CKX",
        "country": "US",
        "state": "AK",
        "name": "Chicken Airport"
    },
    {
        "code": "CKY",
        "country": "GN",
        "state": "",
        "name": "Conakry International Airport"
    },
    {
        "code": "CKZ",
        "country": "TR",
        "state": "",
        "name": "Canakkale Airport"
    },
    {
        "code": "CLB",
        "country": "GB",
        "state": "",
        "name": "Colchester Bus Station"
    },
    {
        "code": "CLD",
        "country": "US",
        "state": "CA",
        "name": "McClellan-Palomar Airport"
    },
    {
        "code": "CLE",
        "country": "US",
        "state": "OH",
        "name": "Hopkins International Airport"
    },
    {
        "code": "CLJ",
        "country": "RO",
        "state": "",
        "name": "Cluj-Napoca Airport"
    },
    {
        "code": "CLL",
        "country": "US",
        "state": "TX",
        "name": "Easterwood Field"
    },
    {
        "code": "CLO",
        "country": "CO",
        "state": "",
        "name": "Alfonso Bonilla Aragon International Ai"
    },
    {
        "code": "CLP",
        "country": "US",
        "state": "AK",
        "name": "Clarks Point Airport"
    },
    {
        "code": "CLQ",
        "country": "MX",
        "state": "",
        "name": "Miguel de la Madrid Airport"
    },
    {
        "code": "CLT",
        "country": "US",
        "state": "NC",
        "name": "Douglas International Airport"
    },
    {
        "code": "CLV",
        "country": "BR",
        "state": "GO",
        "name": "Nelson R. Guimaraes Airport"
    },
    {
        "code": "CLY",
        "country": "FR",
        "state": "",
        "name": "Sainte Catherine Airport"
    },
    {
        "code": "CMA",
        "country": "AU",
        "state": "QL",
        "name": "Cunnamulla Airport"
    },
    {
        "code": "CMB",
        "country": "LK",
        "state": "",
        "name": "Bandaranaike International Airport"
    },
    {
        "code": "CME",
        "country": "MX",
        "state": "",
        "name": "Ciudad del Carmen International Airport"
    },
    {
        "code": "CMF",
        "country": "FR",
        "state": "",
        "name": "Chambery/Aix-les-Bains Airport"
    },
    {
        "code": "CMG",
        "country": "BR",
        "state": "MS",
        "name": "Corumba International Airport"
    },
    {
        "code": "CMH",
        "country": "US",
        "state": "OH",
        "name": "John Glenn International Airport"
    },
    {
        "code": "CMI",
        "country": "US",
        "state": "IL",
        "name": "University of Illinois Airport"
    },
    {
        "code": "CMN",
        "country": "MA",
        "state": "",
        "name": "Mohammed V Airport"
    },
    {
        "code": "CMW",
        "country": "CU",
        "state": "",
        "name": "Ignacio Agramonte International Airport"
    },
    {
        "code": "CMX",
        "country": "US",
        "state": "MI",
        "name": "Houghton County Memorial Airport"
    },
    {
        "code": "CNC",
        "country": "AU",
        "state": "QL",
        "name": "Coconut Island Airport"
    },
    {
        "code": "CND",
        "country": "RO",
        "state": "",
        "name": "Mihail Kogalniceanu Airport"
    },
    {
        "code": "CNF",
        "country": "BR",
        "state": "MG",
        "name": "Tancredo Neves International Airport"
    },
    {
        "code": "CNJ",
        "country": "AU",
        "state": "QL",
        "name": "Cloncurry Airport"
    },
    {
        "code": "CNM",
        "country": "US",
        "state": "NM",
        "name": "Cavern City Air Terminal"
    },
    {
        "code": "CNN",
        "country": "IN",
        "state": "KL",
        "name": "Kannur International Airport"
    },
    {
        "code": "CNP",
        "country": "GL",
        "state": "",
        "name": "Neerlerit Inaat Airport"
    },
    {
        "code": "CNQ",
        "country": "AR",
        "state": "CR",
        "name": "Corrientes Airport"
    },
    {
        "code": "CNS",
        "country": "AU",
        "state": "QL",
        "name": "Cairns International Airport"
    },
    {
        "code": "CNX",
        "country": "TH",
        "state": "",
        "name": "Chiang Mai International Airport"
    },
    {
        "code": "CNY",
        "country": "US",
        "state": "UT",
        "name": "Canyonlands Field"
    },
    {
        "code": "COD",
        "country": "US",
        "state": "WY",
        "name": "Yellowstone Regional Airport"
    },
    {
        "code": "COH",
        "country": "IN",
        "state": "WB",
        "name": "Cooch Behar Airport"
    },
    {
        "code": "COK",
        "country": "IN",
        "state": "KL",
        "name": "Kochi International Airport"
    },
    {
        "code": "COL",
        "country": "GB",
        "state": "",
        "name": "Coll Island Airport"
    },
    {
        "code": "COO",
        "country": "BJ",
        "state": "",
        "name": "Cadjehoun Airport"
    },
    {
        "code": "COR",
        "country": "AR",
        "state": "CD",
        "name": "A.L.V. Taravella Airport"
    },
    {
        "code": "COS",
        "country": "US",
        "state": "CO",
        "name": "Colorado Springs Municipal Airport"
    },
    {
        "code": "COU",
        "country": "US",
        "state": "MO",
        "name": "Columbia Regional Airport"
    },
    {
        "code": "CPC",
        "country": "AR",
        "state": "NE",
        "name": "Aviador Carlos Campos Airport"
    },
    {
        "code": "CPD",
        "country": "AU",
        "state": "SA",
        "name": "Coober Pedy Airport"
    },
    {
        "code": "CPE",
        "country": "MX",
        "state": "",
        "name": "Alberto Acuna Ongay International Airpo"
    },
    {
        "code": "CPH",
        "country": "DK",
        "state": "",
        "name": "Kastrup Airport"
    },
    {
        "code": "CPO",
        "country": "CL",
        "state": "",
        "name": "Desierto de Atacama Airport"
    },
    {
        "code": "CPR",
        "country": "US",
        "state": "WY",
        "name": "Natrona County International Airport"
    },
    {
        "code": "CPT",
        "country": "ZA",
        "state": "",
        "name": "Cape Town International Airport"
    },
    {
        "code": "CPV",
        "country": "BR",
        "state": "PB",
        "name": "Joao Suassuna Airport"
    },
    {
        "code": "CPX",
        "country": "PR",
        "state": "",
        "name": "Benjamin Rivera Noriega Airport"
    },
    {
        "code": "CQD",
        "country": "IR",
        "state": "",
        "name": "Shahre Kord Airport"
    },
    {
        "code": "CQW",
        "country": "CN",
        "state": "",
        "name": "Chongqing Xiannvshan Airport"
    },
    {
        "code": "CRA",
        "country": "RO",
        "state": "",
        "name": "Craiova Airport"
    },
    {
        "code": "CRD",
        "country": "AR",
        "state": "CB",
        "name": "General E. Mosconi Airport"
    },
    {
        "code": "CRI",
        "country": "BS",
        "state": "",
        "name": "Colonel Hill Airport"
    },
    {
        "code": "CRK",
        "country": "PH",
        "state": "",
        "name": "Clark International Airport"
    },
    {
        "code": "CRL",
        "country": "BE",
        "state": "",
        "name": "Brussels S. Charleroi Airport"
    },
    {
        "code": "CRM",
        "country": "PH",
        "state": "",
        "name": "Catarman National Airport"
    },
    {
        "code": "CRP",
        "country": "US",
        "state": "TX",
        "name": "Corpus Christi International Airport"
    },
    {
        "code": "CRV",
        "country": "IT",
        "state": "",
        "name": "Crotone Airport"
    },
    {
        "code": "CRW",
        "country": "US",
        "state": "WV",
        "name": "Yeager Airport"
    },
    {
        "code": "CRZ",
        "country": "TM",
        "state": "",
        "name": "Turkmenabat Airport"
    },
    {
        "code": "CSA",
        "country": "GB",
        "state": "",
        "name": "Colonsay Airport"
    },
    {
        "code": "CSG",
        "country": "US",
        "state": "GA",
        "name": "Columbus Airport"
    },
    {
        "code": "CSK",
        "country": "SN",
        "state": "",
        "name": "Cap Skiring Airport"
    },
    {
        "code": "CSU",
        "country": "BR",
        "state": "RS",
        "name": "Santa Cruz do Sul Airport"
    },
    {
        "code": "CSX",
        "country": "CN",
        "state": "",
        "name": "Huanghua International Airport"
    },
    {
        "code": "CSY",
        "country": "RU",
        "state": "",
        "name": "Cheboksary Airport"
    },
    {
        "code": "CTA",
        "country": "IT",
        "state": "",
        "name": "Fontanarossa Airport"
    },
    {
        "code": "CTC",
        "country": "AR",
        "state": "CA",
        "name": "Catamarca Airport"
    },
    {
        "code": "CTD",
        "country": "PA",
        "state": "",
        "name": "Alonso Valderrama Airport"
    },
    {
        "code": "CTG",
        "country": "CO",
        "state": "",
        "name": "Rafael Nunez International Airport"
    },
    {
        "code": "CTJ",
        "country": "IT",
        "state": "",
        "name": "Caserta Railway Station"
    },
    {
        "code": "CTL",
        "country": "AU",
        "state": "QL",
        "name": "Charleville Airport"
    },
    {
        "code": "CTM",
        "country": "MX",
        "state": "",
        "name": "Chetumal International Airport"
    },
    {
        "code": "CTN",
        "country": "AU",
        "state": "QL",
        "name": "Cooktown Airport"
    },
    {
        "code": "CTS",
        "country": "JP",
        "state": "",
        "name": "New Chitose Airport"
    },
    {
        "code": "CTU",
        "country": "CN",
        "state": "",
        "name": "Shuangliu International"
    },
    {
        "code": "CUC",
        "country": "CO",
        "state": "",
        "name": "Camilo Daza Airport"
    },
    {
        "code": "CUE",
        "country": "EC",
        "state": "",
        "name": "Mariscal Lamar International Airport"
    },
    {
        "code": "CUF",
        "country": "IT",
        "state": "",
        "name": "Levaldigi Airport"
    },
    {
        "code": "CUK",
        "country": "BZ",
        "state": "",
        "name": "Caye Caulker Airport"
    },
    {
        "code": "CUL",
        "country": "MX",
        "state": "",
        "name": "Federal de Bachigualato Airport"
    },
    {
        "code": "CUM",
        "country": "VE",
        "state": "",
        "name": "Antonio Jose de Sucre Airport"
    },
    {
        "code": "CUN",
        "country": "MX",
        "state": "",
        "name": "Cancun International Airport"
    },
    {
        "code": "CUQ",
        "country": "AU",
        "state": "QL",
        "name": "Coen Airport"
    },
    {
        "code": "CUR",
        "country": "CW",
        "state": "",
        "name": "Hato International Airport"
    },
    {
        "code": "CUU",
        "country": "MX",
        "state": "",
        "name": "R. Fierro Villalobos Airport"
    },
    {
        "code": "CUZ",
        "country": "PE",
        "state": "",
        "name": "Alejandro Velasco Astete International"
    },
    {
        "code": "CVG",
        "country": "US",
        "state": "OH",
        "name": "Northern Kentucky International Airport"
    },
    {
        "code": "CVM",
        "country": "MX",
        "state": "",
        "name": "Pedro Jose Mendez International Airport"
    },
    {
        "code": "CVN",
        "country": "US",
        "state": "NM",
        "name": "Clovis Municipal Airport"
    },
    {
        "code": "CVQ",
        "country": "AU",
        "state": "WA",
        "name": "Carnarvon Airport"
    },
    {
        "code": "CVT",
        "country": "GB",
        "state": "",
        "name": "Coventry Airport"
    },
    {
        "code": "CVU",
        "country": "PT",
        "state": "",
        "name": "Corvo Island Airport"
    },
    {
        "code": "CWA",
        "country": "US",
        "state": "WI",
        "name": "Central Wisconsin Airport"
    },
    {
        "code": "CWB",
        "country": "BR",
        "state": "PR",
        "name": "Afonso Pena International Airport"
    },
    {
        "code": "CWJ",
        "country": "CN",
        "state": "",
        "name": "Washan Airport"
    },
    {
        "code": "CWL",
        "country": "GB",
        "state": "",
        "name": "Cardiff Airport"
    },
    {
        "code": "CXB",
        "country": "BD",
        "state": "",
        "name": "Coxs Bazar Airport"
    },
    {
        "code": "CXH",
        "country": "CA",
        "state": "BC",
        "name": "Vancouver Harbour Sea Plane Base"
    },
    {
        "code": "CXI",
        "country": "KI",
        "state": "",
        "name": "Cassidy International Airport"
    },
    {
        "code": "CXJ",
        "country": "BR",
        "state": "RS",
        "name": "Hugo Cantergiani Airport"
    },
    {
        "code": "CXR",
        "country": "VN",
        "state": "",
        "name": "Cam Ranh International Airport"
    },
    {
        "code": "CXT",
        "country": "AU",
        "state": "QL",
        "name": "Charters Towers Airport"
    },
    {
        "code": "CXX",
        "country": "GB",
        "state": "",
        "name": "Carlisle Central Railway Station"
    },
    {
        "code": "CYA",
        "country": "HT",
        "state": "",
        "name": "Antoine-Simon Airport"
    },
    {
        "code": "CYB",
        "country": "KY",
        "state": "",
        "name": "Charles Kirkconnell International Airpo"
    },
    {
        "code": "CYF",
        "country": "US",
        "state": "AK",
        "name": "Chefornak Airport"
    },
    {
        "code": "CYI",
        "country": "TW",
        "state": "",
        "name": "Chiayi Airport"
    },
    {
        "code": "CYO",
        "country": "CU",
        "state": "",
        "name": "Vilo Acuna International Airport"
    },
    {
        "code": "CYP",
        "country": "PH",
        "state": "",
        "name": "Calbayog Airport"
    },
    {
        "code": "CYS",
        "country": "US",
        "state": "WY",
        "name": "Cheyenne Regional Airport"
    },
    {
        "code": "CYX",
        "country": "RU",
        "state": "",
        "name": "Chersky Airport"
    },
    {
        "code": "CYZ",
        "country": "PH",
        "state": "",
        "name": "Cauayan Airport"
    },
    {
        "code": "CZH",
        "country": "BZ",
        "state": "",
        "name": "Corozal Airport"
    },
    {
        "code": "CZL",
        "country": "DZ",
        "state": "",
        "name": "Mohamed Boudiaf Airport"
    },
    {
        "code": "CZM",
        "country": "MX",
        "state": "",
        "name": "Cozumel International Airport"
    },
    {
        "code": "CZN",
        "country": "US",
        "state": "AK",
        "name": "Chisana Airport"
    },
    {
        "code": "CZS",
        "country": "BR",
        "state": "AC",
        "name": "Cruzeiro do Sul International Airport"
    },
    {
        "code": "CZU",
        "country": "CO",
        "state": "",
        "name": "Las Brujas Airport"
    },
    {
        "code": "CZX",
        "country": "CN",
        "state": "",
        "name": "Benniu Airport"
    },
    {
        "code": "DAB",
        "country": "US",
        "state": "FL",
        "name": "Daytona Beach International Airport"
    },
    {
        "code": "DAC",
        "country": "BD",
        "state": "",
        "name": "Hazrat Shahjalal International"
    },
    {
        "code": "DAD",
        "country": "VN",
        "state": "",
        "name": "Da Nang International Airport"
    },
    {
        "code": "DAL",
        "country": "US",
        "state": "TX",
        "name": "Love Field"
    },
    {
        "code": "DAM",
        "country": "SY",
        "state": "",
        "name": "Damascus International Airport"
    },
    {
        "code": "DAR",
        "country": "TZ",
        "state": "",
        "name": "Julius Nyerere International Airport"
    },
    {
        "code": "DAT",
        "country": "CN",
        "state": "",
        "name": "Beijiazao Airport"
    },
    {
        "code": "DAU",
        "country": "PG",
        "state": "",
        "name": "Daru Airport"
    },
    {
        "code": "DAV",
        "country": "PA",
        "state": "",
        "name": "Enrique Malek International Airport"
    },
    {
        "code": "DAY",
        "country": "US",
        "state": "OH",
        "name": "James M. Cox International Airport"
    },
    {
        "code": "DBB",
        "country": "EG",
        "state": "",
        "name": "Al Alamain International"
    },
    {
        "code": "DBC",
        "country": "CN",
        "state": "",
        "name": "Chang'an Airport"
    },
    {
        "code": "DBO",
        "country": "AU",
        "state": "NS",
        "name": "Dubbo City Airport"
    },
    {
        "code": "DBQ",
        "country": "US",
        "state": "IA",
        "name": "Dubuque Regional Airport"
    },
    {
        "code": "DBR",
        "country": "IN",
        "state": "BR",
        "name": "Darbhanga Airport"
    },
    {
        "code": "DBV",
        "country": "HR",
        "state": "",
        "name": "Dubrovnik Airport"
    },
    {
        "code": "DCA",
        "country": "US",
        "state": "DC",
        "name": "Ronald Reagan National Airport"
    },
    {
        "code": "DCF",
        "country": "DM",
        "state": "",
        "name": "Canefield Airport"
    },
    {
        "code": "DCM",
        "country": "FR",
        "state": "",
        "name": "Mazamet Airport"
    },
    {
        "code": "DCY",
        "country": "CN",
        "state": "",
        "name": "Yading Airport"
    },
    {
        "code": "DDC",
        "country": "US",
        "state": "KS",
        "name": "Dodge City Regional Airport"
    },
    {
        "code": "DDD",
        "country": "MV",
        "state": "",
        "name": "Dhaalu Atoll Airport"
    },
    {
        "code": "DDG",
        "country": "CN",
        "state": "",
        "name": "Langtou Airport"
    },
    {
        "code": "DDR",
        "country": "CN",
        "state": "",
        "name": "Xigaze Dingri Airport"
    },
    {
        "code": "DEB",
        "country": "HU",
        "state": "",
        "name": "Debrecen Airport"
    },
    {
        "code": "DEC",
        "country": "US",
        "state": "IL",
        "name": "Decatur Airport"
    },
    {
        "code": "DED",
        "country": "IN",
        "state": "UT",
        "name": "Jolly Grant Airport"
    },
    {
        "code": "DEE",
        "country": "RU",
        "state": "",
        "name": "Mendeleyevo Airport"
    },
    {
        "code": "DEF",
        "country": "IR",
        "state": "",
        "name": "Dezful Airport"
    },
    {
        "code": "DEL",
        "country": "IN",
        "state": "DL",
        "name": "Indira Gandhi International Airport"
    },
    {
        "code": "DEM",
        "country": "ET",
        "state": "",
        "name": "Dembi Dolo Airport"
    },
    {
        "code": "DEN",
        "country": "US",
        "state": "CO",
        "name": "Denver International Airport"
    },
    {
        "code": "DEX",
        "country": "ID",
        "state": "",
        "name": "Nop Goliath Airport"
    },
    {
        "code": "DFW",
        "country": "US",
        "state": "TX",
        "name": "Dallas/Ft. Worth International Airport"
    },
    {
        "code": "DGA",
        "country": "BZ",
        "state": "",
        "name": "Dangriga Airport"
    },
    {
        "code": "DGE",
        "country": "AU",
        "state": "NS",
        "name": "Mudgee Airport"
    },
    {
        "code": "DGH",
        "country": "IN",
        "state": "JH",
        "name": "Deoghar International Airport"
    },
    {
        "code": "DGO",
        "country": "MX",
        "state": "",
        "name": "Guadalupe Victoria International Airpor"
    },
    {
        "code": "DGT",
        "country": "PH",
        "state": "",
        "name": "Sibulan Airport"
    },
    {
        "code": "DHC",
        "country": "DE",
        "state": "",
        "name": "Bremen HBF"
    },
    {
        "code": "DHG",
        "country": "RU",
        "state": "",
        "name": "Dalnegorsk Airport"
    },
    {
        "code": "DHI",
        "country": "NP",
        "state": "",
        "name": "Dhangarhi Airport"
    },
    {
        "code": "DHM",
        "country": "IN",
        "state": "HP",
        "name": "Kangra Airport"
    },
    {
        "code": "DHN",
        "country": "US",
        "state": "AL",
        "name": "Dothan Regional Airport"
    },
    {
        "code": "DIB",
        "country": "IN",
        "state": "AS",
        "name": "Mohanbari Airport"
    },
    {
        "code": "DIE",
        "country": "MG",
        "state": "",
        "name": "Arrachart Airport"
    },
    {
        "code": "DIG",
        "country": "CN",
        "state": "",
        "name": "Shangri-La Airport"
    },
    {
        "code": "DIK",
        "country": "US",
        "state": "ND",
        "name": "Theodore Roosevelt Regional Airport"
    },
    {
        "code": "DIL",
        "country": "TL",
        "state": "",
        "name": "Pres. Nicolau Lobato Airport"
    },
    {
        "code": "DIN",
        "country": "VN",
        "state": "",
        "name": "Dien Bien Phu Airport"
    },
    {
        "code": "DIR",
        "country": "ET",
        "state": "",
        "name": "Aba Tenna Dejazmach Yilma International"
    },
    {
        "code": "DIU",
        "country": "IN",
        "state": "DD",
        "name": "Diu Airport"
    },
    {
        "code": "DIY",
        "country": "TR",
        "state": "",
        "name": "Diyarbakir Airport"
    },
    {
        "code": "DJB",
        "country": "ID",
        "state": "",
        "name": "Sultan Thaha Airport"
    },
    {
        "code": "DJE",
        "country": "TN",
        "state": "",
        "name": "Zarzis Airport"
    },
    {
        "code": "DJG",
        "country": "DZ",
        "state": "",
        "name": "Tiska Airport"
    },
    {
        "code": "DJJ",
        "country": "ID",
        "state": "",
        "name": "Sentani Airport"
    },
    {
        "code": "DJN",
        "country": "US",
        "state": "AK",
        "name": "Delta Junction Airport"
    },
    {
        "code": "DKA",
        "country": "NG",
        "state": "",
        "name": "Katsina Airport"
    },
    {
        "code": "DKR",
        "country": "SN",
        "state": "",
        "name": "Leopold Sedar Senghor"
    },
    {
        "code": "DKS",
        "country": "RU",
        "state": "",
        "name": "Dikson Airport"
    },
    {
        "code": "DLA",
        "country": "CM",
        "state": "",
        "name": "Douala International Airport"
    },
    {
        "code": "DLC",
        "country": "CN",
        "state": "",
        "name": "Zhoushuizi International Airport"
    },
    {
        "code": "DLE",
        "country": "FR",
        "state": "",
        "name": "Tavaux Airport"
    },
    {
        "code": "DLG",
        "country": "US",
        "state": "AK",
        "name": "Dillingham Airport"
    },
    {
        "code": "DLH",
        "country": "US",
        "state": "MN",
        "name": "Duluth International Airport"
    },
    {
        "code": "DLI",
        "country": "VN",
        "state": "",
        "name": "Lien Khuong Airport"
    },
    {
        "code": "DLM",
        "country": "TR",
        "state": "",
        "name": "Dalaman Airport"
    },
    {
        "code": "DLU",
        "country": "CN",
        "state": "",
        "name": "Dali Airport"
    },
    {
        "code": "DLY",
        "country": "VU",
        "state": "",
        "name": "Dillon's Bay Airport"
    },
    {
        "code": "DLZ",
        "country": "MN",
        "state": "",
        "name": "Gurvan Saikhan Airport"
    },
    {
        "code": "DMB",
        "country": "KZ",
        "state": "",
        "name": "Taraz Airport"
    },
    {
        "code": "DMD",
        "country": "AU",
        "state": "QL",
        "name": "Doomadgee Airport"
    },
    {
        "code": "DME",
        "country": "RU",
        "state": "",
        "name": "Domodedovo Airport"
    },
    {
        "code": "DMK",
        "country": "TH",
        "state": "",
        "name": "Don Mueang International Airport"
    },
    {
        "code": "DMM",
        "country": "SA",
        "state": "",
        "name": "King Fahd International Airport"
    },
    {
        "code": "DMS",
        "country": "SA",
        "state": "",
        "name": "SABTCO Bus Station"
    },
    {
        "code": "DMU",
        "country": "IN",
        "state": "NL",
        "name": "Dimapur Airport"
    },
    {
        "code": "DND",
        "country": "GB",
        "state": "",
        "name": "Dundee Airport"
    },
    {
        "code": "DNH",
        "country": "CN",
        "state": "",
        "name": "Dunhuang Airport"
    },
    {
        "code": "DNZ",
        "country": "TR",
        "state": "",
        "name": "Cardak Airport"
    },
    {
        "code": "DOB",
        "country": "ID",
        "state": "",
        "name": "Rar Gwamar Airport"
    },
    {
        "code": "DOD",
        "country": "TZ",
        "state": "",
        "name": "Dodoma Airport"
    },
    {
        "code": "DOH",
        "country": "QA",
        "state": "",
        "name": "Hamad International Airport"
    },
    {
        "code": "DOL",
        "country": "FR",
        "state": "",
        "name": "Saint Gatien Airport"
    },
    {
        "code": "DOM",
        "country": "DM",
        "state": "",
        "name": "Melville Hall Airport"
    },
    {
        "code": "DOY",
        "country": "CN",
        "state": "",
        "name": "Shengli Airport"
    },
    {
        "code": "DPB",
        "country": "CL",
        "state": "",
        "name": "Pampa Guanaco Airport"
    },
    {
        "code": "DPL",
        "country": "PH",
        "state": "",
        "name": "Dipolog Airport"
    },
    {
        "code": "DPO",
        "country": "AU",
        "state": "TS",
        "name": "Devonport Airport"
    },
    {
        "code": "DPS",
        "country": "ID",
        "state": "",
        "name": "Ngurah Rai Airport"
    },
    {
        "code": "DPT",
        "country": "RU",
        "state": "",
        "name": "Deputatsky Airport"
    },
    {
        "code": "DQA",
        "country": "CN",
        "state": "",
        "name": "Sartu Airport"
    },
    {
        "code": "DQM",
        "country": "OM",
        "state": "",
        "name": "Duqm International Airport"
    },
    {
        "code": "DRB",
        "country": "AU",
        "state": "WA",
        "name": "Derby Airport"
    },
    {
        "code": "DRG",
        "country": "US",
        "state": "AK",
        "name": "Deering Airport"
    },
    {
        "code": "DRK",
        "country": "CR",
        "state": "",
        "name": "Drake Bay Airport"
    },
    {
        "code": "DRO",
        "country": "US",
        "state": "CO",
        "name": "La Plata County Airport"
    },
    {
        "code": "DRP",
        "country": "PH",
        "state": "",
        "name": "Legazpi, PH Airport"
    },
    {
        "code": "DRS",
        "country": "DE",
        "state": "",
        "name": "Dresden Airport"
    },
    {
        "code": "DRV",
        "country": "MV",
        "state": "",
        "name": "Dharavandhoo Island Airport"
    },
    {
        "code": "DRW",
        "country": "AU",
        "state": "NT",
        "name": "Darwin International Airport"
    },
    {
        "code": "DSA",
        "country": "GB",
        "state": "",
        "name": "Robin Hood Airport"
    },
    {
        "code": "DSE",
        "country": "ET",
        "state": "",
        "name": "Kombolcha Airport"
    },
    {
        "code": "DSI",
        "country": "US",
        "state": "FL",
        "name": "Destin Executive Airport"
    },
    {
        "code": "DSM",
        "country": "US",
        "state": "IA",
        "name": "Des Moines International Airport"
    },
    {
        "code": "DSN",
        "country": "CN",
        "state": "",
        "name": "Ejin Horo Airport"
    },
    {
        "code": "DSS",
        "country": "SN",
        "state": "",
        "name": "Blaise Diagne International Airport"
    },
    {
        "code": "DTB",
        "country": "ID",
        "state": "",
        "name": "Silangit Airport"
    },
    {
        "code": "DTM",
        "country": "DE",
        "state": "",
        "name": "Dortmund Airport"
    },
    {
        "code": "DTU",
        "country": "CN",
        "state": "",
        "name": "Dedu Airport"
    },
    {
        "code": "DTW",
        "country": "US",
        "state": "MI",
        "name": "Metropolitan Wayne County Airport"
    },
    {
        "code": "DTZ",
        "country": "DE",
        "state": "",
        "name": "Dortmund Hbf Railway Station"
    },
    {
        "code": "DUB",
        "country": "IE",
        "state": "",
        "name": "Dublin International Airport"
    },
    {
        "code": "DUD",
        "country": "NZ",
        "state": "",
        "name": "Dunedin International Airport"
    },
    {
        "code": "DUE",
        "country": "AO",
        "state": "",
        "name": "Dundo Airport"
    },
    {
        "code": "DUJ",
        "country": "US",
        "state": "PA",
        "name": "DuBois Regional Airport"
    },
    {
        "code": "DUR",
        "country": "ZA",
        "state": "",
        "name": "King Shaka International Airport"
    },
    {
        "code": "DUS",
        "country": "DE",
        "state": "",
        "name": "Duesseldorf International"
    },
    {
        "code": "DUT",
        "country": "US",
        "state": "AK",
        "name": "Driftwood Bay Air Force Station"
    },
    {
        "code": "DVL",
        "country": "US",
        "state": "ND",
        "name": "Devils Lake Regional Airport"
    },
    {
        "code": "DVO",
        "country": "PH",
        "state": "",
        "name": "Francisco Bangoy International Airport"
    },
    {
        "code": "DWC",
        "country": "AE",
        "state": "",
        "name": "Al Maktoum International"
    },
    {
        "code": "DWD",
        "country": "SA",
        "state": "",
        "name": "ALDAWADMI AIRPORT"
    },
    {
        "code": "DXB",
        "country": "AE",
        "state": "",
        "name": "Dubai International Airport"
    },
    {
        "code": "DXJ",
        "country": "CN",
        "state": "",
        "name": "Xiangxi Biancheng Airport"
    },
    {
        "code": "DYG",
        "country": "CN",
        "state": "",
        "name": "Hehua Airport"
    },
    {
        "code": "DYR",
        "country": "RU",
        "state": "",
        "name": "Ugolny Airport"
    },
    {
        "code": "DYU",
        "country": "TJ",
        "state": "",
        "name": "Dushanbe International Airport"
    },
    {
        "code": "DZA",
        "country": "YT",
        "state": "",
        "name": "Pamandzi International Airport"
    },
    {
        "code": "DZH",
        "country": "CN",
        "state": "",
        "name": "Dazhou Jinya"
    },
    {
        "code": "DZN",
        "country": "KZ",
        "state": "",
        "name": "Zhezkazgan Airport"
    },
    {
        "code": "EAA",
        "country": "US",
        "state": "AK",
        "name": "Eagle Airport"
    },
    {
        "code": "EAM",
        "country": "SA",
        "state": "",
        "name": "Nejran Airport"
    },
    {
        "code": "EAR",
        "country": "US",
        "state": "NE",
        "name": "Kearney Regional Airport"
    },
    {
        "code": "EAS",
        "country": "ES",
        "state": "",
        "name": "San Sebastian Airport"
    },
    {
        "code": "EAT",
        "country": "US",
        "state": "WA",
        "name": "Pangborn Memorial Airport"
    },
    {
        "code": "EAU",
        "country": "US",
        "state": "WI",
        "name": "Chippewa Valley Regional Airport"
    },
    {
        "code": "EBB",
        "country": "UG",
        "state": "",
        "name": "Entebbe International Airport"
    },
    {
        "code": "EBG",
        "country": "CO",
        "state": "",
        "name": "El Bagre Airport"
    },
    {
        "code": "EBH",
        "country": "DZ",
        "state": "",
        "name": "El Bayadh Airport"
    },
    {
        "code": "EBJ",
        "country": "DK",
        "state": "",
        "name": "Esbjerg Airport"
    },
    {
        "code": "EBL",
        "country": "IQ",
        "state": "",
        "name": "Erbil International Airport"
    },
    {
        "code": "EBV",
        "country": "FR",
        "state": "",
        "name": "Saint Etienne Bus Station"
    },
    {
        "code": "ECN",
        "country": "CY",
        "state": "",
        "name": "Ercan Airport"
    },
    {
        "code": "ECP",
        "country": "US",
        "state": "FL",
        "name": "NW Florida Beaches International Airpor"
    },
    {
        "code": "EDI",
        "country": "GB",
        "state": "",
        "name": "Edinburgh Airport"
    },
    {
        "code": "EDL",
        "country": "KE",
        "state": "",
        "name": "Eldoret International Airport"
    },
    {
        "code": "EDN",
        "country": "RU",
        "state": "",
        "name": "Yedinka Airport"
    },
    {
        "code": "EDO",
        "country": "TR",
        "state": "",
        "name": "Koca Seyit Airport"
    },
    {
        "code": "EDR",
        "country": "AU",
        "state": "QL",
        "name": "Pormpuraaw Airport"
    },
    {
        "code": "EEA",
        "country": "BR",
        "state": "SC",
        "name": "Reg do Planalto Serano"
    },
    {
        "code": "EEK",
        "country": "US",
        "state": "AK",
        "name": "Eek Airport"
    },
    {
        "code": "EEM",
        "country": "ES",
        "state": "",
        "name": "Albacete Railway Station"
    },
    {
        "code": "EEP",
        "country": "ES",
        "state": "",
        "name": "Pamplona Railway Station"
    },
    {
        "code": "EEU",
        "country": "ES",
        "state": "",
        "name": "Leon Railway Station"
    },
    {
        "code": "EFL",
        "country": "GR",
        "state": "",
        "name": "Kefallinia Airport"
    },
    {
        "code": "EGC",
        "country": "FR",
        "state": "",
        "name": "Roumaniere Airport"
    },
    {
        "code": "EGE",
        "country": "US",
        "state": "CO",
        "name": "Eagle County Regional Airport"
    },
    {
        "code": "EGM",
        "country": "SB",
        "state": "",
        "name": "Seghe Airport"
    },
    {
        "code": "EGN",
        "country": "SD",
        "state": "",
        "name": "Geneina Airport"
    },
    {
        "code": "EGO",
        "country": "RU",
        "state": "",
        "name": "Belgorod Airport"
    },
    {
        "code": "EGS",
        "country": "IS",
        "state": "",
        "name": "Egilsstadir Airport"
    },
    {
        "code": "EHU",
        "country": "CN",
        "state": "",
        "name": "Ezhou Huahu Airport"
    },
    {
        "code": "EIN",
        "country": "NL",
        "state": "",
        "name": "Eindhoven Airport"
    },
    {
        "code": "EIS",
        "country": "VG",
        "state": "",
        "name": "Terrance B. Lettsome Airport"
    },
    {
        "code": "EJA",
        "country": "CO",
        "state": "",
        "name": "Yariguies Airport"
    },
    {
        "code": "EKO",
        "country": "US",
        "state": "NV",
        "name": "Elko Regional Airport"
    },
    {
        "code": "EKS",
        "country": "RU",
        "state": "",
        "name": "Shakhtersk Airport"
    },
    {
        "code": "ELC",
        "country": "AU",
        "state": "NT",
        "name": "Elcho Island Airport"
    },
    {
        "code": "ELD",
        "country": "US",
        "state": "AR",
        "name": "South Arkansas Regional Airport"
    },
    {
        "code": "ELG",
        "country": "DZ",
        "state": "",
        "name": "El Golea Airport"
    },
    {
        "code": "ELH",
        "country": "BS",
        "state": "",
        "name": "North Eleuthera Airport"
    },
    {
        "code": "ELI",
        "country": "US",
        "state": "AK",
        "name": "Elim Airport"
    },
    {
        "code": "ELM",
        "country": "US",
        "state": "NY",
        "name": "Elmira/Corning Regional Airport"
    },
    {
        "code": "ELP",
        "country": "US",
        "state": "TX",
        "name": "El Paso International Airport"
    },
    {
        "code": "ELQ",
        "country": "SA",
        "state": "",
        "name": "Gassim Airport"
    },
    {
        "code": "ELS",
        "country": "ZA",
        "state": "",
        "name": "East London Airport"
    },
    {
        "code": "ELU",
        "country": "DZ",
        "state": "",
        "name": "Guemar Airport"
    },
    {
        "code": "ELV",
        "country": "US",
        "state": "AK",
        "name": "Elfin Cove Sea Plane Base"
    },
    {
        "code": "EMA",
        "country": "GB",
        "state": "",
        "name": "East Midlands Airport"
    },
    {
        "code": "EMD",
        "country": "AU",
        "state": "QL",
        "name": "Emerald Airport"
    },
    {
        "code": "EMK",
        "country": "US",
        "state": "AK",
        "name": "Emmonak Airport"
    },
    {
        "code": "EMN",
        "country": "MR",
        "state": "",
        "name": "Nema Airport"
    },
    {
        "code": "ENA",
        "country": "US",
        "state": "AK",
        "name": "Kenai Municipal Airport"
    },
    {
        "code": "ENE",
        "country": "ID",
        "state": "",
        "name": "H.Hasan Aroeboesman Airport"
    },
    {
        "code": "ENH",
        "country": "CN",
        "state": "",
        "name": "Xujiaping Airport"
    },
    {
        "code": "ENI",
        "country": "PH",
        "state": "",
        "name": "El Nido Airport"
    },
    {
        "code": "ENU",
        "country": "NG",
        "state": "",
        "name": "Akanu Ibiam International Airport"
    },
    {
        "code": "ENY",
        "country": "CN",
        "state": "",
        "name": "Nanniwan Airport"
    },
    {
        "code": "EOH",
        "country": "CO",
        "state": "",
        "name": "Enrique Olaya Herrera Airport"
    },
    {
        "code": "EPR",
        "country": "AU",
        "state": "WA",
        "name": "Esperance Airport"
    },
    {
        "code": "EQS",
        "country": "AR",
        "state": "CB",
        "name": "Esquel Airport"
    },
    {
        "code": "ERC",
        "country": "TR",
        "state": "",
        "name": "Erzincan Airport"
    },
    {
        "code": "ERF",
        "country": "DE",
        "state": "",
        "name": "Erfurt-Weimar Airport"
    },
    {
        "code": "ERG",
        "country": "RU",
        "state": "",
        "name": "Yerbogachen Airport"
    },
    {
        "code": "ERH",
        "country": "MA",
        "state": "",
        "name": "Moulay Ali Cherif Airport"
    },
    {
        "code": "ERI",
        "country": "US",
        "state": "PA",
        "name": "Erie International Airport"
    },
    {
        "code": "ERL",
        "country": "CN",
        "state": "",
        "name": "Saiwusu International Airport"
    },
    {
        "code": "ERN",
        "country": "BR",
        "state": "AM",
        "name": "Amaury Feitosa Tomaz Airport"
    },
    {
        "code": "ERS",
        "country": "NA",
        "state": "",
        "name": "Eros Airport"
    },
    {
        "code": "ERZ",
        "country": "TR",
        "state": "",
        "name": "Erzurum Airport"
    },
    {
        "code": "ESB",
        "country": "TR",
        "state": "",
        "name": "Esenboga Airport"
    },
    {
        "code": "ESC",
        "country": "US",
        "state": "MI",
        "name": "Delta County Airport"
    },
    {
        "code": "ESD",
        "country": "US",
        "state": "WA",
        "name": "Orcas Island Airport"
    },
    {
        "code": "ESU",
        "country": "MA",
        "state": "",
        "name": "Mogador Airport"
    },
    {
        "code": "ESZ",
        "country": "DE",
        "state": "",
        "name": "Essen Hbf Railway Station"
    },
    {
        "code": "ETL",
        "country": "RU",
        "state": "",
        "name": "Svetlaya Airport"
    },
    {
        "code": "ETR",
        "country": "EC",
        "state": "",
        "name": "Santa Rosa International Airport"
    },
    {
        "code": "ETZ",
        "country": "FR",
        "state": "",
        "name": "Lorraine Airport"
    },
    {
        "code": "EUA",
        "country": "TO",
        "state": "",
        "name": "Kaufana Airport"
    },
    {
        "code": "EUG",
        "country": "US",
        "state": "OR",
        "name": "Mahlon Sweet Field"
    },
    {
        "code": "EUN",
        "country": "MA",
        "state": "",
        "name": "Hassan I Airport"
    },
    {
        "code": "EUQ",
        "country": "PH",
        "state": "",
        "name": "Evelio Javier Airport"
    },
    {
        "code": "EUX",
        "country": "BQ",
        "state": "",
        "name": "F.D. Roosevelt Airport"
    },
    {
        "code": "EVE",
        "country": "NO",
        "state": "",
        "name": "Evenes Airport"
    },
    {
        "code": "EVN",
        "country": "AM",
        "state": "",
        "name": "Zvartnots International Airport"
    },
    {
        "code": "EVV",
        "country": "US",
        "state": "IN",
        "name": "Evansville Regional Airport"
    },
    {
        "code": "EWB",
        "country": "US",
        "state": "MA",
        "name": "New Bedford Regional Airport"
    },
    {
        "code": "EWE",
        "country": "ID",
        "state": "",
        "name": "Ewer Airport"
    },
    {
        "code": "EWN",
        "country": "US",
        "state": "NC",
        "name": "Coastal Carolina Regional Airport"
    },
    {
        "code": "EWR",
        "country": "US",
        "state": "NY",
        "name": "Newark Liberty International Airport"
    },
    {
        "code": "EXS",
        "country": "GB",
        "state": "",
        "name": "Saint Thomas Railway Station"
    },
    {
        "code": "EXT",
        "country": "GB",
        "state": "",
        "name": "Exeter Airport"
    },
    {
        "code": "EYA",
        "country": "RU",
        "state": "",
        "name": "Zeya Airport"
    },
    {
        "code": "EYK",
        "country": "RU",
        "state": "",
        "name": "Beloyarsky Airport"
    },
    {
        "code": "EYP",
        "country": "CO",
        "state": "",
        "name": "El Alcaravan Airport"
    },
    {
        "code": "EYW",
        "country": "US",
        "state": "FL",
        "name": "Key West International Airport"
    },
    {
        "code": "EZE",
        "country": "AR",
        "state": "BA",
        "name": "Ministro Pistarini Airport"
    },
    {
        "code": "EZS",
        "country": "TR",
        "state": "",
        "name": "Elazig Airport"
    },
    {
        "code": "EZV",
        "country": "RU",
        "state": "",
        "name": "Berezovo Airport"
    },
    {
        "code": "FAC",
        "country": "PF",
        "state": "",
        "name": "Faaite Airport"
    },
    {
        "code": "FAE",
        "country": "FO",
        "state": "",
        "name": "Vagar Airport"
    },
    {
        "code": "FAI",
        "country": "US",
        "state": "AK",
        "name": "Fairbanks International Airport"
    },
    {
        "code": "FAO",
        "country": "PT",
        "state": "",
        "name": "Faro Airport"
    },
    {
        "code": "FAR",
        "country": "US",
        "state": "ND",
        "name": "Hector International Airport"
    },
    {
        "code": "FAT",
        "country": "US",
        "state": "CA",
        "name": "Fresno Yosemite International"
    },
    {
        "code": "FAV",
        "country": "PF",
        "state": "",
        "name": "Fakarava Airport"
    },
    {
        "code": "FAY",
        "country": "US",
        "state": "NC",
        "name": "Regional (Grannis Field) Airport"
    },
    {
        "code": "FBM",
        "country": "CD",
        "state": "",
        "name": "Luano International Airport"
    },
    {
        "code": "FCA",
        "country": "US",
        "state": "MT",
        "name": "Glacier Park International Airport"
    },
    {
        "code": "FCO",
        "country": "IT",
        "state": "",
        "name": "Fiumicino Airport"
    },
    {
        "code": "FDE",
        "country": "NO",
        "state": "",
        "name": "Bringeland Airport"
    },
    {
        "code": "FDF",
        "country": "MQ",
        "state": "",
        "name": "Martinique A. Cesaire Airport"
    },
    {
        "code": "FDH",
        "country": "DE",
        "state": "",
        "name": "Friedrichshafen Airport"
    },
    {
        "code": "FEC",
        "country": "BR",
        "state": "BA",
        "name": "Joao Durval Carneiro Airport"
    },
    {
        "code": "FEG",
        "country": "UZ",
        "state": "",
        "name": "Fergana International Airport"
    },
    {
        "code": "FEN",
        "country": "BR",
        "state": "PE",
        "name": "Fernando de Noronha Airport"
    },
    {
        "code": "FEZ",
        "country": "MA",
        "state": "",
        "name": "Saiss Airport"
    },
    {
        "code": "FGU",
        "country": "PF",
        "state": "",
        "name": "Fangatau Airport"
    },
    {
        "code": "FHZ",
        "country": "PF",
        "state": "",
        "name": "Fakahina Airport"
    },
    {
        "code": "FIE",
        "country": "GB",
        "state": "",
        "name": "Fair Isle Airport"
    },
    {
        "code": "FIH",
        "country": "CD",
        "state": "",
        "name": "N'djili International Airport"
    },
    {
        "code": "FIR",
        "country": "IT",
        "state": "",
        "name": "Campo Marte Railway Station"
    },
    {
        "code": "FIZ",
        "country": "AU",
        "state": "WA",
        "name": "Fitzroy Crossing Airport"
    },
    {
        "code": "FJR",
        "country": "AE",
        "state": "",
        "name": "Fujairah International Airport"
    },
    {
        "code": "FKB",
        "country": "DE",
        "state": "",
        "name": "Baden Airpark"
    },
    {
        "code": "FKI",
        "country": "CD",
        "state": "",
        "name": "Bangoka International Airport"
    },
    {
        "code": "FKQ",
        "country": "ID",
        "state": "",
        "name": "Torea Airport"
    },
    {
        "code": "FKS",
        "country": "JP",
        "state": "",
        "name": "Fukushima Airport"
    },
    {
        "code": "FLA",
        "country": "CO",
        "state": "",
        "name": "Gustavo A. Paredes Airport"
    },
    {
        "code": "FLG",
        "country": "US",
        "state": "AZ",
        "name": "Flagstaff Pulliam Airport"
    },
    {
        "code": "FLL",
        "country": "US",
        "state": "FL",
        "name": "Fort Lauderdale International Airport"
    },
    {
        "code": "FLN",
        "country": "BR",
        "state": "SC",
        "name": "Hercilio Luz International Airport"
    },
    {
        "code": "FLO",
        "country": "US",
        "state": "SC",
        "name": "Florence Regional Airport"
    },
    {
        "code": "FLR",
        "country": "IT",
        "state": "",
        "name": "Peretola Airport"
    },
    {
        "code": "FLS",
        "country": "AU",
        "state": "TS",
        "name": "Flinders Island Airport"
    },
    {
        "code": "FLW",
        "country": "PT",
        "state": "",
        "name": "Flores Island Airport"
    },
    {
        "code": "FLZ",
        "country": "ID",
        "state": "",
        "name": "Ferdinand LumbanTobing Airport"
    },
    {
        "code": "FMA",
        "country": "AR",
        "state": "FO",
        "name": "Formosa Airport"
    },
    {
        "code": "FMI",
        "country": "CD",
        "state": "",
        "name": "Kalemie Airport"
    },
    {
        "code": "FMM",
        "country": "DE",
        "state": "",
        "name": "Allgaeu Airport"
    },
    {
        "code": "FMO",
        "country": "DE",
        "state": "",
        "name": "Muenster/Osnabrueck Airport"
    },
    {
        "code": "FMT",
        "country": "MV",
        "state": "",
        "name": "Faresmathoda Airport"
    },
    {
        "code": "FNA",
        "country": "SL",
        "state": "",
        "name": "Lungi International Airport"
    },
    {
        "code": "FNC",
        "country": "PT",
        "state": "",
        "name": "Madeira Airport"
    },
    {
        "code": "FND",
        "country": "MV",
        "state": "",
        "name": "Funadhoo Station"
    },
    {
        "code": "FNI",
        "country": "FR",
        "state": "",
        "name": "Garons Airport"
    },
    {
        "code": "FNL",
        "country": "US",
        "state": "CO",
        "name": "Fort Collins/Loveland Municipal Airport"
    },
    {
        "code": "FNT",
        "country": "US",
        "state": "MI",
        "name": "Bishop International Airport"
    },
    {
        "code": "FOA",
        "country": "GB",
        "state": "",
        "name": "Foula Airport"
    },
    {
        "code": "FOC",
        "country": "CN",
        "state": "",
        "name": "Changle International Airport"
    },
    {
        "code": "FOD",
        "country": "US",
        "state": "IA",
        "name": "Fort Dodge Regional Airport"
    },
    {
        "code": "FOG",
        "country": "IT",
        "state": "",
        "name": "Gino Lisa Airport"
    },
    {
        "code": "FOI",
        "country": "IT",
        "state": "",
        "name": "Foggia Railway Station"
    },
    {
        "code": "FON",
        "country": "CR",
        "state": "",
        "name": "Arenal Airport"
    },
    {
        "code": "FOR",
        "country": "BR",
        "state": "CE",
        "name": "Pinto Martins International Airport"
    },
    {
        "code": "FPO",
        "country": "BS",
        "state": "",
        "name": "Grand Bahama International Airport"
    },
    {
        "code": "FRA",
        "country": "DE",
        "state": "",
        "name": "Frankfurt International Airport"
    },
    {
        "code": "FRD",
        "country": "US",
        "state": "WA",
        "name": "Friday Harbor Airport"
    },
    {
        "code": "FRE",
        "country": "SB",
        "state": "",
        "name": "Fera Island Airport"
    },
    {
        "code": "FRL",
        "country": "IT",
        "state": "",
        "name": "Luigi Ridolfi Airport"
    },
    {
        "code": "FRO",
        "country": "NO",
        "state": "",
        "name": "Floro Airport"
    },
    {
        "code": "FRS",
        "country": "GT",
        "state": "",
        "name": "Mundo Maya International Airport"
    },
    {
        "code": "FRU",
        "country": "KG",
        "state": "",
        "name": "Manas International Airport"
    },
    {
        "code": "FRW",
        "country": "BW",
        "state": "",
        "name": "Francistown Airport"
    },
    {
        "code": "FSC",
        "country": "FR",
        "state": "",
        "name": "Sud-Corse Airport"
    },
    {
        "code": "FSD",
        "country": "US",
        "state": "SD",
        "name": "Joe Foss Field"
    },
    {
        "code": "FSM",
        "country": "US",
        "state": "AR",
        "name": "Fort Smith Regional Airport"
    },
    {
        "code": "FSP",
        "country": "PM",
        "state": "",
        "name": "Saint Pierre Airport"
    },
    {
        "code": "FSZ",
        "country": "JP",
        "state": "",
        "name": "Mount Fuji Airport"
    },
    {
        "code": "FTA",
        "country": "VU",
        "state": "",
        "name": "Futuna Island Airport"
    },
    {
        "code": "FTE",
        "country": "AR",
        "state": "SC",
        "name": "Comandante A. Tola Airport"
    },
    {
        "code": "FTU",
        "country": "MG",
        "state": "",
        "name": "Marillac Airport"
    },
    {
        "code": "FUE",
        "country": "ES",
        "state": "",
        "name": "Fuerteventura Airport"
    },
    {
        "code": "FUG",
        "country": "CN",
        "state": "",
        "name": "Xiguan Airport"
    },
    {
        "code": "FUJ",
        "country": "JP",
        "state": "",
        "name": "Goto-Fukue Airport"
    },
    {
        "code": "FUK",
        "country": "JP",
        "state": "",
        "name": "Fukuoka Airport"
    },
    {
        "code": "FUN",
        "country": "TV",
        "state": "",
        "name": "Funafuti International Airport"
    },
    {
        "code": "FUO",
        "country": "CN",
        "state": "",
        "name": "Shadi Airport"
    },
    {
        "code": "FVM",
        "country": "MV",
        "state": "",
        "name": "Fuvahmulak Island Airport"
    },
    {
        "code": "FWA",
        "country": "US",
        "state": "IN",
        "name": "Fort Wayne International Airport"
    },
    {
        "code": "FYG",
        "country": "CN",
        "state": "",
        "name": "Fuyong Ferry Port"
    },
    {
        "code": "FYJ",
        "country": "CN",
        "state": "",
        "name": "Fuyuan Airport"
    },
    {
        "code": "FYN",
        "country": "CN",
        "state": "",
        "name": "Fuyun Airport"
    },
    {
        "code": "FYU",
        "country": "US",
        "state": "AK",
        "name": "Fort Yukon Airport"
    },
    {
        "code": "GAE",
        "country": "TN",
        "state": "",
        "name": "Matmata Airport"
    },
    {
        "code": "GAJ",
        "country": "JP",
        "state": "",
        "name": "Yamagata Airport"
    },
    {
        "code": "GAL",
        "country": "US",
        "state": "AK",
        "name": "Edward G. Pitka Sr. Airport"
    },
    {
        "code": "GAM",
        "country": "US",
        "state": "AK",
        "name": "Gambell Airport"
    },
    {
        "code": "GAN",
        "country": "MV",
        "state": "",
        "name": "Gan Island International Airport"
    },
    {
        "code": "GAO",
        "country": "CU",
        "state": "",
        "name": "Mariana Grajales Airport"
    },
    {
        "code": "GAU",
        "country": "IN",
        "state": "AS",
        "name": "Gopinath Bordoloi International Airport"
    },
    {
        "code": "GAX",
        "country": "GA",
        "state": "",
        "name": "Yenzi Airport"
    },
    {
        "code": "GAY",
        "country": "IN",
        "state": "BR",
        "name": "Gaya Airport"
    },
    {
        "code": "GBE",
        "country": "BW",
        "state": "",
        "name": "Sir Seretse Khama International Airport"
    },
    {
        "code": "GBI",
        "country": "IN",
        "state": "KA",
        "name": "Kalaburagi Airport"
    },
    {
        "code": "GBJ",
        "country": "GP",
        "state": "",
        "name": "Marie-Galante Airport"
    },
    {
        "code": "GBT",
        "country": "IR",
        "state": "",
        "name": "Gorgan Airport"
    },
    {
        "code": "GCC",
        "country": "US",
        "state": "WY",
        "name": "Campbell County Airport"
    },
    {
        "code": "GCH",
        "country": "IR",
        "state": "",
        "name": "Gachsaran Airport"
    },
    {
        "code": "GCI",
        "country": "GG",
        "state": "",
        "name": "Guernsey Airport"
    },
    {
        "code": "GCK",
        "country": "US",
        "state": "KS",
        "name": "Garden City Regional Airport"
    },
    {
        "code": "GCM",
        "country": "KY",
        "state": "",
        "name": "Owen Roberts International Airport"
    },
    {
        "code": "GCN",
        "country": "US",
        "state": "AZ",
        "name": "Grand Canyon National Park Airport"
    },
    {
        "code": "GCW",
        "country": "US",
        "state": "AZ",
        "name": "Grand Canyon West Airport"
    },
    {
        "code": "GDB",
        "country": "IN",
        "state": "MH",
        "name": "Birsi Airport"
    },
    {
        "code": "GDE",
        "country": "ET",
        "state": "",
        "name": "Gode Airport"
    },
    {
        "code": "GDL",
        "country": "MX",
        "state": "",
        "name": "Miguel Hidalgo International Airport"
    },
    {
        "code": "GDN",
        "country": "PL",
        "state": "",
        "name": "Lech Walesa Airport"
    },
    {
        "code": "GDQ",
        "country": "ET",
        "state": "",
        "name": "Azezo Airport"
    },
    {
        "code": "GDT",
        "country": "TC",
        "state": "",
        "name": "J.A.G.S. McCartney International Airpor"
    },
    {
        "code": "GDV",
        "country": "US",
        "state": "MT",
        "name": "Dawson Community Airport"
    },
    {
        "code": "GDX",
        "country": "RU",
        "state": "",
        "name": "Sokol Airport"
    },
    {
        "code": "GDZ",
        "country": "RU",
        "state": "",
        "name": "Gelendzhik Airport"
    },
    {
        "code": "GEA",
        "country": "NC",
        "state": "",
        "name": "Magenta Airport"
    },
    {
        "code": "GEG",
        "country": "US",
        "state": "WA",
        "name": "Spokane International Airport"
    },
    {
        "code": "GEL",
        "country": "BR",
        "state": "RS",
        "name": "Sepe Tiaraju Airport"
    },
    {
        "code": "GEM",
        "country": "GQ",
        "state": "",
        "name": "Mongomeyen Airport"
    },
    {
        "code": "GEO",
        "country": "GY",
        "state": "",
        "name": "Cheddi Jagan International Airport"
    },
    {
        "code": "GEP",
        "country": "IT",
        "state": "",
        "name": "Brignole Railway Station"
    },
    {
        "code": "GER",
        "country": "CU",
        "state": "",
        "name": "Rafael Cabrera Airport"
    },
    {
        "code": "GES",
        "country": "PH",
        "state": "",
        "name": "General Santos International Airport"
    },
    {
        "code": "GET",
        "country": "AU",
        "state": "WA",
        "name": "Geraldton Airport"
    },
    {
        "code": "GEV",
        "country": "SE",
        "state": "",
        "name": "Gallivare Airport"
    },
    {
        "code": "GFF",
        "country": "AU",
        "state": "NS",
        "name": "Griffith Airport"
    },
    {
        "code": "GFK",
        "country": "US",
        "state": "ND",
        "name": "Grand Forks International Airport"
    },
    {
        "code": "GGA",
        "country": "ES",
        "state": "",
        "name": "La Graciosa Ferry Port"
    },
    {
        "code": "GGF",
        "country": "BR",
        "state": "PA",
        "name": "Almeirim Airport"
    },
    {
        "code": "GGG",
        "country": "US",
        "state": "TX",
        "name": "East Texas Regional Airport"
    },
    {
        "code": "GGJ",
        "country": "BR",
        "state": "PR",
        "name": "Guaira Airport"
    },
    {
        "code": "GGM",
        "country": "KE",
        "state": "",
        "name": "Kakamega Airport"
    },
    {
        "code": "GGR",
        "country": "SO",
        "state": "",
        "name": "Garowe Airport"
    },
    {
        "code": "GGT",
        "country": "BS",
        "state": "",
        "name": "Exuma International Airport"
    },
    {
        "code": "GGW",
        "country": "US",
        "state": "MT",
        "name": "Glasgow International Airport"
    },
    {
        "code": "GGZ",
        "country": "AT",
        "state": "",
        "name": "Graz Railway Station"
    },
    {
        "code": "GHA",
        "country": "DZ",
        "state": "",
        "name": "Noumerat Airport"
    },
    {
        "code": "GHB",
        "country": "BS",
        "state": "",
        "name": "Governor's Harbour Airport"
    },
    {
        "code": "GHS",
        "country": "ID",
        "state": "",
        "name": "Melalan Airport"
    },
    {
        "code": "GHT",
        "country": "LY",
        "state": "",
        "name": "Ghat Airport"
    },
    {
        "code": "GHV",
        "country": "RO",
        "state": "",
        "name": "Ghimbav Brasov Airport"
    },
    {
        "code": "GIB",
        "country": "GI",
        "state": "",
        "name": "Gibraltar Airport"
    },
    {
        "code": "GIC",
        "country": "AU",
        "state": "QL",
        "name": "Boigu Island Airport"
    },
    {
        "code": "GIG",
        "country": "BR",
        "state": "RJ",
        "name": "Galeao-A.C. Jobim International Airport"
    },
    {
        "code": "GIL",
        "country": "PK",
        "state": "",
        "name": "Gilgit Airport"
    },
    {
        "code": "GIS",
        "country": "NZ",
        "state": "",
        "name": "Gisborne Airport"
    },
    {
        "code": "GIT",
        "country": "TZ",
        "state": "",
        "name": "Geita Airport"
    },
    {
        "code": "GIZ",
        "country": "SA",
        "state": "",
        "name": "Gizan Airport"
    },
    {
        "code": "GJA",
        "country": "HN",
        "state": "",
        "name": "Guanaja Airport"
    },
    {
        "code": "GJL",
        "country": "DZ",
        "state": "",
        "name": "Ferhat Abbas Airport"
    },
    {
        "code": "GJR",
        "country": "IS",
        "state": "",
        "name": "Gjogur Airport"
    },
    {
        "code": "GJT",
        "country": "US",
        "state": "CO",
        "name": "Grand Junction Regional Airport"
    },
    {
        "code": "GKA",
        "country": "PG",
        "state": "",
        "name": "Goroka Airport"
    },
    {
        "code": "GKK",
        "country": "MV",
        "state": "",
        "name": "Kooddoo Island Airport"
    },
    {
        "code": "GLA",
        "country": "GB",
        "state": "",
        "name": "Glasgow International Airport"
    },
    {
        "code": "GLF",
        "country": "CR",
        "state": "",
        "name": "Golfito Airport"
    },
    {
        "code": "GLH",
        "country": "US",
        "state": "MS",
        "name": "Mid-Delta Airport"
    },
    {
        "code": "GLK",
        "country": "SO",
        "state": "",
        "name": "Galcaio Airport"
    },
    {
        "code": "GLN",
        "country": "MA",
        "state": "",
        "name": "Guelmime Airport"
    },
    {
        "code": "GLO",
        "country": "GB",
        "state": "",
        "name": "Gloucestershire Airport"
    },
    {
        "code": "GLT",
        "country": "AU",
        "state": "QL",
        "name": "Gladstone Airport"
    },
    {
        "code": "GLU",
        "country": "BT",
        "state": "",
        "name": "Gelephu Airport"
    },
    {
        "code": "GLV",
        "country": "US",
        "state": "AK",
        "name": "Golovin Airport"
    },
    {
        "code": "GMA",
        "country": "CD",
        "state": "",
        "name": "Gemena Airport"
    },
    {
        "code": "GMB",
        "country": "ET",
        "state": "",
        "name": "Gambela Airport"
    },
    {
        "code": "GME",
        "country": "BY",
        "state": "",
        "name": "Gomel Airport"
    },
    {
        "code": "GMO",
        "country": "NG",
        "state": "",
        "name": "Lawanti Airport"
    },
    {
        "code": "GMP",
        "country": "KR",
        "state": "",
        "name": "Gimpo International Airport"
    },
    {
        "code": "GMQ",
        "country": "CN",
        "state": "",
        "name": "Maqin Airport"
    },
    {
        "code": "GMR",
        "country": "PF",
        "state": "",
        "name": "Totegegie Airport"
    },
    {
        "code": "GMZ",
        "country": "ES",
        "state": "",
        "name": "La Gomera Airport"
    },
    {
        "code": "GNB",
        "country": "FR",
        "state": "",
        "name": "Grenoble-Isere Airport"
    },
    {
        "code": "GND",
        "country": "GD",
        "state": "",
        "name": "Maurice Bishop International Airport"
    },
    {
        "code": "GNJ",
        "country": "AZ",
        "state": "",
        "name": "Ganja Airport"
    },
    {
        "code": "GNM",
        "country": "BR",
        "state": "BA",
        "name": "Guanambi Airport"
    },
    {
        "code": "GNS",
        "country": "ID",
        "state": "",
        "name": "Binaka Airport"
    },
    {
        "code": "GNV",
        "country": "US",
        "state": "FL",
        "name": "Gainesville Regional Airport"
    },
    {
        "code": "GNY",
        "country": "TR",
        "state": "",
        "name": "Guney Anadolu Projesi Airport"
    },
    {
        "code": "GOA",
        "country": "IT",
        "state": "",
        "name": "Cristoforo Colombo Airport"
    },
    {
        "code": "GOB",
        "country": "ET",
        "state": "",
        "name": "Robe Airport"
    },
    {
        "code": "GOH",
        "country": "GL",
        "state": "",
        "name": "Nuuk Airport"
    },
    {
        "code": "GOI",
        "country": "IN",
        "state": "GA",
        "name": "Dabolim Airport"
    },
    {
        "code": "GOJ",
        "country": "RU",
        "state": "",
        "name": "Strigino Airport"
    },
    {
        "code": "GOM",
        "country": "CD",
        "state": "",
        "name": "Goma International Airport"
    },
    {
        "code": "GOP",
        "country": "IN",
        "state": "UP",
        "name": "Gorakhpur Airport"
    },
    {
        "code": "GOQ",
        "country": "CN",
        "state": "",
        "name": "Golmud Airport"
    },
    {
        "code": "GOT",
        "country": "SE",
        "state": "",
        "name": "Landvetter Airport"
    },
    {
        "code": "GOU",
        "country": "CM",
        "state": "",
        "name": "Garoua International Airport"
    },
    {
        "code": "GOV",
        "country": "AU",
        "state": "NT",
        "name": "Gove Airport"
    },
    {
        "code": "GOX",
        "country": "IN",
        "state": "GA",
        "name": "Mopa Airport"
    },
    {
        "code": "GOY",
        "country": "RU",
        "state": "",
        "name": "Tura Gornij Airport"
    },
    {
        "code": "GPA",
        "country": "GR",
        "state": "",
        "name": "Araxos Airport"
    },
    {
        "code": "GPB",
        "country": "BR",
        "state": "PR",
        "name": "Tancredo Thomas de Faria Airport"
    },
    {
        "code": "GPI",
        "country": "CO",
        "state": "",
        "name": "Juan Casiano Airport"
    },
    {
        "code": "GPP",
        "country": "IT",
        "state": "",
        "name": "Piazza Principe Railway Station"
    },
    {
        "code": "GPS",
        "country": "EC",
        "state": "",
        "name": "Seymour Airport"
    },
    {
        "code": "GPT",
        "country": "US",
        "state": "MS",
        "name": "Gulfport/Biloxi International Airport"
    },
    {
        "code": "GRB",
        "country": "US",
        "state": "WI",
        "name": "Austin Straubel International Airport"
    },
    {
        "code": "GRI",
        "country": "US",
        "state": "NE",
        "name": "Central Nebraska Regional Airport"
    },
    {
        "code": "GRJ",
        "country": "ZA",
        "state": "",
        "name": "George Airport"
    },
    {
        "code": "GRK",
        "country": "US",
        "state": "TX",
        "name": "Killeen/Fort Hood Regional Airport/Robe"
    },
    {
        "code": "GRO",
        "country": "ES",
        "state": "",
        "name": "Costa Brava Airport"
    },
    {
        "code": "GRQ",
        "country": "NL",
        "state": "",
        "name": "Eelde Airport"
    },
    {
        "code": "GRR",
        "country": "US",
        "state": "MI",
        "name": "Gerald R. Ford International Airport"
    },
    {
        "code": "GRU",
        "country": "BR",
        "state": "SP",
        "name": "Guarulhos International Airport"
    },
    {
        "code": "GRV",
        "country": "RU",
        "state": "",
        "name": "Grozny Airport"
    },
    {
        "code": "GRW",
        "country": "PT",
        "state": "",
        "name": "Graciosa Island Airport"
    },
    {
        "code": "GRX",
        "country": "ES",
        "state": "",
        "name": "Federico Garcia Lorca Airport"
    },
    {
        "code": "GRY",
        "country": "IS",
        "state": "",
        "name": "Grimsey Airport"
    },
    {
        "code": "GRZ",
        "country": "AT",
        "state": "",
        "name": "Graz Airport"
    },
    {
        "code": "GSM",
        "country": "IR",
        "state": "",
        "name": "Dayrestan Airport"
    },
    {
        "code": "GSO",
        "country": "US",
        "state": "NC",
        "name": "Piedmont Triad International Airport"
    },
    {
        "code": "GSP",
        "country": "US",
        "state": "SC",
        "name": "Greenville-Spartanburg International Ai"
    },
    {
        "code": "GST",
        "country": "US",
        "state": "AK",
        "name": "Gustavus Airport"
    },
    {
        "code": "GSV",
        "country": "RU",
        "state": "",
        "name": "Gagarin Airport"
    },
    {
        "code": "GTE",
        "country": "AU",
        "state": "NT",
        "name": "Groote Eylandt Airport"
    },
    {
        "code": "GTF",
        "country": "US",
        "state": "MT",
        "name": "Great Falls International Airport"
    },
    {
        "code": "GTO",
        "country": "ID",
        "state": "",
        "name": "Djalaluddin Airport"
    },
    {
        "code": "GTR",
        "country": "US",
        "state": "MS",
        "name": "Golden Triangle Regional Airport"
    },
    {
        "code": "GTS",
        "country": "AU",
        "state": "NT",
        "name": "The Granites Airport"
    },
    {
        "code": "GTZ",
        "country": "TZ",
        "state": "",
        "name": "Kirawira B Airport"
    },
    {
        "code": "GUA",
        "country": "GT",
        "state": "",
        "name": "La Aurora International Airport"
    },
    {
        "code": "GUC",
        "country": "US",
        "state": "CO",
        "name": "Gunnison-Crested Butte Airport"
    },
    {
        "code": "GUM",
        "country": "GU",
        "state": "",
        "name": "A.B. Won Pat International Airport"
    },
    {
        "code": "GUP",
        "country": "US",
        "state": "NM",
        "name": "Gallup Municipal Airport"
    },
    {
        "code": "GUR",
        "country": "PG",
        "state": "",
        "name": "Gurney Airport"
    },
    {
        "code": "GUW",
        "country": "KZ",
        "state": "",
        "name": "Atyrau Airport"
    },
    {
        "code": "GVA",
        "country": "CH",
        "state": "",
        "name": "Geneva International Airport"
    },
    {
        "code": "GVN",
        "country": "RU",
        "state": "",
        "name": "May-Gatka Airport"
    },
    {
        "code": "GVR",
        "country": "BR",
        "state": "MG",
        "name": "Altino Machado Oliveira Airport"
    },
    {
        "code": "GWD",
        "country": "PK",
        "state": "",
        "name": "Gwadar International Airport"
    },
    {
        "code": "GWL",
        "country": "IN",
        "state": "MP",
        "name": "Gwalior Airport"
    },
    {
        "code": "GWT",
        "country": "DE",
        "state": "",
        "name": "Sylt Airport"
    },
    {
        "code": "GXF",
        "country": "YE",
        "state": "",
        "name": "Sayun Airport"
    },
    {
        "code": "GXH",
        "country": "CN",
        "state": "",
        "name": "Gannan Xiahe Airport"
    },
    {
        "code": "GYA",
        "country": "BO",
        "state": "",
        "name": "Guayaramerin Airport"
    },
    {
        "code": "GYD",
        "country": "AZ",
        "state": "",
        "name": "Heydar Aliyev International Airport"
    },
    {
        "code": "GYE",
        "country": "EC",
        "state": "",
        "name": "Jose Joaquin de Olmedo Airport"
    },
    {
        "code": "GYN",
        "country": "BR",
        "state": "GO",
        "name": "Santa Genoveva Airport"
    },
    {
        "code": "GYS",
        "country": "CN",
        "state": "",
        "name": "Panlong Airport"
    },
    {
        "code": "GYU",
        "country": "CN",
        "state": "",
        "name": "Liupanshan Airport"
    },
    {
        "code": "GZG",
        "country": "CN",
        "state": "",
        "name": "Ganzi Airport"
    },
    {
        "code": "GZO",
        "country": "SB",
        "state": "",
        "name": "Nusatupe Airport"
    },
    {
        "code": "GZP",
        "country": "TR",
        "state": "",
        "name": "Gazipasa Alanya Airport"
    },
    {
        "code": "GZT",
        "country": "TR",
        "state": "",
        "name": "Oguzeli"
    },
    {
        "code": "HAA",
        "country": "NO",
        "state": "",
        "name": "Hasvik Airport"
    },
    {
        "code": "HAC",
        "country": "JP",
        "state": "",
        "name": "Hachijojima Airport"
    },
    {
        "code": "HAD",
        "country": "SE",
        "state": "",
        "name": "Halmstad Airport"
    },
    {
        "code": "HAH",
        "country": "KM",
        "state": "",
        "name": "Prince Said Ibrahim Airport"
    },
    {
        "code": "HAJ",
        "country": "DE",
        "state": "",
        "name": "Hannover Airport"
    },
    {
        "code": "HAK",
        "country": "CN",
        "state": "",
        "name": "Meilan International Airport"
    },
    {
        "code": "HAM",
        "country": "DE",
        "state": "",
        "name": "Hamburg Airport"
    },
    {
        "code": "HAN",
        "country": "VN",
        "state": "",
        "name": "Noi Bai International Airport"
    },
    {
        "code": "HAQ",
        "country": "MV",
        "state": "",
        "name": "Hanimaadhoo Island Airport"
    },
    {
        "code": "HAS",
        "country": "SA",
        "state": "",
        "name": "Hail Airport"
    },
    {
        "code": "HAU",
        "country": "NO",
        "state": "",
        "name": "Karmoy Airport"
    },
    {
        "code": "HAV",
        "country": "CU",
        "state": "",
        "name": "Jose Marti International Airport"
    },
    {
        "code": "HAY",
        "country": "CO",
        "state": "",
        "name": "Hacaritama airport"
    },
    {
        "code": "HBA",
        "country": "AU",
        "state": "TS",
        "name": "Hobart International Airport"
    },
    {
        "code": "HBE",
        "country": "EG",
        "state": "",
        "name": "Borg el Arab Airport"
    },
    {
        "code": "HBQ",
        "country": "CN",
        "state": "",
        "name": "Haibei Airport"
    },
    {
        "code": "HBX",
        "country": "IN",
        "state": "KA",
        "name": "Hubli Airport"
    },
    {
        "code": "HCJ",
        "country": "CN",
        "state": "",
        "name": "Jin Cheng Jiang Airport"
    },
    {
        "code": "HCQ",
        "country": "AU",
        "state": "WA",
        "name": "Halls Creek Airport"
    },
    {
        "code": "HCZ",
        "country": "CN",
        "state": "",
        "name": "Beihu"
    },
    {
        "code": "HDF",
        "country": "DE",
        "state": "",
        "name": "Heringsdorf Airport"
    },
    {
        "code": "HDG",
        "country": "CN",
        "state": "",
        "name": "Handan Airport"
    },
    {
        "code": "HDK",
        "country": "MV",
        "state": "",
        "name": "Kulhudhuffushi Airport"
    },
    {
        "code": "HDM",
        "country": "IR",
        "state": "",
        "name": "Hamadan Airport"
    },
    {
        "code": "HDN",
        "country": "US",
        "state": "CO",
        "name": "Yampa Valley Airport"
    },
    {
        "code": "HDS",
        "country": "ZA",
        "state": "",
        "name": "Hoedspruit Air Force Base"
    },
    {
        "code": "HDY",
        "country": "TH",
        "state": "",
        "name": "Hat Yai International Airport"
    },
    {
        "code": "HEA",
        "country": "AF",
        "state": "",
        "name": "Herat Airport"
    },
    {
        "code": "HEH",
        "country": "MM",
        "state": "",
        "name": "Heho Airport"
    },
    {
        "code": "HEK",
        "country": "CN",
        "state": "",
        "name": "Heihe Airport"
    },
    {
        "code": "HEL",
        "country": "FI",
        "state": "",
        "name": "Helsinki-Vantaa Airport"
    },
    {
        "code": "HER",
        "country": "GR",
        "state": "",
        "name": "Nikos Kazantzakis Airport"
    },
    {
        "code": "HET",
        "country": "CN",
        "state": "",
        "name": "Baita International Airport"
    },
    {
        "code": "HFE",
        "country": "CN",
        "state": "",
        "name": "Xinqiao International Airport"
    },
    {
        "code": "HFH",
        "country": "GB",
        "state": "",
        "name": "Hereford Railway Station"
    },
    {
        "code": "HFT",
        "country": "NO",
        "state": "",
        "name": "Hammerfest Airport"
    },
    {
        "code": "HGA",
        "country": "SO",
        "state": "",
        "name": "Egal International Airport"
    },
    {
        "code": "HGD",
        "country": "AU",
        "state": "QL",
        "name": "Hughenden Airport"
    },
    {
        "code": "HGH",
        "country": "CN",
        "state": "",
        "name": "Xiaoshan International Airport"
    },
    {
        "code": "HGI",
        "country": "IN",
        "state": "AR",
        "name": "Hollongi Airport"
    },
    {
        "code": "HGN",
        "country": "TH",
        "state": "",
        "name": "Mae Hong Son Airport"
    },
    {
        "code": "HGO",
        "country": "CI",
        "state": "",
        "name": "Korhogo Airport"
    },
    {
        "code": "HGR",
        "country": "US",
        "state": "MD",
        "name": "Hagerstown Regional Airport"
    },
    {
        "code": "HGU",
        "country": "PG",
        "state": "",
        "name": "Kagamuga Airport"
    },
    {
        "code": "HHH",
        "country": "US",
        "state": "SC",
        "name": "Hilton Head Airport"
    },
    {
        "code": "HHN",
        "country": "DE",
        "state": "",
        "name": "Hahn Airport"
    },
    {
        "code": "HHQ",
        "country": "TH",
        "state": "",
        "name": "Hua Hin Airport"
    },
    {
        "code": "HHR",
        "country": "US",
        "state": "CA",
        "name": "Hawthorne Municipal Airport"
    },
    {
        "code": "HHZ",
        "country": "PF",
        "state": "",
        "name": "Hikueru Airport"
    },
    {
        "code": "HIA",
        "country": "CN",
        "state": "",
        "name": "Lianshui Airport"
    },
    {
        "code": "HIB",
        "country": "US",
        "state": "MN",
        "name": "Range Regional Airport"
    },
    {
        "code": "HID",
        "country": "AU",
        "state": "QL",
        "name": "Horn Island Airport"
    },
    {
        "code": "HIJ",
        "country": "JP",
        "state": "",
        "name": "Hiroshima Airport"
    },
    {
        "code": "HIN",
        "country": "KR",
        "state": "",
        "name": "Sacheon Airport"
    },
    {
        "code": "HIR",
        "country": "SB",
        "state": "",
        "name": "Honiara International Airport"
    },
    {
        "code": "HIS",
        "country": "AU",
        "state": "QL",
        "name": "Hayman Island Heliport"
    },
    {
        "code": "HJJ",
        "country": "CN",
        "state": "",
        "name": "Zhijiang Airport"
    },
    {
        "code": "HJR",
        "country": "IN",
        "state": "MP",
        "name": "Khajuraho Airport"
    },
    {
        "code": "HKB",
        "country": "US",
        "state": "AK",
        "name": "Healy Lake Airport"
    },
    {
        "code": "HKD",
        "country": "JP",
        "state": "",
        "name": "Hakodate Airport"
    },
    {
        "code": "HKG",
        "country": "HK",
        "state": "",
        "name": "Hong Kong International Airport"
    },
    {
        "code": "HKK",
        "country": "NZ",
        "state": "",
        "name": "Hokitika Airport"
    },
    {
        "code": "HKM",
        "country": "MO",
        "state": "",
        "name": "Hong Kong Zhuhai Macao Bridge"
    },
    {
        "code": "HKN",
        "country": "PG",
        "state": "",
        "name": "Hoskins Airport"
    },
    {
        "code": "HKT",
        "country": "TH",
        "state": "",
        "name": "Phuket International Airport"
    },
    {
        "code": "HLA",
        "country": "ZA",
        "state": "",
        "name": "Lanseria International Airport"
    },
    {
        "code": "HLD",
        "country": "CN",
        "state": "",
        "name": "Dongshan Airport"
    },
    {
        "code": "HLE",
        "country": "SH",
        "state": "",
        "name": "Saint Helena Airport"
    },
    {
        "code": "HLH",
        "country": "CN",
        "state": "",
        "name": "Ulanhot Airport"
    },
    {
        "code": "HLN",
        "country": "US",
        "state": "MT",
        "name": "Helena Regional Airport"
    },
    {
        "code": "HLP",
        "country": "ID",
        "state": "",
        "name": "Halim Perdanakusuma Airport"
    },
    {
        "code": "HLZ",
        "country": "NZ",
        "state": "",
        "name": "Hamilton International Airport"
    },
    {
        "code": "HMA",
        "country": "RU",
        "state": "",
        "name": "Khanty-Mansiysk"
    },
    {
        "code": "HMB",
        "country": "EG",
        "state": "",
        "name": "Sohag International Airport"
    },
    {
        "code": "HME",
        "country": "DZ",
        "state": "",
        "name": "Oued Irara Airport"
    },
    {
        "code": "HMI",
        "country": "CN",
        "state": "",
        "name": "Hami Airport"
    },
    {
        "code": "HMO",
        "country": "MX",
        "state": "",
        "name": "Ignacio Pesqueira Garcia Airport"
    },
    {
        "code": "HMS",
        "country": "ID",
        "state": "",
        "name": "Haji Muhammad Sidik"
    },
    {
        "code": "HMV",
        "country": "SE",
        "state": "",
        "name": "Hemavan/Tarnaby Airport"
    },
    {
        "code": "HNA",
        "country": "JP",
        "state": "",
        "name": "Hanamaki Airport"
    },
    {
        "code": "HND",
        "country": "JP",
        "state": "",
        "name": "Tokyo International (Haneda) Airport"
    },
    {
        "code": "HNH",
        "country": "US",
        "state": "AK",
        "name": "Hoonah Airport"
    },
    {
        "code": "HNL",
        "country": "US",
        "state": "HI",
        "name": "Daniel K. Inouye International Airport"
    },
    {
        "code": "HNM",
        "country": "US",
        "state": "HI",
        "name": "Hana Airport"
    },
    {
        "code": "HNS",
        "country": "US",
        "state": "AK",
        "name": "Haines Airport"
    },
    {
        "code": "HNY",
        "country": "CN",
        "state": "",
        "name": "Bajialing Airport"
    },
    {
        "code": "HOB",
        "country": "US",
        "state": "NM",
        "name": "Lea County Regional"
    },
    {
        "code": "HOF",
        "country": "SA",
        "state": "",
        "name": "Al-Ahsa Airport"
    },
    {
        "code": "HOG",
        "country": "CU",
        "state": "",
        "name": "Frank Pais International Airport"
    },
    {
        "code": "HOI",
        "country": "PF",
        "state": "",
        "name": "Hao Airport"
    },
    {
        "code": "HOM",
        "country": "US",
        "state": "AK",
        "name": "Homer Airport"
    },
    {
        "code": "HOR",
        "country": "PT",
        "state": "",
        "name": "Horta Airport"
    },
    {
        "code": "HOT",
        "country": "US",
        "state": "AR",
        "name": "Memorial Field"
    },
    {
        "code": "HOU",
        "country": "US",
        "state": "TX",
        "name": "William P. Hobby Airport"
    },
    {
        "code": "HOV",
        "country": "NO",
        "state": "",
        "name": "Hovden Airport"
    },
    {
        "code": "HOX",
        "country": "MM",
        "state": "",
        "name": "Homalin Airport"
    },
    {
        "code": "HPA",
        "country": "TO",
        "state": "",
        "name": "Lifuka Airport"
    },
    {
        "code": "HPB",
        "country": "US",
        "state": "AK",
        "name": "Hooper Bay Airport"
    },
    {
        "code": "HPG",
        "country": "CN",
        "state": "",
        "name": "Hongping Airport"
    },
    {
        "code": "HPH",
        "country": "VN",
        "state": "",
        "name": "Cat Bi International Airport"
    },
    {
        "code": "HPN",
        "country": "US",
        "state": "NY",
        "name": "Westchester County Airport"
    },
    {
        "code": "HQL",
        "country": "CN",
        "state": "",
        "name": "Hongqilafu Aiport"
    },
    {
        "code": "HQQ",
        "country": "CN",
        "state": "",
        "name": "Hong Qiqu Airport"
    },
    {
        "code": "HRB",
        "country": "CN",
        "state": "",
        "name": "Taiping International Airport"
    },
    {
        "code": "HRE",
        "country": "ZW",
        "state": "",
        "name": "RG Mugabe International Airport"
    },
    {
        "code": "HRF",
        "country": "MV",
        "state": "",
        "name": "Hoarafushi"
    },
    {
        "code": "HRG",
        "country": "EG",
        "state": "",
        "name": "Hurghada International Airport"
    },
    {
        "code": "HRI",
        "country": "LK",
        "state": "",
        "name": "Mattala Rajapaksa International Airport"
    },
    {
        "code": "HRL",
        "country": "US",
        "state": "TX",
        "name": "Valley International Airport"
    },
    {
        "code": "HRO",
        "country": "US",
        "state": "AR",
        "name": "Boone County Airport"
    },
    {
        "code": "HSA",
        "country": "KZ",
        "state": "",
        "name": "Turkistan International"
    },
    {
        "code": "HSC",
        "country": "CN",
        "state": "",
        "name": "Danxia Airport"
    },
    {
        "code": "HSG",
        "country": "JP",
        "state": "",
        "name": "Saga Airport"
    },
    {
        "code": "HSL",
        "country": "US",
        "state": "AK",
        "name": "Huslia Airport"
    },
    {
        "code": "HSN",
        "country": "CN",
        "state": "",
        "name": "Putuoshan Airport"
    },
    {
        "code": "HSR",
        "country": "IN",
        "state": "GJ",
        "name": "Hirasar Airport"
    },
    {
        "code": "HSV",
        "country": "US",
        "state": "AL",
        "name": "Huntsville International Airport-Carl T"
    },
    {
        "code": "HTA",
        "country": "RU",
        "state": "",
        "name": "Kadala Airport"
    },
    {
        "code": "HTG",
        "country": "RU",
        "state": "",
        "name": "Khatanga Airport"
    },
    {
        "code": "HTI",
        "country": "AU",
        "state": "QL",
        "name": "Great Barrier Reef Airport"
    },
    {
        "code": "HTN",
        "country": "CN",
        "state": "",
        "name": "Hotan Airport"
    },
    {
        "code": "HTS",
        "country": "US",
        "state": "WV",
        "name": "Tri-State Airport"
    },
    {
        "code": "HTT",
        "country": "CN",
        "state": "",
        "name": "Huatugou Airport"
    },
    {
        "code": "HTY",
        "country": "TR",
        "state": "",
        "name": "Hatay Airport"
    },
    {
        "code": "HUH",
        "country": "PF",
        "state": "",
        "name": "Fare Airport"
    },
    {
        "code": "HUI",
        "country": "VN",
        "state": "",
        "name": "Phu Bai International Airport"
    },
    {
        "code": "HUN",
        "country": "TW",
        "state": "",
        "name": "Hualien Airport"
    },
    {
        "code": "HUO",
        "country": "CN",
        "state": "",
        "name": "Huolinhe Airport"
    },
    {
        "code": "HUS",
        "country": "US",
        "state": "AK",
        "name": "Hughes Airport"
    },
    {
        "code": "HUU",
        "country": "PE",
        "state": "",
        "name": "David F. Fernandini Airport"
    },
    {
        "code": "HUV",
        "country": "SE",
        "state": "",
        "name": "Hudiksvall Airport"
    },
    {
        "code": "HUX",
        "country": "MX",
        "state": "",
        "name": "Bahias de Huatulco International Airpor"
    },
    {
        "code": "HUY",
        "country": "GB",
        "state": "",
        "name": "Humberside Airport"
    },
    {
        "code": "HUZ",
        "country": "CN",
        "state": "",
        "name": "Huizhou Airport"
    },
    {
        "code": "HVB",
        "country": "AU",
        "state": "QL",
        "name": "Hervey Bay Airport"
    },
    {
        "code": "HVD",
        "country": "MN",
        "state": "",
        "name": "Khovd Airport"
    },
    {
        "code": "HVG",
        "country": "NO",
        "state": "",
        "name": "Valan Airport"
    },
    {
        "code": "HVN",
        "country": "US",
        "state": "CT",
        "name": "Tweed Airport"
    },
    {
        "code": "HVR",
        "country": "US",
        "state": "MT",
        "name": "Havre City-County Airport"
    },
    {
        "code": "HWN",
        "country": "ZW",
        "state": "",
        "name": "Hwange National Park Airport"
    },
    {
        "code": "HXD",
        "country": "CN",
        "state": "",
        "name": "Delingha Airport"
    },
    {
        "code": "HYA",
        "country": "US",
        "state": "MA",
        "name": "Barnstable Municipal Airport"
    },
    {
        "code": "HYD",
        "country": "IN",
        "state": "TG",
        "name": "Rajiv Gandhi International Airport"
    },
    {
        "code": "HYN",
        "country": "CN",
        "state": "",
        "name": "Luqiao Airport"
    },
    {
        "code": "HYS",
        "country": "US",
        "state": "KS",
        "name": "Hays Regional Airport"
    },
    {
        "code": "HZA",
        "country": "CN",
        "state": "",
        "name": "Heze Mudan"
    },
    {
        "code": "HZG",
        "country": "CN",
        "state": "",
        "name": "Chenggu Airport"
    },
    {
        "code": "HZI",
        "country": "CN",
        "state": "",
        "name": "HMZB Zhuhai Port"
    },
    {
        "code": "IAA",
        "country": "RU",
        "state": "",
        "name": "Igarka Airport"
    },
    {
        "code": "IAD",
        "country": "US",
        "state": "DC",
        "name": "Dulles International Airport"
    },
    {
        "code": "IAG",
        "country": "US",
        "state": "NY",
        "name": "Niagara Falls International Airport"
    },
    {
        "code": "IAH",
        "country": "US",
        "state": "TX",
        "name": "George Bush Intercontinental Airport"
    },
    {
        "code": "IAL",
        "country": "BR",
        "state": "MG",
        "name": "Aeroporto Municipal de Salinas"
    },
    {
        "code": "IAM",
        "country": "DZ",
        "state": "",
        "name": "Zarzaitine Airport"
    },
    {
        "code": "IAN",
        "country": "US",
        "state": "AK",
        "name": "Bob Baker Memorial Airport"
    },
    {
        "code": "IAO",
        "country": "PH",
        "state": "",
        "name": "Sayak Airport"
    },
    {
        "code": "IAR",
        "country": "RU",
        "state": "",
        "name": "Tunoshna Airport"
    },
    {
        "code": "IAS",
        "country": "RO",
        "state": "",
        "name": "Iasi Airport"
    },
    {
        "code": "IBA",
        "country": "NG",
        "state": "",
        "name": "Ibadan Airport"
    },
    {
        "code": "IBE",
        "country": "CO",
        "state": "",
        "name": "Perales Airport"
    },
    {
        "code": "IBR",
        "country": "JP",
        "state": "",
        "name": "Ibaraki Airport"
    },
    {
        "code": "IBT",
        "country": "IT",
        "state": "",
        "name": "Bologna Central Railway Station"
    },
    {
        "code": "IBZ",
        "country": "ES",
        "state": "",
        "name": "Ibiza Airport"
    },
    {
        "code": "ICI",
        "country": "FJ",
        "state": "",
        "name": "Cicia Island Airport"
    },
    {
        "code": "ICN",
        "country": "KR",
        "state": "",
        "name": "Incheon International Airport"
    },
    {
        "code": "ICO",
        "country": "PH",
        "state": "",
        "name": "Sicogon Island Airport"
    },
    {
        "code": "ICT",
        "country": "US",
        "state": "KS",
        "name": "Dwight D. Eisenhower Airport"
    },
    {
        "code": "IDA",
        "country": "US",
        "state": "ID",
        "name": "Idaho Falls Regional Airport"
    },
    {
        "code": "IDR",
        "country": "IN",
        "state": "MP",
        "name": "Devi Ahilya Bai Holkar Airport"
    },
    {
        "code": "IEG",
        "country": "PL",
        "state": "",
        "name": "Babimost Airport"
    },
    {
        "code": "IFJ",
        "country": "IS",
        "state": "",
        "name": "Isafjordur Airport"
    },
    {
        "code": "IFN",
        "country": "IR",
        "state": "",
        "name": "Shahid Beheshti International"
    },
    {
        "code": "IFU",
        "country": "MV",
        "state": "",
        "name": "Ifuru Airport"
    },
    {
        "code": "IGA",
        "country": "BS",
        "state": "",
        "name": "Matthew Town Airport"
    },
    {
        "code": "IGD",
        "country": "TR",
        "state": "",
        "name": "Igdir Airport"
    },
    {
        "code": "IGR",
        "country": "AR",
        "state": "MI",
        "name": "Cataratas del Iguazu Airport"
    },
    {
        "code": "IGT",
        "country": "RU",
        "state": "",
        "name": "Sleptsovskaya Airport"
    },
    {
        "code": "IGU",
        "country": "BR",
        "state": "PR",
        "name": "Cataratas International Airport"
    },
    {
        "code": "IHR",
        "country": "IR",
        "state": "",
        "name": "Iranshahr Airport"
    },
    {
        "code": "IIL",
        "country": "IR",
        "state": "",
        "name": "Ilam Airport"
    },
    {
        "code": "IJK",
        "country": "RU",
        "state": "",
        "name": "Izhevsk Airport"
    },
    {
        "code": "IKA",
        "country": "IR",
        "state": "",
        "name": "Imam Khomeini International Airport"
    },
    {
        "code": "IKE",
        "country": "GL",
        "state": "",
        "name": "Ikerasak Heliport"
    },
    {
        "code": "IKI",
        "country": "JP",
        "state": "",
        "name": "Iki Airport"
    },
    {
        "code": "IKO",
        "country": "US",
        "state": "AK",
        "name": "Nikolski Air Station"
    },
    {
        "code": "IKS",
        "country": "RU",
        "state": "",
        "name": "Tiksi Airport"
    },
    {
        "code": "IKT",
        "country": "RU",
        "state": "",
        "name": "Irkutsk Airport"
    },
    {
        "code": "IKU",
        "country": "KG",
        "state": "",
        "name": "Issyk-Kul Airport"
    },
    {
        "code": "ILD",
        "country": "ES",
        "state": "",
        "name": "Alguaire Airport"
    },
    {
        "code": "ILG",
        "country": "US",
        "state": "DE",
        "name": "New Castle Airport"
    },
    {
        "code": "ILI",
        "country": "US",
        "state": "AK",
        "name": "Iliamna Airport"
    },
    {
        "code": "ILM",
        "country": "US",
        "state": "NC",
        "name": "Wilmington International Airport"
    },
    {
        "code": "ILO",
        "country": "PH",
        "state": "",
        "name": "Iloilo International Airport"
    },
    {
        "code": "ILP",
        "country": "NC",
        "state": "",
        "name": "Moue Airport"
    },
    {
        "code": "ILQ",
        "country": "PE",
        "state": "",
        "name": "Ilo Airport"
    },
    {
        "code": "ILR",
        "country": "NG",
        "state": "",
        "name": "Ilorin International Airport"
    },
    {
        "code": "ILY",
        "country": "GB",
        "state": "",
        "name": "Islay Airport"
    },
    {
        "code": "IMF",
        "country": "IN",
        "state": "MN",
        "name": "Imphal Airport"
    },
    {
        "code": "IMP",
        "country": "BR",
        "state": "MA",
        "name": "Renato Moreira Airport"
    },
    {
        "code": "IMR",
        "country": "IT",
        "state": "",
        "name": "Rogoredo Railway Station"
    },
    {
        "code": "IMT",
        "country": "US",
        "state": "MI",
        "name": "Ford Airport"
    },
    {
        "code": "INB",
        "country": "BZ",
        "state": "",
        "name": "Independence Airport"
    },
    {
        "code": "INC",
        "country": "CN",
        "state": "",
        "name": "Hedong Airport"
    },
    {
        "code": "IND",
        "country": "US",
        "state": "IN",
        "name": "Indianapolis International Airport"
    },
    {
        "code": "INF",
        "country": "DZ",
        "state": "",
        "name": "In Guezzam Airport"
    },
    {
        "code": "INH",
        "country": "MZ",
        "state": "",
        "name": "Inhambane Airport"
    },
    {
        "code": "INI",
        "country": "RS",
        "state": "",
        "name": "Konstantin Veliki Airport"
    },
    {
        "code": "INL",
        "country": "US",
        "state": "MN",
        "name": "Falls International Airport"
    },
    {
        "code": "INN",
        "country": "AT",
        "state": "",
        "name": "Innsbruck Airport"
    },
    {
        "code": "INP",
        "country": "IT",
        "state": "",
        "name": "Naples Central Railway Station"
    },
    {
        "code": "INU",
        "country": "NR",
        "state": "",
        "name": "Nauru Island International Airport"
    },
    {
        "code": "INV",
        "country": "GB",
        "state": "",
        "name": "Inverness Airport"
    },
    {
        "code": "INZ",
        "country": "DZ",
        "state": "",
        "name": "In Salah Airport"
    },
    {
        "code": "IOA",
        "country": "GR",
        "state": "",
        "name": "King Pyrros Airport"
    },
    {
        "code": "IOB",
        "country": "AT",
        "state": "",
        "name": "Innsbruck Railway Station"
    },
    {
        "code": "IOM",
        "country": "IM",
        "state": "",
        "name": "Ronaldsway Airport"
    },
    {
        "code": "IOQ",
        "country": "GL",
        "state": "",
        "name": "Isortoq Heliport"
    },
    {
        "code": "IOS",
        "country": "BR",
        "state": "BA",
        "name": "Jorge Amado Airport"
    },
    {
        "code": "IPA",
        "country": "VU",
        "state": "",
        "name": "Ipota Airport"
    },
    {
        "code": "IPC",
        "country": "CL",
        "state": "",
        "name": "Mataveri International Airport"
    },
    {
        "code": "IPH",
        "country": "MY",
        "state": "",
        "name": "Sultan Azlan Shah Airport"
    },
    {
        "code": "IPI",
        "country": "CO",
        "state": "",
        "name": "San Luis Airport"
    },
    {
        "code": "IPL",
        "country": "US",
        "state": "CA",
        "name": "Imperial County Airport"
    },
    {
        "code": "IPN",
        "country": "BR",
        "state": "MG",
        "name": "Usiminas Airport"
    },
    {
        "code": "IPZ",
        "country": "CR",
        "state": "",
        "name": "San Isidro de El General Airport"
    },
    {
        "code": "IQM",
        "country": "CN",
        "state": "",
        "name": "Qiemo Airport"
    },
    {
        "code": "IQN",
        "country": "CN",
        "state": "",
        "name": "Qingyang Airport"
    },
    {
        "code": "IQQ",
        "country": "CL",
        "state": "",
        "name": "Diego Aracena Airport"
    },
    {
        "code": "IQT",
        "country": "PE",
        "state": "",
        "name": "Francisco Secada Vignetta Airport"
    },
    {
        "code": "IRA",
        "country": "SB",
        "state": "",
        "name": "Kirakira Airport"
    },
    {
        "code": "IRC",
        "country": "US",
        "state": "AK",
        "name": "Circle City Airport"
    },
    {
        "code": "IRG",
        "country": "AU",
        "state": "QL",
        "name": "Lockhart River Airport"
    },
    {
        "code": "IRI",
        "country": "TZ",
        "state": "",
        "name": "Iringa Airport"
    },
    {
        "code": "IRJ",
        "country": "AR",
        "state": "LR",
        "name": "Captain V.A. Almonacid Airport"
    },
    {
        "code": "IRK",
        "country": "US",
        "state": "MO",
        "name": "Kirksville Regional Airport"
    },
    {
        "code": "IRM",
        "country": "RU",
        "state": "",
        "name": "Igrim Airport"
    },
    {
        "code": "IRP",
        "country": "CD",
        "state": "",
        "name": "Matari"
    },
    {
        "code": "IRZ",
        "country": "BR",
        "state": "AM",
        "name": "Tapuruquara Airport"
    },
    {
        "code": "ISA",
        "country": "AU",
        "state": "QL",
        "name": "Mount Isa Airport"
    },
    {
        "code": "ISB",
        "country": "PK",
        "state": "",
        "name": "Islamabad International Airport"
    },
    {
        "code": "ISC",
        "country": "GB",
        "state": "",
        "name": "Saint Mary's Airport"
    },
    {
        "code": "ISE",
        "country": "TR",
        "state": "",
        "name": "Suleyman Demirel Airport"
    },
    {
        "code": "ISG",
        "country": "JP",
        "state": "",
        "name": "New Ishigaki Airport"
    },
    {
        "code": "ISK",
        "country": "IN",
        "state": "MH",
        "name": "Ozar Airport"
    },
    {
        "code": "ISP",
        "country": "US",
        "state": "NY",
        "name": "Long Island MacArthur Airport"
    },
    {
        "code": "ISR",
        "country": "IT",
        "state": "",
        "name": "Salerno Railway Station"
    },
    {
        "code": "IST",
        "country": "TR",
        "state": "",
        "name": "Istanbul Airport"
    },
    {
        "code": "ISU",
        "country": "IQ",
        "state": "",
        "name": "Sulaymaniyah International Airport"
    },
    {
        "code": "ITB",
        "country": "BR",
        "state": "PA",
        "name": "Itaituba Airport"
    },
    {
        "code": "ITH",
        "country": "US",
        "state": "NY",
        "name": "Tompkins Regional Airport"
    },
    {
        "code": "ITM",
        "country": "JP",
        "state": "",
        "name": "Osaka International (Itami) Airport"
    },
    {
        "code": "ITO",
        "country": "US",
        "state": "HI",
        "name": "Hilo International Airport"
    },
    {
        "code": "ITU",
        "country": "RU",
        "state": "",
        "name": "Iturup Airport"
    },
    {
        "code": "IUE",
        "country": "NU",
        "state": "",
        "name": "Niue Island International Airport"
    },
    {
        "code": "IUI",
        "country": "GL",
        "state": "",
        "name": "Innarsuit Heliport"
    },
    {
        "code": "IVC",
        "country": "NZ",
        "state": "",
        "name": "Invercargill Airport"
    },
    {
        "code": "IVL",
        "country": "FI",
        "state": "",
        "name": "Ivalo Airport"
    },
    {
        "code": "IVR",
        "country": "AU",
        "state": "NS",
        "name": "Inverell Airport"
    },
    {
        "code": "IWA",
        "country": "RU",
        "state": "",
        "name": "Yuzhny Airport"
    },
    {
        "code": "IWD",
        "country": "US",
        "state": "MI",
        "name": "Gogebic-Iron County Airport"
    },
    {
        "code": "IWJ",
        "country": "JP",
        "state": "",
        "name": "Iwami Airport"
    },
    {
        "code": "IWK",
        "country": "JP",
        "state": "",
        "name": "Iwakuni Airport"
    },
    {
        "code": "IXA",
        "country": "IN",
        "state": "TR",
        "name": "Agartala Airport"
    },
    {
        "code": "IXB",
        "country": "IN",
        "state": "WB",
        "name": "Bagdogra Airport"
    },
    {
        "code": "IXC",
        "country": "IN",
        "state": "CH",
        "name": "Chandigarh Airport"
    },
    {
        "code": "IXD",
        "country": "IN",
        "state": "UP",
        "name": "Allahabad Airport"
    },
    {
        "code": "IXE",
        "country": "IN",
        "state": "KA",
        "name": "Mangalore Airport"
    },
    {
        "code": "IXG",
        "country": "IN",
        "state": "KA",
        "name": "Sambre Airport"
    },
    {
        "code": "IXI",
        "country": "IN",
        "state": "AS",
        "name": "Lilabari Airport"
    },
    {
        "code": "IXJ",
        "country": "IN",
        "state": "JK",
        "name": "Satwari Airport"
    },
    {
        "code": "IXK",
        "country": "IN",
        "state": "GJ",
        "name": "Keshod Airport"
    },
    {
        "code": "IXL",
        "country": "IN",
        "state": "JK",
        "name": "Kushok Bakula Rimpoche Airport"
    },
    {
        "code": "IXM",
        "country": "IN",
        "state": "TN",
        "name": "Madurai Airport"
    },
    {
        "code": "IXR",
        "country": "IN",
        "state": "JH",
        "name": "Birsa Munda Airport"
    },
    {
        "code": "IXS",
        "country": "IN",
        "state": "AS",
        "name": "Kumbhirgram Airport"
    },
    {
        "code": "IXT",
        "country": "IN",
        "state": "AR",
        "name": "Pasighat Airport"
    },
    {
        "code": "IXU",
        "country": "IN",
        "state": "MH",
        "name": "Aurangabad Airport"
    },
    {
        "code": "IXW",
        "country": "IN",
        "state": "JH",
        "name": "Sonari Airport"
    },
    {
        "code": "IXY",
        "country": "IN",
        "state": "GJ",
        "name": "Kandla Airport"
    },
    {
        "code": "IXZ",
        "country": "IN",
        "state": "AN",
        "name": "Veer Savarkar International Airport"
    },
    {
        "code": "IZA",
        "country": "BR",
        "state": "MG",
        "name": "Presidente I. Franco Airport"
    },
    {
        "code": "IZO",
        "country": "JP",
        "state": "",
        "name": "Izumo Airport"
    },
    {
        "code": "JAA",
        "country": "AF",
        "state": "",
        "name": "Jalalabad Airport"
    },
    {
        "code": "JAC",
        "country": "US",
        "state": "WY",
        "name": "Jackson Hole Airport"
    },
    {
        "code": "JAE",
        "country": "PE",
        "state": "",
        "name": "Shumba Airport"
    },
    {
        "code": "JAF",
        "country": "LK",
        "state": "",
        "name": "Kankesanturai Airport"
    },
    {
        "code": "JAI",
        "country": "IN",
        "state": "RJ",
        "name": "Jaipur International Airport"
    },
    {
        "code": "JAN",
        "country": "US",
        "state": "MS",
        "name": "Medgar W. EversInternational Airport"
    },
    {
        "code": "JAU",
        "country": "PE",
        "state": "",
        "name": "Francisco Carle Airport"
    },
    {
        "code": "JAV",
        "country": "GL",
        "state": "",
        "name": "Ilulissat Airport"
    },
    {
        "code": "JAW",
        "country": "BR",
        "state": "PE",
        "name": "Araripina Airport"
    },
    {
        "code": "JAX",
        "country": "US",
        "state": "FL",
        "name": "Jacksonville International Airport"
    },
    {
        "code": "JBQ",
        "country": "DO",
        "state": "",
        "name": "Dr.Joaquin Balaguer Airport"
    },
    {
        "code": "JBR",
        "country": "US",
        "state": "AR",
        "name": "Jonesboro Municipal Airport"
    },
    {
        "code": "JBU",
        "country": "ES",
        "state": "",
        "name": "Santiago de Compostela Bus Station"
    },
    {
        "code": "JCH",
        "country": "GL",
        "state": "",
        "name": "Qasigiannguit Heliport"
    },
    {
        "code": "JCK",
        "country": "AU",
        "state": "QL",
        "name": "Julia Creek Airport"
    },
    {
        "code": "JCS",
        "country": "BR",
        "state": "CE",
        "name": "Aeroporto De Crateus"
    },
    {
        "code": "JDH",
        "country": "IN",
        "state": "RJ",
        "name": "Jodhpur Airport"
    },
    {
        "code": "JDO",
        "country": "BR",
        "state": "CE",
        "name": "O. Bezerra de Menezes Airport"
    },
    {
        "code": "JDZ",
        "country": "CN",
        "state": "",
        "name": "Luojia Airport"
    },
    {
        "code": "JED",
        "country": "SA",
        "state": "",
        "name": "King Abdulaziz International Airport"
    },
    {
        "code": "JEE",
        "country": "HT",
        "state": "",
        "name": "Jeremie Airport"
    },
    {
        "code": "JEG",
        "country": "GL",
        "state": "",
        "name": "Aasiaat Airport"
    },
    {
        "code": "JEK",
        "country": "ZM",
        "state": "",
        "name": "Jeki Airstrip"
    },
    {
        "code": "JER",
        "country": "JE",
        "state": "",
        "name": "Jersey Airport"
    },
    {
        "code": "JFK",
        "country": "US",
        "state": "NY",
        "name": "John F. Kennedy International Airport"
    },
    {
        "code": "JFR",
        "country": "GL",
        "state": "",
        "name": "Paamiut Airport"
    },
    {
        "code": "JGA",
        "country": "IN",
        "state": "GJ",
        "name": "Govardhanpur Airport"
    },
    {
        "code": "JGB",
        "country": "IN",
        "state": "CT",
        "name": "Jagdalpur Airport"
    },
    {
        "code": "JGD",
        "country": "CN",
        "state": "",
        "name": "Jiagedaqi Airport"
    },
    {
        "code": "JGN",
        "country": "CN",
        "state": "",
        "name": "Jiayuguan Airport"
    },
    {
        "code": "JGO",
        "country": "GL",
        "state": "",
        "name": "Qeqertarsuaq Heliport"
    },
    {
        "code": "JGS",
        "country": "CN",
        "state": "",
        "name": "Jinggangshan Airport"
    },
    {
        "code": "JHB",
        "country": "MY",
        "state": "",
        "name": "Senai International Airport"
    },
    {
        "code": "JHG",
        "country": "CN",
        "state": "",
        "name": "Xishuangbanna Gasa International Airpor"
    },
    {
        "code": "JHM",
        "country": "US",
        "state": "HI",
        "name": "Kapalua Airport"
    },
    {
        "code": "JHS",
        "country": "GL",
        "state": "",
        "name": "Sisimiut Airport"
    },
    {
        "code": "JIA",
        "country": "BR",
        "state": "MT",
        "name": "Juina Airport"
    },
    {
        "code": "JIB",
        "country": "DJ",
        "state": "",
        "name": "Ambouli International Airport"
    },
    {
        "code": "JIC",
        "country": "CN",
        "state": "",
        "name": "Jinchuan Airport"
    },
    {
        "code": "JIJ",
        "country": "ET",
        "state": "",
        "name": "Jijiga Airport"
    },
    {
        "code": "JIK",
        "country": "GR",
        "state": "",
        "name": "Ikaria Island Airport"
    },
    {
        "code": "JIM",
        "country": "ET",
        "state": "",
        "name": "Aba Segud Airport"
    },
    {
        "code": "JIN",
        "country": "UG",
        "state": "",
        "name": "Jinja Airport"
    },
    {
        "code": "JIO",
        "country": "ID",
        "state": "",
        "name": "Jos Orno Imsula Airport"
    },
    {
        "code": "JIQ",
        "country": "CN",
        "state": "",
        "name": "Wulingshan Airport"
    },
    {
        "code": "JIU",
        "country": "CN",
        "state": "",
        "name": "Lushan Airport"
    },
    {
        "code": "JJD",
        "country": "BR",
        "state": "CE",
        "name": "Jericoacoara Airport"
    },
    {
        "code": "JJG",
        "country": "BR",
        "state": "SC",
        "name": "Humberto Bortoluzzi Airport"
    },
    {
        "code": "JJN",
        "country": "CN",
        "state": "",
        "name": "Jinjiang Airport"
    },
    {
        "code": "JJU",
        "country": "GL",
        "state": "",
        "name": "Qaqortoq Heliport"
    },
    {
        "code": "JKH",
        "country": "GR",
        "state": "",
        "name": "Omiros Airport"
    },
    {
        "code": "JKL",
        "country": "GR",
        "state": "",
        "name": "Kalymnos Island Airport"
    },
    {
        "code": "JKR",
        "country": "NP",
        "state": "",
        "name": "Janakpur Airport"
    },
    {
        "code": "JLN",
        "country": "US",
        "state": "MO",
        "name": "Joplin Regional Airport"
    },
    {
        "code": "JLR",
        "country": "IN",
        "state": "MP",
        "name": "Jabalpur Airport"
    },
    {
        "code": "JMA",
        "country": "BR",
        "state": "MG",
        "name": "Manhuacu Elias Breder Airport"
    },
    {
        "code": "JMJ",
        "country": "CN",
        "state": "",
        "name": "Jingmai Airport"
    },
    {
        "code": "JMK",
        "country": "GR",
        "state": "",
        "name": "Mykonos Airport"
    },
    {
        "code": "JMS",
        "country": "US",
        "state": "ND",
        "name": "Jamestown Regional Airport"
    },
    {
        "code": "JMU",
        "country": "CN",
        "state": "",
        "name": "Dongjiao Airport"
    },
    {
        "code": "JNB",
        "country": "ZA",
        "state": "",
        "name": "O.R. Tambo International Airport"
    },
    {
        "code": "JNG",
        "country": "CN",
        "state": "",
        "name": "Jining Da'an Airport"
    },
    {
        "code": "JNN",
        "country": "GL",
        "state": "",
        "name": "Nanortalik Heliport"
    },
    {
        "code": "JNS",
        "country": "GL",
        "state": "",
        "name": "Narsaq Heliport"
    },
    {
        "code": "JNU",
        "country": "US",
        "state": "AK",
        "name": "Juneau International Airport"
    },
    {
        "code": "JNX",
        "country": "GR",
        "state": "",
        "name": "Naxos Airport"
    },
    {
        "code": "JNZ",
        "country": "CN",
        "state": "",
        "name": "Jinzhouwan Airport"
    },
    {
        "code": "JOE",
        "country": "FI",
        "state": "",
        "name": "Joensuu Airport"
    },
    {
        "code": "JOG",
        "country": "ID",
        "state": "",
        "name": "Adisutjipto Airport"
    },
    {
        "code": "JOI",
        "country": "BR",
        "state": "SC",
        "name": "Lauro Carneiro Loyola Airport"
    },
    {
        "code": "JOS",
        "country": "NG",
        "state": "",
        "name": "Yakubu Gowon Airport"
    },
    {
        "code": "JPA",
        "country": "BR",
        "state": "PB",
        "name": "Castro PintoInternational Airport"
    },
    {
        "code": "JPE",
        "country": "BR",
        "state": "PA",
        "name": "Paragominas Airport"
    },
    {
        "code": "JPO",
        "country": "BR",
        "state": "PB",
        "name": "Brigadeiro Firmino Ayres"
    },
    {
        "code": "JPR",
        "country": "BR",
        "state": "RO",
        "name": "Jose Coleto Airport"
    },
    {
        "code": "JQA",
        "country": "GL",
        "state": "",
        "name": "Qaarsut Airport"
    },
    {
        "code": "JRG",
        "country": "IN",
        "state": "",
        "name": "Veer Surendra Sai Airport"
    },
    {
        "code": "JRH",
        "country": "IN",
        "state": "AS",
        "name": "Rowriah Airport"
    },
    {
        "code": "JRK",
        "country": "GL",
        "state": "",
        "name": "Arsuk Heliport"
    },
    {
        "code": "JRO",
        "country": "TZ",
        "state": "",
        "name": "Kilimanjaro International Airport"
    },
    {
        "code": "JRT",
        "country": "BR",
        "state": "PA",
        "name": "Juruti Airport"
    },
    {
        "code": "JSA",
        "country": "IN",
        "state": "RJ",
        "name": "Jaisalmer Airport"
    },
    {
        "code": "JSB",
        "country": "BR",
        "state": "CE",
        "name": "Walfrido Salmito de Almeida"
    },
    {
        "code": "JSH",
        "country": "GR",
        "state": "",
        "name": "Siteia Airport"
    },
    {
        "code": "JSI",
        "country": "GR",
        "state": "",
        "name": "Alex Papadiamantis Airport"
    },
    {
        "code": "JSJ",
        "country": "CN",
        "state": "",
        "name": "Jiansanjiang Airport"
    },
    {
        "code": "JSO",
        "country": "BR",
        "state": "CE",
        "name": "Aerodromo Publico Airport"
    },
    {
        "code": "JSR",
        "country": "BD",
        "state": "",
        "name": "Jessore Airport"
    },
    {
        "code": "JST",
        "country": "US",
        "state": "PA",
        "name": "John Murtha-Cambria County Airport"
    },
    {
        "code": "JSU",
        "country": "GL",
        "state": "",
        "name": "Maniitsoq Airport"
    },
    {
        "code": "JSY",
        "country": "GR",
        "state": "",
        "name": "Dimitrios Vikelas Airport"
    },
    {
        "code": "JTC",
        "country": "BR",
        "state": "SP",
        "name": "Moussa Nakhl Tobias Airport"
    },
    {
        "code": "JTR",
        "country": "GR",
        "state": "",
        "name": "Santorini Airport"
    },
    {
        "code": "JTY",
        "country": "GR",
        "state": "",
        "name": "Astypalaia Island Airport"
    },
    {
        "code": "JUB",
        "country": "SS",
        "state": "",
        "name": "Juba Airport"
    },
    {
        "code": "JUH",
        "country": "CN",
        "state": "",
        "name": "Jiuhuashan Airport"
    },
    {
        "code": "JUJ",
        "country": "AR",
        "state": "PJ",
        "name": "Gobernador H. Guzman Airport"
    },
    {
        "code": "JUK",
        "country": "GL",
        "state": "",
        "name": "Ukkusissat Heliport"
    },
    {
        "code": "JUL",
        "country": "PE",
        "state": "",
        "name": "Inco Mnco Capac International Airport"
    },
    {
        "code": "JUV",
        "country": "GL",
        "state": "",
        "name": "Upernavik Airport"
    },
    {
        "code": "JUZ",
        "country": "CN",
        "state": "",
        "name": "Quzhou Airport"
    },
    {
        "code": "JWN",
        "country": "IR",
        "state": "",
        "name": "Zanjan Airport"
    },
    {
        "code": "JXA",
        "country": "CN",
        "state": "",
        "name": "Xingkaihu Airport"
    },
    {
        "code": "JYR",
        "country": "IR",
        "state": "",
        "name": "Jiroft Airport"
    },
    {
        "code": "JYV",
        "country": "FI",
        "state": "",
        "name": "Jyvaskyla Airport"
    },
    {
        "code": "JZH",
        "country": "CN",
        "state": "",
        "name": "Jiuzhai Huanglong Airport"
    },
    {
        "code": "KAA",
        "country": "ZM",
        "state": "",
        "name": "Kasama Airport"
    },
    {
        "code": "KAB",
        "country": "ZW",
        "state": "",
        "name": "Kariba Airport"
    },
    {
        "code": "KAC",
        "country": "SY",
        "state": "",
        "name": "Kamishly Airport"
    },
    {
        "code": "KAD",
        "country": "NG",
        "state": "",
        "name": "Kaduna Airport"
    },
    {
        "code": "KAE",
        "country": "US",
        "state": "AK",
        "name": "Kake Sea Plane Base"
    },
    {
        "code": "KAJ",
        "country": "FI",
        "state": "",
        "name": "Kajaani Airport"
    },
    {
        "code": "KAL",
        "country": "US",
        "state": "AK",
        "name": "Kaltag Airport"
    },
    {
        "code": "KAN",
        "country": "NG",
        "state": "",
        "name": "Mallam Aminu Kano International Airport"
    },
    {
        "code": "KAO",
        "country": "FI",
        "state": "",
        "name": "Kuusamo Airport"
    },
    {
        "code": "KAW",
        "country": "MM",
        "state": "",
        "name": "Kawthaung Airport"
    },
    {
        "code": "KAZ",
        "country": "ID",
        "state": "",
        "name": "Kaubang Airport"
    },
    {
        "code": "KBC",
        "country": "US",
        "state": "AK",
        "name": "Birch Creek Airport"
    },
    {
        "code": "KBH",
        "country": "TZ",
        "state": "",
        "name": "Buzwagi Airport"
    },
    {
        "code": "KBL",
        "country": "AF",
        "state": "",
        "name": "Kabul International Airport"
    },
    {
        "code": "KBR",
        "country": "MY",
        "state": "",
        "name": "Sultan Ismail Petra Airport"
    },
    {
        "code": "KBU",
        "country": "ID",
        "state": "",
        "name": "Gusti Sjamsir Alam Airport"
    },
    {
        "code": "KBV",
        "country": "TH",
        "state": "",
        "name": "Krabi Airport"
    },
    {
        "code": "KCA",
        "country": "CN",
        "state": "",
        "name": "Quici Airport"
    },
    {
        "code": "KCG",
        "country": "US",
        "state": "AK",
        "name": "Chignik Airport"
    },
    {
        "code": "KCH",
        "country": "MY",
        "state": "",
        "name": "Kuching International Airport"
    },
    {
        "code": "KCK",
        "country": "RU",
        "state": "",
        "name": "Kirensk Airport"
    },
    {
        "code": "KCL",
        "country": "US",
        "state": "AK",
        "name": "Chignik Lagoon Airport"
    },
    {
        "code": "KCM",
        "country": "TR",
        "state": "",
        "name": "Kahramanmaras Airport"
    },
    {
        "code": "KCO",
        "country": "TR",
        "state": "",
        "name": "Cengiz Topel Airport"
    },
    {
        "code": "KCQ",
        "country": "US",
        "state": "AK",
        "name": "Chignik Lake Airport"
    },
    {
        "code": "KCZ",
        "country": "JP",
        "state": "",
        "name": "Kochi Airport"
    },
    {
        "code": "KDH",
        "country": "AF",
        "state": "",
        "name": "Kandahar International Airport"
    },
    {
        "code": "KDI",
        "country": "ID",
        "state": "",
        "name": "Halu Oleo Airport"
    },
    {
        "code": "KDL",
        "country": "EE",
        "state": "",
        "name": "Kardla Airport"
    },
    {
        "code": "KDM",
        "country": "MV",
        "state": "",
        "name": "Kaadedhdhoo Island Airport"
    },
    {
        "code": "KDO",
        "country": "MV",
        "state": "",
        "name": "Kadhdhoo Island Airport"
    },
    {
        "code": "KDU",
        "country": "PK",
        "state": "",
        "name": "Skardu Airport"
    },
    {
        "code": "KDV",
        "country": "FJ",
        "state": "",
        "name": "Vunisea Airport"
    },
    {
        "code": "KEA",
        "country": "TM",
        "state": "",
        "name": "Kerki International"
    },
    {
        "code": "KEF",
        "country": "IS",
        "state": "",
        "name": "Keflavik International Airport"
    },
    {
        "code": "KEI",
        "country": "ID",
        "state": "",
        "name": "Kepi Airport"
    },
    {
        "code": "KEJ",
        "country": "RU",
        "state": "",
        "name": "Kemerovo Airport"
    },
    {
        "code": "KEK",
        "country": "US",
        "state": "AK",
        "name": "Ekwok Airport"
    },
    {
        "code": "KEM",
        "country": "FI",
        "state": "",
        "name": "Kemi/Tornio Airport"
    },
    {
        "code": "KEO",
        "country": "CI",
        "state": "",
        "name": "Odienne Airport"
    },
    {
        "code": "KEP",
        "country": "NP",
        "state": "",
        "name": "Nepalganj Airport"
    },
    {
        "code": "KER",
        "country": "IR",
        "state": "",
        "name": "Kerman Airport"
    },
    {
        "code": "KET",
        "country": "MM",
        "state": "",
        "name": "Kengtung Airport"
    },
    {
        "code": "KEW",
        "country": "CA",
        "state": "ON",
        "name": "Keewaywin Airport"
    },
    {
        "code": "KFP",
        "country": "US",
        "state": "AK",
        "name": "False Pass Airport"
    },
    {
        "code": "KFS",
        "country": "TR",
        "state": "",
        "name": "Kastamonu Airport"
    },
    {
        "code": "KGA",
        "country": "CD",
        "state": "",
        "name": "Kananga Airport"
    },
    {
        "code": "KGC",
        "country": "AU",
        "state": "SA",
        "name": "Kingscote Airport"
    },
    {
        "code": "KGD",
        "country": "RU",
        "state": "",
        "name": "Khrabrovo Airport"
    },
    {
        "code": "KGE",
        "country": "SB",
        "state": "",
        "name": "Kaghau Island Airport"
    },
    {
        "code": "KGF",
        "country": "KZ",
        "state": "",
        "name": "Sary-Arka Airport"
    },
    {
        "code": "KGI",
        "country": "AU",
        "state": "WA",
        "name": "Kalgoorlie-Boulder Airport"
    },
    {
        "code": "KGK",
        "country": "US",
        "state": "AK",
        "name": "Koliganek Airport"
    },
    {
        "code": "KGL",
        "country": "RW",
        "state": "",
        "name": "Kigali International Airport"
    },
    {
        "code": "KGP",
        "country": "RU",
        "state": "",
        "name": "Kogalym Airport"
    },
    {
        "code": "KGQ",
        "country": "GL",
        "state": "",
        "name": "Kangersuatsiaq Heliport"
    },
    {
        "code": "KGS",
        "country": "GR",
        "state": "",
        "name": "Ippokratis Airport"
    },
    {
        "code": "KGT",
        "country": "CN",
        "state": "",
        "name": "Kangding Airport"
    },
    {
        "code": "KGV",
        "country": "AT",
        "state": "",
        "name": "Klagenfurt Railway Station"
    },
    {
        "code": "KHD",
        "country": "IR",
        "state": "",
        "name": "Khorramabad Airport"
    },
    {
        "code": "KHG",
        "country": "CN",
        "state": "",
        "name": "Kashi Airport"
    },
    {
        "code": "KHH",
        "country": "TW",
        "state": "",
        "name": "Kaohsiung International Airport"
    },
    {
        "code": "KHI",
        "country": "PK",
        "state": "",
        "name": "JinnahInternational Airport"
    },
    {
        "code": "KHM",
        "country": "MM",
        "state": "",
        "name": "Khamti Airport"
    },
    {
        "code": "KHN",
        "country": "CN",
        "state": "",
        "name": "Changbei International Airport"
    },
    {
        "code": "KHQ",
        "country": "GL",
        "state": "",
        "name": "Kullorsuaq Heliport"
    },
    {
        "code": "KHS",
        "country": "OM",
        "state": "",
        "name": "Khasab Airport"
    },
    {
        "code": "KHV",
        "country": "RU",
        "state": "",
        "name": "Novy Airport"
    },
    {
        "code": "KHX",
        "country": "UG",
        "state": "",
        "name": "Kihihi Airport"
    },
    {
        "code": "KHY",
        "country": "IR",
        "state": "",
        "name": "Khoy Airport"
    },
    {
        "code": "KHZ",
        "country": "PF",
        "state": "",
        "name": "Kauehi Airport"
    },
    {
        "code": "KID",
        "country": "SE",
        "state": "",
        "name": "Kristianstad Airport"
    },
    {
        "code": "KIE",
        "country": "PG",
        "state": "",
        "name": "Aropa Airport"
    },
    {
        "code": "KIF",
        "country": "CA",
        "state": "ON",
        "name": "Kingfisher Lake Airport"
    },
    {
        "code": "KIH",
        "country": "IR",
        "state": "",
        "name": "Kish Island Airport"
    },
    {
        "code": "KIJ",
        "country": "JP",
        "state": "",
        "name": "Niigata Airport"
    },
    {
        "code": "KIK",
        "country": "IQ",
        "state": "",
        "name": "KIRKUK INTL. AIRPORT"
    },
    {
        "code": "KIM",
        "country": "ZA",
        "state": "",
        "name": "Kimberley Airport"
    },
    {
        "code": "KIN",
        "country": "JM",
        "state": "",
        "name": "Norman Manley International Airport"
    },
    {
        "code": "KIR",
        "country": "IE",
        "state": "",
        "name": "Kerry Airport"
    },
    {
        "code": "KIS",
        "country": "KE",
        "state": "",
        "name": "Kisumu Airport"
    },
    {
        "code": "KIT",
        "country": "GR",
        "state": "",
        "name": "Alexandros A. Onassis Airport"
    },
    {
        "code": "KIX",
        "country": "JP",
        "state": "",
        "name": "Kansai International Airport"
    },
    {
        "code": "KJA",
        "country": "RU",
        "state": "",
        "name": "Krasnoyarsk Airport"
    },
    {
        "code": "KJB",
        "country": "IN",
        "state": "AP",
        "name": "Kurnool Airport"
    },
    {
        "code": "KJH",
        "country": "CN",
        "state": "",
        "name": "Kai Li Airport"
    },
    {
        "code": "KJI",
        "country": "CN",
        "state": "",
        "name": "Kanas Airport"
    },
    {
        "code": "KJR",
        "country": "DE",
        "state": "",
        "name": "Karlsruhe Hbf Railway Station"
    },
    {
        "code": "KJT",
        "country": "ID",
        "state": "",
        "name": "Kertajati International Airport"
    },
    {
        "code": "KKA",
        "country": "US",
        "state": "AK",
        "name": "Alfred Adams Airport"
    },
    {
        "code": "KKB",
        "country": "US",
        "state": "AK",
        "name": "Kitoi Bay Sea Plane Base"
    },
    {
        "code": "KKC",
        "country": "TH",
        "state": "",
        "name": "Khon Kaen Airport"
    },
    {
        "code": "KKE",
        "country": "NZ",
        "state": "",
        "name": "Bay of Islands Airport"
    },
    {
        "code": "KKH",
        "country": "US",
        "state": "AK",
        "name": "Kongiganak Airport"
    },
    {
        "code": "KKJ",
        "country": "JP",
        "state": "",
        "name": "Kitakyushu Airport"
    },
    {
        "code": "KKN",
        "country": "NO",
        "state": "",
        "name": "Hoybuktmoen Airport"
    },
    {
        "code": "KKQ",
        "country": "RU",
        "state": "",
        "name": "Krasnoselkup Airport"
    },
    {
        "code": "KKR",
        "country": "PF",
        "state": "",
        "name": "Kaukura Airport"
    },
    {
        "code": "KKX",
        "country": "JP",
        "state": "",
        "name": "Kikai Airport"
    },
    {
        "code": "KLF",
        "country": "RU",
        "state": "",
        "name": "Grabtsevo Airport"
    },
    {
        "code": "KLH",
        "country": "IN",
        "state": "MH",
        "name": "Kolhapur Airport"
    },
    {
        "code": "KLL",
        "country": "US",
        "state": "AK",
        "name": "Levelock Airport"
    },
    {
        "code": "KLN",
        "country": "US",
        "state": "AK",
        "name": "Larsen Bay Airport"
    },
    {
        "code": "KLO",
        "country": "PH",
        "state": "",
        "name": "Kalibo International Airport"
    },
    {
        "code": "KLR",
        "country": "SE",
        "state": "",
        "name": "Kalmar Airport"
    },
    {
        "code": "KLU",
        "country": "AT",
        "state": "",
        "name": "Klagenfurt Airport"
    },
    {
        "code": "KLW",
        "country": "US",
        "state": "AK",
        "name": "Klawock Airport"
    },
    {
        "code": "KLX",
        "country": "GR",
        "state": "",
        "name": "Kalamata Airport"
    },
    {
        "code": "KME",
        "country": "RW",
        "state": "",
        "name": "Kamembe Airport"
    },
    {
        "code": "KMG",
        "country": "CN",
        "state": "",
        "name": "Changshui International Airport"
    },
    {
        "code": "KMI",
        "country": "JP",
        "state": "",
        "name": "Miyazaki Airport"
    },
    {
        "code": "KMJ",
        "country": "JP",
        "state": "",
        "name": "Kumamoto Airport"
    },
    {
        "code": "KMO",
        "country": "US",
        "state": "AK",
        "name": "Manokotak Sea Plane Base"
    },
    {
        "code": "KMQ",
        "country": "JP",
        "state": "",
        "name": "Komatsu Airport"
    },
    {
        "code": "KMS",
        "country": "GH",
        "state": "",
        "name": "Kumasi Airport"
    },
    {
        "code": "KMU",
        "country": "SO",
        "state": "",
        "name": "Kisimayu Airport"
    },
    {
        "code": "KMV",
        "country": "MM",
        "state": "",
        "name": "Kalemyo Airport"
    },
    {
        "code": "KMY",
        "country": "US",
        "state": "AK",
        "name": "Moser Bay Sea Plane Base"
    },
    {
        "code": "KND",
        "country": "CD",
        "state": "",
        "name": "Kindu Airport"
    },
    {
        "code": "KNG",
        "country": "ID",
        "state": "",
        "name": "Kaimana Airport"
    },
    {
        "code": "KNH",
        "country": "TW",
        "state": "",
        "name": "Shangyi Airport"
    },
    {
        "code": "KNK",
        "country": "US",
        "state": "AK",
        "name": "Kokhanok Airport"
    },
    {
        "code": "KNO",
        "country": "ID",
        "state": "",
        "name": "Kuala Namu Airport"
    },
    {
        "code": "KNQ",
        "country": "NC",
        "state": "",
        "name": "Kone Airport"
    },
    {
        "code": "KNS",
        "country": "AU",
        "state": "TS",
        "name": "King Island Airport"
    },
    {
        "code": "KNU",
        "country": "IN",
        "state": "UP",
        "name": "Kanpur Airport"
    },
    {
        "code": "KNW",
        "country": "US",
        "state": "AK",
        "name": "New Stuyahok Airport"
    },
    {
        "code": "KNX",
        "country": "AU",
        "state": "WA",
        "name": "Kununurra Airport"
    },
    {
        "code": "KNY",
        "country": "RU",
        "state": "",
        "name": "Kodinsk Airport"
    },
    {
        "code": "KOA",
        "country": "US",
        "state": "HI",
        "name": "Keahole Airport"
    },
    {
        "code": "KOC",
        "country": "NC",
        "state": "",
        "name": "Koumac Airport"
    },
    {
        "code": "KOE",
        "country": "ID",
        "state": "",
        "name": "El Tari Airport"
    },
    {
        "code": "KOI",
        "country": "GB",
        "state": "",
        "name": "Kirkwall Airport"
    },
    {
        "code": "KOJ",
        "country": "JP",
        "state": "",
        "name": "Kagoshima Airport"
    },
    {
        "code": "KOK",
        "country": "FI",
        "state": "",
        "name": "Kruunupyy Airport"
    },
    {
        "code": "KOO",
        "country": "CD",
        "state": "",
        "name": "Kongolo Airport"
    },
    {
        "code": "KOP",
        "country": "TH",
        "state": "",
        "name": "Nakhon Phanom Airport"
    },
    {
        "code": "KOS",
        "country": "KH",
        "state": "",
        "name": "Sihanoukville International Airport"
    },
    {
        "code": "KOT",
        "country": "US",
        "state": "AK",
        "name": "Kotlik Airport"
    },
    {
        "code": "KOV",
        "country": "KZ",
        "state": "",
        "name": "Kokshetau Airport"
    },
    {
        "code": "KOW",
        "country": "CN",
        "state": "",
        "name": "Huangjin Airport"
    },
    {
        "code": "KOY",
        "country": "US",
        "state": "AK",
        "name": "Olga Bay Sea Plane Base"
    },
    {
        "code": "KOZ",
        "country": "US",
        "state": "AK",
        "name": "Ouzinkie Airport"
    },
    {
        "code": "KPN",
        "country": "US",
        "state": "AK",
        "name": "Kipnuk Airport"
    },
    {
        "code": "KPO",
        "country": "KR",
        "state": "",
        "name": "Pohang Airport"
    },
    {
        "code": "KPR",
        "country": "US",
        "state": "AK",
        "name": "Port Williams Sea Plane Base"
    },
    {
        "code": "KPV",
        "country": "US",
        "state": "AK",
        "name": "Perryville Airport"
    },
    {
        "code": "KPW",
        "country": "RU",
        "state": "",
        "name": "Keperveyem Airport"
    },
    {
        "code": "KPY",
        "country": "US",
        "state": "AK",
        "name": "Port Bailey Sea Plane Base"
    },
    {
        "code": "KQA",
        "country": "US",
        "state": "AK",
        "name": "Akutan Airport"
    },
    {
        "code": "KQT",
        "country": "TJ",
        "state": "",
        "name": "Qurghonteppa International Airport"
    },
    {
        "code": "KRB",
        "country": "AU",
        "state": "QL",
        "name": "Karumba Airport"
    },
    {
        "code": "KRF",
        "country": "SE",
        "state": "",
        "name": "Kramfors/Solleftea Airport"
    },
    {
        "code": "KRK",
        "country": "PL",
        "state": "",
        "name": "John Paul II - Balice International Air"
    },
    {
        "code": "KRL",
        "country": "CN",
        "state": "",
        "name": "Korla Airport"
    },
    {
        "code": "KRN",
        "country": "SE",
        "state": "",
        "name": "Kiruna Airport"
    },
    {
        "code": "KRO",
        "country": "RU",
        "state": "",
        "name": "Kurgan Airport"
    },
    {
        "code": "KRP",
        "country": "DK",
        "state": "",
        "name": "Midtjyllands Airport"
    },
    {
        "code": "KRR",
        "country": "RU",
        "state": "",
        "name": "Pashkovsky Airport"
    },
    {
        "code": "KRS",
        "country": "NO",
        "state": "",
        "name": "Kjevik Airport"
    },
    {
        "code": "KRT",
        "country": "SD",
        "state": "",
        "name": "Khartoum International"
    },
    {
        "code": "KRW",
        "country": "TM",
        "state": "",
        "name": "Turkmenbashi Airport"
    },
    {
        "code": "KRY",
        "country": "CN",
        "state": "",
        "name": "Karamay Airport"
    },
    {
        "code": "KSA",
        "country": "FM",
        "state": "",
        "name": "Kosrae International Airport"
    },
    {
        "code": "KSC",
        "country": "SK",
        "state": "",
        "name": "Kosice Airport"
    },
    {
        "code": "KSE",
        "country": "UG",
        "state": "",
        "name": "Kasese Airport"
    },
    {
        "code": "KSF",
        "country": "DE",
        "state": "",
        "name": "Calden"
    },
    {
        "code": "KSH",
        "country": "IR",
        "state": "",
        "name": "Shahid Ashrafi Esfahani Airport"
    },
    {
        "code": "KSJ",
        "country": "GR",
        "state": "",
        "name": "Kasos Island Airport"
    },
    {
        "code": "KSM",
        "country": "US",
        "state": "AK",
        "name": "Saint Mary's Airport"
    },
    {
        "code": "KSN",
        "country": "KZ",
        "state": "",
        "name": "Kostanay Airport"
    },
    {
        "code": "KSO",
        "country": "GR",
        "state": "",
        "name": "Aristotelis Airport"
    },
    {
        "code": "KSQ",
        "country": "UZ",
        "state": "",
        "name": "KARSHI INTL. AIRPORT"
    },
    {
        "code": "KSR",
        "country": "ID",
        "state": "",
        "name": "H. Aroeppala Airport"
    },
    {
        "code": "KSU",
        "country": "NO",
        "state": "",
        "name": "Kvernberget Airport"
    },
    {
        "code": "KSY",
        "country": "TR",
        "state": "",
        "name": "Kars Airport"
    },
    {
        "code": "KSZ",
        "country": "RU",
        "state": "",
        "name": "Kotlas Airport"
    },
    {
        "code": "KTA",
        "country": "AU",
        "state": "WA",
        "name": "Karratha Airport"
    },
    {
        "code": "KTD",
        "country": "JP",
        "state": "",
        "name": "Kitadaito Airport"
    },
    {
        "code": "KTG",
        "country": "ID",
        "state": "",
        "name": "Rahadi Osman Airport"
    },
    {
        "code": "KTL",
        "country": "KE",
        "state": "",
        "name": "Kitale Airport"
    },
    {
        "code": "KTM",
        "country": "NP",
        "state": "",
        "name": "Tribhuvan International Airport"
    },
    {
        "code": "KTN",
        "country": "US",
        "state": "AK",
        "name": "Ketchikan International Airport"
    },
    {
        "code": "KTR",
        "country": "AU",
        "state": "NT",
        "name": "Royal Australian Air Force Base Tindal"
    },
    {
        "code": "KTS",
        "country": "US",
        "state": "AK",
        "name": "Brevig Mission Airport"
    },
    {
        "code": "KTT",
        "country": "FI",
        "state": "",
        "name": "Kittila Airport"
    },
    {
        "code": "KTW",
        "country": "PL",
        "state": "",
        "name": "Pyrzowice Airport"
    },
    {
        "code": "KUA",
        "country": "MY",
        "state": "",
        "name": "Sultan Haji Ahmad Shah Airport"
    },
    {
        "code": "KUC",
        "country": "KI",
        "state": "",
        "name": "Kuria Airport"
    },
    {
        "code": "KUF",
        "country": "RU",
        "state": "",
        "name": "Kurumoch International Airport"
    },
    {
        "code": "KUG",
        "country": "AU",
        "state": "QL",
        "name": "Kubin Airport"
    },
    {
        "code": "KUH",
        "country": "JP",
        "state": "",
        "name": "Kushiro Airport"
    },
    {
        "code": "KUK",
        "country": "US",
        "state": "AK",
        "name": "Kasigluk Airport"
    },
    {
        "code": "KUL",
        "country": "MY",
        "state": "",
        "name": "Kuala Lumpur International Airport"
    },
    {
        "code": "KUM",
        "country": "JP",
        "state": "",
        "name": "Yakushima Airport"
    },
    {
        "code": "KUN",
        "country": "LT",
        "state": "",
        "name": "Kaunas International Airport"
    },
    {
        "code": "KUO",
        "country": "FI",
        "state": "",
        "name": "Kuopio Airport"
    },
    {
        "code": "KUS",
        "country": "GL",
        "state": "",
        "name": "Kulusuk Airport"
    },
    {
        "code": "KUT",
        "country": "GE",
        "state": "",
        "name": "Kutaisi International Airport"
    },
    {
        "code": "KUU",
        "country": "IN",
        "state": "HP",
        "name": "Bhuntar Airport"
    },
    {
        "code": "KUV",
        "country": "KR",
        "state": "",
        "name": "Gunsan Airport"
    },
    {
        "code": "KUZ",
        "country": "GL",
        "state": "",
        "name": "Kuummiut Heliport"
    },
    {
        "code": "KVA",
        "country": "GR",
        "state": "",
        "name": "Megas Alexandros Airport"
    },
    {
        "code": "KVC",
        "country": "US",
        "state": "AK",
        "name": "King Cove Airport"
    },
    {
        "code": "KVG",
        "country": "PG",
        "state": "",
        "name": "Kavieng Airport"
    },
    {
        "code": "KVK",
        "country": "RU",
        "state": "",
        "name": "Khibiny Airport"
    },
    {
        "code": "KVL",
        "country": "US",
        "state": "AK",
        "name": "Kivalina Airport"
    },
    {
        "code": "KVO",
        "country": "RS",
        "state": "",
        "name": "Morava Airport"
    },
    {
        "code": "KVR",
        "country": "RU",
        "state": "",
        "name": "Kavalerovo Airport"
    },
    {
        "code": "KVX",
        "country": "RU",
        "state": "",
        "name": "Pobedilovo Airport"
    },
    {
        "code": "KWA",
        "country": "MH",
        "state": "",
        "name": "Bucholz Army Air Field"
    },
    {
        "code": "KWE",
        "country": "CN",
        "state": "",
        "name": "Longdongbao International Airport"
    },
    {
        "code": "KWI",
        "country": "KW",
        "state": "",
        "name": "Kuwait International Airport"
    },
    {
        "code": "KWJ",
        "country": "KR",
        "state": "",
        "name": "Gwangju Airport"
    },
    {
        "code": "KWK",
        "country": "US",
        "state": "AK",
        "name": "Kwigillingok Airport"
    },
    {
        "code": "KWL",
        "country": "CN",
        "state": "",
        "name": "Liangjiang International Airport"
    },
    {
        "code": "KWM",
        "country": "AU",
        "state": "QL",
        "name": "Kowanyama Airport"
    },
    {
        "code": "KWN",
        "country": "US",
        "state": "AK",
        "name": "Quinhagak Airport"
    },
    {
        "code": "KWP",
        "country": "US",
        "state": "AK",
        "name": "West Point Village Sea Plane Base"
    },
    {
        "code": "KWQ",
        "country": "DE",
        "state": "",
        "name": "Wilhelmshoehe Railway Station"
    },
    {
        "code": "KWZ",
        "country": "CD",
        "state": "",
        "name": "Kolwezi Airport"
    },
    {
        "code": "KXB",
        "country": "ID",
        "state": "",
        "name": "Sangia Nibandera"
    },
    {
        "code": "KXF",
        "country": "FJ",
        "state": "",
        "name": "Koro Island Airport"
    },
    {
        "code": "KXN",
        "country": "GB",
        "state": "",
        "name": "Oxenholme Railway Station"
    },
    {
        "code": "KXO",
        "country": "UG",
        "state": "",
        "name": "Kisoro Airport"
    },
    {
        "code": "KXU",
        "country": "PF",
        "state": "",
        "name": "Katiu Airport"
    },
    {
        "code": "KYA",
        "country": "TR",
        "state": "",
        "name": "Konya Airport"
    },
    {
        "code": "KYK",
        "country": "US",
        "state": "AK",
        "name": "Karluk Airport"
    },
    {
        "code": "KYN",
        "country": "GB",
        "state": "",
        "name": "Milton Keynes Central Railway Station"
    },
    {
        "code": "KYP",
        "country": "MM",
        "state": "",
        "name": "Kyaukpyu Airport"
    },
    {
        "code": "KYU",
        "country": "US",
        "state": "AK",
        "name": "Koyukuk Airport"
    },
    {
        "code": "KYZ",
        "country": "RU",
        "state": "",
        "name": "Kyzyl Airport"
    },
    {
        "code": "KZB",
        "country": "US",
        "state": "AK",
        "name": "Zachar Bay Sea Plane Base"
    },
    {
        "code": "KZI",
        "country": "GR",
        "state": "",
        "name": "Filippos Airport"
    },
    {
        "code": "KZN",
        "country": "RU",
        "state": "",
        "name": "Kazan International Airport"
    },
    {
        "code": "KZO",
        "country": "KZ",
        "state": "",
        "name": "Kyzylorda Airport"
    },
    {
        "code": "KZR",
        "country": "TR",
        "state": "",
        "name": "Zafer Airport"
    },
    {
        "code": "KZS",
        "country": "GR",
        "state": "",
        "name": "Megisti Airport"
    },
    {
        "code": "LAB",
        "country": "PG",
        "state": "",
        "name": "Lab Lab Airport"
    },
    {
        "code": "LAD",
        "country": "AO",
        "state": "",
        "name": "4 de Fevereiro Airport"
    },
    {
        "code": "LAE",
        "country": "PG",
        "state": "",
        "name": "Nadzab Airport"
    },
    {
        "code": "LAF",
        "country": "US",
        "state": "IN",
        "name": "Purdue University Airport"
    },
    {
        "code": "LAH",
        "country": "ID",
        "state": "",
        "name": "Oesman Sadik Airport"
    },
    {
        "code": "LAK",
        "country": "CA",
        "state": "NT",
        "name": "Freddie Carmichael Airport"
    },
    {
        "code": "LAN",
        "country": "US",
        "state": "MI",
        "name": "LansingCapital Region International Ai"
    },
    {
        "code": "LAO",
        "country": "PH",
        "state": "",
        "name": "Laoag International Airport"
    },
    {
        "code": "LAP",
        "country": "MX",
        "state": "",
        "name": "Manuel Marquez de Leon Airport"
    },
    {
        "code": "LAQ",
        "country": "LY",
        "state": "",
        "name": "Labraq Airport"
    },
    {
        "code": "LAR",
        "country": "US",
        "state": "WY",
        "name": "Laramie Regional Airport"
    },
    {
        "code": "LAS",
        "country": "US",
        "state": "NV",
        "name": "HARRY REID INTL AIRPORT"
    },
    {
        "code": "LAU",
        "country": "KE",
        "state": "",
        "name": "Manda Airport"
    },
    {
        "code": "LAV",
        "country": "FR",
        "state": "",
        "name": "Gare Laval SNCF Station"
    },
    {
        "code": "LAW",
        "country": "US",
        "state": "OK",
        "name": "Lawton/Fort Sill Regional Airport"
    },
    {
        "code": "LAX",
        "country": "US",
        "state": "CA",
        "name": "Los Angeles International Airport"
    },
    {
        "code": "LBA",
        "country": "GB",
        "state": "",
        "name": "Leeds/Bradford Airport"
    },
    {
        "code": "LBB",
        "country": "US",
        "state": "TX",
        "name": "Preston Smith International Airport"
    },
    {
        "code": "LBD",
        "country": "TJ",
        "state": "",
        "name": "Khujand International Airport"
    },
    {
        "code": "LBE",
        "country": "US",
        "state": "PA",
        "name": "Arnold Palmer Regional Airport"
    },
    {
        "code": "LBF",
        "country": "US",
        "state": "NE",
        "name": "North Platte Regional Airport (Lee Bird"
    },
    {
        "code": "LBJ",
        "country": "ID",
        "state": "",
        "name": "Komodo Airport"
    },
    {
        "code": "LBL",
        "country": "US",
        "state": "KS",
        "name": "Mid-America Regional Airport"
    },
    {
        "code": "LBP",
        "country": "MY",
        "state": "",
        "name": "Long Banga Airport"
    },
    {
        "code": "LBR",
        "country": "BR",
        "state": "AM",
        "name": "Labrea Airport"
    },
    {
        "code": "LBS",
        "country": "FJ",
        "state": "",
        "name": "Labasa Airport"
    },
    {
        "code": "LBU",
        "country": "MY",
        "state": "",
        "name": "Labuan Airport"
    },
    {
        "code": "LBV",
        "country": "GA",
        "state": "",
        "name": "Leon M'ba International Airport"
    },
    {
        "code": "LCA",
        "country": "CY",
        "state": "",
        "name": "Larnaca Airport"
    },
    {
        "code": "LCE",
        "country": "HN",
        "state": "",
        "name": "Goloson International Airport"
    },
    {
        "code": "LCG",
        "country": "ES",
        "state": "",
        "name": "A Coruna Airport"
    },
    {
        "code": "LCH",
        "country": "US",
        "state": "LA",
        "name": "Lake Charles Regional Airport"
    },
    {
        "code": "LCJ",
        "country": "PL",
        "state": "",
        "name": "Wladyslaw Reymont Airport"
    },
    {
        "code": "LCK",
        "country": "US",
        "state": "OH",
        "name": "Rickenbacker International Airport"
    },
    {
        "code": "LCR",
        "country": "CO",
        "state": "",
        "name": "La Chorrera Airport"
    },
    {
        "code": "LCX",
        "country": "CN",
        "state": "",
        "name": "Guanzhishan Airport"
    },
    {
        "code": "LCY",
        "country": "GB",
        "state": "",
        "name": "London City Airport"
    },
    {
        "code": "LCZ",
        "country": "IT",
        "state": "",
        "name": "Lecce Railway Station"
    },
    {
        "code": "LDB",
        "country": "BR",
        "state": "PR",
        "name": "Jose Richa Airport"
    },
    {
        "code": "LDE",
        "country": "FR",
        "state": "",
        "name": "Pyrenees Airport"
    },
    {
        "code": "LDH",
        "country": "AU",
        "state": "NS",
        "name": "Lord Howe Island Airport"
    },
    {
        "code": "LDS",
        "country": "CN",
        "state": "",
        "name": "Lindu Airport"
    },
    {
        "code": "LDU",
        "country": "MY",
        "state": "",
        "name": "Lahad Datu Airport"
    },
    {
        "code": "LDY",
        "country": "GB",
        "state": "",
        "name": "Eglinton Airport"
    },
    {
        "code": "LEA",
        "country": "AU",
        "state": "WA",
        "name": "Learmonth Airport"
    },
    {
        "code": "LEB",
        "country": "US",
        "state": "NH",
        "name": "Lebanon Municipal Airport"
    },
    {
        "code": "LEC",
        "country": "BR",
        "state": "BA",
        "name": "Horacio de Mattos Airport"
    },
    {
        "code": "LED",
        "country": "RU",
        "state": "",
        "name": "Pulkovo Airport"
    },
    {
        "code": "LEI",
        "country": "ES",
        "state": "",
        "name": "Almeria Airport"
    },
    {
        "code": "LEJ",
        "country": "DE",
        "state": "",
        "name": "Leipzig/Halle Airport"
    },
    {
        "code": "LEN",
        "country": "ES",
        "state": "",
        "name": "Leon Airport"
    },
    {
        "code": "LEQ",
        "country": "GB",
        "state": "",
        "name": "Saint Just Airport"
    },
    {
        "code": "LET",
        "country": "CO",
        "state": "",
        "name": "Alfredo V. Cobb International Airport"
    },
    {
        "code": "LEU",
        "country": "ES",
        "state": "",
        "name": "Seo de Urgel Airport"
    },
    {
        "code": "LEX",
        "country": "US",
        "state": "KY",
        "name": "Blue Grass Airport"
    },
    {
        "code": "LFQ",
        "country": "CN",
        "state": "",
        "name": "Qiaoli Airport"
    },
    {
        "code": "LFR",
        "country": "VE",
        "state": "",
        "name": "La Fria Airport"
    },
    {
        "code": "LFT",
        "country": "US",
        "state": "LA",
        "name": "Lafayette Regional Airport"
    },
    {
        "code": "LFW",
        "country": "TG",
        "state": "",
        "name": "G. Eyadema International Airport"
    },
    {
        "code": "LGA",
        "country": "US",
        "state": "NY",
        "name": "LaGuardia Airport"
    },
    {
        "code": "LGB",
        "country": "US",
        "state": "CA",
        "name": "Daugherty Field"
    },
    {
        "code": "LGG",
        "country": "BE",
        "state": "",
        "name": "Liege Airport"
    },
    {
        "code": "LGI",
        "country": "BS",
        "state": "",
        "name": "Deadmans Cay Airport"
    },
    {
        "code": "LGK",
        "country": "MY",
        "state": "",
        "name": "Langkawi International Airport"
    },
    {
        "code": "LGL",
        "country": "MY",
        "state": "",
        "name": "Long Lellang Airport"
    },
    {
        "code": "LGW",
        "country": "GB",
        "state": "",
        "name": "Gatwick Airport"
    },
    {
        "code": "LGZ",
        "country": "CN",
        "state": "",
        "name": "Shannan Longzi Airport"
    },
    {
        "code": "LHE",
        "country": "PK",
        "state": "",
        "name": "Allama Iqbal International Airport"
    },
    {
        "code": "LHG",
        "country": "AU",
        "state": "NS",
        "name": "Lightning Ridge Airport"
    },
    {
        "code": "LHN",
        "country": "BR",
        "state": "ES",
        "name": "Linhares Municipal Airport"
    },
    {
        "code": "LHR",
        "country": "GB",
        "state": "",
        "name": "Heathrow Airport"
    },
    {
        "code": "LHW",
        "country": "CN",
        "state": "",
        "name": "Zhongchuan Airport"
    },
    {
        "code": "LIF",
        "country": "NC",
        "state": "",
        "name": "Ouanaham Airport"
    },
    {
        "code": "LIG",
        "country": "FR",
        "state": "",
        "name": "Bellegarde Airport"
    },
    {
        "code": "LIH",
        "country": "US",
        "state": "HI",
        "name": "Lihue Airport"
    },
    {
        "code": "LIL",
        "country": "FR",
        "state": "",
        "name": "Lesquin Airport"
    },
    {
        "code": "LIM",
        "country": "PE",
        "state": "",
        "name": "Jorge Chavez International Airport"
    },
    {
        "code": "LIN",
        "country": "IT",
        "state": "",
        "name": "Linate Airport"
    },
    {
        "code": "LIO",
        "country": "CR",
        "state": "",
        "name": "Limon International Airport"
    },
    {
        "code": "LIR",
        "country": "CR",
        "state": "",
        "name": "Guanacaste Airport"
    },
    {
        "code": "LIS",
        "country": "PT",
        "state": "",
        "name": "Lisbon Airport"
    },
    {
        "code": "LIT",
        "country": "US",
        "state": "AR",
        "name": "Bill and Hillary Clinton National Airpo"
    },
    {
        "code": "LJG",
        "country": "CN",
        "state": "",
        "name": "Sanyi Airport"
    },
    {
        "code": "LJU",
        "country": "SI",
        "state": "",
        "name": "Joze Pucnik Airport"
    },
    {
        "code": "LKA",
        "country": "ID",
        "state": "",
        "name": "Gewayantana Airport"
    },
    {
        "code": "LKB",
        "country": "FJ",
        "state": "",
        "name": "Lakeba Island Airport"
    },
    {
        "code": "LKE",
        "country": "US",
        "state": "WA",
        "name": "Lake Union Sea Plane Base"
    },
    {
        "code": "LKH",
        "country": "MY",
        "state": "",
        "name": "Long Akah Airport"
    },
    {
        "code": "LKL",
        "country": "NO",
        "state": "",
        "name": "Banak Airport"
    },
    {
        "code": "LKN",
        "country": "NO",
        "state": "",
        "name": "Leknes Airport"
    },
    {
        "code": "LKO",
        "country": "IN",
        "state": "UP",
        "name": "Chaudhary Charan Singh Airport"
    },
    {
        "code": "LKY",
        "country": "TZ",
        "state": "",
        "name": "Lake Manyara Airport"
    },
    {
        "code": "LLA",
        "country": "SE",
        "state": "",
        "name": "Kallax Airport"
    },
    {
        "code": "LLB",
        "country": "CN",
        "state": "",
        "name": "Libo Airport"
    },
    {
        "code": "LLF",
        "country": "CN",
        "state": "",
        "name": "Lingling Airport"
    },
    {
        "code": "LLI",
        "country": "ET",
        "state": "",
        "name": "Lalibela Airport"
    },
    {
        "code": "LLJ",
        "country": "ID",
        "state": "",
        "name": "Silampari Airport"
    },
    {
        "code": "LLM",
        "country": "SB",
        "state": "",
        "name": "Lomlom Airport"
    },
    {
        "code": "LLO",
        "country": "ID",
        "state": "",
        "name": "Lagaligo Airport"
    },
    {
        "code": "LLU",
        "country": "GL",
        "state": "",
        "name": "Alluitsup Paa Heliport"
    },
    {
        "code": "LLV",
        "country": "CN",
        "state": "",
        "name": "Luliang Airport"
    },
    {
        "code": "LLW",
        "country": "MW",
        "state": "",
        "name": "Kamuzu International Airport"
    },
    {
        "code": "LMA",
        "country": "US",
        "state": "AK",
        "name": "Lake Minchumina Airport"
    },
    {
        "code": "LMC",
        "country": "CO",
        "state": "",
        "name": "La Macarena Airport"
    },
    {
        "code": "LMJ",
        "country": "JP",
        "state": "",
        "name": "Tokyo Bus Station"
    },
    {
        "code": "LMM",
        "country": "MX",
        "state": "",
        "name": "Fed. Valle del Fuerte"
    },
    {
        "code": "LMN",
        "country": "MY",
        "state": "",
        "name": "Limbang Airport"
    },
    {
        "code": "LMP",
        "country": "IT",
        "state": "",
        "name": "Lampedusa Airport"
    },
    {
        "code": "LMU",
        "country": "ID",
        "state": "",
        "name": "Letung Airport"
    },
    {
        "code": "LMV",
        "country": "MV",
        "state": "",
        "name": "Madivaru Airport"
    },
    {
        "code": "LNB",
        "country": "VU",
        "state": "",
        "name": "Lamen Bay Airport"
    },
    {
        "code": "LNE",
        "country": "VU",
        "state": "",
        "name": "Lonorore Airport"
    },
    {
        "code": "LNJ",
        "country": "CN",
        "state": "",
        "name": "Lincang Airport"
    },
    {
        "code": "LNK",
        "country": "US",
        "state": "NE",
        "name": "Lincoln Airport"
    },
    {
        "code": "LNL",
        "country": "CN",
        "state": "",
        "name": "Cheng Xian Airport"
    },
    {
        "code": "LNO",
        "country": "AU",
        "state": "WA",
        "name": "Leonora Airport"
    },
    {
        "code": "LNS",
        "country": "US",
        "state": "PA",
        "name": "Lancaster Airport"
    },
    {
        "code": "LNU",
        "country": "ID",
        "state": "",
        "name": "Kolonel RA Bessing Airport"
    },
    {
        "code": "LNV",
        "country": "PG",
        "state": "",
        "name": "Kunaye Airport"
    },
    {
        "code": "LNY",
        "country": "US",
        "state": "HI",
        "name": "Lanai City Airport"
    },
    {
        "code": "LNZ",
        "country": "AT",
        "state": "",
        "name": "Blue Danube Airport"
    },
    {
        "code": "LOD",
        "country": "VU",
        "state": "",
        "name": "Longana Airport"
    },
    {
        "code": "LOE",
        "country": "TH",
        "state": "",
        "name": "Loei Airport"
    },
    {
        "code": "LOH",
        "country": "EC",
        "state": "",
        "name": "Catamayo Airport"
    },
    {
        "code": "LOK",
        "country": "KE",
        "state": "",
        "name": "Lodwar Airport"
    },
    {
        "code": "LOO",
        "country": "DZ",
        "state": "",
        "name": "L'Mekrareg Airport"
    },
    {
        "code": "LOP",
        "country": "ID",
        "state": "",
        "name": "Lombok International"
    },
    {
        "code": "LOS",
        "country": "NG",
        "state": "",
        "name": "Murtala Muhammed International Airport"
    },
    {
        "code": "LPA",
        "country": "ES",
        "state": "",
        "name": "Gran Canaria Airport"
    },
    {
        "code": "LPB",
        "country": "BO",
        "state": "",
        "name": "El Alto International Airport"
    },
    {
        "code": "LPD",
        "country": "CO",
        "state": "",
        "name": "La Pedrera Airport"
    },
    {
        "code": "LPF",
        "country": "CN",
        "state": "",
        "name": "Yue Zhao Airport"
    },
    {
        "code": "LPI",
        "country": "SE",
        "state": "",
        "name": "Linkoping City Airport"
    },
    {
        "code": "LPL",
        "country": "GB",
        "state": "",
        "name": "John Lennon Airport"
    },
    {
        "code": "LPM",
        "country": "VU",
        "state": "",
        "name": "Malekoula Airport"
    },
    {
        "code": "LPP",
        "country": "FI",
        "state": "",
        "name": "Lappeenranta Airport"
    },
    {
        "code": "LPQ",
        "country": "LA",
        "state": "",
        "name": "Luang Prabang International Airport"
    },
    {
        "code": "LPT",
        "country": "TH",
        "state": "",
        "name": "Lampang Airport"
    },
    {
        "code": "LPY",
        "country": "FR",
        "state": "",
        "name": "Loudes Airport"
    },
    {
        "code": "LQM",
        "country": "CO",
        "state": "",
        "name": "Caucaya Airport"
    },
    {
        "code": "LRD",
        "country": "US",
        "state": "TX",
        "name": "Laredo International Airport"
    },
    {
        "code": "LRE",
        "country": "AU",
        "state": "QL",
        "name": "Longreach Airport"
    },
    {
        "code": "LRH",
        "country": "FR",
        "state": "",
        "name": "Ile de Re Airport"
    },
    {
        "code": "LRM",
        "country": "DO",
        "state": "",
        "name": "Casa de Campo International Airport"
    },
    {
        "code": "LRR",
        "country": "IR",
        "state": "",
        "name": "Lar Airport"
    },
    {
        "code": "LRS",
        "country": "GR",
        "state": "",
        "name": "Leros Airport"
    },
    {
        "code": "LRT",
        "country": "FR",
        "state": "",
        "name": "Lann Bihoue Airport"
    },
    {
        "code": "LRU",
        "country": "US",
        "state": "NM",
        "name": "Las Cruces International Airport"
    },
    {
        "code": "LRV",
        "country": "VE",
        "state": "",
        "name": "Los Roques Airport"
    },
    {
        "code": "LSC",
        "country": "CL",
        "state": "",
        "name": "La Florida Airport"
    },
    {
        "code": "LSE",
        "country": "US",
        "state": "WI",
        "name": "La Crosse Regional Airport"
    },
    {
        "code": "LSH",
        "country": "MM",
        "state": "",
        "name": "Lashio Airport"
    },
    {
        "code": "LSI",
        "country": "GB",
        "state": "",
        "name": "Sumburgh Airport"
    },
    {
        "code": "LSP",
        "country": "VE",
        "state": "",
        "name": "Josefa Camejo International Airport"
    },
    {
        "code": "LSS",
        "country": "GP",
        "state": "",
        "name": "Les Saintes Airport"
    },
    {
        "code": "LST",
        "country": "AU",
        "state": "TS",
        "name": "Launceston Airport"
    },
    {
        "code": "LSW",
        "country": "ID",
        "state": "",
        "name": "Malikussaleh Airport"
    },
    {
        "code": "LTI",
        "country": "MN",
        "state": "",
        "name": "Altai Airport"
    },
    {
        "code": "LTK",
        "country": "SY",
        "state": "",
        "name": "Bassel al Assad International Airport"
    },
    {
        "code": "LTN",
        "country": "GB",
        "state": "",
        "name": "Luton Airport"
    },
    {
        "code": "LTO",
        "country": "MX",
        "state": "",
        "name": "Loreto International Airport"
    },
    {
        "code": "LTZ",
        "country": "IT",
        "state": "",
        "name": "Lamezia Terme Central Railway Station"
    },
    {
        "code": "LUD",
        "country": "NA",
        "state": "",
        "name": "Luderitz Airport"
    },
    {
        "code": "LUM",
        "country": "CN",
        "state": "",
        "name": "Dehong Mangshi Airport"
    },
    {
        "code": "LUN",
        "country": "ZM",
        "state": "",
        "name": "Lusaka International Airport"
    },
    {
        "code": "LUO",
        "country": "AO",
        "state": "",
        "name": "Luena Airport"
    },
    {
        "code": "LUP",
        "country": "US",
        "state": "HI",
        "name": "Kalaupapa Airport"
    },
    {
        "code": "LUQ",
        "country": "AR",
        "state": "SL",
        "name": "D. Cesar Raul Ojeda Airport"
    },
    {
        "code": "LUR",
        "country": "US",
        "state": "AK",
        "name": "Cape Lisburne Airport"
    },
    {
        "code": "LUV",
        "country": "ID",
        "state": "",
        "name": "Dumatubun Airport"
    },
    {
        "code": "LUW",
        "country": "ID",
        "state": "",
        "name": "Syukuran Aminuddin Amir Airport"
    },
    {
        "code": "LUX",
        "country": "LU",
        "state": "",
        "name": "Luxembourg Airport"
    },
    {
        "code": "LUZ",
        "country": "PL",
        "state": "",
        "name": "Lublin Airport"
    },
    {
        "code": "LVI",
        "country": "ZM",
        "state": "",
        "name": "Livingstone Airport"
    },
    {
        "code": "LVO",
        "country": "AU",
        "state": "WA",
        "name": "Laverton Airport"
    },
    {
        "code": "LWB",
        "country": "US",
        "state": "WV",
        "name": "Greenbrier Valley Airport"
    },
    {
        "code": "LWE",
        "country": "ID",
        "state": "",
        "name": "Wunopito Airport"
    },
    {
        "code": "LWK",
        "country": "GB",
        "state": "",
        "name": "Lerwick/Tingwall Airport"
    },
    {
        "code": "LWS",
        "country": "US",
        "state": "ID",
        "name": "Nez Perce County Airport"
    },
    {
        "code": "LWY",
        "country": "MY",
        "state": "",
        "name": "Lawas Airport"
    },
    {
        "code": "LXA",
        "country": "CN",
        "state": "",
        "name": "Gonggar Airport"
    },
    {
        "code": "LXC",
        "country": "GB",
        "state": "",
        "name": "Liverpool Central Railway Station"
    },
    {
        "code": "LXG",
        "country": "LA",
        "state": "",
        "name": "Luang Namtha Airport"
    },
    {
        "code": "LXL",
        "country": "GB",
        "state": "",
        "name": "Lime Street Railway Station"
    },
    {
        "code": "LXR",
        "country": "EG",
        "state": "",
        "name": "Luxor International Airport"
    },
    {
        "code": "LXS",
        "country": "GR",
        "state": "",
        "name": "Limnos Airport"
    },
    {
        "code": "LYA",
        "country": "CN",
        "state": "",
        "name": "Beijiao Airport"
    },
    {
        "code": "LYB",
        "country": "KY",
        "state": "",
        "name": "Edward Bodden Airport"
    },
    {
        "code": "LYC",
        "country": "SE",
        "state": "",
        "name": "Lycksele Airport"
    },
    {
        "code": "LYG",
        "country": "CN",
        "state": "",
        "name": "Baitabu Airport"
    },
    {
        "code": "LYH",
        "country": "US",
        "state": "VA",
        "name": "Lynchburg Regional Airport-Preston-Glen"
    },
    {
        "code": "LYI",
        "country": "CN",
        "state": "",
        "name": "Shubuling Airport"
    },
    {
        "code": "LYP",
        "country": "PK",
        "state": "",
        "name": "Faisalabad International Airport"
    },
    {
        "code": "LYR",
        "country": "SJ",
        "state": "",
        "name": "Svalbard Airport"
    },
    {
        "code": "LYS",
        "country": "FR",
        "state": "",
        "name": "Saint Exupery Airport"
    },
    {
        "code": "LZG",
        "country": "CN",
        "state": "",
        "name": "Langzhong Gucheng Airport"
    },
    {
        "code": "LZH",
        "country": "CN",
        "state": "",
        "name": "Bailian Airport"
    },
    {
        "code": "LZN",
        "country": "TW",
        "state": "",
        "name": "Matsu Nangan Airport"
    },
    {
        "code": "LZO",
        "country": "CN",
        "state": "",
        "name": "Yunlong Airport"
    },
    {
        "code": "LZS",
        "country": "AT",
        "state": "",
        "name": "Linz Hauptbahnhof Rail Station"
    },
    {
        "code": "LZY",
        "country": "CN",
        "state": "",
        "name": "Mainling/Milin Airport"
    },
    {
        "code": "MAA",
        "country": "IN",
        "state": "TN",
        "name": "Chennai International Airport"
    },
    {
        "code": "MAB",
        "country": "BR",
        "state": "PA",
        "name": "Joao Correa da Rocha Airport"
    },
    {
        "code": "MAD",
        "country": "ES",
        "state": "",
        "name": "Adolfo Suarez-Barajas Airport"
    },
    {
        "code": "MAF",
        "country": "US",
        "state": "TX",
        "name": "Midland International Airport"
    },
    {
        "code": "MAG",
        "country": "PG",
        "state": "",
        "name": "Madang Airport"
    },
    {
        "code": "MAH",
        "country": "ES",
        "state": "",
        "name": "Menorca Airport"
    },
    {
        "code": "MAJ",
        "country": "MH",
        "state": "",
        "name": "Amata Kabua International Airport"
    },
    {
        "code": "MAM",
        "country": "MX",
        "state": "",
        "name": "Servando Canales International Airport"
    },
    {
        "code": "MAN",
        "country": "GB",
        "state": "",
        "name": "Manchester Airport"
    },
    {
        "code": "MAO",
        "country": "BR",
        "state": "AM",
        "name": "Eduardo Gomes International Airport"
    },
    {
        "code": "MAQ",
        "country": "TH",
        "state": "",
        "name": "Mae Sot Airport"
    },
    {
        "code": "MAR",
        "country": "VE",
        "state": "",
        "name": "La Chinita International Airport"
    },
    {
        "code": "MAS",
        "country": "PG",
        "state": "",
        "name": "Momote Airport"
    },
    {
        "code": "MAU",
        "country": "PF",
        "state": "",
        "name": "Maupiti Airport"
    },
    {
        "code": "MAZ",
        "country": "PR",
        "state": "",
        "name": "Eugenio Maria de Hostos Airport"
    },
    {
        "code": "MBA",
        "country": "KE",
        "state": "",
        "name": "Moi International Airport"
    },
    {
        "code": "MBE",
        "country": "JP",
        "state": "",
        "name": "Monbetsu Airport"
    },
    {
        "code": "MBI",
        "country": "TZ",
        "state": "",
        "name": "Mbeya Airport"
    },
    {
        "code": "MBJ",
        "country": "JM",
        "state": "",
        "name": "Sangster International Airport"
    },
    {
        "code": "MBL",
        "country": "US",
        "state": "MI",
        "name": "Manistee County Blacker Airport"
    },
    {
        "code": "MBQ",
        "country": "UG",
        "state": "",
        "name": "Mbarara Airport"
    },
    {
        "code": "MBS",
        "country": "US",
        "state": "MI",
        "name": "MBS International Airport"
    },
    {
        "code": "MBT",
        "country": "PH",
        "state": "",
        "name": "Moises R. Espinosa Airport"
    },
    {
        "code": "MBZ",
        "country": "BR",
        "state": "AM",
        "name": "Maues Airport"
    },
    {
        "code": "MCE",
        "country": "US",
        "state": "CA",
        "name": "Merced Regional Airport"
    },
    {
        "code": "MCI",
        "country": "US",
        "state": "MO",
        "name": "Kansas City International Airport"
    },
    {
        "code": "MCK",
        "country": "US",
        "state": "NE",
        "name": "Ben Nelson Regional Airport"
    },
    {
        "code": "MCN",
        "country": "US",
        "state": "GA",
        "name": "Middle Georgia Regional Airport"
    },
    {
        "code": "MCO",
        "country": "US",
        "state": "FL",
        "name": "Orlando International Airport"
    },
    {
        "code": "MCP",
        "country": "BR",
        "state": "AP",
        "name": "Alberto Alcolumbre International Airpor"
    },
    {
        "code": "MCT",
        "country": "OM",
        "state": "",
        "name": "Muscat International Airport"
    },
    {
        "code": "MCV",
        "country": "AU",
        "state": "NT",
        "name": "McArthur River Mine Airport"
    },
    {
        "code": "MCW",
        "country": "US",
        "state": "IA",
        "name": "Mason City Municipal Airport"
    },
    {
        "code": "MCX",
        "country": "RU",
        "state": "",
        "name": "Uytash Airport"
    },
    {
        "code": "MCY",
        "country": "AU",
        "state": "QL",
        "name": "Maroochydore Airport"
    },
    {
        "code": "MCZ",
        "country": "BR",
        "state": "AL",
        "name": "Zumbi dos Palmares International Airpor"
    },
    {
        "code": "MDC",
        "country": "ID",
        "state": "",
        "name": "Sam Ratulangi Airport"
    },
    {
        "code": "MDE",
        "country": "CO",
        "state": "",
        "name": "Jose Maria Cordova International Airpor"
    },
    {
        "code": "MDG",
        "country": "CN",
        "state": "",
        "name": "Hailang Airport"
    },
    {
        "code": "MDI",
        "country": "NG",
        "state": "",
        "name": "Makurdi Airport"
    },
    {
        "code": "MDK",
        "country": "CD",
        "state": "",
        "name": "Mbandaka Airport"
    },
    {
        "code": "MDL",
        "country": "MM",
        "state": "",
        "name": "Mandalay International Airport"
    },
    {
        "code": "MDQ",
        "country": "AR",
        "state": "BA",
        "name": "Astor Piazzola Airport"
    },
    {
        "code": "MDT",
        "country": "US",
        "state": "PA",
        "name": "Harrisburg International Airport"
    },
    {
        "code": "MDW",
        "country": "US",
        "state": "IL",
        "name": "Midway International Airport"
    },
    {
        "code": "MDZ",
        "country": "AR",
        "state": "MD",
        "name": "El Plumerillo Airport"
    },
    {
        "code": "MEC",
        "country": "EC",
        "state": "",
        "name": "Eloy Alfaro International Airport"
    },
    {
        "code": "MED",
        "country": "SA",
        "state": "",
        "name": "Mohammad Bin Abdulaziz Airport"
    },
    {
        "code": "MEE",
        "country": "NC",
        "state": "",
        "name": "La Roche Airport"
    },
    {
        "code": "MEH",
        "country": "NO",
        "state": "",
        "name": "Mehamn Airport"
    },
    {
        "code": "MEI",
        "country": "US",
        "state": "MS",
        "name": "Meridian Regional (Key Field) Airport"
    },
    {
        "code": "MEL",
        "country": "AU",
        "state": "VI",
        "name": "Melbourne Airport"
    },
    {
        "code": "MEM",
        "country": "US",
        "state": "TN",
        "name": "Memphis International Airport"
    },
    {
        "code": "MEN",
        "country": "FR",
        "state": "",
        "name": "Brenoux Airport"
    },
    {
        "code": "MEQ",
        "country": "ID",
        "state": "",
        "name": "Nagan Raya Airport"
    },
    {
        "code": "MEU",
        "country": "BR",
        "state": "PA",
        "name": "Serra do Areao Airport"
    },
    {
        "code": "MEX",
        "country": "MX",
        "state": "",
        "name": "Benito Juarez International Airport"
    },
    {
        "code": "MFA",
        "country": "TZ",
        "state": "",
        "name": "Mafia Island Airport"
    },
    {
        "code": "MFE",
        "country": "US",
        "state": "TX",
        "name": "Miller International Airport"
    },
    {
        "code": "MFK",
        "country": "TW",
        "state": "",
        "name": "Matsu Beigan Airport"
    },
    {
        "code": "MFM",
        "country": "MO",
        "state": "",
        "name": "Macau International Airport"
    },
    {
        "code": "MFQ",
        "country": "NE",
        "state": "",
        "name": "Maradi Airport"
    },
    {
        "code": "MFR",
        "country": "US",
        "state": "OR",
        "name": "Rogue Valley International Airport"
    },
    {
        "code": "MFU",
        "country": "ZM",
        "state": "",
        "name": "Mfuwe Airport"
    },
    {
        "code": "MGA",
        "country": "NI",
        "state": "",
        "name": "Augusto C. Sandino International Airpor"
    },
    {
        "code": "MGB",
        "country": "AU",
        "state": "SA",
        "name": "Mount Gambier Airport"
    },
    {
        "code": "MGF",
        "country": "BR",
        "state": "PR",
        "name": "Silvio Name Jr. Airport"
    },
    {
        "code": "MGH",
        "country": "ZA",
        "state": "",
        "name": "Margate Airport"
    },
    {
        "code": "MGM",
        "country": "US",
        "state": "AL",
        "name": "Montgomery Regional Airport-Dannelly Fi"
    },
    {
        "code": "MGQ",
        "country": "SO",
        "state": "",
        "name": "Aden Adde International Airport"
    },
    {
        "code": "MGT",
        "country": "AU",
        "state": "NT",
        "name": "Milingimbi Island Airport"
    },
    {
        "code": "MGW",
        "country": "US",
        "state": "WV",
        "name": "Morgantown Municipal Airport"
    },
    {
        "code": "MGZ",
        "country": "MM",
        "state": "",
        "name": "Myeik Airport"
    },
    {
        "code": "MHC",
        "country": "CL",
        "state": "",
        "name": "Mocopulli Airport"
    },
    {
        "code": "MHD",
        "country": "IR",
        "state": "",
        "name": "Shahid Hashemi Nejad Airport"
    },
    {
        "code": "MHH",
        "country": "BS",
        "state": "",
        "name": "Marsh Harbour Airport"
    },
    {
        "code": "MHJ",
        "country": "DE",
        "state": "",
        "name": "Mannheim Hbf Railway Station"
    },
    {
        "code": "MHK",
        "country": "US",
        "state": "KS",
        "name": "Manhattan Regional Airport"
    },
    {
        "code": "MHQ",
        "country": "AX",
        "state": "",
        "name": "Mariehamn Airport"
    },
    {
        "code": "MHT",
        "country": "US",
        "state": "NH",
        "name": "Manchester-Boston Regional Airport"
    },
    {
        "code": "MIA",
        "country": "US",
        "state": "FL",
        "name": "Miami International Airport"
    },
    {
        "code": "MID",
        "country": "MX",
        "state": "",
        "name": "M. Crescencio Rejon Airport"
    },
    {
        "code": "MIG",
        "country": "CN",
        "state": "",
        "name": "Nanjiao Airport"
    },
    {
        "code": "MII",
        "country": "BR",
        "state": "SP",
        "name": "Frank M. Milenkowichi Airport"
    },
    {
        "code": "MIM",
        "country": "AU",
        "state": "NS",
        "name": "Merimbula Airport"
    },
    {
        "code": "MIR",
        "country": "TN",
        "state": "",
        "name": "Habib Bourguiba International Airport"
    },
    {
        "code": "MIS",
        "country": "PG",
        "state": "",
        "name": "Misima Island Airport"
    },
    {
        "code": "MIU",
        "country": "NG",
        "state": "",
        "name": "Maiduguri International Airport"
    },
    {
        "code": "MJC",
        "country": "CI",
        "state": "",
        "name": "Man Airport"
    },
    {
        "code": "MJF",
        "country": "NO",
        "state": "",
        "name": "Kjaerstad Airport"
    },
    {
        "code": "MJI",
        "country": "LY",
        "state": "",
        "name": "Mitiga Airport"
    },
    {
        "code": "MJK",
        "country": "AU",
        "state": "WA",
        "name": "Shark Bay Airport"
    },
    {
        "code": "MJM",
        "country": "CD",
        "state": "",
        "name": "Mbuji-Mayi Airport"
    },
    {
        "code": "MJN",
        "country": "MG",
        "state": "",
        "name": "Philibert Tsiranana Airport"
    },
    {
        "code": "MJT",
        "country": "GR",
        "state": "",
        "name": "Odysseas Elytis Airport"
    },
    {
        "code": "MJU",
        "country": "ID",
        "state": "",
        "name": "Tampa Padang Airport"
    },
    {
        "code": "MJZ",
        "country": "RU",
        "state": "",
        "name": "Mirny Airport"
    },
    {
        "code": "MKE",
        "country": "US",
        "state": "WI",
        "name": "General Mitchell International Airport"
    },
    {
        "code": "MKF",
        "country": "DE",
        "state": "",
        "name": "Muenster HBF"
    },
    {
        "code": "MKG",
        "country": "US",
        "state": "MI",
        "name": "Muskegon County Airport"
    },
    {
        "code": "MKK",
        "country": "US",
        "state": "HI",
        "name": "Molokai Airport"
    },
    {
        "code": "MKL",
        "country": "US",
        "state": "TN",
        "name": "McKellar-Sipes Regional Airport"
    },
    {
        "code": "MKM",
        "country": "MY",
        "state": "",
        "name": "Mukah Airport"
    },
    {
        "code": "MKP",
        "country": "PF",
        "state": "",
        "name": "Makemo Airport"
    },
    {
        "code": "MKQ",
        "country": "ID",
        "state": "",
        "name": "Mopah Airport"
    },
    {
        "code": "MKR",
        "country": "AU",
        "state": "WA",
        "name": "Meekatharra Airport"
    },
    {
        "code": "MKW",
        "country": "ID",
        "state": "",
        "name": "Rendani Airport"
    },
    {
        "code": "MKY",
        "country": "AU",
        "state": "QL",
        "name": "Mackay Airport"
    },
    {
        "code": "MLA",
        "country": "MT",
        "state": "",
        "name": "Luqa International Airport"
    },
    {
        "code": "MLB",
        "country": "US",
        "state": "FL",
        "name": "Orlando Melbourne International Airport"
    },
    {
        "code": "MLE",
        "country": "MV",
        "state": "",
        "name": "Velana International Airport"
    },
    {
        "code": "MLG",
        "country": "ID",
        "state": "",
        "name": "Abdul Rachman Saleh Airport"
    },
    {
        "code": "MLH",
        "country": "CH",
        "state": "",
        "name": "EuroAirport French"
    },
    {
        "code": "MLI",
        "country": "US",
        "state": "IL",
        "name": "Quad City International Airport"
    },
    {
        "code": "MLL",
        "country": "US",
        "state": "AK",
        "name": "Don Hunter Sr. Airport"
    },
    {
        "code": "MLM",
        "country": "MX",
        "state": "",
        "name": "F.J. Mujica International Airport"
    },
    {
        "code": "MLN",
        "country": "ES",
        "state": "",
        "name": "Melilla Airport"
    },
    {
        "code": "MLO",
        "country": "GR",
        "state": "",
        "name": "Milos Airport"
    },
    {
        "code": "MLU",
        "country": "US",
        "state": "LA",
        "name": "Monroe Regional Airport"
    },
    {
        "code": "MLX",
        "country": "TR",
        "state": "",
        "name": "Erhac Airport"
    },
    {
        "code": "MLY",
        "country": "US",
        "state": "AK",
        "name": "Manley Hot Springs Airport"
    },
    {
        "code": "MMB",
        "country": "JP",
        "state": "",
        "name": "Memanbetsu Airport"
    },
    {
        "code": "MMD",
        "country": "JP",
        "state": "",
        "name": "Minamidaito Airport"
    },
    {
        "code": "MME",
        "country": "GB",
        "state": "",
        "name": "Teesside International Airport"
    },
    {
        "code": "MMG",
        "country": "AU",
        "state": "WA",
        "name": "Mount Magnet Airport"
    },
    {
        "code": "MMH",
        "country": "US",
        "state": "CA",
        "name": "Mammoth Yosemite Airport"
    },
    {
        "code": "MMJ",
        "country": "JP",
        "state": "",
        "name": "Matsumoto Airport"
    },
    {
        "code": "MMK",
        "country": "RU",
        "state": "",
        "name": "Murmansk Airport"
    },
    {
        "code": "MMO",
        "country": "CV",
        "state": "",
        "name": "Maio Island Airport"
    },
    {
        "code": "MMP",
        "country": "CO",
        "state": "",
        "name": "San Bernardo Airport"
    },
    {
        "code": "MMU",
        "country": "US",
        "state": "NJ",
        "name": "Morristown Municipal Airport"
    },
    {
        "code": "MMX",
        "country": "SE",
        "state": "",
        "name": "Malmo Airport"
    },
    {
        "code": "MMY",
        "country": "JP",
        "state": "",
        "name": "Miyako Airport"
    },
    {
        "code": "MNA",
        "country": "ID",
        "state": "",
        "name": "Melangguane Airport"
    },
    {
        "code": "MNC",
        "country": "MZ",
        "state": "",
        "name": "Nacala Airport"
    },
    {
        "code": "MNG",
        "country": "AU",
        "state": "NT",
        "name": "Maningrida Airport"
    },
    {
        "code": "MNI",
        "country": "MS",
        "state": "",
        "name": "John A. Osborne Airport"
    },
    {
        "code": "MNK",
        "country": "KI",
        "state": "",
        "name": "Maiana Airport"
    },
    {
        "code": "MNL",
        "country": "PH",
        "state": "",
        "name": "Ninoy Aquino International Airport"
    },
    {
        "code": "MNS",
        "country": "ZM",
        "state": "",
        "name": "Mansa Airport"
    },
    {
        "code": "MNT",
        "country": "US",
        "state": "AK",
        "name": "Al Wright Airport"
    },
    {
        "code": "MNU",
        "country": "MM",
        "state": "",
        "name": "Mawlamyine Airport"
    },
    {
        "code": "MNX",
        "country": "BR",
        "state": "AM",
        "name": "Manicore Airport"
    },
    {
        "code": "MNY",
        "country": "SB",
        "state": "",
        "name": "Mono Island Airport"
    },
    {
        "code": "MOB",
        "country": "US",
        "state": "AL",
        "name": "Mobile Regional Airport"
    },
    {
        "code": "MOC",
        "country": "BR",
        "state": "MG",
        "name": "Mario Ribeiro Airport"
    },
    {
        "code": "MOF",
        "country": "ID",
        "state": "",
        "name": "Fransiskus X. Seda Airport"
    },
    {
        "code": "MOH",
        "country": "ID",
        "state": "",
        "name": "Morowali Airport"
    },
    {
        "code": "MOL",
        "country": "NO",
        "state": "",
        "name": "Aro Airport"
    },
    {
        "code": "MOQ",
        "country": "MG",
        "state": "",
        "name": "Morondava Airport"
    },
    {
        "code": "MOT",
        "country": "US",
        "state": "ND",
        "name": "Minot International Airport"
    },
    {
        "code": "MOU",
        "country": "US",
        "state": "AK",
        "name": "Mountain Village Airport"
    },
    {
        "code": "MOV",
        "country": "AU",
        "state": "QL",
        "name": "Moranbah Airport"
    },
    {
        "code": "MOZ",
        "country": "PF",
        "state": "",
        "name": "Temae Airport"
    },
    {
        "code": "MPA",
        "country": "NA",
        "state": "",
        "name": "Mpacha Airport"
    },
    {
        "code": "MPH",
        "country": "PH",
        "state": "",
        "name": "Godofredo P. Ramos Airport"
    },
    {
        "code": "MPL",
        "country": "FR",
        "state": "",
        "name": "Mediterranee Airport"
    },
    {
        "code": "MPM",
        "country": "MZ",
        "state": "",
        "name": "Maputo International Airport"
    },
    {
        "code": "MPN",
        "country": "FK",
        "state": "",
        "name": "Mount Pleasant Royal Air Force Station"
    },
    {
        "code": "MQF",
        "country": "RU",
        "state": "",
        "name": "Magnitogorsk Airport"
    },
    {
        "code": "MQJ",
        "country": "RU",
        "state": "",
        "name": "Moma Airport"
    },
    {
        "code": "MQL",
        "country": "AU",
        "state": "VI",
        "name": "Mildura Airport"
    },
    {
        "code": "MQM",
        "country": "TR",
        "state": "",
        "name": "Mardin Airport"
    },
    {
        "code": "MQN",
        "country": "NO",
        "state": "",
        "name": "Rossvoll Airport"
    },
    {
        "code": "MQP",
        "country": "ZA",
        "state": "",
        "name": "Kruger Mpumalanga International Airport"
    },
    {
        "code": "MQT",
        "country": "US",
        "state": "MI",
        "name": "Sawyer International Airport"
    },
    {
        "code": "MQX",
        "country": "ET",
        "state": "",
        "name": "Alula Aba Nega Airport"
    },
    {
        "code": "MRA",
        "country": "LY",
        "state": "",
        "name": "Misurata Airport"
    },
    {
        "code": "MRD",
        "country": "VE",
        "state": "",
        "name": "Alberto Carnevalli Airport"
    },
    {
        "code": "MRE",
        "country": "KE",
        "state": "",
        "name": "Mara Serena Airport"
    },
    {
        "code": "MRG",
        "country": "AU",
        "state": "QL",
        "name": "Mareeba Airport"
    },
    {
        "code": "MRS",
        "country": "FR",
        "state": "",
        "name": "Provence Airport"
    },
    {
        "code": "MRU",
        "country": "MU",
        "state": "",
        "name": "Sir S. Ramgoolam International Airport"
    },
    {
        "code": "MRV",
        "country": "RU",
        "state": "",
        "name": "Mineralnye Vody Airport"
    },
    {
        "code": "MRX",
        "country": "IR",
        "state": "",
        "name": "Mahshahr Airport"
    },
    {
        "code": "MRY",
        "country": "US",
        "state": "CA",
        "name": "Monterey Regional Airport"
    },
    {
        "code": "MRZ",
        "country": "AU",
        "state": "NS",
        "name": "Moree Airport"
    },
    {
        "code": "MSA",
        "country": "CA",
        "state": "ON",
        "name": "Muskrat Dam Airport"
    },
    {
        "code": "MSH",
        "country": "OM",
        "state": "",
        "name": "Masirah Air Base"
    },
    {
        "code": "MSJ",
        "country": "JP",
        "state": "",
        "name": "Misawa Airport"
    },
    {
        "code": "MSL",
        "country": "US",
        "state": "AL",
        "name": "Northwest Alabama Regional Airport"
    },
    {
        "code": "MSN",
        "country": "US",
        "state": "WI",
        "name": "Dane County Regional Airport"
    },
    {
        "code": "MSO",
        "country": "US",
        "state": "MT",
        "name": "Missoula International Airport"
    },
    {
        "code": "MSP",
        "country": "US",
        "state": "MN",
        "name": "Saint Paul International Airport"
    },
    {
        "code": "MSQ",
        "country": "BY",
        "state": "",
        "name": "Minsk International"
    },
    {
        "code": "MSR",
        "country": "TR",
        "state": "",
        "name": "Mus Airport"
    },
    {
        "code": "MSS",
        "country": "US",
        "state": "NY",
        "name": "Massena International Airport"
    },
    {
        "code": "MST",
        "country": "NL",
        "state": "",
        "name": "Maastricht/Aachen Airport"
    },
    {
        "code": "MSU",
        "country": "LS",
        "state": "",
        "name": "Moshoeshoe I International Airport"
    },
    {
        "code": "MSY",
        "country": "US",
        "state": "LA",
        "name": "Louis Armstrong International Airport"
    },
    {
        "code": "MSZ",
        "country": "AO",
        "state": "",
        "name": "Yuri Gagarin Airport"
    },
    {
        "code": "MTB",
        "country": "CO",
        "state": "",
        "name": "Montelibano Airport"
    },
    {
        "code": "MTE",
        "country": "BR",
        "state": "PA",
        "name": "Monte Alegre Airport"
    },
    {
        "code": "MTJ",
        "country": "US",
        "state": "CO",
        "name": "Montrose Regional Airport"
    },
    {
        "code": "MTK",
        "country": "KI",
        "state": "",
        "name": "Makin Airport"
    },
    {
        "code": "MTR",
        "country": "CO",
        "state": "",
        "name": "Los Garzones Airport"
    },
    {
        "code": "MTT",
        "country": "MX",
        "state": "",
        "name": "Coatzacoalcos Airport"
    },
    {
        "code": "MTV",
        "country": "VU",
        "state": "",
        "name": "Mota Lava Island Airport"
    },
    {
        "code": "MTY",
        "country": "MX",
        "state": "",
        "name": "Mariano Escobedo International Airport"
    },
    {
        "code": "MUA",
        "country": "SB",
        "state": "",
        "name": "Munda Airport"
    },
    {
        "code": "MUB",
        "country": "BW",
        "state": "",
        "name": "Maun Airport"
    },
    {
        "code": "MUC",
        "country": "DE",
        "state": "",
        "name": "Munich International"
    },
    {
        "code": "MUE",
        "country": "US",
        "state": "HI",
        "name": "Waimea-Kohala Airport"
    },
    {
        "code": "MUH",
        "country": "EG",
        "state": "",
        "name": "Mersa Matruh Airport"
    },
    {
        "code": "MUN",
        "country": "VE",
        "state": "",
        "name": "Jose Tadeo Monagas International Airpor"
    },
    {
        "code": "MUR",
        "country": "MY",
        "state": "",
        "name": "Marudi Airport"
    },
    {
        "code": "MUX",
        "country": "PK",
        "state": "",
        "name": "Multan International Airport"
    },
    {
        "code": "MVB",
        "country": "GA",
        "state": "",
        "name": "Mvengue Airport"
    },
    {
        "code": "MVD",
        "country": "UY",
        "state": "",
        "name": "Carrasco Airport"
    },
    {
        "code": "MVF",
        "country": "BR",
        "state": "RN",
        "name": "Dix-Sept Rosado Airport"
    },
    {
        "code": "MVP",
        "country": "CO",
        "state": "",
        "name": "Fabio A. Leon Bentley Airport"
    },
    {
        "code": "MVR",
        "country": "CM",
        "state": "",
        "name": "Salak Airport"
    },
    {
        "code": "MVT",
        "country": "PF",
        "state": "",
        "name": "Mataiva Airport"
    },
    {
        "code": "MVY",
        "country": "US",
        "state": "MA",
        "name": "Martha's Vineyard Airport"
    },
    {
        "code": "MWA",
        "country": "US",
        "state": "IL",
        "name": "Veterans Souther IL Airport"
    },
    {
        "code": "MWF",
        "country": "VU",
        "state": "",
        "name": "Naone Airport"
    },
    {
        "code": "MWX",
        "country": "KR",
        "state": "",
        "name": "Muan International Airport"
    },
    {
        "code": "MWZ",
        "country": "TZ",
        "state": "",
        "name": "Mwanza Airport"
    },
    {
        "code": "MXH",
        "country": "PG",
        "state": "",
        "name": "Moro Airport"
    },
    {
        "code": "MXL",
        "country": "MX",
        "state": "",
        "name": "Rodolfo Sanchez Taboada International A"
    },
    {
        "code": "MXP",
        "country": "IT",
        "state": "",
        "name": "Malpensa Airport"
    },
    {
        "code": "MXQ",
        "country": "BR",
        "state": "BA",
        "name": "Lorenzo"
    },
    {
        "code": "MXV",
        "country": "MN",
        "state": "",
        "name": "Moron Airport"
    },
    {
        "code": "MXX",
        "country": "SE",
        "state": "",
        "name": "Siljan Airport"
    },
    {
        "code": "MXZ",
        "country": "CN",
        "state": "",
        "name": "Meixian Airport"
    },
    {
        "code": "MYA",
        "country": "AU",
        "state": "NS",
        "name": "Moruya Airport"
    },
    {
        "code": "MYD",
        "country": "KE",
        "state": "",
        "name": "Malindi Airport"
    },
    {
        "code": "MYG",
        "country": "BS",
        "state": "",
        "name": "Mayaguana Airport"
    },
    {
        "code": "MYI",
        "country": "AU",
        "state": "QL",
        "name": "Murray Island Airport"
    },
    {
        "code": "MYJ",
        "country": "JP",
        "state": "",
        "name": "Matsuyama Airport"
    },
    {
        "code": "MYP",
        "country": "TM",
        "state": "",
        "name": "Mary Airport"
    },
    {
        "code": "MYQ",
        "country": "IN",
        "state": "KA",
        "name": "Mandakalli Airport"
    },
    {
        "code": "MYR",
        "country": "US",
        "state": "SC",
        "name": "Myrtle Beach International Airport"
    },
    {
        "code": "MYT",
        "country": "MM",
        "state": "",
        "name": "Myitkyina Airport"
    },
    {
        "code": "MYU",
        "country": "US",
        "state": "AK",
        "name": "Mekoryuk Airport"
    },
    {
        "code": "MYW",
        "country": "TZ",
        "state": "",
        "name": "Mtwara Airport"
    },
    {
        "code": "MYY",
        "country": "MY",
        "state": "",
        "name": "Miri Airport"
    },
    {
        "code": "MZA",
        "country": "PE",
        "state": "",
        "name": "Manuel Prado Airport"
    },
    {
        "code": "MZG",
        "country": "TW",
        "state": "",
        "name": "Penghu Airport"
    },
    {
        "code": "MZH",
        "country": "TR",
        "state": "",
        "name": "Merzifon Airport"
    },
    {
        "code": "MZK",
        "country": "KI",
        "state": "",
        "name": "Marakei Airport"
    },
    {
        "code": "MZL",
        "country": "CO",
        "state": "",
        "name": "La Nubia Airport"
    },
    {
        "code": "MZR",
        "country": "AF",
        "state": "",
        "name": "Mazar-e Sharif Airport"
    },
    {
        "code": "MZT",
        "country": "MX",
        "state": "",
        "name": "Rafael Buelna International Airport"
    },
    {
        "code": "MZV",
        "country": "MY",
        "state": "",
        "name": "Mulu Airport"
    },
    {
        "code": "MZW",
        "country": "DZ",
        "state": "",
        "name": "Mecheria Airport"
    },
    {
        "code": "NAA",
        "country": "AU",
        "state": "NS",
        "name": "Narrabri Airport"
    },
    {
        "code": "NAG",
        "country": "IN",
        "state": "MH",
        "name": "Dr.Ambedkar International Airport"
    },
    {
        "code": "NAH",
        "country": "ID",
        "state": "",
        "name": "Naha Airport"
    },
    {
        "code": "NAJ",
        "country": "AZ",
        "state": "",
        "name": "Nakchivan Airport"
    },
    {
        "code": "NAL",
        "country": "RU",
        "state": "",
        "name": "Nalchik Airport"
    },
    {
        "code": "NAM",
        "country": "ID",
        "state": "",
        "name": "Namlea Airport"
    },
    {
        "code": "NAN",
        "country": "FJ",
        "state": "",
        "name": "Nadi International Airport"
    },
    {
        "code": "NAO",
        "country": "CN",
        "state": "",
        "name": "Gaoping Airport"
    },
    {
        "code": "NAP",
        "country": "IT",
        "state": "",
        "name": "Capodichino Airport"
    },
    {
        "code": "NAQ",
        "country": "GL",
        "state": "",
        "name": "Qaanaaq Airport"
    },
    {
        "code": "NAS",
        "country": "BS",
        "state": "",
        "name": "Lynden Pindling International Airport"
    },
    {
        "code": "NAT",
        "country": "BR",
        "state": "RN",
        "name": "Natal International Airport"
    },
    {
        "code": "NAU",
        "country": "PF",
        "state": "",
        "name": "Napuka Airport"
    },
    {
        "code": "NAV",
        "country": "TR",
        "state": "",
        "name": "Kapadokya Airport"
    },
    {
        "code": "NAW",
        "country": "TH",
        "state": "",
        "name": "Narathiwat Airport"
    },
    {
        "code": "NBC",
        "country": "RU",
        "state": "",
        "name": "Begishevo Airport"
    },
    {
        "code": "NBE",
        "country": "TN",
        "state": "",
        "name": "Hammamet Airport"
    },
    {
        "code": "NBO",
        "country": "KE",
        "state": "",
        "name": "Jomo Kenyatta International Airport"
    },
    {
        "code": "NBS",
        "country": "CN",
        "state": "",
        "name": "Changbaishan Airport"
    },
    {
        "code": "NBX",
        "country": "ID",
        "state": "",
        "name": "Nabire Airport"
    },
    {
        "code": "NCE",
        "country": "FR",
        "state": "",
        "name": "Cote d'Azur Airport"
    },
    {
        "code": "NCL",
        "country": "GB",
        "state": "",
        "name": "Newcastle International Airport"
    },
    {
        "code": "NCU",
        "country": "UZ",
        "state": "",
        "name": "Nukus Airport"
    },
    {
        "code": "NDB",
        "country": "MR",
        "state": "",
        "name": "Nouadhibou Airport"
    },
    {
        "code": "NDG",
        "country": "CN",
        "state": "",
        "name": "Sanjiazi Airport"
    },
    {
        "code": "NDJ",
        "country": "TD",
        "state": "",
        "name": "Hassan Djamous International Airport"
    },
    {
        "code": "NDR",
        "country": "MA",
        "state": "",
        "name": "El Aroui Airport"
    },
    {
        "code": "NDU",
        "country": "NA",
        "state": "",
        "name": "Rundu Airport"
    },
    {
        "code": "NEI",
        "country": "RU",
        "state": "",
        "name": "Terney Airport"
    },
    {
        "code": "NER",
        "country": "RU",
        "state": "",
        "name": "Chulman Airport"
    },
    {
        "code": "NEU",
        "country": "LA",
        "state": "",
        "name": "Sam Neua Airport"
    },
    {
        "code": "NEV",
        "country": "KN",
        "state": "",
        "name": "Vance W. Amory International Airport"
    },
    {
        "code": "NFO",
        "country": "TO",
        "state": "",
        "name": "Mata'aho Airport"
    },
    {
        "code": "NGB",
        "country": "CN",
        "state": "",
        "name": "Lishe International Airport"
    },
    {
        "code": "NGE",
        "country": "CM",
        "state": "",
        "name": "Ngaoundere Airport"
    },
    {
        "code": "NGK",
        "country": "RU",
        "state": "",
        "name": "Nogliki Airport"
    },
    {
        "code": "NGO",
        "country": "JP",
        "state": "",
        "name": "Chubu Centrair International Airport"
    },
    {
        "code": "NGQ",
        "country": "CN",
        "state": "",
        "name": "Ngari Gunsa/Ali Kunsha Airport"
    },
    {
        "code": "NGS",
        "country": "JP",
        "state": "",
        "name": "Nagasaki Airport"
    },
    {
        "code": "NGY",
        "country": "JP",
        "state": "",
        "name": "Nagoya EK Bus Station"
    },
    {
        "code": "NHR",
        "country": "IT",
        "state": "",
        "name": "NAPOLI AFRAGOLA HIGH SPEED RAI"
    },
    {
        "code": "NHV",
        "country": "PF",
        "state": "",
        "name": "Nuku Hiva Airport"
    },
    {
        "code": "NIG",
        "country": "KI",
        "state": "",
        "name": "Nikunau Airport"
    },
    {
        "code": "NIM",
        "country": "NE",
        "state": "",
        "name": "Diori Hamani International Airport"
    },
    {
        "code": "NIQ",
        "country": "GL",
        "state": "",
        "name": "Niaqornat Heliport"
    },
    {
        "code": "NIS",
        "country": "PG",
        "state": "",
        "name": "Simberi Island Airport"
    },
    {
        "code": "NIU",
        "country": "PF",
        "state": "",
        "name": "Niau Airport"
    },
    {
        "code": "NJC",
        "country": "RU",
        "state": "",
        "name": "Nizhnevartovsk Airport"
    },
    {
        "code": "NJF",
        "country": "IQ",
        "state": "",
        "name": "Al-Ashraf International Airport"
    },
    {
        "code": "NKC",
        "country": "MR",
        "state": "",
        "name": "Nouakchott Airport"
    },
    {
        "code": "NKG",
        "country": "CN",
        "state": "",
        "name": "Lukou International Airport"
    },
    {
        "code": "NKM",
        "country": "JP",
        "state": "",
        "name": "Nagoya (Komaki) Airport"
    },
    {
        "code": "NKT",
        "country": "TR",
        "state": "",
        "name": "Sirnak Airport"
    },
    {
        "code": "NLA",
        "country": "ZM",
        "state": "",
        "name": "Simon M. Kapwepwe lntl Ndola Airport"
    },
    {
        "code": "NLD",
        "country": "MX",
        "state": "",
        "name": "Quetzalcoatl International Airport"
    },
    {
        "code": "NLF",
        "country": "AU",
        "state": "QL",
        "name": "Darnley Island Airport"
    },
    {
        "code": "NLG",
        "country": "US",
        "state": "AK",
        "name": "Nelson Lagoon Airport"
    },
    {
        "code": "NLH",
        "country": "CN",
        "state": "",
        "name": "Luguhu Airport"
    },
    {
        "code": "NLI",
        "country": "RU",
        "state": "",
        "name": "Nikolayevsk-na-Amure Airport"
    },
    {
        "code": "NLK",
        "country": "NF",
        "state": "",
        "name": "Norfolk Island Airport"
    },
    {
        "code": "NLT",
        "country": "CN",
        "state": "",
        "name": "Nalati Airport"
    },
    {
        "code": "NLU",
        "country": "MX",
        "state": "",
        "name": "Felipe Angeles Intl. Airport"
    },
    {
        "code": "NMA",
        "country": "UZ",
        "state": "",
        "name": "Namangan Airport"
    },
    {
        "code": "NME",
        "country": "US",
        "state": "AK",
        "name": "Nightmute Airport"
    },
    {
        "code": "NMF",
        "country": "MV",
        "state": "",
        "name": "Maafaru International Airport"
    },
    {
        "code": "NNB",
        "country": "SB",
        "state": "",
        "name": "Santa Ana Island Airport"
    },
    {
        "code": "NNG",
        "country": "CN",
        "state": "",
        "name": "Wuxu International Airport"
    },
    {
        "code": "NNL",
        "country": "US",
        "state": "AK",
        "name": "Nondalton Airport"
    },
    {
        "code": "NNM",
        "country": "RU",
        "state": "",
        "name": "Naryan-Mar Airport"
    },
    {
        "code": "NNT",
        "country": "TH",
        "state": "",
        "name": "Nan Airport"
    },
    {
        "code": "NNY",
        "country": "CN",
        "state": "",
        "name": "Jiangying Airport"
    },
    {
        "code": "NOB",
        "country": "CR",
        "state": "",
        "name": "Nosara Airport"
    },
    {
        "code": "NOC",
        "country": "IE",
        "state": "",
        "name": "Ireland West Airport"
    },
    {
        "code": "NOJ",
        "country": "RU",
        "state": "",
        "name": "Noyabrsk Airport"
    },
    {
        "code": "NON",
        "country": "KI",
        "state": "",
        "name": "Nonouti Airport"
    },
    {
        "code": "NOP",
        "country": "TR",
        "state": "",
        "name": "Sinop Airport"
    },
    {
        "code": "NOS",
        "country": "MG",
        "state": "",
        "name": "Fascene Airport"
    },
    {
        "code": "NOU",
        "country": "NC",
        "state": "",
        "name": "La Tontouta Airport"
    },
    {
        "code": "NOV",
        "country": "AO",
        "state": "",
        "name": "Albano Machado Airport"
    },
    {
        "code": "NOZ",
        "country": "RU",
        "state": "",
        "name": "Spichenkovo Airport"
    },
    {
        "code": "NPE",
        "country": "NZ",
        "state": "",
        "name": "Hawkes Bay Airport"
    },
    {
        "code": "NPL",
        "country": "NZ",
        "state": "",
        "name": "New Plymouth Airport"
    },
    {
        "code": "NPY",
        "country": "TZ",
        "state": "",
        "name": "Mpanda Airport"
    },
    {
        "code": "NQN",
        "country": "AR",
        "state": "NE",
        "name": "Presidente Peron Airport"
    },
    {
        "code": "NQU",
        "country": "CO",
        "state": "",
        "name": "Reyes Murillo Airport"
    },
    {
        "code": "NQY",
        "country": "GB",
        "state": "",
        "name": "Cornwall Airport"
    },
    {
        "code": "NQZ",
        "country": "KZ",
        "state": "",
        "name": "Nur-Sultan Nazarbayev Airport"
    },
    {
        "code": "NRA",
        "country": "AU",
        "state": "NS",
        "name": "Narrandera Airport"
    },
    {
        "code": "NRE",
        "country": "ID",
        "state": "",
        "name": "Namrole Airport"
    },
    {
        "code": "NRK",
        "country": "SE",
        "state": "",
        "name": "Kungsangen Airport"
    },
    {
        "code": "NRN",
        "country": "DE",
        "state": "",
        "name": "Weeze Airport"
    },
    {
        "code": "NRR",
        "country": "PR",
        "state": "",
        "name": "J. Aponte de la Torre Airport"
    },
    {
        "code": "NRT",
        "country": "JP",
        "state": "",
        "name": "Narita International"
    },
    {
        "code": "NSH",
        "country": "IR",
        "state": "",
        "name": "Now Shahr Airport"
    },
    {
        "code": "NSI",
        "country": "CM",
        "state": "",
        "name": "Nsimalen International Airport"
    },
    {
        "code": "NSK",
        "country": "RU",
        "state": "",
        "name": "Alykel Airport"
    },
    {
        "code": "NSN",
        "country": "NZ",
        "state": "",
        "name": "Nelson Airport"
    },
    {
        "code": "NSQ",
        "country": "GL",
        "state": "",
        "name": "Nuussuaq Heliport"
    },
    {
        "code": "NSR",
        "country": "BR",
        "state": "PI",
        "name": "Serra da Capivara Airport"
    },
    {
        "code": "NST",
        "country": "TH",
        "state": "",
        "name": "Nakhon Si Thammarat Airport"
    },
    {
        "code": "NTE",
        "country": "FR",
        "state": "",
        "name": "Nantes Atlantique Airport"
    },
    {
        "code": "NTG",
        "country": "CN",
        "state": "",
        "name": "Xingdong Airport"
    },
    {
        "code": "NTL",
        "country": "AU",
        "state": "NS",
        "name": "Williamtown Airport"
    },
    {
        "code": "NTN",
        "country": "AU",
        "state": "QL",
        "name": "Normanton Airport"
    },
    {
        "code": "NTQ",
        "country": "JP",
        "state": "",
        "name": "Noto Airport"
    },
    {
        "code": "NTT",
        "country": "TO",
        "state": "",
        "name": "Kuini Lavenia Airport"
    },
    {
        "code": "NTX",
        "country": "ID",
        "state": "",
        "name": "Ranai Airport"
    },
    {
        "code": "NUE",
        "country": "DE",
        "state": "",
        "name": "Nuremberg Airport"
    },
    {
        "code": "NUI",
        "country": "US",
        "state": "AK",
        "name": "Nuiqsut Airport"
    },
    {
        "code": "NUK",
        "country": "PF",
        "state": "",
        "name": "Nukutavake Airport"
    },
    {
        "code": "NUL",
        "country": "US",
        "state": "AK",
        "name": "Nulato Airport"
    },
    {
        "code": "NUM",
        "country": "SA",
        "state": "",
        "name": "Neom Bay Airport"
    },
    {
        "code": "NUP",
        "country": "US",
        "state": "AK",
        "name": "Nunapitchuk Airport"
    },
    {
        "code": "NUS",
        "country": "VU",
        "state": "",
        "name": "Norsup Airport"
    },
    {
        "code": "NUX",
        "country": "RU",
        "state": "",
        "name": "Novy Urengoy Airport"
    },
    {
        "code": "NVA",
        "country": "CO",
        "state": "",
        "name": "Benito Salas Airport"
    },
    {
        "code": "NVI",
        "country": "UZ",
        "state": "",
        "name": "Navoi International Airport"
    },
    {
        "code": "NVT",
        "country": "BR",
        "state": "SC",
        "name": "Victor Konder International Airport"
    },
    {
        "code": "NWI",
        "country": "GB",
        "state": "",
        "name": "Norwich International Airport"
    },
    {
        "code": "NYA",
        "country": "RU",
        "state": "",
        "name": "Nyagan Airport"
    },
    {
        "code": "NYK",
        "country": "KE",
        "state": "",
        "name": "Nanyuki Airport"
    },
    {
        "code": "NYM",
        "country": "RU",
        "state": "",
        "name": "Nadym Airport"
    },
    {
        "code": "NYO",
        "country": "SE",
        "state": "",
        "name": "Skavsta Airport"
    },
    {
        "code": "NYR",
        "country": "RU",
        "state": "",
        "name": "Nyurba Airport"
    },
    {
        "code": "NYT",
        "country": "MM",
        "state": "",
        "name": "Nay Pyi Taw International Airport"
    },
    {
        "code": "NYU",
        "country": "MM",
        "state": "",
        "name": "Bagan/Nyaung-u Airport"
    },
    {
        "code": "NYW",
        "country": "MM",
        "state": "",
        "name": "Monywa Airport"
    },
    {
        "code": "NZH",
        "country": "CN",
        "state": "",
        "name": "Xijiao Airport"
    },
    {
        "code": "NZL",
        "country": "CN",
        "state": "",
        "name": "Chengjisihan Airport"
    },
    {
        "code": "OAG",
        "country": "AU",
        "state": "NS",
        "name": "Orange Airport"
    },
    {
        "code": "OAJ",
        "country": "US",
        "state": "NC",
        "name": "Albert J Ellis Airport"
    },
    {
        "code": "OAK",
        "country": "US",
        "state": "CA",
        "name": "Oakland International Airport"
    },
    {
        "code": "OAL",
        "country": "BR",
        "state": "RO",
        "name": "Capital do Cafe Airport"
    },
    {
        "code": "OAX",
        "country": "MX",
        "state": "",
        "name": "Xoxocotlan International Airport"
    },
    {
        "code": "OBN",
        "country": "GB",
        "state": "",
        "name": "North Connel Airport"
    },
    {
        "code": "OBO",
        "country": "JP",
        "state": "",
        "name": "Obihiro Airport"
    },
    {
        "code": "OBU",
        "country": "US",
        "state": "AK",
        "name": "Kobuk Airport"
    },
    {
        "code": "OBY",
        "country": "GL",
        "state": "",
        "name": "Ittoqqortoormiit Heliport"
    },
    {
        "code": "OCC",
        "country": "EC",
        "state": "",
        "name": "Francisco de Orellana Airport"
    },
    {
        "code": "OCJ",
        "country": "JM",
        "state": "",
        "name": "Ian Fleming International Airport"
    },
    {
        "code": "ODB",
        "country": "ES",
        "state": "",
        "name": "Cordoba Airport"
    },
    {
        "code": "ODN",
        "country": "MY",
        "state": "",
        "name": "Long Seridan Airport"
    },
    {
        "code": "ODO",
        "country": "RU",
        "state": "",
        "name": "Bodaybo Airport"
    },
    {
        "code": "ODY",
        "country": "LA",
        "state": "",
        "name": "Oudomxai Airport"
    },
    {
        "code": "OGD",
        "country": "US",
        "state": "UT",
        "name": "Hinckley Airport"
    },
    {
        "code": "OGG",
        "country": "US",
        "state": "HI",
        "name": "Kahului Airport"
    },
    {
        "code": "OGL",
        "country": "GY",
        "state": "",
        "name": "Ogle Airport"
    },
    {
        "code": "OGN",
        "country": "JP",
        "state": "",
        "name": "Yonaguni Airport"
    },
    {
        "code": "OGS",
        "country": "US",
        "state": "NY",
        "name": "Ogdensburg International Airport"
    },
    {
        "code": "OGU",
        "country": "TR",
        "state": "",
        "name": "Ordu/Giresun Airport"
    },
    {
        "code": "OGV",
        "country": "NA",
        "state": "",
        "name": "Ongava Airport"
    },
    {
        "code": "OGX",
        "country": "DZ",
        "state": "",
        "name": "Ain el Beida Airport"
    },
    {
        "code": "OGZ",
        "country": "RU",
        "state": "",
        "name": "Beslan Airport"
    },
    {
        "code": "OHD",
        "country": "MK",
        "state": "",
        "name": "Saint Paul the Apostle Airport"
    },
    {
        "code": "OHE",
        "country": "CN",
        "state": "",
        "name": "Gulian Airport"
    },
    {
        "code": "OHH",
        "country": "RU",
        "state": "",
        "name": "Novostroyka Airport"
    },
    {
        "code": "OHS",
        "country": "OM",
        "state": "",
        "name": "Sohar Airport"
    },
    {
        "code": "OIR",
        "country": "JP",
        "state": "",
        "name": "Okushiri Airport"
    },
    {
        "code": "OIT",
        "country": "JP",
        "state": "",
        "name": "Oita Airport"
    },
    {
        "code": "OJU",
        "country": "ID",
        "state": "",
        "name": "Tanjung Api Airport"
    },
    {
        "code": "OKA",
        "country": "JP",
        "state": "",
        "name": "Naha Airport"
    },
    {
        "code": "OKC",
        "country": "US",
        "state": "OK",
        "name": "Will Rogers World Airport"
    },
    {
        "code": "OKD",
        "country": "JP",
        "state": "",
        "name": "Okadama Airport"
    },
    {
        "code": "OKE",
        "country": "JP",
        "state": "",
        "name": "Okierabu Airport"
    },
    {
        "code": "OKI",
        "country": "JP",
        "state": "",
        "name": "Oki Airport"
    },
    {
        "code": "OKJ",
        "country": "JP",
        "state": "",
        "name": "Okayama Airport"
    },
    {
        "code": "OKL",
        "country": "ID",
        "state": "",
        "name": "Gunung Bintang Airport"
    },
    {
        "code": "OKR",
        "country": "AU",
        "state": "QL",
        "name": "Yorke Island Airport"
    },
    {
        "code": "OKU",
        "country": "NA",
        "state": "",
        "name": "Mokuti Lodge Airport"
    },
    {
        "code": "OLA",
        "country": "NO",
        "state": "",
        "name": "Orland Airport"
    },
    {
        "code": "OLB",
        "country": "IT",
        "state": "",
        "name": "Costa Smeralda Airport"
    },
    {
        "code": "OLF",
        "country": "US",
        "state": "MT",
        "name": "L.M. Clayton Airport"
    },
    {
        "code": "OLH",
        "country": "US",
        "state": "AK",
        "name": "Old Harbor Airport"
    },
    {
        "code": "OLP",
        "country": "AU",
        "state": "SA",
        "name": "Olympic Dam Airport"
    },
    {
        "code": "OLZ",
        "country": "RU",
        "state": "",
        "name": "Olekminsk Airport"
    },
    {
        "code": "OMA",
        "country": "US",
        "state": "NE",
        "name": "Eppley Airfield"
    },
    {
        "code": "OMD",
        "country": "NA",
        "state": "",
        "name": "Oranjemund Airport"
    },
    {
        "code": "OME",
        "country": "US",
        "state": "AK",
        "name": "Nome Airport"
    },
    {
        "code": "OMH",
        "country": "IR",
        "state": "",
        "name": "Urumiyeh Airport"
    },
    {
        "code": "OMO",
        "country": "BA",
        "state": "",
        "name": "Mostar International Airport"
    },
    {
        "code": "OMR",
        "country": "RO",
        "state": "",
        "name": "Oradea Airport"
    },
    {
        "code": "OMS",
        "country": "RU",
        "state": "",
        "name": "Tsentralny Airport"
    },
    {
        "code": "OND",
        "country": "NA",
        "state": "",
        "name": "Ondangwa Airport"
    },
    {
        "code": "ONG",
        "country": "AU",
        "state": "QL",
        "name": "Mornington Island Airport"
    },
    {
        "code": "ONJ",
        "country": "JP",
        "state": "",
        "name": "Odate/Noshiro Noshiro Airport"
    },
    {
        "code": "ONK",
        "country": "RU",
        "state": "",
        "name": "Olenek Airport"
    },
    {
        "code": "ONQ",
        "country": "TR",
        "state": "",
        "name": "Caycuma Airport"
    },
    {
        "code": "ONS",
        "country": "AU",
        "state": "WA",
        "name": "Onslow Airport"
    },
    {
        "code": "ONT",
        "country": "US",
        "state": "CA",
        "name": "Ontario International Airport"
    },
    {
        "code": "OOK",
        "country": "US",
        "state": "AK",
        "name": "Toksook Bay Airport"
    },
    {
        "code": "OOL",
        "country": "AU",
        "state": "QL",
        "name": "Coolangatta Airport"
    },
    {
        "code": "OOT",
        "country": "KI",
        "state": "",
        "name": "Onotoa Airport"
    },
    {
        "code": "OPF",
        "country": "US",
        "state": "FL",
        "name": "Opa-locka Executive Airport"
    },
    {
        "code": "OPO",
        "country": "PT",
        "state": "",
        "name": "Francisco Sa Carneiro Airport"
    },
    {
        "code": "OPP",
        "country": "BR",
        "state": "PA",
        "name": "Salinopolis Airport"
    },
    {
        "code": "OPS",
        "country": "BR",
        "state": "MT",
        "name": "Jao B. Figueiredo Airport"
    },
    {
        "code": "ORB",
        "country": "SE",
        "state": "",
        "name": "Orebro Airport"
    },
    {
        "code": "ORD",
        "country": "US",
        "state": "IL",
        "name": "O'Hare International Airport"
    },
    {
        "code": "ORF",
        "country": "US",
        "state": "VA",
        "name": "Norfolk International Airport"
    },
    {
        "code": "ORH",
        "country": "US",
        "state": "MA",
        "name": "Worcester Regional Airport"
    },
    {
        "code": "ORI",
        "country": "US",
        "state": "AK",
        "name": "Port Lions Airport"
    },
    {
        "code": "ORK",
        "country": "IE",
        "state": "",
        "name": "Cork International Airport"
    },
    {
        "code": "ORN",
        "country": "DZ",
        "state": "",
        "name": "Ahmed Ben Bella Airport"
    },
    {
        "code": "ORT",
        "country": "US",
        "state": "AK",
        "name": "Northway Airport"
    },
    {
        "code": "ORU",
        "country": "BO",
        "state": "",
        "name": "Juan Mendoza Airport"
    },
    {
        "code": "ORV",
        "country": "US",
        "state": "AK",
        "name": "R. (Bob) Curtis Memorial Airport"
    },
    {
        "code": "ORX",
        "country": "BR",
        "state": "PA",
        "name": "Oriximina Airport"
    },
    {
        "code": "ORY",
        "country": "FR",
        "state": "",
        "name": "Orly Airport"
    },
    {
        "code": "OSD",
        "country": "SE",
        "state": "",
        "name": "Are/Ostersund Airport"
    },
    {
        "code": "OSI",
        "country": "HR",
        "state": "",
        "name": "Osijek Airport"
    },
    {
        "code": "OSL",
        "country": "NO",
        "state": "",
        "name": "Gardermoen Airport"
    },
    {
        "code": "OSR",
        "country": "CZ",
        "state": "",
        "name": "Leos Janacek Airport"
    },
    {
        "code": "OSS",
        "country": "KG",
        "state": "",
        "name": "Osh Airport"
    },
    {
        "code": "OST",
        "country": "BE",
        "state": "",
        "name": "Oostende/Brugge Airport"
    },
    {
        "code": "OSW",
        "country": "RU",
        "state": "",
        "name": "Orsk Airport"
    },
    {
        "code": "OSY",
        "country": "NO",
        "state": "",
        "name": "Namsos Airport"
    },
    {
        "code": "OTH",
        "country": "US",
        "state": "OR",
        "name": "Southwest Oregon Regional Airport"
    },
    {
        "code": "OTI",
        "country": "ID",
        "state": "",
        "name": "Pitu Airport"
    },
    {
        "code": "OTP",
        "country": "RO",
        "state": "",
        "name": "Henri Coanda Airport"
    },
    {
        "code": "OTZ",
        "country": "US",
        "state": "AK",
        "name": "Ralph Wien Memorial Airport"
    },
    {
        "code": "OUA",
        "country": "BF",
        "state": "",
        "name": "Ouagadougou Airport"
    },
    {
        "code": "OUD",
        "country": "MA",
        "state": "",
        "name": "Angads Airport"
    },
    {
        "code": "OUL",
        "country": "FI",
        "state": "",
        "name": "Oulu Airport"
    },
    {
        "code": "OUQ",
        "country": "ES",
        "state": "",
        "name": "Ourense Railway Station"
    },
    {
        "code": "OUZ",
        "country": "MR",
        "state": "",
        "name": "Tazadit Airport"
    },
    {
        "code": "OVB",
        "country": "RU",
        "state": "",
        "name": "Tolmachevo Airport"
    },
    {
        "code": "OVD",
        "country": "ES",
        "state": "",
        "name": "Asturias Airport"
    },
    {
        "code": "OVI",
        "country": "ES",
        "state": "",
        "name": "Oviedo Railway Station"
    },
    {
        "code": "OVS",
        "country": "RU",
        "state": "",
        "name": "Sovetsky Airport"
    },
    {
        "code": "OWB",
        "country": "US",
        "state": "KY",
        "name": "Daviess County Airport"
    },
    {
        "code": "OXB",
        "country": "GW",
        "state": "",
        "name": "Osvaldo Vieira International Airport"
    },
    {
        "code": "OXF",
        "country": "GB",
        "state": "",
        "name": "London Oxford Airport"
    },
    {
        "code": "OXQ",
        "country": "GB",
        "state": "",
        "name": "Oxford Railway Station"
    },
    {
        "code": "OYE",
        "country": "GA",
        "state": "",
        "name": "Oyem Airport"
    },
    {
        "code": "OZC",
        "country": "PH",
        "state": "",
        "name": "Labo Airport"
    },
    {
        "code": "OZG",
        "country": "MA",
        "state": "",
        "name": "Zagora Airport"
    },
    {
        "code": "OZL",
        "country": "ES",
        "state": "",
        "name": "Orzola Ferry Port"
    },
    {
        "code": "OZZ",
        "country": "MA",
        "state": "",
        "name": "Ouarzazate Airport"
    },
    {
        "code": "PAB",
        "country": "IN",
        "state": "CT",
        "name": "Bilaspur Airport"
    },
    {
        "code": "PAC",
        "country": "PA",
        "state": "",
        "name": "Marcos A. Gelabert International Airpor"
    },
    {
        "code": "PAD",
        "country": "DE",
        "state": "",
        "name": "Paderborn Airport"
    },
    {
        "code": "PAE",
        "country": "US",
        "state": "WA",
        "name": "Snohomish County Airport"
    },
    {
        "code": "PAG",
        "country": "PH",
        "state": "",
        "name": "Pagadian Airport"
    },
    {
        "code": "PAH",
        "country": "US",
        "state": "KY",
        "name": "Barkley Regional Airport"
    },
    {
        "code": "PAP",
        "country": "HT",
        "state": "",
        "name": "Toussaint Louverture Airport"
    },
    {
        "code": "PAS",
        "country": "GR",
        "state": "",
        "name": "Paros Airport"
    },
    {
        "code": "PAT",
        "country": "IN",
        "state": "BR",
        "name": "Jayaprakash Narayan Airport"
    },
    {
        "code": "PAV",
        "country": "BR",
        "state": "BA",
        "name": "Paulo Afonso Airport"
    },
    {
        "code": "PBC",
        "country": "MX",
        "state": "",
        "name": "Hermanos Serdan International Airport"
    },
    {
        "code": "PBD",
        "country": "IN",
        "state": "GJ",
        "name": "Porbandar Airport"
    },
    {
        "code": "PBG",
        "country": "US",
        "state": "NY",
        "name": "Plattsburgh International Airport"
    },
    {
        "code": "PBH",
        "country": "BT",
        "state": "",
        "name": "Paro International Airport"
    },
    {
        "code": "PBI",
        "country": "US",
        "state": "FL",
        "name": "Palm Beach International Airport"
    },
    {
        "code": "PBJ",
        "country": "VU",
        "state": "",
        "name": "Paama Island Airport"
    },
    {
        "code": "PBM",
        "country": "SR",
        "state": "",
        "name": "Johan Adolf Pengel International Airpor"
    },
    {
        "code": "PBO",
        "country": "AU",
        "state": "WA",
        "name": "Paraburdoo Airport"
    },
    {
        "code": "PBP",
        "country": "CR",
        "state": "",
        "name": "Islita Airport"
    },
    {
        "code": "PBR",
        "country": "GT",
        "state": "",
        "name": "Puerto Barrios Airport"
    },
    {
        "code": "PBU",
        "country": "MM",
        "state": "",
        "name": "Putao Airport"
    },
    {
        "code": "PBZ",
        "country": "ZA",
        "state": "",
        "name": "Plettenberg Bay Airport"
    },
    {
        "code": "PCE",
        "country": "IT",
        "state": "",
        "name": "Pisa Railway Station"
    },
    {
        "code": "PCI",
        "country": "ES",
        "state": "",
        "name": "Palencia Railway Station"
    },
    {
        "code": "PCL",
        "country": "PE",
        "state": "",
        "name": "David Abenzur Rengifo International Air"
    },
    {
        "code": "PCN",
        "country": "NZ",
        "state": "",
        "name": "Picton Airport"
    },
    {
        "code": "PCP",
        "country": "ST",
        "state": "",
        "name": "Principe Island Airport"
    },
    {
        "code": "PCQ",
        "country": "LA",
        "state": "",
        "name": "Boun Neua Airport"
    },
    {
        "code": "PCR",
        "country": "CO",
        "state": "",
        "name": "German Olano Airport"
    },
    {
        "code": "PCW",
        "country": "GB",
        "state": "",
        "name": "Par Railway Station"
    },
    {
        "code": "PDA",
        "country": "CO",
        "state": "",
        "name": "Obando Airport"
    },
    {
        "code": "PDB",
        "country": "US",
        "state": "AK",
        "name": "Pedro Bay Airport"
    },
    {
        "code": "PDG",
        "country": "ID",
        "state": "",
        "name": "Minangkabau Airport"
    },
    {
        "code": "PDL",
        "country": "PT",
        "state": "",
        "name": "Joao Paulo II Airport"
    },
    {
        "code": "PDP",
        "country": "UY",
        "state": "",
        "name": "Carlos A. Curbelo International Airport"
    },
    {
        "code": "PDS",
        "country": "MX",
        "state": "",
        "name": "Piedras Negras International Airport"
    },
    {
        "code": "PDT",
        "country": "US",
        "state": "OR",
        "name": "Eastern Oregon Regional Airport"
    },
    {
        "code": "PDV",
        "country": "BG",
        "state": "",
        "name": "Krumovo Airport"
    },
    {
        "code": "PDX",
        "country": "US",
        "state": "OR",
        "name": "Portland International Airport"
    },
    {
        "code": "PEC",
        "country": "US",
        "state": "AK",
        "name": "Pelican Sea Plane Base"
    },
    {
        "code": "PED",
        "country": "CZ",
        "state": "",
        "name": "Pardubice Airport"
    },
    {
        "code": "PEE",
        "country": "RU",
        "state": "",
        "name": "Bolshoye Savino Airport"
    },
    {
        "code": "PEG",
        "country": "IT",
        "state": "",
        "name": "Saint Francis of Assisi Airport"
    },
    {
        "code": "PEI",
        "country": "CO",
        "state": "",
        "name": "Matecana International Airport"
    },
    {
        "code": "PEK",
        "country": "CN",
        "state": "",
        "name": "Beijing Capital International Airport"
    },
    {
        "code": "PEM",
        "country": "PE",
        "state": "",
        "name": "Padre Aldamiz International Airport"
    },
    {
        "code": "PEN",
        "country": "MY",
        "state": "",
        "name": "Penang International Airport"
    },
    {
        "code": "PER",
        "country": "AU",
        "state": "WA",
        "name": "Perth International Airport"
    },
    {
        "code": "PES",
        "country": "RU",
        "state": "",
        "name": "Besovets Airport"
    },
    {
        "code": "PET",
        "country": "BR",
        "state": "RS",
        "name": "Pelotas International Airport"
    },
    {
        "code": "PEU",
        "country": "HN",
        "state": "",
        "name": "Puerto Lempira Airport"
    },
    {
        "code": "PEV",
        "country": "HU",
        "state": "",
        "name": "Pogany Airport"
    },
    {
        "code": "PEW",
        "country": "PK",
        "state": "",
        "name": "Bacha Khan International Airport"
    },
    {
        "code": "PEX",
        "country": "RU",
        "state": "",
        "name": "Pechora Airport"
    },
    {
        "code": "PEZ",
        "country": "RU",
        "state": "",
        "name": "Ternovka Airport"
    },
    {
        "code": "PFB",
        "country": "BR",
        "state": "RS",
        "name": "Lauro Kurtz Airport"
    },
    {
        "code": "PFO",
        "country": "CY",
        "state": "",
        "name": "Paphos International Airport"
    },
    {
        "code": "PFQ",
        "country": "IR",
        "state": "",
        "name": "Moghan Airport"
    },
    {
        "code": "PFT",
        "country": "CN",
        "state": "",
        "name": "Pazhou"
    },
    {
        "code": "PGA",
        "country": "US",
        "state": "AZ",
        "name": "Page Municipal Airport"
    },
    {
        "code": "PGD",
        "country": "US",
        "state": "FL",
        "name": "Punta Gorda Airport"
    },
    {
        "code": "PGF",
        "country": "FR",
        "state": "",
        "name": "Rivesaltes Airport"
    },
    {
        "code": "PGH",
        "country": "IN",
        "state": "UT",
        "name": "Pantnagar Airport"
    },
    {
        "code": "PGK",
        "country": "ID",
        "state": "",
        "name": "Depati Amir Airport"
    },
    {
        "code": "PGU",
        "country": "IR",
        "state": "",
        "name": "Persian Gulf International Airport"
    },
    {
        "code": "PGV",
        "country": "US",
        "state": "NC",
        "name": "Pitt-Greenville Airport"
    },
    {
        "code": "PGZ",
        "country": "BR",
        "state": "PR",
        "name": "Antonio Amilton Beraldo Airport"
    },
    {
        "code": "PHB",
        "country": "BR",
        "state": "PI",
        "name": "Joao Silva Filho International Airport"
    },
    {
        "code": "PHC",
        "country": "NG",
        "state": "",
        "name": "Port Harcourt International Airport"
    },
    {
        "code": "PHE",
        "country": "AU",
        "state": "WA",
        "name": "Port Hedland International Airport"
    },
    {
        "code": "PHF",
        "country": "US",
        "state": "VA",
        "name": "Newport News/Williamsburg International"
    },
    {
        "code": "PHL",
        "country": "US",
        "state": "PA",
        "name": "Philadelphia International Airport"
    },
    {
        "code": "PHO",
        "country": "US",
        "state": "AK",
        "name": "Point Hope Airport"
    },
    {
        "code": "PHS",
        "country": "TH",
        "state": "",
        "name": "Phitsanulok Airport"
    },
    {
        "code": "PHX",
        "country": "US",
        "state": "AZ",
        "name": "Sky Harbor International Airport"
    },
    {
        "code": "PIA",
        "country": "US",
        "state": "IL",
        "name": "General Downing International Airport"
    },
    {
        "code": "PIB",
        "country": "US",
        "state": "MS",
        "name": "Hattiesburg-Laurel Regional Airport"
    },
    {
        "code": "PIE",
        "country": "US",
        "state": "FL",
        "name": "Saint Pete-Clearwater International Air"
    },
    {
        "code": "PIH",
        "country": "US",
        "state": "ID",
        "name": "Pocatello Regional Airport"
    },
    {
        "code": "PIK",
        "country": "GB",
        "state": "",
        "name": "Prestwick Airport"
    },
    {
        "code": "PIN",
        "country": "BR",
        "state": "AM",
        "name": "Julio Belem Airport"
    },
    {
        "code": "PIP",
        "country": "US",
        "state": "AK",
        "name": "Pilot Point Airport"
    },
    {
        "code": "PIR",
        "country": "US",
        "state": "SD",
        "name": "Pierre Regional Airport"
    },
    {
        "code": "PIS",
        "country": "FR",
        "state": "",
        "name": "Biard Airport"
    },
    {
        "code": "PIT",
        "country": "US",
        "state": "PA",
        "name": "Pittsburgh International Airport"
    },
    {
        "code": "PIU",
        "country": "PE",
        "state": "",
        "name": "Guillermo Concha Iberico International"
    },
    {
        "code": "PIX",
        "country": "PT",
        "state": "",
        "name": "Pico Island Airport"
    },
    {
        "code": "PIZ",
        "country": "US",
        "state": "AK",
        "name": "Point Lay Airport"
    },
    {
        "code": "PJM",
        "country": "CR",
        "state": "",
        "name": "Puerto Jimenez Airport"
    },
    {
        "code": "PKB",
        "country": "US",
        "state": "WV",
        "name": "Mid-Ohio Valley Regional Airport"
    },
    {
        "code": "PKC",
        "country": "RU",
        "state": "",
        "name": "Yelizovo Airport"
    },
    {
        "code": "PKE",
        "country": "AU",
        "state": "NS",
        "name": "Parkes Airport"
    },
    {
        "code": "PKN",
        "country": "ID",
        "state": "",
        "name": "Iskandar Airport"
    },
    {
        "code": "PKP",
        "country": "PF",
        "state": "",
        "name": "Puka Puka Airport"
    },
    {
        "code": "PKR",
        "country": "NP",
        "state": "",
        "name": "Pokhara Airport"
    },
    {
        "code": "PKU",
        "country": "ID",
        "state": "",
        "name": "Sultan Syarif Kasim II Airport"
    },
    {
        "code": "PKV",
        "country": "RU",
        "state": "",
        "name": "Pskov Airport"
    },
    {
        "code": "PKX",
        "country": "CN",
        "state": "",
        "name": "Daxing International Airport"
    },
    {
        "code": "PKY",
        "country": "ID",
        "state": "",
        "name": "Tjilik Riwut Airport"
    },
    {
        "code": "PKZ",
        "country": "LA",
        "state": "",
        "name": "Pakse International Airport"
    },
    {
        "code": "PLH",
        "country": "GB",
        "state": "",
        "name": "Plymouth City Airport"
    },
    {
        "code": "PLJ",
        "country": "BZ",
        "state": "",
        "name": "Placencia Airport"
    },
    {
        "code": "PLM",
        "country": "ID",
        "state": "",
        "name": "S M Badaruddin II Airport"
    },
    {
        "code": "PLN",
        "country": "US",
        "state": "MI",
        "name": "Pellston Regional Airport of Emmet Coun"
    },
    {
        "code": "PLO",
        "country": "AU",
        "state": "SA",
        "name": "Port Lincoln Airport"
    },
    {
        "code": "PLQ",
        "country": "LT",
        "state": "",
        "name": "Palanga International Airport"
    },
    {
        "code": "PLS",
        "country": "TC",
        "state": "",
        "name": "Providenciales International Airport"
    },
    {
        "code": "PLW",
        "country": "ID",
        "state": "",
        "name": "Mutiara Airport"
    },
    {
        "code": "PLX",
        "country": "KZ",
        "state": "",
        "name": "Semey Airport"
    },
    {
        "code": "PLZ",
        "country": "ZA",
        "state": "",
        "name": "Port Elizabeth Airport"
    },
    {
        "code": "PMA",
        "country": "TZ",
        "state": "",
        "name": "Pemba Airport"
    },
    {
        "code": "PMC",
        "country": "CL",
        "state": "",
        "name": "El Tepual Airport"
    },
    {
        "code": "PMF",
        "country": "IT",
        "state": "",
        "name": "Parma Airport"
    },
    {
        "code": "PMG",
        "country": "BR",
        "state": "MS",
        "name": "Ponta Pora International Airport"
    },
    {
        "code": "PMI",
        "country": "ES",
        "state": "",
        "name": "Palma de Mallorca Airport"
    },
    {
        "code": "PMK",
        "country": "AU",
        "state": "QL",
        "name": "Palm Island Airport"
    },
    {
        "code": "PML",
        "country": "US",
        "state": "AK",
        "name": "Port Moller Airport"
    },
    {
        "code": "PMO",
        "country": "IT",
        "state": "",
        "name": "Punta Raisi Airport"
    },
    {
        "code": "PMR",
        "country": "NZ",
        "state": "",
        "name": "Palmerston North Airport"
    },
    {
        "code": "PMV",
        "country": "VE",
        "state": "",
        "name": "Del Caribe International Airport"
    },
    {
        "code": "PMW",
        "country": "BR",
        "state": "TO",
        "name": "Lysias Rodrigues Airport"
    },
    {
        "code": "PMY",
        "country": "AR",
        "state": "CB",
        "name": "El Tehuelche Airport"
    },
    {
        "code": "PMZ",
        "country": "CR",
        "state": "",
        "name": "Palmar Sur Airport"
    },
    {
        "code": "PNA",
        "country": "ES",
        "state": "",
        "name": "Pamplona Airport"
    },
    {
        "code": "PND",
        "country": "BZ",
        "state": "",
        "name": "Punta Gorda Airport"
    },
    {
        "code": "PNH",
        "country": "KH",
        "state": "",
        "name": "Phnom Penh International Airport"
    },
    {
        "code": "PNI",
        "country": "FM",
        "state": "",
        "name": "Pohnpei International Airport"
    },
    {
        "code": "PNK",
        "country": "ID",
        "state": "",
        "name": "Supadio Airport"
    },
    {
        "code": "PNL",
        "country": "IT",
        "state": "",
        "name": "Pantelleria Airport"
    },
    {
        "code": "PNP",
        "country": "PG",
        "state": "",
        "name": "Girua Airport"
    },
    {
        "code": "PNQ",
        "country": "IN",
        "state": "MH",
        "name": "Lohegaon Airport"
    },
    {
        "code": "PNR",
        "country": "CG",
        "state": "",
        "name": "Pointe-Noire Airport"
    },
    {
        "code": "PNS",
        "country": "US",
        "state": "FL",
        "name": "Pensacola International Airport"
    },
    {
        "code": "PNT",
        "country": "CL",
        "state": "",
        "name": "Teniente J. Gallardo Airport"
    },
    {
        "code": "PNY",
        "country": "IN",
        "state": "PY",
        "name": "Pondicherry Airport"
    },
    {
        "code": "PNZ",
        "country": "BR",
        "state": "PE",
        "name": "Senador Nilo Coelho Airport"
    },
    {
        "code": "POA",
        "country": "BR",
        "state": "RS",
        "name": "Salgado Filho International Airport"
    },
    {
        "code": "POG",
        "country": "GA",
        "state": "",
        "name": "Port-Gentil International Airport"
    },
    {
        "code": "POJ",
        "country": "BR",
        "state": "MG",
        "name": "Pedro Pereira dos Santos Airport"
    },
    {
        "code": "POK",
        "country": "AT",
        "state": "",
        "name": "Saint Poelten Railway Station"
    },
    {
        "code": "POL",
        "country": "MZ",
        "state": "",
        "name": "Pemba Airport"
    },
    {
        "code": "POM",
        "country": "PG",
        "state": "",
        "name": "Jacksons International Airport"
    },
    {
        "code": "POP",
        "country": "DO",
        "state": "",
        "name": "Gregorio Luperon International Airport"
    },
    {
        "code": "POQ",
        "country": "GB",
        "state": "",
        "name": "Poole Bus Station"
    },
    {
        "code": "POS",
        "country": "TT",
        "state": "",
        "name": "Piarco International Airport"
    },
    {
        "code": "POZ",
        "country": "PL",
        "state": "",
        "name": "Lawica Airport"
    },
    {
        "code": "PPB",
        "country": "BR",
        "state": "SP",
        "name": "Presidente Prudente Airport"
    },
    {
        "code": "PPG",
        "country": "AS",
        "state": "",
        "name": "Pago Pago International Airport"
    },
    {
        "code": "PPK",
        "country": "KZ",
        "state": "",
        "name": "Petropavlovsk Airport"
    },
    {
        "code": "PPN",
        "country": "CO",
        "state": "",
        "name": "Guillermo L. Valencia Airport"
    },
    {
        "code": "PPP",
        "country": "AU",
        "state": "QL",
        "name": "Whitsunday Coast Airport"
    },
    {
        "code": "PPQ",
        "country": "NZ",
        "state": "",
        "name": "Kapiti Coast Airport"
    },
    {
        "code": "PPS",
        "country": "PH",
        "state": "",
        "name": "Puerto Princesa International Airport"
    },
    {
        "code": "PPT",
        "country": "PF",
        "state": "",
        "name": "Faaa Airport"
    },
    {
        "code": "PQC",
        "country": "VN",
        "state": "",
        "name": "Phu Quoc International Airport"
    },
    {
        "code": "PQI",
        "country": "US",
        "state": "ME",
        "name": "Northern Maine Regional Airport"
    },
    {
        "code": "PQQ",
        "country": "AU",
        "state": "NS",
        "name": "Port Macquarie Airport"
    },
    {
        "code": "PQS",
        "country": "US",
        "state": "AK",
        "name": "Pilot Station Airport"
    },
    {
        "code": "PQT",
        "country": "GL",
        "state": "",
        "name": "Qeqertaq Heliport"
    },
    {
        "code": "PRA",
        "country": "AR",
        "state": "ER",
        "name": "General Urquiza Airport"
    },
    {
        "code": "PRC",
        "country": "US",
        "state": "AZ",
        "name": "Ernest A. Love Field"
    },
    {
        "code": "PRG",
        "country": "CZ",
        "state": "",
        "name": "Ruzyne Airport"
    },
    {
        "code": "PRI",
        "country": "SC",
        "state": "",
        "name": "Praslin Island Airport"
    },
    {
        "code": "PRN",
        "country": "RS",
        "state": "",
        "name": "Pristina International Airport"
    },
    {
        "code": "PRS",
        "country": "SB",
        "state": "",
        "name": "Parasi Airport"
    },
    {
        "code": "PSA",
        "country": "IT",
        "state": "",
        "name": "Galileo Galilei Airport"
    },
    {
        "code": "PSC",
        "country": "US",
        "state": "WA",
        "name": "Tri-Cities Airport"
    },
    {
        "code": "PSE",
        "country": "PR",
        "state": "",
        "name": "Mercedita Airport"
    },
    {
        "code": "PSG",
        "country": "US",
        "state": "AK",
        "name": "James A. Johnson Airport"
    },
    {
        "code": "PSM",
        "country": "US",
        "state": "MA",
        "name": "Portsmouth Pease International"
    },
    {
        "code": "PSO",
        "country": "CO",
        "state": "",
        "name": "Antonio Narino Airport"
    },
    {
        "code": "PSP",
        "country": "US",
        "state": "CA",
        "name": "Palm Springs International Airport"
    },
    {
        "code": "PSR",
        "country": "IT",
        "state": "",
        "name": "Abruzzo Airport"
    },
    {
        "code": "PSS",
        "country": "AR",
        "state": "MI",
        "name": "Jose de San Martin Airport"
    },
    {
        "code": "PSU",
        "country": "ID",
        "state": "",
        "name": "Pangsuma Airport"
    },
    {
        "code": "PTA",
        "country": "US",
        "state": "AK",
        "name": "Port Alsworth Airport"
    },
    {
        "code": "PTG",
        "country": "ZA",
        "state": "",
        "name": "Polokwane International Airport"
    },
    {
        "code": "PTH",
        "country": "US",
        "state": "AK",
        "name": "Port Heiden Airport"
    },
    {
        "code": "PTO",
        "country": "BR",
        "state": "PR",
        "name": "Juvenal Loureiro Cardoso Airport"
    },
    {
        "code": "PTP",
        "country": "GP",
        "state": "",
        "name": "Le Raizet Airport"
    },
    {
        "code": "PTQ",
        "country": "BR",
        "state": "PA",
        "name": "Porto de Moz Airport"
    },
    {
        "code": "PTX",
        "country": "CO",
        "state": "",
        "name": "Pitalito Airport"
    },
    {
        "code": "PTY",
        "country": "PA",
        "state": "",
        "name": "Tocumen International Airport"
    },
    {
        "code": "PUB",
        "country": "US",
        "state": "CO",
        "name": "Pueblo Memorial Airport"
    },
    {
        "code": "PUF",
        "country": "FR",
        "state": "",
        "name": "Pyrenees Airport"
    },
    {
        "code": "PUJ",
        "country": "DO",
        "state": "",
        "name": "Punta Cana International Airport"
    },
    {
        "code": "PUK",
        "country": "PF",
        "state": "",
        "name": "Pukarua Airport"
    },
    {
        "code": "PUQ",
        "country": "CL",
        "state": "",
        "name": "Carlos Ibanez del Campo Airport"
    },
    {
        "code": "PUS",
        "country": "KR",
        "state": "",
        "name": "Gimhae International Airport"
    },
    {
        "code": "PUU",
        "country": "CO",
        "state": "",
        "name": "Tres de Mayo Airport"
    },
    {
        "code": "PUW",
        "country": "US",
        "state": "WA",
        "name": "Pullman WA/Moscow ID Regional Airport"
    },
    {
        "code": "PUY",
        "country": "HR",
        "state": "",
        "name": "Pula Airport"
    },
    {
        "code": "PUZ",
        "country": "NI",
        "state": "",
        "name": "Puerto Cabezas Airport"
    },
    {
        "code": "PVA",
        "country": "CO",
        "state": "",
        "name": "El Embrujo Airport"
    },
    {
        "code": "PVC",
        "country": "US",
        "state": "MA",
        "name": "Provincetown Municipal Airport"
    },
    {
        "code": "PVD",
        "country": "US",
        "state": "RI",
        "name": "T.F. Green State Airport"
    },
    {
        "code": "PVG",
        "country": "CN",
        "state": "",
        "name": "Pudong International Airport"
    },
    {
        "code": "PVH",
        "country": "BR",
        "state": "RO",
        "name": "Jorge Teixeira de Oliveira Internationa"
    },
    {
        "code": "PVK",
        "country": "GR",
        "state": "",
        "name": "Aktion Airport"
    },
    {
        "code": "PVR",
        "country": "MX",
        "state": "",
        "name": "Gustavo Diaz Ordaz International Airpor"
    },
    {
        "code": "PVU",
        "country": "US",
        "state": "UT",
        "name": "Provo Municipal Airport"
    },
    {
        "code": "PWE",
        "country": "RU",
        "state": "",
        "name": "Pevek Airport"
    },
    {
        "code": "PWM",
        "country": "US",
        "state": "ME",
        "name": "Portland International Jetport"
    },
    {
        "code": "PWQ",
        "country": "KZ",
        "state": "",
        "name": "Pavlodar Airport"
    },
    {
        "code": "PXM",
        "country": "MX",
        "state": "",
        "name": "Puerto Escondido International Airport"
    },
    {
        "code": "PXO",
        "country": "PT",
        "state": "",
        "name": "Porto Santo Airport"
    },
    {
        "code": "PXU",
        "country": "VN",
        "state": "",
        "name": "Pleiku Airport"
    },
    {
        "code": "PYB",
        "country": "IN",
        "state": "OR",
        "name": "Jeypore Airport"
    },
    {
        "code": "PYG",
        "country": "IN",
        "state": "",
        "name": "Pakyong Airport"
    },
    {
        "code": "PYH",
        "country": "VE",
        "state": "",
        "name": "Cacique Aramare Airport"
    },
    {
        "code": "PYJ",
        "country": "RU",
        "state": "",
        "name": "Polyarny Airport"
    },
    {
        "code": "PYT",
        "country": "BR",
        "state": "MG",
        "name": "Paracatu Airport"
    },
    {
        "code": "PZB",
        "country": "ZA",
        "state": "",
        "name": "Pietermaritzburg Airport"
    },
    {
        "code": "PZE",
        "country": "GB",
        "state": "",
        "name": "Penzance Heliport"
    },
    {
        "code": "PZI",
        "country": "CN",
        "state": "",
        "name": "Bao'angong Airport"
    },
    {
        "code": "PZO",
        "country": "VE",
        "state": "",
        "name": "Manuel Carlos Piar Airport"
    },
    {
        "code": "PZU",
        "country": "SD",
        "state": "",
        "name": "Port Sudan New International Airport"
    },
    {
        "code": "QAR",
        "country": "NL",
        "state": "",
        "name": "Arnhem Bus Station"
    },
    {
        "code": "QBC",
        "country": "CA",
        "state": "BC",
        "name": "Bella Coola Airport"
    },
    {
        "code": "QCU",
        "country": "GL",
        "state": "",
        "name": "Akunnaaq Heliport"
    },
    {
        "code": "QDL",
        "country": "CH",
        "state": "",
        "name": "Lugano Railway Station"
    },
    {
        "code": "QDU",
        "country": "DE",
        "state": "",
        "name": "Duesseldorf Hbf Railway Station"
    },
    {
        "code": "QEW",
        "country": "GB",
        "state": "",
        "name": "Leicester Railway Station"
    },
    {
        "code": "QFB",
        "country": "DE",
        "state": "",
        "name": "Freiburg Hbf Railway Station"
    },
    {
        "code": "QFG",
        "country": "GL",
        "state": "",
        "name": "Eqalugaarsuit Heliport"
    },
    {
        "code": "QFI",
        "country": "GL",
        "state": "",
        "name": "Iginniarfik Heliport"
    },
    {
        "code": "QFN",
        "country": "GL",
        "state": "",
        "name": "Narsaq Kujalleq Heliport"
    },
    {
        "code": "QGL",
        "country": "CH",
        "state": "",
        "name": "Saint Gallen Railway Station"
    },
    {
        "code": "QGN",
        "country": "ES",
        "state": "",
        "name": "Tarragona Camp Railway Station"
    },
    {
        "code": "QGP",
        "country": "BR",
        "state": "PE",
        "name": "Off-line Point"
    },
    {
        "code": "QGQ",
        "country": "GL",
        "state": "",
        "name": "Attu Heliport"
    },
    {
        "code": "QGY",
        "country": "HU",
        "state": "",
        "name": "Gyor Railway Station"
    },
    {
        "code": "QIG",
        "country": "BR",
        "state": "CE",
        "name": "Iguatu Airport"
    },
    {
        "code": "QJE",
        "country": "GL",
        "state": "",
        "name": "Kitsissuarsuit Heliport"
    },
    {
        "code": "QJG",
        "country": "GL",
        "state": "",
        "name": "Off-line Point"
    },
    {
        "code": "QJI",
        "country": "GL",
        "state": "",
        "name": "Ikamiut Heliport"
    },
    {
        "code": "QJZ",
        "country": "FR",
        "state": "",
        "name": "Nantes Railway Station"
    },
    {
        "code": "QKL",
        "country": "DE",
        "state": "",
        "name": "Cologne Hbf Railway Station"
    },
    {
        "code": "QKU",
        "country": "DE",
        "state": "",
        "name": "Messe/Deutz Railway Station"
    },
    {
        "code": "QLJ",
        "country": "CH",
        "state": "",
        "name": "Lucerne Railway Station"
    },
    {
        "code": "QLP",
        "country": "IT",
        "state": "",
        "name": "La Spezia Railway Station"
    },
    {
        "code": "QLS",
        "country": "CH",
        "state": "",
        "name": "Lausanne Railway Station"
    },
    {
        "code": "QMK",
        "country": "GL",
        "state": "",
        "name": "Niaqornaarsuk Heliport"
    },
    {
        "code": "QNQ",
        "country": "NL",
        "state": "",
        "name": "Nijmegen Railway Station"
    },
    {
        "code": "QOW",
        "country": "NG",
        "state": "",
        "name": "Sam Mbakwe International Airport"
    },
    {
        "code": "QPA",
        "country": "IT",
        "state": "",
        "name": "Padova Central Railway Station"
    },
    {
        "code": "QPP",
        "country": "DE",
        "state": "",
        "name": "Berlin Hbf Railway Station"
    },
    {
        "code": "QPW",
        "country": "GL",
        "state": "",
        "name": "Kangaatsiaq Heliport"
    },
    {
        "code": "QQK",
        "country": "GB",
        "state": "",
        "name": "Kings Cross Railway Station"
    },
    {
        "code": "QQM",
        "country": "GB",
        "state": "",
        "name": "Piccadilly Railway Station"
    },
    {
        "code": "QQN",
        "country": "GB",
        "state": "",
        "name": "Birmingham New Street Railway Station"
    },
    {
        "code": "QQP",
        "country": "GB",
        "state": "",
        "name": "Paddington Railway Station"
    },
    {
        "code": "QQS",
        "country": "GB",
        "state": "",
        "name": "Saint Pancras International Railway Sta"
    },
    {
        "code": "QQU",
        "country": "GB",
        "state": "",
        "name": "Euston Railway Station"
    },
    {
        "code": "QQX",
        "country": "GB",
        "state": "",
        "name": "Bath Spa Railway Station"
    },
    {
        "code": "QQY",
        "country": "GB",
        "state": "",
        "name": "York Railway Station"
    },
    {
        "code": "QRH",
        "country": "NL",
        "state": "",
        "name": "Rotterdam Centraal Railway Station"
    },
    {
        "code": "QRO",
        "country": "MX",
        "state": "",
        "name": "Queretaro Intercontinental Airport"
    },
    {
        "code": "QRW",
        "country": "NG",
        "state": "",
        "name": "Osubi Airport"
    },
    {
        "code": "QRY",
        "country": "GL",
        "state": "",
        "name": "Ikerasaarsuk Heliport"
    },
    {
        "code": "QRZ",
        "country": "NL",
        "state": "",
        "name": "Breda Railway Station"
    },
    {
        "code": "QSF",
        "country": "DZ",
        "state": "",
        "name": "Setif Airport"
    },
    {
        "code": "QSR",
        "country": "IT",
        "state": "",
        "name": "Pontecagnano Airport"
    },
    {
        "code": "QSZ",
        "country": "CN",
        "state": "",
        "name": "Yeerqiang Airport"
    },
    {
        "code": "QUL",
        "country": "DE",
        "state": "",
        "name": "Ulm Hbf Railway Station"
    },
    {
        "code": "QUO",
        "country": "NG",
        "state": "",
        "name": "Akwa Ibom International Airport"
    },
    {
        "code": "QUP",
        "country": "GL",
        "state": "",
        "name": "Saqqaq Heliport"
    },
    {
        "code": "QUV",
        "country": "GL",
        "state": "",
        "name": "Aappilattoq-Nanortalik Heliport"
    },
    {
        "code": "QUW",
        "country": "GL",
        "state": "",
        "name": "Ammassivik Heliport"
    },
    {
        "code": "QWU",
        "country": "DE",
        "state": "",
        "name": "Wuerzburg Hbf Railway Station"
    },
    {
        "code": "QXB",
        "country": "FR",
        "state": "",
        "name": "Aix-en-Provence TGV Railway Station"
    },
    {
        "code": "QXG",
        "country": "FR",
        "state": "",
        "name": "Angers Railway Station"
    },
    {
        "code": "QYU",
        "country": "SE",
        "state": "",
        "name": "Gavle C Railway Station"
    },
    {
        "code": "QYX",
        "country": "SE",
        "state": "",
        "name": "Uppsala C Railway Station"
    },
    {
        "code": "RAB",
        "country": "PG",
        "state": "",
        "name": "Tokua Airport"
    },
    {
        "code": "RAE",
        "country": "SA",
        "state": "",
        "name": "Arar Airport"
    },
    {
        "code": "RAH",
        "country": "SA",
        "state": "",
        "name": "Rafha Airport"
    },
    {
        "code": "RAI",
        "country": "CV",
        "state": "",
        "name": "Praia International Airport"
    },
    {
        "code": "RAK",
        "country": "MA",
        "state": "",
        "name": "Menara Airport"
    },
    {
        "code": "RAO",
        "country": "BR",
        "state": "SP",
        "name": "Leite Lopes Airport"
    },
    {
        "code": "RAP",
        "country": "US",
        "state": "SD",
        "name": "Rapid City Regional Airport"
    },
    {
        "code": "RAR",
        "country": "CK",
        "state": "",
        "name": "Rarotonga Island Airport"
    },
    {
        "code": "RAS",
        "country": "IR",
        "state": "",
        "name": "Sandra-e-Jangal"
    },
    {
        "code": "RBA",
        "country": "MA",
        "state": "",
        "name": "Sale Airport"
    },
    {
        "code": "RBB",
        "country": "BR",
        "state": "AM",
        "name": "Borba Airport"
    },
    {
        "code": "RBQ",
        "country": "BO",
        "state": "",
        "name": "Rurrenabaque Airport"
    },
    {
        "code": "RBR",
        "country": "BR",
        "state": "AC",
        "name": "Placido de Castro International Airport"
    },
    {
        "code": "RBV",
        "country": "SB",
        "state": "",
        "name": "Ramata Island Airport"
    },
    {
        "code": "RBY",
        "country": "US",
        "state": "AK",
        "name": "Ruby Airport"
    },
    {
        "code": "RCB",
        "country": "ZA",
        "state": "",
        "name": "Richards Bay Airport"
    },
    {
        "code": "RCC",
        "country": "IT",
        "state": "",
        "name": "Reggio di Calabria Central Railway Stat"
    },
    {
        "code": "RCH",
        "country": "CO",
        "state": "",
        "name": "Almirante Padilla Airport"
    },
    {
        "code": "RCM",
        "country": "AU",
        "state": "QL",
        "name": "Richmond Airport"
    },
    {
        "code": "RCQ",
        "country": "AR",
        "state": "SF",
        "name": "Reconquista Airport"
    },
    {
        "code": "RCU",
        "country": "AR",
        "state": "CD",
        "name": "Las Higueras Airport"
    },
    {
        "code": "RDD",
        "country": "US",
        "state": "CA",
        "name": "Redding Municipal Airport"
    },
    {
        "code": "RDM",
        "country": "US",
        "state": "OR",
        "name": "Roberts Field"
    },
    {
        "code": "RDO",
        "country": "PL",
        "state": "",
        "name": "Radom Airport"
    },
    {
        "code": "RDP",
        "country": "IN",
        "state": "WB",
        "name": "Kazi Nazrul Islam Airport"
    },
    {
        "code": "RDU",
        "country": "US",
        "state": "NC",
        "name": "Raleigh/Durham International Airport"
    },
    {
        "code": "RDZ",
        "country": "FR",
        "state": "",
        "name": "Marcillac Airport"
    },
    {
        "code": "REA",
        "country": "PF",
        "state": "",
        "name": "Reao Airport"
    },
    {
        "code": "REC",
        "country": "BR",
        "state": "PE",
        "name": "Guararapes International Airport"
    },
    {
        "code": "REG",
        "country": "IT",
        "state": "",
        "name": "Reggio di Calabria Airport"
    },
    {
        "code": "REL",
        "country": "AR",
        "state": "CB",
        "name": "Almirante M.A. Zar Airport"
    },
    {
        "code": "REN",
        "country": "RU",
        "state": "",
        "name": "Tsentralny Airport"
    },
    {
        "code": "RER",
        "country": "GT",
        "state": "",
        "name": "Retalhuleu Airport"
    },
    {
        "code": "RES",
        "country": "AR",
        "state": "CH",
        "name": "Resistencia Airport"
    },
    {
        "code": "RET",
        "country": "NO",
        "state": "",
        "name": "Rost Airport"
    },
    {
        "code": "REU",
        "country": "ES",
        "state": "",
        "name": "Reus Airport"
    },
    {
        "code": "REX",
        "country": "MX",
        "state": "",
        "name": "Lucio Blanco International Airport"
    },
    {
        "code": "RFD",
        "country": "US",
        "state": "IL",
        "name": "Chicago/Rockford International Airport"
    },
    {
        "code": "RFP",
        "country": "PF",
        "state": "",
        "name": "Uturoa Airport"
    },
    {
        "code": "RGA",
        "country": "AR",
        "state": "TF",
        "name": "Hermes Quijada Airport"
    },
    {
        "code": "RGI",
        "country": "PF",
        "state": "",
        "name": "Rangiroa Airport"
    },
    {
        "code": "RGK",
        "country": "RU",
        "state": "",
        "name": "Gorno-Altaysk Airport"
    },
    {
        "code": "RGL",
        "country": "AR",
        "state": "SC",
        "name": "Piloto N. Fernandez Airport"
    },
    {
        "code": "RGN",
        "country": "MM",
        "state": "",
        "name": "Yangon International Airport"
    },
    {
        "code": "RGS",
        "country": "ES",
        "state": "",
        "name": "Burgos Airport"
    },
    {
        "code": "RHD",
        "country": "AR",
        "state": "SE",
        "name": "Termas de Rio Hondo Airport"
    },
    {
        "code": "RHI",
        "country": "US",
        "state": "WI",
        "name": "Oneida County Airport"
    },
    {
        "code": "RHO",
        "country": "GR",
        "state": "",
        "name": "Diagoras Airport"
    },
    {
        "code": "RIA",
        "country": "BR",
        "state": "RS",
        "name": "Santa Maria Airport"
    },
    {
        "code": "RIB",
        "country": "BO",
        "state": "",
        "name": "Riberalta Airport"
    },
    {
        "code": "RIC",
        "country": "US",
        "state": "VA",
        "name": "Richmond International Airport"
    },
    {
        "code": "RIH",
        "country": "PA",
        "state": "",
        "name": "Scarlett Martinez International Airport"
    },
    {
        "code": "RIS",
        "country": "JP",
        "state": "",
        "name": "Rishiri Airport"
    },
    {
        "code": "RIW",
        "country": "US",
        "state": "WY",
        "name": "Riverton Regional Airport"
    },
    {
        "code": "RIX",
        "country": "LV",
        "state": "",
        "name": "Riga International Airport"
    },
    {
        "code": "RIY",
        "country": "YE",
        "state": "",
        "name": "Riyan Airport"
    },
    {
        "code": "RIZ",
        "country": "CN",
        "state": "",
        "name": "Shanzihe Airport"
    },
    {
        "code": "RJA",
        "country": "IN",
        "state": "AP",
        "name": "Rajahmundry Airport"
    },
    {
        "code": "RJB",
        "country": "NP",
        "state": "",
        "name": "Rajbiraj Airport"
    },
    {
        "code": "RJH",
        "country": "BD",
        "state": "",
        "name": "Shah Makhdum Airport"
    },
    {
        "code": "RJK",
        "country": "HR",
        "state": "",
        "name": "Rijeka Airport"
    },
    {
        "code": "RJL",
        "country": "ES",
        "state": "",
        "name": "Agoncillo Airport"
    },
    {
        "code": "RKA",
        "country": "PF",
        "state": "",
        "name": "Aratika-Nord Airport"
    },
    {
        "code": "RKD",
        "country": "US",
        "state": "ME",
        "name": "Knox County Regional Airport"
    },
    {
        "code": "RKS",
        "country": "US",
        "state": "WY",
        "name": "Sweetwater County Airport"
    },
    {
        "code": "RKT",
        "country": "AE",
        "state": "",
        "name": "Ras al Khaimah International Airport"
    },
    {
        "code": "RKV",
        "country": "IS",
        "state": "",
        "name": "Reykjavik Domestic Airport"
    },
    {
        "code": "RKZ",
        "country": "CN",
        "state": "",
        "name": "Peace Airport"
    },
    {
        "code": "RLG",
        "country": "DE",
        "state": "",
        "name": "Laage Airport"
    },
    {
        "code": "RLK",
        "country": "CN",
        "state": "",
        "name": "Tianjitai Airport"
    },
    {
        "code": "RLO",
        "country": "AR",
        "state": "SL",
        "name": "Valle del Conlara Airport"
    },
    {
        "code": "RMA",
        "country": "AU",
        "state": "QL",
        "name": "Roma Airport"
    },
    {
        "code": "RMF",
        "country": "EG",
        "state": "",
        "name": "Marsa Alam International Airport"
    },
    {
        "code": "RMI",
        "country": "IT",
        "state": "",
        "name": "Miramare Airport"
    },
    {
        "code": "RMO",
        "country": "MD",
        "state": "",
        "name": "Chisinau International Airport"
    },
    {
        "code": "RMP",
        "country": "US",
        "state": "AK",
        "name": "Rampart Airport"
    },
    {
        "code": "RMQ",
        "country": "TW",
        "state": "",
        "name": "Cingcyuangang Airport"
    },
    {
        "code": "RMT",
        "country": "PF",
        "state": "",
        "name": "Rimatara Airport"
    },
    {
        "code": "RMU",
        "country": "ES",
        "state": "",
        "name": "Corvera International Airport"
    },
    {
        "code": "RMZ",
        "country": "RU",
        "state": "",
        "name": "Remezov"
    },
    {
        "code": "RNA",
        "country": "SB",
        "state": "",
        "name": "Ulawa Airport"
    },
    {
        "code": "RNB",
        "country": "SE",
        "state": "",
        "name": "Kallinge Airport"
    },
    {
        "code": "RNI",
        "country": "NI",
        "state": "",
        "name": "Corn Island Airport"
    },
    {
        "code": "RNJ",
        "country": "JP",
        "state": "",
        "name": "Yoron Airport"
    },
    {
        "code": "RNL",
        "country": "SB",
        "state": "",
        "name": "Tigoa Airport"
    },
    {
        "code": "RNN",
        "country": "DK",
        "state": "",
        "name": "Ronne Airport"
    },
    {
        "code": "RNO",
        "country": "US",
        "state": "NV",
        "name": "Reno/Tahoe International Airport"
    },
    {
        "code": "RNS",
        "country": "FR",
        "state": "",
        "name": "Saint Jacques Airport"
    },
    {
        "code": "RNW",
        "country": "GB",
        "state": "",
        "name": "Ringwood Bus Station"
    },
    {
        "code": "ROA",
        "country": "US",
        "state": "VA",
        "name": "Roanoke Regional Airport (Woodrum Field"
    },
    {
        "code": "ROB",
        "country": "LR",
        "state": "",
        "name": "Roberts International Airport"
    },
    {
        "code": "ROC",
        "country": "US",
        "state": "NY",
        "name": "Greater Rochester International Airport"
    },
    {
        "code": "ROI",
        "country": "TH",
        "state": "",
        "name": "Roi Et Airport"
    },
    {
        "code": "ROK",
        "country": "AU",
        "state": "QL",
        "name": "Rockhampton Airport"
    },
    {
        "code": "RON",
        "country": "CO",
        "state": "",
        "name": "Juan Jose Rondon Airport"
    },
    {
        "code": "ROO",
        "country": "BR",
        "state": "MT",
        "name": "Maestro Marinho Franco Airport"
    },
    {
        "code": "ROR",
        "country": "PW",
        "state": "",
        "name": "Palau International Airport"
    },
    {
        "code": "ROS",
        "country": "AR",
        "state": "SF",
        "name": "Islas Malvinas Airport"
    },
    {
        "code": "ROT",
        "country": "NZ",
        "state": "",
        "name": "Rotorua International Airport"
    },
    {
        "code": "ROV",
        "country": "RU",
        "state": "",
        "name": "Platov Airport"
    },
    {
        "code": "ROW",
        "country": "US",
        "state": "NM",
        "name": "International Air Center"
    },
    {
        "code": "RPR",
        "country": "IN",
        "state": "CT",
        "name": "Swami Vivekananda Airport"
    },
    {
        "code": "RQA",
        "country": "CN",
        "state": "",
        "name": "Loulan Airport"
    },
    {
        "code": "RQY",
        "country": "IN",
        "state": "KA",
        "name": "Shivamogga Airport"
    },
    {
        "code": "RRG",
        "country": "MU",
        "state": "",
        "name": "Plaine Corail Airport"
    },
    {
        "code": "RRJ",
        "country": "BR",
        "state": "RJ",
        "name": "Jacarepagua Airport"
    },
    {
        "code": "RRK",
        "country": "IN",
        "state": "OR",
        "name": "Rourkela Airport"
    },
    {
        "code": "RRR",
        "country": "PF",
        "state": "",
        "name": "Raroia Airport"
    },
    {
        "code": "RRS",
        "country": "NO",
        "state": "",
        "name": "Roros Airport"
    },
    {
        "code": "RSA",
        "country": "AR",
        "state": "LP",
        "name": "Santa Rosa Airport"
    },
    {
        "code": "RSD",
        "country": "BS",
        "state": "",
        "name": "Rock Sound International Airport"
    },
    {
        "code": "RSI",
        "country": "SA",
        "state": "",
        "name": "Red Sea International Airport"
    },
    {
        "code": "RST",
        "country": "US",
        "state": "MN",
        "name": "Rochester International Airport"
    },
    {
        "code": "RSU",
        "country": "KR",
        "state": "",
        "name": "Yeosu/Suncheon Airport"
    },
    {
        "code": "RSW",
        "country": "US",
        "state": "FL",
        "name": "Southwest Florida International Airport"
    },
    {
        "code": "RTA",
        "country": "FJ",
        "state": "",
        "name": "Rotuma Island Airport"
    },
    {
        "code": "RTB",
        "country": "HN",
        "state": "",
        "name": "Juan Manuel Galvez Airport"
    },
    {
        "code": "RTG",
        "country": "ID",
        "state": "",
        "name": "Frans Sales Lega Airport"
    },
    {
        "code": "RTM",
        "country": "NL",
        "state": "",
        "name": "Rotterdam Airport"
    },
    {
        "code": "RTW",
        "country": "RU",
        "state": "",
        "name": "Tsentralny Airport"
    },
    {
        "code": "RUA",
        "country": "UG",
        "state": "",
        "name": "Arua Airport"
    },
    {
        "code": "RUH",
        "country": "SA",
        "state": "",
        "name": "King Khalid International Airport"
    },
    {
        "code": "RUL",
        "country": "MV",
        "state": "",
        "name": "Maavarulu Airport"
    },
    {
        "code": "RUN",
        "country": "RE",
        "state": "",
        "name": "Roland Garros Airport"
    },
    {
        "code": "RUR",
        "country": "PF",
        "state": "",
        "name": "Rurutu Airport"
    },
    {
        "code": "RUT",
        "country": "US",
        "state": "VT",
        "name": "Southern Vermont Regional Airport"
    },
    {
        "code": "RVD",
        "country": "BR",
        "state": "GO",
        "name": "Leite de Castro Airport"
    },
    {
        "code": "RVE",
        "country": "CO",
        "state": "",
        "name": "Los Colonizadores Airport"
    },
    {
        "code": "RVK",
        "country": "NO",
        "state": "",
        "name": "Ryum Airport"
    },
    {
        "code": "RVN",
        "country": "FI",
        "state": "",
        "name": "Rovaniemi Airport"
    },
    {
        "code": "RVV",
        "country": "PF",
        "state": "",
        "name": "Raivavae Airport"
    },
    {
        "code": "RXS",
        "country": "PH",
        "state": "",
        "name": "Roxas Airport"
    },
    {
        "code": "RYL",
        "country": "ZM",
        "state": "",
        "name": "Royal Airport"
    },
    {
        "code": "RZE",
        "country": "PL",
        "state": "",
        "name": "Jasionka Airport"
    },
    {
        "code": "RZH",
        "country": "RU",
        "state": "",
        "name": "Preobrazheniye Airport"
    },
    {
        "code": "RZR",
        "country": "IR",
        "state": "",
        "name": "Ramsar Airport"
    },
    {
        "code": "RZV",
        "country": "TR",
        "state": "",
        "name": "RIZE ARTVIN"
    },
    {
        "code": "SAB",
        "country": "BQ",
        "state": "",
        "name": "Juancho E. Yrausquin Airport"
    },
    {
        "code": "SAE",
        "country": "GL",
        "state": "",
        "name": "Saattut Heliport"
    },
    {
        "code": "SAF",
        "country": "US",
        "state": "NM",
        "name": "Santa Fe Municipal Airport"
    },
    {
        "code": "SAG",
        "country": "IN",
        "state": "MH",
        "name": "Shirdi Airport"
    },
    {
        "code": "SAH",
        "country": "YE",
        "state": "",
        "name": "Sana'a International Airport"
    },
    {
        "code": "SAI",
        "country": "KH",
        "state": "",
        "name": "Siem Reap Angkor Airport"
    },
    {
        "code": "SAL",
        "country": "SV",
        "state": "",
        "name": "El Salvador International Airport"
    },
    {
        "code": "SAN",
        "country": "US",
        "state": "CA",
        "name": "San Diego International Airport"
    },
    {
        "code": "SAP",
        "country": "HN",
        "state": "",
        "name": "Ramon Villeda Morales International Air"
    },
    {
        "code": "SAT",
        "country": "US",
        "state": "TX",
        "name": "San Antonio International Airport"
    },
    {
        "code": "SAV",
        "country": "US",
        "state": "GA",
        "name": "Hilton Head International Airport"
    },
    {
        "code": "SAW",
        "country": "TR",
        "state": "",
        "name": "Sabiha Gokcen Airport"
    },
    {
        "code": "SBA",
        "country": "US",
        "state": "CA",
        "name": "Santa Barbara Municipal Airport"
    },
    {
        "code": "SBD",
        "country": "US",
        "state": "CA",
        "name": "San Bernardino International Airport"
    },
    {
        "code": "SBH",
        "country": "BL",
        "state": "",
        "name": "Gustaf III Airport"
    },
    {
        "code": "SBN",
        "country": "US",
        "state": "IN",
        "name": "South Bend International Airport"
    },
    {
        "code": "SBP",
        "country": "US",
        "state": "CA",
        "name": "San Luis County Regional Airport"
    },
    {
        "code": "SBR",
        "country": "AU",
        "state": "QL",
        "name": "Saibai Island Airport"
    },
    {
        "code": "SBW",
        "country": "MY",
        "state": "",
        "name": "Sibu Airport"
    },
    {
        "code": "SBY",
        "country": "US",
        "state": "MD",
        "name": "Wicomico Regional Airport"
    },
    {
        "code": "SBZ",
        "country": "RO",
        "state": "",
        "name": "Sibiu Airport"
    },
    {
        "code": "SCC",
        "country": "US",
        "state": "AK",
        "name": "Deadhorse Airport"
    },
    {
        "code": "SCE",
        "country": "US",
        "state": "PA",
        "name": "University Park Airport"
    },
    {
        "code": "SCF",
        "country": "US",
        "state": "AZ",
        "name": "Scottsdale Airport"
    },
    {
        "code": "SCK",
        "country": "US",
        "state": "CA",
        "name": "Stockton Metropolitan Airport"
    },
    {
        "code": "SCL",
        "country": "CL",
        "state": "",
        "name": "Arturo Merino BenitezAirport"
    },
    {
        "code": "SCM",
        "country": "US",
        "state": "AK",
        "name": "Scammon Bay Airport"
    },
    {
        "code": "SCN",
        "country": "DE",
        "state": "",
        "name": "Saarbruecken Airport"
    },
    {
        "code": "SCO",
        "country": "KZ",
        "state": "",
        "name": "Aktau Airport"
    },
    {
        "code": "SCQ",
        "country": "ES",
        "state": "",
        "name": "Santiago de Compostela Airport"
    },
    {
        "code": "SCR",
        "country": "SE",
        "state": "",
        "name": "Scandinavian Mountains Airport"
    },
    {
        "code": "SCT",
        "country": "YE",
        "state": "",
        "name": "Socotra Airport"
    },
    {
        "code": "SCU",
        "country": "CU",
        "state": "",
        "name": "Antonio Maceo International Airport"
    },
    {
        "code": "SCV",
        "country": "RO",
        "state": "",
        "name": "Stefan cel Mare Airport"
    },
    {
        "code": "SCW",
        "country": "RU",
        "state": "",
        "name": "Syktyvkar Airport"
    },
    {
        "code": "SCY",
        "country": "EC",
        "state": "",
        "name": "San Cristobal Airport"
    },
    {
        "code": "SCZ",
        "country": "SB",
        "state": "",
        "name": "Santa Cruz Island Airport"
    },
    {
        "code": "SDD",
        "country": "AO",
        "state": "",
        "name": "Mukanka Airport"
    },
    {
        "code": "SDE",
        "country": "AR",
        "state": "SE",
        "name": "A. de la Paz Aragonez Airport"
    },
    {
        "code": "SDF",
        "country": "US",
        "state": "KY",
        "name": "Louisville International Airport-Standi"
    },
    {
        "code": "SDG",
        "country": "IR",
        "state": "",
        "name": "Sanandaj Airport"
    },
    {
        "code": "SDJ",
        "country": "JP",
        "state": "",
        "name": "Sendai Airport"
    },
    {
        "code": "SDK",
        "country": "MY",
        "state": "",
        "name": "Sandakan Airport"
    },
    {
        "code": "SDL",
        "country": "SE",
        "state": "",
        "name": "Sundsvall-Timra Airport"
    },
    {
        "code": "SDN",
        "country": "NO",
        "state": "",
        "name": "Anda Airport"
    },
    {
        "code": "SDP",
        "country": "US",
        "state": "AK",
        "name": "Sand Point Airport"
    },
    {
        "code": "SDQ",
        "country": "DO",
        "state": "",
        "name": "Las Americas International Airport"
    },
    {
        "code": "SDR",
        "country": "ES",
        "state": "",
        "name": "Santander Airport"
    },
    {
        "code": "SDU",
        "country": "BR",
        "state": "RJ",
        "name": "Santos Dumont Airport"
    },
    {
        "code": "SDW",
        "country": "IN",
        "state": "MH",
        "name": "Sindhudurg Airport"
    },
    {
        "code": "SDY",
        "country": "US",
        "state": "MT",
        "name": "Richland Municipal Airport"
    },
    {
        "code": "SEA",
        "country": "US",
        "state": "WA",
        "name": "Seattle-Tacoma International Airport"
    },
    {
        "code": "SEB",
        "country": "LY",
        "state": "",
        "name": "Sebha Airport"
    },
    {
        "code": "SEJ",
        "country": "ES",
        "state": "",
        "name": "Salamanca Railway Station"
    },
    {
        "code": "SEK",
        "country": "RU",
        "state": "",
        "name": "Srednekolymsk Airport"
    },
    {
        "code": "SEN",
        "country": "GB",
        "state": "",
        "name": "Southend Airport"
    },
    {
        "code": "SES",
        "country": "RU",
        "state": "",
        "name": "Svetlogorsk Airport"
    },
    {
        "code": "SET",
        "country": "BR",
        "state": "PE",
        "name": "Santa Magalhaes Airport"
    },
    {
        "code": "SEU",
        "country": "TZ",
        "state": "",
        "name": "Seronera Airport"
    },
    {
        "code": "SEZ",
        "country": "SC",
        "state": "",
        "name": "Seychelles International Airport"
    },
    {
        "code": "SFA",
        "country": "TN",
        "state": "",
        "name": "Thyna Airport"
    },
    {
        "code": "SFB",
        "country": "US",
        "state": "FL",
        "name": "Sanford International Airport"
    },
    {
        "code": "SFG",
        "country": "MF",
        "state": "",
        "name": "Grand-Case L'Esperance Airport"
    },
    {
        "code": "SFJ",
        "country": "GL",
        "state": "",
        "name": "Kangerlussuaq Airport"
    },
    {
        "code": "SFL",
        "country": "CV",
        "state": "",
        "name": "Sao Filipe Airport"
    },
    {
        "code": "SFN",
        "country": "AR",
        "state": "SF",
        "name": "Sauce Viejo Airport"
    },
    {
        "code": "SFO",
        "country": "US",
        "state": "CA",
        "name": "San Francisco International Airport"
    },
    {
        "code": "SFT",
        "country": "SE",
        "state": "",
        "name": "Skelleftea Airport"
    },
    {
        "code": "SGC",
        "country": "RU",
        "state": "",
        "name": "Surgut Airport"
    },
    {
        "code": "SGD",
        "country": "DK",
        "state": "",
        "name": "Sonderborg Airport"
    },
    {
        "code": "SGF",
        "country": "US",
        "state": "MO",
        "name": "Springfield-Branson National Airport"
    },
    {
        "code": "SGG",
        "country": "GL",
        "state": "",
        "name": "Sermiligaaq Heliport"
    },
    {
        "code": "SGN",
        "country": "VN",
        "state": "",
        "name": "Tan Son Nhat International Airport"
    },
    {
        "code": "SGO",
        "country": "AU",
        "state": "QL",
        "name": "Saint George Airport"
    },
    {
        "code": "SGS",
        "country": "JP",
        "state": "",
        "name": "Shinagawa Sta. Konan Exit"
    },
    {
        "code": "SGU",
        "country": "US",
        "state": "UT",
        "name": "Saint George Municipal Airport"
    },
    {
        "code": "SGX",
        "country": "TZ",
        "state": "",
        "name": "Songea Airport"
    },
    {
        "code": "SGY",
        "country": "US",
        "state": "AK",
        "name": "Skagway Airport"
    },
    {
        "code": "SHA",
        "country": "CN",
        "state": "",
        "name": "Hongqiao International Airport"
    },
    {
        "code": "SHB",
        "country": "JP",
        "state": "",
        "name": "Nakashibetsu Airport"
    },
    {
        "code": "SHC",
        "country": "ET",
        "state": "",
        "name": "Shire Airport"
    },
    {
        "code": "SHD",
        "country": "US",
        "state": "VA",
        "name": "Shenandoah Valley Regional Airport"
    },
    {
        "code": "SHE",
        "country": "CN",
        "state": "",
        "name": "Taoxian International Airport"
    },
    {
        "code": "SHF",
        "country": "CN",
        "state": "",
        "name": "Huayuan Airport"
    },
    {
        "code": "SHG",
        "country": "US",
        "state": "AK",
        "name": "Shungnak Airport"
    },
    {
        "code": "SHH",
        "country": "US",
        "state": "AK",
        "name": "Shishmaref Airport"
    },
    {
        "code": "SHI",
        "country": "JP",
        "state": "",
        "name": "Shimojishima Airport"
    },
    {
        "code": "SHJ",
        "country": "AE",
        "state": "",
        "name": "Sharjah Airport"
    },
    {
        "code": "SHL",
        "country": "IN",
        "state": "ML",
        "name": "Barapani Airport"
    },
    {
        "code": "SHM",
        "country": "JP",
        "state": "",
        "name": "Nanki-Shirahama"
    },
    {
        "code": "SHO",
        "country": "SZ",
        "state": "",
        "name": "King Mswati III International Airport"
    },
    {
        "code": "SHR",
        "country": "US",
        "state": "WY",
        "name": "Sheridan County Airport"
    },
    {
        "code": "SHS",
        "country": "CN",
        "state": "",
        "name": "Shashi Airport"
    },
    {
        "code": "SHV",
        "country": "US",
        "state": "LA",
        "name": "Shreveport Regional Airport"
    },
    {
        "code": "SHW",
        "country": "SA",
        "state": "",
        "name": "Sharurah Airport"
    },
    {
        "code": "SID",
        "country": "CV",
        "state": "",
        "name": "Amilcar Cabral International Airport"
    },
    {
        "code": "SIF",
        "country": "NP",
        "state": "",
        "name": "Simara Airport"
    },
    {
        "code": "SIG",
        "country": "PR",
        "state": "",
        "name": "F.L. Ribas Dominicci Airport"
    },
    {
        "code": "SIN",
        "country": "SG",
        "state": "",
        "name": "Changi Airport"
    },
    {
        "code": "SIP",
        "country": "UA",
        "state": "",
        "name": "Simferopol International Airport"
    },
    {
        "code": "SIR",
        "country": "CH",
        "state": "",
        "name": "Sion Airport"
    },
    {
        "code": "SIS",
        "country": "ZA",
        "state": "",
        "name": "Sishen Airport"
    },
    {
        "code": "SIT",
        "country": "US",
        "state": "AK",
        "name": "Rocky Gutierrez Airport"
    },
    {
        "code": "SJC",
        "country": "US",
        "state": "CA",
        "name": "Norman Y. Mineta International"
    },
    {
        "code": "SJD",
        "country": "MX",
        "state": "",
        "name": "Los Cabos International Airport"
    },
    {
        "code": "SJE",
        "country": "CO",
        "state": "",
        "name": "Jorge E. Gonzalez T. Airport"
    },
    {
        "code": "SJI",
        "country": "PH",
        "state": "",
        "name": "San Jose Airport"
    },
    {
        "code": "SJJ",
        "country": "BA",
        "state": "",
        "name": "Sarajevo International Airport"
    },
    {
        "code": "SJK",
        "country": "BR",
        "state": "SP",
        "name": "Urbano Ernesto Stumpf International Air"
    },
    {
        "code": "SJL",
        "country": "BR",
        "state": "AM",
        "name": "Sao Gabriel Cachoeira Airport"
    },
    {
        "code": "SJO",
        "country": "CR",
        "state": "",
        "name": "Juan Santamaria International Airport"
    },
    {
        "code": "SJP",
        "country": "BR",
        "state": "SP",
        "name": "Eribelto Manoel Reino Airport"
    },
    {
        "code": "SJT",
        "country": "US",
        "state": "TX",
        "name": "Regional (Mathis Field) Airport"
    },
    {
        "code": "SJU",
        "country": "PR",
        "state": "",
        "name": "Luis Munoz Marin International Airport"
    },
    {
        "code": "SJW",
        "country": "CN",
        "state": "",
        "name": "Zhengding International Airport"
    },
    {
        "code": "SJZ",
        "country": "PT",
        "state": "",
        "name": "Sao Jorge Island Airport"
    },
    {
        "code": "SKB",
        "country": "KN",
        "state": "",
        "name": "Robert L. Bradshaw International Airpor"
    },
    {
        "code": "SKD",
        "country": "UZ",
        "state": "",
        "name": "Samarkand International Airport"
    },
    {
        "code": "SKG",
        "country": "GR",
        "state": "",
        "name": "Makedonia Airport"
    },
    {
        "code": "SKH",
        "country": "NP",
        "state": "",
        "name": "Surkhet Airport"
    },
    {
        "code": "SKK",
        "country": "US",
        "state": "AK",
        "name": "Shaktoolik Airport"
    },
    {
        "code": "SKN",
        "country": "NO",
        "state": "",
        "name": "Skagen Airport"
    },
    {
        "code": "SKO",
        "country": "NG",
        "state": "",
        "name": "Sadiq Abubakar III International Airpor"
    },
    {
        "code": "SKP",
        "country": "MK",
        "state": "",
        "name": "Skopje International Airport"
    },
    {
        "code": "SKT",
        "country": "PK",
        "state": "",
        "name": "Sialkot International Airport"
    },
    {
        "code": "SKU",
        "country": "GR",
        "state": "",
        "name": "Skyros Airport"
    },
    {
        "code": "SKX",
        "country": "RU",
        "state": "",
        "name": "Saransk Airport"
    },
    {
        "code": "SKZ",
        "country": "PK",
        "state": "",
        "name": "Sukkur Airport"
    },
    {
        "code": "SLA",
        "country": "AR",
        "state": "SA",
        "name": "Martin M. de Guemes Airport"
    },
    {
        "code": "SLC",
        "country": "US",
        "state": "UT",
        "name": "Salt Lake City International Airport"
    },
    {
        "code": "SLE",
        "country": "US",
        "state": "OR",
        "name": "McNary Field"
    },
    {
        "code": "SLH",
        "country": "VU",
        "state": "",
        "name": "Vanua Lava Airport"
    },
    {
        "code": "SLI",
        "country": "ZM",
        "state": "",
        "name": "Solwezi Airport"
    },
    {
        "code": "SLK",
        "country": "US",
        "state": "NY",
        "name": "Adirondack Regional Airport"
    },
    {
        "code": "SLL",
        "country": "OM",
        "state": "",
        "name": "Salalah Airport"
    },
    {
        "code": "SLM",
        "country": "ES",
        "state": "",
        "name": "Salamanca Airport"
    },
    {
        "code": "SLN",
        "country": "US",
        "state": "KS",
        "name": "Salina Regional Airport"
    },
    {
        "code": "SLP",
        "country": "MX",
        "state": "",
        "name": "Ponciano Arriaga International Airport"
    },
    {
        "code": "SLU",
        "country": "LC",
        "state": "",
        "name": "George F.L. Charles Airport"
    },
    {
        "code": "SLV",
        "country": "IN",
        "state": "HP",
        "name": "Shimla Airport"
    },
    {
        "code": "SLX",
        "country": "TC",
        "state": "",
        "name": "Salt Cay Airport"
    },
    {
        "code": "SLY",
        "country": "RU",
        "state": "",
        "name": "Salekhard Airport"
    },
    {
        "code": "SLZ",
        "country": "BR",
        "state": "MA",
        "name": "Cunha Machado International Airport"
    },
    {
        "code": "SMA",
        "country": "PT",
        "state": "",
        "name": "Santa Maria Island Airport"
    },
    {
        "code": "SMF",
        "country": "US",
        "state": "CA",
        "name": "Sacramento International Airport"
    },
    {
        "code": "SMI",
        "country": "GR",
        "state": "",
        "name": "Aristarchos of Samos Airport"
    },
    {
        "code": "SMK",
        "country": "US",
        "state": "AK",
        "name": "Saint Michael Airport"
    },
    {
        "code": "SML",
        "country": "BS",
        "state": "",
        "name": "Stella Maris Airport"
    },
    {
        "code": "SMQ",
        "country": "ID",
        "state": "",
        "name": "H.Asan Airport"
    },
    {
        "code": "SMR",
        "country": "CO",
        "state": "",
        "name": "Simon Bolivar International Airport"
    },
    {
        "code": "SMS",
        "country": "MG",
        "state": "",
        "name": "Sainte Marie Airport"
    },
    {
        "code": "SMT",
        "country": "BR",
        "state": "MT",
        "name": "Sorriso Airport"
    },
    {
        "code": "SMX",
        "country": "US",
        "state": "CA",
        "name": "Santa Maria Public Airport"
    },
    {
        "code": "SNA",
        "country": "US",
        "state": "CA",
        "name": "John Wayne Airport"
    },
    {
        "code": "SNE",
        "country": "CV",
        "state": "",
        "name": "Preguica Airport"
    },
    {
        "code": "SNN",
        "country": "IE",
        "state": "",
        "name": "Shannon International Airport"
    },
    {
        "code": "SNO",
        "country": "TH",
        "state": "",
        "name": "Sakon Nakhon Airport"
    },
    {
        "code": "SNP",
        "country": "US",
        "state": "AK",
        "name": "Saint Paul Island Airport"
    },
    {
        "code": "SNR",
        "country": "FR",
        "state": "",
        "name": "Montoir Airport"
    },
    {
        "code": "SNU",
        "country": "CU",
        "state": "",
        "name": "Abel Santamaria Airport"
    },
    {
        "code": "SNW",
        "country": "MM",
        "state": "",
        "name": "Thandwe Airport"
    },
    {
        "code": "SOC",
        "country": "ID",
        "state": "",
        "name": "Adi Sumarmo Airport"
    },
    {
        "code": "SOF",
        "country": "BG",
        "state": "",
        "name": "Sofia Airport"
    },
    {
        "code": "SOG",
        "country": "NO",
        "state": "",
        "name": "Haukasen Airport"
    },
    {
        "code": "SOJ",
        "country": "NO",
        "state": "",
        "name": "Sorkjosen Airport"
    },
    {
        "code": "SON",
        "country": "VU",
        "state": "",
        "name": "Santo International Airport"
    },
    {
        "code": "SOO",
        "country": "SE",
        "state": "",
        "name": "Soderhamn Airport"
    },
    {
        "code": "SOQ",
        "country": "ID",
        "state": "",
        "name": "Domine Eduard Osok Airport"
    },
    {
        "code": "SOU",
        "country": "GB",
        "state": "",
        "name": "Southampton Airport"
    },
    {
        "code": "SOW",
        "country": "US",
        "state": "AZ",
        "name": "Show Low Regional Airport"
    },
    {
        "code": "SPB",
        "country": "VI",
        "state": "",
        "name": "Charlotte Amalie Sea Plane Base"
    },
    {
        "code": "SPC",
        "country": "ES",
        "state": "",
        "name": "La Palma Airport"
    },
    {
        "code": "SPD",
        "country": "BD",
        "state": "",
        "name": "Saidpur Airport"
    },
    {
        "code": "SPI",
        "country": "US",
        "state": "IL",
        "name": "Abraham Lincoln Capital Airport"
    },
    {
        "code": "SPN",
        "country": "MP",
        "state": "",
        "name": "Francisco C. Ada International Airport"
    },
    {
        "code": "SPP",
        "country": "AO",
        "state": "",
        "name": "Menongue Airport"
    },
    {
        "code": "SPR",
        "country": "BZ",
        "state": "",
        "name": "San Pedro Airport"
    },
    {
        "code": "SPS",
        "country": "US",
        "state": "TX",
        "name": "Wichita Falls Municipal Airport/Sheppar"
    },
    {
        "code": "SPU",
        "country": "HR",
        "state": "",
        "name": "Split Airport"
    },
    {
        "code": "SPX",
        "country": "EG",
        "state": "",
        "name": "Sphinx International Airport"
    },
    {
        "code": "SPY",
        "country": "CI",
        "state": "",
        "name": "San-Pedro Airport"
    },
    {
        "code": "SQD",
        "country": "CN",
        "state": "",
        "name": "Sanqingshan Airport"
    },
    {
        "code": "SQG",
        "country": "ID",
        "state": "",
        "name": "Susilo Airport"
    },
    {
        "code": "SQJ",
        "country": "CN",
        "state": "",
        "name": "Shaxian Airport"
    },
    {
        "code": "SQL",
        "country": "US",
        "state": "CA",
        "name": "San Carlos Airport"
    },
    {
        "code": "SQN",
        "country": "ID",
        "state": "",
        "name": "Emalamo Airport"
    },
    {
        "code": "SRA",
        "country": "BR",
        "state": "RS",
        "name": "Luis Alberto Lehr Airport"
    },
    {
        "code": "SRE",
        "country": "BO",
        "state": "",
        "name": "Alcantari Airport"
    },
    {
        "code": "SRG",
        "country": "ID",
        "state": "",
        "name": "Ahmad Yani Airport"
    },
    {
        "code": "SRK",
        "country": "GL",
        "state": "",
        "name": "Siorapaluk Heliport"
    },
    {
        "code": "SRP",
        "country": "NO",
        "state": "",
        "name": "Sorstokken Airport"
    },
    {
        "code": "SRQ",
        "country": "US",
        "state": "FL",
        "name": "Sarasota/Bradenton International Airpor"
    },
    {
        "code": "SRY",
        "country": "IR",
        "state": "",
        "name": "Dasht-e-Naz Airport"
    },
    {
        "code": "SSA",
        "country": "BR",
        "state": "BA",
        "name": "Luis Eduardo Magalhaes International Ai"
    },
    {
        "code": "SSB",
        "country": "VI",
        "state": "",
        "name": "Christiansted Sea Plane Base"
    },
    {
        "code": "SSG",
        "country": "GQ",
        "state": "",
        "name": "Malabo International Airport"
    },
    {
        "code": "SSH",
        "country": "EG",
        "state": "",
        "name": "Sharm el-Sheikh International Airport"
    },
    {
        "code": "SSJ",
        "country": "NO",
        "state": "",
        "name": "Stokka Airport"
    },
    {
        "code": "SSR",
        "country": "VU",
        "state": "",
        "name": "Sara Airport"
    },
    {
        "code": "STB",
        "country": "VE",
        "state": "",
        "name": "Miguel U. Fernandez Airport"
    },
    {
        "code": "STC",
        "country": "US",
        "state": "MN",
        "name": "Saint Cloud Regional Airport"
    },
    {
        "code": "STD",
        "country": "VE",
        "state": "",
        "name": "Buenaventura Vivas Airport"
    },
    {
        "code": "STG",
        "country": "US",
        "state": "AK",
        "name": "Saint George Island Airport"
    },
    {
        "code": "STI",
        "country": "DO",
        "state": "",
        "name": "Cibao International Airport"
    },
    {
        "code": "STL",
        "country": "US",
        "state": "MO",
        "name": "Lambert-Saint Louis International Airpo"
    },
    {
        "code": "STM",
        "country": "BR",
        "state": "PA",
        "name": "Maestro Wilson Fonseca Airport"
    },
    {
        "code": "STN",
        "country": "GB",
        "state": "",
        "name": "Stansted Airport"
    },
    {
        "code": "STR",
        "country": "DE",
        "state": "",
        "name": "Stuttgart Airport"
    },
    {
        "code": "STS",
        "country": "US",
        "state": "CA",
        "name": "Charles M. Schulz Airport"
    },
    {
        "code": "STT",
        "country": "VI",
        "state": "",
        "name": "Cyril E. King Airport"
    },
    {
        "code": "STV",
        "country": "IN",
        "state": "GJ",
        "name": "Surat Airport"
    },
    {
        "code": "STW",
        "country": "RU",
        "state": "",
        "name": "Shpakovskoye Airport"
    },
    {
        "code": "STX",
        "country": "VI",
        "state": "",
        "name": "Henry E. Rohlsen Airport"
    },
    {
        "code": "SUB",
        "country": "ID",
        "state": "",
        "name": "Juanda Airport"
    },
    {
        "code": "SUF",
        "country": "IT",
        "state": "",
        "name": "Lamezia Terme Airport"
    },
    {
        "code": "SUG",
        "country": "PH",
        "state": "",
        "name": "Surigao Airport"
    },
    {
        "code": "SUJ",
        "country": "RO",
        "state": "",
        "name": "Satu Mare Airport"
    },
    {
        "code": "SUK",
        "country": "RU",
        "state": "",
        "name": "Sakkyryr Airport"
    },
    {
        "code": "SUN",
        "country": "US",
        "state": "ID",
        "name": "Friedman Memorial Airport"
    },
    {
        "code": "SUR",
        "country": "CA",
        "state": "ON",
        "name": "Summer Beaver Airport"
    },
    {
        "code": "SUV",
        "country": "FJ",
        "state": "",
        "name": "Nausori International Airport"
    },
    {
        "code": "SUX",
        "country": "US",
        "state": "IA",
        "name": "Sioux Gateway Airport"
    },
    {
        "code": "SUY",
        "country": "RU",
        "state": "",
        "name": "Suntar Airport"
    },
    {
        "code": "SVA",
        "country": "US",
        "state": "AK",
        "name": "Savoonga Airport"
    },
    {
        "code": "SVB",
        "country": "MG",
        "state": "",
        "name": "Sambava Airport"
    },
    {
        "code": "SVC",
        "country": "US",
        "state": "NM",
        "name": "Grant County Airport"
    },
    {
        "code": "SVD",
        "country": "VC",
        "state": "",
        "name": "Argyle International Airport"
    },
    {
        "code": "SVG",
        "country": "NO",
        "state": "",
        "name": "Sola Airport"
    },
    {
        "code": "SVI",
        "country": "CO",
        "state": "",
        "name": "Eduardo Falla Solano Airport"
    },
    {
        "code": "SVJ",
        "country": "NO",
        "state": "",
        "name": "Helle Airport"
    },
    {
        "code": "SVO",
        "country": "RU",
        "state": "",
        "name": "Sheremetyevo Airport"
    },
    {
        "code": "SVQ",
        "country": "ES",
        "state": "",
        "name": "Sevilla Airport"
    },
    {
        "code": "SVR",
        "country": "GL",
        "state": "",
        "name": "Savissivik Heliport"
    },
    {
        "code": "SVS",
        "country": "US",
        "state": "AK",
        "name": "Stevens Village Airport"
    },
    {
        "code": "SVU",
        "country": "FJ",
        "state": "",
        "name": "Savusavu Airport"
    },
    {
        "code": "SVX",
        "country": "RU",
        "state": "",
        "name": "Koltsovo Airport"
    },
    {
        "code": "SVZ",
        "country": "VE",
        "state": "",
        "name": "Juan Vicente Gomez International Airpor"
    },
    {
        "code": "SWA",
        "country": "CN",
        "state": "",
        "name": "Jieyang Chaoshan Airport"
    },
    {
        "code": "SWF",
        "country": "US",
        "state": "NY",
        "name": "Stewart International Airport"
    },
    {
        "code": "SWJ",
        "country": "VU",
        "state": "",
        "name": "South West Bay Airport"
    },
    {
        "code": "SWL",
        "country": "PH",
        "state": "",
        "name": "San Vicente Airport"
    },
    {
        "code": "SWO",
        "country": "US",
        "state": "OK",
        "name": "Stillwater Regional Airport"
    },
    {
        "code": "SWP",
        "country": "NA",
        "state": "",
        "name": "Swakopmund Airport"
    },
    {
        "code": "SWQ",
        "country": "ID",
        "state": "",
        "name": "Brangbiji Airport"
    },
    {
        "code": "SWS",
        "country": "GB",
        "state": "",
        "name": "Swansea Airport"
    },
    {
        "code": "SWT",
        "country": "RU",
        "state": "",
        "name": "Strezhevoy Airport"
    },
    {
        "code": "SWV",
        "country": "RU",
        "state": "",
        "name": "Severo-Evensk Airport"
    },
    {
        "code": "SXB",
        "country": "FR",
        "state": "",
        "name": "Entzheim Airport"
    },
    {
        "code": "SXK",
        "country": "ID",
        "state": "",
        "name": "Olilit Airport"
    },
    {
        "code": "SXM",
        "country": "SX",
        "state": "",
        "name": "Princess Juliana International Airport"
    },
    {
        "code": "SXP",
        "country": "US",
        "state": "AK",
        "name": "Sheldon Point Airport"
    },
    {
        "code": "SXR",
        "country": "IN",
        "state": "JK",
        "name": "Sheikh ul Alam Airport"
    },
    {
        "code": "SXV",
        "country": "IN",
        "state": "TN",
        "name": "Salem Airport"
    },
    {
        "code": "SXZ",
        "country": "TR",
        "state": "",
        "name": "Siirt Airport"
    },
    {
        "code": "SYB",
        "country": "US",
        "state": "AK",
        "name": "Seal Bay Sea Plane Base"
    },
    {
        "code": "SYD",
        "country": "AU",
        "state": "NS",
        "name": "Kingsford Smith Airport"
    },
    {
        "code": "SYJ",
        "country": "IR",
        "state": "",
        "name": "Sirjan Airport"
    },
    {
        "code": "SYM",
        "country": "CN",
        "state": "",
        "name": "Simao Airport"
    },
    {
        "code": "SYO",
        "country": "JP",
        "state": "",
        "name": "Shonai Airport"
    },
    {
        "code": "SYR",
        "country": "US",
        "state": "NY",
        "name": "Hancock International Airport"
    },
    {
        "code": "SYS",
        "country": "RU",
        "state": "",
        "name": "Saskylakh Airport"
    },
    {
        "code": "SYU",
        "country": "AU",
        "state": "QL",
        "name": "Warraber Island Airport"
    },
    {
        "code": "SYX",
        "country": "CN",
        "state": "",
        "name": "Phoenix International Airport"
    },
    {
        "code": "SYY",
        "country": "GB",
        "state": "",
        "name": "Stornoway Airport"
    },
    {
        "code": "SYZ",
        "country": "IR",
        "state": "",
        "name": "Shahid Dastghaib International"
    },
    {
        "code": "SZA",
        "country": "AO",
        "state": "",
        "name": "Soyo Airport"
    },
    {
        "code": "SZB",
        "country": "MY",
        "state": "",
        "name": "Sultan Abdul Aziz Shah Airport"
    },
    {
        "code": "SZC",
        "country": "GL",
        "state": "",
        "name": "Sarfannguit Airport"
    },
    {
        "code": "SZE",
        "country": "ET",
        "state": "",
        "name": "Semera Airport"
    },
    {
        "code": "SZF",
        "country": "TR",
        "state": "",
        "name": "Carsamba Airport"
    },
    {
        "code": "SZG",
        "country": "AT",
        "state": "",
        "name": "W.A. Mozart Airport"
    },
    {
        "code": "SZH",
        "country": "CN",
        "state": "",
        "name": "Shuozhou Zirun Airport"
    },
    {
        "code": "SZK",
        "country": "ZA",
        "state": "",
        "name": "Skukuza Airport"
    },
    {
        "code": "SZV",
        "country": "CN",
        "state": "",
        "name": "Guangfu Airport"
    },
    {
        "code": "SZX",
        "country": "CN",
        "state": "",
        "name": "Bao'an International Airport"
    },
    {
        "code": "SZY",
        "country": "PL",
        "state": "",
        "name": "Olsztyn-Mazury Airport"
    },
    {
        "code": "SZZ",
        "country": "PL",
        "state": "",
        "name": "Goleniow Airport"
    },
    {
        "code": "TAB",
        "country": "TT",
        "state": "",
        "name": "Arthur Napoleon Raymond Robinson Intl A"
    },
    {
        "code": "TAC",
        "country": "PH",
        "state": "",
        "name": "Daniel Z. Romualdez Airport"
    },
    {
        "code": "TAE",
        "country": "KR",
        "state": "",
        "name": "Daegu International Airport"
    },
    {
        "code": "TAG",
        "country": "PH",
        "state": "",
        "name": "Bohol International Airport"
    },
    {
        "code": "TAH",
        "country": "VU",
        "state": "",
        "name": "Tanna Airport"
    },
    {
        "code": "TAK",
        "country": "JP",
        "state": "",
        "name": "Takamatsu Airport"
    },
    {
        "code": "TAL",
        "country": "US",
        "state": "AK",
        "name": "Ralph M. Calhoun Memorial Airport"
    },
    {
        "code": "TAM",
        "country": "MX",
        "state": "",
        "name": "Francisco Javier Mina International Air"
    },
    {
        "code": "TAO",
        "country": "CN",
        "state": "",
        "name": "Liuting International Airport"
    },
    {
        "code": "TAP",
        "country": "MX",
        "state": "",
        "name": "Tapachula International Airport"
    },
    {
        "code": "TAS",
        "country": "UZ",
        "state": "",
        "name": "Tashkent International Airport"
    },
    {
        "code": "TAT",
        "country": "SK",
        "state": "",
        "name": "Tatry Airport"
    },
    {
        "code": "TAY",
        "country": "EE",
        "state": "",
        "name": "Ulenurme Airport"
    },
    {
        "code": "TAZ",
        "country": "TM",
        "state": "",
        "name": "Dashoguz Airport"
    },
    {
        "code": "TBB",
        "country": "VN",
        "state": "",
        "name": "Dong Tac Airport"
    },
    {
        "code": "TBF",
        "country": "KI",
        "state": "",
        "name": "Tabiteuea North Airport"
    },
    {
        "code": "TBG",
        "country": "PG",
        "state": "",
        "name": "Tabubil Airport"
    },
    {
        "code": "TBH",
        "country": "PH",
        "state": "",
        "name": "Tugdan Airport"
    },
    {
        "code": "TBI",
        "country": "BS",
        "state": "",
        "name": "New Bight Airport"
    },
    {
        "code": "TBN",
        "country": "US",
        "state": "MO",
        "name": "Waynesville-Saint Robert Regional Airpo"
    },
    {
        "code": "TBO",
        "country": "TZ",
        "state": "",
        "name": "Tabora Airport"
    },
    {
        "code": "TBP",
        "country": "PE",
        "state": "",
        "name": "Pedro Canga Rodriguez Airport"
    },
    {
        "code": "TBS",
        "country": "GE",
        "state": "",
        "name": "Tbilisi International Airport"
    },
    {
        "code": "TBT",
        "country": "BR",
        "state": "AM",
        "name": "Tabatinga International Airport"
    },
    {
        "code": "TBU",
        "country": "TO",
        "state": "",
        "name": "Fua'amotu International Airport"
    },
    {
        "code": "TBW",
        "country": "RU",
        "state": "",
        "name": "Donskoye Airport"
    },
    {
        "code": "TBZ",
        "country": "IR",
        "state": "",
        "name": "Tabriz International Airport"
    },
    {
        "code": "TCA",
        "country": "AU",
        "state": "NT",
        "name": "Tennant Creek Airport"
    },
    {
        "code": "TCD",
        "country": "CO",
        "state": "",
        "name": "Tarapaca Airport"
    },
    {
        "code": "TCG",
        "country": "CN",
        "state": "",
        "name": "Tacheng Airport"
    },
    {
        "code": "TCO",
        "country": "CO",
        "state": "",
        "name": "La Florida Airport"
    },
    {
        "code": "TCQ",
        "country": "PE",
        "state": "",
        "name": "Carlos Ciriani Santa Rosa Airport"
    },
    {
        "code": "TCR",
        "country": "IN",
        "state": "TN",
        "name": "Tuticorin Airport"
    },
    {
        "code": "TCX",
        "country": "IR",
        "state": "",
        "name": "Tabas Airport"
    },
    {
        "code": "TCZ",
        "country": "CN",
        "state": "",
        "name": "Tuofeng Airport"
    },
    {
        "code": "TDD",
        "country": "BO",
        "state": "",
        "name": "Jorge Henrich Arauz Airport"
    },
    {
        "code": "TDX",
        "country": "TH",
        "state": "",
        "name": "Trat Airport"
    },
    {
        "code": "TEB",
        "country": "US",
        "state": "NJ",
        "name": "Teterboro Airport"
    },
    {
        "code": "TEC",
        "country": "BR",
        "state": "PR",
        "name": "Telemaco Borba Airport"
    },
    {
        "code": "TEE",
        "country": "DZ",
        "state": "",
        "name": "Cheikh Larbi Tebessi Airport"
    },
    {
        "code": "TEI",
        "country": "IN",
        "state": "AR",
        "name": "Tezu Airport"
    },
    {
        "code": "TEN",
        "country": "CN",
        "state": "",
        "name": "Fenhuang Airport"
    },
    {
        "code": "TEQ",
        "country": "TR",
        "state": "",
        "name": "Corlu Airport"
    },
    {
        "code": "TER",
        "country": "PT",
        "state": "",
        "name": "Lajes Airport"
    },
    {
        "code": "TET",
        "country": "MZ",
        "state": "",
        "name": "Chingozi Airport"
    },
    {
        "code": "TEX",
        "country": "US",
        "state": "CO",
        "name": "Telluride Regional Airport"
    },
    {
        "code": "TEZ",
        "country": "IN",
        "state": "AS",
        "name": "Tezpur Airport"
    },
    {
        "code": "TFF",
        "country": "BR",
        "state": "AM",
        "name": "Tefe Airport"
    },
    {
        "code": "TFL",
        "country": "BR",
        "state": "MG",
        "name": "Juscelino Kubitscheck Airport"
    },
    {
        "code": "TFN",
        "country": "ES",
        "state": "",
        "name": "Tenerife-Norte"
    },
    {
        "code": "TFS",
        "country": "ES",
        "state": "",
        "name": "Tenerife-Sur"
    },
    {
        "code": "TFU",
        "country": "CN",
        "state": "",
        "name": "Tianfu International"
    },
    {
        "code": "TGC",
        "country": "MY",
        "state": "",
        "name": "Tanjung Manis Airport"
    },
    {
        "code": "TGD",
        "country": "ME",
        "state": "",
        "name": "Podgorica Airport"
    },
    {
        "code": "TGG",
        "country": "MY",
        "state": "",
        "name": "Sultan Mahmud Airport"
    },
    {
        "code": "TGI",
        "country": "PE",
        "state": "",
        "name": "Tingo Maria Airport"
    },
    {
        "code": "TGJ",
        "country": "NC",
        "state": "",
        "name": "Tiga Airport"
    },
    {
        "code": "TGM",
        "country": "RO",
        "state": "",
        "name": "Transilvania Airport"
    },
    {
        "code": "TGO",
        "country": "CN",
        "state": "",
        "name": "Tongliao Airport"
    },
    {
        "code": "TGP",
        "country": "RU",
        "state": "",
        "name": "Podkamennaya Tunguska Airport"
    },
    {
        "code": "TGR",
        "country": "DZ",
        "state": "",
        "name": "Sidi Mahdi Airport"
    },
    {
        "code": "TGT",
        "country": "TZ",
        "state": "",
        "name": "Tanga Airport"
    },
    {
        "code": "TGU",
        "country": "HN",
        "state": "",
        "name": "Toncontin International Airport"
    },
    {
        "code": "TGZ",
        "country": "MX",
        "state": "",
        "name": "Angel Albino Corzo International Airpor"
    },
    {
        "code": "THD",
        "country": "VN",
        "state": "",
        "name": "Tho Xuan Airport"
    },
    {
        "code": "THE",
        "country": "BR",
        "state": "PI",
        "name": "Petronio Portella Airport"
    },
    {
        "code": "THL",
        "country": "MM",
        "state": "",
        "name": "Tachilek Airport"
    },
    {
        "code": "THO",
        "country": "IS",
        "state": "",
        "name": "Thorshofn Airport"
    },
    {
        "code": "THQ",
        "country": "CN",
        "state": "",
        "name": "Maijishan Airport"
    },
    {
        "code": "THR",
        "country": "IR",
        "state": "",
        "name": "Mehrabad International Airport"
    },
    {
        "code": "THS",
        "country": "TH",
        "state": "",
        "name": "Sukhothai Airport"
    },
    {
        "code": "THU",
        "country": "GL",
        "state": "",
        "name": "Thule Air Base"
    },
    {
        "code": "THX",
        "country": "RU",
        "state": "",
        "name": "Turukhansk Airport"
    },
    {
        "code": "TIA",
        "country": "AL",
        "state": "",
        "name": "Nene Tereza International Airport"
    },
    {
        "code": "TID",
        "country": "DZ",
        "state": "",
        "name": "Bou Chekif Airport"
    },
    {
        "code": "TIF",
        "country": "SA",
        "state": "",
        "name": "Taif Airport"
    },
    {
        "code": "TIH",
        "country": "PF",
        "state": "",
        "name": "Tikehau Airport"
    },
    {
        "code": "TIJ",
        "country": "MX",
        "state": "",
        "name": "Abelardo L. Rodriguez International Air"
    },
    {
        "code": "TIM",
        "country": "ID",
        "state": "",
        "name": "Moses Kilangin Airport"
    },
    {
        "code": "TIN",
        "country": "DZ",
        "state": "",
        "name": "Tindouf Airport"
    },
    {
        "code": "TIR",
        "country": "IN",
        "state": "AP",
        "name": "Tirupati Airport"
    },
    {
        "code": "TIS",
        "country": "AU",
        "state": "QL",
        "name": "Thursday Island Heliport"
    },
    {
        "code": "TIU",
        "country": "NZ",
        "state": "",
        "name": "Richard Pearse Airport"
    },
    {
        "code": "TIV",
        "country": "ME",
        "state": "",
        "name": "Tivat Airport"
    },
    {
        "code": "TIZ",
        "country": "PG",
        "state": "",
        "name": "Tari Airport"
    },
    {
        "code": "TJA",
        "country": "BO",
        "state": "",
        "name": "Cap. Oriel Lea Plaza Airport"
    },
    {
        "code": "TJH",
        "country": "JP",
        "state": "",
        "name": "Tajima Airport"
    },
    {
        "code": "TJK",
        "country": "TR",
        "state": "",
        "name": "Tokat Airport"
    },
    {
        "code": "TJL",
        "country": "BR",
        "state": "MS",
        "name": "Plinio Alarcom Airport"
    },
    {
        "code": "TJM",
        "country": "RU",
        "state": "",
        "name": "Roshchino Airport"
    },
    {
        "code": "TJN",
        "country": "PF",
        "state": "",
        "name": "Takume Airport"
    },
    {
        "code": "TJQ",
        "country": "ID",
        "state": "",
        "name": "H.A.S. Hanandjoeddin Airport"
    },
    {
        "code": "TJS",
        "country": "ID",
        "state": "",
        "name": "Tanjung Harapan Airport"
    },
    {
        "code": "TJU",
        "country": "TJ",
        "state": "",
        "name": "Kulob Airport"
    },
    {
        "code": "TKD",
        "country": "GH",
        "state": "",
        "name": "Takoradi Airport"
    },
    {
        "code": "TKE",
        "country": "US",
        "state": "AK",
        "name": "Tenakee Sea Plane Base"
    },
    {
        "code": "TKF",
        "country": "US",
        "state": "CA",
        "name": "Truckee-Tahoe Airport"
    },
    {
        "code": "TKG",
        "country": "ID",
        "state": "",
        "name": "Radin Inten II Airport"
    },
    {
        "code": "TKJ",
        "country": "US",
        "state": "AK",
        "name": "Tok Junction Airport"
    },
    {
        "code": "TKK",
        "country": "FM",
        "state": "",
        "name": "Chuuk International Airport"
    },
    {
        "code": "TKN",
        "country": "JP",
        "state": "",
        "name": "Tokunoshima Airport"
    },
    {
        "code": "TKP",
        "country": "PF",
        "state": "",
        "name": "Takapoto Airport"
    },
    {
        "code": "TKQ",
        "country": "TZ",
        "state": "",
        "name": "Kigoma Airport"
    },
    {
        "code": "TKS",
        "country": "JP",
        "state": "",
        "name": "Tokushima Airport"
    },
    {
        "code": "TKU",
        "country": "FI",
        "state": "",
        "name": "Turku Airport"
    },
    {
        "code": "TKV",
        "country": "PF",
        "state": "",
        "name": "Tatakoto Airport"
    },
    {
        "code": "TKX",
        "country": "PF",
        "state": "",
        "name": "Takaroa Airport"
    },
    {
        "code": "TLA",
        "country": "US",
        "state": "AK",
        "name": "Teller Airport"
    },
    {
        "code": "TLC",
        "country": "MX",
        "state": "",
        "name": "Toluca-Adolfo Lopez Mateos Airport"
    },
    {
        "code": "TLE",
        "country": "MG",
        "state": "",
        "name": "Toliara Airport"
    },
    {
        "code": "TLH",
        "country": "US",
        "state": "FL",
        "name": "Tallahassee International Airport"
    },
    {
        "code": "TLI",
        "country": "ID",
        "state": "",
        "name": "Lalos Airport"
    },
    {
        "code": "TLK",
        "country": "RU",
        "state": "",
        "name": "Talakan Airport"
    },
    {
        "code": "TLL",
        "country": "EE",
        "state": "",
        "name": "Lennart Meri Airport"
    },
    {
        "code": "TLM",
        "country": "DZ",
        "state": "",
        "name": "Zenata-Messali El Hadj Airport"
    },
    {
        "code": "TLN",
        "country": "FR",
        "state": "",
        "name": "La Palyvestre Airport"
    },
    {
        "code": "TLQ",
        "country": "CN",
        "state": "",
        "name": "Jiaohe Airport"
    },
    {
        "code": "TLS",
        "country": "FR",
        "state": "",
        "name": "Blagnac Airport"
    },
    {
        "code": "TLU",
        "country": "CO",
        "state": "",
        "name": "Golfo de Morrosquillo Airport"
    },
    {
        "code": "TLV",
        "country": "IL",
        "state": "",
        "name": "Ben Gurion International Airport"
    },
    {
        "code": "TLY",
        "country": "RU",
        "state": "",
        "name": "Plastun Airport"
    },
    {
        "code": "TMC",
        "country": "ID",
        "state": "",
        "name": "Waikabubak Airport"
    },
    {
        "code": "TME",
        "country": "CO",
        "state": "",
        "name": "Gabriel Vargas Santos Airport"
    },
    {
        "code": "TMF",
        "country": "MV",
        "state": "",
        "name": "Thimarafushi Airport"
    },
    {
        "code": "TMH",
        "country": "ID",
        "state": "",
        "name": "Tanahmerah Airport"
    },
    {
        "code": "TMI",
        "country": "NP",
        "state": "",
        "name": "Tumlingtar Airport"
    },
    {
        "code": "TMJ",
        "country": "UZ",
        "state": "",
        "name": "Termez Airport"
    },
    {
        "code": "TML",
        "country": "GH",
        "state": "",
        "name": "Tamale Airport"
    },
    {
        "code": "TMM",
        "country": "MG",
        "state": "",
        "name": "Toamasina Airport"
    },
    {
        "code": "TMN",
        "country": "KI",
        "state": "",
        "name": "Tamana Airport"
    },
    {
        "code": "TMP",
        "country": "FI",
        "state": "",
        "name": "Tampere-Pirkkala Airport"
    },
    {
        "code": "TMR",
        "country": "DZ",
        "state": "",
        "name": "Aguenar Airport"
    },
    {
        "code": "TMS",
        "country": "ST",
        "state": "",
        "name": "Sao Tome International Airport"
    },
    {
        "code": "TMT",
        "country": "BR",
        "state": "PA",
        "name": "Trombetas Airport"
    },
    {
        "code": "TMU",
        "country": "CR",
        "state": "",
        "name": "Tambor Airport"
    },
    {
        "code": "TMW",
        "country": "AU",
        "state": "NS",
        "name": "Tamworth Airport"
    },
    {
        "code": "TMX",
        "country": "DZ",
        "state": "",
        "name": "Timimoun Airport"
    },
    {
        "code": "TNA",
        "country": "CN",
        "state": "",
        "name": "Yaoqiang International Airport"
    },
    {
        "code": "TNC",
        "country": "US",
        "state": "AK",
        "name": "Tin City Airport"
    },
    {
        "code": "TNE",
        "country": "JP",
        "state": "",
        "name": "Tanegashima Airport"
    },
    {
        "code": "TNG",
        "country": "MA",
        "state": "",
        "name": "Ibn Batouta Airport"
    },
    {
        "code": "TNH",
        "country": "CN",
        "state": "",
        "name": "Sanyuanpu Airport"
    },
    {
        "code": "TNJ",
        "country": "ID",
        "state": "",
        "name": "Raja Haji Fisabilillah Airport"
    },
    {
        "code": "TNK",
        "country": "US",
        "state": "AK",
        "name": "Tununak Airport"
    },
    {
        "code": "TNN",
        "country": "TW",
        "state": "",
        "name": "Tainan Airport"
    },
    {
        "code": "TNO",
        "country": "CR",
        "state": "",
        "name": "Tamarindo Airport"
    },
    {
        "code": "TNR",
        "country": "MG",
        "state": "",
        "name": "Ivato International Airport"
    },
    {
        "code": "TOB",
        "country": "LY",
        "state": "",
        "name": "Tobruk Airport"
    },
    {
        "code": "TOE",
        "country": "TN",
        "state": "",
        "name": "Nefta Airport"
    },
    {
        "code": "TOF",
        "country": "RU",
        "state": "",
        "name": "Bogashevo Airport"
    },
    {
        "code": "TOG",
        "country": "US",
        "state": "AK",
        "name": "Togiak Airport"
    },
    {
        "code": "TOH",
        "country": "VU",
        "state": "",
        "name": "Torres Islands Airport"
    },
    {
        "code": "TOL",
        "country": "US",
        "state": "OH",
        "name": "Express Airport"
    },
    {
        "code": "TOS",
        "country": "NO",
        "state": "",
        "name": "Langnes Airport"
    },
    {
        "code": "TOY",
        "country": "JP",
        "state": "",
        "name": "Toyama Airport"
    },
    {
        "code": "TPA",
        "country": "US",
        "state": "FL",
        "name": "Tampa International Airport"
    },
    {
        "code": "TPB",
        "country": "GB",
        "state": "",
        "name": "Temple Meads Railway Station"
    },
    {
        "code": "TPE",
        "country": "TW",
        "state": "",
        "name": "Taiwan Taoyuan International Airport"
    },
    {
        "code": "TPP",
        "country": "PE",
        "state": "",
        "name": "Guillermo del Castillo Paredes Airport"
    },
    {
        "code": "TPQ",
        "country": "MX",
        "state": "",
        "name": "Amado Nervo Airport"
    },
    {
        "code": "TPS",
        "country": "IT",
        "state": "",
        "name": "Birgi Airport"
    },
    {
        "code": "TQA",
        "country": "GL",
        "state": "",
        "name": "Tasiusaq (Upernavik) Heliport"
    },
    {
        "code": "TQI",
        "country": "GL",
        "state": "",
        "name": "Tiniteqilaaq Heliport"
    },
    {
        "code": "TQO",
        "country": "MX",
        "state": "",
        "name": "Felipe Carrillo Puerto Airport"
    },
    {
        "code": "TQR",
        "country": "IT",
        "state": "",
        "name": "Isole Tremiti Heliport"
    },
    {
        "code": "TRA",
        "country": "JP",
        "state": "",
        "name": "Tarama Airport"
    },
    {
        "code": "TRC",
        "country": "MX",
        "state": "",
        "name": "Francisco Sarabia International Airport"
    },
    {
        "code": "TRD",
        "country": "NO",
        "state": "",
        "name": "Vaernes Airport"
    },
    {
        "code": "TRE",
        "country": "GB",
        "state": "",
        "name": "Tiree Airport"
    },
    {
        "code": "TRF",
        "country": "NO",
        "state": "",
        "name": "Sandefjord-Torp Airport"
    },
    {
        "code": "TRG",
        "country": "NZ",
        "state": "",
        "name": "Tauranga Airport"
    },
    {
        "code": "TRI",
        "country": "US",
        "state": "TN",
        "name": "Tri-Cities Regional TN/VA Airport"
    },
    {
        "code": "TRK",
        "country": "ID",
        "state": "",
        "name": "Juwata Airport"
    },
    {
        "code": "TRN",
        "country": "IT",
        "state": "",
        "name": "Caselle Airport"
    },
    {
        "code": "TRS",
        "country": "IT",
        "state": "",
        "name": "Ronchi dei Legionari Airport"
    },
    {
        "code": "TRT",
        "country": "ID",
        "state": "",
        "name": "Toraja"
    },
    {
        "code": "TRU",
        "country": "PE",
        "state": "",
        "name": "Carlos Martinez de Pinillos Airport"
    },
    {
        "code": "TRV",
        "country": "IN",
        "state": "KL",
        "name": "Thiruvananthapuram International Airpor"
    },
    {
        "code": "TRW",
        "country": "KI",
        "state": "",
        "name": "Bonriki International Airport"
    },
    {
        "code": "TRZ",
        "country": "IN",
        "state": "TN",
        "name": "Tiruchirappalli Airport"
    },
    {
        "code": "TSA",
        "country": "TW",
        "state": "",
        "name": "Songshan Airport"
    },
    {
        "code": "TSF",
        "country": "IT",
        "state": "",
        "name": "Treviso/Sant'Angelo Airport"
    },
    {
        "code": "TSJ",
        "country": "JP",
        "state": "",
        "name": "Tsushima Airport"
    },
    {
        "code": "TSM",
        "country": "US",
        "state": "NM",
        "name": "Taos Regional Airport"
    },
    {
        "code": "TSN",
        "country": "CN",
        "state": "",
        "name": "Binhai International Airport"
    },
    {
        "code": "TSR",
        "country": "RO",
        "state": "",
        "name": "Traian Vuia Airport"
    },
    {
        "code": "TST",
        "country": "TH",
        "state": "",
        "name": "Trang Airport"
    },
    {
        "code": "TSU",
        "country": "KI",
        "state": "",
        "name": "Tabiteuea South Airport"
    },
    {
        "code": "TSV",
        "country": "AU",
        "state": "QL",
        "name": "Townsville International Airport"
    },
    {
        "code": "TTA",
        "country": "MA",
        "state": "",
        "name": "Plage Blanche Airport"
    },
    {
        "code": "TTE",
        "country": "ID",
        "state": "",
        "name": "Sultan Babullah Airport"
    },
    {
        "code": "TTJ",
        "country": "JP",
        "state": "",
        "name": "Tottori Airport"
    },
    {
        "code": "TTN",
        "country": "US",
        "state": "PA",
        "name": "Trenton-Mercer Airport"
    },
    {
        "code": "TTQ",
        "country": "CR",
        "state": "",
        "name": "Tortuguero Airport"
    },
    {
        "code": "TTT",
        "country": "TW",
        "state": "",
        "name": "Fongnian Airport"
    },
    {
        "code": "TTU",
        "country": "MA",
        "state": "",
        "name": "Saniat R'mel Airport"
    },
    {
        "code": "TTY",
        "country": "GB",
        "state": "",
        "name": "Taunton Bus Station"
    },
    {
        "code": "TUB",
        "country": "PF",
        "state": "",
        "name": "Mataura Airport"
    },
    {
        "code": "TUC",
        "country": "AR",
        "state": "TU",
        "name": "Benjamin Matienzo Airport"
    },
    {
        "code": "TUF",
        "country": "FR",
        "state": "",
        "name": "Val de Loire Airport"
    },
    {
        "code": "TUG",
        "country": "PH",
        "state": "",
        "name": "Tuguegarao Airport"
    },
    {
        "code": "TUI",
        "country": "SA",
        "state": "",
        "name": "Turaif Airport"
    },
    {
        "code": "TUK",
        "country": "PK",
        "state": "",
        "name": "Turbat International"
    },
    {
        "code": "TUL",
        "country": "US",
        "state": "OK",
        "name": "Tulsa International Airport"
    },
    {
        "code": "TUN",
        "country": "TN",
        "state": "",
        "name": "Carthage Airport"
    },
    {
        "code": "TUO",
        "country": "NZ",
        "state": "",
        "name": "Taupo Airport"
    },
    {
        "code": "TUP",
        "country": "US",
        "state": "MS",
        "name": "Tupelo Regional Airport"
    },
    {
        "code": "TUR",
        "country": "BR",
        "state": "PA",
        "name": "Tucurui Airport"
    },
    {
        "code": "TUS",
        "country": "US",
        "state": "AZ",
        "name": "Tucson International Airport"
    },
    {
        "code": "TUU",
        "country": "SA",
        "state": "",
        "name": "Tabuk Airport"
    },
    {
        "code": "TVC",
        "country": "US",
        "state": "MI",
        "name": "Cherry Capital Airport"
    },
    {
        "code": "TVF",
        "country": "US",
        "state": "MN",
        "name": "Thief River Falls Regional Airport"
    },
    {
        "code": "TVS",
        "country": "CN",
        "state": "",
        "name": "Sannuhe Airport"
    },
    {
        "code": "TVU",
        "country": "FJ",
        "state": "",
        "name": "Matei Airport"
    },
    {
        "code": "TVY",
        "country": "MM",
        "state": "",
        "name": "Dawei Airport"
    },
    {
        "code": "TWA",
        "country": "US",
        "state": "AK",
        "name": "Twin Hills Airport"
    },
    {
        "code": "TWC",
        "country": "CN",
        "state": "",
        "name": "Tangwangcheng Airport"
    },
    {
        "code": "TWF",
        "country": "US",
        "state": "ID",
        "name": "Magic Valley Regional Airport"
    },
    {
        "code": "TWT",
        "country": "PH",
        "state": "",
        "name": "Sanga-Sanga Airport"
    },
    {
        "code": "TWU",
        "country": "MY",
        "state": "",
        "name": "Tawau Airport"
    },
    {
        "code": "TXF",
        "country": "BR",
        "state": "BA",
        "name": "Teixeira de Freitas Airport"
    },
    {
        "code": "TXK",
        "country": "US",
        "state": "AR",
        "name": "Texarkana Regional Airport - Webb Field"
    },
    {
        "code": "TXN",
        "country": "CN",
        "state": "",
        "name": "Tunxi International Airport"
    },
    {
        "code": "TYD",
        "country": "RU",
        "state": "",
        "name": "Tynda Airport"
    },
    {
        "code": "TYL",
        "country": "PE",
        "state": "",
        "name": "Victor Monteas Arias Airport"
    },
    {
        "code": "TYN",
        "country": "CN",
        "state": "",
        "name": "Wusu International Airport"
    },
    {
        "code": "TYQ",
        "country": "JP",
        "state": "",
        "name": "Tokyo Sta. Marunouchi-Kitaguch"
    },
    {
        "code": "TYR",
        "country": "US",
        "state": "TX",
        "name": "Pounds Regional Airport"
    },
    {
        "code": "TYS",
        "country": "US",
        "state": "TN",
        "name": "McGhee Tyson Airport"
    },
    {
        "code": "TZA",
        "country": "BZ",
        "state": "",
        "name": "Belize City Municipal Airport"
    },
    {
        "code": "TZL",
        "country": "BA",
        "state": "",
        "name": "Tuzla International Airport"
    },
    {
        "code": "TZX",
        "country": "TR",
        "state": "",
        "name": "Trabzon Airport"
    },
    {
        "code": "UAH",
        "country": "PF",
        "state": "",
        "name": "Ua Huka Airport"
    },
    {
        "code": "UAK",
        "country": "GL",
        "state": "",
        "name": "Narsarsuaq Airport"
    },
    {
        "code": "UAP",
        "country": "PF",
        "state": "",
        "name": "Ua Pou Airport"
    },
    {
        "code": "UAQ",
        "country": "AR",
        "state": "SJ",
        "name": "Domingo F. Sarmiento Airport"
    },
    {
        "code": "UBA",
        "country": "BR",
        "state": "MG",
        "name": "M. de Almeida Franco Airport"
    },
    {
        "code": "UBB",
        "country": "AU",
        "state": "QL",
        "name": "Mabuiag Island Airport"
    },
    {
        "code": "UBJ",
        "country": "JP",
        "state": "",
        "name": "Yamaguchi-Ube Airport"
    },
    {
        "code": "UBN",
        "country": "MN",
        "state": "",
        "name": "Chinggis Khaan International Airport"
    },
    {
        "code": "UBP",
        "country": "TH",
        "state": "",
        "name": "Ubon Ratchathani Airport"
    },
    {
        "code": "UBW",
        "country": "GB",
        "state": "",
        "name": "Bridgwater Railway Station"
    },
    {
        "code": "UCB",
        "country": "CN",
        "state": "",
        "name": "Ulanqab Airport"
    },
    {
        "code": "UCT",
        "country": "RU",
        "state": "",
        "name": "Ukhta Airport"
    },
    {
        "code": "UDI",
        "country": "BR",
        "state": "MG",
        "name": "Cesar Bombonato Airport"
    },
    {
        "code": "UDR",
        "country": "IN",
        "state": "RJ",
        "name": "Maharana Pratap Airport"
    },
    {
        "code": "UEL",
        "country": "MZ",
        "state": "",
        "name": "Quelimane Airport"
    },
    {
        "code": "UEO",
        "country": "JP",
        "state": "",
        "name": "Kumejima Airport"
    },
    {
        "code": "UET",
        "country": "PK",
        "state": "",
        "name": "Quetta International Airport"
    },
    {
        "code": "UFA",
        "country": "RU",
        "state": "",
        "name": "Ufa Airport"
    },
    {
        "code": "UGB",
        "country": "US",
        "state": "AK",
        "name": "Ugashik Bay Airport"
    },
    {
        "code": "UGC",
        "country": "UZ",
        "state": "",
        "name": "Urgench International Airport"
    },
    {
        "code": "UGI",
        "country": "US",
        "state": "AK",
        "name": "San Juan (Uganik) Sea Plane Base"
    },
    {
        "code": "UGR",
        "country": "ES",
        "state": "",
        "name": "Burgos Railway Station"
    },
    {
        "code": "UHS",
        "country": "RU",
        "state": "",
        "name": "Aleksandrovsk-Sakhalinskiy Airport"
    },
    {
        "code": "UIB",
        "country": "CO",
        "state": "",
        "name": "El Carano Airport"
    },
    {
        "code": "UIH",
        "country": "VN",
        "state": "",
        "name": "Phu Cat Airport"
    },
    {
        "code": "UII",
        "country": "HN",
        "state": "",
        "name": "Utila Airport"
    },
    {
        "code": "UIN",
        "country": "US",
        "state": "IL",
        "name": "Regional (Baldwin Field) Airport"
    },
    {
        "code": "UIO",
        "country": "EC",
        "state": "",
        "name": "Mariscal Sucre International Airport"
    },
    {
        "code": "UKA",
        "country": "KE",
        "state": "",
        "name": "Diani Airport"
    },
    {
        "code": "UKB",
        "country": "JP",
        "state": "",
        "name": "Kobe Airport"
    },
    {
        "code": "UKE",
        "country": "IN",
        "state": "OR",
        "name": "Utkela Airport"
    },
    {
        "code": "UKG",
        "country": "RU",
        "state": "",
        "name": "Ust-Kuyga Airport"
    },
    {
        "code": "UKK",
        "country": "KZ",
        "state": "",
        "name": "Ust-Kamenogorsk Airport"
    },
    {
        "code": "UKX",
        "country": "RU",
        "state": "",
        "name": "Ust-Kut Airport"
    },
    {
        "code": "ULB",
        "country": "VU",
        "state": "",
        "name": "Ulei Airport"
    },
    {
        "code": "ULG",
        "country": "MN",
        "state": "",
        "name": "Olgii Airport"
    },
    {
        "code": "ULH",
        "country": "SA",
        "state": "",
        "name": "ALULA INTERNATIONAL AIRPORT"
    },
    {
        "code": "ULK",
        "country": "RU",
        "state": "",
        "name": "Lensk Airport"
    },
    {
        "code": "ULO",
        "country": "MN",
        "state": "",
        "name": "Ulaangom Airport"
    },
    {
        "code": "ULP",
        "country": "AU",
        "state": "QL",
        "name": "Quilpie Airport"
    },
    {
        "code": "ULV",
        "country": "RU",
        "state": "",
        "name": "Baratayevka Airport"
    },
    {
        "code": "ULZ",
        "country": "MN",
        "state": "",
        "name": "Donoi Airport"
    },
    {
        "code": "UMD",
        "country": "GL",
        "state": "",
        "name": "Uummannaq Heliport"
    },
    {
        "code": "UME",
        "country": "SE",
        "state": "",
        "name": "Umea Airport"
    },
    {
        "code": "UMU",
        "country": "BR",
        "state": "PR",
        "name": "Orlando de Carvalho Airport"
    },
    {
        "code": "UNA",
        "country": "BR",
        "state": "BA",
        "name": "Ilha Comandatuba/Una Airport"
    },
    {
        "code": "UNG",
        "country": "PG",
        "state": "",
        "name": "Kiunga Airport"
    },
    {
        "code": "UNK",
        "country": "US",
        "state": "AK",
        "name": "Unalakleet Airport"
    },
    {
        "code": "UNN",
        "country": "TH",
        "state": "",
        "name": "Ranong Airport"
    },
    {
        "code": "UPG",
        "country": "ID",
        "state": "",
        "name": "Sultan Hasanuddin Airport"
    },
    {
        "code": "UPK",
        "country": "GL",
        "state": "",
        "name": "Upernavik Kujalleq Heliport"
    },
    {
        "code": "UPN",
        "country": "MX",
        "state": "",
        "name": "Ignacio Lopez Rayon Airport"
    },
    {
        "code": "URA",
        "country": "KZ",
        "state": "",
        "name": "Ak Zhol Airport"
    },
    {
        "code": "URC",
        "country": "CN",
        "state": "",
        "name": "Diwopu International Airport"
    },
    {
        "code": "URE",
        "country": "EE",
        "state": "",
        "name": "Kuressaare Airport"
    },
    {
        "code": "URG",
        "country": "BR",
        "state": "RS",
        "name": "Rubem Berta International Airport"
    },
    {
        "code": "URJ",
        "country": "RU",
        "state": "",
        "name": "Uray Airport"
    },
    {
        "code": "URT",
        "country": "TH",
        "state": "",
        "name": "Surat Thani Airport"
    },
    {
        "code": "URY",
        "country": "SA",
        "state": "",
        "name": "Gurayat Airport"
    },
    {
        "code": "USA",
        "country": "US",
        "state": "NC",
        "name": "Concord Regional Airport"
    },
    {
        "code": "USH",
        "country": "AR",
        "state": "TF",
        "name": "Malvinas Argentinas Airport"
    },
    {
        "code": "USK",
        "country": "RU",
        "state": "",
        "name": "Usinsk Airport"
    },
    {
        "code": "USM",
        "country": "TH",
        "state": "",
        "name": "Ko Samui Airport"
    },
    {
        "code": "USN",
        "country": "KR",
        "state": "",
        "name": "Ulsan Airport"
    },
    {
        "code": "USR",
        "country": "RU",
        "state": "",
        "name": "Ust-Nera Airport"
    },
    {
        "code": "USU",
        "country": "PH",
        "state": "",
        "name": "Francisco B. Reyes Airport"
    },
    {
        "code": "USX",
        "country": "GB",
        "state": "",
        "name": "Saint Austell Railway Station"
    },
    {
        "code": "UTH",
        "country": "TH",
        "state": "",
        "name": "Udon Thani International Airport"
    },
    {
        "code": "UTN",
        "country": "ZA",
        "state": "",
        "name": "Upington Airport"
    },
    {
        "code": "UTP",
        "country": "TH",
        "state": "",
        "name": "Rayong-Pattaya International Airport"
    },
    {
        "code": "UTS",
        "country": "RU",
        "state": "",
        "name": "Ust-Tsilma Airport"
    },
    {
        "code": "UTT",
        "country": "ZA",
        "state": "",
        "name": "K.D. Matanzima Airport"
    },
    {
        "code": "UUA",
        "country": "RU",
        "state": "",
        "name": "Bugulma Airport"
    },
    {
        "code": "UUD",
        "country": "RU",
        "state": "",
        "name": "Mukhino Airport"
    },
    {
        "code": "UUS",
        "country": "RU",
        "state": "",
        "name": "Khomutovo Airport"
    },
    {
        "code": "UVE",
        "country": "NC",
        "state": "",
        "name": "Ouloup Airport"
    },
    {
        "code": "UVF",
        "country": "LC",
        "state": "",
        "name": "Hewnorra International Airport"
    },
    {
        "code": "UVI",
        "country": "BR",
        "state": "PR",
        "name": "Uniao da Vitoria Airport"
    },
    {
        "code": "UWC",
        "country": "GB",
        "state": "",
        "name": "Worcester Railway Station"
    },
    {
        "code": "UYL",
        "country": "SD",
        "state": "",
        "name": "Nyala Airport"
    },
    {
        "code": "UYN",
        "country": "CN",
        "state": "",
        "name": "Yuyang Airport"
    },
    {
        "code": "UYU",
        "country": "BO",
        "state": "",
        "name": "Uyuni Airport"
    },
    {
        "code": "VAA",
        "country": "FI",
        "state": "",
        "name": "Vaasa Airport"
    },
    {
        "code": "VAG",
        "country": "BR",
        "state": "MG",
        "name": "Maj. Brig. Trompowsky Airport"
    },
    {
        "code": "VAI",
        "country": "PG",
        "state": "",
        "name": "Vanimo Airport"
    },
    {
        "code": "VAK",
        "country": "US",
        "state": "AK",
        "name": "Chevak Airport"
    },
    {
        "code": "VAM",
        "country": "MV",
        "state": "",
        "name": "Maamigili Island Airport"
    },
    {
        "code": "VAN",
        "country": "TR",
        "state": "",
        "name": "Ferit Melen Airport"
    },
    {
        "code": "VAO",
        "country": "SB",
        "state": "",
        "name": "Suavanao Airstrip"
    },
    {
        "code": "VAQ",
        "country": "RU",
        "state": "",
        "name": "Vanavara Airport"
    },
    {
        "code": "VAR",
        "country": "BG",
        "state": "",
        "name": "Varna Airport"
    },
    {
        "code": "VAS",
        "country": "TR",
        "state": "",
        "name": "Sivas Airport"
    },
    {
        "code": "VAV",
        "country": "TO",
        "state": "",
        "name": "Vava'u International Airport"
    },
    {
        "code": "VAW",
        "country": "NO",
        "state": "",
        "name": "Svartnes Airport"
    },
    {
        "code": "VBA",
        "country": "MM",
        "state": "",
        "name": "Ann Airport"
    },
    {
        "code": "VBP",
        "country": "MM",
        "state": "",
        "name": "Bokpyin Airport"
    },
    {
        "code": "VBT",
        "country": "ES",
        "state": "",
        "name": "Vigo Bus Station"
    },
    {
        "code": "VBV",
        "country": "FJ",
        "state": "",
        "name": "Vanuabalavu Island Airport"
    },
    {
        "code": "VBY",
        "country": "SE",
        "state": "",
        "name": "Visby Airport"
    },
    {
        "code": "VCA",
        "country": "VN",
        "state": "",
        "name": "Can Tho International Airport"
    },
    {
        "code": "VCE",
        "country": "IT",
        "state": "",
        "name": "Marco Polo Airport"
    },
    {
        "code": "VCL",
        "country": "VN",
        "state": "",
        "name": "Chu Lai International Airport"
    },
    {
        "code": "VCP",
        "country": "BR",
        "state": "SP",
        "name": "Viracopos-Campinas International Airpor"
    },
    {
        "code": "VCS",
        "country": "VN",
        "state": "",
        "name": "Co Ong Airport"
    },
    {
        "code": "VCT",
        "country": "US",
        "state": "TX",
        "name": "Victoria Regional Airport"
    },
    {
        "code": "VDC",
        "country": "BR",
        "state": "BA",
        "name": "Glauber Rocha Airport"
    },
    {
        "code": "VDE",
        "country": "ES",
        "state": "",
        "name": "El Hierro Airport"
    },
    {
        "code": "VDH",
        "country": "VN",
        "state": "",
        "name": "Dong Hoi Airport"
    },
    {
        "code": "VDM",
        "country": "AR",
        "state": "RN",
        "name": "Gobernador E. Castello Airport"
    },
    {
        "code": "VDO",
        "country": "VN",
        "state": "",
        "name": "Van Don International Airport"
    },
    {
        "code": "VDS",
        "country": "NO",
        "state": "",
        "name": "Vadso Airport"
    },
    {
        "code": "VDY",
        "country": "IN",
        "state": "KA",
        "name": "Jindal Airport"
    },
    {
        "code": "VDZ",
        "country": "US",
        "state": "AK",
        "name": "Pioneer Field"
    },
    {
        "code": "VEE",
        "country": "US",
        "state": "AK",
        "name": "Venetie Airport"
    },
    {
        "code": "VEL",
        "country": "US",
        "state": "UT",
        "name": "Vernal Regional Airport"
    },
    {
        "code": "VEO",
        "country": "RU",
        "state": "",
        "name": "Severo-Yeniseyskiy Airport"
    },
    {
        "code": "VER",
        "country": "MX",
        "state": "",
        "name": "Heriberto Jara International Airport"
    },
    {
        "code": "VFA",
        "country": "ZW",
        "state": "",
        "name": "Victoria Falls International Airport"
    },
    {
        "code": "VGA",
        "country": "IN",
        "state": "AP",
        "name": "Vijayawada Airport"
    },
    {
        "code": "VGO",
        "country": "ES",
        "state": "",
        "name": "Vigo Airport"
    },
    {
        "code": "VGZ",
        "country": "CO",
        "state": "",
        "name": "Villagarzon Airport"
    },
    {
        "code": "VHC",
        "country": "AO",
        "state": "",
        "name": "Saurimo Airport"
    },
    {
        "code": "VHM",
        "country": "SE",
        "state": "",
        "name": "Vilhelmina Airport"
    },
    {
        "code": "VHZ",
        "country": "PF",
        "state": "",
        "name": "Vahitahi Airport"
    },
    {
        "code": "VIE",
        "country": "AT",
        "state": "",
        "name": "Schwechat International Airport"
    },
    {
        "code": "VIG",
        "country": "VE",
        "state": "",
        "name": "Juan P. Perez Alfonso Airport"
    },
    {
        "code": "VII",
        "country": "VN",
        "state": "",
        "name": "Vinh Airport"
    },
    {
        "code": "VIJ",
        "country": "VG",
        "state": "",
        "name": "Virgin Gorda Airport"
    },
    {
        "code": "VIL",
        "country": "MA",
        "state": "",
        "name": "Dakhla Airport"
    },
    {
        "code": "VIO",
        "country": "ES",
        "state": "",
        "name": "Vitoria Railway Station"
    },
    {
        "code": "VIT",
        "country": "ES",
        "state": "",
        "name": "Vitoria Airport"
    },
    {
        "code": "VIX",
        "country": "BR",
        "state": "ES",
        "name": "E. de Aguiar Salles Airport"
    },
    {
        "code": "VJB",
        "country": "MZ",
        "state": "",
        "name": "Xai-Xai Airport"
    },
    {
        "code": "VKG",
        "country": "VN",
        "state": "",
        "name": "Rach Gia Airport"
    },
    {
        "code": "VKO",
        "country": "RU",
        "state": "",
        "name": "Vnukovo Airport"
    },
    {
        "code": "VKT",
        "country": "RU",
        "state": "",
        "name": "Vorkuta Airport"
    },
    {
        "code": "VLC",
        "country": "ES",
        "state": "",
        "name": "Valencia Airport"
    },
    {
        "code": "VLD",
        "country": "US",
        "state": "GA",
        "name": "Valdosta Regional Airport"
    },
    {
        "code": "VLI",
        "country": "VU",
        "state": "",
        "name": "Port Vila Airport"
    },
    {
        "code": "VLL",
        "country": "ES",
        "state": "",
        "name": "Valladolid Airport"
    },
    {
        "code": "VLN",
        "country": "VE",
        "state": "",
        "name": "Arturo Michelena International Airport"
    },
    {
        "code": "VLV",
        "country": "VE",
        "state": "",
        "name": "Antonio N. Briceno Airport"
    },
    {
        "code": "VNO",
        "country": "LT",
        "state": "",
        "name": "Vilnius International Airport"
    },
    {
        "code": "VNS",
        "country": "IN",
        "state": "UP",
        "name": "Lal Bahadur Shastri Airport"
    },
    {
        "code": "VNX",
        "country": "MZ",
        "state": "",
        "name": "Vilankulos Airport"
    },
    {
        "code": "VNY",
        "country": "US",
        "state": "CA",
        "name": "Van Nuys Airport"
    },
    {
        "code": "VOG",
        "country": "RU",
        "state": "",
        "name": "Gumrak Airport"
    },
    {
        "code": "VOL",
        "country": "GR",
        "state": "",
        "name": "Nea Anchialos Airport"
    },
    {
        "code": "VOZ",
        "country": "RU",
        "state": "",
        "name": "Chertovitskoye Airport"
    },
    {
        "code": "VPE",
        "country": "AO",
        "state": "",
        "name": "Ondjiva Airport"
    },
    {
        "code": "VPN",
        "country": "IS",
        "state": "",
        "name": "Vopnafjordur Airport"
    },
    {
        "code": "VPS",
        "country": "US",
        "state": "FL",
        "name": "Destin/Fort Walton Beach Airport"
    },
    {
        "code": "VPY",
        "country": "MZ",
        "state": "",
        "name": "Chimoio Airport"
    },
    {
        "code": "VQS",
        "country": "PR",
        "state": "",
        "name": "Antonio Rivera Rodriguez Airport"
    },
    {
        "code": "VRA",
        "country": "CU",
        "state": "",
        "name": "Juan Gualberto Gomez International Airp"
    },
    {
        "code": "VRB",
        "country": "US",
        "state": "FL",
        "name": "Vero Beach Municipal Airport"
    },
    {
        "code": "VRC",
        "country": "PH",
        "state": "",
        "name": "Virac Airport"
    },
    {
        "code": "VRN",
        "country": "IT",
        "state": "",
        "name": "Villafranca Airport"
    },
    {
        "code": "VRY",
        "country": "NO",
        "state": "",
        "name": "Vaeroy Heliport"
    },
    {
        "code": "VSA",
        "country": "MX",
        "state": "",
        "name": "Carlos Rovirosa Perez International Air"
    },
    {
        "code": "VST",
        "country": "SE",
        "state": "",
        "name": "Vasteras Airport"
    },
    {
        "code": "VTE",
        "country": "LA",
        "state": "",
        "name": "Wattay International Airport"
    },
    {
        "code": "VTZ",
        "country": "IN",
        "state": "AP",
        "name": "Vishakhapatnam Airport"
    },
    {
        "code": "VUP",
        "country": "CO",
        "state": "",
        "name": "Alfonso Lopez Pumarejo Airport"
    },
    {
        "code": "VUS",
        "country": "RU",
        "state": "",
        "name": "Veliky Ustyug Airport"
    },
    {
        "code": "VVC",
        "country": "CO",
        "state": "",
        "name": "Vanguardia Airport"
    },
    {
        "code": "VVI",
        "country": "BO",
        "state": "",
        "name": "Viru Viru International Airport"
    },
    {
        "code": "VVO",
        "country": "RU",
        "state": "",
        "name": "Knevichi Airport"
    },
    {
        "code": "VVZ",
        "country": "DZ",
        "state": "",
        "name": "Takhamalt Airport"
    },
    {
        "code": "VXC",
        "country": "MZ",
        "state": "",
        "name": "Lichinga Airport"
    },
    {
        "code": "VXE",
        "country": "CV",
        "state": "",
        "name": "Sao Pedro Airport"
    },
    {
        "code": "VXO",
        "country": "SE",
        "state": "",
        "name": "Smaland Airport"
    },
    {
        "code": "WAA",
        "country": "US",
        "state": "AK",
        "name": "Wales Airport"
    },
    {
        "code": "WAE",
        "country": "SA",
        "state": "",
        "name": "Wadi al Dawaser Airport"
    },
    {
        "code": "WAG",
        "country": "NZ",
        "state": "",
        "name": "Whanganui Airport"
    },
    {
        "code": "WAW",
        "country": "PL",
        "state": "",
        "name": "Frederic Chopin Airport"
    },
    {
        "code": "WBB",
        "country": "US",
        "state": "AK",
        "name": "Stebbins Airport"
    },
    {
        "code": "WBM",
        "country": "PG",
        "state": "",
        "name": "Wapenamanda Airport"
    },
    {
        "code": "WBQ",
        "country": "US",
        "state": "AK",
        "name": "Beaver Airport"
    },
    {
        "code": "WDH",
        "country": "NA",
        "state": "",
        "name": "Hosea Kutako International Airport"
    },
    {
        "code": "WDS",
        "country": "CN",
        "state": "",
        "name": "Wudangshan Airport"
    },
    {
        "code": "WEF",
        "country": "CN",
        "state": "",
        "name": "Weifang Airport"
    },
    {
        "code": "WEH",
        "country": "CN",
        "state": "",
        "name": "Dashuibo Airport"
    },
    {
        "code": "WEI",
        "country": "AU",
        "state": "QL",
        "name": "Weipa Airport"
    },
    {
        "code": "WGA",
        "country": "AU",
        "state": "NS",
        "name": "Wagga Wagga Airport"
    },
    {
        "code": "WGE",
        "country": "AU",
        "state": "NS",
        "name": "Walgett Airport"
    },
    {
        "code": "WGN",
        "country": "CN",
        "state": "",
        "name": "Wugang Airport"
    },
    {
        "code": "WGP",
        "country": "ID",
        "state": "",
        "name": "Umbu Mehang Kunda Airport"
    },
    {
        "code": "WHA",
        "country": "CN",
        "state": "",
        "name": "Xuanzhou Airport"
    },
    {
        "code": "WHK",
        "country": "NZ",
        "state": "",
        "name": "Whakatane Airport"
    },
    {
        "code": "WIC",
        "country": "GB",
        "state": "",
        "name": "Wick Airport"
    },
    {
        "code": "WIL",
        "country": "KE",
        "state": "",
        "name": "Wilson Airport"
    },
    {
        "code": "WIN",
        "country": "AU",
        "state": "QL",
        "name": "Winton Airport"
    },
    {
        "code": "WJR",
        "country": "KE",
        "state": "",
        "name": "Wajir Airport"
    },
    {
        "code": "WJU",
        "country": "KR",
        "state": "",
        "name": "Wonju Airport"
    },
    {
        "code": "WKA",
        "country": "NZ",
        "state": "",
        "name": "Wanaka Airport"
    },
    {
        "code": "WKJ",
        "country": "JP",
        "state": "",
        "name": "Wakkanai Airport"
    },
    {
        "code": "WLE",
        "country": "AU",
        "state": "QL",
        "name": "Miles Airport"
    },
    {
        "code": "WLG",
        "country": "NZ",
        "state": "",
        "name": "Wellington International Airport"
    },
    {
        "code": "WLH",
        "country": "VU",
        "state": "",
        "name": "Walaha Airport"
    },
    {
        "code": "WLK",
        "country": "US",
        "state": "AK",
        "name": "Selawik Airport"
    },
    {
        "code": "WLS",
        "country": "WF",
        "state": "",
        "name": "Hihifo Airport"
    },
    {
        "code": "WMI",
        "country": "PL",
        "state": "",
        "name": "Modlin Airport"
    },
    {
        "code": "WMN",
        "country": "MG",
        "state": "",
        "name": "Maroantsetra Airport"
    },
    {
        "code": "WMO",
        "country": "US",
        "state": "AK",
        "name": "White Mountain Airport"
    },
    {
        "code": "WMT",
        "country": "CN",
        "state": "",
        "name": "Maotai Airport"
    },
    {
        "code": "WMX",
        "country": "ID",
        "state": "",
        "name": "Wamena Airport"
    },
    {
        "code": "WNC",
        "country": "GB",
        "state": "",
        "name": "Winchester Bus Station"
    },
    {
        "code": "WNH",
        "country": "CN",
        "state": "",
        "name": "Puzhehei Airport"
    },
    {
        "code": "WNN",
        "country": "CA",
        "state": "ON",
        "name": "Wunnummin Lake Airport"
    },
    {
        "code": "WNP",
        "country": "PH",
        "state": "",
        "name": "Naga Airport"
    },
    {
        "code": "WNR",
        "country": "AU",
        "state": "QL",
        "name": "Windorah Airport"
    },
    {
        "code": "WNZ",
        "country": "CN",
        "state": "",
        "name": "Yongqiang International Airport"
    },
    {
        "code": "WOL",
        "country": "AU",
        "state": "NS",
        "name": "Illawarra Airport"
    },
    {
        "code": "WPL",
        "country": "CA",
        "state": "BC",
        "name": "Powell Lake Sea Plane Base"
    },
    {
        "code": "WPR",
        "country": "CL",
        "state": "",
        "name": "Captain F. Martinez Airport"
    },
    {
        "code": "WPU",
        "country": "CL",
        "state": "",
        "name": "Guardiamarina Zanartu Airport"
    },
    {
        "code": "WRE",
        "country": "NZ",
        "state": "",
        "name": "Whangarei Airport"
    },
    {
        "code": "WRG",
        "country": "US",
        "state": "AK",
        "name": "Wrangell Airport"
    },
    {
        "code": "WRO",
        "country": "PL",
        "state": "",
        "name": "Nicolaus Copernicus Airport"
    },
    {
        "code": "WSK",
        "country": "CN",
        "state": "",
        "name": "Chongqing Airport"
    },
    {
        "code": "WSN",
        "country": "US",
        "state": "AK",
        "name": "South Naknek Airport"
    },
    {
        "code": "WSZ",
        "country": "NZ",
        "state": "",
        "name": "Westport Airport"
    },
    {
        "code": "WTB",
        "country": "AU",
        "state": "QL",
        "name": "Brisbane West Wellcamp Airport"
    },
    {
        "code": "WTK",
        "country": "US",
        "state": "AK",
        "name": "Noatak Airport"
    },
    {
        "code": "WTL",
        "country": "US",
        "state": "AK",
        "name": "Tuntutuliak Airport"
    },
    {
        "code": "WUA",
        "country": "CN",
        "state": "",
        "name": "Wuhai Airport"
    },
    {
        "code": "WUH",
        "country": "CN",
        "state": "",
        "name": "Tianhe International Airport"
    },
    {
        "code": "WUN",
        "country": "AU",
        "state": "WA",
        "name": "Wiluna Airport"
    },
    {
        "code": "WUS",
        "country": "CN",
        "state": "",
        "name": "Wuyishan Airport"
    },
    {
        "code": "WUT",
        "country": "CN",
        "state": "",
        "name": "Xinzhou Wutaishan Airport"
    },
    {
        "code": "WUX",
        "country": "CN",
        "state": "",
        "name": "Sunan Shuofang Airport"
    },
    {
        "code": "WUZ",
        "country": "CN",
        "state": "",
        "name": "Xijiang Airport"
    },
    {
        "code": "WVB",
        "country": "NA",
        "state": "",
        "name": "Walvis Bay Airport"
    },
    {
        "code": "WWK",
        "country": "PG",
        "state": "",
        "name": "Wewak Airport"
    },
    {
        "code": "WWT",
        "country": "US",
        "state": "AK",
        "name": "Newtok Airport"
    },
    {
        "code": "WXN",
        "country": "CN",
        "state": "",
        "name": "Wuqiao Airport"
    },
    {
        "code": "WYA",
        "country": "AU",
        "state": "SA",
        "name": "Whyalla Airport"
    },
    {
        "code": "WYS",
        "country": "US",
        "state": "MT",
        "name": "Yellowstone Airport"
    },
    {
        "code": "WZA",
        "country": "GH",
        "state": "",
        "name": "Wa Airport"
    },
    {
        "code": "XAI",
        "country": "CN",
        "state": "",
        "name": "Minggang Airport"
    },
    {
        "code": "XAP",
        "country": "BR",
        "state": "SC",
        "name": "Serafin Enoss Bertaso Airport"
    },
    {
        "code": "XBE",
        "country": "CA",
        "state": "ON",
        "name": "Bearskin Lake Airport"
    },
    {
        "code": "XBJ",
        "country": "IR",
        "state": "",
        "name": "Birjand Airport"
    },
    {
        "code": "XCH",
        "country": "CX",
        "state": "",
        "name": "Christmas Island Airport"
    },
    {
        "code": "XCR",
        "country": "FR",
        "state": "",
        "name": "Chalons-Vatry Airport"
    },
    {
        "code": "XDB",
        "country": "FR",
        "state": "",
        "name": "Lille Europe Railway Station"
    },
    {
        "code": "XDK",
        "country": "KR",
        "state": "",
        "name": "Dongdaegu Station"
    },
    {
        "code": "XDQ",
        "country": "CA",
        "state": "ON",
        "name": "London Railway Station"
    },
    {
        "code": "XDS",
        "country": "CA",
        "state": "ON",
        "name": "Ottawa Railway Station"
    },
    {
        "code": "XEC",
        "country": "CA",
        "state": "ON",
        "name": "Windsor Railway Station"
    },
    {
        "code": "XEG",
        "country": "CA",
        "state": "ON",
        "name": "Kingston Railway Station"
    },
    {
        "code": "XEQ",
        "country": "GL",
        "state": "",
        "name": "Tasiusaq (Nanortalik) Heliport"
    },
    {
        "code": "XER",
        "country": "FR",
        "state": "",
        "name": "Strasbourg Bus Station"
    },
    {
        "code": "XEZ",
        "country": "SE",
        "state": "",
        "name": "Sodertalje S Railway Station"
    },
    {
        "code": "XFA",
        "country": "FR",
        "state": "",
        "name": "Flandres Railway Station"
    },
    {
        "code": "XFN",
        "country": "CN",
        "state": "",
        "name": "Liuji Airport"
    },
    {
        "code": "XGR",
        "country": "CA",
        "state": "QC",
        "name": "Georges River Airport"
    },
    {
        "code": "XGZ",
        "country": "AT",
        "state": "",
        "name": "Bregenz Railway Station"
    },
    {
        "code": "XHB",
        "country": "AE",
        "state": "",
        "name": "Dubai NP Bus Station"
    },
    {
        "code": "XHJ",
        "country": "DE",
        "state": "",
        "name": "Aachen Hbf Railway Station"
    },
    {
        "code": "XHK",
        "country": "FR",
        "state": "",
        "name": "Valence TGV Railway Station"
    },
    {
        "code": "XIC",
        "country": "CN",
        "state": "",
        "name": "Qingshan Airport"
    },
    {
        "code": "XIK",
        "country": "IT",
        "state": "",
        "name": "Centrale Railway Station"
    },
    {
        "code": "XIL",
        "country": "CN",
        "state": "",
        "name": "Xilinhot Airport"
    },
    {
        "code": "XIQ",
        "country": "GL",
        "state": "",
        "name": "Ilimanaq Heliport"
    },
    {
        "code": "XIR",
        "country": "DE",
        "state": "",
        "name": "Dresden Hbf Railway Station"
    },
    {
        "code": "XIT",
        "country": "DE",
        "state": "",
        "name": "Leipzig Hbf Railway Station"
    },
    {
        "code": "XIU",
        "country": "DE",
        "state": "",
        "name": "Erfurt Hbf Railway Station"
    },
    {
        "code": "XIV",
        "country": "ES",
        "state": "",
        "name": "Campo Grande Railway Station"
    },
    {
        "code": "XIX",
        "country": "IT",
        "state": "",
        "name": "Porta Nuova Railway Station"
    },
    {
        "code": "XIY",
        "country": "CN",
        "state": "",
        "name": "Xianyang International Airport"
    },
    {
        "code": "XIZ",
        "country": "FR",
        "state": "",
        "name": "Champagne-Ardenne TGV Railway Station"
    },
    {
        "code": "XJV",
        "country": "CZ",
        "state": "",
        "name": "Ostrava Main Railway Station"
    },
    {
        "code": "XJX",
        "country": "KR",
        "state": "",
        "name": "Jinju Station"
    },
    {
        "code": "XJY",
        "country": "FR",
        "state": "",
        "name": "Massy TGV Railway Station"
    },
    {
        "code": "XKH",
        "country": "LA",
        "state": "",
        "name": "Xieng Khouang Airport"
    },
    {
        "code": "XKS",
        "country": "CA",
        "state": "ON",
        "name": "Kasabonika Airport"
    },
    {
        "code": "XKX",
        "country": "KR",
        "state": "",
        "name": "Mokpo Station"
    },
    {
        "code": "XLF",
        "country": "KR",
        "state": "",
        "name": "Ulsan Station"
    },
    {
        "code": "XLJ",
        "country": "CA",
        "state": "QC",
        "name": "Quebec City Railway Station"
    },
    {
        "code": "XLS",
        "country": "SN",
        "state": "",
        "name": "Saint Louis Airport"
    },
    {
        "code": "XMB",
        "country": "KR",
        "state": "",
        "name": "Busan Station"
    },
    {
        "code": "XMH",
        "country": "PF",
        "state": "",
        "name": "Manihi Airport"
    },
    {
        "code": "XMN",
        "country": "CN",
        "state": "",
        "name": "Gaoqi International Airport"
    },
    {
        "code": "XMY",
        "country": "AU",
        "state": "QL",
        "name": "Yam Island Airport"
    },
    {
        "code": "XNA",
        "country": "US",
        "state": "AR",
        "name": "Northwest Arkansas Regional Airport"
    },
    {
        "code": "XNB",
        "country": "AE",
        "state": "",
        "name": "Dubai Etihad Bus Station"
    },
    {
        "code": "XNE",
        "country": "GB",
        "state": "",
        "name": "Newport Railway Station"
    },
    {
        "code": "XNJ",
        "country": "KR",
        "state": "",
        "name": "Gwangju Songjeong Station"
    },
    {
        "code": "XNN",
        "country": "CN",
        "state": "",
        "name": "Caojiabao Airport"
    },
    {
        "code": "XOC",
        "country": "ES",
        "state": "",
        "name": "Atocha Railway Station"
    },
    {
        "code": "XOJ",
        "country": "ES",
        "state": "",
        "name": "Cordoba Central Railway Station"
    },
    {
        "code": "XOP",
        "country": "FR",
        "state": "",
        "name": "Poitiers Railway Station"
    },
    {
        "code": "XOU",
        "country": "ES",
        "state": "",
        "name": "Guiomar Railway Station"
    },
    {
        "code": "XPB",
        "country": "KR",
        "state": "",
        "name": "Pohang Railway Station"
    },
    {
        "code": "XPG",
        "country": "FR",
        "state": "",
        "name": "Gare du Nord Railway Station"
    },
    {
        "code": "XPI",
        "country": "FR",
        "state": "",
        "name": "GARE PERPIGNAN SNCF STATION"
    },
    {
        "code": "XPJ",
        "country": "FR",
        "state": "",
        "name": "Saint Roch Railway Station"
    },
    {
        "code": "XPL",
        "country": "HN",
        "state": "",
        "name": "Palmerola Intl. Airport"
    },
    {
        "code": "XPT",
        "country": "GB",
        "state": "",
        "name": "Preston Railway Station"
    },
    {
        "code": "XQA",
        "country": "ES",
        "state": "",
        "name": "Santa Justa Railway Station"
    },
    {
        "code": "XQL",
        "country": "GB",
        "state": "",
        "name": "Lancaster Railway Station"
    },
    {
        "code": "XQP",
        "country": "CR",
        "state": "",
        "name": "La Managua Airport"
    },
    {
        "code": "XRE",
        "country": "GB",
        "state": "",
        "name": "Reading Railway Service"
    },
    {
        "code": "XRF",
        "country": "FR",
        "state": "",
        "name": "Saint Charles Railway Station"
    },
    {
        "code": "XRJ",
        "country": "IT",
        "state": "",
        "name": "Termini Railway Station"
    },
    {
        "code": "XRY",
        "country": "ES",
        "state": "",
        "name": "Jerez Airport"
    },
    {
        "code": "XRZ",
        "country": "FR",
        "state": "",
        "name": "ARRAS STATION"
    },
    {
        "code": "XSC",
        "country": "TC",
        "state": "",
        "name": "South Caicos International Airport"
    },
    {
        "code": "XSH",
        "country": "FR",
        "state": "",
        "name": "Saint Pierre-Corps Railway Station"
    },
    {
        "code": "XSP",
        "country": "SG",
        "state": "",
        "name": "Seletar Airport"
    },
    {
        "code": "XTG",
        "country": "AU",
        "state": "QL",
        "name": "Thargomindah Airport"
    },
    {
        "code": "XTI",
        "country": "ES",
        "state": "",
        "name": "Chamartin Railway Station"
    },
    {
        "code": "XTP",
        "country": "FI",
        "state": "",
        "name": "Tampere Bus Station"
    },
    {
        "code": "XTZ",
        "country": "FI",
        "state": "",
        "name": "Turku Bus Station"
    },
    {
        "code": "XUT",
        "country": "ES",
        "state": "",
        "name": "Murcia Railway Station"
    },
    {
        "code": "XUZ",
        "country": "CN",
        "state": "",
        "name": "Guanyin Airport"
    },
    {
        "code": "XVC",
        "country": "GB",
        "state": "",
        "name": "Crewe Railway Station"
    },
    {
        "code": "XVQ",
        "country": "IT",
        "state": "",
        "name": "Santa Lucia Railway Station"
    },
    {
        "code": "XVY",
        "country": "IT",
        "state": "",
        "name": "Mestre Railway Station"
    },
    {
        "code": "XWA",
        "country": "US",
        "state": "ND",
        "name": "Basin International Airport"
    },
    {
        "code": "XWC",
        "country": "AT",
        "state": "",
        "name": "Vienna Hauptbahnhof Railway Station"
    },
    {
        "code": "XWF",
        "country": "SE",
        "state": "",
        "name": "Falun C Railway Station"
    },
    {
        "code": "XWG",
        "country": "FR",
        "state": "",
        "name": "Strasbourg Railway Station"
    },
    {
        "code": "XWS",
        "country": "GB",
        "state": "",
        "name": "Swindon Railway Station"
    },
    {
        "code": "XXO",
        "country": "SE",
        "state": "",
        "name": "Leksand Railway Station"
    },
    {
        "code": "XXQ",
        "country": "HU",
        "state": "",
        "name": "Keleti Railway Station"
    },
    {
        "code": "XXU",
        "country": "SE",
        "state": "",
        "name": "Hedemora Railway Station"
    },
    {
        "code": "XXZ",
        "country": "SE",
        "state": "",
        "name": "Sundsvall C Railway Station"
    },
    {
        "code": "XYB",
        "country": "SE",
        "state": "",
        "name": "Borlange C Railway Station"
    },
    {
        "code": "XYD",
        "country": "FR",
        "state": "",
        "name": "Part-Dieu Railway Station"
    },
    {
        "code": "XYG",
        "country": "CZ",
        "state": "",
        "name": "Prague Main Railway Station"
    },
    {
        "code": "XYK",
        "country": "SE",
        "state": "",
        "name": "Norrkoping C Railway Station"
    },
    {
        "code": "XYP",
        "country": "SE",
        "state": "",
        "name": "Avesta Railway Station"
    },
    {
        "code": "XYT",
        "country": "KR",
        "state": "",
        "name": "Yeosu Expo Station"
    },
    {
        "code": "XYX",
        "country": "SE",
        "state": "",
        "name": "Sala Railway Station"
    },
    {
        "code": "XZI",
        "country": "FR",
        "state": "",
        "name": "Lorraine TGV Railway Station"
    },
    {
        "code": "XZJ",
        "country": "JP",
        "state": "",
        "name": "Off-line Point"
    },
    {
        "code": "XZM",
        "country": "MO",
        "state": "",
        "name": "Macau Ferry Terminal"
    },
    {
        "code": "XZN",
        "country": "FR",
        "state": "",
        "name": "Avignon TGV Railway Station"
    },
    {
        "code": "XZP",
        "country": "CA",
        "state": "QC",
        "name": "Off-line Point"
    },
    {
        "code": "XZZ",
        "country": "ES",
        "state": "",
        "name": "Delicias Railway Station"
    },
    {
        "code": "YAA",
        "country": "CA",
        "state": "BC",
        "name": "Anahim Lake Airport"
    },
    {
        "code": "YAB",
        "country": "CA",
        "state": "NU",
        "name": "Arctic Bay Airport"
    },
    {
        "code": "YAE",
        "country": "RU",
        "state": "",
        "name": "Yartsevo Airport"
    },
    {
        "code": "YAG",
        "country": "CA",
        "state": "ON",
        "name": "Fort Frances Municipal Airport"
    },
    {
        "code": "YAK",
        "country": "US",
        "state": "AK",
        "name": "Yakutat Airport"
    },
    {
        "code": "YAM",
        "country": "CA",
        "state": "ON",
        "name": "Sault Sainte Marie Airport"
    },
    {
        "code": "YAP",
        "country": "FM",
        "state": "",
        "name": "Yap International Airport"
    },
    {
        "code": "YAQ",
        "country": "CA",
        "state": "BC",
        "name": "Maple Bay Sea Plane Base"
    },
    {
        "code": "YAT",
        "country": "CA",
        "state": "ON",
        "name": "Attawapiskat Airport"
    },
    {
        "code": "YAX",
        "country": "CA",
        "state": "ON",
        "name": "Wapekeka Airport"
    },
    {
        "code": "YAY",
        "country": "CA",
        "state": "NL",
        "name": "Saint Anthony Airport"
    },
    {
        "code": "YAZ",
        "country": "CA",
        "state": "BC",
        "name": "Long Beach Airport"
    },
    {
        "code": "YBB",
        "country": "CA",
        "state": "NU",
        "name": "Kugaaruk Airport"
    },
    {
        "code": "YBE",
        "country": "CA",
        "state": "SK",
        "name": "Uranium City Airport"
    },
    {
        "code": "YBG",
        "country": "CA",
        "state": "QC",
        "name": "Saguenay Bagotville Airport"
    },
    {
        "code": "YBI",
        "country": "CA",
        "state": "NL",
        "name": "Black Tickle Airport"
    },
    {
        "code": "YBK",
        "country": "CA",
        "state": "NU",
        "name": "Baker Lake Airport"
    },
    {
        "code": "YBL",
        "country": "CA",
        "state": "BC",
        "name": "Campbell River Airport"
    },
    {
        "code": "YBP",
        "country": "CN",
        "state": "",
        "name": "Caiba Airport"
    },
    {
        "code": "YBR",
        "country": "CA",
        "state": "MB",
        "name": "Brandon Municipal Airport"
    },
    {
        "code": "YBX",
        "country": "CA",
        "state": "QC",
        "name": "Lourdes-de-Blanc Sablon Airport"
    },
    {
        "code": "YBZ",
        "country": "CA",
        "state": "ON",
        "name": "Toronto Union Railway Station"
    },
    {
        "code": "YCB",
        "country": "CA",
        "state": "NU",
        "name": "Cambridge Bay Airport"
    },
    {
        "code": "YCD",
        "country": "CA",
        "state": "BC",
        "name": "Nanaimo Airport"
    },
    {
        "code": "YCG",
        "country": "CA",
        "state": "BC",
        "name": "West Kootenay Regional Airport"
    },
    {
        "code": "YCK",
        "country": "CA",
        "state": "NT",
        "name": "Tommy Kochon Airport"
    },
    {
        "code": "YCO",
        "country": "CA",
        "state": "NU",
        "name": "Kugluktuk Airport"
    },
    {
        "code": "YCS",
        "country": "CA",
        "state": "NU",
        "name": "Chesterfield Inlet Airport"
    },
    {
        "code": "YCU",
        "country": "CN",
        "state": "",
        "name": "Guangong Airport"
    },
    {
        "code": "YCY",
        "country": "CA",
        "state": "NU",
        "name": "Clyde River Airport"
    },
    {
        "code": "YDA",
        "country": "CA",
        "state": "YT",
        "name": "Dawson City Airport"
    },
    {
        "code": "YDF",
        "country": "CA",
        "state": "NL",
        "name": "Deer Lake Regional Airport"
    },
    {
        "code": "YDP",
        "country": "CA",
        "state": "NL",
        "name": "Nain Airport"
    },
    {
        "code": "YEG",
        "country": "CA",
        "state": "AB",
        "name": "Edmonton International Airport"
    },
    {
        "code": "YEI",
        "country": "TR",
        "state": "",
        "name": "Yenisehir Airport"
    },
    {
        "code": "YEK",
        "country": "CA",
        "state": "NU",
        "name": "Arviat Airport"
    },
    {
        "code": "YER",
        "country": "CA",
        "state": "ON",
        "name": "Fort Severn Airport"
    },
    {
        "code": "YES",
        "country": "IR",
        "state": "",
        "name": "Yasouj Airport"
    },
    {
        "code": "YEV",
        "country": "CA",
        "state": "NT",
        "name": "Mike Zubko Airport"
    },
    {
        "code": "YFA",
        "country": "CA",
        "state": "ON",
        "name": "Fort Albany Airport"
    },
    {
        "code": "YFB",
        "country": "CA",
        "state": "NU",
        "name": "Iqaluit Airport"
    },
    {
        "code": "YFC",
        "country": "CA",
        "state": "NB",
        "name": "Fredericton International Airport"
    },
    {
        "code": "YFJ",
        "country": "CA",
        "state": "NT",
        "name": "Wekweeti Airport"
    },
    {
        "code": "YFO",
        "country": "CA",
        "state": "MB",
        "name": "Flin Flon Airport"
    },
    {
        "code": "YFS",
        "country": "CA",
        "state": "NT",
        "name": "Fort Simpson Airport"
    },
    {
        "code": "YFX",
        "country": "CA",
        "state": "NL",
        "name": "Saint Lewis (Fox Harbour) Airport"
    },
    {
        "code": "YGG",
        "country": "CA",
        "state": "BC",
        "name": "Ganges Sea Plane Base"
    },
    {
        "code": "YGH",
        "country": "CA",
        "state": "NT",
        "name": "Fort Good Hope Airport"
    },
    {
        "code": "YGJ",
        "country": "JP",
        "state": "",
        "name": "Miho Airport"
    },
    {
        "code": "YGL",
        "country": "CA",
        "state": "QC",
        "name": "La Grande Riviere Airport"
    },
    {
        "code": "YGP",
        "country": "CA",
        "state": "QC",
        "name": "Michel-Pouliot Airport"
    },
    {
        "code": "YGR",
        "country": "CA",
        "state": "QC",
        "name": "Iles de La Madeleine Airport"
    },
    {
        "code": "YGT",
        "country": "CA",
        "state": "NU",
        "name": "Igloolik Airport"
    },
    {
        "code": "YGW",
        "country": "CA",
        "state": "QC",
        "name": "Kuujjuarapik Airport"
    },
    {
        "code": "YGX",
        "country": "CA",
        "state": "MB",
        "name": "Gillam Airport"
    },
    {
        "code": "YGZ",
        "country": "CA",
        "state": "NU",
        "name": "Grise Fiord Airport"
    },
    {
        "code": "YHA",
        "country": "CA",
        "state": "NL",
        "name": "Port Hope Simpson Airport"
    },
    {
        "code": "YHD",
        "country": "CA",
        "state": "ON",
        "name": "Dryden Regional Airport"
    },
    {
        "code": "YHG",
        "country": "CA",
        "state": "NL",
        "name": "Off-line Point"
    },
    {
        "code": "YHI",
        "country": "CA",
        "state": "NT",
        "name": "Ulukhaktok Airport"
    },
    {
        "code": "YHK",
        "country": "CA",
        "state": "NU",
        "name": "Gjoa Haven Airport"
    },
    {
        "code": "YHM",
        "country": "CA",
        "state": "ON",
        "name": "John C. Munro Hamilton Airport"
    },
    {
        "code": "YHO",
        "country": "CA",
        "state": "NL",
        "name": "Hopedale Airport"
    },
    {
        "code": "YHP",
        "country": "CA",
        "state": "ON",
        "name": "Poplar Hill Airport"
    },
    {
        "code": "YHS",
        "country": "CA",
        "state": "BC",
        "name": "Sechelt Airport"
    },
    {
        "code": "YHU",
        "country": "CA",
        "state": "QC",
        "name": "Saint Hubert Airport"
    },
    {
        "code": "YHY",
        "country": "CA",
        "state": "NT",
        "name": "Merlyn Carter Airport"
    },
    {
        "code": "YHZ",
        "country": "CA",
        "state": "NS",
        "name": "Stanfield International Airport"
    },
    {
        "code": "YIA",
        "country": "ID",
        "state": "",
        "name": "New Yogyakarta International Airport"
    },
    {
        "code": "YIC",
        "country": "CN",
        "state": "",
        "name": "Mingyueshan Airport"
    },
    {
        "code": "YIE",
        "country": "CN",
        "state": "",
        "name": "Yiershi Airport"
    },
    {
        "code": "YIH",
        "country": "CN",
        "state": "",
        "name": "Sanxia Airport"
    },
    {
        "code": "YIK",
        "country": "CA",
        "state": "QC",
        "name": "Ivujivik Airport"
    },
    {
        "code": "YIN",
        "country": "CN",
        "state": "",
        "name": "Yining Airport"
    },
    {
        "code": "YIO",
        "country": "CA",
        "state": "NU",
        "name": "Pond Inlet Airport"
    },
    {
        "code": "YIW",
        "country": "CN",
        "state": "",
        "name": "Yiwu Airport"
    },
    {
        "code": "YJB",
        "country": "ES",
        "state": "",
        "name": "Sants Railway Station"
    },
    {
        "code": "YJC",
        "country": "ES",
        "state": "",
        "name": "A Coruna Railway Station"
    },
    {
        "code": "YJE",
        "country": "ES",
        "state": "",
        "name": "Alicante Railway Station"
    },
    {
        "code": "YJG",
        "country": "ES",
        "state": "",
        "name": "Granada RailwayStation"
    },
    {
        "code": "YJI",
        "country": "ES",
        "state": "",
        "name": "Abando Railway Station"
    },
    {
        "code": "YJM",
        "country": "ES",
        "state": "",
        "name": "Malaga Railway Station"
    },
    {
        "code": "YJV",
        "country": "ES",
        "state": "",
        "name": "Valencia Railway Station"
    },
    {
        "code": "YJW",
        "country": "ES",
        "state": "",
        "name": "Jerez Railway Station"
    },
    {
        "code": "YKA",
        "country": "CA",
        "state": "BC",
        "name": "Kamloops Airport"
    },
    {
        "code": "YKF",
        "country": "CA",
        "state": "ON",
        "name": "Region of Waterloo International Airpor"
    },
    {
        "code": "YKG",
        "country": "CA",
        "state": "QC",
        "name": "Kangirsuk Airport"
    },
    {
        "code": "YKH",
        "country": "CN",
        "state": "",
        "name": "Yingkou Airport"
    },
    {
        "code": "YKL",
        "country": "CA",
        "state": "QC",
        "name": "Schefferville Airport"
    },
    {
        "code": "YKM",
        "country": "US",
        "state": "WA",
        "name": "Yakima Air Terminal"
    },
    {
        "code": "YKO",
        "country": "TR",
        "state": "",
        "name": "Hakkari Airport"
    },
    {
        "code": "YKQ",
        "country": "CA",
        "state": "QC",
        "name": "Waskaganish Airport"
    },
    {
        "code": "YKS",
        "country": "RU",
        "state": "",
        "name": "Yakutsk Airport"
    },
    {
        "code": "YKU",
        "country": "CA",
        "state": "QC",
        "name": "Chisasibi Airport"
    },
    {
        "code": "YLC",
        "country": "CA",
        "state": "NU",
        "name": "Kimmirut Airport"
    },
    {
        "code": "YLE",
        "country": "CA",
        "state": "NT",
        "name": "Whati Airport"
    },
    {
        "code": "YLL",
        "country": "CA",
        "state": "AB",
        "name": "Lloydminster Airport"
    },
    {
        "code": "YLW",
        "country": "CA",
        "state": "BC",
        "name": "Kelowna International Airport"
    },
    {
        "code": "YLX",
        "country": "CN",
        "state": "",
        "name": "Yulin Fumian Airport"
    },
    {
        "code": "YMH",
        "country": "CA",
        "state": "NL",
        "name": "Mary's Harbour Airport"
    },
    {
        "code": "YMM",
        "country": "CA",
        "state": "AB",
        "name": "Fort McMurray Airport"
    },
    {
        "code": "YMN",
        "country": "CA",
        "state": "NL",
        "name": "Makkovik Airport"
    },
    {
        "code": "YMO",
        "country": "CA",
        "state": "ON",
        "name": "Moosonee Airport"
    },
    {
        "code": "YMT",
        "country": "CA",
        "state": "QC",
        "name": "Chapais Airport"
    },
    {
        "code": "YMY",
        "country": "CA",
        "state": "QC",
        "name": "Montreal Central Railway Station"
    },
    {
        "code": "YNB",
        "country": "SA",
        "state": "",
        "name": "Yanbu al Bahr Airport"
    },
    {
        "code": "YNC",
        "country": "CA",
        "state": "QC",
        "name": "Wemindji Airport"
    },
    {
        "code": "YNJ",
        "country": "CN",
        "state": "",
        "name": "Chaoyangchuan Airport"
    },
    {
        "code": "YNL",
        "country": "CA",
        "state": "SK",
        "name": "Points North Landing Airport"
    },
    {
        "code": "YNO",
        "country": "CA",
        "state": "ON",
        "name": "North Spirit Lake Airport"
    },
    {
        "code": "YNP",
        "country": "CA",
        "state": "NL",
        "name": "Natuashish Airport"
    },
    {
        "code": "YNS",
        "country": "CA",
        "state": "QC",
        "name": "Nemiscau Airport"
    },
    {
        "code": "YNT",
        "country": "CN",
        "state": "",
        "name": "Penglai International Airport"
    },
    {
        "code": "YNY",
        "country": "KR",
        "state": "",
        "name": "Yangyang International Airport"
    },
    {
        "code": "YNZ",
        "country": "CN",
        "state": "",
        "name": "Nanyang Airport"
    },
    {
        "code": "YOC",
        "country": "CA",
        "state": "YT",
        "name": "Old Crow Airport"
    },
    {
        "code": "YOJ",
        "country": "CA",
        "state": "AB",
        "name": "High Level Airport"
    },
    {
        "code": "YOL",
        "country": "NG",
        "state": "",
        "name": "Yola Airport"
    },
    {
        "code": "YON",
        "country": "BT",
        "state": "",
        "name": "Yonphula Airport"
    },
    {
        "code": "YOW",
        "country": "CA",
        "state": "ON",
        "name": "Macdonald-Cartier International Airport"
    },
    {
        "code": "YPA",
        "country": "CA",
        "state": "SK",
        "name": "Glass Field"
    },
    {
        "code": "YPH",
        "country": "CA",
        "state": "QC",
        "name": "Inukjuak Airport"
    },
    {
        "code": "YPJ",
        "country": "CA",
        "state": "QC",
        "name": "Aupaluk Airport"
    },
    {
        "code": "YPL",
        "country": "CA",
        "state": "ON",
        "name": "Pickle Lake Airport"
    },
    {
        "code": "YPM",
        "country": "CA",
        "state": "ON",
        "name": "Pikangikum Airport"
    },
    {
        "code": "YPO",
        "country": "CA",
        "state": "ON",
        "name": "Peawanuck Airport"
    },
    {
        "code": "YPR",
        "country": "CA",
        "state": "BC",
        "name": "Prince Rupert Airport"
    },
    {
        "code": "YPW",
        "country": "CA",
        "state": "BC",
        "name": "Powell River Airport"
    },
    {
        "code": "YPX",
        "country": "CA",
        "state": "QC",
        "name": "Puvirnituq Airport"
    },
    {
        "code": "YQB",
        "country": "CA",
        "state": "QC",
        "name": "Jean Lesage International Airport"
    },
    {
        "code": "YQC",
        "country": "CA",
        "state": "QC",
        "name": "Quaqtaq Airport"
    },
    {
        "code": "YQD",
        "country": "CA",
        "state": "MB",
        "name": "The Pas Airport"
    },
    {
        "code": "YQG",
        "country": "CA",
        "state": "ON",
        "name": "Windsor Airport"
    },
    {
        "code": "YQK",
        "country": "CA",
        "state": "ON",
        "name": "Kenora Airport"
    },
    {
        "code": "YQL",
        "country": "CA",
        "state": "AB",
        "name": "Lethbridge County Airport"
    },
    {
        "code": "YQM",
        "country": "CA",
        "state": "NB",
        "name": "Greater Moncton International Airport"
    },
    {
        "code": "YQQ",
        "country": "CA",
        "state": "BC",
        "name": "Comox Airport"
    },
    {
        "code": "YQR",
        "country": "CA",
        "state": "SK",
        "name": "Regina International Airport"
    },
    {
        "code": "YQT",
        "country": "CA",
        "state": "ON",
        "name": "Thunder Bay International Airport"
    },
    {
        "code": "YQU",
        "country": "CA",
        "state": "AB",
        "name": "Grande Prairie Airport"
    },
    {
        "code": "YQX",
        "country": "CA",
        "state": "NL",
        "name": "Gander International Airport"
    },
    {
        "code": "YQY",
        "country": "CA",
        "state": "NS",
        "name": "J.A. Douglas McCurdy Airport"
    },
    {
        "code": "YQZ",
        "country": "CA",
        "state": "BC",
        "name": "Quesnel Airport"
    },
    {
        "code": "YRA",
        "country": "CA",
        "state": "NT",
        "name": "Rae Lakes Airport"
    },
    {
        "code": "YRB",
        "country": "CA",
        "state": "NU",
        "name": "Resolute Bay Airport"
    },
    {
        "code": "YRF",
        "country": "CA",
        "state": "NL",
        "name": "Cartwright Airport"
    },
    {
        "code": "YRG",
        "country": "CA",
        "state": "NL",
        "name": "Rigolet Airport"
    },
    {
        "code": "YRL",
        "country": "CA",
        "state": "ON",
        "name": "Red Lake Airport"
    },
    {
        "code": "YRT",
        "country": "CA",
        "state": "NU",
        "name": "Rankin Inlet Airport"
    },
    {
        "code": "YSB",
        "country": "CA",
        "state": "ON",
        "name": "Sudbury Airport"
    },
    {
        "code": "YSF",
        "country": "CA",
        "state": "SK",
        "name": "Stony Rapids Airport"
    },
    {
        "code": "YSG",
        "country": "CA",
        "state": "NT",
        "name": "Lutselke Airport"
    },
    {
        "code": "YSJ",
        "country": "CA",
        "state": "NB",
        "name": "Saint John Airport"
    },
    {
        "code": "YSK",
        "country": "CA",
        "state": "NU",
        "name": "Sanikiluaq Airport"
    },
    {
        "code": "YSO",
        "country": "CA",
        "state": "NL",
        "name": "Postville Airport"
    },
    {
        "code": "YSQ",
        "country": "CN",
        "state": "",
        "name": "Chaganhu Airport"
    },
    {
        "code": "YTE",
        "country": "CA",
        "state": "NU",
        "name": "Cape Dorset Airport"
    },
    {
        "code": "YTH",
        "country": "CA",
        "state": "MB",
        "name": "Thompson Airport"
    },
    {
        "code": "YTL",
        "country": "CA",
        "state": "ON",
        "name": "Big Trout Lake Airport"
    },
    {
        "code": "YTQ",
        "country": "CA",
        "state": "QC",
        "name": "Tasiujaq Airport"
    },
    {
        "code": "YTS",
        "country": "CA",
        "state": "ON",
        "name": "Victor M. Power Airport"
    },
    {
        "code": "YTW",
        "country": "CN",
        "state": "",
        "name": "Wanfang"
    },
    {
        "code": "YTY",
        "country": "CN",
        "state": "",
        "name": "Taizhou Airport"
    },
    {
        "code": "YTZ",
        "country": "CA",
        "state": "ON",
        "name": "Billy Bishop City Airport"
    },
    {
        "code": "YUD",
        "country": "CA",
        "state": "QC",
        "name": "Umiujaq Airport"
    },
    {
        "code": "YUL",
        "country": "CA",
        "state": "QC",
        "name": "Pierre Elliott Trudeau International Ai"
    },
    {
        "code": "YUM",
        "country": "US",
        "state": "AZ",
        "name": "Yuma International Airport"
    },
    {
        "code": "YUS",
        "country": "CN",
        "state": "",
        "name": "Batang Airport"
    },
    {
        "code": "YUT",
        "country": "CA",
        "state": "NU",
        "name": "Repulse Bay Airport"
    },
    {
        "code": "YUX",
        "country": "CA",
        "state": "NU",
        "name": "Hall Beach Airport"
    },
    {
        "code": "YUY",
        "country": "CA",
        "state": "QC",
        "name": "Rouyn-Noranda Airport"
    },
    {
        "code": "YVC",
        "country": "CA",
        "state": "SK",
        "name": "Barber Field"
    },
    {
        "code": "YVM",
        "country": "CA",
        "state": "NU",
        "name": "Qikiqtarjuaq Airport"
    },
    {
        "code": "YVO",
        "country": "CA",
        "state": "QC",
        "name": "Val d'Or Airport"
    },
    {
        "code": "YVP",
        "country": "CA",
        "state": "QC",
        "name": "Kuujjuaq Airport"
    },
    {
        "code": "YVQ",
        "country": "CA",
        "state": "NT",
        "name": "Norman Wells Airport"
    },
    {
        "code": "YVR",
        "country": "CA",
        "state": "BC",
        "name": "Vancouver International Airport"
    },
    {
        "code": "YVZ",
        "country": "CA",
        "state": "ON",
        "name": "Deer Lake Airport"
    },
    {
        "code": "YWB",
        "country": "CA",
        "state": "QC",
        "name": "Wakeham Bay Airport"
    },
    {
        "code": "YWG",
        "country": "CA",
        "state": "MB",
        "name": "James Armstrong Richardson Internationa"
    },
    {
        "code": "YWH",
        "country": "CA",
        "state": "BC",
        "name": "Inner Harbour Sea Plane Base"
    },
    {
        "code": "YWJ",
        "country": "CA",
        "state": "NT",
        "name": "Deline Airport"
    },
    {
        "code": "YWK",
        "country": "CA",
        "state": "NL",
        "name": "Wabush Airport"
    },
    {
        "code": "YWL",
        "country": "CA",
        "state": "BC",
        "name": "Williams Lake Airport"
    },
    {
        "code": "YXC",
        "country": "CA",
        "state": "BC",
        "name": "Canadian Rockies International Airport"
    },
    {
        "code": "YXE",
        "country": "CA",
        "state": "SK",
        "name": "John G. Diefenbaker International Airpo"
    },
    {
        "code": "YXH",
        "country": "CA",
        "state": "AB",
        "name": "Medicine Hat Airport"
    },
    {
        "code": "YXJ",
        "country": "CA",
        "state": "BC",
        "name": "North Peace Airport"
    },
    {
        "code": "YXL",
        "country": "CA",
        "state": "ON",
        "name": "Sioux Lookout Airport"
    },
    {
        "code": "YXN",
        "country": "CA",
        "state": "NU",
        "name": "Whale Cove Airport"
    },
    {
        "code": "YXP",
        "country": "CA",
        "state": "NU",
        "name": "Pangnirtung Airport"
    },
    {
        "code": "YXS",
        "country": "CA",
        "state": "BC",
        "name": "Prince George Airport"
    },
    {
        "code": "YXT",
        "country": "CA",
        "state": "BC",
        "name": "Northwest Regional Airport"
    },
    {
        "code": "YXU",
        "country": "CA",
        "state": "ON",
        "name": "London International Airport"
    },
    {
        "code": "YXX",
        "country": "CA",
        "state": "BC",
        "name": "Abbotsford International Airport"
    },
    {
        "code": "YXY",
        "country": "CA",
        "state": "YT",
        "name": "Erik Nielsen International Airport"
    },
    {
        "code": "YYA",
        "country": "CN",
        "state": "",
        "name": "Sanhe Airport"
    },
    {
        "code": "YYB",
        "country": "CA",
        "state": "ON",
        "name": "Jack Garland Airport"
    },
    {
        "code": "YYC",
        "country": "CA",
        "state": "AB",
        "name": "Calgary International Airport"
    },
    {
        "code": "YYD",
        "country": "CA",
        "state": "BC",
        "name": "Smithers Airport"
    },
    {
        "code": "YYE",
        "country": "CA",
        "state": "BC",
        "name": "Northern Rockies Regional Airport"
    },
    {
        "code": "YYF",
        "country": "CA",
        "state": "BC",
        "name": "Penticton Regional Airport"
    },
    {
        "code": "YYG",
        "country": "CA",
        "state": "PE",
        "name": "Charlottetown Airport"
    },
    {
        "code": "YYH",
        "country": "CA",
        "state": "NU",
        "name": "Taloyoak Airport"
    },
    {
        "code": "YYJ",
        "country": "CA",
        "state": "BC",
        "name": "Victoria International Airport"
    },
    {
        "code": "YYQ",
        "country": "CA",
        "state": "MB",
        "name": "Churchill Airport"
    },
    {
        "code": "YYR",
        "country": "CA",
        "state": "NL",
        "name": "Goose Bay Airport"
    },
    {
        "code": "YYT",
        "country": "CA",
        "state": "NL",
        "name": "Saint John's International Airport"
    },
    {
        "code": "YYY",
        "country": "CA",
        "state": "QC",
        "name": "Mont-Joli Airport"
    },
    {
        "code": "YYZ",
        "country": "CA",
        "state": "ON",
        "name": "Lester B. Pearson International Airport"
    },
    {
        "code": "YZF",
        "country": "CA",
        "state": "NT",
        "name": "Yellowknife Airport"
    },
    {
        "code": "YZG",
        "country": "CA",
        "state": "QC",
        "name": "Salluit Airport"
    },
    {
        "code": "YZP",
        "country": "CA",
        "state": "BC",
        "name": "Sandspit Airport"
    },
    {
        "code": "YZS",
        "country": "CA",
        "state": "NU",
        "name": "Coral Harbour Airport"
    },
    {
        "code": "YZT",
        "country": "CA",
        "state": "BC",
        "name": "Port Hardy Airport"
    },
    {
        "code": "YZV",
        "country": "CA",
        "state": "QC",
        "name": "Sept-Iles Airport"
    },
    {
        "code": "YZY",
        "country": "CN",
        "state": "",
        "name": "Ganzhou Airport"
    },
    {
        "code": "YZZ",
        "country": "CA",
        "state": "BC",
        "name": "Trail Airport"
    },
    {
        "code": "ZAD",
        "country": "HR",
        "state": "",
        "name": "Zadar Airport"
    },
    {
        "code": "ZAG",
        "country": "HR",
        "state": "",
        "name": "Franjo Tudman Airport"
    },
    {
        "code": "ZAH",
        "country": "IR",
        "state": "",
        "name": "Zahedan International Airport"
    },
    {
        "code": "ZAL",
        "country": "CL",
        "state": "",
        "name": "Pichoy Airport"
    },
    {
        "code": "ZAM",
        "country": "PH",
        "state": "",
        "name": "Zamboanga International Airport"
    },
    {
        "code": "ZAQ",
        "country": "DE",
        "state": "",
        "name": "Nuremberg Hbf Railway Station"
    },
    {
        "code": "ZAT",
        "country": "CN",
        "state": "",
        "name": "Zhaotong Airport"
    },
    {
        "code": "ZAZ",
        "country": "ES",
        "state": "",
        "name": "Zaragoza Airport"
    },
    {
        "code": "ZBA",
        "country": "CH",
        "state": "",
        "name": "Basel Bad Railway Station"
    },
    {
        "code": "ZBF",
        "country": "CA",
        "state": "NB",
        "name": "Bathurst Airport"
    },
    {
        "code": "ZBL",
        "country": "AU",
        "state": "QL",
        "name": "Biloela Airport"
    },
    {
        "code": "ZBR",
        "country": "IR",
        "state": "",
        "name": "Konarak Airport"
    },
    {
        "code": "ZBY",
        "country": "LA",
        "state": "",
        "name": "Sayaboury Airport"
    },
    {
        "code": "ZCL",
        "country": "MX",
        "state": "",
        "name": "Leobardo C. Ruiz International Airport"
    },
    {
        "code": "ZCO",
        "country": "CL",
        "state": "",
        "name": "La Araucania Airport"
    },
    {
        "code": "ZDH",
        "country": "CH",
        "state": "",
        "name": "SBB Railway Station"
    },
    {
        "code": "ZDI",
        "country": "CH",
        "state": "",
        "name": "Bellinzona Railway Station"
    },
    {
        "code": "ZDJ",
        "country": "CH",
        "state": "",
        "name": "Bern Railway Station"
    },
    {
        "code": "ZDN",
        "country": "CZ",
        "state": "",
        "name": "Brno Railway Station"
    },
    {
        "code": "ZDT",
        "country": "CH",
        "state": "",
        "name": "Chur Railway Station"
    },
    {
        "code": "ZEL",
        "country": "CA",
        "state": "BC",
        "name": "Campbell Island Airport"
    },
    {
        "code": "ZEM",
        "country": "CA",
        "state": "QC",
        "name": "Eastmain River Airport"
    },
    {
        "code": "ZER",
        "country": "IN",
        "state": "AR",
        "name": "Ziro Airport"
    },
    {
        "code": "ZEU",
        "country": "DE",
        "state": "",
        "name": "Goettingen Railway Station"
    },
    {
        "code": "ZFC",
        "country": "GB",
        "state": "",
        "name": "Bradford Bus Station"
    },
    {
        "code": "ZFD",
        "country": "CA",
        "state": "SK",
        "name": "Fond-du-Lac Airport"
    },
    {
        "code": "ZFG",
        "country": "GB",
        "state": "",
        "name": "Sheffield Bus Station"
    },
    {
        "code": "ZFJ",
        "country": "FR",
        "state": "",
        "name": "Rennes Railway Station"
    },
    {
        "code": "ZFL",
        "country": "CN",
        "state": "",
        "name": "Tianma Airport"
    },
    {
        "code": "ZFN",
        "country": "CA",
        "state": "NT",
        "name": "Tulita Airport"
    },
    {
        "code": "ZFQ",
        "country": "FR",
        "state": "",
        "name": "Saint Jean Railway Station"
    },
    {
        "code": "ZGB",
        "country": "GB",
        "state": "",
        "name": "Nottingham Bus Station"
    },
    {
        "code": "ZGG",
        "country": "GB",
        "state": "",
        "name": "Glasgow Central Railway Station"
    },
    {
        "code": "ZGN",
        "country": "CN",
        "state": "",
        "name": "Zhongshan Ferry Port"
    },
    {
        "code": "ZGU",
        "country": "VU",
        "state": "",
        "name": "Gaua Island Airport"
    },
    {
        "code": "ZHA",
        "country": "CN",
        "state": "",
        "name": "Zhanjiang Airport"
    },
    {
        "code": "ZHF",
        "country": "CH",
        "state": "",
        "name": "Fribourg Railway Station"
    },
    {
        "code": "ZHI",
        "country": "CH",
        "state": "",
        "name": "Grenchen Sud Railway Station"
    },
    {
        "code": "ZHT",
        "country": "CH",
        "state": "",
        "name": "Geneva Railway Station"
    },
    {
        "code": "ZHY",
        "country": "CN",
        "state": "",
        "name": "Xiangshan Airport"
    },
    {
        "code": "ZIA",
        "country": "RU",
        "state": "",
        "name": "Zhukovsky Airport"
    },
    {
        "code": "ZIG",
        "country": "SN",
        "state": "",
        "name": "Ziguinchor Airport"
    },
    {
        "code": "ZIH",
        "country": "MX",
        "state": "",
        "name": "Ixtapa/Zihuatanejo International Airpor"
    },
    {
        "code": "ZIN",
        "country": "CH",
        "state": "",
        "name": "Interlaken Ost Railway Station"
    },
    {
        "code": "ZIS",
        "country": "LY",
        "state": "",
        "name": "Zintan Airport"
    },
    {
        "code": "ZIV",
        "country": "GB",
        "state": "",
        "name": "Inverness Railway Station"
    },
    {
        "code": "ZIX",
        "country": "RU",
        "state": "",
        "name": "Zhigansk Airport"
    },
    {
        "code": "ZKE",
        "country": "CA",
        "state": "ON",
        "name": "Kashechewan Airport"
    },
    {
        "code": "ZKP",
        "country": "RU",
        "state": "",
        "name": "Zyryanka Airport"
    },
    {
        "code": "ZLN",
        "country": "FR",
        "state": "",
        "name": "Le Mans Railway Station"
    },
    {
        "code": "ZLO",
        "country": "MX",
        "state": "",
        "name": "Playa de Oro International Airport"
    },
    {
        "code": "ZLP",
        "country": "CH",
        "state": "",
        "name": "Zurich HB Railway Station"
    },
    {
        "code": "ZLZ",
        "country": "GB",
        "state": "",
        "name": "Leeds Bus Station"
    },
    {
        "code": "ZMB",
        "country": "DE",
        "state": "",
        "name": "Hamburg Hbf Railway Station"
    },
    {
        "code": "ZMP",
        "country": "GB",
        "state": "",
        "name": "Manchester Bus Station"
    },
    {
        "code": "ZMS",
        "country": "IT",
        "state": "",
        "name": "Santa Maria Novella Railway Station"
    },
    {
        "code": "ZMT",
        "country": "CA",
        "state": "BC",
        "name": "Masset Airport"
    },
    {
        "code": "ZMU",
        "country": "DE",
        "state": "",
        "name": "Munich Hbf Railway Station"
    },
    {
        "code": "ZNA",
        "country": "CA",
        "state": "BC",
        "name": "Nanaimo Harbour Sea Plane Base"
    },
    {
        "code": "ZND",
        "country": "NE",
        "state": "",
        "name": "Zinder Airport"
    },
    {
        "code": "ZNE",
        "country": "AU",
        "state": "WA",
        "name": "Newman Airport"
    },
    {
        "code": "ZNZ",
        "country": "TZ",
        "state": "",
        "name": "Abeid Amani Karume Intl. Airport"
    },
    {
        "code": "ZOB",
        "country": "ES",
        "state": "",
        "name": "Zamora Railway Station"
    },
    {
        "code": "ZOS",
        "country": "CL",
        "state": "",
        "name": "Canal Bajo Airport"
    },
    {
        "code": "ZPB",
        "country": "CA",
        "state": "ON",
        "name": "Sachigo Lake Airport"
    },
    {
        "code": "ZPE",
        "country": "DE",
        "state": "",
        "name": "Osnabrueck Hbf Railway Station"
    },
    {
        "code": "ZPY",
        "country": "DE",
        "state": "",
        "name": "Siegburg Railway Station"
    },
    {
        "code": "ZQN",
        "country": "NZ",
        "state": "",
        "name": "Queenstown Airport"
    },
    {
        "code": "ZQU",
        "country": "DE",
        "state": "",
        "name": "Wolfsburg Railway Station"
    },
    {
        "code": "ZQZ",
        "country": "CN",
        "state": "",
        "name": "Zhangjiakou Airport"
    },
    {
        "code": "ZRH",
        "country": "CH",
        "state": "",
        "name": "Zurich Airport"
    },
    {
        "code": "ZRI",
        "country": "ID",
        "state": "",
        "name": "Sudjarwo Condronegoro Airport"
    },
    {
        "code": "ZRQ",
        "country": "CH",
        "state": "",
        "name": "Zone 1(Off-line Point)"
    },
    {
        "code": "ZSA",
        "country": "BS",
        "state": "",
        "name": "Cockburn Town Airport"
    },
    {
        "code": "ZSB",
        "country": "AT",
        "state": "",
        "name": "Salzburg Hbf Railway Station"
    },
    {
        "code": "ZSE",
        "country": "RE",
        "state": "",
        "name": "Pierrefonds Airport"
    },
    {
        "code": "ZSJ",
        "country": "CA",
        "state": "ON",
        "name": "Sandy Lake Airport"
    },
    {
        "code": "ZTA",
        "country": "PF",
        "state": "",
        "name": "Tureia Airport"
    },
    {
        "code": "ZTH",
        "country": "GR",
        "state": "",
        "name": "Dionisios Solomos Airport"
    },
    {
        "code": "ZTI",
        "country": "CN",
        "state": "",
        "name": "Humen Ferry Port"
    },
    {
        "code": "ZUH",
        "country": "CN",
        "state": "",
        "name": "Sanzao International Airport"
    },
    {
        "code": "ZUM",
        "country": "CA",
        "state": "NL",
        "name": "Churchill Falls Airport"
    },
    {
        "code": "ZVH",
        "country": "AE",
        "state": "",
        "name": "Al Ain Bus Station"
    },
    {
        "code": "ZVJ",
        "country": "AE",
        "state": "",
        "name": "Abu Dhabi EK Bus Station"
    },
    {
        "code": "ZVK",
        "country": "LA",
        "state": "",
        "name": "Savannakhet Airport"
    },
    {
        "code": "ZVR",
        "country": "DE",
        "state": "",
        "name": "Hannover Hbf Railway Station"
    },
    {
        "code": "ZWE",
        "country": "BE",
        "state": "",
        "name": "Antwerp Central Railway Station"
    },
    {
        "code": "ZWL",
        "country": "CA",
        "state": "SK",
        "name": "Wollaston Lake Airport"
    },
    {
        "code": "ZWS",
        "country": "DE",
        "state": "",
        "name": "Stuttgart Hbf Railway Station"
    },
    {
        "code": "ZXA",
        "country": "GB",
        "state": "",
        "name": "Aberdeen Railway Station"
    },
    {
        "code": "ZXE",
        "country": "GB",
        "state": "",
        "name": "Waverley Railway Station"
    },
    {
        "code": "ZYA",
        "country": "NL",
        "state": "",
        "name": "Amsterdam Centraal Railway Station"
    },
    {
        "code": "ZYI",
        "country": "CN",
        "state": "",
        "name": "Xinzhou Airport"
    },
    {
        "code": "ZYK",
        "country": "CN",
        "state": "",
        "name": "Shekou Ferry Port"
    },
    {
        "code": "ZYL",
        "country": "BD",
        "state": "",
        "name": "Osmani International Airport"
    },
    {
        "code": "ZYN",
        "country": "FR",
        "state": "",
        "name": "Nimes Railway Station"
    },
    {
        "code": "ZYR",
        "country": "BE",
        "state": "",
        "name": "Midi Railway Station"
    },
    {
        "code": "ZYT",
        "country": "NL",
        "state": "",
        "name": "Maastricht Railway Station"
    },
    {
        "code": "ZZO",
        "country": "RU",
        "state": "",
        "name": "Zonalnoye Airport"
    }
];

module.exports = stations;