interface ColorMap {
  black: string;
  red: string;
  green: string;
  yellow: string;
  blue: string;
  magenta: string;
  cyan: string;
  white: string;
  grey: string;
  "bright-red": string;
  "bright-green": string;
  "bright-yellow": string;
  "bright-blue": string;
  "bright-magenta": string;
  "bright-cyan": string;
  "bright-white": string;
}

const FOREGROUND_COLORS: ColorMap = {
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  grey: "\x1b[90m",
  "bright-red": "\x1b[91m",
  "bright-green": "\x1b[92m",
  "bright-yellow": "\x1b[93m",
  "bright-blue": "\x1b[94m",
  "bright-magenta": "\x1b[95m",
  "bright-cyan": "\x1b[96m",
  "bright-white": "\x1b[97m",
};

const BACKGROUND_COLORS: ColorMap = {
  black: "\x1b[40m" as string,
  red: "\x1b[41m" as string,
  green: "\x1b[42m" as string,
  yellow: "\x1b[43m" as string,
  blue: "\x1b[44m" as string,
  magenta: "\x1b[45m" as string,
  cyan: "\x1b[46m" as string,
  white: "\x1b[47m" as string,
  grey: "\x1b[100m" as string,
  "bright-red": "\x1b[101m" as string,
  "bright-green": "\x1b[102m" as string,
  "bright-yellow": "\x1b[103m" as string,
  "bright-blue": "\x1b[104m" as string,
  "bright-magenta": "\x1b[105m" as string,
  "bright-cyan": "\x1b[106m" as string,
  "bright-white": "\x1b[107m" as string,
};

interface StringStyles {
  string: string;
  resetAfter: boolean;
  backgroundColor?: keyof ColorMap;
  foregroundColor?: keyof ColorMap;
  brightText?: boolean;
  dimText?: boolean;
  italic?: boolean;
  underscore?: boolean;
  doubleUnderscore?: boolean;
  strikeThrough?: boolean;
  reverseColors?: boolean;
}

type StringStylesArray = StringStyles[];

function colorfulConsole(stringObjectArray: StringStylesArray): void {
  if (!stringObjectArray || stringObjectArray.length === 0) {
    return;
  }
  const finalString = stringObjectArray.map((stringObject) => {
    return applyStringStyles(stringObject);
  });

  console.log(finalString.join(""));
}

function applyStringStyles(stringObject: StringStyles): string {
  let styledString = stringObject.string;

  if (stringObject.backgroundColor) {
    styledString =
      BACKGROUND_COLORS[stringObject.backgroundColor] + styledString;
  }

  if (stringObject.foregroundColor) {
    styledString =
      FOREGROUND_COLORS[stringObject.foregroundColor] + styledString;
  }

  if (stringObject.brightText) {
    styledString = "\x1b[1m" + styledString + "\x1b[22m";
  }

  if (stringObject.dimText) {
    styledString = "\x1b[2m" + styledString + "\x1b[22m";
  }

  if (stringObject.italic) {
    styledString = "\x1b[3m" + styledString + "\x1b[23m";
  }

  if (stringObject.underscore) {
    styledString = "\x1b[4m" + styledString + "\x1b[24m";
  }

  if (!stringObject.underscore && stringObject.doubleUnderscore) {
    styledString = "\x1b[21m" + styledString + "\x1b[24m";
  }

  if (stringObject.strikeThrough) {
    styledString = "\x1b[9m" + styledString + "\x1b[29m";
  }

  if (stringObject.reverseColors) {
    styledString = "\x1b[7m" + styledString + "\x1b[27m";
  }

  return stringObject.resetAfter ? styledString + "\x1b[0m" : styledString;
}

colorfulConsole([
  {
    string: "First String, ",
    resetAfter: false,
    backgroundColor: "blue",
    brightText: true,
  },
  {
    string: "Second String, ",
    resetAfter: false,
    underscore: true,
    italic: true,
    dimText: true,
  },
  {
    string: "Third String",
    resetAfter: true,
    doubleUnderscore: true,
    strikeThrough: true,
    reverseColors: true,
    foregroundColor: "bright-green",
  },
]);
