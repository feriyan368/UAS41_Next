import { useRouter } from "next/dist/client/router";
const nim = () => {
  const mahasiswa = [
    { nim: "1120", nilai: "AB" },
    { nim: "1121", nilai: "A" },
    { nim: "1122", nilai: "BA" },
  ];

  const router = useRouter();
  const { nim } = router.query;
  const data = mahasiswa.find((m) => m.nim == nim);
  return (
    <>
      <p>NIM : {nim}</p>
      <p>Nilai:{data.nilai}</p>
    </>
  );
};
export default nim;
