import { useState } from "react";
import axios from "axios";

const CreateMahasiswa = () => {
  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [prodi, setProdi] = useState("");

  async function submitHandler(e) {
    try {
      axios
        .post("http://localhost:5000/mahasiswa", {
          nim,
          nama,
          angkatan,
          prodi,
        })
        .then((response) => {
          console.log(response);
        });
      alert("penambahan data sukses");
      //clearInput()
    } catch (e) {
      throw Error(e.message);
    }
  }

  return (
    <div>
      <div className="container mt-4">
        <form className="w-50 mx-auto" onSubmit={submitHandler}>
          <h1 className="w-75 text-center">Input Mahasiswa</h1>
          <div className="w-75">
            <div className="form-floating">
              <input className="form-control mb-2" id="nim" type="text" placeholder="NIM" value={nim} onChange={(e) => setNim(e.target.value)}></input>
              <label htmlFor="nim">NIM</label>
            </div>
            <div className="form-floating">
              <input className="form-control mb-2" id="nama" type="text" placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)}></input>
              <label htmlFor="nama">NAMA</label>
            </div>
            <div className="form-floating">
              <input className="form-control mb-2" id="angkatan" type="text" placeholder="Angkatan" value={angkatan} onChange={(e) => setAngkatan(e.target.value)}></input>
              <label htmlFor="nama">ANGKATAN</label>
            </div>
            <div className="form-floating">
              <input className="form-control mb-2" id="prodi" type="text" placeholder="Prodi" value={prodi} onChange={(e) => setProdi(e.target.value)}></input>
              <label htmlFor="prodi">PRODI</label>
            </div>
          </div>
          <div className="w-75 d-flex flex-row-reverse">
            <button className="btn btn-primary" type="submit">
              SIMPAN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMahasiswa;
