import { Quote } from "../components/Quote";
import { Auth } from "../components/Auth";
import { PageWrapper } from "../components/PageWrapper";
export const Signup = () => {
  return (
    <PageWrapper>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <Auth type="signup" />
          </div>
          <div className="hidden md:block">
            <Quote />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
