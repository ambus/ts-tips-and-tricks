type Subset<T, U> = Pick<
  T,
  {
    [K in keyof T]: T[K] extends U ? K : never;
  }[keyof T]
>;

interface Person {
  name: string;
  age: number;
  greet: (message?: string) => void;
}

type JustMethods = Subset<Person, String>; //greet: (message?: string) => void;
