import { TeamsCategoryColors, TeamsCategoryColorSchemeMapping } from './types';

export const categoryColors: TeamsCategoryColors = {
  redDark: {
    100: '#FAF6F6',
    150: '#F2E4E5',
    200: '#E7CED1',
    250: '#CF9BA1',
    300: '#C07B82',
    350: '#C98289',
    400: '#A23D48',
    450: '#A03843',
    500: '#96232F',
    550: '#88232E',
    600: '#861F2A',
    650: '#721A23',
    700: '#69232A',
    750: '#521319',
    800: '#4D2327',
    850: '#3D2326',
    900: '#292424'
  },
  red: {
    100: '#FCF7F8',
    150: '#F8E8EA',
    200: '#F3D7D9',
    250: '#E7ADB2',
    300: '#DF9299',
    350: '#DC8990',
    400: '#D06069',
    450: '#CF5B65',
    500: '#CA4A55',
    550: '#B6454F',
    600: '#B6424C',
    650: '#993840',
    700: '#883B42',
    750: '#6E282E',
    800: '#603135',
    850: '#492C2E',
    900: '#2A2425'
  },
  orangeDark: {
    100: '#FCF7F6',
    150: '#F8E8E4',
    200: '#F2D5CD',
    250: '#E5AA99',
    300: '#DD8E77',
    350: '#DA846B',
    400: '#CD5937',
    450: '#CC5634',
    500: '#C7431D',
    550: '#B33F1E',
    600: '#B23C1A',
    650: '#973216',
    700: '#85361F',
    750: '#6D240F',
    800: '#5E2F21',
    850: '#482A22',
    900: '#2B2423'
  },
  orange: {
    100: '#FEF9F7',
    150: '#FCECE9',
    200: '#FBDED7',
    250: '#F7BBAD',
    300: '#F4A593',
    350: '#F39D89',
    400: '#F07A60',
    450: '#EF785D',
    500: '#EE694B',
    550: '#D66046',
    600: '#D65E43',
    650: '#B24932',
    700: '#9C4D3B',
    750: '#823929',
    800: '#6D3C32',
    850: '#51332C',
    900: '#2D2725'
  },
  orangeLight: {
    100: '#FEFBF7',
    150: '#FEF3E8',
    200: '#FDEAD4',
    250: '#FCD4A8',
    300: '#FCC68B',
    350: '#FBC181',
    400: '#FAAB54',
    450: '#FAA950',
    500: '#FAA03E',
    550: '#E0903A',
    600: '#E08F37',
    650: '#A45D11',
    700: '#A56F34',
    750: '#895722',
    800: '#72502D',
    850: '#533F29',
    900: '#2D2925'
  },
  yellowDark: {
    100: '#FDFBF6',
    150: '#FBF3E4',
    200: '#F8EACD',
    250: '#F1D499',
    300: '#EDC678',
    350: '#ECC26E',
    400: '#E5AC39',
    450: '#E4AA35',
    500: '#E2A11F',
    550: '#CA911F',
    600: '#CA901B',
    650: '#92660D',
    700: '#966E20',
    750: '#7C5811',
    800: '#685022',
    850: '#4E3F22',
    900: '#2C2924'
  },
  yellow: {
    100: '#FEFCF5',
    150: '#FEF6E2',
    200: '#FEEFCB',
    250: '#FEDF95',
    300: '#FDD472',
    350: '#FDD066',
    400: '#FDC030',
    450: '#FDBF2B',
    500: '#FDB814',
    550: '#E3A615',
    600: '#E4A512',
    650: '#8F680D',
    700: '#A67D1B',
    750: '#805E0B',
    800: '#72581E',
    850: '#544420',
    900: '#2D2922'
  },
  brown: {
    100: '#FBF9F8',
    150: '#F3EDEA',
    200: '#E9DDD8',
    250: '#D3BBAF',
    300: '#C4A494',
    350: '#BF9D8C',
    400: '#A87A63',
    450: '#A67760',
    500: '#9D684E',
    550: '#8E6049',
    600: '#8C5D46',
    650: '#764E3B',
    700: '#6D4C3C',
    750: '#56392B',
    800: '#503C33',
    850: '#3F322D',
    900: '#292625'
  },
  oliveDark: {
    100: '#F8F9F7',
    150: '#EBEEE7',
    200: '#DBE1D5',
    250: '#B7C2AA',
    300: '#9EAD8D',
    350: '#96A683',
    400: '#708757',
    450: '#6D8453',
    500: '#5E7741',
    550: '#566C3D',
    600: '#546B3A',
    650: '#475A31',
    700: '#465535',
    750: '#334123',
    800: '#38412E',
    850: '#31362A',
    900: '#272724'
  },
  olive: {
    100: '#FAFBF8',
    150: '#F1F5EC',
    200: '#E6EDDC',
    250: '#CCDBB8',
    300: '#BBD0A1',
    350: '#B5CC99',
    400: '#9BBA75',
    450: '#99B872',
    500: '#8EB163',
    550: '#809F5A',
    600: '#7F9E58',
    650: '#56742F',
    700: '#637849',
    750: '#4E6136',
    800: '#4B563A',
    850: '#3C4231',
    900: '#292926'
  },
  greenDark: {
    100: '#F5F9F7',
    150: '#E5EFE9',
    200: '#CFE1D7',
    250: '#9EC3AE',
    300: '#7DAE93',
    350: '#72A78A',
    400: '#408861',
    450: '#3C865D',
    500: '#27794C',
    550: '#266E46',
    600: '#236D44',
    650: '#1D5C39',
    700: '#26563B',
    750: '#154229',
    800: '#254232',
    850: '#25362C',
    900: '#252725'
  },
  green: {
    100: '#F6FBF9',
    150: '#E5F5ED',
    200: '#D1ECDF',
    250: '#A1DABD',
    300: '#82CDA8',
    350: '#78C9A0',
    400: '#48B67F',
    450: '#45B57C',
    500: '#30AD6E',
    550: '#2F9B64',
    600: '#2B9B62',
    650: '#248353',
    700: '#2B7550',
    750: '#1A5E3C',
    800: '#29553E',
    850: '#274134',
    900: '#242826'
  },
  tealDark: {
    100: '#F6F8F9',
    150: '#E5EBED',
    200: '#CEDADD',
    250: '#9BB4BA',
    300: '#7B9CA3',
    350: '#7FA3AB',
    400: '#3D6E79',
    450: '#386A75',
    500: '#235A67',
    550: '#23535E',
    600: '#1F515C',
    650: '#1A444E',
    700: '#24454C',
    750: '#133138',
    800: '#23373C',
    850: '#243033',
    900: '#252627'
  },
  teal: {
    100: '#F6F9FA',
    150: '#E9F0F2',
    200: '#D6E3E7',
    250: '#ABC6CE',
    300: '#8FB3BE',
    350: '#85ACB8',
    400: '#5A8F9F',
    450: '#578D9E',
    500: '#458193',
    550: '#417686',
    600: '#3E7484',
    650: '#34626F',
    700: '#375B66',
    750: '#254650',
    800: '#2F454C',
    850: '#2C383C',
    900: '#262828'
  },
  tealLight: {
    100: '#F8FCFC',
    150: '#EBF7F7',
    200: '#DBF1F1',
    250: '#B5E3E3',
    300: '#9DD9DB',
    350: '#96D6D8',
    400: '#70C8CA',
    450: '#6DC7C9',
    500: '#5DC1C3',
    550: '#55ADAF',
    600: '#53AEAF',
    650: '#37797B',
    700: '#468183',
    750: '#33696B',
    800: '#395B5C',
    850: '#314646',
    900: '#272A2A'
  },
  blueDark: {
    100: '#F5F7FA',
    150: '#E0E7F2',
    200: '#C7D4E8',
    250: '#8CA7D0',
    300: '#668AC0',
    350: '#6991CC',
    400: '#1E53A3',
    450: '#1A50A1',
    500: '#003D97',
    550: '#053988',
    600: '#003788',
    650: '#002E72',
    700: '#0F3268',
    750: '#002152',
    800: '#182D4D',
    850: '#1D293D',
    900: '#242528'
  },
  blue: {
    100: '#F6F8FB',
    150: '#E3EAF3',
    200: '#CDDAEA',
    250: '#99B3D4',
    300: '#779AC6',
    350: '#7FA3D0',
    400: '#376BAB',
    450: '#3469A9',
    500: '#1D58A0',
    550: '#1D5190',
    600: '#1A4F90',
    650: '#164279',
    700: '#20426E',
    750: '#0F3057',
    800: '#213650',
    850: '#232F3F',
    900: '#252629'
  },
  purpleDark: {
    100: '#F7F6FA',
    150: '#E8E7F2',
    200: '#D6D4E8',
    250: '#ADA8D1',
    300: '#918AC2',
    350: '#928BC5',
    400: '#5D53A5',
    450: '#5A50A4',
    500: '#483D9A',
    550: '#443A8C',
    600: '#40368A',
    650: '#362E75',
    700: '#3A336B',
    750: '#272154',
    800: '#312D4E',
    850: '#2C293D',
    900: '#262529'
  },
  purple: {
    100: '#F9F9FB',
    150: '#EFEDF5',
    200: '#E2DEED',
    250: '#C3BDDC',
    300: '#AFA6D0',
    350: '#A99FCC',
    400: '#8B7DBA',
    450: '#877AB8',
    500: '#7B6CB1',
    550: '#70629F',
    600: '#6E609E',
    650: '#5D5286',
    700: '#584E78',
    750: '#443B61',
    800: '#443D56',
    850: '#383342',
    900: '#282729'
  },
  maroon: {
    100: '#FBF7F9',
    150: '#F4E6EE',
    200: '#EBD3E1',
    250: '#D6A5C3',
    300: '#C988AF',
    350: '#CC87B1',
    400: '#AF5089',
    450: '#AD4C87',
    500: '#A5397A',
    550: '#953770',
    600: '#94336D',
    650: '#7D2B5C',
    700: '#723057',
    750: '#5A1F42',
    800: '#522B42',
    850: '#412836',
    900: '#2A2527'
  },
  pink: {
    100: '#FDF7F9',
    150: '#FAE7EE',
    200: '#F5D3DF',
    250: '#ECA4BE',
    300: '#E687A8',
    350: '#E47CA1',
    400: '#DA4E7F',
    450: '#DA4A7D',
    500: '#D6376F',
    550: '#C03465',
    600: '#C13164',
    650: '#A22954',
    700: '#8F2F50',
    750: '#751E3C',
    800: '#642A3E',
    850: '#4B2834',
    900: '#2B2426'
  },
  smokeDark: {
    100: '#F6F6F6',
    150: '#E8E8E8',
    200: '#D5D5D5',
    250: '#AAAAAA',
    300: '#8E8E8E',
    350: '#939393',
    400: '#5A5A5A',
    450: '#565656',
    500: '#444444',
    550: '#404040',
    600: '#3D3D3D',
    650: '#333333',
    700: '#373737',
    750: '#252525',
    800: '#2B2A2A',
    850: '#282828',
    900: '#262525'
  },
  smokeLight: {
    100: '#F9F9F9',
    150: '#EDEDED',
    200: '#DFDFDF',
    250: '#BEBEBE',
    300: '#A9A9A9',
    350: '#A1A1A1',
    400: '#818181',
    450: '#7E7E7E',
    500: '#707070',
    550: '#676767',
    600: '#646464',
    650: '#555555',
    700: '#525151',
    750: '#3D3D3D',
    800: '#353434',
    850: '#2E2D2D',
    900: '#272626'
  },
  steelDark: {
    100: '#F8F9F9',
    150: '#ECEEEF',
    200: '#DDE1E2',
    250: '#BBC2C4',
    300: '#A5AEB1',
    350: '#9DA7AB',
    400: '#7B898D',
    450: '#78868B',
    500: '#69797E',
    550: '#606E73',
    600: '#5E6D71',
    650: '#4F5B5F',
    700: '#4E5659',
    750: '#394245',
    800: '#3D4244',
    850: '#343637',
    900: '#272727'
  },
  steelLight: {
    100: '#FBFBFB',
    150: '#F3F3F5',
    200: '#EAEDEE',
    250: '#D4DADC',
    300: '#C7C6D0',
    350: '#C1CACC',
    400: '#ACABBB',
    450: '#A9B5B9',
    500: '#A0AEB2',
    550: '#919DA1',
    600: '#8F9C9F',
    650: '#637074',
    700: '#6F7678',
    750: '#585761',
    800: '#515556',
    850: '#404243',
    900: '#292828'
  },
  neon: {
    100: '#FAFEDF',
    150: '#F4FBC4',
    200: '#E9F1AC',
    250: '#E5F18F',
    300: '#D9E388',
    350: '#C8D464',
    400: '#BDCB4C',
    450: '#B7C640',
    500: '#A8B63A',
    550: '#99A43B',
    600: '#909A45',
    650: '#899338',
    700: '#7A8337',
    750: '#656C2B',
    800: '#50571E',
    850: '#3C4212',
    900: '#272B0E'
  }
};

