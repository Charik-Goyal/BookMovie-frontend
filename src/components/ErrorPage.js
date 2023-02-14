import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError()

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-6">
                    <h1 className="mt-3">Oops!</h1>
                    <p>Sorry, an unexpected error has occured</p>
                    <p>
                        <em>{error.statusText || error.Message}</em>
                    </p>
                </div>
            </div>
        </div>
    )
}