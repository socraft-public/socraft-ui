export const formatDate = (timestamp: number): string => {
  const date: any = new Date(timestamp);

  if (!isNaN(date)) {
    const year =
      String(date.getFullYear()).split("")[2] +
      String(date.getFullYear()).split("")[3];
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${day}.${month}.${year}`;
  } else {
    return "";
  }
};

export const getRawDate = (timestamp: number): string => {
  const date: any = new Date(timestamp);

  if (!isNaN(date)) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  } else {
    return "";
  }
};
