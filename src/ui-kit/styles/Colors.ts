export enum Colors {
  TRANSPARENT = 'transparent',
  SESAME_STREET_GREEN = '#00a870',
  ELECTION_NIGHT = '#120626',
  LEMON_CURRY = '#cca01d',
  BLUEBONNET = '#1c1cf0',
  SUNSET_RIDERS = '#d70040',
  HANADA_BLUE = '#044f67',
  OCEAN_STORM = '#3d6a7f',
  CARROT_ORANGE = '#ed9121',
  TROLL_SLAYER_ORANGE = '#f5a34c',
  ARAGON_GREEN = '#4eb787',
  LUXE_LILAC = '#a8a4b0',
}

export enum LightColors {
  ACTIVITY_INDICATOR = Colors.ELECTION_NIGHT,
  BACKGROUND = Colors.SESAME_STREET_GREEN,
  // text
  MAIN_TEXT = Colors.ELECTION_NIGHT,
  SECONDARY_TEXT = Colors.LEMON_CURRY,
  LINK_TEXT = Colors.BLUEBONNET,
  ERROR_TEXT = Colors.SUNSET_RIDERS,
  // buttons
  STATIC_BUTTONS = Colors.HANADA_BLUE,
  PRESSED_BUTTONS = Colors.OCEAN_STORM,
  STATIC_SECONDARY_BUTTONS = Colors.CARROT_ORANGE,
  PRESSED_SECONDARY_BUTTONS = Colors.TROLL_SLAYER_ORANGE,
  BUTTONS_LOADER = Colors.TRANSPARENT,
  TRANSPARENT_BUTTONS = Colors.TRANSPARENT,
  // inputs
  PLACEHOLDER_INPUT = Colors.OCEAN_STORM,
  DISABLE_INPUT = Colors.OCEAN_STORM,
  BACKGROUND_INPUT = Colors.ARAGON_GREEN,
  ERROR_INPUT = Colors.SUNSET_RIDERS,
  TRANSPARENT_INPUT = Colors.TRANSPARENT,
  BORDER_INPUT = Colors.OCEAN_STORM,
  // modals
  MODAL_BACKGROUND = Colors.OCEAN_STORM,
  MODAL_CONTAINER_BACKGROUND = Colors.LUXE_LILAC,
}
