import Category from "../Components/Category";
import CookieItem from "../Components/CookieItem";
import ProductDisplay from "../Components/ProductDisplay";
import Sort from "../Components/Sort";

export default function Cookies() {
  return (
    <>
      <ProductDisplay />
      <Sort />
      <Category />
      <CookieItem />
    </>
  );
}
