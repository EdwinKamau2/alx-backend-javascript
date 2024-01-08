const getStudentsByLocation = (students, city) => {
  const arrayObjec = students.filter((funtion) => funtion.location === city);
  return arrayObjec;
};

export default getStudentsByLocation;
