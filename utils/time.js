function formatDateToWIB() {
    let date = new Date();
    // 01 Feb 2025 11:22 WIB
    let monthList = [
      "Jan", // bukan 1, tapi 0 ==> bukan nama bulan, bukan angka bulannya, tapi index
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt", // bukan 10 tapi 9, karena yang diambil indexnya
      "Nov",
      "Des",
    ];
  
    let day = date.getDate().toString().padStart(2, "0");
    let month = monthList[date.getMonth()];
    let year = date.getFullYear();
  
    let hours = date.getHours().toString().padStart(2, "0");
    let minutes = date.getMinutes().toString().padStart(2, "0");
  
    let formattedDate = `${day} ${month} ${year} ${hours}:${minutes} WIB`;
  
    return formattedDate;
  }

  module.exports={
    formatDateToWIB,
  }