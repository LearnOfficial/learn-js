//@ts-ignore
export const countryFlagEmoji = (c) =>
  String.fromCodePoint(
    ...[...c.toUpperCase()].map((x) => 0x1f1a5 + x.charCodeAt())
  );
