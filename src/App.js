import React, { Suspense } from 'react'
const PocMfFooter = React.lazy(() => import("pocMfFooter/App"));

const App = () => {
    return (
        <div>
            <div>
                <h1>this is a NAV</h1>
            </div>
            <Suspense fallback={"loading..."}>
                <PocMfFooter label={"A label from Nav"} />
            </Suspense>
        </div>
    );
}

export default App;