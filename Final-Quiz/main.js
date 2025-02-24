import { API, sampleErrorData, sampleSuccessData } from "./support.js";

/**
 * TODO:
 * Lengkapi fungsi processData di bawah ini dengan ketentuan:
 * 1. Mengembalikan data dari pemanggilan API.fetch berdasarkan argumen `data` yang diberikan.
 * 2. Membangkitkan error jika API.fetch mengembalikan Promise reject.
 *
 * Parameter:
 * - `data` merupakan array of object dengan struktur { delay, simulateError }.
 * - Jalankan kode untuk melihat contoh nilai argumen `data`
 */
function processData(data) {
  // kode di bawah hanya untuk melihat nilai data. Silakan hapus untuk menjawab kuis.
  return Promise.all(
    data.map(({ delay, simulateError }) => API.fetch(delay, simulateError))
  ).catch((error) => {
    throw new Error(error);
  });
}

processData(sampleErrorData).then(console.log).catch(console.log); // Throw exception: Error from delay 50
processData(sampleSuccessData).then(console.log).catch(console.log); // expected output: ['Data from delay 100', 'Data from delay 50']

// - ✕ Fungsi processData membangkitkan error jika ada Promise yang rejected
// - ✕ Fungsi processData harus memanggil fungsi `API.fetch` untuk mendapatkan data
