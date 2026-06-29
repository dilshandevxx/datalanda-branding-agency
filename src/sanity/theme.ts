import { buildLegacyTheme } from 'sanity'

const props = {
  '--my-white': '#ffffff',
  '--my-black': '#111111', // Matches global background
  '--my-gray': '#666666',
  '--my-red': '#db4437',
  '--my-yellow': '#f4b400',
  '--my-green': '#0f9d58',
}

export const myTheme = buildLegacyTheme({
  // Base theme colors
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': props['--my-gray'],
  '--gray-base': props['--my-gray'],

  '--component-bg': props['--my-black'],
  '--component-text-color': props['--my-white'],

  // Brand colors
  '--brand-primary': props['--my-white'],

  // Default button
  '--default-button-color': props['--my-gray'],
  '--default-button-primary-color': props['--my-white'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  // State
  '--state-info-color': props['--my-white'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  // Navbar
  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],

  // Focus
  '--focus-color': props['--my-white'],
})
