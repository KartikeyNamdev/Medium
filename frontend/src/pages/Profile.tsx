import { AppBar } from "../components/AppBar";
import { PageWrapper } from "../components/PageWrapper";

const Profile = () => {
  return (
    <PageWrapper>
      <>
        <AppBar />
        <div className="max-w-4xl mx-auto mt-12 px-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-3xl font-bold">
              K
            </div>

            <div>
              <h1 className="text-2xl font-bold">Kartikey</h1>
              <p className="text-gray-500">
                Writing about life, tech & growth.
              </p>
              <p className="text-sm text-gray-400 mt-1">Joined Oct 2024</p>
            </div>
          </div>

          <div className="mt-10 border-t pt-6">
            <h2 className="font-semibold text-lg mb-4">Your Stories</h2>
            <p className="text-gray-500">(Coming soon — user specific blogs)</p>
          </div>
        </div>
      </>
    </PageWrapper>
  );
};

export default Profile;
