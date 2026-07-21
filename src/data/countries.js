import angliaRuskin from '../assets/Anglia Ruskin University.png';
import birminghamCity from '../assets/Birmingham City University.png';
import coventry from '../assets/Coventry University.png';
import deMontfort from '../assets/De Montfort University.png';
import middlesex from '../assets/Middlesex University London.png';
import northumbria from '../assets/Northumbria University.png';
import bedfordshire from '../assets/University of Bedfordshire.png';
import derby from '../assets/University of Derby.png';
import eastLondon from '../assets/University of East London (UEL).png';
import essex from '../assets/University of Essex.png';
import greenwich from '../assets/University of Greenwich.png';
import hertfordshire from '../assets/University of Hertfordshire.png';
import portsmouth from '../assets/University of Portsmouth.png';
import sunderland from '../assets/University of Sunderland.png';
import westLondon from '../assets/University of West London.png';
import harvard from '../assets/Harvard University.png';
import mit from '../assets/Massachusetts Institute of Technology.png';
import berkeley from '../assets/University of California, Berkeley.png';
import columbia from '../assets/Columbia University.png';
import yale from '../assets/Yale University.png';
import princeton from '../assets/Princeton University.png';
import chicago from '../assets/University of Chicago.png';
import toronto from '../assets/University of Toronto.png';
import britishColumbia from '../assets/University of British Columbia.png';
import mcgill from '../assets/McGill University.png';
import waterloo from '../assets/University of Waterloo.png';
import alberta from '../assets/University of Alberta.png';
import montreal from '../assets/Université de Montréal.png';
import mcmaster from '../assets/McMaster University.png';
import calgary from '../assets/University of Calgary.png';
import trinityCollegeDublin from '../assets/Trinity College Dublin.png';
import universityCollegeDublin from '../assets/University College Dublin.png';
import universityOfGalway from '../assets/University of Galway.png';
import universityCollegeCork from '../assets/University College Cork.png';
import dublinCityUniversity from '../assets/Dublin City University.png';
import universityOfLimerick from '../assets/University of Limerick.png';
import maynoothUniversity from '../assets/Maynooth University.png';
import technologicalUniversityDublin from '../assets/Technological University Dublin.png';
import melbourne from '../assets/University of Melbourne.png';
import sydney from '../assets/University of Sydney.png';
import unsw from '../assets/UNSW Sydney.png';
import australianNational from '../assets/Australian National University.png';
import monash from '../assets/Monash University.png';
import queensland from '../assets/University of Queensland.png';
import adelaide from '../assets/University of Adelaide.png';
import technologySydney from '../assets/University of Technology Sydney.png';
import auckland from '../assets/University of Auckland.png';
import otago from '../assets/University of Otago.png';
import victoriaWellington from '../assets/Victoria University of Wellington.png';
import canterbury from '../assets/University of Canterbury.png';
import massey from '../assets/Massey University.png';
import waikato from '../assets/University of Waikato.png';
import lincoln from '../assets/Lincoln University.png';
import aut from '../assets/Auckland University of Technology.png';

// Germany
import technicalUniversityMunich from '../assets/Technical University of Munich.png';
import ludwigMaximilianMunich from '../assets/Ludwig Maximilian University of Munich.png';
import heidelberg from '../assets/Heidelberg University.png';
import rwthAachen from '../assets/RWTH Aachen University.png';
import humboldtBerlin from '../assets/Humboldt University of Berlin.png';
import freeBerlin from '../assets/Free University of Berlin.png';
import stuttgart from '../assets/University of Stuttgart.png';
import technicalBerlin from '../assets/Technical University of Berlin.png';

// France
import sorbonne from '../assets/Sorbonne University.png';
import psl from "../assets/Université PSL (Paris Sciences et Lettres).png";
import ecolePolytechnique from "../assets/École Polytechnique.png";
import hecParis from '../assets/HEC Paris.png';
import essec from '../assets/ESSEC Business School.png';
import parisSaclay from '../assets/Université Paris-Saclay.png';
import insead from '../assets/INSEAD.png';
import grenobleAlpes from '../assets/Université Grenoble Alpes.png';

// Sweden
import lund from '../assets/Lund University.png';
import uppsala from '../assets/Uppsala University.png';
import stockholm from '../assets/Stockholm University.png';
import kth from '../assets/KTH Royal Institute of Technology.png';
import chalmers from '../assets/Chalmers University of Technology.png';
import gothenburg from '../assets/University of Gothenburg.png';
import linkoping from '../assets/Linköping University.png';
import slu from '../assets/Swedish University of Agricultural Sciences.png';

