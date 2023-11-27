
export const themes = [
  { name: 'Binom',
    styleName: 'default-theme',
    themeVars: {
      chartColors:{
        palette1: ['#616161', '#ffc72a', '#40798c','#699529', '#870064','lightblue','#61C9A8','#899E8B','#F64740'],
        paletteSingle: ['#616161','#616161','#616161','#616161','#616161','#616161','#616161','#919191'],
        palette2: ['#adadad','#616161','#333333'],
        palette3: ['#c7db51','#699529','#424242','#870064'],
        palette4: ['#009999','orange','lightblue','blue'],
        palette1Dark: ['orange', '#ffc72a', 'lightblue','#699529', 'magenta','yellow','#61C9A8','#899E8B','#F64740'],
        palette2Dark: ['#616161','#efefef','white'],
        palette3Dark: ['#c7db51','#699529','#efefef','#870064'],
        palette4Dark: ['#009999','lightblue','#919191','#40798c'],
        paletteSingleDark: ['#616161','#616161','#616161','#616161','#616161','#616161','#616161','#efefef'],
        cardColor: '#efefef',
        cardColorDark: '#616161'
      },
      qrCode:{
        bgLight: '#fff',
        code: '#424242',
        bgDark: '#424242',
        codeDark: '#fff',
      },
      background: {
        default: {
          disabled: false,
          type: 'carbon',
          colorLight: '#616161',
          colorDark: '#090A0F',
          colorLight2: '#424242',
          colorDark2: '#333',
        },
        onRoute: [
          {
            route: '/home',
            forAllChilds: false,
            values: {
              disabled: false,
              type: 'stars',
              colorLight: '#616161',
              colorDark: '#090A0F',
              colorLight2: '#424242',
              colorDark2: '#424242',
            }
          },
          {
            route: '/ego/alter',
            forAllChilds: false,
            values: {
              disabled: false,
              type: 'stars',
              colorLight: '#616161',
              colorDark: '#090A0F',
              colorLight2: '#424242',
              colorDark2: '#424242',
            }
          },

          

        ]
      },
    }
  },


  { name: 'Nature Two',
    styleName: 'nature-two',
    themeVars: {
      chartColors:{
        palette1: ['#616161', '#ffc72a', '#40798c','#699529', '#870064'],
        paletteSingle: ['#616161'],
        palette2: ['#adadad','#616161','#333333'],
        palette3: ['#c7db51','#699529','#424242','#870064'],
        palette4: ['#009999','orange','lightblue','blue'],
        palette1Dark: ['orange', '#ffc72a', 'lightblue','#699529', 'magenta'],
        palette2Dark: ['#616161','#efefef','white'],
        palette3Dark: ['#c7db51','#699529','#efefef','#870064'],
        palette4Dark: ['#009999','lightblue','#919191','#40798c'],
        paletteSingleDark: ['#616161'],
        cardColor: '#efefef',
        cardColorDark: '#40424f'
      },
      qrCode:{
        bgLight: '#fff',
        code: '#424242',
        bgDark: '#424242',
        codeDark: '#fff',
      },
      background: {
        default: {
          disabled: false,
          type: 'wave',
          colorLight: '#c7db51',
          colorDark: '#c7db51',
          colorLight2: '#222823',
          colorDark2: '#3d3d3d',
        },
        onRoute: [
          {
            route: '/photo',
            forAllChilds: true,
            values: {
              disabled: false,
              type: 'wave',
              colorLight: '#c7db51',
              colorDark: '#c7db51',
              colorLight2: '#222823',
              colorDark2: '#3d3d3d',
            }
          }
        ]
      },
    }
  },

  { name: 'KSV Blue',
    styleName: 'ksv-theme',
    themeVars: {
      chartColors:{
        palette1: ['#616161', '#ffc72a', '#40798c','#699529', '#870064'],
        paletteSingle: ['#616161'],
        palette2: ['#adadad','#616161','#333333'],
        palette3: ['#c7db51','#699529','#424242','#870064'],
        palette4: ['#009999','orange','lightblue','blue'],
        palette1Dark: ['orange', '#ffc72a', 'lightblue','#699529', 'magenta'],
        palette2Dark: ['#616161','#efefef','white'],
        palette3Dark: ['#c7db51','#699529','#efefef','#870064'],
        palette4Dark: ['#009999','lightblue','#919191','#40798c'],
        paletteSingleDark: ['#616161'],
        cardColor: '#efefef',
        cardColorDark: '#40424f'
      },
      qrCode:{
        bgLight: '#fff',
        code: '#424242',
        bgDark: '#424242',
        codeDark: '#fff',
      },
      background: {
        default: {
          disabled: false,
          type: 'gradient',
          colorLight: '#fff',
          colorDark: '#616161',
          colorLight2: '#2b5393',
          colorDark2: '#3d3d3d',
        },
        
      },
    }
  },
  
]

export function getThemes() {
  return themes;
}