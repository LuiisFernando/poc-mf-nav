import React, { Suspense } from 'react'
const PocMfFooter = React.lazy(() => import("pocMfFooter/App"));

const App = () => {
    return (
        <div>
            <div>
                <h1>this is a NAV</h1>
            </div>
            <Suspense fallback={"loading..."}>
                <PocMfFooter label={"this label cames from app 1"} />
            </Suspense>
        </div>
    );
}

export default App;