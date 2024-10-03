const maestroStart = [5018, 5020, 5038, 5893, 6304, 6759, 6761, 6762, 6763];
const masterCardStart = [51, 52, 53, 54, 55];
const masterCardStartInterval = [222100, 272099];
const visaStart = [4];
const mirStart = [22];

export function determinateCard(value) {
  const preparedValue = value.replaceAll(" ", "");
  let typeOfCard = "";

  for (let i = 0; i < maestroStart.length; i++) {
    if (
      preparedValue.startsWith(maestroStart[i].toString()) &&
      (preparedValue.length === 16 || preparedValue.length === 19)
    ) {
      typeOfCard = "Maestro";
      break;
    }
  }

  if (!typeOfCard) {
    for (let i = 0; i < masterCardStart.length; i++) {
      if (
        preparedValue.startsWith(masterCardStart[i].toString()) &&
        preparedValue.length === 16
      ) {
        typeOfCard = "MasterCard";
        break;
      }
    }
  }

  if (!typeOfCard) {
    for (
      let i = masterCardStartInterval[0];
      i <= masterCardStartInterval[1];
      i++
    ) {
      if (preparedValue.startsWith(i.toString())) {
        typeOfCard = "MasterCard";
        break;
      }
    }
  }

  if (!typeOfCard) {
    for (let i = 0; i < visaStart.length; i++) {
      if (
        preparedValue.startsWith(visaStart[i].toString()) &&
        (preparedValue.length === 13 ||
          preparedValue.length === 16 ||
          preparedValue.length === 19)
      ) {
        typeOfCard = "Visa";
        break;
      }
    }
  }

  if (!typeOfCard) {
    for (let i = 0; i < mirStart.length; i++) {
      if (
        preparedValue.startsWith(mirStart[i].toString()) &&
        preparedValue.length >= 16 &&
        preparedValue.length <= 19
      ) {
        typeOfCard = "Mir";
        break;
      }
    }
  }

  return typeOfCard;
}
