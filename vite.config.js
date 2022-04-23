import { resolve } from 'path'

export const build = {
  rollupOptions: {
    input: {
      main: resolve(__dirname, 'index.html'),
      simple: resolve(__dirname, 'pages/observable-simple/observable-simple.html'),
      interpolation: resolve(__dirname, 'pages/observable-interpolation/observable-interpolation.html')
    }
  }
}