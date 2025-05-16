import CollectedPointList from "../_components/CollectedPointList";
import CreateButton from "@/app/components/button/CreateButton";

const collectedPointList = async () => {
  return (
    <>
      <div className="flex flex-col gap-y-4 w-full">
        <div className="text-midnightBlue font-title font-bold text-2xl text-center mt-4">
          {"POINT DE COLLECTE"}
        </div>
        <CreateButton path={"/dashboard/add-collected-point"} />
        <div className="mx-4 flex justify-center flex-col">
          <h1 className="text-2xl font-title text-oliveGreen text-center ">
            {"Liste de mes points de collectes : "}
          </h1>
        </div>
        <CollectedPointList />
      </div>
    </>
  );
};

export default collectedPointList;
