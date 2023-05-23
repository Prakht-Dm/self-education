import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routerConfig} from "app/provider/router/ui/routeConfig/routeConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {
                    routerConfig.map(({path, element}) => (
                        <Route key={path} path={path} element={element} />
                    ))}
            </Routes>
        </Suspense>
    );
};
