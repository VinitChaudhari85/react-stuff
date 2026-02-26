//The default behaviour here is: when we enter the new path in url or click on links of anchor tag
//you can notice that it refreshes the entire application, because it kind of sends an HTTP request
//and by that we can lose any application level state or data on the site by doing it this way

//So if we want to prevent this default of refreshing the site, then we can use Link
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <h1>This is my homepage, <Link to="/products">Go to products page.</Link></h1>
    </>
  );
}
