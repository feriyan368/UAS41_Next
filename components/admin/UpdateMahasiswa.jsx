import axios from "axios";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UpdateMahasiswa = () => {
  const [_nim, setNim] = useState("");
  const [_nama, setNama] = useState("");
  const [_angkatan, setAngkatan] = useState("");
  const [_prodi, setProdi] = useState("");

  const router = useRouter();
  const { nim, nama, angkatan, prodi } = router.query;

  useEffect(() => {
    if (typeof nim == "string") {
      setNim(nim);
    }
    if (typeof nama == "string") {
      setNama(nama);
    }
    if (typeof angkatan == "string") {
      setAngkatan(angkatan);
    }
    if (typeof prodi == "string") {
      setProdi(prodi);
    }
  }, [nim, nama, angkatan, prodi]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      axios
        .put(`http://localhost:5000/mahasiswa/${_nim}`, {
          nim: _nim,
          nama: _nama,
          angkatan: _angkatan,
          prodi: _prodi,
        })
        .then((response) => {
          console.log(response);
        });

      alert("Update Data Sukses");
      Router.push(`/admin/datamahasiswa`);
    } catch (e) {
      console.log({ message: e.message });
    }
  };
  return (
    <div>
      <div className="container mt-4">
        <form className="w-50 mx-auto" onSubmit={submitHandler}>
          <h1 className="w-75 font-bold text-center mb-3">Edit data Mahasiswa</h1>
          <div className="w-75">
            <div className="form-floating">
              <input className="form-control mb-2" id="nim" type="text" placeholder="NIM" value={_nim} onChange={(e) => setNim(e.target.value)} />
              <label htmlFor="nim">NIM</label>
            </div>

            <div className="form-floating">
              <input className="form-control mb-2" id="nama" type="text" placeholder="nama" value={_nama} onChange={(e) => setNama(e.target.value)} />
              <label htmlFor="nama">Nama</label>
            </div>

            <div className="form-floating">
              <input className="form-control mb-2" id="angkatan" type="text" placeholder="angkatam" value={_angkatan} onChange={(e) => setAngkatan(e.target.value)} />
              <label htmlFor="angkatan">Angkatan</label>
            </div>

            <div className="form-floating">
              <input className="form-control mb-2" id="prodi" type="text" placeholder="prodi" value={_prodi} onChange={(e) => setProdi(e.target.value)} />
              <label htmlFor="prodi">Prodi</label>
            </div>
            <div className="d-flex flex-row-reverse">
              <button className="btn btn-primary" type="submit">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMahasiswa;
