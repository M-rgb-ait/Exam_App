import useCheckDelete from "./_action/use-sheck-delete";

export default function DeletemyAcunte() {
  const { CheckDelete } = useCheckDelete();

  // const handeleClicked = () => {
  //   CheckDelete();
  // };
  return (
    <div
      className="text-red-800 text-lg font-semibold mt-2"
      onClick={() => CheckDelete()}
    >
      delete my acunte
    </div>
  );
}
