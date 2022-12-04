import AnimeCursor from "../components/AnimeCursor";

function NotFound() {
  return (
    <div className="container_error">
      <head>
        <title>404 - Not Found</title>
      </head>
      <AnimeCursor />
      <h1 className="title_error">404 Not found</h1>
      <div className="content_error">
        <div className="error_box">
          <h1 className="error_code">
            <span className="color_change">404</span> Not found
          </h1>
          <p className="error_message">
            Something went wrong and we can't reach the requested URL-path
            <span className="color_change">...</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
