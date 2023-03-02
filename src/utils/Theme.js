const SIZES = {
  //Common Sizes
  base: 8,
  text: 14,
  padding: 20,

  // Text Sizes
  h1: 36,
  h2: 28,
  h3: 24,
  h4: 22,
  p: 18,
};

const SPACING = {
  xs: SIZES.base * 0.5, // 4
  s: SIZES.base, // 8
  sm: SIZES.base * 1.5, // 12
  m: SIZES.base * 2, // 16
  md: SIZES.base * 2.5, // 20
  l: SIZES.base * 3, // 24
  xl: SIZES.base * 3.5, // 28
  xll: SIZES.base * 4, // 32
};

export const Theme = { ...SIZES, ...SPACING };
