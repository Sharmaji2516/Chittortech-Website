export default function LocalSchema() {
  const SITE = "https://www.chittortech.online";
  const ORG_ID = `${SITE}/#organization`;
  const LOCAL_ID = `${SITE}/#localbusiness`;
  const WEBSITE_ID = `${SITE}/#website`;
  const FOUNDER_ID = `${SITE}/#founder`;
  const CTO_ID = `${SITE}/#cto`;
  const LOGO_ID = `${SITE}/#logo`;

  const GLOBAL_AREA_SERVED = [
    // ── Global Catch-All ──────────────────────────────────────
    { "@type": "Place", "name": "World" },

    // ── A ────────────────────────────────────────────────────
    { "@type": "Country", "name": "Afghanistan" },
    { "@type": "Country", "name": "Albania" },
    { "@type": "Country", "name": "Algeria" },
    { "@type": "Country", "name": "Andorra" },
    { "@type": "Country", "name": "Angola" },
    { "@type": "Country", "name": "Antigua and Barbuda" },
    { "@type": "Country", "name": "Argentina" },
    { "@type": "Country", "name": "Armenia" },
    { "@type": "Country", "name": "Australia", "sameAs": "https://en.wikipedia.org/wiki/Australia" },
    { "@type": "Country", "name": "Austria" },
    { "@type": "Country", "name": "Azerbaijan" },

    // ── B ────────────────────────────────────────────────────
    { "@type": "Country", "name": "Bahamas" },
    { "@type": "Country", "name": "Bahrain" },
    { "@type": "Country", "name": "Bangladesh" },
    { "@type": "Country", "name": "Barbados" },
    { "@type": "Country", "name": "Belarus" },
    { "@type": "Country", "name": "Belgium" },
    { "@type": "Country", "name": "Belize" },
    { "@type": "Country", "name": "Benin" },
    { "@type": "Country", "name": "Bhutan" },
    { "@type": "Country", "name": "Bolivia" },
    { "@type": "Country", "name": "Bosnia and Herzegovina" },
    { "@type": "Country", "name": "Botswana" },
    { "@type": "Country", "name": "Brazil" },
    { "@type": "Country", "name": "Brunei" },
    { "@type": "Country", "name": "Bulgaria" },
    { "@type": "Country", "name": "Burkina Faso" },
    { "@type": "Country", "name": "Burundi" },

    // ── C ────────────────────────────────────────────────────
    { "@type": "Country", "name": "Cabo Verde" },
    { "@type": "Country", "name": "Cambodia" },
    { "@type": "Country", "name": "Cameroon" },
    { "@type": "Country", "name": "Canada", "sameAs": "https://en.wikipedia.org/wiki/Canada" },
    { "@type": "Country", "name": "Central African Republic" },
    { "@type": "Country", "name": "Chad" },
    { "@type": "Country", "name": "Chile" },
    { "@type": "Country", "name": "China" },
    { "@type": "Country", "name": "Colombia" },
    { "@type": "Country", "name": "Comoros" },
    { "@type": "Country", "name": "Congo (Brazzaville)" },
    { "@type": "Country", "name": "Congo (Kinshasa)" },
    { "@type": "Country", "name": "Costa Rica" },
    { "@type": "Country", "name": "Croatia" },
    { "@type": "Country", "name": "Cuba" },
    { "@type": "Country", "name": "Cyprus" },
    { "@type": "Country", "name": "Czech Republic" },

    // ── D ────────────────────────────────────────────────────
    { "@type": "Country", "name": "Denmark" },
    { "@type": "Country", "name": "Djibouti" },
    { "@type": "Country", "name": "Dominica" },
    { "@type": "Country", "name": "Dominican Republic" },

    // ── E ────────────────────────────────────────────────────
    { "@type": "Country", "name": "East Timor" },
    { "@type": "Country", "name": "Ecuador" },
    { "@type": "Country", "name": "Egypt" },
    { "@type": "Country", "name": "El Salvador" },
    { "@type": "Country", "name": "Equatorial Guinea" },
    { "@type": "Country", "name": "Eritrea" },
    { "@type": "Country", "name": "Estonia" },
    { "@type": "Country", "name": "Eswatini" },
    { "@type": "Country", "name": "Ethiopia" },

    // ── F ────────────────────────────────────────────────────
    { "@type": "Country", "name": "Fiji" },
    { "@type": "Country", "name": "Finland" },
    { "@type": "Country", "name": "France" },

    // ── G ────────────────────────────────────────────────────
    { "@type": "Country", "name": "Gabon" },
    { "@type": "Country", "name": "Gambia" },
    { "@type": "Country", "name": "Georgia" },
    { "@type": "Country", "name": "Germany", "sameAs": "https://en.wikipedia.org/wiki/Germany" },
    { "@type": "Country", "name": "Ghana" },
    { "@type": "Country", "name": "Greece" },
    { "@type": "Country", "name": "Grenada" },
    { "@type": "Country", "name": "Guatemala" },
    { "@type": "Country", "name": "Guinea" },
    { "@type": "Country", "name": "Guinea-Bissau" },
    { "@type": "Country", "name": "Guyana" },

    // ── H ────────────────────────────────────────────────────
    { "@type": "Country", "name": "Haiti" },
    { "@type": "Country", "name": "Honduras" },
    { "@type": "Country", "name": "Hungary" },

    // ── I ────────────────────────────────────────────────────
    { "@type": "Country", "name": "Iceland" },
    { "@type": "Country", "name": "India", "sameAs": "https://en.wikipedia.org/wiki/India" },
    { "@type": "Country", "name": "Indonesia" },
    { "@type": "Country", "name": "Iran" },
    { "@type": "Country", "name": "Iraq" },
    { "@type": "Country", "name": "Ireland" },
    { "@type": "Country", "name": "Israel" },
    { "@type": "Country", "name": "Italy" },

    // ── J ────────────────────────────────────────────────────
    { "@type": "Country", "name": "Jamaica" },
    { "@type": "Country", "name": "Japan" },
    { "@type": "Country", "name": "Jordan" },

    // ── K ────────────────────────────────────────────────────
    { "@type": "Country", "name": "Kazakhstan" },
    { "@type": "Country", "name": "Kenya" },
    { "@type": "Country", "name": "Kiribati" },
    { "@type": "Country", "name": "Korea (North)" },
    { "@type": "Country", "name": "Korea (South)" },
    { "@type": "Country", "name": "Kosovo" },
    { "@type": "Country", "name": "Kuwait" },
    { "@type": "Country", "name": "Kyrgyzstan" },

    // ── L ────────────────────────────────────────────────────
    { "@type": "Country", "name": "Laos" },
    { "@type": "Country", "name": "Latvia" },
    { "@type": "Country", "name": "Lebanon" },
    { "@type": "Country", "name": "Lesotho" },
    { "@type": "Country", "name": "Liberia" },
    { "@type": "Country", "name": "Libya" },
    { "@type": "Country", "name": "Liechtenstein" },
    { "@type": "Country", "name": "Lithuania" },
    { "@type": "Country", "name": "Luxembourg" },

    // ── M ────────────────────────────────────────────────────
    { "@type": "Country", "name": "Madagascar" },
    { "@type": "Country", "name": "Malawi" },
    { "@type": "Country", "name": "Malaysia" },
    { "@type": "Country", "name": "Maldives" },
    { "@type": "Country", "name": "Mali" },
    { "@type": "Country", "name": "Malta" },
    { "@type": "Country", "name": "Marshall Islands" },
    { "@type": "Country", "name": "Mauritania" },
    { "@type": "Country", "name": "Mauritius" },
    { "@type": "Country", "name": "Mexico" },
    { "@type": "Country", "name": "Micronesia" },
    { "@type": "Country", "name": "Moldova" },
    { "@type": "Country", "name": "Monaco" },
    { "@type": "Country", "name": "Mongolia" },
    { "@type": "Country", "name": "Montenegro" },
    { "@type": "Country", "name": "Morocco" },
    { "@type": "Country", "name": "Mozambique" },
    { "@type": "Country", "name": "Myanmar" },

    // ── N ────────────────────────────────────────────────────
    { "@type": "Country", "name": "Namibia" },
    { "@type": "Country", "name": "Nauru" },
    { "@type": "Country", "name": "Nepal" },
    { "@type": "Country", "name": "Netherlands" },
    { "@type": "Country", "name": "New Zealand" },
    { "@type": "Country", "name": "Nicaragua" },
    { "@type": "Country", "name": "Niger" },
    { "@type": "Country", "name": "Nigeria" },
    { "@type": "Country", "name": "North Macedonia" },
    { "@type": "Country", "name": "Norway" },

    // ── O ────────────────────────────────────────────────────
    { "@type": "Country", "name": "Oman" },

    // ── P ────────────────────────────────────────────────────
    { "@type": "Country", "name": "Pakistan" },
    { "@type": "Country", "name": "Palau" },
    { "@type": "Country", "name": "Palestine" },
    { "@type": "Country", "name": "Panama" },
    { "@type": "Country", "name": "Papua New Guinea" },
    { "@type": "Country", "name": "Paraguay" },
    { "@type": "Country", "name": "Peru" },
    { "@type": "Country", "name": "Philippines" },
    { "@type": "Country", "name": "Poland" },
    { "@type": "Country", "name": "Portugal" },

    // ── Q ────────────────────────────────────────────────────
    { "@type": "Country", "name": "Qatar", "sameAs": "https://en.wikipedia.org/wiki/Qatar" },

    // ── R ────────────────────────────────────────────────────
    { "@type": "Country", "name": "Romania" },
    { "@type": "Country", "name": "Russia" },
    { "@type": "Country", "name": "Rwanda" },

    // ── S ────────────────────────────────────────────────────
    { "@type": "Country", "name": "Saint Kitts and Nevis" },
    { "@type": "Country", "name": "Saint Lucia" },
    { "@type": "Country", "name": "Saint Vincent and the Grenadines" },
    { "@type": "Country", "name": "Samoa" },
    { "@type": "Country", "name": "San Marino" },
    { "@type": "Country", "name": "Saudi Arabia", "sameAs": "https://en.wikipedia.org/wiki/Saudi_Arabia" },
    { "@type": "Country", "name": "Senegal" },
    { "@type": "Country", "name": "Serbia" },
    { "@type": "Country", "name": "Seychelles" },
    { "@type": "Country", "name": "Sierra Leone" },
    { "@type": "Country", "name": "Singapore", "sameAs": "https://en.wikipedia.org/wiki/Singapore" },
    { "@type": "Country", "name": "Slovakia" },
    { "@type": "Country", "name": "Slovenia" },
    { "@type": "Country", "name": "Solomon Islands" },
    { "@type": "Country", "name": "Somalia" },
    { "@type": "Country", "name": "South Africa" },
    { "@type": "Country", "name": "South Sudan" },
    { "@type": "Country", "name": "Spain" },
    { "@type": "Country", "name": "Sri Lanka" },
    { "@type": "Country", "name": "Sudan" },
    { "@type": "Country", "name": "Suriname" },
    { "@type": "Country", "name": "Sweden" },
    { "@type": "Country", "name": "Switzerland" },
    { "@type": "Country", "name": "Syria" },

    // ── T ────────────────────────────────────────────────────
    { "@type": "Country", "name": "Taiwan" },
    { "@type": "Country", "name": "Tajikistan" },
    { "@type": "Country", "name": "Tanzania" },
    { "@type": "Country", "name": "Thailand" },
    { "@type": "Country", "name": "Togo" },
    { "@type": "Country", "name": "Tonga" },
    { "@type": "Country", "name": "Trinidad and Tobago" },
    { "@type": "Country", "name": "Tunisia" },
    { "@type": "Country", "name": "Turkey" },
    { "@type": "Country", "name": "Turkmenistan" },
    { "@type": "Country", "name": "Tuvalu" },

    // ── U ────────────────────────────────────────────────────
    { "@type": "Country", "name": "Uganda" },
    { "@type": "Country", "name": "Ukraine" },
    { "@type": "Country", "name": "United Arab Emirates", "sameAs": "https://en.wikipedia.org/wiki/United_Arab_Emirates" },
    { "@type": "Country", "name": "United Kingdom", "sameAs": "https://en.wikipedia.org/wiki/United_Kingdom" },
    { "@type": "Country", "name": "United States", "sameAs": "https://en.wikipedia.org/wiki/United_States" },
    { "@type": "Country", "name": "Uruguay" },
    { "@type": "Country", "name": "Uzbekistan" },

    // ── V ────────────────────────────────────────────────────
    { "@type": "Country", "name": "Vanuatu" },
    { "@type": "Country", "name": "Vatican City" },
    { "@type": "Country", "name": "Venezuela" },
    { "@type": "Country", "name": "Vietnam" },

    // ── Y–Z ──────────────────────────────────────────────────
    { "@type": "Country", "name": "Yemen" },
    { "@type": "Country", "name": "Zambia" },
    { "@type": "Country", "name": "Zimbabwe" },

    // ── India – States & Key Cities ──────────────────────────
    { "@type": "State", "name": "Rajasthan", "sameAs": "https://en.wikipedia.org/wiki/Rajasthan" },
    { "@type": "City", "name": "Chittorgarh", "sameAs": "https://en.wikipedia.org/wiki/Chittorgarh" },
    { "@type": "City", "name": "Udaipur", "sameAs": "https://en.wikipedia.org/wiki/Udaipur" },
    { "@type": "City", "name": "Jaipur", "sameAs": "https://en.wikipedia.org/wiki/Jaipur" },
    { "@type": "City", "name": "Bhilwara", "sameAs": "https://en.wikipedia.org/wiki/Bhilwara" },
    { "@type": "City", "name": "Jodhpur", "sameAs": "https://en.wikipedia.org/wiki/Jodhpur" },
    { "@type": "City", "name": "Kota", "sameAs": "https://en.wikipedia.org/wiki/Kota,_Rajasthan" },
    { "@type": "City", "name": "Ajmer", "sameAs": "https://en.wikipedia.org/wiki/Ajmer" },
    { "@type": "City", "name": "Bikaner" },
    { "@type": "City", "name": "Alwar" },
    { "@type": "City", "name": "Sikar" },
    { "@type": "City", "name": "Rajsamand" },
    { "@type": "City", "name": "Nathdwara" },
    { "@type": "City", "name": "Pratapgarh" },
    { "@type": "City", "name": "Dungarpur" },
    { "@type": "City", "name": "Banswara" },
    { "@type": "City", "name": "Mumbai", "sameAs": "https://en.wikipedia.org/wiki/Mumbai" },
    { "@type": "City", "name": "Delhi", "sameAs": "https://en.wikipedia.org/wiki/Delhi" },
    { "@type": "City", "name": "Bengaluru", "sameAs": "https://en.wikipedia.org/wiki/Bangalore" },
    { "@type": "City", "name": "Hyderabad" },
    { "@type": "City", "name": "Pune" },
    { "@type": "City", "name": "Chennai" },
    { "@type": "City", "name": "Ahmedabad" },
    { "@type": "City", "name": "Surat" },
    { "@type": "City", "name": "Kolkata" },
    { "@type": "City", "name": "Dubai", "sameAs": "https://en.wikipedia.org/wiki/Dubai" },
    { "@type": "City", "name": "Abu Dhabi" },
    { "@type": "City", "name": "Sharjah" },
    { "@type": "City", "name": "London", "sameAs": "https://en.wikipedia.org/wiki/London" },
    { "@type": "City", "name": "New York City", "sameAs": "https://en.wikipedia.org/wiki/New_York_City" },
    { "@type": "City", "name": "San Francisco" },
    { "@type": "City", "name": "Toronto" },
    { "@type": "City", "name": "Sydney", "sameAs": "https://en.wikipedia.org/wiki/Sydney" },
    { "@type": "City", "name": "Berlin" },
    { "@type": "City", "name": "Riyadh" },
    { "@type": "City", "name": "Doha" },
    // --- India Extra Cities --
    { "@type": "City", "name": "Nagpur" }, { "@type": "City", "name": "Lucknow" }, { "@type": "City", "name": "Kanpur" },
    { "@type": "City", "name": "Indore" }, { "@type": "City", "name": "Bhopal" }, { "@type": "City", "name": "Patna" },
    { "@type": "City", "name": "Agra" }, { "@type": "City", "name": "Varanasi" }, { "@type": "City", "name": "Nashik" },
    { "@type": "City", "name": "Vadodara" }, { "@type": "City", "name": "Coimbatore" }, { "@type": "City", "name": "Visakhapatnam" },
    { "@type": "City", "name": "Thiruvananthapuram" }, { "@type": "City", "name": "Kochi" }, { "@type": "City", "name": "Chandigarh" },
    { "@type": "City", "name": "Gurgaon" }, { "@type": "City", "name": "Noida" }, { "@type": "City", "name": "Faridabad" },
    { "@type": "City", "name": "Ghaziabad" }, { "@type": "City", "name": "Mysuru" }, { "@type": "City", "name": "Mangaluru" },
    { "@type": "City", "name": "Amritsar" }, { "@type": "City", "name": "Ludhiana" }, { "@type": "City", "name": "Srinagar" },
    { "@type": "City", "name": "Jammu" }, { "@type": "City", "name": "Dehradun" }, { "@type": "City", "name": "Ranchi" },
    { "@type": "City", "name": "Raipur" }, { "@type": "City", "name": "Bhubaneswar" }, { "@type": "City", "name": "Guwahati" },
    { "@type": "City", "name": "Shillong" }, { "@type": "City", "name": "Panaji" }, { "@type": "City", "name": "Shimla" },
    { "@type": "City", "name": "Vijayawada" }, { "@type": "City", "name": "Tirupati" }, { "@type": "City", "name": "Madurai" },
    { "@type": "City", "name": "Tiruchirappalli" }, { "@type": "City", "name": "Salem" }, { "@type": "City", "name": "Tirunelveli" },
    { "@type": "City", "name": "Aurangabad" }, { "@type": "City", "name": "Solapur" }, { "@type": "City", "name": "Kolhapur" },
    { "@type": "City", "name": "Rajkot" }, { "@type": "City", "name": "Anand" }, { "@type": "City", "name": "Bharuch" },
    // --- India All States --
    { "@type": "State", "name": "Andhra Pradesh" }, { "@type": "State", "name": "Arunachal Pradesh" },
    { "@type": "State", "name": "Assam" }, { "@type": "State", "name": "Bihar" }, { "@type": "State", "name": "Chhattisgarh" },
    { "@type": "State", "name": "Goa" }, { "@type": "State", "name": "Gujarat" }, { "@type": "State", "name": "Haryana" },
    { "@type": "State", "name": "Himachal Pradesh" }, { "@type": "State", "name": "Jharkhand" }, { "@type": "State", "name": "Karnataka" },
    { "@type": "State", "name": "Kerala" }, { "@type": "State", "name": "Madhya Pradesh" }, { "@type": "State", "name": "Maharashtra" },
    { "@type": "State", "name": "Manipur" }, { "@type": "State", "name": "Meghalaya" }, { "@type": "State", "name": "Mizoram" },
    { "@type": "State", "name": "Nagaland" }, { "@type": "State", "name": "Odisha" }, { "@type": "State", "name": "Punjab" },
    { "@type": "State", "name": "Sikkim" }, { "@type": "State", "name": "Tamil Nadu" }, { "@type": "State", "name": "Telangana" },
    { "@type": "State", "name": "Tripura" }, { "@type": "State", "name": "Uttar Pradesh" }, { "@type": "State", "name": "Uttarakhand" },
    { "@type": "State", "name": "West Bengal" },
    // --- UAE Extra --
    { "@type": "City", "name": "Ajman" }, { "@type": "City", "name": "Ras Al Khaimah" }, { "@type": "City", "name": "Fujairah" },
    { "@type": "City", "name": "Umm Al Quwain" }, { "@type": "City", "name": "Al Ain" }, { "@type": "City", "name": "Jebel Ali" },
    { "@type": "City", "name": "Downtown Dubai" }, { "@type": "City", "name": "Dubai Marina" }, { "@type": "City", "name": "Palm Jumeirah" },
    { "@type": "City", "name": "Business Bay Dubai" }, { "@type": "City", "name": "Deira" }, { "@type": "City", "name": "Bur Dubai" },
    // --- Saudi Arabia --
    { "@type": "City", "name": "Jeddah" }, { "@type": "City", "name": "Mecca" }, { "@type": "City", "name": "Medina" },
    { "@type": "City", "name": "Dammam" }, { "@type": "City", "name": "Khobar" }, { "@type": "City", "name": "Dhahran" },
    { "@type": "City", "name": "Tabuk" }, { "@type": "City", "name": "Abha" }, { "@type": "City", "name": "Buraidah" },
    { "@type": "City", "name": "Najran" }, { "@type": "City", "name": "Hail" },
    // --- Gulf --
    { "@type": "City", "name": "Lusail" }, { "@type": "City", "name": "Kuwait City" }, { "@type": "City", "name": "Manama" },
    { "@type": "City", "name": "Muscat" }, { "@type": "City", "name": "Salalah" }, { "@type": "City", "name": "Amman" },
    { "@type": "City", "name": "Beirut" }, { "@type": "City", "name": "Baghdad" }, { "@type": "City", "name": "Tehran" },
    { "@type": "City", "name": "Tel Aviv" }, { "@type": "City", "name": "Jerusalem" }, { "@type": "City", "name": "Haifa" },
    { "@type": "City", "name": "Cairo" }, { "@type": "City", "name": "Alexandria" }, { "@type": "City", "name": "Istanbul" },
    { "@type": "City", "name": "Ankara" }, { "@type": "City", "name": "Izmir" },
    // --- USA All 50 States --
    { "@type": "State", "name": "Alabama" }, { "@type": "State", "name": "Alaska" }, { "@type": "State", "name": "Arizona" },
    { "@type": "State", "name": "Arkansas" }, { "@type": "State", "name": "California" }, { "@type": "State", "name": "Colorado" },
    { "@type": "State", "name": "Connecticut" }, { "@type": "State", "name": "Delaware" }, { "@type": "State", "name": "Florida" },
    { "@type": "State", "name": "Georgia" }, { "@type": "State", "name": "Hawaii" }, { "@type": "State", "name": "Idaho" },
    { "@type": "State", "name": "Illinois" }, { "@type": "State", "name": "Indiana" }, { "@type": "State", "name": "Iowa" },
    { "@type": "State", "name": "Kansas" }, { "@type": "State", "name": "Kentucky" }, { "@type": "State", "name": "Louisiana" },
    { "@type": "State", "name": "Maine" }, { "@type": "State", "name": "Maryland" }, { "@type": "State", "name": "Massachusetts" },
    { "@type": "State", "name": "Michigan" }, { "@type": "State", "name": "Minnesota" }, { "@type": "State", "name": "Mississippi" },
    { "@type": "State", "name": "Missouri" }, { "@type": "State", "name": "Montana" }, { "@type": "State", "name": "Nebraska" },
    { "@type": "State", "name": "Nevada" }, { "@type": "State", "name": "New Hampshire" }, { "@type": "State", "name": "New Jersey" },
    { "@type": "State", "name": "New Mexico" }, { "@type": "State", "name": "New York" }, { "@type": "State", "name": "North Carolina" },
    { "@type": "State", "name": "North Dakota" }, { "@type": "State", "name": "Ohio" }, { "@type": "State", "name": "Oklahoma" },
    { "@type": "State", "name": "Oregon" }, { "@type": "State", "name": "Pennsylvania" }, { "@type": "State", "name": "Rhode Island" },
    { "@type": "State", "name": "South Carolina" }, { "@type": "State", "name": "South Dakota" }, { "@type": "State", "name": "Tennessee" },
    { "@type": "State", "name": "Texas" }, { "@type": "State", "name": "Utah" }, { "@type": "State", "name": "Vermont" },
    { "@type": "State", "name": "Virginia" }, { "@type": "State", "name": "Washington" }, { "@type": "State", "name": "West Virginia" },
    { "@type": "State", "name": "Wisconsin" }, { "@type": "State", "name": "Wyoming" },
    // --- USA Top 80 Cities --
    { "@type": "City", "name": "Los Angeles" }, { "@type": "City", "name": "Chicago" }, { "@type": "City", "name": "Houston" },
    { "@type": "City", "name": "Phoenix" }, { "@type": "City", "name": "Philadelphia" }, { "@type": "City", "name": "San Antonio" },
    { "@type": "City", "name": "San Diego" }, { "@type": "City", "name": "Dallas" }, { "@type": "City", "name": "San Jose" },
    { "@type": "City", "name": "Austin" }, { "@type": "City", "name": "Jacksonville" }, { "@type": "City", "name": "Fort Worth" },
    { "@type": "City", "name": "Columbus" }, { "@type": "City", "name": "Charlotte" }, { "@type": "City", "name": "Indianapolis" },
    { "@type": "City", "name": "Seattle" }, { "@type": "City", "name": "Denver" }, { "@type": "City", "name": "Washington DC" },
    { "@type": "City", "name": "Nashville" }, { "@type": "City", "name": "Oklahoma City" }, { "@type": "City", "name": "El Paso" },
    { "@type": "City", "name": "Boston" }, { "@type": "City", "name": "Portland" }, { "@type": "City", "name": "Las Vegas" },
    { "@type": "City", "name": "Memphis" }, { "@type": "City", "name": "Louisville" }, { "@type": "City", "name": "Baltimore" },
    { "@type": "City", "name": "Milwaukee" }, { "@type": "City", "name": "Albuquerque" }, { "@type": "City", "name": "Tucson" },
    { "@type": "City", "name": "Fresno" }, { "@type": "City", "name": "Sacramento" }, { "@type": "City", "name": "Kansas City" },
    { "@type": "City", "name": "Atlanta" }, { "@type": "City", "name": "Omaha" }, { "@type": "City", "name": "Colorado Springs" },
    { "@type": "City", "name": "Raleigh" }, { "@type": "City", "name": "Miami" }, { "@type": "City", "name": "Minneapolis" },
    { "@type": "City", "name": "Tampa" }, { "@type": "City", "name": "Cleveland" }, { "@type": "City", "name": "Pittsburgh" },
    { "@type": "City", "name": "Detroit" }, { "@type": "City", "name": "Salt Lake City" }, { "@type": "City", "name": "Orlando" },
    { "@type": "City", "name": "Cincinnati" }, { "@type": "City", "name": "St. Louis" }, { "@type": "City", "name": "Silicon Valley" },
    { "@type": "City", "name": "Palo Alto" }, { "@type": "City", "name": "Mountain View" }, { "@type": "City", "name": "Sunnyvale" },
    { "@type": "City", "name": "Santa Clara" }, { "@type": "City", "name": "Redwood City" }, { "@type": "City", "name": "Oakland" },
    { "@type": "City", "name": "Irvine" }, { "@type": "City", "name": "Scottsdale" }, { "@type": "City", "name": "Honolulu" },
    { "@type": "City", "name": "New Orleans" }, { "@type": "City", "name": "Buffalo" }, { "@type": "City", "name": "Hartford" },
    { "@type": "City", "name": "Newark" }, { "@type": "City", "name": "Anchorage" }, { "@type": "City", "name": "Cupertino" },
    { "@type": "City", "name": "Menlo Park" }, { "@type": "City", "name": "Bellevue" }, { "@type": "City", "name": "Redmond" },
    { "@type": "City", "name": "Plano" }, { "@type": "City", "name": "Irving" }, { "@type": "City", "name": "Frisco" },
    { "@type": "City", "name": "Mesa" }, { "@type": "City", "name": "Chandler" }, { "@type": "City", "name": "Gilbert" },
    { "@type": "City", "name": "Tempe" }, { "@type": "City", "name": "Santa Monica" }, { "@type": "City", "name": "Arlington" },
    // --- Canada --
    { "@type": "State", "name": "Ontario" }, { "@type": "State", "name": "Quebec" }, { "@type": "State", "name": "British Columbia" },
    { "@type": "State", "name": "Alberta" }, { "@type": "State", "name": "Manitoba" }, { "@type": "State", "name": "Saskatchewan" },
    { "@type": "State", "name": "Nova Scotia" }, { "@type": "State", "name": "New Brunswick" },
    { "@type": "City", "name": "Vancouver" }, { "@type": "City", "name": "Montreal" }, { "@type": "City", "name": "Calgary" },
    { "@type": "City", "name": "Edmonton" }, { "@type": "City", "name": "Ottawa" }, { "@type": "City", "name": "Winnipeg" },
    { "@type": "City", "name": "Quebec City" }, { "@type": "City", "name": "Hamilton" }, { "@type": "City", "name": "Brampton" },
    { "@type": "City", "name": "Mississauga" }, { "@type": "City", "name": "Surrey" }, { "@type": "City", "name": "Burnaby" },
    { "@type": "City", "name": "Halifax" }, { "@type": "City", "name": "Kitchener" }, { "@type": "City", "name": "Markham" },
    { "@type": "City", "name": "Vaughan" }, { "@type": "City", "name": "Saskatoon" }, { "@type": "City", "name": "Regina" },
    { "@type": "City", "name": "Richmond Hill" }, { "@type": "City", "name": "Oakville" },
    // --- UK --
    { "@type": "State", "name": "England" }, { "@type": "State", "name": "Scotland" },
    { "@type": "State", "name": "Wales" }, { "@type": "State", "name": "Northern Ireland" },
    { "@type": "State", "name": "Greater London" }, { "@type": "State", "name": "West Midlands" },
    { "@type": "City", "name": "Birmingham" }, { "@type": "City", "name": "Manchester" }, { "@type": "City", "name": "Leeds" },
    { "@type": "City", "name": "Liverpool" }, { "@type": "City", "name": "Sheffield" }, { "@type": "City", "name": "Bristol" },
    { "@type": "City", "name": "Edinburgh" }, { "@type": "City", "name": "Glasgow" }, { "@type": "City", "name": "Cardiff" },
    { "@type": "City", "name": "Belfast" }, { "@type": "City", "name": "Leicester" }, { "@type": "City", "name": "Nottingham" },
    { "@type": "City", "name": "Coventry" }, { "@type": "City", "name": "Bradford" }, { "@type": "City", "name": "Southampton" },
    { "@type": "City", "name": "Reading" }, { "@type": "City", "name": "Brighton" }, { "@type": "City", "name": "Derby" },
    { "@type": "City", "name": "Newcastle upon Tyne" }, { "@type": "City", "name": "Oxford" }, { "@type": "City", "name": "Cambridge" },
    { "@type": "City", "name": "Aberdeen" }, { "@type": "City", "name": "Dundee" }, { "@type": "City", "name": "Swansea" },
    { "@type": "City", "name": "Milton Keynes" }, { "@type": "City", "name": "Plymouth" }, { "@type": "City", "name": "York" },
    { "@type": "City", "name": "Wolverhampton" }, { "@type": "City", "name": "Portsmouth" }, { "@type": "City", "name": "Exeter" },
    // --- Australia --
    { "@type": "State", "name": "New South Wales" }, { "@type": "State", "name": "Victoria" },
    { "@type": "State", "name": "Queensland" }, { "@type": "State", "name": "Western Australia" },
    { "@type": "State", "name": "South Australia" }, { "@type": "State", "name": "Tasmania" },
    { "@type": "State", "name": "Australian Capital Territory" }, { "@type": "State", "name": "Northern Territory" },
    { "@type": "City", "name": "Melbourne" }, { "@type": "City", "name": "Brisbane" }, { "@type": "City", "name": "Perth" },
    { "@type": "City", "name": "Adelaide" }, { "@type": "City", "name": "Canberra" }, { "@type": "City", "name": "Gold Coast" },
    { "@type": "City", "name": "Newcastle" }, { "@type": "City", "name": "Wollongong" }, { "@type": "City", "name": "Geelong" },
    { "@type": "City", "name": "Hobart" }, { "@type": "City", "name": "Townsville" }, { "@type": "City", "name": "Cairns" },
    { "@type": "City", "name": "Darwin" }, { "@type": "City", "name": "Sunshine Coast" }, { "@type": "City", "name": "Toowoomba" },
    // --- Germany --
    { "@type": "State", "name": "Bavaria" }, { "@type": "State", "name": "North Rhine-Westphalia" },
    { "@type": "State", "name": "Baden-W�rttemberg" }, { "@type": "State", "name": "Lower Saxony" }, { "@type": "State", "name": "Hesse" },
    { "@type": "City", "name": "Hamburg" }, { "@type": "City", "name": "Munich" }, { "@type": "City", "name": "Cologne" },
    { "@type": "City", "name": "Frankfurt" }, { "@type": "City", "name": "Stuttgart" }, { "@type": "City", "name": "Dusseldorf" },
    { "@type": "City", "name": "Dortmund" }, { "@type": "City", "name": "Leipzig" }, { "@type": "City", "name": "Dresden" },
    { "@type": "City", "name": "Nuremberg" }, { "@type": "City", "name": "Hannover" }, { "@type": "City", "name": "Bonn" }, { "@type": "City", "name": "Bremen" },
    // --- Europe --
    { "@type": "City", "name": "Paris" }, { "@type": "City", "name": "Lyon" }, { "@type": "City", "name": "Marseille" },
    { "@type": "City", "name": "Nice" }, { "@type": "City", "name": "Bordeaux" }, { "@type": "City", "name": "Toulouse" },
    { "@type": "City", "name": "Amsterdam" }, { "@type": "City", "name": "Rotterdam" }, { "@type": "City", "name": "The Hague" },
    { "@type": "City", "name": "Utrecht" }, { "@type": "City", "name": "Madrid" }, { "@type": "City", "name": "Barcelona" },
    { "@type": "City", "name": "Valencia" }, { "@type": "City", "name": "Seville" }, { "@type": "City", "name": "Bilbao" },
    { "@type": "City", "name": "Rome" }, { "@type": "City", "name": "Milan" }, { "@type": "City", "name": "Naples" },
    { "@type": "City", "name": "Turin" }, { "@type": "City", "name": "Florence" }, { "@type": "City", "name": "Venice" },
    { "@type": "City", "name": "Zurich" }, { "@type": "City", "name": "Geneva" }, { "@type": "City", "name": "Bern" },
    { "@type": "City", "name": "Vienna" }, { "@type": "City", "name": "Brussels" }, { "@type": "City", "name": "Antwerp" },
    { "@type": "City", "name": "Oslo" }, { "@type": "City", "name": "Bergen" }, { "@type": "City", "name": "Stockholm" },
    { "@type": "City", "name": "Gothenburg" }, { "@type": "City", "name": "Malmo" }, { "@type": "City", "name": "Copenhagen" },
    { "@type": "City", "name": "Helsinki" }, { "@type": "City", "name": "Dublin" }, { "@type": "City", "name": "Cork" },
    { "@type": "City", "name": "Warsaw" }, { "@type": "City", "name": "Krakow" }, { "@type": "City", "name": "Wroclaw" },
    { "@type": "City", "name": "Gdansk" }, { "@type": "City", "name": "Prague" }, { "@type": "City", "name": "Brno" },
    { "@type": "City", "name": "Bucharest" }, { "@type": "City", "name": "Budapest" }, { "@type": "City", "name": "Sofia" },
    { "@type": "City", "name": "Athens" }, { "@type": "City", "name": "Lisbon" }, { "@type": "City", "name": "Porto" },
    { "@type": "City", "name": "Kyiv" }, { "@type": "City", "name": "Moscow" }, { "@type": "City", "name": "Saint Petersburg" },
    { "@type": "City", "name": "Reykjavik" }, { "@type": "City", "name": "Tallinn" }, { "@type": "City", "name": "Riga" },
    { "@type": "City", "name": "Vilnius" }, { "@type": "City", "name": "Bratislava" }, { "@type": "City", "name": "Ljubljana" },
    { "@type": "City", "name": "Zagreb" }, { "@type": "City", "name": "Sarajevo" }, { "@type": "City", "name": "Belgrade" },
    { "@type": "City", "name": "Skopje" }, { "@type": "City", "name": "Tirana" }, { "@type": "City", "name": "Minsk" },
    { "@type": "City", "name": "Luxembourg City" }, { "@type": "City", "name": "Ghent" },
    { "@type": "City", "name": "Aarhus" }, { "@type": "City", "name": "Espoo" }, { "@type": "City", "name": "Tampere" },
    { "@type": "City", "name": "Turku" }, { "@type": "City", "name": "Stavanger" }, { "@type": "City", "name": "Trondheim" },
    { "@type": "City", "name": "Uppsala" }, { "@type": "City", "name": "Link�ping" },
    // --- East Asia --
    { "@type": "City", "name": "Tokyo" }, { "@type": "City", "name": "Osaka" }, { "@type": "City", "name": "Kyoto" },
    { "@type": "City", "name": "Yokohama" }, { "@type": "City", "name": "Nagoya" }, { "@type": "City", "name": "Sapporo" },
    { "@type": "City", "name": "Fukuoka" }, { "@type": "City", "name": "Hiroshima" }, { "@type": "City", "name": "Sendai" },
    { "@type": "City", "name": "Kobe" }, { "@type": "City", "name": "Seoul" }, { "@type": "City", "name": "Busan" },
    { "@type": "City", "name": "Incheon" }, { "@type": "City", "name": "Daegu" }, { "@type": "City", "name": "Daejeon" },
    { "@type": "City", "name": "Beijing" }, { "@type": "City", "name": "Shanghai" }, { "@type": "City", "name": "Shenzhen" },
    { "@type": "City", "name": "Guangzhou" }, { "@type": "City", "name": "Chengdu" }, { "@type": "City", "name": "Hangzhou" },
    { "@type": "City", "name": "Wuhan" }, { "@type": "City", "name": "Chongqing" }, { "@type": "City", "name": "Nanjing" },
    { "@type": "City", "name": "Hong Kong" }, { "@type": "City", "name": "Taipei" }, { "@type": "City", "name": "Macau" },
    { "@type": "City", "name": "Tianjin" }, { "@type": "City", "name": "Dongguan" }, { "@type": "City", "name": "Zhengzhou" },
    // --- Southeast Asia --
    { "@type": "City", "name": "Bangkok" }, { "@type": "City", "name": "Chiang Mai" }, { "@type": "City", "name": "Phuket" },
    { "@type": "City", "name": "Kuala Lumpur" }, { "@type": "City", "name": "Penang" }, { "@type": "City", "name": "Johor Bahru" },
    { "@type": "City", "name": "Jakarta" }, { "@type": "City", "name": "Surabaya" }, { "@type": "City", "name": "Bandung" },
    { "@type": "City", "name": "Bali" }, { "@type": "City", "name": "Manila" }, { "@type": "City", "name": "Cebu" },
    { "@type": "City", "name": "Davao" }, { "@type": "City", "name": "Ho Chi Minh City" }, { "@type": "City", "name": "Hanoi" },
    { "@type": "City", "name": "Da Nang" }, { "@type": "City", "name": "Phnom Penh" }, { "@type": "City", "name": "Vientiane" },
    { "@type": "City", "name": "Yangon" }, { "@type": "City", "name": "Colombo" }, { "@type": "City", "name": "Male" },
    { "@type": "City", "name": "Dhaka" }, { "@type": "City", "name": "Chittagong" }, { "@type": "City", "name": "Sylhet" },
    { "@type": "City", "name": "Karachi" }, { "@type": "City", "name": "Lahore" }, { "@type": "City", "name": "Islamabad" },
    { "@type": "City", "name": "Faisalabad" }, { "@type": "City", "name": "Multan" }, { "@type": "City", "name": "Kathmandu" },
    // --- South America --
    { "@type": "City", "name": "Sao Paulo" }, { "@type": "City", "name": "Rio de Janeiro" }, { "@type": "City", "name": "Brasilia" },
    { "@type": "City", "name": "Salvador" }, { "@type": "City", "name": "Fortaleza" }, { "@type": "City", "name": "Belo Horizonte" },
    { "@type": "City", "name": "Curitiba" }, { "@type": "City", "name": "Porto Alegre" }, { "@type": "City", "name": "Manaus" },
    { "@type": "City", "name": "Recife" }, { "@type": "City", "name": "Buenos Aires" }, { "@type": "City", "name": "Cordoba" },
    { "@type": "City", "name": "Rosario" }, { "@type": "City", "name": "Santiago" }, { "@type": "City", "name": "Bogota" },
    { "@type": "City", "name": "Medellin" }, { "@type": "City", "name": "Cali" }, { "@type": "City", "name": "Lima" },
    { "@type": "City", "name": "Quito" }, { "@type": "City", "name": "Guayaquil" }, { "@type": "City", "name": "Caracas" },
    { "@type": "City", "name": "Montevideo" }, { "@type": "City", "name": "Asuncion" }, { "@type": "City", "name": "La Paz" },
    { "@type": "City", "name": "Panama City" }, { "@type": "City", "name": "Mexico City" }, { "@type": "City", "name": "Guadalajara" },
    { "@type": "City", "name": "Monterrey" }, { "@type": "City", "name": "Puebla" }, { "@type": "City", "name": "Cancun" },
    // --- Africa --
    { "@type": "City", "name": "Lagos" }, { "@type": "City", "name": "Abuja" }, { "@type": "City", "name": "Kano" },
    { "@type": "City", "name": "Ibadan" }, { "@type": "City", "name": "Port Harcourt" }, { "@type": "City", "name": "Nairobi" },
    { "@type": "City", "name": "Mombasa" }, { "@type": "City", "name": "Johannesburg" }, { "@type": "City", "name": "Cape Town" },
    { "@type": "City", "name": "Durban" }, { "@type": "City", "name": "Pretoria" }, { "@type": "City", "name": "Accra" },
    { "@type": "City", "name": "Kumasi" }, { "@type": "City", "name": "Addis Ababa" }, { "@type": "City", "name": "Dar es Salaam" },
    { "@type": "City", "name": "Kampala" }, { "@type": "City", "name": "Lusaka" }, { "@type": "City", "name": "Harare" },
    { "@type": "City", "name": "Khartoum" }, { "@type": "City", "name": "Casablanca" }, { "@type": "City", "name": "Rabat" },
    { "@type": "City", "name": "Marrakesh" }, { "@type": "City", "name": "Fes" }, { "@type": "City", "name": "Tangier" },
    { "@type": "City", "name": "Tunis" }, { "@type": "City", "name": "Algiers" }, { "@type": "City", "name": "Dakar" },
    { "@type": "City", "name": "Kinshasa" }, { "@type": "City", "name": "Luanda" }, { "@type": "City", "name": "Maputo" },
    { "@type": "City", "name": "Abidjan" }, { "@type": "City", "name": "Bamako" }, { "@type": "City", "name": "Ouagadougou" },
    { "@type": "City", "name": "Antananarivo" }, { "@type": "City", "name": "Benin City" }, { "@type": "City", "name": "Enugu" },
    // --- Central Asia --
    { "@type": "City", "name": "Tashkent" }, { "@type": "City", "name": "Samarkand" }, { "@type": "City", "name": "Almaty" },
    { "@type": "City", "name": "Nur-Sultan" }, { "@type": "City", "name": "Bishkek" }, { "@type": "City", "name": "Dushanbe" },
    { "@type": "City", "name": "Ashgabat" }, { "@type": "City", "name": "Baku" }, { "@type": "City", "name": "Tbilisi" },
    { "@type": "City", "name": "Yerevan" },
    // --- New Zealand --
    { "@type": "City", "name": "Auckland" }, { "@type": "City", "name": "Wellington" }, { "@type": "City", "name": "Christchurch" },
    { "@type": "City", "name": "Hamilton" }, { "@type": "City", "name": "Tauranga" }, { "@type": "City", "name": "Dunedin" },
    // --- South Africa --
    { "@type": "State", "name": "Gauteng" }, { "@type": "State", "name": "Western Cape" }, { "@type": "State", "name": "KwaZulu-Natal" },
    { "@type": "City", "name": "Port Elizabeth" }, { "@type": "City", "name": "Bloemfontein" }, { "@type": "City", "name": "East London" },
    // --- Singapore districts --
    { "@type": "City", "name": "Jurong" }, { "@type": "City", "name": "Tampines" }, { "@type": "City", "name": "Woodlands" },
    { "@type": "City", "name": "Changi" }, { "@type": "City", "name": "Marina Bay" }, { "@type": "City", "name": "Orchard Road" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [

      // ============================================================
      // 1. ORGANIZATION — Global Brand Entity
      // ============================================================
      {
        "@type": ["Organization", "Corporation"],
        "@id": ORG_ID,
        "name": "ChittorTech",
        "legalName": "ChittorTech IT Solutions",
        "url": SITE,
        "logo": {
          "@type": "ImageObject",
          "@id": LOGO_ID,
          "url": `${SITE}/icon.png`,
          "contentUrl": `${SITE}/icon.png`,
          "width": 512,
          "height": 512,
          "caption": "ChittorTech – Premier Offshore IT Agency Logo"
        },
        "image": { "@id": LOGO_ID },
        "description": "ChittorTech is India's leading offshore IT company and software development agency. We build premium web applications (Next.js/React), mobile apps (React Native/Kotlin), custom AI chatbots (OpenAI/Groq), SaaS platforms, and e-commerce systems for clients in USA, UK, Canada, UAE, Australia, Germany, Singapore, and Rajasthan.",
        "foundingDate": "2024",
        "foundingLocation": {
          "@type": "Place",
          "name": "Chittorgarh, Rajasthan, India"
        },
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "minValue": 5,
          "maxValue": 20
        },
        "slogan": "Best IT Company in Chittorgarh. Crafted for India. Built for the World.",
        "knowsAbout": [
          "Offshore Web Development",
          "Next.js Development",
          "React Development",
          "React Native Mobile Apps",
          "Kotlin Android Development",
          "Custom AI Chatbot Development",
          "RAG Systems",
          "SaaS Platform Development",
          "E-Commerce Development",
          "Staff Augmentation India",
          "Dedicated Developer Hiring",
          "Firebase Backend Development",
          "OpenAI GPT-4o Integration",
          "Groq SDK Integration",
          "LangChain Development",
          "Search Engine Optimization",
          "Technical SEO",
          "PageSpeed Optimization",
          "Generative Engine Optimization",
          "IT Internship Program Rajasthan"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "iStart Rajasthan – Q-Rate Recognized Startup",
            "credentialCategory": "Government Recognition",
            "recognizedBy": {
              "@type": "GovernmentOrganization",
              "name": "Department of IT & Communication, Government of Rajasthan",
              "url": "https://istart.rajasthan.gov.in"
            }
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "MSME Udyam Registration",
            "credentialCategory": "Government Certification",
            "recognizedBy": {
              "@type": "GovernmentOrganization",
              "name": "Ministry of Micro, Small & Medium Enterprises, Government of India"
            }
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/chittortech",
          "https://www.instagram.com/chittortech",
          "https://twitter.com/chittortech",
          "https://www.facebook.com/chittortech",
          "https://github.com/Sharmaji2516",
          "https://www.crunchbase.com/organization/chittortech"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-7597451057",
            "contactType": "customer service",
            "areaServed": ["IN", "US", "GB", "CA", "AE", "AU", "DE", "SG", "SA", "QA"],
            "availableLanguage": ["English", "Hindi"],
            "contactOption": "TollFree",
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "21:00"
            }
          },
          {
            "@type": "ContactPoint",
            "email": "contact@chittortech.online",
            "contactType": "sales",
            "areaServed": ["IN", "US", "GB", "CA", "AE", "AU", "DE", "SG", "SA", "QA"],
            "availableLanguage": ["English", "Hindi"]
          },
          {
            "@type": "ContactPoint",
            "url": "https://wa.me/917597451057",
            "contactType": "technical support",
            "areaServed": ["IN", "US", "GB", "CA", "AE", "AU"],
            "availableLanguage": ["English", "Hindi"]
          }
        ],
        "memberOf": [
          {
            "@type": "Organization",
            "name": "iStart Rajasthan",
            "url": "https://istart.rajasthan.gov.in"
          }
        ],
        "award": [
          "iStart Rajasthan Approved Startup",
          "MSME Udyam Certified Enterprise"
        ]
      },

      // ============================================================
      // 2. LOCAL BUSINESS — Maps / GMB / Location Entity
      // ============================================================
      {
        "@type": ["LocalBusiness", "ProfessionalService", "ITService"],
        "@id": LOCAL_ID,
        "name": "ChittorTech – Premier Offshore IT Agency & Software Development",
        "alternateName": [
          "ChittorTech IT Solutions",
          "Chittortech Software Company",
          "Best IT Company Chittorgarh",
          "Offshore Software Development India"
        ],
        "description": "ChittorTech is India's premier offshore IT agency and software development company serving global clients in the USA, UK, Canada, UAE, Australia, Germany, and Singapore. We specialize in Next.js web apps, React Native mobile apps, custom AI chatbots (OpenAI/Groq), SaaS platforms, e-commerce, and dedicated developer hiring. iStart Rajasthan approved, MSME certified.",
        "url": SITE,
        "image": [
          `${SITE}/ChittorTech%20Banner.png`,
          `${SITE}/icon.png`,
          `${SITE}/assets/chittortech_workplace.png`,
          `${SITE}/assets/hero_bg.png`
        ],
        "logo": `${SITE}/icon.png`,
        "telephone": "+91-7597451057",
        "email": "contact@chittortech.online",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Chittorgarh",
          "addressLocality": "Chittorgarh",
          "addressRegion": "Rajasthan",
          "postalCode": "312001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "24.8887",
          "longitude": "74.6269"
        },
        "hasMap": "https://maps.google.com/?q=Chittorgarh,Rajasthan,India",
        "areaServed": GLOBAL_AREA_SERVED,
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "21:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "10:00",
            "closes": "18:00"
          }
        ],
        "founder": { "@id": FOUNDER_ID },
        "employee": [
          { "@id": FOUNDER_ID },
          { "@id": CTO_ID }
        ],
        "parentOrganization": { "@id": ORG_ID },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "87",
          "reviewCount": "87"
        },
        "priceRange": "$$",
        "currenciesAccepted": "USD, GBP, EUR, AED, CAD, AUD, INR, SGD, SAR, QAR",
        "paymentAccepted": "Credit Card, Debit Card, Stripe, PayPal, Wire Transfer, SWIFT, UPI, Net Banking, NEFT, International Cards",
        "isAccessibleForFree": false,
        "knowsAbout": [
          "Offshore Web Development USA UK Canada",
          "Next.js Development Agency India",
          "React Native Mobile App India",
          "Custom AI Chatbot Development India",
          "SaaS Development India",
          "E-Commerce Development Rajasthan",
          "IT Staff Augmentation India",
          "Dedicated Remote Developer India"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "ChittorTech Global IT Services & Offshore Development Catalog",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Offshore Web App Development (Next.js / React)",
              "priceCurrency": ["USD", "GBP", "EUR", "AED", "CAD", "AUD", "INR"],
              "price": "500",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "500",
                "priceCurrency": "USD"
              },
              "availability": "https://schema.org/InStock",
              "itemOffered": {
                "@type": "Service",
                "name": "Offshore Web App Development (Next.js / React)",
                "description": "Custom ultra-fast web applications built with Next.js 16 App Router, React 19, Tailwind CSS v4 for USA, UK, Canada, UAE, Australia & European clients. Includes SSR, SSG, ISR, Firebase, Vercel deployment. Starting from $500 USD."
              }
            },
            {
              "@type": "Offer",
              "name": "Cross-Platform Mobile App (React Native / Kotlin)",
              "priceCurrency": ["USD", "GBP", "EUR", "AED", "CAD", "AUD", "INR"],
              "price": "1000",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "1000",
                "priceCurrency": "USD"
              },
              "availability": "https://schema.org/InStock",
              "itemOffered": {
                "@type": "Service",
                "name": "Cross-Platform Mobile App Engineering (React Native / Kotlin)",
                "description": "iOS & Android apps using React Native (Expo) and Kotlin Jetpack Compose. Firebase integration, push notifications, offline support, Play Store & App Store publishing. Starting from $1,000 USD."
              }
            },
            {
              "@type": "Offer",
              "name": "Custom AI & RAG Chatbot Solutions",
              "priceCurrency": ["USD", "GBP", "EUR", "AED", "CAD", "AUD", "INR"],
              "price": "800",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "800",
                "priceCurrency": "USD"
              },
              "availability": "https://schema.org/InStock",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom AI & RAG Solutions (OpenAI GPT-4o / Groq / Llama 3)",
                "description": "Bespoke AI chatbots, document Q&A engines, and LLM-powered business automation using OpenAI GPT-4o, Groq SDK, and Llama 3. Vector database (Pinecone, Supabase pgvector) and REST API integrations. Starting from $800 USD."
              }
            },
            {
              "@type": "Offer",
              "name": "SaaS MVP Development",
              "priceCurrency": ["USD", "GBP", "EUR", "AED", "CAD", "AUD", "INR"],
              "price": "1500",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "1500",
                "priceCurrency": "USD"
              },
              "availability": "https://schema.org/InStock",
              "itemOffered": {
                "@type": "Service",
                "name": "SaaS MVP Development",
                "description": "Full-stack multi-tenant SaaS platform with Stripe billing, role-based access control, admin dashboards, and analytics. Ideal for startup founders in the USA, UK, and Canada. Starting from $1,500 USD."
              }
            },
            {
              "@type": "Offer",
              "name": "International E-Commerce Development",
              "priceCurrency": ["USD", "GBP", "EUR", "AED", "CAD", "AUD", "INR"],
              "price": "700",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "700",
                "priceCurrency": "USD"
              },
              "availability": "https://schema.org/InStock",
              "itemOffered": {
                "@type": "Service",
                "name": "E-Commerce Solutions",
                "description": "Custom Next.js e-commerce with Stripe, PayPal, Razorpay, Cashfree payment gateways. Multi-currency support, inventory management, automated invoicing. Starting from $700 USD."
              }
            },
            {
              "@type": "Offer",
              "name": "Dedicated Remote Developers – Hourly",
              "priceCurrency": "USD",
              "price": "15",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "USD",
                "price": "15",
                "unitText": "HOUR"
              },
              "availability": "https://schema.org/InStock",
              "itemOffered": {
                "@type": "Service",
                "name": "Dedicated Remote Developers & Staff Augmentation",
                "description": "Hire expert Next.js, React, React Native, Kotlin, or AI developers from India. Hourly contracts from $15/hr, part-time from $800/month, full-time from $1,200/month. Daily standups, GitHub-based delivery, full source code ownership."
              }
            }
          ]
        }
      },

      // ============================================================
      // 3. WEBSITE — Search & Crawlability Entity
      // ============================================================
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        "url": SITE,
        "name": "ChittorTech – Offshore IT Agency India",
        "description": "ChittorTech official website — India's premier offshore software development agency serving USA, UK, UAE, Canada, Australia, Germany, and Singapore.",
        "publisher": { "@id": ORG_ID },
        "inLanguage": ["en-IN", "en-US", "en-GB", "hi-IN"],
        "copyrightYear": "2024",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${SITE}/search?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      },

      // ============================================================
      // 4. WEB PAGE — Home Page
      // ============================================================
      {
        "@type": "WebPage",
        "@id": `${SITE}/#webpage`,
        "url": SITE,
        "name": "ChittorTech | Premier Offshore IT Agency – Web, Mobile & AI Development India",
        "description": "ChittorTech is India's #1 offshore IT agency. Hire dedicated Next.js, React Native, AI developers from India. Serving USA, UK, Canada, UAE, Australia, Germany, Singapore.",
        "isPartOf": { "@id": WEBSITE_ID },
        "about": { "@id": LOCAL_ID },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${SITE}/ChittorTech%20Banner.png`,
          "width": 1200,
          "height": 630
        },
        "inLanguage": "en-IN",
        "breadcrumb": { "@id": `${SITE}/#breadcrumb` },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", ".hero-description"]
        }
      },

      // ============================================================
      // 5. BREADCRUMB LIST
      // ============================================================
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE}/#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE}/services` },
          { "@type": "ListItem", "position": 3, "name": "Projects", "item": `${SITE}/projects` },
          { "@type": "ListItem", "position": 4, "name": "About", "item": `${SITE}/about` },
          { "@type": "ListItem", "position": 5, "name": "Reviews", "item": `${SITE}/reviews` },
          { "@type": "ListItem", "position": 6, "name": "Contact", "item": `${SITE}/contact` },
          { "@type": "ListItem", "position": 7, "name": "Internship", "item": `${SITE}/internship` }
        ]
      },

      // ============================================================
      // 6. FOUNDERS — Person Entities
      // ============================================================
      {
        "@type": "Person",
        "@id": FOUNDER_ID,
        "name": "Kush Sharma",
        "givenName": "Kush",
        "familyName": "Sharma",
        "jobTitle": "Founder & CEO",
        "description": "Kush Sharma is the Founder and CEO of ChittorTech, Rajasthan's leading offshore IT startup. Expert full-stack engineer and AI systems architect specializing in Next.js, React, Firebase, OpenAI, Groq SDK, and LangChain.",
        "url": "https://www.linkedin.com/in/kush-sharma-chittortech/",
        "sameAs": [
          "https://www.linkedin.com/in/kush-sharma-chittortech/",
          "https://github.com/Sharmaji2516"
        ],
        "image": `${SITE}/assets/kush_sharma.jpg`,
        "worksFor": { "@id": ORG_ID },
        "knowsAbout": ["Next.js", "React", "Node.js", "Firebase", "OpenAI", "Groq SDK", "LangChain", "AI Development", "SaaS Architecture", "SEO"],
        "nationality": { "@type": "Country", "name": "India" }
      },
      {
        "@type": "Person",
        "@id": CTO_ID,
        "name": "Lav Sharma",
        "givenName": "Lav",
        "familyName": "Sharma",
        "jobTitle": "Co-Founder & CTO",
        "description": "Lav Sharma is the Co-Founder and CTO of ChittorTech. Lead Mobile & Cloud Infrastructure Engineer with deep expertise in React Native (Expo), Kotlin Jetpack Compose, Firebase, and AWS.",
        "image": `${SITE}/assets/lav_sharma.jpg`,
        "worksFor": { "@id": ORG_ID },
        "knowsAbout": ["React Native", "Kotlin", "Jetpack Compose", "Firebase", "AWS", "Android Development", "iOS Development", "Cloud Infrastructure"],
        "nationality": { "@type": "Country", "name": "India" }
      },

      // ============================================================
      // 7. SERVICE SCHEMAS — Domestic (Rajasthan/India)
      // ============================================================
      {
        "@type": ["Service", "ProfessionalService"],
        "@id": `${SITE}/#service-web-rajasthan`,
        "name": "Premium Web & E-Commerce Development in Rajasthan",
        "serviceType": "Web Development",
        "provider": { "@id": LOCAL_ID },
        "areaServed": [
          { "@type": "State", "name": "Rajasthan" },
          { "@type": "City", "name": "Chittorgarh" },
          { "@type": "City", "name": "Udaipur" },
          { "@type": "City", "name": "Jaipur" },
          { "@type": "City", "name": "Bhilwara" },
          { "@type": "City", "name": "Jodhpur" },
          { "@type": "City", "name": "Kota" },
          { "@type": "City", "name": "Ajmer" }
        ],
        "description": "High-performance business websites, SaaS platforms, and e-commerce systems using Next.js 16, React 19, Tailwind CSS, Node.js & Firebase. Tailored for local businesses across Rajasthan.",
        "url": `${SITE}/services`,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "15000",
          "priceSpecification": { "@type": "PriceSpecification", "minPrice": "15000", "priceCurrency": "INR" },
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": ["Service", "ProfessionalService"],
        "@id": `${SITE}/#service-mobile-india`,
        "name": "Mobile App Development (React Native & Kotlin) – India",
        "serviceType": "Mobile Application Development",
        "provider": { "@id": LOCAL_ID },
        "areaServed": [
          { "@type": "Country", "name": "India" },
          { "@type": "State", "name": "Rajasthan" }
        ],
        "description": "Fluid native and cross-platform mobile apps for iOS and Android built on React Native Expo and Kotlin Jetpack Compose. Fast delivery, offline support, clean UI for Indian businesses.",
        "url": `${SITE}/services`
      },
      {
        "@type": ["Service", "ProfessionalService"],
        "@id": `${SITE}/#service-seo-rajasthan`,
        "name": "SEO & Digital Marketing for Rajasthan Businesses",
        "serviceType": "Search Engine Optimization",
        "provider": { "@id": LOCAL_ID },
        "areaServed": [
          { "@type": "State", "name": "Rajasthan" },
          { "@type": "City", "name": "Chittorgarh" },
          { "@type": "City", "name": "Udaipur" },
          { "@type": "City", "name": "Jaipur" },
          { "@type": "City", "name": "Bhilwara" }
        ],
        "description": "Technical SEO, PageSpeed optimization, Google My Business setup, schema implementation, and local search ranking strategies to make Rajasthan businesses rank #1 on Google.",
        "url": `${SITE}/services`
      },

      // ============================================================
      // 8. SERVICE SCHEMAS — International / Offshore
      // ============================================================
      {
        "@type": ["Service", "ProfessionalService"],
        "@id": `${SITE}/#service-offshore-web`,
        "name": "Offshore Web Development for USA, UK, Canada & Europe",
        "serviceType": "Offshore Software Development",
        "provider": { "@id": LOCAL_ID },
        "areaServed": GLOBAL_AREA_SERVED,
        "description": "ChittorTech delivers world-class offshore web application development for international clients. Fixed-price or hourly contracts starting from $500 USD. Tech stack: Next.js 16, React 19, Node.js, Firebase, Vercel.",
        "url": `${SITE}/contact`,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "500",
          "priceSpecification": { "@type": "PriceSpecification", "minPrice": "500", "priceCurrency": "USD" },
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": ["Service", "ProfessionalService"],
        "@id": `${SITE}/#service-offshore-mobile`,
        "name": "Offshore Mobile App Development for USA, UAE & Australia",
        "serviceType": "Offshore Mobile App Development",
        "provider": { "@id": LOCAL_ID },
        "areaServed": GLOBAL_AREA_SERVED,
        "description": "Cross-platform iOS & Android app development using React Native (Expo) and Kotlin for international clients. Play Store & App Store publishing included. Starting from $1,000 USD.",
        "url": `${SITE}/contact`,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "1000",
          "priceSpecification": { "@type": "PriceSpecification", "minPrice": "1000", "priceCurrency": "USD" },
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": ["Service", "ProfessionalService"],
        "@id": `${SITE}/#service-ai-global`,
        "name": "Custom AI Chatbot & RAG Development – Global",
        "serviceType": "Artificial Intelligence Solutions",
        "provider": { "@id": LOCAL_ID },
        "areaServed": GLOBAL_AREA_SERVED,
        "description": "Bespoke AI chatbots, RAG (Retrieval-Augmented Generation) document engines, and LLM-powered automation using OpenAI GPT-4o, Groq, and Llama 3. Serving Dubai, USA, UK, Canada, Singapore, and Australia clients. Starting from $800 USD.",
        "url": `${SITE}/contact`,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "800",
          "priceSpecification": { "@type": "PriceSpecification", "minPrice": "800", "priceCurrency": "USD" },
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": ["Service", "ProfessionalService"],
        "@id": `${SITE}/#service-saas-global`,
        "name": "SaaS MVP Development for USA & UK Startups",
        "serviceType": "SaaS Development",
        "provider": { "@id": LOCAL_ID },
        "areaServed": GLOBAL_AREA_SERVED,
        "description": "Full-stack multi-tenant SaaS platforms with Stripe billing, RBAC, admin dashboards, analytics. Ideal for USA/UK/Canada startup founders. Starting from $1,500 USD.",
        "url": `${SITE}/contact`,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "1500",
          "priceSpecification": { "@type": "PriceSpecification", "minPrice": "1500", "priceCurrency": "USD" },
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": ["Service", "ProfessionalService"],
        "@id": `${SITE}/#service-ecommerce-global`,
        "name": "International E-Commerce Development – Stripe, PayPal, Multi-Currency",
        "serviceType": "E-Commerce Development",
        "provider": { "@id": LOCAL_ID },
        "areaServed": GLOBAL_AREA_SERVED,
        "description": "International online stores with Stripe, PayPal, Razorpay, Cashfree. Multi-currency and multi-language support for UAE, Australian, USA, UK markets. Starting from $700 USD.",
        "url": `${SITE}/contact`,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "700",
          "priceSpecification": { "@type": "PriceSpecification", "minPrice": "700", "priceCurrency": "USD" },
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": ["Service", "ProfessionalService"],
        "@id": `${SITE}/#service-staff-augmentation`,
        "name": "Dedicated Remote Developers & IT Staff Augmentation – India",
        "serviceType": "IT Staff Augmentation",
        "provider": { "@id": LOCAL_ID },
        "areaServed": { "@type": "Place", "name": "World" },
        "description": "Hire dedicated Next.js, React, React Native, Kotlin, or AI developers from ChittorTech India on hourly ($15/hr USD) or monthly contracts ($800–$1,200/month). Daily standups, GitHub delivery, full source code ownership.",
        "url": `${SITE}/contact`,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "15",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "priceCurrency": "USD",
            "price": "15",
            "unitText": "HOUR"
          },
          "availability": "https://schema.org/InStock"
        }
      },

      // ============================================================
      // 9. PORTFOLIO — Item List
      // ============================================================
      {
        "@type": "ItemList",
        "@id": `${SITE}/#portfolio`,
        "name": "ChittorTech Portfolio – Recent Projects",
        "description": "Selected project case studies delivered by ChittorTech for clients across India and internationally.",
        "url": `${SITE}/projects`,
        "numberOfItems": 6,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "CreativeWork",
              "name": "Mewari Special Achaar – NRI Pickle E-Commerce Store",
              "description": "Authentic Rajasthani pickle e-commerce platform with international shipping, Firebase OTP auth, WhatsApp ordering, multi-language support, and 100/100 PageSpeed scores.",
              "url": "https://www.mewari-achar.shop",
              "creator": { "@id": ORG_ID }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "CreativeWork",
              "name": "Shaadi Sutra – Wedding Venue Discovery Platform",
              "description": "Next.js wedding venue marketplace with Firebase backend, real-time search, and multi-vendor listing for Rajasthan.",
              "creator": { "@id": ORG_ID }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "CreativeWork",
              "name": "Hotel & Resort Website – Hospitality Portal",
              "description": "Premium hotel website with booking integration, responsive design, multilingual support, and Google Analytics/Maps integration.",
              "creator": { "@id": ORG_ID }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "CreativeWork",
              "name": "Jain Dharamshala Management System",
              "description": "Custom web portal for religious guest house management with room booking, visitor management, and Firebase backend.",
              "creator": { "@id": ORG_ID }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "CreativeWork",
              "name": "ChittorTech AI Internship Certificate Analyzer",
              "description": "RAG-powered AI document analyzer using Groq + pdfjs-dist + Firebase with automated certificate generation via jsPDF.",
              "creator": { "@id": ORG_ID }
            }
          },
          {
            "@type": "ListItem",
            "position": 6,
            "item": {
              "@type": "CreativeWork",
              "name": "Mehndi Artist Portfolio & Booking Website",
              "description": "Premium portfolio website for a professional Mehndi artist with gallery, booking form, and top-3 Google ranking for local keywords.",
              "creator": { "@id": ORG_ID }
            }
          }
        ]
      },

      // ============================================================
      // 10. REVIEWS — Individual Review Entities
      // ============================================================
      {
        "@type": "Review",
        "@id": `${SITE}/#review-1`,
        "itemReviewed": { "@id": LOCAL_ID },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "author": { "@type": "Person", "name": "Startup Founder, San Francisco USA" },
        "reviewBody": "ChittorTech delivered our Next.js web app faster than any agency we'd worked with before. The code quality was exceptional and they were available every day for standups. Highly recommend for any US startup looking to outsource development to India."
      },
      {
        "@type": "Review",
        "@id": `${SITE}/#review-2`,
        "itemReviewed": { "@id": LOCAL_ID },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "author": { "@type": "Person", "name": "E-Commerce Entrepreneur, Dubai UAE" },
        "reviewBody": "We hired ChittorTech as our dedicated development partner for 6 months. Transparent communication, milestone-based delivery, and excellent quality. Our Stripe-integrated online store launched on time and works flawlessly."
      },
      {
        "@type": "Review",
        "@id": `${SITE}/#review-3`,
        "itemReviewed": { "@id": LOCAL_ID },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "author": { "@type": "Person", "name": "SaaS Founder, London UK" },
        "reviewBody": "The AI chatbot they built for us handles 80% of customer queries automatically. Our support team now focuses only on complex issues. ChittorTech's RAG implementation was flawless — OpenAI GPT-4o with our custom knowledge base."
      },
      {
        "@type": "Review",
        "@id": `${SITE}/#review-4`,
        "itemReviewed": { "@id": LOCAL_ID },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "author": { "@type": "Person", "name": "Hotel Owner, Udaipur Rajasthan" },
        "reviewBody": "Best IT company in Chittorgarh, no doubt. They built our hotel website with online booking and it now gets 3x more direct bookings than before. Highly recommended for any Rajasthan business."
      },
      {
        "@type": "Review",
        "@id": `${SITE}/#review-5`,
        "itemReviewed": { "@id": LOCAL_ID },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "author": { "@type": "Person", "name": "Health App Founder, Toronto Canada" },
        "reviewBody": "ChittorTech built our React Native app for both iOS and Android in just 6 weeks. We launched on the Play Store with zero critical bugs. Kush and Lav are outstanding engineers — best offshore agency we've ever worked with."
      },

      // ============================================================
      // 11. FAQ PAGE — Exhaustive Q&A for Local + International SEO
      // ============================================================
      {
        "@type": "FAQPage",
        "@id": `${SITE}/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which is the best IT company in Chittorgarh?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ChittorTech is the best IT company in Chittorgarh, Rajasthan. We specialize in premium web development, mobile app engineering, SaaS platforms, custom AI chatbots, and digital marketing. We are an iStart Rajasthan approved and MSME registered IT startup with 87+ successful projects and a 5.0/5.0 star rating."
            }
          },
          {
            "@type": "Question",
            "name": "Which is the best web development company in Udaipur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ChittorTech is the top-rated web development company serving Udaipur. We build high-performance business websites, e-commerce platforms, and SaaS applications for Udaipur hotels, businesses, and startups using Next.js and React."
            }
          },
          {
            "@type": "Question",
            "name": "Which is the best IT company in Bhilwara?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ChittorTech is the leading IT agency serving businesses in Bhilwara, Rajasthan. We help Bhilwara textile businesses, hotels, and startups build premium websites, mobile apps, and digital marketing campaigns."
            }
          },
          {
            "@type": "Question",
            "name": "Does ChittorTech offer mobile app development in Rajasthan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, ChittorTech offers full-stack mobile app development across Rajasthan, including React Native (Expo) cross-platform apps and native Kotlin Android apps. We serve clients in Chittorgarh, Udaipur, Jaipur, Bhilwara, Jodhpur, Kota, and across India."
            }
          },
          {
            "@type": "Question",
            "name": "What is the cost of website development in Chittorgarh?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ChittorTech offers premium website development in Chittorgarh starting from ₹15,000 INR for a basic business website. Custom e-commerce portals start from ₹35,000 INR and SaaS platforms from ₹75,000 INR. Contact us at +91 7597451057 for a free quote."
            }
          },
          {
            "@type": "Question",
            "name": "Is ChittorTech approved by iStart Rajasthan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, ChittorTech is an officially approved startup under the iStart Rajasthan program (Q-Rate Status) and is also registered as an MSME. This makes us a government-recognized, reliable IT partner for businesses in Rajasthan and international clients."
            }
          },
          {
            "@type": "Question",
            "name": "Can ChittorTech build web and mobile apps for clients in the USA and UK?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. ChittorTech is a premier offshore software development agency actively serving international clients in the USA, United Kingdom, Canada, UAE (Dubai & Abu Dhabi), Australia, Germany, Singapore, Saudi Arabia, and Qatar. We offer fixed-price project contracts starting from $500 USD, hourly developer hiring from $15/hr USD, and transparent GitHub-based delivery."
            }
          },
          {
            "@type": "Question",
            "name": "How can I hire a dedicated Next.js or React Native developer from India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ChittorTech offers dedicated developer hiring for international clients. Hire expert Next.js, React, React Native, Kotlin, or AI developers on hourly ($15/hr), part-time ($800/month), or full-time ($1,200/month) contracts. WhatsApp us at +91 7597451057 or email contact@chittortech.online to start."
            }
          },
          {
            "@type": "Question",
            "name": "Does ChittorTech develop AI chatbots for businesses in Dubai and UAE?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. ChittorTech builds custom AI chatbots and RAG systems for businesses in Dubai, Abu Dhabi, Sharjah, and across the UAE. We use OpenAI GPT-4o, Groq, and Llama 3. Starting from $800 USD, these can be integrated into your website, WhatsApp Business, or CRM."
            }
          },
          {
            "@type": "Question",
            "name": "What are the pricing models for outsourcing software development to ChittorTech?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ChittorTech offers three engagement models: (1) Fixed Price – starting from $500 USD for websites, (2) Hourly Developer Hire – starting from $15/hr USD, and (3) Monthly Retainer – full-time dedicated developer from $1,200/month. All include free consultation, transparent milestones, and full source code ownership transferred to the client."
            }
          },
          {
            "@type": "Question",
            "name": "What technologies does ChittorTech use for development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ChittorTech uses Next.js 16, React 19, Tailwind CSS v4, Node.js, Firebase Firestore, MongoDB Atlas, Supabase, PostgreSQL, React Native (Expo), Kotlin Jetpack Compose, OpenAI GPT-4o, Groq SDK, LangChain.js, Pinecone, Stripe, PayPal, Razorpay, Vercel, and AWS."
            }
          },
          {
            "@type": "Question",
            "name": "Does ChittorTech offer IT internships in Rajasthan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, ChittorTech offers hands-on IT internship programs for students across Rajasthan. Interns work on real client projects in Next.js, React Native, Firebase, and AI development. They earn a blockchain-verified digital internship certificate. Apply at https://www.chittortech.online/internship/apply."
            }
          },
          {
            "@type": "Question",
            "name": "Can ChittorTech build a SaaS product for my startup in Canada or Australia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. ChittorTech specializes in SaaS MVP development for international startup founders. We build multi-tenant SaaS platforms with Stripe billing, admin dashboards, RBAC, and analytics starting from $1,500 USD. We have delivered SaaS products for clients in the USA, UK, Canada, and Australia."
            }
          },
          {
            "@type": "Question",
            "name": "Does ChittorTech accept payments in USD, GBP, EUR, and AED?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. ChittorTech accepts payments in USD, GBP, EUR, AED, CAD, AUD, SGD, and INR. We support international wire transfer (SWIFT), PayPal, Stripe (credit/debit cards), and cryptocurrency (Bitcoin, USDT) for international clients."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to build a web app or mobile app with ChittorTech?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A business website typically takes 1–2 weeks. A mobile app MVP takes 3–6 weeks. A full SaaS platform takes 6–12 weeks. We provide exact timelines and milestone breakdowns in our free project proposal."
            }
          },
          {
            "@type": "Question",
            "name": "Does ChittorTech sign NDAs for international client projects?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. ChittorTech signs mutual NDAs before project kickoff on request. All project details, business logic, and source code remain strictly confidential. We also transfer 100% source code ownership to the client upon final payment — no vendor lock-in."
            }
          },
          {
            "@type": "Question",
            "name": "Which is the best IT outsourcing company in India for small businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ChittorTech is one of the best IT outsourcing companies in India for small and medium businesses internationally. We offer flexible pricing starting from $500 USD, transparent communication, and agile delivery — making us ideal for startups and small businesses in the USA, UK, UAE, Canada, and Australia."
            }
          },
          {
            "@type": "Question",
            "name": "Does ChittorTech handle Google Play Store and Apple App Store submissions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, full Play Store and App Store publishing support is included in all mobile app projects at no extra charge. We handle the entire submission process, screenshots, metadata, and initial review communication."
            }
          },
          {
            "@type": "Question",
            "name": "Can ChittorTech optimize my existing website for PageSpeed Insights?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. ChittorTech provides comprehensive technical SEO and performance optimization services. We consistently achieve 95–100/100 scores on Google PageSpeed Insights (both Mobile and Desktop), 100/100 Best Practices, 100/100 SEO, and 3/3 Agentic Browsing."
            }
          },
          {
            "@type": "Question",
            "name": "How do I contact ChittorTech for a project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can contact ChittorTech via: WhatsApp (+91 7597451057), Email (contact@chittortech.online), or the Contact Form at https://www.chittortech.online/contact. We respond within 2 hours during IST business hours (9 AM – 9 PM IST, Monday–Saturday)."
            }
          }
        ]
      },

      // ============================================================
      // 12. INTERNSHIP COURSE SCHEMA
      // ============================================================
      {
        "@type": "Course",
        "@id": `${SITE}/#internship-course`,
        "name": "IT Internship Program – Web, Mobile & AI Development",
        "description": "ChittorTech's hands-on IT internship program in Chittorgarh, Rajasthan. Work on real client projects in Next.js, React Native, Node.js, Firebase, and AI development. Earn a verified, blockchain-backed digital internship certificate.",
        "provider": { "@id": ORG_ID },
        "url": `${SITE}/internship`,
        "inLanguage": ["en-IN", "hi-IN"],
        "courseCode": "CT-INTERN-2025",
        "coursePrerequisites": "Basic programming knowledge (any language)",
        "educationalLevel": "Beginner to Intermediate",
        "teaches": ["Next.js", "React", "React Native", "Firebase", "Node.js", "OpenAI API", "Groq SDK", "Git & GitHub", "Vercel Deployment"],
        "timeRequired": "P1M",
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "ONLINE",
          "courseWorkload": "P5D",
          "instructor": { "@id": FOUNDER_ID },
          "location": {
            "@type": "VirtualLocation",
            "url": SITE
          }
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "0",
          "availability": "https://schema.org/InStock",
          "validFrom": "2025-01-01"
        }
      },

      // ============================================================
      // 13. CONTACT PAGE
      // ============================================================
      {
        "@type": "ContactPage",
        "@id": `${SITE}/contact#webpage`,
        "url": `${SITE}/contact`,
        "name": "Contact ChittorTech – Hire Offshore Developers & Get a Free Quote",
        "description": "Contact ChittorTech for a free project consultation. Hire dedicated Next.js, React Native, AI developers from India. We serve USA, UK, Canada, UAE, Australia, Germany, and Singapore.",
        "isPartOf": { "@id": WEBSITE_ID },
        "inLanguage": "en-IN"
      },

      // ============================================================
      // 14. SITE NAVIGATION ELEMENT — Sitelinks Schema
      // ============================================================
      {
        "@type": "SiteLinksSearchBox",
        "@id": `${SITE}/#sitelinks-searchbox`,
        "url": SITE,
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${SITE}/search?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ItemList",
        "@id": `${SITE}/#site-navigation`,
        "name": "ChittorTech Site Navigation",
        "description": "Primary navigation links for ChittorTech website",
        "itemListElement": [
          {
            "@type": "SiteLinksSearchBox",
            "name": "Home",
            "url": SITE
          },
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Services – Web, Mobile, AI, SaaS, E-Commerce",
            "url": `${SITE}/services`,
            "item": `${SITE}/services`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projects – Portfolio of Delivered Work",
            "url": `${SITE}/projects`,
            "item": `${SITE}/projects`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "About – ChittorTech Company Story",
            "url": `${SITE}/about`,
            "item": `${SITE}/about`
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Reviews – Client Testimonials & Ratings",
            "url": `${SITE}/reviews`,
            "item": `${SITE}/reviews`
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Contact – Get a Free Project Quote",
            "url": `${SITE}/contact`,
            "item": `${SITE}/contact`
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Internship – Apply for IT Internship Rajasthan",
            "url": `${SITE}/internship`,
            "item": `${SITE}/internship`
          }
        ]
      },

      // ============================================================
      // 15. HOW-TO SCHEMA — How to Hire a Developer from ChittorTech
      // ============================================================
      {
        "@type": "HowTo",
        "@id": `${SITE}/#howto-hire`,
        "name": "How to Hire a Dedicated Developer from ChittorTech India",
        "description": "Step-by-step guide for international clients (USA, UK, UAE, Canada, Australia) to hire a dedicated Next.js, React Native, or AI developer from ChittorTech India.",
        "totalTime": "P2D",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "15"
        },
        "supply": [
          {
            "@type": "HowToSupply",
            "name": "Project requirements document or brief description"
          },
          {
            "@type": "HowToSupply",
            "name": "Budget range in USD or preferred currency"
          }
        ],
        "tool": [
          {
            "@type": "HowToTool",
            "name": "WhatsApp (+91 7597451057) or Email (contact@chittortech.online)"
          }
        ],
        "step": [
          {
            "@type": "HowToStep",
            "position": "1",
            "name": "Contact ChittorTech",
            "text": "Send a WhatsApp message to +91 7597451057 or email contact@chittortech.online with your project description, requirements, preferred tech stack, and budget range.",
            "url": `${SITE}/contact`,
            "image": `${SITE}/icon.png`
          },
          {
            "@type": "HowToStep",
            "position": "2",
            "name": "Receive Free Technical Proposal",
            "text": "ChittorTech will analyze your requirements and send a detailed proposal within 24 hours including tech stack, feature breakdown, timeline estimate, and fixed-price or hourly quote.",
            "url": `${SITE}/contact`
          },
          {
            "@type": "HowToStep",
            "position": "3",
            "name": "Sign Agreement & NDA",
            "text": "Review and sign a simple contract/SOW. NDA is available on request. Pay 30–50% advance via PayPal, Stripe, or international wire transfer.",
            "url": `${SITE}/contact`
          },
          {
            "@type": "HowToStep",
            "position": "4",
            "name": "Development Starts with Daily Standups",
            "text": "Development begins immediately. You receive daily standup updates, GitHub access, and staging environment links after each sprint for real-time review.",
            "url": `${SITE}/contact`
          },
          {
            "@type": "HowToStep",
            "position": "5",
            "name": "Testing, Launch & Code Delivery",
            "text": "Final QA, performance optimization (Lighthouse 95+), and production deployment. Full source code transferred via GitHub. 15 days of free post-launch support included.",
            "url": `${SITE}/contact`
          }
        ]
      },

      // ============================================================
      // 16. HOW-TO SCHEMA — How to Outsource Web Development to India
      // ============================================================
      {
        "@type": "HowTo",
        "@id": `${SITE}/#howto-outsource`,
        "name": "How to Outsource Web Development to India (ChittorTech)",
        "description": "A proven 5-step guide for USA, UK, Canada, UAE and Australian businesses to successfully outsource web and mobile app development to ChittorTech India.",
        "totalTime": "P7D",
        "step": [
          {
            "@type": "HowToStep",
            "position": "1",
            "name": "Define Your Project Scope",
            "text": "Write down what you want to build — website, mobile app, SaaS, AI chatbot, or e-commerce. Note key features, preferred tech, and your budget in USD."
          },
          {
            "@type": "HowToStep",
            "position": "2",
            "name": "Contact ChittorTech for a Free Consultation",
            "text": "Reach out via WhatsApp (+91 7597451057) or email (contact@chittortech.online). We respond within 2 hours during IST business hours (9 AM – 9 PM IST, Mon–Sat)."
          },
          {
            "@type": "HowToStep",
            "position": "3",
            "name": "Review Proposal & Sign Agreement",
            "text": "Receive a detailed proposal with milestones. Sign an SOW (Statement of Work). NDA available. Pay advance via PayPal, Stripe, or wire transfer."
          },
          {
            "@type": "HowToStep",
            "position": "4",
            "name": "Monitor Agile Development Sprints",
            "text": "Review sprint deliverables every week on a live staging URL. See all code progress via GitHub. Daily standup messages keep you informed."
          },
          {
            "@type": "HowToStep",
            "position": "5",
            "name": "Launch, Own & Scale",
            "text": "After final QA and launch, receive 100% source code ownership. Continue with a monthly maintenance retainer or add new features as needed."
          }
        ]
      },

      // ============================================================
      // 17. AGGREGATE OFFER — Engagement Pricing Table
      // ============================================================
      {
        "@type": "Product",
        "@id": `${SITE}/#service-product-offshore`,
        "name": "ChittorTech Offshore IT Development Services",
        "brand": { "@id": ORG_ID },
        "description": "Full range of offshore IT services from ChittorTech India — web development, mobile apps, AI, SaaS, e-commerce, and dedicated developers. Serving USA, UK, UAE, Canada, Australia.",
        "category": "Software Development Services",
        "offers": [
          {
            "@type": "Offer",
            "name": "Business Website (Next.js)",
            "price": "500",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "seller": { "@id": ORG_ID }
          },
          {
            "@type": "Offer",
            "name": "Mobile App MVP (React Native)",
            "price": "1000",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "seller": { "@id": ORG_ID }
          },
          {
            "@type": "Offer",
            "name": "AI Chatbot (OpenAI / Groq)",
            "price": "800",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "seller": { "@id": ORG_ID }
          },
          {
            "@type": "Offer",
            "name": "SaaS MVP Platform",
            "price": "1500",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "seller": { "@id": ORG_ID }
          },
          {
            "@type": "Offer",
            "name": "Dedicated Developer – Hourly",
            "price": "15",
            "priceCurrency": "USD",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "priceCurrency": "USD",
              "price": "15",
              "unitText": "HOUR"
            },
            "availability": "https://schema.org/InStock",
            "seller": { "@id": ORG_ID }
          },
          {
            "@type": "Offer",
            "name": "Dedicated Developer – Monthly Retainer",
            "price": "1200",
            "priceCurrency": "USD",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "priceCurrency": "USD",
              "price": "1200",
              "unitText": "MON"
            },
            "availability": "https://schema.org/InStock",
            "seller": { "@id": ORG_ID }
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "87",
          "bestRating": "5"
        }
      }

    ]
  };

  return (
    <script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
