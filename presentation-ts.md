# TypeScript Tips and Tricks
### _by Szymon Standarski 2020_

## 001 Optional Chaining 
__TS 3.7__

note: _Każdy z nas spotkał się z taką sytuacją:_
![błąd Cannot read property 'year' of undefined ](./src/typescript/001-optional-chaining/001-optional-chaining.png)

Spotykane rozwiązania:
* if za if'em :) 
![if za ifem](./src/typescript/001-optional-chaining/001-optional-chaining_1.png)
* "nowoczesna" wersja if za if'em :)
![if za ifem 2](./src/typescript/001-optional-chaining/001-optional-chaining_2.png)
* logic expression
![logic expression](./src/typescript/001-optional-chaining/001-optional-chaining_3.png)
* Try/catch
![try catch](./src/typescript/001-optional-chaining/001-optional-chaining_4.png)
* Lodash
![lodash](./src/typescript/001-optional-chaining/001-optional-chaining_5.png)

#### I tutaj wchodzi cały na biało "The Optional Chaining Operator"
![cały na biało](./src/typescript/001-optional-chaining/001-optional-chaining_6.png)

![przykłady użycia](./src/typescript/001-optional-chaining/001-optional-chaining_7.png)


## 002 The nullish coalescing operator (??)
#### JS & TS
_The nullish coalescing operator_ jest operatorem logiczny który zwraca prawy operator wtedy gdy lewy jest `null` lub `undefined`. Jest to nowość z najnoweszego ECS więc od razu automatycznie występuje w TS.

Podstawowa różnica pomiędzy `||` a `??` jest taka że operator `||` w przypadku gdy wartość po lewej stronie będzie `= false` zwróci prawą stronę przez co w wielu przypadkach może nie być dobrym rozwiązaniem np. `0` `''`

![nullish](./src/typescript/002-nullish-coalescing-operator/002-nullish-coalescing-operator.png)


## 003 Partial
_Jeśli potrzebujecie aby część parametrów była opcjonalna możecie użyć operatora `Partial<Type>`. Dzięki temu nie trzeba dodwać w istniejącym typie znaków zapytania, albo tworzyć nowy typ_

![partial](./src/typescript/003-partial/003-partial.png)

## 004 Rodzina :)
_Szybka ciekawostka_
_Screen z konsoli chrome'a_

![rodzina](./src/typescript/004-person/004-person.png)
![mikrofon](./src/typescript/004-person/004-mikrofon.png)

## 005 Warunkowe filtrowanie w TS

![warunkowe filtrowanie](./src/typescript/005-conditional-filters/005-conditional-filters.png)

## 006 wybieranie parametrów na podstawie typu

![wybieranie parametrów na podstawie typu](./src/typescript/006/006.png)

## post-fix expression operator

console.log(textEl!.value); 
// 👍 with "!" we assure TypeScript
// that 'textEl' is not null/undefined

