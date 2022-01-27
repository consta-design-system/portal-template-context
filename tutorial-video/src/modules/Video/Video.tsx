import React, {
    FunctionComponent,
    useEffect,
    useContext
} from 'react';

import {
    Route,
    useRouteMatch,
    useHistory,
    useLocation
} from 'react-router-dom';

import {ContextProvider} from '@consta/tutorial-context-provider';

import {Content} from './Content';
import {Tabs} from './Tabs';
import {items} from './data';

type Props = JSX.IntrinsicElements['section'];

const Video: FunctionComponent<Props> = (props) => {
    const {url} = useRouteMatch();
    const history = useHistory();
    const location = useLocation();

    const [defaultItem] = items;
    const rootPath = url === '/' ? url : `${url}/`;

    // Кейсы, для проверки

    // Стрим
    // http://localhost:3006
    // http://localhost:3006/
    // http://localhost:3006/-ei6RqZilYI
    // http://localhost:3006/-ei6RqZilYI (по F5)
    //
    // Хост
    // http://localhost:3001
    // http://localhost:3001/
    // http://localhost:3001/tutorial
    // http://localhost:3001/tutorial (по F5)
    // http://localhost:3001/tutorial/
    // http://localhost:3001/tutorial/ (по F5) — не работает
    // http://localhost:3001/tutorial/-ei6RqZilYI
    // http://localhost:3001/tutorial/-ei6RqZilYI (по F5) — не работает
    // http://localhost:3001/tutorial/-ei6RqZilYI/ не работает
    // http://localhost:3001/tutorial/-ei6RqZilYI/ (по F5) — не работает

    useEffect(() => {
        if (location.pathname === url) {
            history.replace(`${rootPath}${defaultItem.videoId}`);
        }
    }, [location]);

    const {name} = useContext(ContextProvider);

    return (
        <section {...props}>
            <div>Стрим: {name}</div>

            <Route path={`${rootPath}:videoId`}>
                <Tabs />
                <Content />
            </Route>
        </section>
    );
};

export {Video};
