type SomeType = {
  required: string;
  alsoRequired: string;
  extremelyRequired: string;
};

const opt: Partial<SomeType> = {
  extremelyRequired: "OK",
};