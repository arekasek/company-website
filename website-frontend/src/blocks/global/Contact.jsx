import React from "react";

export default function Contact() {
  return (
    <div className="w-full h-fit bg-[#444444c9] p-12 flex flex-row">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2315.067159511178!2d17.742053577132527!3d54.53231118532972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fddd408a56dbc9%3A0xc806e81eeff74232!2zV29qLVDFgm90LiBVc8WCdWdpIMWbbHVzYXJza2ll!5e0!3m2!1spl!2spl!4v1728575543967!5m2!1spl!2spl"
        style={{
          border: "15px solid rgb(226 232 240);;",
          width: "50%",
          height: "500px",
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="p-4"
      ></iframe>
      <div className="w-[50%] bg-slate-200 p-4 flex flex-col justify-center">
        <h1 className="text-7xl UNCAGE-Bold">Kontakt</h1>
        <div className="text-2xl Absans-Regular">
          <p>Woj-Płot Ogrodzenia Balustrady Kowalstwo - Wojciech Asmus</p>
          <p>Telefon: 609 693 204</p>
          <p>Email: wojplot@wp.pl</p>
          <p>Adres: Dworcowa 8, 84-300 Lębork</p>
        </div>
      </div>
    </div>
  );
}