// Finland
import helsinki from '../assets/University of Helsinki.png';
import aalto from '../assets/Aalto University.png';
import turku from '../assets/University of Turku.png';
import tampere from '../assets/Tampere University.png';
import oulu from '../assets/University of Oulu.png';
import easternFinland from '../assets/University of Eastern Finland.png';
import lut from '../assets/LUT University.png';
import aboAkademi from '../assets/Åbo Akademi University.png';

// Italy
import bologna from '../assets/University of Bologna.png';
import sapienza from '../assets/Sapienza University of Rome.png';
import politecnicoMilano from '../assets/Politecnico di Milano.png';
import milan from '../assets/University of Milan.png';
import politecnicoTorino from '../assets/Politecnico di Torino.png';
import florence from '../assets/University of Florence.png';
import padua from '../assets/University of Padua.png';
import trento from '../assets/University of Trento.png';

// Malta
import malta from '../assets/University of Malta.png';
import mcast from '../assets/Malta College of Arts, Science and Technology.png';
import americanMalta from '../assets/American University of Malta.png';
import globalMalta from '../assets/Global College Malta.png';
import lscMalta from '../assets/London School of Commerce Malta.png';
import stMartins from "../assets/St. Martin's Institute of Higher Education.png";

export const COUNTRIES_DATA = [
  {
    id: 'united-kingdom',
    name: 'United Kingdom',
    flag: 'https://flagcdn.com/w160/gb.png',
    image: 'https://images.pexels.com/photos/30721230/pexels-photo-30721230.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    heroImage: 'https://images.pexels.com/photos/30721230/pexels-photo-30721230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    emoji: 'UK',
    overview:
      'The United Kingdom is one of the world\'s most prestigious study destinations, renowned for its centuries-old universities, globally recognized degrees, and multicultural environment. Students benefit from high-quality education, innovative research opportunities, and excellent career prospects while experiencing the rich history and vibrant culture of England, Scotland, Wales, and Northern Ireland.',
    capital: 'London',
    officialLanguage: 'English',
    majorAirports: [
      'London Heathrow (LHR)',
      'London Gatwick (LGW)',
      'Manchester Airport (MAN)',
      'Birmingham Airport (BHX)',
      'Edinburgh Airport (EDI)',
    ],
    climate:
      'Temperate maritime climate with mild summers and cool winters. Rainfall is common throughout the year.',
    popularDestinations: [
      'London',
      'Birmingham',
      'Manchester',
      'Liverpool',
      'Leeds',
      'Glasgow',
      'Edinburgh',
      'Coventry',
    ],
    cityImages: {
      'London': 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Birmingham': 'https://images.pexels.com/photos/32606432/pexels-photo-32606432.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Manchester': 'https://images.pexels.com/photos/28111454/pexels-photo-28111454.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Liverpool': 'https://images.pexels.com/photos/28446647/pexels-photo-28446647.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Leeds': 'https://images.pexels.com/photos/30226376/pexels-photo-30226376.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Glasgow': 'https://images.pexels.com/photos/29978299/pexels-photo-29978299.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Edinburgh': 'https://images.pexels.com/photos/34987668/pexels-photo-34987668.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Coventry': 'https://images.pexels.com/photos/12937641/pexels-photo-12937641.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    },
    popularPrograms: [
      'Business',
      'Engineering',
      'Computer Science',
      'Artificial Intelligence',
      'Data Science',
      'Healthcare',
      'Law',
      'Psychology',
      'Hospitality',
    ],
    programDuration: {
      undergraduate: '3–4 Years',
      postgraduate: '1 Year (Most Master\'s Programs)',
    },
    universities: [
      { name: 'University of Hertfordshire', domain: 'herts.ac.uk', logo: hertfordshire },
      { name: 'Coventry University', domain: 'coventry.ac.uk', logo: coventry },
      { name: 'University of East London (UEL)', domain: 'uel.ac.uk', logo: eastLondon },
      { name: 'University of Greenwich', domain: 'gre.ac.uk', logo: greenwich },
      { name: 'University of Portsmouth', domain: 'port.ac.uk', logo: portsmouth },
      { name: 'De Montfort University', domain: 'dmu.ac.uk', logo: deMontfort },
      { name: 'Northumbria University', domain: 'northumbria.ac.uk', logo: northumbria },
      { name: 'University of Sunderland', domain: 'sunderland.ac.uk', logo: sunderland },
      { name: 'University of Bedfordshire', domain: 'beds.ac.uk', logo: bedfordshire },
      { name: 'University of West London', domain: 'uwl.ac.uk', logo: westLondon },
      { name: 'Birmingham City University', domain: 'bcu.ac.uk', logo: birminghamCity },
      { name: 'Middlesex University London', domain: 'mdx.ac.uk', logo: middlesex },
      { name: 'University of Essex', domain: 'essex.ac.uk', logo: essex },
      { name: 'University of Derby', domain: 'derby.ac.uk', logo: derby },
      { name: 'Anglia Ruskin University', domain: 'aru.ac.uk', logo: angliaRuskin },
    ],
  },
  {
    id: 'usa',
    name: 'United States of America',
    flag: 'https://flagcdn.com/w160/us.png',
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1920&q=85',
    emoji: '🇺🇸',
    overview:
      'The United States is home to many of the world\'s highest-ranked universities and offers unmatched academic flexibility, cutting-edge research facilities, and countless opportunities for innovation. Students gain access to diverse programs, advanced technology, and an internationally connected learning environment.',
    capital: 'Washington, D.C.',
    officialLanguage: 'No federal official language (English is the primary language)',
    majorAirports: [
      'New York (JFK)',
      'Los Angeles (LAX)',
      "Chicago O'Hare (ORD)",
      'Dallas/Fort Worth (DFW)',
      'San Francisco (SFO)',
    ],
    climate:
      'Highly diverse, ranging from tropical and desert climates to continental and alpine climates.',
    popularDestinations: [
      'New York',
      'Boston',
      'Los Angeles',
      'Chicago',
      'San Francisco',
      'Dallas',
    ],
    cityImages: {
      'New York': 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Boston': 'https://images.pexels.com/photos/1123982/pexels-photo-1123982.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Los Angeles': 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Chicago': 'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'San Francisco': 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Dallas': 'https://images.pexels.com/photos/1414467/pexels-photo-1414467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    },
    popularPrograms: [
      'Computer Science',
      'Engineering',
      'Business',
      'Medicine',
      'Aviation',
      'Artificial Intelligence',
      'Finance',
    ],
    programDuration: {
      undergraduate: '4 Years',
      postgraduate: '1–2 Years',
    },
    universities: [
      { name: 'Harvard University', domain: 'harvard.edu', logo: harvard },
      { name: 'Massachusetts Institute of Technology', domain: 'mit.edu', logo: mit },
      { name: 'Stanford University', domain: 'stanford.edu', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Stanford_Cardinal_logo.svg' },
      { name: 'University of California, Berkeley', domain: 'berkeley.edu', logo: berkeley },
      { name: 'Columbia University', domain: 'columbia.edu', logo: columbia },
      { name: 'Yale University', domain: 'yale.edu', logo: yale },
      { name: 'Princeton University', domain: 'princeton.edu', logo: princeton },
      { name: 'University of Chicago', domain: 'uchicago.edu', logo: chicago },
    ],
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: 'https://flagcdn.com/w160/ca.png',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1920&q=85',
    emoji: '🇨🇦',
    overview:
      'Canada is consistently ranked among the world\'s best countries for education, safety, and quality of life. It offers internationally recognized qualifications, diverse communities, modern cities, and outstanding research opportunities, making it one of the most popular destinations for international students.',
    capital: 'Ottawa',
    officialLanguage: 'English & French',
    majorAirports: [
      'Toronto Pearson (YYZ)',
      'Vancouver (YVR)',
      'Montréal (YUL)',
      'Calgary (YYC)',
      'Edmonton (YEG)',
    ],
    climate:
      'Cold winters with snowfall and pleasant summers. Climate varies by province.',
    popularDestinations: [
      'Toronto',
      'Vancouver',
      'Montreal',
      'Ottawa',
      'Calgary',
      'Edmonton',
      'Winnipeg',
    ],
    cityImages: {
      'Toronto': 'https://images.pexels.com/photos/20868549/pexels-photo-20868549.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Vancouver': 'https://images.pexels.com/photos/29240328/pexels-photo-29240328.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Montreal': 'https://images.pexels.com/photos/33825330/pexels-photo-33825330.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Ottawa': 'https://images.pexels.com/photos/30805291/pexels-photo-30805291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Calgary': 'https://images.pexels.com/photos/31228642/pexels-photo-31228642.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Edmonton': 'https://images.pexels.com/photos/19204475/pexels-photo-19204475.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Winnipeg': 'https://images.pexels.com/photos/31721757/pexels-photo-31721757.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    },
    popularPrograms: [
      'Business',
      'Engineering',
      'Computer Science',
      'Nursing',
      'Artificial Intelligence',
      'Cyber Security',
      'Hospitality',
    ],
    programDuration: {
      undergraduate: '4 Years',
      postgraduate: '1–2 Years',
    },
    universities: [
      { name: 'University of Toronto', domain: 'utoronto.ca', logo: toronto },
      { name: 'University of British Columbia', domain: 'ubc.ca', logo: britishColumbia },
      { name: 'McGill University', domain: 'mcgill.ca', logo: mcgill },
      { name: 'University of Waterloo', domain: 'uwaterloo.ca', logo: waterloo },
      { name: 'University of Alberta', domain: 'ualberta.ca', logo: alberta },
      { name: 'Université de Montréal', domain: 'umontreal.ca', logo: montreal },
      { name: 'McMaster University', domain: 'mcmaster.ca', logo: mcmaster },
      { name: 'University of Calgary', domain: 'ucalgary.ca', logo: calgary },
    ],
  },
  {
    id: 'ireland',
    name: 'Ireland',
    flag: 'https://flagcdn.com/w160/ie.png',
    image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=1920&q=85',
    emoji: '🇮🇪',
    overview:
      'Ireland has become one of Europe\'s fastest-growing education destinations, offering globally recognized universities and a dynamic economy driven by leading multinational companies. Students enjoy a friendly English-speaking environment and excellent opportunities in technology, business, and pharmaceutical sectors.',
    capital: 'Dublin',
    officialLanguage: 'English & Irish (Gaeilge)',
    majorAirports: [
      'Dublin (DUB)',
      'Cork (ORK)',
      'Shannon (SNN)',
      'Ireland West Knock (NOC)',
    ],
    climate:
      'Temperate maritime climate with mild temperatures and frequent rainfall.',
    popularDestinations: [
      'Dublin',
      'Cork',
      'Galway',
      'Limerick',
      'Maynooth',
    ],
    cityImages: {
      'Dublin': 'https://images.pexels.com/photos/28376329/pexels-photo-28376329.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Cork': 'https://images.pexels.com/photos/30706978/pexels-photo-30706978.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Galway': 'https://images.pexels.com/photos/33943887/pexels-photo-33943887.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Limerick': 'https://images.pexels.com/photos/15153794/pexels-photo-15153794.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Maynooth': 'https://images.unsplash.com/photo-1568849676085-51415703900f?auto=format&fit=crop&w=600&h=400&q=80',
    },
    popularPrograms: [
      'Data Analytics',
      'Computer Science',
      'Artificial Intelligence',
      'Pharmaceutical Sciences',
      'Business',
      'Finance',
    ],
    programDuration: {
      undergraduate: '3–4 Years',
      postgraduate: '1 Year',
    },
    universities: [
      { name: 'Trinity College Dublin', domain: 'tcd.ie', logo: trinityCollegeDublin },
      { name: 'University College Dublin', domain: 'ucd.ie', logo: universityCollegeDublin },
      { name: 'University of Galway', domain: 'universityofgalway.ie', logo: universityOfGalway },
      { name: 'University College Cork', domain: 'ucc.ie', logo: universityCollegeCork },
      { name: 'Dublin City University', domain: 'dcu.ie', logo: dublinCityUniversity },
      { name: 'University of Limerick', domain: 'ul.ie', logo: universityOfLimerick },
      { name: 'Maynooth University', domain: 'mu.ie', logo: maynoothUniversity },
      { name: 'Technological University Dublin', domain: 'tudublin.ie', logo: technologicalUniversityDublin },
    ],
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: 'https://flagcdn.com/w160/au.png',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1920&q=85',
    emoji: '🇦🇺',
    overview:
      'Australia is internationally recognized for its world-class universities, excellent student support services, and vibrant multicultural society. The country offers modern campuses, high academic standards, and an outstanding lifestyle with beautiful beaches, diverse landscapes, and thriving cities.',
    capital: 'Canberra',
    officialLanguage: 'English',
    majorAirports: [
      'Sydney (SYD)',
      'Melbourne (MEL)',
      'Brisbane (BNE)',
      'Perth (PER)',
      'Adelaide (ADL)',
    ],
    climate:
      'Generally warm climate with mild winters and sunny weather in most regions.',
    popularDestinations: [
      'Sydney',
      'Melbourne',
      'Brisbane',
      'Adelaide',
      'Perth',
      'Gold Coast',
    ],
    cityImages: {
      'Sydney': 'https://images.pexels.com/photos/5707651/pexels-photo-5707651.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Melbourne': 'https://images.pexels.com/photos/414618/pexels-photo-414618.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Brisbane': 'https://images.pexels.com/photos/37416165/pexels-photo-37416165.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Adelaide': 'https://images.pexels.com/photos/38261393/pexels-photo-38261393.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Perth': 'https://images.pexels.com/photos/30835052/pexels-photo-30835052.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Gold Coast': 'https://images.pexels.com/photos/30828089/pexels-photo-30828089.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    },
    popularPrograms: [
      'Engineering',
      'IT',
      'Business',
      'Nursing',
      'Public Health',
      'Education',
      'Construction Management',
    ],
    programDuration: {
      undergraduate: '3–4 Years',
      postgraduate: '1.5–2 Years',
    },
    universities: [
      { name: 'University of Melbourne', domain: 'unimelb.edu.au', logo: melbourne },
      { name: 'University of Sydney', domain: 'sydney.edu.au', logo: sydney },
      { name: 'UNSW Sydney', domain: 'unsw.edu.au', logo: unsw },
      { name: 'Australian National University', domain: 'anu.edu.au', logo: australianNational },
      { name: 'Monash University', domain: 'monash.edu', logo: monash },
      { name: 'University of Queensland', domain: 'uq.edu.au', logo: queensland },
      { name: 'University of Adelaide', domain: 'adelaide.edu.au', logo: adelaide },
      { name: 'University of Technology Sydney', domain: 'uts.edu.au', logo: technologySydney },
    ],
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    flag: 'https://flagcdn.com/w160/nz.png',
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1920&q=85',
    emoji: '🇳🇿',
    overview:
      'New Zealand is known for its welcoming communities, peaceful environment, and globally respected education system. Students enjoy innovative learning, stunning natural scenery, and a balanced lifestyle while earning qualifications recognized around the world.',
    capital: 'Wellington',
    officialLanguage: 'English, Māori, New Zealand Sign Language',
    majorAirports: [
      'Auckland (AKL)',
      'Wellington (WLG)',
      'Christchurch (CHC)',
      'Queenstown (ZQN)',
    ],
    climate:
      'Mild oceanic climate with pleasant summers and cool winters.',
    popularDestinations: [
      'Auckland',
      'Wellington',
      'Christchurch',
      'Hamilton',
      'Dunedin',
    ],
    cityImages: {
      'Auckland': 'https://images.pexels.com/photos/30706012/pexels-photo-30706012.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Wellington': 'https://images.pexels.com/photos/4350631/pexels-photo-4350631.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Christchurch': 'https://images.pexels.com/photos/18138308/pexels-photo-18138308.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Hamilton': 'https://images.pexels.com/photos/37611868/pexels-photo-37611868.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Dunedin': 'https://images.pexels.com/photos/6202342/pexels-photo-6202342.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    },
    popularPrograms: [
      'Business',
      'Agriculture',
      'IT',
      'Engineering',
      'Tourism',
      'Hospitality',
    ],
    programDuration: {
      undergraduate: '3–4 Years',
      postgraduate: '1–2 Years',
    },
    universities: [
      { name: 'University of Auckland', domain: 'auckland.ac.nz', logo: auckland },
      { name: 'University of Otago', domain: 'otago.ac.nz', logo: otago },
      { name: 'Victoria University of Wellington', domain: 'victoria.ac.nz', logo: victoriaWellington },
      { name: 'University of Canterbury', domain: 'canterbury.ac.nz', logo: canterbury },
      { name: 'Massey University', domain: 'massey.ac.nz', logo: massey },
      { name: 'University of Waikato', domain: 'waikato.ac.nz', logo: waikato },
      { name: 'Lincoln University', domain: 'lincoln.ac.nz', logo: lincoln },
      { name: 'Auckland University of Technology', domain: 'aut.ac.nz', logo: aut },
    ],
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: 'https://flagcdn.com/w160/de.png',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1920&q=85',
    emoji: '🇩🇪',
    overview:
      'Germany is one of Europe\'s leading destinations for higher education, particularly in engineering, technology, and applied sciences. Known for academic excellence, strong industry partnerships, and a thriving economy, Germany attracts students from around the globe seeking quality education and career opportunities.',
    capital: 'Berlin',
    officialLanguage: 'German',
    majorAirports: [
      'Frankfurt (FRA)',
      'Munich (MUC)',
      'Berlin Brandenburg (BER)',
      'Düsseldorf (DUS)',
      'Hamburg (HAM)',
    ],
    climate:
      'Temperate climate with warm summers and cold winters.',
    popularDestinations: [
      'Berlin',
      'Munich',
      'Hamburg',
      'Frankfurt',
      'Stuttgart',
      'Cologne',
    ],
    cityImages: {
      'Berlin': 'https://images.pexels.com/photos/31974282/pexels-photo-31974282.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Munich': 'https://images.pexels.com/photos/23106809/pexels-photo-23106809.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Hamburg': 'https://images.pexels.com/photos/21529211/pexels-photo-21529211.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Frankfurt': 'https://images.pexels.com/photos/30094254/pexels-photo-30094254.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Stuttgart': 'https://images.pexels.com/photos/18903434/pexels-photo-18903434.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Cologne': 'https://images.pexels.com/photos/18883682/pexels-photo-18883682.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    },
    popularPrograms: [
      'Mechanical Engineering',
      'Automotive Engineering',
      'Computer Science',
      'Business',
      'Renewable Energy',
      'Robotics',
    ],
    programDuration: {
      undergraduate: '3–4 Years',
      postgraduate: '2 Years',
    },
    universities: [
      { name: 'Technical University of Munich', domain: 'tum.de', logo: technicalUniversityMunich },
      { name: 'Ludwig Maximilian University of Munich', domain: 'lmu.de', logo: ludwigMaximilianMunich },
      { name: 'Heidelberg University', domain: 'uni-heidelberg.de', logo: heidelberg },
      { name: 'RWTH Aachen University', domain: 'rwth-aachen.de', logo: rwthAachen },
      { name: 'Humboldt University of Berlin', domain: 'hu-berlin.de', logo: humboldtBerlin },
      { name: 'Free University of Berlin', domain: 'fu-berlin.de', logo: freeBerlin },
      { name: 'University of Stuttgart', domain: 'uni-stuttgart.de', logo: stuttgart },
      { name: 'Technical University of Berlin', domain: 'tu-berlin.de', logo: technicalBerlin },
    ],
  },
  {
    id: 'france',
    name: 'France',
    flag: 'https://flagcdn.com/w160/fr.png',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1920&q=85',
    emoji: '🇫🇷',
    overview:
      'France is globally admired for its excellence in business, fashion, hospitality, culinary arts, engineering, and design education. Students experience a rich cultural heritage, world-famous cuisine, and vibrant cities while studying in one of Europe\'s leading academic destinations.',
    capital: 'Paris',
    officialLanguage: 'French',
    majorAirports: [
      'Paris Charles de Gaulle (CDG)',
      'Paris Orly (ORY)',
      'Lyon (LYS)',
      'Nice (NCE)',
      'Marseille (MRS)',
    ],
    climate:
      'Temperate climate with warm summers and cool winters.',
    popularDestinations: [
      'Paris',
      'Lyon',
      'Toulouse',
      'Lille',
      'Nice',
      'Bordeaux',
    ],
    cityImages: {
      'Paris': 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Lyon': 'https://images.pexels.com/photos/31666339/pexels-photo-31666339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Toulouse': 'https://images.pexels.com/photos/30753243/pexels-photo-30753243.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Lille': 'https://images.pexels.com/photos/20047229/pexels-photo-20047229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Nice': 'https://images.pexels.com/photos/21255275/pexels-photo-21255275.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Bordeaux': 'https://images.pexels.com/photos/32769460/pexels-photo-32769460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    },
    popularPrograms: [
      'Business',
      'Fashion',
      'Hospitality',
      'Culinary Arts',
      'Engineering',
      'Luxury Brand Management',
    ],
    programDuration: {
      undergraduate: '3 Years',
      postgraduate: '2 Years',
    },
    universities: [
      { name: 'Sorbonne University', domain: 'sorbonne-universite.fr', logo: sorbonne },
      { name: 'Université PSL (Paris Sciences et Lettres)', domain: 'psl.eu', logo: psl },
      { name: 'École Polytechnique', domain: 'polytechnique.edu', logo: ecolePolytechnique },
      { name: 'HEC Paris', domain: 'hec.edu', logo: hecParis },
      { name: 'ESSEC Business School', domain: 'essec.edu', logo: essec },
      { name: 'Université Paris-Saclay', domain: 'universite-paris-saclay.fr', logo: parisSaclay },
      { name: 'INSEAD', domain: 'insead.edu', logo: insead },
      { name: 'Université Grenoble Alpes', domain: 'univ-grenoble-alpes.fr', logo: grenobleAlpes },
    ],
  },
  {
    id: 'sweden',
    name: 'Sweden',
    flag: 'https://flagcdn.com/w160/se.png',
    image: 'https://images.unsplash.com/photo-1551582045-6ec9c11d8697?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1551582045-6ec9c11d8697?auto=format&fit=crop&w=1920&q=85',
    emoji: '🇸🇪',
    overview:
      'Sweden is renowned for its innovative education system, sustainability initiatives, and emphasis on creativity and critical thinking. Students benefit from collaborative learning environments, cutting-edge research, and a high quality of life in one of Europe\'s most progressive countries.',
    capital: 'Stockholm',
    officialLanguage: 'Swedish',
    majorAirports: [
      'Stockholm Arlanda (ARN)',
      'Gothenburg Landvetter (GOT)',
      'Malmö Airport (MMX)',
    ],
    climate:
      'Cold winters with pleasant summers. Southern Sweden experiences milder weather than the north.',
    popularDestinations: [
      'Stockholm',
      'Gothenburg',
      'Malmö',
      'Lund',
      'Uppsala',
      'Linköping',
    ],
    cityImages: {
      'Stockholm': 'https://images.pexels.com/photos/37483382/pexels-photo-37483382.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Gothenburg': 'https://images.pexels.com/photos/31137109/pexels-photo-31137109.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Malmö': 'https://images.pexels.com/photos/30403023/pexels-photo-30403023.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Lund': 'https://images.pexels.com/photos/29999249/pexels-photo-29999249.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Uppsala': 'https://images.pexels.com/photos/29115724/pexels-photo-29115724.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Linköping': 'https://images.pexels.com/photos/33984903/pexels-photo-33984903.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    },
    popularPrograms: [
      'Engineering',
      'Artificial Intelligence',
      'Computer Science',
      'Business',
      'Sustainability',
      'Design',
    ],
    programDuration: {
      undergraduate: '3 Years',
      postgraduate: '1–2 Years',
    },
    universities: [
      { name: 'Lund University', domain: 'lu.se', logo: lund },
      { name: 'Uppsala University', domain: 'uu.se', logo: uppsala },
      { name: 'Stockholm University', domain: 'su.se', logo: stockholm },
      { name: 'KTH Royal Institute of Technology', domain: 'kth.se', logo: kth },
      { name: 'Chalmers University of Technology', domain: 'chalmers.se', logo: chalmers },
      { name: 'University of Gothenburg', domain: 'gu.se', logo: gothenburg },
      { name: 'Linköping University', domain: 'liu.se', logo: linkoping },
      { name: 'Swedish University of Agricultural Sciences', domain: 'slu.se', logo: slu },
    ],
  },
  {
    id: 'finland',
    name: 'Finland',
    flag: 'https://flagcdn.com/w160/fi.png',
    image: 'https://images.pexels.com/photos/31430640/pexels-photo-31430640.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    heroImage: 'https://images.pexels.com/photos/31430640/pexels-photo-31430640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    emoji: '🇫🇮',
    overview:
      'Finland is globally recognized for its innovative education system, high-quality research, and focus on work-life balance. Students enjoy a safe, clean environment, stunning natural beauty, and a progressive society that values creativity and critical thinking.',
    capital: 'Helsinki',
    officialLanguage: 'Finnish & Swedish',
    majorAirports: [
      'Helsinki-Vantaa (HEL)',
      'Rovaniemi (RVN)',
      'Oulu (OUL)',
      'Turku (TKU)',
    ],
    climate:
      'Cold winters with snow and mild summers. Northern Finland experiences polar night in winter.',
    popularDestinations: [
      'Helsinki',
      'Espoo',
      'Tampere',
      'Turku',
      'Oulu',
      'Rovaniemi',
    ],
    cityImages: {
      'Helsinki': 'https://images.pexels.com/photos/33646687/pexels-photo-33646687.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Espoo': 'https://images.pexels.com/photos/38298139/pexels-photo-38298139.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Tampere': 'https://images.pexels.com/photos/12472552/pexels-photo-12472552.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Turku': 'https://images.pexels.com/photos/16835229/pexels-photo-16835229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Oulu': 'https://images.pexels.com/photos/14436373/pexels-photo-14436373.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Rovaniemi': 'https://images.pexels.com/photos/30301008/pexels-photo-30301008.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    },
    popularPrograms: [
      'Engineering',
      'Information Technology',
      'Business',
      'Education',
      'Environmental Science',
      'Design',
    ],
    programDuration: {
      undergraduate: '3–4 Years',
      postgraduate: '1–2 Years',
    },
    universities: [
      { name: 'University of Helsinki', domain: 'helsinki.fi', logo: helsinki },
      { name: 'Aalto University', domain: 'aalto.fi', logo: aalto },
      { name: 'University of Turku', domain: 'utu.fi', logo: turku },
      { name: 'Tampere University', domain: 'tuni.fi', logo: tampere },
      { name: 'University of Oulu', domain: 'oulu.fi', logo: oulu },
      { name: 'University of Eastern Finland', domain: 'uef.fi', logo: easternFinland },
      { name: 'LUT University', domain: 'lut.fi', logo: lut },
      { name: 'Åbo Akademi University', domain: 'abo.fi', logo: aboAkademi },
    ],
  },
  {
    id: 'italy',
    name: 'Italy',
    flag: 'https://flagcdn.com/w160/it.png',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1920&q=85',
    emoji: '🇮🇹',
    overview:
      'Italy combines centuries of academic tradition with modern innovation, making it an attractive destination for international students. It is particularly renowned for architecture, fashion, design, engineering, arts, and business education, while offering a rich cultural and historical experience.',
    capital: 'Rome',
    officialLanguage: 'Italian',
    majorAirports: [
      'Rome Fiumicino (FCO)',
      'Milan Malpensa (MXP)',
      'Venice Marco Polo (VCE)',
      'Bologna (BLQ)',
    ],
    climate:
      'Mediterranean climate with warm summers and mild winters.',
    popularDestinations: [
      'Rome',
      'Milan',
      'Bologna',
      'Florence',
      'Turin',
      'Padua',
    ],
    cityImages: {
      'Rome': 'https://images.pexels.com/photos/33073763/pexels-photo-33073763.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Milan': 'https://images.pexels.com/photos/33604305/pexels-photo-33604305.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Bologna': 'https://images.pexels.com/photos/31809559/pexels-photo-31809559.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Florence': 'https://images.pexels.com/photos/36956321/pexels-photo-36956321.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Turin': 'https://images.pexels.com/photos/36754908/pexels-photo-36754908.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Padua': 'https://images.pexels.com/photos/36420377/pexels-photo-36420377.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    },
    popularPrograms: [
      'Architecture',
      'Fashion Design',
      'Engineering',
      'Business',
      'Arts',
      'Culinary Studies',
    ],
    programDuration: {
      undergraduate: '3 Years',
      postgraduate: '2 Years',
    },
    universities: [
      { name: 'University of Bologna', domain: 'unibo.it', logo: bologna },
      { name: 'Sapienza University of Rome', domain: 'uniroma1.it', logo: sapienza },
      { name: 'Politecnico di Milano', domain: 'polimi.it', logo: politecnicoMilano },
      { name: 'University of Milan', domain: 'unimi.it', logo: milan },
      { name: 'Politecnico di Torino', domain: 'polito.it', logo: politecnicoTorino },
      { name: 'University of Florence', domain: 'unifi.it', logo: florence },
      { name: 'University of Padua', domain: 'unipd.it', logo: padua },
      { name: 'University of Trento', domain: 'unitn.it', logo: trento },
    ],
  },
  {
    id: 'malta',
    name: 'Malta',
    flag: 'https://flagcdn.com/w160/mt.png',
    image: 'https://images.pexels.com/photos/31572519/pexels-photo-31572519.jpeg?auto=compress&cs=tinysrgb&w=800',
    heroImage: 'https://images.pexels.com/photos/34159711/pexels-photo-34159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    emoji: '🇲🇹',
    overview:
      'Malta is a beautiful Mediterranean island nation offering English-medium education in a safe, welcoming, and multicultural environment. Its pleasant climate, affordable living costs, and growing higher education sector make it an increasingly popular destination for international students.',
    capital: 'Valletta',
    officialLanguage: 'Maltese & English',
    majorAirports: [
      'Malta International Airport (MLA)',
    ],
    climate:
      'Mediterranean climate with warm summers and mild winters.',
    popularDestinations: [
      'Valletta',
      'Msida',
      'Sliema',
      "St. Julian's",
    ],
    cityImages: {
      'Valletta': 'https://images.pexels.com/photos/30595068/pexels-photo-30595068.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Msida': 'https://images.pexels.com/photos/30051017/pexels-photo-30051017.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      'Sliema': 'https://images.pexels.com/photos/36971189/pexels-photo-36971189.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      "St. Julian's": 'https://images.pexels.com/photos/34350854/pexels-photo-34350854.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    },
    popularPrograms: [
      'Business',
      'Information Technology',
      'Tourism',
      'Hospitality',
      'Healthcare',
    ],
    programDuration: {
      undergraduate: '3–4 Years',
      postgraduate: '1–2 Years',
    },
    universities: [
      { name: 'University of Malta', domain: 'um.edu.mt', logo: malta },
      { name: 'Malta College of Arts, Science and Technology', domain: 'mcast.edu.mt', logo: mcast },
      { name: 'American University of Malta', domain: 'aum.edu.mt', logo: americanMalta },
      { name: 'Global College Malta', domain: 'globalcollegemalta.com', logo: globalMalta },
      { name: 'London School of Commerce Malta', domain: 'lscmalta.com', logo: lscMalta },
      { name: "St. Martin's Institute of Higher Education", domain: 'stmartins.edu', logo: stMartins },
    ],
  },
];