const createCategoryColorScheme = (color: string, customValues = {}) => {
  return {
    foreground: categoryColors[color][750],
    foreground1: categoryColors[color][400],
    background: categoryColors[color][200],
    ...customValues
  };
};

export const categoryColorScheme: TeamsCategoryColorSchemeMapping = {
  redDark: createCategoryColorScheme('redDark'),
  red: createCategoryColorScheme('red'),
  orangeDark: createCategoryColorScheme('orangeDark'),
  orange: createCategoryColorScheme('orange'),
  orangeLight: createCategoryColorScheme('orangeLight'),
  yellowDark: createCategoryColorScheme('yellowDark'),
  yellow: createCategoryColorScheme('yellow'),
  brown: createCategoryColorScheme('brown'),
  oliveDark: createCategoryColorScheme('oliveDark'),
  olive: createCategoryColorScheme('olive'),
  greenDark: createCategoryColorScheme('greenDark'),
  green: createCategoryColorScheme('green'),
  tealDark: createCategoryColorScheme('tealDark'),
  teal: createCategoryColorScheme('teal'),
  tealLight: createCategoryColorScheme('tealLight'),
  blueDark: createCategoryColorScheme('blueDark'),
  blue: createCategoryColorScheme('blue'),
  purpleDark: createCategoryColorScheme('purpleDark'),
  purple: createCategoryColorScheme('purple'),
  maroon: createCategoryColorScheme('maroon'),
  pink: createCategoryColorScheme('pink'),
  smokeDark: createCategoryColorScheme('smokeDark'),
  smokeLight: createCategoryColorScheme('smokeLight'),
  steelDark: createCategoryColorScheme('steelDark'),
  steelLight: createCategoryColorScheme('steelLight'),
  neon: createCategoryColorScheme('neon'),
  formatting: {
    foreground1: categoryColors.red[600],
    background1: categoryColors.red[300],
    foreground2: categoryColors.orangeDark[400],
    background2: categoryColors.orange[300],
    foreground3: categoryColors.yellow[400],
    background3: categoryColors.yellow[300],
    foreground4: categoryColors.neon[450],
    background4: categoryColors.neon[200],
    foreground5: categoryColors.green[600],
    background5: categoryColors.green[300],
    foreground6: categoryColors.tealLight[650],
    background6: categoryColors.tealLight[300],
    foreground7: categoryColors.blueDark[400],
    background7: categoryColors.blueDark[200],
    foreground8: categoryColors.maroon[500],
    background8: categoryColors.maroon[200]
  }
};