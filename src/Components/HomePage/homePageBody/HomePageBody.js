import HomePageRoutes from "./HomePageRoutes";
import LayoutFixedNav from "./LayoutFixedNav";

function HomePageBody() {
  return (
    <div>
      <LayoutFixedNav>
        <HomePageRoutes />
      </LayoutFixedNav>
    </div>
  );
}

export default HomePageBody;
