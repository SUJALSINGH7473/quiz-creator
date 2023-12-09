import DataDisplay from "@/components/displayTable/DataDisplay";
import DataDisplayNoLinks from "@/components/displayTable/DataDisplayNoLinks";
import Head from "next/head";
import { useRouter } from "next/router";

// TODO: Fetch data from the server using axios

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Quiz-creator</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <nav className="flex justify-between m-2 p-5">
        <div className="bg-[#B52326] text-white text-[10px] px-2 md:px-3 rounded-lg md:text-lg">
          <button onClick={() => router.push("/SessionCreator")}>
            + Create Quiz Session
          </button>
        </div>

        <input
          type="text"
          placeholder="Search by CMS_id or Test_name"
          className="rounded-md border-black border-solid border text-xs md:text-md md:px-4 md:w-1/5"
        />
      </nav>

      <DataDisplay />
      <div className="text-xl flex justify-center p-2 ">
        <h1>Sessions With No links</h1>
      </div>
      <DataDisplayNoLinks />
    </>
  );
}
