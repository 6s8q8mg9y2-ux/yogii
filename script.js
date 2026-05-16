function cekTidur() {
    let umur = parseInt(document.getElementById("umur").value);
    let jamTidur = parseInt(document.getElementById("jamTidur").value);
    let jamBangun = parseInt(document.getElementById("jamBangun").value);
  
    let minTidur = 0;
    let maxTidur = 0;
    let lamaTidur = 0;
    let hasil = "";
  
    if (
      isNaN(umur) ||
      isNaN(jamTidur) ||
      isNaN(jamBangun)
    ) {
      document.getElementById("hasil").innerHTML =
        "⚠️ Isi semua data dulu!";
      return;
    }
  
    if (umur <= 12) {
      minTidur = 9;
      maxTidur = 12;
    } else if (umur <= 17) {
      minTidur = 8;
      maxTidur = 10;
    } else {
      minTidur = 7;
      maxTidur = 9;
    }
  
    if (jamBangun > jamTidur) {
      lamaTidur = jamBangun - jamTidur;
    } else {
      lamaTidur = (24 - jamTidur) + jamBangun;
    }
  
    if (lamaTidur < minTidur) {
      hasil = "😴 Kamu kurang tidur!";
    } else if (lamaTidur > maxTidur) {
      hasil = "🛌 Kamu kebanyakan tidur!";
    } else {
      hasil = "✅ Tidur kamu sudah cukup!";
    }
  
    document.getElementById("hasil").innerHTML =
      `Lama tidur: ${lamaTidur} jam <br> ${hasil}`;
  }