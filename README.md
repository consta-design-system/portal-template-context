# Портальный архетип приложения с контекстной зависимостью | Дизайн-система Consta

В этом репозитории лежит пример приложения, которое можно использовать как шаблон: доработать или создать на его основе что-то новое.

По сути, это расширенная версия [portal-template](https://github.com/consta-design-system/portal-template.git), в которой реализована возможность для приложений ходить друг к другу за данными, в том числе в родительское.

## Что такое контекстный провайдер

Контекстный провайдер — это модуль, в котором экспортируется переменная, обернутая в `createContext`.

Пример:

```ts
import {createContext} from 'react';

// Описание типов данных
type Context = {
    name?: string;
};

// Данные, которые будут браться по умолчанию
const defaultData = {name: 'Unknown'};

// Контекстный провайдер
const ContextProvider = createContext<Context>(defaultData);

export {ContextProvider};
```

## Как прокидывать данные

Пример того, как можно прокинуть данные в родительском приложении:

```ts
import React, {FunctionComponent} from 'react';
import {ContextProvider} from '@consta/tutorial-context-provider'; // здесь должен быть ваш модуль

const data = {name: 'Super Man'};

const Root: FunctionComponent<Props> = () => (
    <ContextProvider.Provider value={data}>
        <App />
    </ContextProvider.Provider>
);
```

## Как получать данные

Пример того, как получить данные из родительского приложения:

```tsx
import React, {useContext, FunctionComponent} from 'react';

const Example: FunctionComponent<Props> = (props) => {
    const {name} = useContext(ContextProvider);

    return <div>{name}</div>;
};
```

## Где размещать контекстный провайдер

Вынесите контекстный провайдер в отдельный пакет.


## Как запустить локально

> Выполняйте шаги ниже в том случае, если пакет с вашими контекстными данными еще не опубликован.

1. Установите контекстную зависимость

Если на этом шаге прав для выполнения команды `npm link` будет недостаточно, то вы можете продолжить установку от рута (`sudo npm link`) либо использовать [nwm](https://github.com/nvm-sh/nvm).

```
cd tutorial-context-provider
npm install
npm link

cd tutorial
npm link @consta/tutorial-context-provider

cd ../tutorial-video
npm link @consta/tutorial-context-provider
```

В крайнем случае можно сделать так:

```
cd portal-context-template
ln -s "$(pwd)/tutorial-context-provider" tutorial/node_modules/\@consta
ln -s "$(pwd)/tutorial-context-provider" tutorial-video/node_modules/\@consta
```

2. Перейдите в `package.json` в директориях tutorial и tutorial-video и замените название версии `"@consta/tutorial-context-provider": "file:..."` на `"@consta/tutorial-context-provider": "0.0.1"`.
