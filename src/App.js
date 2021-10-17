import React, { Suspense } from 'react'
const PocMfFooter = React.lazy(() => import("pocMfFooter/App"));

const App = () => {
    return (
        <div>
            <div>
                <h1>App1</h1>
            </div>
            <Suspense fallback={"loading..."}>
                <PocMfFooter label={"this label cames from app 1"} />
            </Suspense>
        </div>
    );
}

export default App;