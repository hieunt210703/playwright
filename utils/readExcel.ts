import * as XLSX from "xlsx";
import path from "path";

export function readAccounts(filePath: string) {
  const fullPath = path.resolve(filePath);
  console.log(fullPath);
  const workbook = XLSX.readFile(fullPath);

  const sheet = workbook.Sheets[workbook.SheetNames[0]];

  const data = XLSX.utils.sheet_to_json(sheet);

  return data;
}
